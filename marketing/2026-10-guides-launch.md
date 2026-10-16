# Lancement des 3 guides — kit d'annonce (prêt à publier, NON publié)

> Préparé le 2026-10-16 (session `hq/khufu-rw6dws`). **Rien n'a été publié ni envoyé** : Adrien publie.
> Sources lues : `src/content/leadMagnets/*`, `src/app/api/lead-magnet/route.ts`,
> `~/code/projects/hq/docs/marketing/landing-playbook.md` (cmu36xan), `hq/config/projects/khufu.yaml`
> (`brand`, `growth`), `personal-brand.yaml` (`tone`), `hq/docs/tools/utm-conventions.md`, journal de décisions khufu.

---

## 1. Ce qu'on annonce

Trois guides en anglais, livrés le 2026-07-31, jamais annoncés. Le principe : on laisse un email, on reçoit le PDF. Aucun compte n'est demandé.

| Page | Guide | Promesse | Pour qui | PDF |
|---|---|---|---|---|
| `www.khufu.io/playbook` | **The 7-Day Playbook** | Comment une V1 SaaS / mobile est cadrée, construite et mise en ligne en 7 jours : la méthode complète, y compris les 5 choses qui la font dérailler | Fondateurs qui veulent un vrai produit devant de vrais utilisateurs en semaines, pas en trimestres | 14 p. |
| `www.khufu.io/build-vs-buy` | **Build vs Buy vs Agency: the real cost** | Les 6 façons d'obtenir une V1 comparées en cash, en délai et en propriété, plus les 4 coûts absents des devis et une formule pour son propre cas | Fondateurs qui hésitent entre recruter, freelance, agence, no-code ou le faire eux-mêmes | 10 p. |
| `www.khufu.io/hire-checklist` | **47 questions to ask before you hire anyone to build your SaaS** | La grille de sélection pour qui ne lit pas le code : la question, pourquoi elle compte, la réponse qui doit clore la discussion | Fondateurs non techniques sur le point de confier un build à quelqu'un d'extérieur | 17 p. |

Ce qui se passe après le formulaire : le PDF tout de suite, puis un mail de livraison signé Adrien, puis 4 relances à J+2, J+4, J+7 et J+14. Toutes vendent **Sprint V1** et le contact se fait sur **WhatsApp** (`src/content/leadMagnets/nurture.ts`).

