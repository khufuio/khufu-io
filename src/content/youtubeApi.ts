import type { Locale } from '@/i18n/config'
import { site } from './site'

/**
 * « YouTube API Services » disclosure required by the YouTube API Services
 * audit for the « Khufu HQ Channels » OAuth client (todo cmwwexn0): privacy
 * section, legal-notice clause and the footer line pointing to the section.
 *
 * Kept in its own file rather than in the 10 page dictionaries so the whole
 * disclosure stays reviewable in one place. Paragraphs use the policy
 * `[label](url)` link syntax, rendered by <PolicyBlocks>.
 */

export const youtubeAnchor = 'youtube-api-services'

export const ytLinks = {
  terms: 'https://www.youtube.com/t/terms',
  googlePrivacy: 'https://policies.google.com/privacy',
  revoke: 'https://security.google.com/settings/security/permissions',
} as const

type YoutubeCopy = {
  heading: string
  privacy: string[]
  legal: string
  footer: string
}

const { terms, googlePrivacy, revoke } = ytLinks
const email = site.email

export const youtubeApiCopy: Record<Locale, YoutubeCopy> = {
  en: {
    heading: 'YouTube API Services',
    privacy: [
      `Khufu uses YouTube API Services to publish and manage videos on its own YouTube channels. By using these features, you agree to be bound by the [YouTube Terms of Service](${terms}). Google processes data according to the [Google Privacy Policy](${googlePrivacy}).`,
      'What we access and store: only the video ID, title and privacy status of videos on our own channels, plus the OAuth tokens that authorise access to them. This data is kept on our private server, used solely to manage our own videos, and is never shared with or sold to third parties.',
      `How to revoke access: you can revoke Khufu's access to YouTube data at any time from your Google security settings: [${revoke}](${revoke}).`,
      `Deletion: OAuth tokens are deleted as soon as access is revoked or the channel is disconnected. Other stored data is deleted on request, or within 30 days of revocation at the latest. To request deletion, email [${email}](mailto:${email}).`,
    ],
    legal: `This service uses YouTube API Services. By using it, you agree to be bound by the [YouTube Terms of Service](${terms}). See also the [Google Privacy Policy](${googlePrivacy}).`,
    footer: 'Uses YouTube API Services',
  },
  fr: {
    heading: 'Services d’API YouTube',
    privacy: [
      `Khufu utilise les services d’API YouTube (YouTube API Services) pour publier et gérer des vidéos sur ses propres chaînes YouTube. En utilisant ces fonctionnalités, vous acceptez d’être lié par les [Conditions d’utilisation de YouTube](${terms}). Google traite les données conformément aux [Règles de confidentialité de Google](${googlePrivacy}).`,
      'Données consultées et conservées : uniquement l’identifiant, le titre et le statut de confidentialité des vidéos de nos propres chaînes, ainsi que les jetons OAuth qui en autorisent l’accès. Ces données sont conservées sur notre serveur privé, utilisées uniquement pour gérer nos propres vidéos, et ne sont jamais partagées ni vendues à des tiers.',
      `Révoquer l’accès : vous pouvez révoquer à tout moment l’accès de Khufu aux données YouTube depuis les paramètres de sécurité de votre compte Google : [${revoke}](${revoke}).`,
      `Suppression : les jetons OAuth sont supprimés dès la révocation de l’accès ou la déconnexion de la chaîne. Les autres données conservées sont supprimées sur demande, ou au plus tard 30 jours après la révocation. Pour demander leur suppression, écrivez à [${email}](mailto:${email}).`,
    ],
    legal: `Ce service utilise les services d’API YouTube (YouTube API Services). En l’utilisant, vous acceptez d’être lié par les [Conditions d’utilisation de YouTube](${terms}). Voir aussi les [Règles de confidentialité de Google](${googlePrivacy}).`,
    footer: 'Utilise les services d’API YouTube',
  },
  es: {
    heading: 'Servicios de API de YouTube',
    privacy: [
      `Khufu utiliza los Servicios de API de YouTube (YouTube API Services) para publicar y gestionar vídeos en sus propios canales de YouTube. Al usar estas funciones, aceptas quedar vinculado por los [Términos de Servicio de YouTube](${terms}). Google trata los datos conforme a la [Política de Privacidad de Google](${googlePrivacy}).`,
      'Qué datos consultamos y almacenamos: solo el ID, el título y el estado de privacidad de los vídeos de nuestros propios canales, además de los tokens OAuth que autorizan el acceso a ellos. Estos datos se guardan en nuestro servidor privado, se usan únicamente para gestionar nuestros propios vídeos y nunca se comparten ni se venden a terceros.',
      `Cómo revocar el acceso: puedes revocar en cualquier momento el acceso de Khufu a los datos de YouTube desde la configuración de seguridad de Google: [${revoke}](${revoke}).`,
      `Eliminación: los tokens OAuth se eliminan en cuanto se revoca el acceso o se desconecta el canal. El resto de datos almacenados se elimina a petición, o como máximo 30 días después de la revocación. Para solicitar la eliminación, escribe a [${email}](mailto:${email}).`,
    ],
    legal: `Este servicio utiliza los Servicios de API de YouTube (YouTube API Services). Al usarlo, aceptas quedar vinculado por los [Términos de Servicio de YouTube](${terms}). Consulta también la [Política de Privacidad de Google](${googlePrivacy}).`,
    footer: 'Usa los Servicios de API de YouTube',
  },
  de: {
    heading: 'YouTube-API-Dienste',
    privacy: [
      `Khufu nutzt die YouTube-API-Dienste (YouTube API Services), um Videos auf seinen eigenen YouTube-Kanälen zu veröffentlichen und zu verwalten. Durch die Nutzung dieser Funktionen erklären Sie sich mit den [YouTube-Nutzungsbedingungen](${terms}) einverstanden. Google verarbeitet Daten gemäß der [Google-Datenschutzerklärung](${googlePrivacy}).`,
      'Welche Daten wir abrufen und speichern: nur die Video-ID, den Titel und den Datenschutzstatus der Videos unserer eigenen Kanäle sowie die OAuth-Tokens, die den Zugriff darauf autorisieren. Diese Daten liegen auf unserem privaten Server, dienen ausschließlich der Verwaltung unserer eigenen Videos und werden niemals an Dritte weitergegeben oder verkauft.',
      `Zugriff widerrufen: Sie können den Zugriff von Khufu auf YouTube-Daten jederzeit in Ihren Google-Sicherheitseinstellungen widerrufen: [${revoke}](${revoke}).`,
      `Löschung: OAuth-Tokens werden gelöscht, sobald der Zugriff widerrufen oder der Kanal getrennt wird. Andere gespeicherte Daten werden auf Anfrage gelöscht, spätestens jedoch 30 Tage nach dem Widerruf. Löschanfragen bitte an [${email}](mailto:${email}).`,
    ],
    legal: `Dieser Dienst nutzt die YouTube-API-Dienste (YouTube API Services). Durch die Nutzung erklären Sie sich mit den [YouTube-Nutzungsbedingungen](${terms}) einverstanden. Siehe auch die [Google-Datenschutzerklärung](${googlePrivacy}).`,
    footer: 'Nutzt die YouTube-API-Dienste',
  },
  it: {
    heading: 'Servizi API di YouTube',
    privacy: [
      `Khufu utilizza i Servizi API di YouTube (YouTube API Services) per pubblicare e gestire video sui propri canali YouTube. Utilizzando queste funzionalità, accetti di essere vincolato dai [Termini di servizio di YouTube](${terms}). Google tratta i dati secondo le [Norme sulla privacy di Google](${googlePrivacy}).`,
      'Quali dati consultiamo e conserviamo: solo l’ID, il titolo e lo stato di privacy dei video dei nostri canali, oltre ai token OAuth che ne autorizzano l’accesso. Questi dati sono conservati sul nostro server privato, usati esclusivamente per gestire i nostri video e mai condivisi né venduti a terzi.',
      `Come revocare l’accesso: puoi revocare in qualsiasi momento l’accesso di Khufu ai dati di YouTube dalle impostazioni di sicurezza di Google: [${revoke}](${revoke}).`,
      `Cancellazione: i token OAuth vengono eliminati non appena l’accesso viene revocato o il canale scollegato. Gli altri dati conservati vengono eliminati su richiesta, o al più tardi entro 30 giorni dalla revoca. Per richiedere la cancellazione, scrivi a [${email}](mailto:${email}).`,
    ],
    legal: `Questo servizio utilizza i Servizi API di YouTube (YouTube API Services). Utilizzandolo, accetti di essere vincolato dai [Termini di servizio di YouTube](${terms}). Vedi anche le [Norme sulla privacy di Google](${googlePrivacy}).`,
    footer: 'Utilizza i Servizi API di YouTube',
  },
  pt: {
    heading: 'Serviços de API do YouTube',
    privacy: [
      `A Khufu utiliza os Serviços de API do YouTube (YouTube API Services) para publicar e gerir vídeos nos seus próprios canais do YouTube. Ao utilizar estas funcionalidades, concorda em ficar vinculado aos [Termos de Serviço do YouTube](${terms}). A Google trata os dados de acordo com a [Política de Privacidade da Google](${googlePrivacy}).`,
      'Que dados acedemos e armazenamos: apenas o ID, o título e o estado de privacidade dos vídeos dos nossos próprios canais, bem como os tokens OAuth que autorizam o acesso a eles. Estes dados ficam no nosso servidor privado, são usados exclusivamente para gerir os nossos próprios vídeos e nunca são partilhados nem vendidos a terceiros.',
      `Como revogar o acesso: pode revogar a qualquer momento o acesso da Khufu aos dados do YouTube nas definições de segurança da Google: [${revoke}](${revoke}).`,
      `Eliminação: os tokens OAuth são eliminados assim que o acesso é revogado ou o canal desligado. Os restantes dados armazenados são eliminados mediante pedido, ou no máximo 30 dias após a revogação. Para pedir a eliminação, escreva para [${email}](mailto:${email}).`,
    ],
    legal: `Este serviço utiliza os Serviços de API do YouTube (YouTube API Services). Ao utilizá-lo, concorda em ficar vinculado aos [Termos de Serviço do YouTube](${terms}). Consulte também a [Política de Privacidade da Google](${googlePrivacy}).`,
    footer: 'Utiliza os Serviços de API do YouTube',
  },
  nl: {
    heading: 'YouTube API-services',
    privacy: [
      `Khufu gebruikt YouTube API-services (YouTube API Services) om video’s op zijn eigen YouTube-kanalen te publiceren en te beheren. Door deze functies te gebruiken, ga je akkoord met de [Servicevoorwaarden van YouTube](${terms}). Google verwerkt gegevens volgens het [Privacybeleid van Google](${googlePrivacy}).`,
      'Welke gegevens we opvragen en opslaan: alleen de video-ID, titel en privacystatus van video’s op onze eigen kanalen, plus de OAuth-tokens die toegang daartoe autoriseren. Deze gegevens staan op onze privéserver, worden uitsluitend gebruikt om onze eigen video’s te beheren en worden nooit gedeeld met of verkocht aan derden.',
      `Toegang intrekken: je kunt de toegang van Khufu tot YouTube-gegevens op elk moment intrekken via je Google-beveiligingsinstellingen: [${revoke}](${revoke}).`,
      `Verwijdering: OAuth-tokens worden verwijderd zodra de toegang wordt ingetrokken of het kanaal wordt ontkoppeld. Overige opgeslagen gegevens worden op verzoek verwijderd, of uiterlijk 30 dagen na intrekking. Verwijderingsverzoeken kun je sturen naar [${email}](mailto:${email}).`,
    ],
    legal: `Deze dienst gebruikt YouTube API-services (YouTube API Services). Door de dienst te gebruiken, ga je akkoord met de [Servicevoorwaarden van YouTube](${terms}). Zie ook het [Privacybeleid van Google](${googlePrivacy}).`,
    footer: 'Gebruikt YouTube API-services',
  },
  ar: {
    heading: 'خدمات YouTube API',
    privacy: [
      `تستخدم خوفو خدمات YouTube API لنشر مقاطع الفيديو وإدارتها على قنواتها الخاصة على YouTube. باستخدامك لهذه الميزات، فإنك توافق على الالتزام [بشروط خدمة YouTube](${terms}). تعالج Google البيانات وفقًا [لسياسة خصوصية Google](${googlePrivacy}).`,
      'البيانات التي نصل إليها ونخزنها: فقط معرّف الفيديو وعنوانه وحالة خصوصيته لمقاطع الفيديو على قنواتنا الخاصة، إضافةً إلى رموز OAuth التي تتيح الوصول إليها. تُحفظ هذه البيانات على خادمنا الخاص، وتُستخدم حصريًا لإدارة مقاطع الفيديو الخاصة بنا، ولا تُشارك مع أي طرف ثالث ولا تُباع أبدًا.',
      `كيفية إلغاء الوصول: يمكنك في أي وقت إلغاء وصول خوفو إلى بيانات YouTube من إعدادات الأمان في حساب Google: [${revoke}](${revoke}).`,
      `الحذف: تُحذف رموز OAuth فور إلغاء الوصول أو فصل القناة. وتُحذف البيانات المخزنة الأخرى عند الطلب، أو خلال 30 يومًا من الإلغاء كحد أقصى. لطلب الحذف، راسلنا على [${email}](mailto:${email}).`,
    ],
    legal: `تستخدم هذه الخدمة خدمات YouTube API. باستخدامها، فإنك توافق على الالتزام [بشروط خدمة YouTube](${terms}). راجع أيضًا [سياسة خصوصية Google](${googlePrivacy}).`,
    footer: 'يستخدم خدمات YouTube API',
  },
  pl: {
    heading: 'Usługi API YouTube',
    privacy: [
      `Khufu korzysta z usług API YouTube (YouTube API Services), aby publikować filmy i zarządzać nimi na własnych kanałach YouTube. Korzystając z tych funkcji, zgadzasz się przestrzegać [Warunków korzystania z usługi YouTube](${terms}). Google przetwarza dane zgodnie z [Polityką prywatności Google](${googlePrivacy}).`,
      'Jakie dane pobieramy i przechowujemy: wyłącznie identyfikator, tytuł i status prywatności filmów na naszych własnych kanałach oraz tokeny OAuth, które autoryzują dostęp do nich. Dane te są przechowywane na naszym prywatnym serwerze, używane wyłącznie do zarządzania naszymi filmami i nigdy nie są udostępniane ani sprzedawane osobom trzecim.',
      `Jak cofnąć dostęp: w każdej chwili możesz cofnąć dostęp Khufu do danych YouTube w ustawieniach zabezpieczeń Google: [${revoke}](${revoke}).`,
      `Usuwanie: tokeny OAuth są usuwane natychmiast po cofnięciu dostępu lub odłączeniu kanału. Pozostałe przechowywane dane są usuwane na żądanie, najpóźniej w ciągu 30 dni od cofnięcia dostępu. Aby poprosić o usunięcie, napisz na [${email}](mailto:${email}).`,
    ],
    legal: `Ta usługa korzysta z usług API YouTube (YouTube API Services). Korzystając z niej, zgadzasz się przestrzegać [Warunków korzystania z usługi YouTube](${terms}). Zobacz też [Politykę prywatności Google](${googlePrivacy}).`,
    footer: 'Korzysta z usług API YouTube',
  },
  tr: {
    heading: 'YouTube API Hizmetleri',
    privacy: [
      `Khufu, kendi YouTube kanallarında video yayınlamak ve yönetmek için YouTube API Hizmetlerini (YouTube API Services) kullanır. Bu özellikleri kullanarak [YouTube Hizmet Şartları](${terms}) ile bağlı olmayı kabul edersiniz. Google, verileri [Google Gizlilik Politikası](${googlePrivacy}) uyarınca işler.`,
      'Eriştiğimiz ve sakladığımız veriler: yalnızca kendi kanallarımızdaki videoların kimliği, başlığı ve gizlilik durumu ile bunlara erişimi yetkilendiren OAuth belirteçleri. Bu veriler özel sunucumuzda tutulur, yalnızca kendi videolarımızı yönetmek için kullanılır ve hiçbir zaman üçüncü taraflarla paylaşılmaz veya satılmaz.',
      `Erişimi iptal etme: Khufu’nun YouTube verilerine erişimini istediğiniz zaman Google güvenlik ayarlarınızdan iptal edebilirsiniz: [${revoke}](${revoke}).`,
      `Silme: OAuth belirteçleri, erişim iptal edildiğinde veya kanal bağlantısı kesildiğinde hemen silinir. Diğer saklanan veriler talep üzerine, en geç iptalden itibaren 30 gün içinde silinir. Silme talebi için [${email}](mailto:${email}) adresine yazın.`,
    ],
    legal: `Bu hizmet YouTube API Hizmetlerini (YouTube API Services) kullanır. Hizmeti kullanarak [YouTube Hizmet Şartları](${terms}) ile bağlı olmayı kabul edersiniz. Ayrıca bkz. [Google Gizlilik Politikası](${googlePrivacy}).`,
    footer: 'YouTube API Hizmetlerini kullanır',
  },
}
