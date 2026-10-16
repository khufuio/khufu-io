# Cold outbound khufu : diagnostic du générateur de leads (2026-10-16)

> Todo `cmtt6t8q`. Rapport de diagnostic et de proposition. **Aucun email envoyé, aucune
> campagne lancée ni modifiée.** Toutes les lectures sont en lecture seule : le CSV, le code HQ,
> `hq.db` via `hq_state_read` et `hq_outbound_status`.

## TL;DR

| # | Question | Réponse |
|---|---|---|
| 1 | Est-ce un générateur ? | **Non.** C'est un fichier curé à la main le 2026-09-27, relu à l'identique chaque matin à 07:00. Aucun code ne découvre d'entreprise nouvelle. Les scripts de sourcing existent, mais rien ne les lance : il n'y a pas de boucle. |
| ⚠️ | Les 67 ont-ils été contactés ? | **Non, aucun.** Ils ont été approuvés et importés le 2026-10-06. Ils sont tous `pending` à l'étape 0, et **0 envoi** existe en base. « Already contacted » veut dire « déjà dans la campagne », pas « a reçu un mail ». |
| 2 | 192/118/38 ou 236/114/67 ? | **236 / 114 / 67 est à jour depuis le 2026-09-27 à 21:42** (commit HQ `be07e5b39`, vague 2). 192/118/38 date de la vague 1, une heure plus tôt. Le 2026-10-07, le groom a **ré-écrit** la todo de 67 vers 38, à tort. |
| 3a | « warmup day 0 » ? | **Ni reset ni bug.** Le compteur compte les jours où un mail est réellement parti. Il y en a 0. Le « warm-up démarré fin septembre » n'a jamais existé : le job seed a tourné une fois le 09-30, puis a été supprimé le même jour (décision `cmunn701`). |
| 3b | `conversionsCommand` ? | Câbler : ~½ journée, mais khufu-io n'a ni base, ni Stripe, ni `.env` sur hq-fsn. Gain mesuré aujourd'hui : **0** (0 des 67 recoupe les 34 contacts HQ ou les sites des sociétés). **Pas maintenant.** |
| 4 | Source renouvelable | Recommandation : **d'abord envoyer les 67**, puis **Apollo Basic sur un mois** pour atteindre le seuil de test de 1 000 mails. Industrialiser la chaîne gratuite (option A) ou PredictLeads (option B) seulement si le test est positif. Détail au §4. |

---

## 1. Diagnostic : le générateur n'est pas un générateur

### Ce que fait le code

- `config/projects/khufu.yaml` (HQ) déclare `outbound.source.type: curated-csv`, `path: docs/khufu/leads/liste-v1-signaux-dates.csv`, `only.priority: [P1]`.
- `src/lib/leadsources/curatedCsv.ts` lit **ce fichier et rien d'autre**. `leadsFromCsv()` filtre (`only` → `sendable=yes` → `sourceUrl` http(s) → `vars_*` remplies), puis découpe par curseur. Le commentaire du code le dit lui-même : *« at the end of the file it returns `null`, which means "start over": re-reading a curated file costs nothing »*. Le fichier est donc relu en boucle par conception.
- Le pool (`src/lib/outbound/pool.ts`) retire ensuite tout ce qui est déjà en `OutboundContact`. Les 67 y sont depuis le 06/10, d'où **67 rendus, 67 « already contacted », 0 ajouté**, chaque jour, pour toujours.

### Ce que contient le fichier

- 236 lignes. `collected_on` vaut `2026-09-27` (223 lignes) ou `2026-09-10` (13 lignes, le pilote). **Aucune ligne n'a été ajoutée depuis le 27 septembre.**
- Le fichier a été modifié par trois commits, tous le 2026-09-27 entre 20:16 et 21:42 (`087f69544`, `8cacef998`, `be07e5b39`). Il est figé depuis.
- Les signaux datent du 2026-07-01 au 2026-09-25. Âge des 67 P1 envoyables au 16/10 : 11 ont ≤ 30 j, 21 entre 31 et 60 j, 15 entre 61 et 90 j, **20 ont plus de 90 j** (max 105 j). L'accroche « {{company}} {{signal}} on {{signalDate}} » s'abîme chaque semaine où rien ne part.
- Qualité des 67 : 49 boîtes génériques (`hello@`, `contact@`…) et 18 personnelles. 10 sont en confiance A, 57 en B. 0 adresse vérifiée SMTP (le port 25 sortant est bloqué sur hq-fsn).