**État de départ mesuré (PostHog #495325)** — c'est la référence pour comparer :
- 6 captures `lead_magnet_captured` depuis juillet, et **les 6 sont des tests** (adresses `khufu.io` / `resend.dev`). **0 vrai lead** en 11 semaines.
- Vues des guides : 0 par semaine jusqu'au 14/09, puis 1 à 3 par semaine, toutes arrivées par le lien du pied de page. Le trafic total du site est de 40 à 100 pages vues par semaine.

---

## 2. La capture marche-t-elle aujourd'hui ? — OUI, prouvé le 2026-10-16

Tests faits sur la production (déploiement Vercel du 08/10, commit `8eb2691` = master), avec l'adresse-puits de Resend `delivered@resend.dev`. Elle accepte les mails et ne les remet à aucun humain.

| Maillon | Preuve | Résultat |
|---|---|---|
| Les 3 pages | `curl -L` | 200 (l'apex `khufu.io` redirige en 308 vers `www.`, et **les UTM survivent** à la redirection) |
| Les 3 PDF | `curl` + `cmp` | 200 `application/pdf`, **identiques octet pour octet** à `public/downloads/` ; 14 / 10 / 17 pages, comme annoncé |
| API, appel direct | `POST /api/lead-magnet` (hire-checklist) à 14:26:57Z | `{"ok":true}` |
| Envoi du guide (Resend) | événement serveur `delivered: true` | ✅ Resend a accepté le mail |
| Relances programmées | `scheduled_email_ids` | ✅ 4 ids (J+2/4/7/14) |
| Enregistrement du lead | `lead_magnet_captured` dans PostHog | ✅ arrivé en moins d'une seconde |
| Notification à Adrien | Gmail | ✅ « [lead] 47 Questions — delivered@resend.dev », dans la **boîte de réception** (pas en spam) |
| **Le vrai formulaire, dans un navigateur** | `/playbook?utm_…`, champ rempli puis clic | ✅ écran « Here it is. A copy is on its way… », lien PDF présent |
| Le parcours côté client | PostHog | ✅ `$pageview` → `lead_magnet_viewed` → `lead_magnet_captured` (serveur) → `lead_magnet_submitted` → `lead_magnet_delivered`, **avec les UTM du lien conservés jusqu'à la capture** |

**Non prouvé :**
- **L'arrivée du guide dans une vraie boîte Gmail ou Outlook**, et hors spam. L'adresse-puits prouve que Resend accepte, pas la délivrabilité. → Avant de publier, Adrien remplit le formulaire une fois avec une adresse perso hors khufu.io (Gmail) et vérifie la boîte de réception.
- **Les relances J+2 à J+14 réellement envoyées.** Elles sont acceptées et programmées dans Resend, mais aucune ne l'avait été le jour du test.
- **Le formulaire sur mobile et en Safari.** Testé seulement en Chrome desktop.
- **La remontée dans HQ.** `AdLead` est vide (0 ligne), car la synchronisation PostHog → HQ est **manuelle** (bouton de la page Ads de khufu dans HQ, `src/lib/ads/leadSync.ts`). Elle doit être lancée pour qu'un lead apparaisse dans HQ.

**Bruit de test à exclure des lectures :** les captures dont `placement` vaut `hq-verification` ou `e2e-recheck`, ou dont `utm_source` vaut `hq-test` / `agent_probe` / `e2e`, ou dont l'email est en `@resend.dev` / `@khufu.io`. Les deux captures du 16/10 en font partie, et elles apparaîtront aussi à la prochaine synchronisation HQ.

---

## 3. Contenus

### Règles appliquées (et pourquoi)

| Règle | Source |
|---|---|
| Première personne, signé Adrien, confiant sans hype | `personal-brand.tone`, `brand.tone` |
| Écrit pour un fondateur qui ne code pas : aucun mot de dev (repo, stack, CI…) | landing-playbook §1, `cmu1qk2g` |
| Guides **en anglais seulement**, et on le dit dans les posts FR | `growth.avoid` |
| « Gratuit » toujours accompagné de « contre un email » | `growth.avoid` |
| Aucun chiffre d'activité (téléchargements, clients, CA), aucune référence client | `cmtz6tr7`, `cmtt6x3k` |
| Rien sur l'effectif (« seul », « solo ») | `cmu1u21i` |
| On ne vante aucune alternative (freelance, agence, no-code) dans le post | `cmu36mqh` |
| Les fourchettes de prix du marché du guide (« agence 60–250 k$ ») **ne sont pas reprises** : non sourcées, elles restent dans le PDF, où elles sont présentées comme « ce que j'observe » | landing-playbook §2 |
| Pas de fausse urgence, pas de « book a call » ni de calendrier | landing-playbook §1, `growth.avoidTerms` |
| Lien **dans le corps du post** (LinkedIn et X), jamais en commentaire | `utm-conventions.md`, « Reason 1 » |
| L'offre (Sprint V1) est nommée sans prendre la place du guide : c'est du contenu organique, pas une pub | `cmu4iebv` (qui vise le payant) |

### Liens trackés — à coller tels quels

Schéma : `utm_source` = réseau, `utm_medium` = `social`, `utm_campaign` = **`guides-launch`**, `utm_content` = un identifiant par post.

> Écart assumé à `utm-conventions.md`, où `utm_campaign` vaut normalement la semaine (`2026w43`). La raison de cette règle est de regrouper sans effort les posts générés par le pipeline HQ. Ici, les posts sont publiés à la main, sur plusieurs semaines, et tout l'enjeu est de lire **cette** opération d'un seul filtre. La semaine reste lisible grâce à la date de l'événement.
> Le nom de campagne voyage aussi dans le message WhatsApp pré-rempli des relances (`whatsappRef` → `KHUFU-PLAYBOOK-DELIVERY-GUIDES-LAUNCH`). Une conversation qui démarre trois semaines plus tard reste donc rattachée à l'opération.

| Post | URL |
|---|---|
| LI-1 EN (les 3) | `https://www.khufu.io/playbook?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li1-en` · `https://www.khufu.io/build-vs-buy?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li1-en` · `https://www.khufu.io/hire-checklist?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li1-en` |
| LI-1 FR (les 3) | les mêmes, avec `utm_content=li1-fr` |
| LI-2 (checklist) | `https://www.khufu.io/hire-checklist?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li2-en` (ou `li2-fr`) |
| LI-3 (build vs buy) | `https://www.khufu.io/build-vs-buy?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li3-en` (ou `li3-fr`) |
| LI-4 (playbook) | `https://www.khufu.io/playbook?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li4-en` (ou `li4-fr`) |
| X thread | `https://www.khufu.io/<guide>?utm_source=x&utm_medium=social&utm_campaign=guides-launch&utm_content=x-thread-en` (ou `x-thread-fr`) |
| X singles | `…&utm_source=x…&utm_content=x2-en` / `x3-en` / `x4-en` (idem `-fr`) |
| Messages perso (§3.4) | `…?utm_source=direct-message&utm_medium=referral&utm_campaign=guides-launch&utm_content=dm-<fr|en>` |

Toujours `www.` : l'apex coûte une redirection de plus.

**Calendrier suggéré** (à ajuster) : LI-1 le jour J · X thread le même jour · LI-2 à J+3 · LI-3 à J+7 · LI-4 à J+10 · un X single le jour de chaque LI. Une seule langue par réseau, ou les deux en alternance : il n'y a pas assez de volume pour tester l'un contre l'autre, donc on choisit selon l'audience réelle du compte.

---

### 3.1 LinkedIn

#### LI-1 — les trois guides · EN

> Every quote you get for building your product tells you what someone will charge.
> None of them tells you what the decision will cost you.
>
> Over the summer I wrote down what I'd want any founder to read before spending a dollar on a first version. Three guides, the same method I run on every sprint, nothing held back:
>
> → The 7-Day Playbook — how a SaaS or mobile V1 actually gets scoped, built and shipped in a week, including the five things that blow it up.
> https://www.khufu.io/playbook?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li1-en
>
> → Build vs Buy vs Agency — six ways to get a V1 built, compared on cash, time and what you actually own. Plus the four costs that never make it into a quote.
> https://www.khufu.io/build-vs-buy?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li1-en
>
> → 47 questions to ask before you hire anyone to build your SaaS — for founders who can't read code, with the answer that should end the conversation. Including if the person across the table is me.
> https://www.khufu.io/hire-checklist?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li1-en
>
> Free, you leave an email, the PDF is yours straight away.
> If you read them and build it yourself, they did their job.

*Accroche de remplacement, plus build-in-public, si tu préfères : « I wrote three guides in July and told nobody. Fixing that today. »*

#### LI-1 — les trois guides · FR

> Chaque devis que vous recevez pour construire votre produit vous dit ce que quelqu'un va facturer.
> Aucun ne vous dit ce que la décision va vous coûter.
>
> Cet été, j'ai mis par écrit ce que j'aimerais que tout fondateur lise avant de dépenser un euro dans une première version. Trois guides, la méthode que j'applique à chaque sprint, sans rien garder pour moi :
>
> → The 7-Day Playbook — comment une V1 SaaS ou mobile est cadrée, construite et mise en ligne en une semaine, avec les cinq pièges qui la font dérailler.
> https://www.khufu.io/playbook?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li1-fr
>
> → Build vs Buy vs Agency — six façons d'obtenir une V1, comparées en budget, en délai et en ce que vous possédez vraiment. Et les quatre coûts qui n'apparaissent dans aucun devis.
> https://www.khufu.io/build-vs-buy?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li1-fr
>
> → 47 questions à poser avant de confier votre SaaS à qui que ce soit — pour les fondateurs qui ne lisent pas le code, avec la réponse qui doit clore la discussion. Y compris si c'est moi en face.
> https://www.khufu.io/hire-checklist?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li1-fr
>
> Gratuits contre une adresse email, PDF immédiat. Ils sont en anglais.
> Si vous les lisez et construisez vous-même, ils ont fait leur travail.

#### LI-2 — la checklist · EN

> The hardest part of paying someone to build your software: you can't inspect the product until you've already paid for most of it.
>
> The way around it isn't learning to code. It's asking questions whose answers are hard to fake — and knowing what a good answer sounds like before you hear one.
>
> Three of the 47 I'd ask:
> • "Describe my product back to me in one sentence." Someone who recites your feature list hasn't understood it.
> • "Who owns the code, in writing, and from what moment?" Ownership is either concrete or it's marketing.
> • "Whose accounts hold the hosting, the domain and the database?"
>
> The full checklist, with why each one matters and the red-flag answer for each:
> https://www.khufu.io/hire-checklist?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li2-en
>
> Free, against an email. It's uncomfortable to answer — including for me. That's the point.

#### LI-2 — la checklist · FR

> Le plus dur quand on paie quelqu'un pour construire son logiciel : on ne peut pas inspecter le produit avant d'en avoir payé la plus grande partie.
>
> La parade, ce n'est pas d'apprendre à coder. C'est de poser des questions dont les réponses sont difficiles à bluffer — et de savoir à quoi ressemble une bonne réponse avant de l'entendre.
>
> Trois des 47 que je poserais :
> • « Décrivez-moi mon produit en une phrase. » Celui qui récite votre liste de fonctionnalités ne l'a pas compris.
> • « À qui appartient le code, par écrit, et à partir de quand ? » La propriété est concrète, ou c'est du marketing.
> • « Sur quels comptes sont l'hébergement, le nom de domaine et la base de données ? »
>
> La checklist complète, avec pour chaque question pourquoi elle compte et la réponse qui doit vous alerter (en anglais) :
> https://www.khufu.io/hire-checklist?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li2-fr
>
> Gratuite contre un email. Inconfortable à remplir — y compris pour moi. C'est le but.

> Les trois questions citées sont les n°1, 14 et 15 du PDF, mot pour mot (traduites dans la version FR).

#### LI-3 — build vs buy · EN

> Most founders compare a $17,000 fixed quote with a $600/day freelancer and conclude the freelancer is cheaper.
>
> Run it to a realistic 45 days: $27,000. Plus your own hours managing it. Spread over ten weeks instead of one.
>
> The quote was never the expensive part. The four costs that decide it are the ones nobody writes down: recruiting, your time, being late, and the rebuild eighteen months later.
>
> I put them in one guide, with a one-page formula to run your own numbers:
> https://www.khufu.io/build-vs-buy?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li3-en
>
> Free, against an email.

#### LI-3 — build vs buy · FR

> La plupart des fondateurs comparent un devis fixe de 17 000 $ à un freelance à 600 $/jour, et concluent que le freelance coûte moins cher.
>
> Poussez le calcul jusqu'à 45 jours, un délai réaliste : 27 000 $. Plus vos propres heures à le piloter. Étalés sur dix semaines au lieu d'une.
>
> Le devis n'a jamais été la partie chère. Les quatre coûts qui tranchent sont ceux que personne n'écrit : le recrutement, votre temps, le retard, et la reconstruction dix-huit mois plus tard.
>
> Je les ai réunis dans un guide, avec une formule d'une page pour faire vos propres calculs (en anglais) :
> https://www.khufu.io/build-vs-buy?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li3-fr
>
> Gratuit contre un email.

> Les montants de LI-3 sont ceux de l'encadré du guide (« The comparison people actually make »). C'est un **exemple de calcul** (600 × 45 = 27 000), pas une statistique de marché. 17 000 $ est le prix affiché du Sprint V1.

#### LI-4 — le playbook · EN

> Most V1s don't take six months because they're hard.
> They take six months because nobody ever forced a decision about what the product is not.
>
> A fixed seven-day deadline makes that decision unavoidable on day one. That's the whole trick — and it's the method I run on client sprints and on my own products:
>
> • five questions that turn a vague idea into a one-sentence product
> • what has to be true at the end of each of the seven days
> • the five things that turn a 7-day build into a 7-week one
> • what AI genuinely speeds up, and what it doesn't
>
> 14 pages, nothing withheld:
> https://www.khufu.io/playbook?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li4-en
>
> Free, against an email.

#### LI-4 — le playbook · FR

> La plupart des V1 ne prennent pas six mois parce qu'elles sont difficiles.
> Elles prennent six mois parce que personne n'a jamais forcé la décision sur ce que le produit n'est pas.
>
> Une échéance fixe de sept jours rend cette décision inévitable dès le premier jour. C'est tout le secret — et c'est la méthode que j'applique aux sprints clients comme à mes propres produits :
>
> • cinq questions qui transforment une idée floue en un produit d'une phrase
> • ce qui doit être vrai à la fin de chacun des sept jours
> • les cinq choses qui transforment un build de 7 jours en 7 semaines
> • ce que l'IA accélère vraiment, et ce qu'elle n'accélère pas
>
> 14 pages, rien de caché (en anglais) :
> https://www.khufu.io/playbook?utm_source=linkedin&utm_medium=social&utm_campaign=guides-launch&utm_content=li4-fr
>
> Gratuit contre un email.

---

### 3.2 X

Une URL compte pour 23 caractères. Chaque tweet tient dans 280.

#### Thread · EN (`utm_content=x-thread-en`)

> **1/** Every quote for building your product tells you what someone will charge. None tells you what the decision will cost you.
>
> I wrote 3 free guides on that. Same method I run on every sprint, nothing held back 🧵

> **2/** The 7-Day Playbook — how a SaaS or mobile V1 gets scoped, built and shipped in a week, and the 5 things that blow it up.
> https://www.khufu.io/playbook?utm_source=x&utm_medium=social&utm_campaign=guides-launch&utm_content=x-thread-en

> **3/** Build vs Buy vs Agency — 6 ways to get a V1 built, compared on cash, time and what you actually own. Plus the 4 costs no quote shows.
> https://www.khufu.io/build-vs-buy?utm_source=x&utm_medium=social&utm_campaign=guides-launch&utm_content=x-thread-en

> **4/** 47 questions to ask before you hire anyone to build your SaaS. For founders who can't read code — with the answer that should end the call. Including if it's me.
> https://www.khufu.io/hire-checklist?utm_source=x&utm_medium=social&utm_campaign=guides-launch&utm_content=x-thread-en

> **5/** Email in, PDF out. If you read them and build it yourself, they did their job.

#### Thread · FR (`utm_content=x-thread-fr`)

> **1/** Chaque devis pour construire votre produit dit ce que quelqu'un va facturer. Aucun ne dit ce que la décision va vous coûter.
>
> J'ai écrit 3 guides gratuits là-dessus (en anglais). La méthode de chaque sprint, sans rien garder 🧵

> **2/** The 7-Day Playbook — comment une V1 SaaS ou mobile est cadrée, construite et mise en ligne en une semaine, et les 5 pièges qui la font dérailler.
> https://www.khufu.io/playbook?utm_source=x&utm_medium=social&utm_campaign=guides-launch&utm_content=x-thread-fr

> **3/** Build vs Buy vs Agency — 6 façons d'obtenir une V1, comparées en budget, en délai et en propriété réelle. Et les 4 coûts absents de tout devis.
> https://www.khufu.io/build-vs-buy?utm_source=x&utm_medium=social&utm_campaign=guides-launch&utm_content=x-thread-fr

> **4/** 47 questions à poser avant de confier votre SaaS à qui que ce soit. Pour les fondateurs qui ne lisent pas le code, avec la réponse qui doit clore l'appel. Même si c'est moi en face.
> https://www.khufu.io/hire-checklist?utm_source=x&utm_medium=social&utm_campaign=guides-launch&utm_content=x-thread-fr

> **5/** Un email, un PDF. Si vous les lisez et construisez vous-même, ils ont fait leur travail.

#### Singles · EN (un par jour où sort un LinkedIn)

> **x2-en** — You can't inspect software until you've paid for most of it. So ask questions whose answers are hard to fake. 47 of them, with the red-flag answer for each:
> https://www.khufu.io/hire-checklist?utm_source=x&utm_medium=social&utm_campaign=guides-launch&utm_content=x2-en

> **x3-en** — $600/day × 45 days = $27,000, before your own hours. The quote is never the expensive part. The 4 costs that decide build vs buy:
> https://www.khufu.io/build-vs-buy?utm_source=x&utm_medium=social&utm_campaign=guides-launch&utm_content=x3-en

> **x4-en** — V1s don't take 6 months because they're hard. They take 6 months because nobody decided what the product is not. The 7-day method, 14 pages:
> https://www.khufu.io/playbook?utm_source=x&utm_medium=social&utm_campaign=guides-launch&utm_content=x4-en

#### Singles · FR

> **x2-fr** — Un logiciel ne s'inspecte qu'après en avoir payé l'essentiel. Alors posez des questions difficiles à bluffer. 47, avec la réponse qui doit alerter (EN) :
> https://www.khufu.io/hire-checklist?utm_source=x&utm_medium=social&utm_campaign=guides-launch&utm_content=x2-fr

> **x3-fr** — 600 $/jour × 45 jours = 27 000 $, avant vos propres heures. Le devis n'est jamais la partie chère. Les 4 coûts qui tranchent (EN) :
> https://www.khufu.io/build-vs-buy?utm_source=x&utm_medium=social&utm_campaign=guides-launch&utm_content=x3-fr

> **x4-fr** — Une V1 ne prend pas 6 mois parce qu'elle est difficile, mais parce que personne n'a décidé ce que le produit n'est pas. La méthode 7 jours, 14 p. (EN) :
> https://www.khufu.io/playbook?utm_source=x&utm_medium=social&utm_campaign=guides-launch&utm_content=x4-fr

---

### 3.3 Email à la base Resend — ⛔ PAS D'ENVOI : il n'y a pas de base

Vérifié le 2026-10-16 :
- **Aucun abonné.** Le site n'écrit plus de contacts Resend depuis le 31/07 (`54305ed`). La liste se reconstruit dans HQ à partir de PostHog (`AdLead`), qui contient **0 ligne**, et PostHog ne contient **aucune vraie capture**. Personne n'a jamais accepté de recevoir des mails de khufu.
- Les **3 592 contacts `OutboundContact`** de HQ sont des contacts de **prospection à froid** (sourcés, pas inscrits). Leur envoyer une annonce depuis khufu.io, ce serait :
  - du spam, puisqu'aucun d'eux n'a donné son accord ;
  - un risque pour la réputation du domaine qui **livre justement les guides et les relances**. C'est pour ça que le froid passe par `khufu.app`.

**À la place : un message personnel 1:1**, envoyé à la main (Gmail ou WhatsApp) à des gens que tu connais et qui sont en train de décider d'un build. Pas d'envoi groupé.

**EN**
> Subject: the guide I mentioned
>
> Hi {first name},
>
> You said you were weighing how to get {project} built. I wrote down everything I'd want someone in that spot to read first — this is the one that fits where you are:
> {link: hire-checklist | build-vs-buy | playbook, `utm_content=dm-en`}
>
> No need to reply. If a question in there makes you want to talk it through, I'm on WhatsApp.
>
> Adrien

**FR**
> Objet : le guide dont je te parlais
>
> Salut {prénom},
>
> Tu m'avais dit hésiter sur la façon de faire construire {projet}. J'ai mis par écrit ce que j'aimerais que quelqu'un dans ta situation lise d'abord — celui-ci colle à là où tu en es (il est en anglais) :
> {lien : hire-checklist | build-vs-buy | playbook, `utm_content=dm-fr`}
>
> Pas besoin de répondre. Si une question là-dedans te donne envie d'en parler, je suis sur WhatsApp.
>
> Adrien

---

## 4. Mesure — comment on saura si ça a converti

### Ce qui existe déjà (aucun code à écrire)

| Événement | Où | Fiabilité |
|---|---|---|
| `lead_magnet_viewed` | navigateur | Perdu avec un bloqueur de pub ou un refus de cookies |
| `lead_magnet_submitted` / `lead_magnet_delivered` | navigateur | idem |
| **`lead_magnet_captured`** | **serveur** | **Le KPI.** Ni bloqueur ni bannière ne l'empêchent, et il porte `utm_*`, `magnet`, `placement` et `delivered` |
| `lead_magnet_download_clicked` | navigateur | Clic sur « Download the PDF » |
| WhatsApp | message pré-rempli des relances | Première ligne `KHUFU-<GUIDE>-<ÉTAPE>-GUIDES-LAUNCH` |
| Réponse à un mail | Gmail | Marqueur de pied de mail `Ref: KHUFU-LM-<GUIDE>` (filtre `"KHUFU-LM-"`) |

### Les questions à trancher, posées AVANT de publier

1. **Le canal ramène-t-il des lecteurs ?** Mesure : vues par `utm_source` × `utm_content`.
2. **La page convertit-elle les lecteurs qu'on lui envoie ?** Mesure : captures / vues, par guide.
3. **Lequel des trois angles marche ?** (méthode / décision / confiance)
4. **Un lead devient-il une conversation ?** Mesure : WhatsApp ou réponse portant la référence.

### Grille de lecture à J+14 de LI-1 — proposition, à valider

| Constat | Lecture | Suite |
|---|---|---|
| < 20 vues taguées `guides-launch` | Problème de **diffusion**, pas de page | Retravailler l'accroche ou le format, avant de toucher la page |
| ≥ 50 vues, 0 capture | Problème de **page / promesse** | Revoir le haut de page du guide le plus vu (playbook §8) |
| ≥ 1 vraie capture | Le tuyau marche de bout en bout | Lire la séquence : réponse ou WhatsApp à J+14 ? |
| ≥ 3 captures sur un même guide | Un angle se détache | Réutiliser cet angle (social, flyer, outbound) |

Les seuils sont des ordres de grandeur pour ~40 à 100 vues par semaine de trafic de base. Ce ne sont pas des objectifs prouvés : ils servent à savoir **quoi corriger**, pas à juger de la réussite.

### Requêtes (outil `hq_posthog_query`, slug `khufu`)

```sql
-- 1+2+3 · vues → captures par post, tests exclus
SELECT properties.utm_source AS src, properties.utm_content AS post, properties.magnet AS guide,
       countIf(event = 'lead_magnet_viewed')   AS views,
       countIf(event = 'lead_magnet_captured') AS leads
FROM events
WHERE properties.utm_campaign = 'guides-launch'
  AND event IN ('lead_magnet_viewed', 'lead_magnet_captured')
  AND timestamp > toDateTime('2026-10-16 00:00:00')
  AND coalesce(toString(properties.email), '') NOT LIKE '%@resend.dev'
  AND coalesce(toString(properties.email), '') NOT LIKE '%@khufu.io'
GROUP BY src, post, guide ORDER BY leads DESC, views DESC
```

```sql
-- Toutes les vraies captures depuis l'annonce, quelle que soit l'origine (pied de page, direct…)
SELECT timestamp, properties.magnet, properties.utm_source, properties.utm_content,
       properties.internal_source, toString(properties.delivered)
FROM events
WHERE event = 'lead_magnet_captured' AND timestamp > toDateTime('2026-10-16 00:00:00')
  AND toString(properties.email) NOT LIKE '%@resend.dev'
  AND toString(properties.email) NOT LIKE '%@khufu.io'
ORDER BY timestamp
```

Pour les visiteurs arrivés sans soumettre, utiliser la répartition web analytics `InitialUTMContent`, plus fiable que la propriété portée par l'événement (`utm-conventions.md`, « Reading the answer »).

### Gestes manuels à ne pas oublier

- **À chaque vrai lead** : la notification « [lead] … » arrive dans la boîte de réception. Si le lead répond « unsubscribe », annule les relances avec les **Cancel ids** imprimés dans cette notification. Le site ne peut pas le faire seul : sa clé Resend ne sert qu'à envoyer.
- **Synchroniser HQ** (page Ads de khufu → sync) pour que les leads entrent dans `AdLead` et que leur statut (répondu / appel / signé) y soit suivi.
- **Point à J+14** : todo HQ créé pour relancer cette lecture (voir le journal khufu du 2026-10-16).

---

## 5. Vu en relisant les guides — à trancher par Adrien, rien n'a été modifié

- `build-vs-buy` (section « Pick this one when… ») plaide honnêtement pour chaque alternative (freelance, agence, no-code). C'était voulu à la création (commentaire du fichier), mais **c'est en tension avec `cmu36mqh`** (« ne jamais vanter une alternative ») — décision prise ensuite et scopée aux landings. Le guide n'a pas été réaligné.
- `build-vs-buy` l.168 : « … requirements **a solo operator** cannot satisfy », dans le paragraphe agence. Ça parle des prestataires en général, mais un lecteur peut l'appliquer à khufu (`cmu1u21i`).
- `build-vs-buy` : les fourchettes de marché (« $60k–250k agency »…) ne sont pas sourcées. Elles sont présentées comme « ce que j'observe », ce qui reste honnête dans un guide, mais elles sont à garder hors des posts et des créas.
