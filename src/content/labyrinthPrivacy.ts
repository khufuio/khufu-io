import type { Locale } from '@/i18n/config'

/**
 * Privacy policy of the Blind Labyrinth mobile app (todo cmwectyu) — the URL
 * App Store Connect and Play Console point to.
 *
 * Source of truth: the labyrinth repo, `docs/store/privacy-policy.md`
 * (it must say the same as `docs/store/privacy-declarations.md` there).
 * This file is that text, block for block: edit it there first, then here.
 *
 * Written in FR / EN / ES only; every other locale renders the English text
 * (see `labyrinthPrivacyFor`).
 */

export type PolicyBlock =
  | { h2: string }
  /** Inline `**bold**` is the only markup. */
  | { p: string }
  | { ul: string[] }
  | { table: { head: string[]; rows: string[][] } }

export type PolicyDoc = {
  title: string
  metaTitle: string
  metaDescription: string
  updated: string
  blocks: PolicyBlock[]
}

export const labyrinthPrivacyLocales = ['fr', 'en', 'es'] as const satisfies readonly Locale[]

export type LabyrinthPrivacyLocale = (typeof labyrinthPrivacyLocales)[number]

export function isLabyrinthPrivacyLocale(locale: Locale): locale is LabyrinthPrivacyLocale {
  return (labyrinthPrivacyLocales as readonly Locale[]).includes(locale)
}

/** The locale whose text a visitor of `/{locale}/labyrinth/privacy` reads. */
export function labyrinthPrivacyFor(locale: Locale): LabyrinthPrivacyLocale {
  return isLabyrinthPrivacyLocale(locale) ? locale : 'en'
}