### Les briques d'un générateur existent, la boucle non

`docs/khufu/leads/tooling/` (HQ) contient une chaîne **gratuite, sans compte** :

| Script | Rôle |
|---|---|
| `harvest_rss.py` | Flux RSS d'EU-Startups, tech.eu, Sifted, uktech.news, Maddyness, Wamda (levées) |
| `harvest_li.py` | Offres LinkedIn Jobs en recherche publique, avec date exacte |
| `jobdetail.py` | Auteur et texte de l'offre (c'est là que se voit un CTO existant) |
| `ch.py`, `fr.py` | Registres UK (Companies House) et FR (data.gouv) |
| `v1/legalscan.py`, `merge.py`, `finalize.py`, `contract_fix.py` | Adresses publiées, dédoublonnage, envoyabilité, contrat de copy |

Ces scripts ont été lancés **à la main par une session agent**, deux fois, le 27/09. Rien ne les planifie (`hq_job_health` : seuls « Cold outbound discovery » et « Cold outbound send » existent, et le premier ne fait que relire le CSV). Le README note même « passe hebdomadaire : remplacer `r2592000` par `r604800` », mais cette passe n'a jamais été créée.

**Conclusion : ton cadrage est juste. Le « générateur » est une liste statique, relue par un job qui ressemble à un générateur.** Le funnel affiché par HQ est exact, mais il fait passer une relecture pour une découverte.

### ⚠️ Le vrai bouchon aujourd'hui n'est pas en amont

Lu dans `hq.db` :

| Fait | Valeur |
|---|---|
| `OutboundApproval` khufu-founders-v1 | 67 contacts, approuvé le 2026-10-06 12:58:09Z, importé 12:58:13Z, non révoqué |
| `OutboundContact` | 67 lignes, toutes `status=pending`, `stepIndex=0` |
| `OutboundSend` pour la campagne | **0** |
| `OutboundCampaign.status` / `warmupStartedOn` | `active` / `NULL` |

Pourquoi rien ne part : khufu n'est pas en `autopilot`. C'est voulu : *« There is no `autopilot` and there must not be »*. `runOutboundSendPass()` (`src/lib/outbound/autopilot.ts`) **saute donc khufu sans écrire de ligne** (`if (!projectOnAutopilot(...)) continue;`). L'envoi attend qu'un humain appuie sur *send* dans `/studio/outbound/khufu` (`startSendPane`), et personne ne l'a fait depuis 10 jours.

Deux défauts HQ en découlent. Ils ne sont pas corrigés ici, ce n'était pas la mission :
1. **Le libellé « already contacted »** compte toute ligne `OutboundContact`, y compris `pending` sans aucun envoi. Sur khufu, il fait croire que la liste est épuisée alors qu'elle est intacte.
2. **Le saut silencieux** dans `runOutboundSendPass` contredit le propre commentaire du code (*« a pass that skips a campaign without a line is the ten-silent-day failure »*). « Cold outbound send · ok » s'affiche alors que 67 personnes attendent un geste depuis 10 jours, et c'est exactement le cas que ce commentaire décrit.

Même avec un vrai générateur, rien ne partirait tant que ce geste manque.

---

## 2. L'écart 192/118/38 contre 236/114/67

| Version | Commit HQ | Horodatage | Lignes | Envoyables (total) | P1 lignes | P1 envoyables |
|---|---|---|---|---|---|---|
| Vague 1 | `087f69544`, `8cacef998` | 2026-09-27 20:16 / 20:37 | 192 | 118 | 70 | **38** |
| Vague 2 (actuelle) | `be07e5b39` (merge `a4aafa937`) | 2026-09-27 21:42 | **236** | 141 | **114** | **67** |

