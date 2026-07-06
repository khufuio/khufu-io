import type { Locale } from '@/i18n/config'
import { fillLocaleDeep, type LocalizedInput } from '@/i18n/localize'

export type Testimonial = {
  /** The review text. Original is French (Malt); translated for other locales. */
  quote: Record<Locale, string>
  author: string
  /** Role / company, e.g. "CEO, Flatchr". */
  role?: string
  /** Where the review comes from, e.g. "Malt". */
  source?: string
}

type TestimonialInput = Omit<Testimonial, 'quote'> & { quote: LocalizedInput }

// Real client reviews (Malt) of Adrien, Khufu's founder. Original wording is
// French; other locales are translations (untranslated locales fall back to fr).
const testimonialsData: TestimonialInput[] = [
  {
    quote: {
      fr: 'Nous avons eu la chance de collaborer avec Adrien, un développeur mobile freelance exceptionnel, sur un projet essentiel pour notre entreprise. Adrien a joué un rôle clé dans la correction et l’optimisation de notre application mobile, la rendant parfaitement fonctionnelle et beaucoup plus performante.',
      en: "We had the chance to work with Adrien, an exceptional freelance mobile developer, on a project that was essential for our company. Adrien played a key role in fixing and optimizing our mobile app, making it perfectly functional and far more performant.",
      es: "Tuvimos la suerte de colaborar con Adrien, un desarrollador móvil freelance excepcional, en un proyecto esencial para nuestra empresa. Adrien desempeñó un papel clave en la corrección y optimización de nuestra aplicación móvil, dejándola perfectamente funcional y mucho más eficiente.",
      de: "Wir hatten das Glück, mit Adrien, einem herausragenden freiberuflichen Mobile-Entwickler, an einem für unser Unternehmen entscheidenden Projekt zu arbeiten. Adrien spielte eine Schlüsselrolle bei der Fehlerbehebung und Optimierung unserer mobilen App und machte sie einwandfrei funktionsfähig und deutlich leistungsstärker.",
      it: "Abbiamo avuto la fortuna di collaborare con Adrien, un eccezionale sviluppatore mobile freelance, su un progetto essenziale per la nostra azienda. Adrien ha svolto un ruolo chiave nella correzione e ottimizzazione della nostra applicazione mobile, rendendola perfettamente funzionante e molto più performante.",
      pt: "Tivemos a sorte de colaborar com Adrien, um desenvolvedor mobile freelancer excepcional, num projeto essencial para a nossa empresa. Adrien desempenhou um papel fundamental na correção e otimização da nossa aplicação móvel, tornando-a perfeitamente funcional e muito mais performática.",
      nl: "We hadden het geluk om samen te werken met Adrien, een uitzonderlijke freelance mobiele ontwikkelaar, aan een project dat essentieel was voor ons bedrijf. Adrien speelde een sleutelrol bij het corrigeren en optimaliseren van onze mobiele app, waardoor deze perfect functioneel en veel performanter werd.",
      ar: "لقد حالفنا الحظ بالتعاون مع Adrien، وهو مطوّر تطبيقات محمول مستقل استثنائي، في مشروع بالغ الأهمية لشركتنا. أدّى Adrien دورًا محوريًا في تصحيح تطبيقنا للهاتف المحمول وتحسينه، مما جعله يعمل بشكل مثالي وأكثر كفاءةً بكثير.",
      pl: "Mieliśmy szczęście współpracować z Adrienem, wyjątkowym freelancerskim programistą mobilnym, przy projekcie kluczowym dla naszej firmy. Adrien odegrał zasadniczą rolę w naprawie i optymalizacji naszej aplikacji mobilnej, sprawiając, że działa bez zarzutu i jest znacznie wydajniejsza.",
      tr: "Şirketimiz için hayati önem taşıyan bir projede, olağanüstü bir serbest mobil geliştirici olan Adrien ile çalışma şansına eriştik. Adrien, mobil uygulamamızın düzeltilmesinde ve optimize edilmesinde kilit bir rol oynayarak onu kusursuz çalışır ve çok daha yüksek performanslı hâle getirdi.",
    },
    author: 'Damien',
    role: 'Flatchr',
    source: 'Malt',
  },
  {
    quote: {
      fr: 'Je ne pouvais pas espérer mieux que la collaboration avec Adrien sur notre projet. Il a su reprendre le code de l’ancien développeur, terminer la mission initiale et s’est montré ultra disponible et fluide dans les échanges. Son profil est excellent et sait répondre avec qualité à tout besoin de développement.',
      en: "I couldn't have hoped for better than working with Adrien on our project. He was able to pick up the previous developer's code, complete the original assignment, and proved extremely available and smooth to communicate with. His profile is excellent and he can address any development need with quality.",
      es: "No podía esperar nada mejor que la colaboración con Adrien en nuestro proyecto. Supo retomar el código del desarrollador anterior, completar la misión inicial y se mostró siempre disponible y fluido en los intercambios. Su perfil es excelente y sabe responder con calidad a cualquier necesidad de desarrollo.",
      de: "Eine bessere Zusammenarbeit als die mit Adrien an unserem Projekt hätte ich mir nicht wünschen können. Er konnte den Code des vorherigen Entwicklers übernehmen, die ursprüngliche Aufgabe abschließen und war stets äußerst verfügbar und unkompliziert im Austausch. Sein Profil ist hervorragend und er kann jeden Entwicklungsbedarf in hoher Qualität abdecken.",
      it: "Non potevo sperare in una collaborazione migliore di quella con Adrien sul nostro progetto. Ha saputo riprendere il codice del precedente sviluppatore, portare a termine l'incarico iniziale e si è dimostrato estremamente disponibile e fluido negli scambi. Il suo profilo è eccellente ed è in grado di rispondere con qualità a qualsiasi esigenza di sviluppo.",
      pt: "Não podia esperar melhor do que a colaboração com Adrien no nosso projeto. Soube retomar o código do desenvolvedor anterior, concluir a missão inicial e mostrou-se sempre muito disponível e fluido nas trocas. O seu perfil é excelente e sabe responder com qualidade a qualquer necessidade de desenvolvimento.",
      nl: "Ik had me geen betere samenwerking kunnen wensen dan die met Adrien aan ons project. Hij wist de code van de vorige ontwikkelaar over te nemen, de oorspronkelijke opdracht af te ronden en was uiterst beschikbaar en soepel in de communicatie. Zijn profiel is uitstekend en hij kan met kwaliteit inspelen op elke ontwikkelbehoefte.",
      ar: "لم أكن لأتمنى أفضل من التعاون مع Adrien في مشروعنا. فقد تمكّن من استئناف شيفرة المطوّر السابق، وإنجاز المهمة الأولية، وأثبت أنه متاح للغاية وسلس في التواصل. ملفه الاحترافي ممتاز، وهو قادر على تلبية أي حاجة تطويرية بجودة عالية.",
      pl: "Nie mogłem sobie wymarzyć lepszej współpracy niż ta z Adrienem przy naszym projekcie. Potrafił przejąć kod poprzedniego programisty, dokończyć pierwotne zadanie i okazał się niezwykle dostępny oraz swobodny w komunikacji. Jego profil jest znakomity i potrafi z wysoką jakością odpowiedzieć na każdą potrzebę programistyczną.",
      tr: "Projemizde Adrien ile yaptığımız iş birliğinden daha iyisini umut edemezdim. Önceki geliştiricinin kodunu devralmayı, ilk görevi tamamlamayı başardı ve iletişimde son derece erişilebilir ve akıcı olduğunu gösterdi. Profili mükemmel ve her türlü geliştirme ihtiyacına kaliteli bir şekilde yanıt verebiliyor.",
    },
    author: 'Gatien',
    role: 'Qwenty',
    source: 'Malt',
  },
  {
    quote: {
      fr: 'Expérience positive avec Adrien pour un projet de développement from scratch d’une appli web Node/ReactJS. L’atout majeur d’Adrien repose dans sa capacité à comprendre le besoin et à le retranscrire de manière concrète dans le cadre du développement. Les initiatives prises sont les bonnes.',
      en: "A positive experience with Adrien on a from-scratch development project for a Node/ReactJS web app. Adrien's main strength lies in his ability to understand the need and translate it concretely into the development work. The initiatives he takes are the right ones.",
      es: "Experiencia positiva con Adrien en un proyecto de desarrollo desde cero de una aplicación web Node/ReactJS. La gran baza de Adrien reside en su capacidad para comprender la necesidad y plasmarla de forma concreta en el desarrollo. Las iniciativas que toma son las acertadas.",
      de: "Eine positive Erfahrung mit Adrien bei einem Entwicklungsprojekt für eine Node/ReactJS-Webanwendung, das von Grund auf neu entstand. Adriens größte Stärke liegt in seiner Fähigkeit, den Bedarf zu verstehen und ihn konkret in die Entwicklung umzusetzen. Die Initiativen, die er ergreift, sind genau die richtigen.",
      it: "Esperienza positiva con Adrien per un progetto di sviluppo da zero di un'applicazione web Node/ReactJS. Il punto di forza principale di Adrien risiede nella sua capacità di comprendere l'esigenza e di tradurla concretamente nel lavoro di sviluppo. Le iniziative che prende sono quelle giuste.",
      pt: "Experiência positiva com Adrien num projeto de desenvolvimento de raiz de uma aplicação web Node/ReactJS. O grande trunfo de Adrien reside na sua capacidade de compreender a necessidade e de a transpor de forma concreta para o desenvolvimento. As iniciativas que toma são as certas.",
      nl: "Een positieve ervaring met Adrien bij een from-scratch ontwikkelproject voor een Node/ReactJS-webapp. De grootste troef van Adrien ligt in zijn vermogen om de behoefte te begrijpen en die concreet te vertalen naar het ontwikkelwerk. De initiatieven die hij neemt, zijn de juiste.",
      ar: "تجربة إيجابية مع Adrien في مشروع تطوير من الصفر لتطبيق ويب بتقنية Node/ReactJS. تكمن نقطة القوة الأساسية لدى Adrien في قدرته على فهم الاحتياج وترجمته بشكل ملموس ضمن عملية التطوير. والمبادرات التي يتخذها هي الصائبة.",
      pl: "Pozytywne doświadczenie z Adrienem przy projekcie tworzonym od zera — aplikacji webowej w Node/ReactJS. Największym atutem Adriena jest jego zdolność do zrozumienia potrzeby i przełożenia jej w konkretny sposób na pracę programistyczną. Podejmowane przez niego inicjatywy są trafne.",
      tr: "Node/ReactJS ile sıfırdan geliştirilen bir web uygulaması projesinde Adrien ile olumlu bir deneyim yaşadık. Adrien'in en büyük gücü, ihtiyacı anlama ve bunu geliştirme sürecine somut biçimde aktarma yeteneğinde yatıyor. Aldığı inisiyatifler tam da isabetli olanlar.",
    },
    author: 'David',
    role: 'Bleu Blanc Tech',
    source: 'Malt',
  },
]

export const testimonials = fillLocaleDeep(testimonialsData) as unknown as Testimonial[]