export const labyrinthPrivacy: Record<LabyrinthPrivacyLocale, PolicyDoc> = {
  "fr": {
    "title": "Politique de confidentialité — Blind Labyrinth",
    "metaTitle": "Blind Labyrinth — Politique de confidentialité",
    "metaDescription": "Données traitées par le jeu mobile Blind Labyrinth (AdMob, Traqio, RevenueCat, Expo), finalités, consentement, conservation et vos droits.",
    "updated": "Dernière mise à jour : 14 novembre 2026",
    "blocks": [
      {
        "h2": "Qui sommes-nous"
      },
      {
        "p": "Blind Labyrinth (« Labyrinth ») est un jeu mobile publié par **Khufu FZCO** (Dubaï, Émirats arabes unis), responsable du traitement. Contact : **privacy@khufu.io**."
      },
      {
        "h2": "En résumé"
      },
      {
        "ul": [
          "Pas de compte, pas d'email, pas de position précise, pas d'accès à vos contacts, photos ou fichiers.",
          "Votre progression reste sur votre téléphone.",
          "L'app affiche des publicités Google AdMob, mesure d'où viennent les installations (Traqio) et gère les achats intégrés (RevenueCat). Ces services reçoivent les données décrites ci-dessous."
        ]
      },
      {
        "h2": "Données traitées et pourquoi"
      },
      {
        "table": {
          "head": [
            "Service",
            "Données",
            "Finalité"
          ],
          "rows": [
            [
              "**Google AdMob** (publicité)",
              "identifiant publicitaire (IDFA sur iOS uniquement si vous l'autorisez ; identifiant publicitaire Android), identifiants liés à l'app, adresse IP (position approximative), interactions avec les annonces, diagnostics et performances",
              "afficher et mesurer les annonces, lutter contre la fraude ; annonces personnalisées seulement avec votre accord (voir « Vos choix »)"
            ],
            [
              "**Traqio** (mesure des installations, notre propre outil)",
              "identifiant d'installation aléatoire, modèle, système, langue, version de l'app, provenance de l'installation (Play Install Referrer, SKAdNetwork, Apple Search Ads), identifiant d'achat anonyme, événements de jeu (tutoriel terminé, niveau réussi, boutique ouverte, achat avec prix et devise), revenu publicitaire estimé",
              "savoir quelles campagnes amènent des joueurs et ce qu'elles rapportent. Traqio ne lit pas l'identifiant publicitaire et ne transmet rien à un réseau publicitaire"
            ],
            [
              "**RevenueCat** (achats)",
              "identifiant d'achat anonyme généré par l'app, historique des achats, appareil et système",
              "valider et restaurer vos achats (thèmes, packs, suppression des pubs)"
            ],
            [
              "**Expo / EAS Insights**",
              "identifiant d'installation, système, version de l'app, pays (déduit de l'IP)",
              "statistiques de stabilité et d'usage des versions"
            ],
            [
              "**App Store / Google Play**",
              "paiement",
              "traité par Apple ou Google selon leurs propres politiques ; nous ne voyons jamais vos données de paiement"
            ]
          ]
        }
      },
      {
        "p": "Base légale (RGPD) : exécution du service pour les achats ; intérêt légitime pour la mesure des installations, les statistiques et la lutte contre la fraude ; **consentement** pour la publicité personnalisée."
      },
      {
        "h2": "Suivi (App Tracking Transparency) et consentement"
      },
      {
        "ul": [
          "**iOS** : l'app vous demande l'autorisation de suivi (ATT). Si vous refusez, l'IDFA n'est pas partagé et les annonces ne sont pas personnalisées.",
          "**EEE, Royaume-Uni, Suisse** : un formulaire de consentement Google (UMP, IAB TCF) vous demande votre choix avant toute publicité personnalisée. Sans accord, les annonces restent non personnalisées.",
          "Vous pouvez changer d'avis à tout moment : réglages de suivi d'iOS, réglages de l'identifiant publicitaire d'Android, ou le formulaire de consentement accessible dans l'app."
        ]
      },
      {
        "h2": "Partage"
      },
      {
        "p": "AdMob (Google) utilise les données pour ses propres finalités publicitaires : c'est un partage. Traqio, RevenueCat et Expo agissent pour notre compte (sous-traitants). Nous ne vendons aucune donnée."
      },
      {
        "h2": "Transferts et conservation"
      },
      {
        "p": "Les prestataires peuvent traiter les données hors de votre pays (notamment aux États-Unis), avec les garanties prévues par le RGPD (clauses contractuelles types). Les données de mesure sont conservées le temps nécessaire à l'analyse des campagnes ; la progression du jeu reste sur l'appareil tant que l'app est installée."
      },
      {
        "h2": "Enfants"
      },
      {
        "p": "Labyrinth n'est pas destiné aux enfants de moins de 13 ans."
      },
      {
        "h2": "Vos droits"
      },
      {
        "p": "Accès, rectification, effacement, opposition, portabilité : écrivez à **privacy@khufu.io**. Comme l'app n'a pas de compte, indiquez-nous votre identifiant d'installation si possible. Vous pouvez aussi saisir l'autorité de protection des données de votre pays. Désinstaller l'app supprime la progression locale."
      },
      {
        "h2": "Modifications"
      },
      {
        "p": "Nous mettrons cette page à jour si l'app évolue ; la date en haut change en conséquence."
      }
    ]
  },
  "en": {
    "title": "Privacy policy — Blind Labyrinth",
    "metaTitle": "Blind Labyrinth — Privacy policy",
    "metaDescription": "Data processed by the Blind Labyrinth mobile game (AdMob, Traqio, RevenueCat, Expo), purposes, consent, retention and your rights.",
    "updated": "Last updated: 14 November 2026",
    "blocks": [
      {
        "h2": "Who we are"
      },
      {
        "p": "Blind Labyrinth (\"Labyrinth\") is a mobile game published by **Khufu FZCO** (Dubai, United Arab Emirates), the data controller. Contact: **privacy@khufu.io**."
      },
      {
        "h2": "In short"
      },
      {
        "ul": [
          "No account, no email, no precise location, no access to your contacts, photos or files.",
          "Your progress stays on your phone.",
          "The app shows Google AdMob ads, measures where installs come from (Traqio) and handles in-app purchases (RevenueCat). These services receive the data described below."
        ]
      },
      {
        "h2": "Data processed and why"
      },
      {
        "table": {
          "head": [
            "Service",
            "Data",
            "Purpose"
          ],
          "rows": [
            [
              "**Google AdMob** (ads)",
              "advertising ID (IDFA on iOS only if you allow it; Android advertising ID), app-scoped identifiers, IP address (approximate location), ad interactions, diagnostics and performance",
              "serve and measure ads, prevent fraud; personalised ads only with your consent (see \"Your choices\")"
            ],
            [
              "**Traqio** (install measurement, our own tool)",
              "random install ID, device model, OS, language, app version, install source (Play Install Referrer, SKAdNetwork, Apple Search Ads), anonymous purchase ID, game events (tutorial completed, level cleared, shop opened, purchase with price and currency), estimated ad revenue",
              "know which campaigns bring players and what they earn. Traqio does not read the advertising ID and forwards nothing to any ad network"
            ],
            [
              "**RevenueCat** (purchases)",
              "anonymous purchase ID generated by the app, purchase history, device and OS",
              "validate and restore your purchases (themes, packs, ad removal)"
            ],
            [
              "**Expo / EAS Insights**",
              "install ID, OS, app version, country (from IP)",
              "stability and version usage statistics"
            ],
            [
              "**App Store / Google Play**",
              "payment",
              "handled by Apple or Google under their own policies; we never see your payment details"
            ]
          ]
        }
      },
      {
        "p": "Legal basis (GDPR): performance of the service for purchases; legitimate interest for install measurement, statistics and fraud prevention; **consent** for personalised advertising."
      },
      {
        "h2": "Tracking (App Tracking Transparency) and consent"
      },
      {
        "ul": [
          "**iOS**: the app asks for tracking permission (ATT). If you decline, the IDFA is not shared and ads are not personalised.",
          "**EEA, UK, Switzerland**: a Google consent form (UMP, IAB TCF) asks for your choice before any personalised ad. Without consent, ads stay non-personalised.",
          "You can change your mind at any time: iOS tracking settings, Android advertising ID settings, or the consent form available in the app."
        ]
      },
      {
        "h2": "Sharing"
      },
      {
        "p": "AdMob (Google) uses the data for its own advertising purposes: that is sharing. Traqio, RevenueCat and Expo act on our behalf (processors). We never sell data."
      },
      {
        "h2": "Transfers and retention"
      },
      {
        "p": "Providers may process data outside your country (notably in the United States), under GDPR safeguards (standard contractual clauses). Measurement data is kept only as long as campaign analysis needs it; game progress stays on the device while the app is installed."
      },
      {
        "h2": "Children"
      },
      {
        "p": "Labyrinth is not directed at children under 13."
      },
      {
        "h2": "Your rights"
      },
      {
        "p": "Access, rectification, erasure, objection, portability: write to **privacy@khufu.io**. As the app has no account, include your install ID if you can. You may also complain to your data protection authority. Uninstalling the app deletes local progress."
      },
      {
        "h2": "Changes"
      },
      {
        "p": "We will update this page if the app changes; the date above will change accordingly."
      }
    ]
  },
  "es": {
    "title": "Política de privacidad — Blind Labyrinth",
    "metaTitle": "Blind Labyrinth — Política de privacidad",
    "metaDescription": "Datos tratados por el juego móvil Blind Labyrinth (AdMob, Traqio, RevenueCat, Expo), finalidades, consentimiento, conservación y tus derechos.",
    "updated": "Última actualización: 14 de noviembre de 2026",
    "blocks": [
      {
        "h2": "Quiénes somos"
      },
      {
        "p": "Blind Labyrinth («Labyrinth») es un juego móvil publicado por **Khufu FZCO** (Dubái, Emiratos Árabes Unidos), responsable del tratamiento. Contacto: **privacy@khufu.io**."
      },
      {
        "h2": "En resumen"
      },
      {
        "ul": [
          "Sin cuenta, sin email, sin ubicación precisa, sin acceso a tus contactos, fotos o archivos.",
          "Tu progreso se queda en tu teléfono.",
          "La app muestra anuncios de Google AdMob, mide de dónde vienen las instalaciones (Traqio) y gestiona las compras integradas (RevenueCat). Estos servicios reciben los datos descritos abajo."
        ]
      },
      {
        "h2": "Datos tratados y para qué"
      },
      {
        "table": {
          "head": [
            "Servicio",
            "Datos",
            "Finalidad"
          ],
          "rows": [
            [
              "**Google AdMob** (publicidad)",
              "identificador publicitario (IDFA en iOS solo si lo autorizas; ID de publicidad de Android), identificadores de la app, dirección IP (ubicación aproximada), interacciones con anuncios, diagnósticos y rendimiento",
              "mostrar y medir anuncios, prevenir el fraude; anuncios personalizados solo con tu consentimiento (ver «Tus opciones»)"
            ],
            [
              "**Traqio** (medición de instalaciones, nuestra propia herramienta)",
              "ID de instalación aleatorio, modelo, sistema, idioma, versión de la app, origen de la instalación (Play Install Referrer, SKAdNetwork, Apple Search Ads), ID de compra anónimo, eventos de juego (tutorial completado, nivel superado, tienda abierta, compra con precio y moneda), ingresos publicitarios estimados",
              "saber qué campañas traen jugadores y cuánto generan. Traqio no lee el identificador publicitario y no envía nada a ninguna red publicitaria"
            ],
            [
              "**RevenueCat** (compras)",
              "ID de compra anónimo generado por la app, historial de compras, dispositivo y sistema",
              "validar y restaurar tus compras (temas, packs, eliminar anuncios)"
            ],
            [
              "**Expo / EAS Insights**",
              "ID de instalación, sistema, versión de la app, país (según la IP)",
              "estadísticas de estabilidad y uso de versiones"
            ],
            [
              "**App Store / Google Play**",
              "pago",
              "gestionado por Apple o Google según sus propias políticas; nunca vemos tus datos de pago"
            ]
          ]
        }
      },
      {
        "p": "Base legal (RGPD): ejecución del servicio para las compras; interés legítimo para la medición de instalaciones, las estadísticas y la prevención del fraude; **consentimiento** para la publicidad personalizada."
      },
      {
        "h2": "Seguimiento (App Tracking Transparency) y consentimiento"
      },
      {
        "ul": [
          "**iOS**: la app te pide permiso de seguimiento (ATT). Si lo rechazas, el IDFA no se comparte y los anuncios no se personalizan.",
          "**EEE, Reino Unido, Suiza**: un formulario de consentimiento de Google (UMP, IAB TCF) te pide tu elección antes de cualquier anuncio personalizado. Sin consentimiento, los anuncios no se personalizan.",
          "Puedes cambiar de opinión en cualquier momento: ajustes de seguimiento de iOS, ajustes del ID de publicidad de Android, o el formulario de consentimiento disponible en la app."
        ]
      },
      {
        "h2": "Compartir"
      },
      {
        "p": "AdMob (Google) usa los datos para sus propios fines publicitarios: eso es compartir. Traqio, RevenueCat y Expo actúan por cuenta nuestra (encargados del tratamiento). Nunca vendemos datos."
      },
      {
        "h2": "Transferencias y conservación"
      },
      {
        "p": "Los proveedores pueden tratar datos fuera de tu país (en particular en Estados Unidos), con las garantías del RGPD (cláusulas contractuales tipo). Los datos de medición se conservan el tiempo necesario para analizar las campañas; el progreso del juego se queda en el dispositivo mientras la app esté instalada."
      },
      {
        "h2": "Menores"
      },
      {
        "p": "Labyrinth no está dirigido a menores de 13 años."
      },
      {
        "h2": "Tus derechos"
      },
      {
        "p": "Acceso, rectificación, supresión, oposición, portabilidad: escribe a **privacy@khufu.io**. Como la app no tiene cuenta, indícanos tu ID de instalación si puedes. También puedes reclamar ante la autoridad de protección de datos de tu país. Desinstalar la app borra el progreso local."
      },
      {
        "h2": "Cambios"
      },
      {
        "p": "Actualizaremos esta página si la app cambia; la fecha de arriba cambiará en consecuencia."
      }
    ]
  }
}