- La vague 2 a ajouté 44 lignes P1 (fichiers `w2_p1_fr` 23, `w2_p1_uae` 8, `w2_p1_ch` 7, `w2_p1_uk` 6), dont 29 envoyables. P2/P3 ont été légèrement re-qualifiés (P2 envoyables 59 → 55, P3 21 → 19).
- `liste-v1-signaux-dates.md` est **à jour** : il affiche bien 236 / 141 / P1 67.
- **Ce qui a dérivé, c'est la todo, à cause du groom HQ.** Le 2026-10-07, l'entrée journal `cmuyaiso` a réécrit « P1 67/200 » en « P1 38/200 ». Motif donné : « Journal shows final list v1 has P1=38 sendable ». Le groom a lu le journal de la vague 1 au lieu du fichier. La description de `cmspd49b` porte encore ce « 38/200 » erroné.
- « 114 » (P1 lignes) et « 118 » (total envoyables de la vague 1) se ressemblent, mais ce sont deux grandeurs différentes.

---

## 3. Les deux anomalies

### 3a. « warmup day 0, objectif 60, 10 aujourd'hui »

Ce que fait le code (`src/lib/outbound/policy.ts`) :
- `allowanceOn(campaign, date, sendDays)` lit la rampe `WARMUP_RAMP = [10, 10, 15, 20, 25, 30, 40, 50, 65, 80, …]` à l'index **`sendDays`**, c'est-à-dire au nombre de jours distincts *avant aujourd'hui* où la campagne a réellement envoyé (`sendDaysBefore`). Ce n'est pas le calendrier depuis `warmupStartedOn`, et c'est un choix délibéré depuis le 2026-09-07 (bug osl-newapps).
- `sendDays = 0`, parce que 0 `OutboundSend` existe. Donc rampe[0] = **10**, `min(10, dailyCap 60) = 10`, « day 0 ». **Le calcul est correct.**

Pourquoi « fin septembre » est faux :
- Le seul « warm-up » ayant existé est le job seed `outbound-warmup` (1 mail par jour vers les boîtes d'Adrien). Il a été livré le 09-29 et a tourné une fois le 09-30. Il a été **supprimé le 2026-09-30 à 07:17** (commit `1fe8ef42b`, décision `cmunn701` : « tu me supprimes tout ce fake truc de warmup »). Raison documentée (`docs/tools/why-no-warmup.md`) : il n'existe aucune boîte réceptrice indépendante, donc ce job ne produisait aucun signal de réputation.
- Le titre de `cmtt6uql` (« warm-up démarré fin septembre ») et la description de `cmspd49b` (« Warm-up déjà en cours via cron depuis fin septembre ») sont donc **faux**. Le groom du 2026-10-08 (`cmuzcl9q`) s'est appuyé dessus pour retirer un geste de la todo.
- Le YAML se trompe aussi un peu : « the ramp only reaches 60 around day 6-7 ». Avec la rampe actuelle, 60 est atteint au **9e jour d'envoi** (index 8 = 65 ; index 7 = 50).

À noter : si les 67 partaient demain, la rampe 10, 10, 15, 20, 25 les épuiserait (étape 1) en **5 jours d'envoi**. Les étapes 2 et 3 suivraient à J+3 et J+8.

### 3b. Ce que coûterait `outbound.conversionsCommand`

Le contrat (`src/lib/outbound/projectCommands.ts`, `askProjectAbout` / `knownCustomers`) : HQ écrit les contacts dans un JSON temporaire, exécute la commande déclarée dans le repo du projet (`{bundle}` remplacé par ce fichier) et lit en stdout un JSON `{ detail: [{ email, pro }] , … }`. Un échec est rapporté comme « NOT CHECKED », jamais comme « personne ».

Ce qu'il faudrait pour khufu :

| Élément | État |
|---|---|
| Une base de « comptes » côté khufu-io | **Inexistante.** khufu-io est un site Next sans base ni Stripe. Ses leads partent dans Resend et PostHog (`lead_magnet_captured`). |
| Les vrais clients khufu | Dans HQ lui-même (`Company`, `Person`, facturation Wafeq), pas dans le repo produit. |
| Les secrets côté hq-fsn | khufu-io **n'a aucun `.env`** sur hq-fsn (todo `cmtikty4`, en cours). |

Coût d'un câblage minimal : un script `scripts/outbound-conversions.mjs` dans khufu-io qui interroge PostHog (`lead_magnet_captured` et formulaires `contact`/`sprint-callback`) et/ou une liste de domaines clients. Environ **½ journée**, débloquée seulement quand `cmtikty4` sera résolu (clé PostHog personnelle en lecture).

Ce que ça rapporterait, mesuré aujourd'hui : **0 recoupement** entre les 67 et les 34 `Person` de HQ (sur l'email), et 0 entre les 67 et les sites des `Company` (sur le domaine). Par construction, la cible (fondateurs avec un signal de juillet à septembre, sans CTO) ne contient pas les clients actuels de khufu.

**Reco : ne pas le câbler maintenant.** Si un client entre un jour dans le périmètre, l'ajouter à `OutboundSuppression` coûte un geste et protège tout le portefeuille. À réévaluer quand la source deviendra un vrai sweep (Apollo, PredictLeads), qui pourrait ramener d'anciens leads des lead magnets. La source PostHog serait alors la bonne.

---

## 4. Options pour une source renouvelable

**Le chiffre qui tranche.** La règle de décision de `cmtt6uql` est « à 1 000 mails : < 3 meetings = changer de liste ou d'accroche ». Avec 3 étapes, cela fait **~330 contacts**. L'objectif de 60 par jour représente ~1 300 nouveaux contacts par mois. La méthode actuelle a produit **67 P1 envoyables sur une fenêtre de signaux d'environ 90 jours**, soit environ 20 à 25 par mois. **Le segment « signal daté + adresse publiée », sourcé gratuitement, ne peut alimenter ni l'objectif de 60 par jour, ni le test à 1 000 mails dans un délai raisonnable.** Le choix porte sur ce rapport volume/qualité, pas seulement sur l'outil.

| Option | Coût / mois | Volume P1 envoyable réaliste / mois | Mise en place | Qualité d'adresse | Délai pour atteindre ~330 contacts |
|---|---|---|---|---|---|
| **0. Envoyer les 67** (geste d'Adrien sur `/studio/outbound/khufu`) | 0 | 67, une seule fois | 1 clic | Publiée, 73 % génériques | Donne ~200 mails, soit 20 % du test |
| **A. Industrialiser la chaîne gratuite** : job HQ hebdomadaire qui lance une session agent (RSS, LI jobs-guest, registres, legalscan, finalize) et écrit un fichier de vague que `curated-csv` lit (répertoire ou append), relecture humaine conservée | 0 € de data + tokens d'une session agent par semaine | **25–50** (4 pays ; plus si on élargit à DE/NL/Nordics, la copy étant en anglais) | 1,5–2 j | Publiée, majoritairement générique, 0 vérifiée SMTP | **7 à 13 mois** |
| **B. PredictLeads** (API funding + job openings) comme flux de signaux, adresses toujours via `legalscan` | ~40–200 $ (0,04 $/appel jusqu'à 5 000) | **100–200** (le goulot reste l'adresse publiée : ~59 % des P1 aboutissent) | 2–3 j (adapter `LeadSource`, mapping vers les `vars_*`) | Publiée, comme aujourd'hui | 2 à 3 mois |
| **C. Apollo Basic** (filtres levée récente / offres d'emploi / taille, emails « verified ») | 49 $ (annuel) à 59–65 $ (mensuel), ~1 000 exports | **300+**, plafonné par la rampe et non par la source | Adrien ouvre le compte. **0 code** : l'export CSV entre directement par `curated-csv`, avec une seule réserve (ci-dessous) | « Verified » = motif + vérification SMTP, pas une adresse publiée. Taux de bounce non nul sur un domaine sans réputation | **~1 mois** |
| **D. Clay Launch** (waterfall d'enrichissement + signaux) | 167–185 $ | 300+ | 2–3 j de tables et workflows | Waterfall multi-fournisseurs, la meilleure qualité des options | ~1 mois, pour 3× le prix d'Apollo |
| **E. Ce qui dort déjà dans le fichier** : P2 agences (55 envoyables) + P3 no-code (19) | 0 | 74, une seule fois | Écrire la copy agences + une 2ᵉ campagne | Publiée | N'alimente pas le test fondateurs (autre audience) |
| **F. LinkedIn** pour les 47 P1 « LinkedIn only » (todo `cmtt6u9p`) | 0 | 47 + 100 invitations/sem. | Déjà planifié | n/a (autre canal) | Autre canal, ne compte pas dans le test email |

Réserve sur Apollo (C) :
- `curatedCsv.ts` exige un `sourceUrl` **http(s)**. La valeur prévue par la doc de liste, `apollo:verified`, serait **rejetée** au filtre « Address has a public provenance ». Il faut décider ce que vaut la provenance Art. 14 d'une adresse Apollo : l'URL du profil Apollo, ou l'URL du signal plus une note « Apollo verified ». C'est une décision d'Adrien, car elle assouplit sa règle du 2026-09-27 (« une adresse n'est envoyable que si quelqu'un l'a publiée »).
- Apollo apporte le volume, pas le signal daté : il faut garder le filtre « levée ou offre de moins de 60 j », sinon l'accroche de l'opener n'a plus de sujet.

### Recommandation

1. **Envoyer les 67, maintenant.** C'est gratuit, la liste vieillit (20 signaux ont plus de 90 j) et c'est le seul moyen de mesurer quoi que ce soit. C'est un geste d'Adrien par conception (pas d'autopilot).
2. **Option C, Apollo Basic au mois (~65 $), pour un seul mois.** C'est la seule option qui atteint le seuil des 1 000 mails en environ 4 semaines au rythme de la rampe, sans code. Le seul prérequis est la décision « provenance Apollo » ci-dessus. Ensuite :
   - **≥ 3 meetings** : le segment marche, et la question du générateur se pose pour de bon. Basculer vers **B (PredictLeads)** pour un sweep de signaux à coût marginal faible et des adresses publiées, ou garder Apollo si le bounce mesuré est bas.
   - **< 3 meetings** : c'est la liste ou l'accroche qui ne marche pas. Investir 2 jours dans A ou B aurait été du gaspillage, et on l'a appris pour 65 $.
3. **Ne pas construire A en premier.** Moins de 50 par mois, ce n'est pas un générateur pour un objectif de 60 par jour. A n'a de sens que si Adrien refuse toute adresse non publiée. Dans ce cas, il faut aussi accepter de ramener l'objectif à ~2 envois par jour.

---

## Suites proposées (non faites ici)

- Corriger le libellé « already contacted » de `hq_outbound_status` et `pool.ts` en séparant `pending` de « a reçu au moins un mail ».
- Faire écrire une ligne à `runOutboundSendPass` pour une campagne hors autopilot qui a du travail en attente (« 67 due, waiting for a human send »), au lieu du `continue` silencieux.
- Corriger les descriptions de `cmtt6uql` et `cmspd49b`, qui portent « warm-up fin septembre » et « 38/200 ».
- Corriger le commentaire du YAML khufu (« 60 around day 6-7 » : en réalité au 9e jour d'envoi).

## Sources des tarifs (relevés le 2026-10-16, à confirmer sur les pages officielles)

- Apollo : [Docket](https://docket.io/resources/research/apollo-pricing), [Emelia](https://emelia.io/software/apollo/pricing), [MarketBetter](https://www.marketbetter.ai/blog/apollo-io-pricing-breakdown-2026/)
- Clay : [Datalane](https://www.datalane.com/post/clay-pricing), [Docket](https://docket.io/resources/research/clay-pricing)
- PredictLeads : [PricingSaaS](https://pricingsaas.com/companies/predictleads), [docs job openings](https://docs.predictleads.com/v3/data_models/job_openings_dataset)
