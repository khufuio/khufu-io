import type { Locale } from '@/i18n/config'
import { fillLocaleDeep, type LocalizedInput } from '@/i18n/localize'
import type { RouteKey } from './site'

// Consumer-facing localized type: fully populated for every locale.
export type L = Record<Locale, string>
// Authoring type: base languages required, untranslated locales filled from fr.
type LIn = LocalizedInput

export type ComparisonRow = { aspect: L; khufu: L; other: L }

export type Comparison = {
  slug: string
  metaTitle: L
  metaDescription: L
  title: L
  intro: L
  khufuLabel: L
  otherLabel: L
  rows: ComparisonRow[]
  conclusion: L
  cta: RouteKey
}

export type UseCase = {
  slug: string
  metaTitle: L
  metaDescription: L
  persona: L
  title: L
  intro: L
  problems: L[]
  approach: L
  outcomes: L[]
  cta: RouteKey
}

type ComparisonInput = {
  slug: string
  metaTitle: LIn
  metaDescription: LIn
  title: LIn
  intro: LIn
  khufuLabel: LIn
  otherLabel: LIn
  rows: { aspect: LIn; khufu: LIn; other: LIn }[]
  conclusion: LIn
  cta: RouteKey
}

type UseCaseInput = {
  slug: string
  metaTitle: LIn
  metaDescription: LIn
  persona: LIn
  title: LIn
  intro: LIn
  problems: LIn[]
  approach: LIn
  outcomes: LIn[]
  cta: RouteKey
}

// ── Comparisons (/comparatifs/[slug]) ────────────────────────────────────────
// `cto-on-demand-vs-equipe-tech` is an acquisition page, not the positioning:
// buyers shopping for a fractional CTO type that query, and the page answers it
// by selling the Sprint V1. The headline offer stays the sprint everywhere else.
const comparisonsData: ComparisonInput[] = [
  {
    slug: 'v1-vs-mvp',
    metaTitle: { fr: 'V1 vs MVP : quelle différence ?', en: 'V1 vs MVP: what’s the difference?', es: 'V1 vs MVP: ¿qué diferencia?', de: 'V1 vs. MVP: Was ist der Unterschied?', it: 'V1 vs MVP: qual è la differenza?', pt: 'V1 vs MVP: qual é a diferença?', nl: 'V1 vs MVP: wat is het verschil?', ar: 'V1 مقابل MVP: ما الفرق؟', pl: 'V1 vs MVP: jaka jest różnica?', tr: 'V1 vs MVP: fark nedir?' },
    metaDescription: {
      fr: 'V1 ou MVP ? La différence entre un MVP jetable et une vraie première version prête pour la production, et pourquoi Khufu livre une V1.',
      en: 'V1 or MVP? The difference between a throwaway MVP and a real production-ready first version, and why Khufu ships a V1.',
      es: '¿V1 o MVP? La diferencia entre un MVP desechable y una primera versión lista para producción, y por qué Khufu entrega una V1.',
      de: 'V1 oder MVP? Der Unterschied zwischen einem wegwerfbaren MVP und einer echten, produktionsreifen ersten Version – und warum Khufu eine V1 liefert.',
      it: 'V1 o MVP? La differenza tra un MVP usa e getta e una vera prima versione pronta per la produzione, e perché Khufu consegna una V1.',
      pt: 'V1 ou MVP? A diferença entre um MVP descartável e uma verdadeira primeira versão pronta para produção, e porque a Khufu entrega uma V1.',
      nl: 'V1 of MVP? Het verschil tussen een wegwerp-MVP en een echte, productieklare eerste versie, en waarom Khufu een V1 levert.',
      ar: 'V1 أم MVP؟ الفرق بين MVP قابل للتخلص منه ونسخة أولى حقيقية جاهزة للإنتاج، ولماذا تُسلّم Khufu نسخة V1.',
      pl: 'V1 czy MVP? Różnica między jednorazowym MVP a prawdziwą, gotową do produkcji pierwszą wersją oraz dlaczego Khufu dostarcza V1.',
      tr: 'V1 mi MVP mi? Tek kullanımlık bir MVP ile üretime hazır gerçek bir ilk sürüm arasındaki fark ve Khufu’nun neden V1 teslim ettiği.',
    },
    title: { fr: 'V1 vs MVP', en: 'V1 vs MVP', es: 'V1 vs MVP', de: 'V1 vs. MVP', it: 'V1 vs MVP', pt: 'V1 vs MVP', nl: 'V1 vs MVP', ar: 'V1 مقابل MVP', pl: 'V1 vs MVP', tr: 'V1 vs MVP' },
    intro: {
      fr: 'Un MVP cherche à tester une idée avec le strict minimum, souvent au prix d’un code jetable. Une V1 Khufu est une vraie première version, propre et prête pour la production dès le premier jour. Même délai, mais un produit qui dure.',
      en: 'An MVP tries to test an idea with the bare minimum, often at the cost of throwaway code. A Khufu V1 is a real first version, clean and production-ready from day one. Same timeline, but a product that lasts.',
      es: 'Un MVP intenta validar una idea con lo mínimo, a menudo con código desechable. Una V1 de Khufu es una primera versión real, limpia y lista para producción desde el primer día. El mismo plazo, pero un producto que perdura.',
      de: 'Ein MVP will eine Idee mit dem absoluten Minimum testen, oft um den Preis von wegwerfbarem Code. Eine V1 von Khufu ist eine echte erste Version, sauber und ab dem ersten Tag produktionsreif. Gleicher Zeitrahmen, aber ein Produkt, das Bestand hat.',
      it: 'Un MVP cerca di testare un’idea con il minimo indispensabile, spesso al prezzo di codice usa e getta. Una V1 di Khufu è una vera prima versione, pulita e pronta per la produzione fin dal primo giorno. Stessi tempi, ma un prodotto che dura.',
      pt: 'Um MVP procura testar uma ideia com o mínimo indispensável, muitas vezes à custa de código descartável. Uma V1 da Khufu é uma verdadeira primeira versão, limpa e pronta para produção desde o primeiro dia. O mesmo prazo, mas um produto que dura.',
      nl: 'Een MVP wil een idee testen met het absolute minimum, vaak ten koste van wegwerpcode. Een V1 van Khufu is een echte eerste versie, netjes en vanaf dag één productieklaar. Dezelfde doorlooptijd, maar een product dat blijft.',
      ar: 'يحاول الـ MVP اختبار فكرة بالحد الأدنى المطلق، وغالبًا على حساب كود قابل للتخلص منه. أما نسخة V1 من Khufu فهي نسخة أولى حقيقية، نظيفة وجاهزة للإنتاج منذ اليوم الأول. المدة نفسها، لكن منتج يدوم.',
      pl: 'MVP stara się przetestować pomysł przy minimum nakładu, często kosztem jednorazowego kodu. V1 od Khufu to prawdziwa pierwsza wersja, czysta i gotowa do produkcji od pierwszego dnia. Ten sam termin, ale produkt, który przetrwa.',
      tr: 'MVP, bir fikri asgari düzeyde test etmeye çalışır, çoğu zaman tek kullanımlık kod pahasına. Khufu’nun V1’i ise gerçek bir ilk sürümdür; temiz ve ilk günden üretime hazır. Aynı süre, ama kalıcı bir ürün.',
    },
    khufuLabel: { fr: 'V1 (Khufu)', en: 'V1 (Khufu)', es: 'V1 (Khufu)', de: 'V1 (Khufu)', it: 'V1 (Khufu)', pt: 'V1 (Khufu)', nl: 'V1 (Khufu)', ar: 'V1 (Khufu)', pl: 'V1 (Khufu)', tr: 'V1 (Khufu)' },
    otherLabel: { fr: 'MVP classique', en: 'Classic MVP', es: 'MVP clásico', de: 'Klassisches MVP', it: 'MVP classico', pt: 'MVP clássico', nl: 'Klassiek MVP', ar: 'MVP تقليدي', pl: 'Klasyczne MVP', tr: 'Klasik MVP' },
    rows: [
      {
        aspect: { fr: 'Objectif', en: 'Goal', es: 'Objetivo', de: 'Ziel', it: 'Obiettivo', pt: 'Objetivo', nl: 'Doel', ar: 'الهدف', pl: 'Cel', tr: 'Amaç' },
        khufu: { fr: 'Lancer un vrai produit utilisable', en: 'Ship a real, usable product', es: 'Lanzar un producto real y usable', de: 'Ein echtes, nutzbares Produkt launchen', it: 'Lanciare un prodotto reale e utilizzabile', pt: 'Lançar um produto real e utilizável', nl: 'Een echt, bruikbaar product lanceren', ar: 'إطلاق منتج حقيقي قابل للاستخدام', pl: 'Wypuścić prawdziwy, użyteczny produkt', tr: 'Gerçek, kullanılabilir bir ürün yayınlamak' },
        other: { fr: 'Tester une idée au minimum', en: 'Test an idea, bare minimum', es: 'Validar una idea al mínimo', de: 'Eine Idee mit dem Minimum testen', it: 'Testare un’idea al minimo', pt: 'Testar uma ideia com o mínimo', nl: 'Een idee minimaal testen', ar: 'اختبار فكرة بالحد الأدنى', pl: 'Przetestować pomysł na minimum', tr: 'Bir fikri asgari düzeyde test etmek' },
      },
      {
        aspect: { fr: 'Qualité du code', en: 'Code quality', es: 'Calidad del código', de: 'Codequalität', it: 'Qualità del codice', pt: 'Qualidade do código', nl: 'Codekwaliteit', ar: 'جودة الكود', pl: 'Jakość kodu', tr: 'Kod kalitesi' },
        khufu: { fr: 'Stack de production, maintenable', en: 'Production stack, maintainable', es: 'Stack de producción, mantenible', de: 'Produktions-Stack, wartbar', it: 'Stack di produzione, manutenibile', pt: 'Stack de produção, mantível', nl: 'Productiestack, onderhoudbaar', ar: 'حزمة إنتاجية قابلة للصيانة', pl: 'Stack produkcyjny, łatwy w utrzymaniu', tr: 'Üretim stack’i, sürdürülebilir' },
        other: { fr: 'Souvent jetable, à réécrire', en: 'Often throwaway, to rewrite', es: 'A menudo desechable, a reescribir', de: 'Oft wegwerfbar, neu zu schreiben', it: 'Spesso usa e getta, da riscrivere', pt: 'Muitas vezes descartável, a reescrever', nl: 'Vaak wegwerp, te herschrijven', ar: 'غالبًا قابل للتخلص منه، يحتاج إعادة كتابة', pl: 'Często jednorazowy, do przepisania', tr: 'Genelde tek kullanımlık, yeniden yazılacak' },
      },
      {
        aspect: { fr: 'Après le lancement', en: 'After launch', es: 'Después del lanzamiento', de: 'Nach dem Launch', it: 'Dopo il lancio', pt: 'Após o lançamento', nl: 'Na de lancering', ar: 'بعد الإطلاق', pl: 'Po uruchomieniu', tr: 'Lansmandan sonra' },
        khufu: { fr: 'Évolue et scale sans dette', en: 'Evolves and scales, no debt', es: 'Evoluciona y escala, sin deuda', de: 'Wächst und skaliert ohne Schulden', it: 'Evolve e scala senza debito', pt: 'Evolui e escala sem dívida', nl: 'Groeit en schaalt zonder schuld', ar: 'يتطوّر ويتوسّع دون ديون تقنية', pl: 'Rozwija się i skaluje bez długu', tr: 'Borç olmadan gelişir ve ölçeklenir' },
        other: { fr: 'Refonte souvent nécessaire', en: 'Often needs a rebuild', es: 'Suele requerir rehacerlo', de: 'Oft ist ein Neubau nötig', it: 'Spesso serve rifarlo', pt: 'Muitas vezes exige refazer', nl: 'Vaak een herbouw nodig', ar: 'غالبًا يتطلّب إعادة بناء', pl: 'Często wymaga przebudowy', tr: 'Genelde yeniden yapım gerekir' },
      },
      {
        aspect: { fr: 'Délai', en: 'Timeline', es: 'Plazo', de: 'Zeitrahmen', it: 'Tempi', pt: 'Prazo', nl: 'Doorlooptijd', ar: 'المدة', pl: 'Termin', tr: 'Süre' },
        khufu: { fr: '7 jours', en: '7 days', es: '7 días', de: '7 Tage', it: '7 giorni', pt: '7 dias', nl: '7 dagen', ar: '7 أيام', pl: '7 dni', tr: '7 gün' },
        other: { fr: 'Semaines à mois', en: 'Weeks to months', es: 'Semanas a meses', de: 'Wochen bis Monate', it: 'Da settimane a mesi', pt: 'Semanas a meses', nl: 'Weken tot maanden', ar: 'من أسابيع إلى أشهر', pl: 'Tygodnie do miesięcy', tr: 'Haftalar ila aylar' },
      },
    ],
    conclusion: {
      fr: 'Chez Khufu, on skip l’étape MVP : on va directement à une V1 solide, en 7 jours, pour un prix fixe de 15 000 €.',
      en: 'At Khufu, we skip the MVP stage: we go straight to a solid V1 in 7 days, for a fixed price of €15,000.',
      es: 'En Khufu nos saltamos la etapa de MVP: vamos directos a una V1 sólida en 7 días, por un precio fijo de 15 000 €.',
      de: 'Bei Khufu überspringen wir die MVP-Phase: Wir gehen direkt zu einer soliden V1, in 7 Tagen, zum Festpreis von 15 000 €.',
      it: 'Da Khufu saltiamo la fase MVP: andiamo direttamente a una V1 solida, in 7 giorni, a un prezzo fisso di 15 000 €.',
      pt: 'Na Khufu saltamos a etapa do MVP: vamos diretamente para uma V1 sólida, em 7 dias, por um preço fixo de 15 000 €.',
      nl: 'Bij Khufu slaan we de MVP-fase over: we gaan direct naar een solide V1, in 7 dagen, voor een vaste prijs van 15 000 €.',
      ar: 'في Khufu نتخطّى مرحلة الـ MVP: ننتقل مباشرةً إلى نسخة V1 متينة، خلال 7 أيام، بسعر ثابت قدره 15 000 €.',
      pl: 'W Khufu pomijamy etap MVP: przechodzimy od razu do solidnej V1, w 7 dni, za stałą cenę 15 000 €.',
      tr: 'Khufu’da MVP aşamasını atlıyoruz: doğrudan sağlam bir V1’e geçiyoruz, 7 günde, 15 000 € sabit fiyata.',
    },
    cta: 'sprint',
  },
  {
    slug: 'cto-on-demand-vs-equipe-tech',
    metaTitle: { fr: 'CTO on demand vs équipe tech complète', en: 'CTO on demand vs a full tech team', es: 'CTO on demand vs equipo técnico completo', de: 'CTO on demand vs. komplettes Tech-Team', it: 'CTO on demand vs team tecnico completo', pt: 'CTO on demand vs equipa técnica completa', nl: 'CTO on demand vs een compleet techteam', ar: 'مدير تقني عند الطلب مقابل فريق تقني متكامل', pl: 'CTO na żądanie vs kompletny zespół techniczny', tr: 'Talep üzerine CTO vs eksiksiz teknoloji ekibi' },
    metaDescription: {
      fr: 'CTO à temps partagé ou équipe tech complète ? Ce que chacun livre vraiment, ce qu’il reste à faire après, et pourquoi un founder non technique a besoin d’une équipe, pas seulement d’un CTO.',
      en: 'Fractional CTO or a full tech team? What each one actually delivers, what is left to do afterwards, and why a non-technical founder needs a team, not just a CTO.',
      es: '¿CTO a tiempo parcial o equipo técnico completo? Qué entrega realmente cada uno, qué queda por hacer después y por qué un founder no técnico necesita un equipo, no solo un CTO.',
      de: 'Fractional CTO oder komplettes Tech-Team? Was beide wirklich liefern, was danach noch zu tun bleibt und warum ein nicht-technischer Founder ein Team braucht, nicht nur einen CTO.',
      it: 'CTO frazionale o team tecnico completo? Cosa consegna davvero ciascuno, cosa resta da fare dopo e perché un founder non tecnico ha bisogno di un team, non solo di un CTO.',
      pt: 'CTO a tempo parcial ou equipa técnica completa? O que cada um entrega de facto, o que fica por fazer depois e porque um founder não técnico precisa de uma equipa, não apenas de um CTO.',
      nl: 'Parttime CTO of een compleet techteam? Wat elk echt oplevert, wat er daarna nog te doen is, en waarom een niet-technische founder een team nodig heeft en niet alleen een CTO.',
      ar: 'مدير تقني بدوام جزئي أم فريق تقني متكامل؟ ما الذي يقدّمه كل منهما فعلًا، وما الذي يبقى بعده، ولماذا يحتاج المؤسِّس غير التقني إلى فريق لا إلى مدير تقني فقط.',
      pl: 'CTO na część etatu czy kompletny zespół techniczny? Co każde z nich naprawdę dostarcza, co zostaje do zrobienia potem i dlaczego nietechniczny founder potrzebuje zespołu, a nie tylko CTO.',
      tr: 'Yarı zamanlı CTO mu, eksiksiz bir teknoloji ekibi mi? Her birinin gerçekte ne teslim ettiği, sonrasında geriye ne kaldığı ve teknik olmayan bir founder’ın neden sadece CTO’ya değil bir ekibe ihtiyaç duyduğu.',
    },
    title: { fr: 'CTO on demand vs équipe tech complète', en: 'CTO on demand vs a full tech team', es: 'CTO on demand vs equipo técnico completo', de: 'CTO on demand vs. komplettes Tech-Team', it: 'CTO on demand vs team tecnico completo', pt: 'CTO on demand vs equipa técnica completa', nl: 'CTO on demand vs een compleet techteam', ar: 'مدير تقني عند الطلب مقابل فريق تقني متكامل', pl: 'CTO na żądanie vs kompletny zespół techniczny', tr: 'Talep üzerine CTO vs eksiksiz teknoloji ekibi' },
    intro: {
      fr: 'Un CTO à temps partagé vend du temps de réflexion : architecture, arbitrages, recrutement, roadmap. C’est utile — mais quand la mission s’arrête, personne n’a encore écrit une ligne de votre produit. Une équipe tech complète vend l’inverse : les mêmes décisions, plus les mains qui exécutent, et un produit en production au bout.',
      en: 'A fractional CTO sells thinking time: architecture, trade-offs, hiring, roadmap. That is useful — but when the engagement ends, nobody has written a line of your product yet. A full tech team sells the opposite: the same decisions, plus the hands that execute, and a product in production at the end.',
      es: 'Un CTO a tiempo parcial vende tiempo de reflexión: arquitectura, criterios, contratación, hoja de ruta. Es útil — pero cuando acaba el encargo, nadie ha escrito todavía una línea de tu producto. Un equipo técnico completo vende lo contrario: las mismas decisiones, más las manos que ejecutan, y un producto en producción al final.',
      de: 'Ein Fractional CTO verkauft Denkzeit: Architektur, Abwägungen, Recruiting, Roadmap. Das ist nützlich — aber wenn das Mandat endet, hat noch niemand eine Zeile deines Produkts geschrieben. Ein komplettes Tech-Team verkauft das Gegenteil: dieselben Entscheidungen, plus die Hände, die umsetzen, und am Ende ein Produkt in Produktion.',
      it: 'Un CTO frazionale vende tempo di riflessione: architettura, scelte, assunzioni, roadmap. È utile — ma quando l’incarico finisce, nessuno ha ancora scritto una riga del tuo prodotto. Un team tecnico completo vende l’opposto: le stesse decisioni, più le mani che eseguono, e un prodotto in produzione alla fine.',
      pt: 'Um CTO a tempo parcial vende tempo de reflexão: arquitetura, decisões, recrutamento, roadmap. É útil — mas quando o trabalho acaba, ninguém escreveu ainda uma linha do seu produto. Uma equipa técnica completa vende o contrário: as mesmas decisões, mais as mãos que executam, e um produto em produção no fim.',
      nl: 'Een parttime CTO verkoopt denktijd: architectuur, afwegingen, werving, roadmap. Dat is nuttig — maar als de opdracht eindigt, heeft nog niemand een regel van je product geschreven. Een compleet techteam verkoopt het omgekeerde: dezelfde beslissingen, plus de handen die uitvoeren, en aan het eind een product in productie.',
      ar: 'المدير التقني بدوام جزئي يبيع وقت تفكير: البنية المعمارية والمفاضلات والتوظيف وخارطة الطريق. هذا مفيد — لكن عند انتهاء المهمة لم يكتب أحد بعدُ سطرًا واحدًا من منتجك. أما الفريق التقني المتكامل فيبيع العكس: القرارات نفسها، إضافة إلى الأيدي التي تنفّذ، ومنتج في الإنتاج في النهاية.',
      pl: 'CTO na część etatu sprzedaje czas na myślenie: architekturę, decyzje, rekrutację, roadmapę. To przydatne — ale gdy współpraca się kończy, nikt nie napisał jeszcze linijki Twojego produktu. Kompletny zespół techniczny sprzedaje odwrotność: te same decyzje plus ręce, które wykonują, i produkt na produkcji na końcu.',
      tr: 'Yarı zamanlı bir CTO düşünme zamanı satar: mimari, tercihler, işe alım, yol haritası. Bu faydalıdır — ama görev bittiğinde ürününüzün henüz tek satırı yazılmamıştır. Eksiksiz bir teknoloji ekibi bunun tersini satar: aynı kararlar, artı uygulayan eller ve sonunda üretimde bir ürün.',
    },
    khufuLabel: { fr: 'Khufu', en: 'Khufu', es: 'Khufu', de: 'Khufu', it: 'Khufu', pt: 'Khufu', nl: 'Khufu', ar: 'Khufu', pl: 'Khufu', tr: 'Khufu' },
    otherLabel: { fr: 'CTO on demand', en: 'CTO on demand', es: 'CTO on demand', de: 'CTO on demand', it: 'CTO on demand', pt: 'CTO on demand', nl: 'CTO on demand', ar: 'مدير تقني عند الطلب', pl: 'CTO na żądanie', tr: 'Talep üzerine CTO' },
    rows: [
      {
        aspect: { fr: 'Ce que vous recevez', en: 'What you get', es: 'Qué recibes', de: 'Was du bekommst', it: 'Cosa ricevi', pt: 'O que recebe', nl: 'Wat je krijgt', ar: 'ما الذي تحصل عليه', pl: 'Co dostajesz', tr: 'Ne alırsınız' },
        khufu: { fr: 'Un produit en ligne, en production', en: 'A product online, in production', es: 'Un producto online, en producción', de: 'Ein Produkt online, in Produktion', it: 'Un prodotto online, in produzione', pt: 'Um produto online, em produção', nl: 'Een product online, in productie', ar: 'منتج على الإنترنت، في الإنتاج', pl: 'Produkt online, na produkcji', tr: 'Yayında, üretimde bir ürün' },
        other: { fr: 'Des décisions, des specs, une roadmap', en: 'Decisions, specs, a roadmap', es: 'Decisiones, especificaciones, una hoja de ruta', de: 'Entscheidungen, Specs, eine Roadmap', it: 'Decisioni, specifiche, una roadmap', pt: 'Decisões, especificações, um roadmap', nl: 'Beslissingen, specs, een roadmap', ar: 'قرارات ومواصفات وخارطة طريق', pl: 'Decyzje, specyfikacje, roadmapę', tr: 'Kararlar, spesifikasyonlar, bir yol haritası' },
      },
      {
        aspect: { fr: 'Qui construit', en: 'Who builds it', es: 'Quién construye', de: 'Wer baut', it: 'Chi costruisce', pt: 'Quem constrói', nl: 'Wie bouwt', ar: 'من الذي يبني', pl: 'Kto buduje', tr: 'Kim inşa eder' },
        khufu: { fr: 'Cadrage, design, dev, mobile, infra : tout est couvert', en: 'Scoping, design, dev, mobile, infra: all covered', es: 'Definición, diseño, dev, móvil, infra: todo cubierto', de: 'Scoping, Design, Dev, Mobile, Infra: alles abgedeckt', it: 'Analisi, design, sviluppo, mobile, infra: tutto coperto', pt: 'Enquadramento, design, dev, mobile, infra: tudo coberto', nl: 'Scoping, design, dev, mobile, infra: alles gedekt', ar: 'تحديد النطاق والتصميم والتطوير والجوال والبنية التحتية: كل شيء مغطّى', pl: 'Analiza, design, dev, mobile, infra: wszystko pokryte', tr: 'Kapsam, tasarım, geliştirme, mobil, altyapı: hepsi kapsanır' },
        other: { fr: 'Personne — il reste à recruter l’équipe', en: 'Nobody — you still have to hire the team', es: 'Nadie — todavía tienes que contratar al equipo', de: 'Niemand — das Team musst du noch einstellen', it: 'Nessuno — il team è ancora tutto da assumere', pt: 'Ninguém — a equipa ainda está por contratar', nl: 'Niemand — het team moet je nog aannemen', ar: 'لا أحد — لا يزال عليك توظيف الفريق', pl: 'Nikt — zespół wciąż trzeba zatrudnić', tr: 'Kimse — ekibi hâlâ işe almanız gerekir' },
      },
      {
        aspect: { fr: 'Délai avant la V1', en: 'Time to V1', es: 'Plazo hasta la V1', de: 'Zeit bis zur V1', it: 'Tempo fino alla V1', pt: 'Prazo até à V1', nl: 'Tijd tot de V1', ar: 'المدة حتى النسخة الأولى', pl: 'Czas do V1', tr: 'V1’e kalan süre' },
        khufu: { fr: '7 jours', en: '7 days', es: '7 días', de: '7 Tage', it: '7 giorni', pt: '7 dias', nl: '7 dagen', ar: '7 أيام', pl: '7 dni', tr: '7 gün' },
        other: { fr: 'Des mois, une fois l’équipe recrutée', en: 'Months, once the team is hired', es: 'Meses, una vez contratado el equipo', de: 'Monate, sobald das Team steht', it: 'Mesi, una volta assunto il team', pt: 'Meses, depois de contratada a equipa', nl: 'Maanden, zodra het team er is', ar: 'أشهر، بعد اكتمال توظيف الفريق', pl: 'Miesiące, po skompletowaniu zespołu', tr: 'Ekip kurulduktan sonra aylar' },
      },
      {
        aspect: { fr: 'Ce que vous payez', en: 'What you pay', es: 'Qué pagas', de: 'Was du zahlst', it: 'Cosa paghi', pt: 'O que paga', nl: 'Wat je betaalt', ar: 'ما الذي تدفعه', pl: 'Ile płacisz', tr: 'Ne ödersiniz' },
        khufu: { fr: 'Un prix fixe annoncé à l’avance : 15 000 €', en: 'One fixed price, agreed upfront: €15,000', es: 'Un precio fijo acordado de antemano: 15 000 €', de: 'Ein Festpreis, vorab vereinbart: 15 000 €', it: 'Un prezzo fisso concordato in anticipo: 15 000 €', pt: 'Um preço fixo acordado à partida: 15 000 €', nl: 'Eén vaste prijs, vooraf afgesproken: 15 000 €', ar: 'سعر ثابت متّفق عليه مسبقًا: 15 000 €', pl: 'Jedna stała cena ustalona z góry: 15 000 €', tr: 'Önceden belirlenmiş tek bir sabit fiyat: 15 000 €' },
        other: { fr: 'Un forfait mensuel, puis les salaires de l’équipe', en: 'A monthly retainer, then the team’s salaries', es: 'Una cuota mensual, más los sueldos del equipo', de: 'Ein monatlicher Retainer, dazu die Gehälter des Teams', it: 'Un canone mensile, più gli stipendi del team', pt: 'Uma avença mensal, mais os salários da equipa', nl: 'Een maandelijkse retainer, plus de salarissen van het team', ar: 'أتعاب شهرية، ثم رواتب الفريق', pl: 'Miesięczny ryczałt, a do tego pensje zespołu', tr: 'Aylık bir ücret, üstüne ekibin maaşları' },
      },
      {
        aspect: { fr: 'À la fin', en: 'At the end', es: 'Al final', de: 'Am Ende', it: 'Alla fine', pt: 'No fim', nl: 'Aan het eind', ar: 'في النهاية', pl: 'Na koniec', tr: 'Sonunda' },
        khufu: { fr: 'Le produit, le repo et les accès sont à vous', en: 'The product, the repo and the accounts are yours', es: 'El producto, el repositorio y los accesos son tuyos', de: 'Produkt, Repo und Zugänge gehören dir', it: 'Il prodotto, il repository e gli accessi sono tuoi', pt: 'O produto, o repositório e os acessos são seus', nl: 'Het product, de repo en de accounts zijn van jou', ar: 'المنتج والمستودع البرمجي وصلاحيات الوصول ملك لك', pl: 'Produkt, repozytorium i dostępy należą do Ciebie', tr: 'Ürün, depo ve erişimler sizindir' },
        other: { fr: 'Vous avez un plan', en: 'You have a plan', es: 'Tienes un plan', de: 'Du hast einen Plan', it: 'Hai un piano', pt: 'Tem um plano', nl: 'Je hebt een plan', ar: 'لديك خطة', pl: 'Masz plan', tr: 'Elinizde bir plan olur' },
      },
    ],
    conclusion: {
      fr: 'Si vous avez déjà une équipe à piloter, un CTO à temps partagé est le bon choix. Si vous n’en avez pas, ce qu’il vous manque est une équipe : Khufu la fournit en entier et livre votre V1 en 7 jours, à prix fixe.',
      en: 'If you already have a team to lead, a fractional CTO is the right call. If you don’t, what you are missing is a team: Khufu provides the whole one and ships your V1 in 7 days, at a fixed price.',
      es: 'Si ya tienes un equipo al que dirigir, un CTO a tiempo parcial es la opción correcta. Si no lo tienes, lo que te falta es un equipo: Khufu la aporta entera y entrega tu V1 en 7 días, a precio fijo.',
      de: 'Wenn du bereits ein Team zu führen hast, ist ein Fractional CTO die richtige Wahl. Wenn nicht, fehlt dir ein Team: Khufu stellt es komplett und liefert deine V1 in 7 Tagen zum Festpreis.',
      it: 'Se hai già un team da guidare, un CTO frazionale è la scelta giusta. Se non ce l’hai, quello che ti manca è un team: Khufu lo fornisce per intero e consegna la tua V1 in 7 giorni, a prezzo fisso.',
      pt: 'Se já tem uma equipa para liderar, um CTO a tempo parcial é a escolha certa. Se não tem, o que lhe falta é uma equipa: a Khufu fornece-a por inteiro e entrega a sua V1 em 7 dias, a preço fixo.',
      nl: 'Heb je al een team om aan te sturen, dan is een parttime CTO de juiste keuze. Heb je dat niet, dan mis je een team: Khufu levert het volledige team en zet je V1 in 7 dagen live, tegen een vaste prijs.',
      ar: 'إن كان لديك فريق بالفعل لتقوده، فالمدير التقني بدوام جزئي هو الخيار الصحيح. وإن لم يكن لديك، فما ينقصك هو فريق: Khufu توفّره كاملًا وتسلّم نسختك الأولى خلال 7 أيام بسعر ثابت.',
      pl: 'Jeśli masz już zespół do poprowadzenia, CTO na część etatu jest właściwym wyborem. Jeśli nie masz — brakuje Ci zespołu: Khufu dostarcza go w całości i wdraża Twoje V1 w 7 dni, za stałą cenę.',
      tr: 'Yönetecek bir ekibiniz zaten varsa, yarı zamanlı bir CTO doğru tercihtir. Yoksa, eksik olan şey bir ekiptir: Khufu ekibin tamamını sağlar ve V1’inizi sabit fiyatla 7 günde teslim eder.',
    },
    cta: 'sprint',
  },
  {
    slug: 'agence-vs-freelance',
    metaTitle: { fr: 'Agence vs freelance pour lancer un produit', en: 'Agency vs freelancer to launch a product', es: 'Agencia vs freelance para lanzar un producto', de: 'Agentur vs. Freelancer für den Produktlaunch', it: 'Agenzia vs freelance per lanciare un prodotto', pt: 'Agência vs freelancer para lançar um produto', nl: 'Bureau vs freelancer om een product te lanceren', ar: 'وكالة أم مستقل لإطلاق منتج؟', pl: 'Agencja vs freelancer przy uruchamianiu produktu', tr: 'Ürün başlatmak için ajans mı freelancer mı' },
    metaDescription: {
      fr: 'Agence ou freelance pour lancer votre SaaS ou app mobile ? Avantages, risques et pourquoi une agence produit AI-native comme Khufu combine le meilleur des deux.',
      en: 'Agency or freelancer to launch your SaaS or mobile app? Pros, risks, and why an AI-native product agency like Khufu combines the best of both.',
      es: '¿Agencia o freelance para lanzar tu SaaS o app móvil? Ventajas, riesgos y por qué una agencia AI-native como Khufu combina lo mejor de ambos.',
      de: 'Agentur oder Freelancer für den Launch Ihres SaaS oder Ihrer Mobile-App? Vorteile, Risiken und warum eine AI-native Produktagentur wie Khufu das Beste aus beiden vereint.',
      it: 'Agenzia o freelance per lanciare il tuo SaaS o app mobile? Vantaggi, rischi e perché un’agenzia di prodotto AI-native come Khufu unisce il meglio di entrambi.',
      pt: 'Agência ou freelancer para lançar o seu SaaS ou app móvel? Vantagens, riscos e porque uma agência de produto AI-native como a Khufu combina o melhor dos dois.',
      nl: 'Bureau of freelancer om je SaaS of mobiele app te lanceren? Voordelen, risico’s en waarom een AI-native productbureau als Khufu het beste van beide combineert.',
      ar: 'وكالة أم مستقل لإطلاق منتجك SaaS أو تطبيقك المحمول؟ المزايا والمخاطر ولماذا تجمع وكالة منتجات AI-native مثل Khufu بين الأفضل في الاثنين.',
      pl: 'Agencja czy freelancer, aby uruchomić Twój SaaS lub aplikację mobilną? Zalety, ryzyka i dlaczego agencja produktowa AI-native taka jak Khufu łączy to, co najlepsze z obu.',
      tr: 'SaaS veya mobil uygulamanızı başlatmak için ajans mı freelancer mı? Avantajlar, riskler ve Khufu gibi AI-native bir ürün ajansının neden her ikisinin en iyisini birleştirdiği.',
    },
    title: { fr: 'Agence vs freelance', en: 'Agency vs freelancer', es: 'Agencia vs freelance', de: 'Agentur vs. Freelancer', it: 'Agenzia vs freelance', pt: 'Agência vs freelancer', nl: 'Bureau vs freelancer', ar: 'وكالة مقابل مستقل', pl: 'Agencja vs freelancer', tr: 'Ajans vs freelancer' },
    intro: {
      fr: 'Un freelance est flexible mais limité en capacité et en couverture (design, back, mobile, infra). Une agence classique couvre tout mais est lente et chère. Khufu combine les deux : la vitesse d’un solo, la couverture full-stack d’une agence.',
      en: 'A freelancer is flexible but limited in capacity and coverage (design, back, mobile, infra). A classic agency covers everything but is slow and expensive. Khufu combines both: the speed of a solo, the full-stack coverage of an agency.',
      es: 'Un freelance es flexible pero limitado en capacidad y cobertura (diseño, back, móvil, infra). Una agencia clásica lo cubre todo pero es lenta y cara. Khufu combina ambos: la velocidad de un solo, la cobertura full-stack de una agencia.',
      de: 'Ein Freelancer ist flexibel, aber in Kapazität und Abdeckung begrenzt (Design, Backend, Mobile, Infrastruktur). Eine klassische Agentur deckt alles ab, ist aber langsam und teuer. Khufu vereint beides: das Tempo eines Einzelnen, die Full-Stack-Abdeckung einer Agentur.',
      it: 'Un freelance è flessibile ma limitato in capacità e copertura (design, back, mobile, infra). Un’agenzia classica copre tutto ma è lenta e costosa. Khufu unisce i due: la velocità di un solo, la copertura full-stack di un’agenzia.',
      pt: 'Um freelancer é flexível mas limitado em capacidade e cobertura (design, back, mobile, infra). Uma agência clássica cobre tudo mas é lenta e cara. A Khufu combina os dois: a velocidade de um solo, a cobertura full-stack de uma agência.',
      nl: 'Een freelancer is flexibel maar beperkt in capaciteit en dekking (design, back, mobiel, infra). Een klassiek bureau dekt alles maar is traag en duur. Khufu combineert beide: de snelheid van een solo, de full-stack dekking van een bureau.',
      ar: 'المستقل مرن لكنه محدود في القدرة والتغطية (التصميم، الخلفية، المحمول، البنية التحتية). الوكالة التقليدية تغطي كل شيء لكنها بطيئة ومكلفة. تجمع Khufu بين الاثنين: سرعة الفرد وتغطية full-stack لوكالة.',
      pl: 'Freelancer jest elastyczny, ale ograniczony w wydajności i zakresie (design, back, mobile, infra). Klasyczna agencja obejmuje wszystko, ale jest wolna i droga. Khufu łączy oba: szybkość pojedynczej osoby z full-stackowym zasięgiem agencji.',
      tr: 'Freelancer esnektir ama kapasite ve kapsamda sınırlıdır (tasarım, back, mobil, altyapı). Klasik bir ajans her şeyi kapsar ama yavaş ve pahalıdır. Khufu ikisini birleştirir: bir solo’nun hızı, bir ajansın full-stack kapsamı.',
    },
    khufuLabel: { fr: 'Khufu', en: 'Khufu', es: 'Khufu', de: 'Khufu', it: 'Khufu', pt: 'Khufu', nl: 'Khufu', ar: 'Khufu', pl: 'Khufu', tr: 'Khufu' },
    otherLabel: { fr: 'Freelance seul', en: 'Solo freelancer', es: 'Freelance solo', de: 'Einzelner Freelancer', it: 'Freelance da solo', pt: 'Freelancer sozinho', nl: 'Freelancer alleen', ar: 'مستقل بمفرده', pl: 'Freelancer w pojedynkę', tr: 'Tek başına freelancer' },
    rows: [
      {
        aspect: { fr: 'Couverture', en: 'Coverage', es: 'Cobertura', de: 'Abdeckung', it: 'Copertura', pt: 'Cobertura', nl: 'Dekking', ar: 'التغطية', pl: 'Zakres', tr: 'Kapsam' },
        khufu: { fr: 'Design, front, back, mobile, infra', en: 'Design, front, back, mobile, infra', es: 'Diseño, front, back, móvil, infra', de: 'Design, Front, Back, Mobile, Infra', it: 'Design, front, back, mobile, infra', pt: 'Design, front, back, mobile, infra', nl: 'Design, front, back, mobiel, infra', ar: 'التصميم، الواجهة، الخلفية، المحمول، البنية التحتية', pl: 'Design, front, back, mobile, infra', tr: 'Tasarım, front, back, mobil, altyapı' },
        other: { fr: 'Une spécialité à la fois', en: 'One specialty at a time', es: 'Una especialidad a la vez', de: 'Eine Spezialität nach der anderen', it: 'Una specialità alla volta', pt: 'Uma especialidade de cada vez', nl: 'Eén specialiteit tegelijk', ar: 'تخصّص واحد في كل مرة', pl: 'Jedna specjalność naraz', tr: 'Bir seferde bir uzmanlık' },
      },
      {
        aspect: { fr: 'Délai', en: 'Timeline', es: 'Plazo', de: 'Zeitrahmen', it: 'Tempi', pt: 'Prazo', nl: 'Doorlooptijd', ar: 'المدة', pl: 'Termin', tr: 'Süre' },
        khufu: { fr: 'V1 en 7 jours', en: 'V1 in 7 days', es: 'V1 en 7 días', de: 'V1 in 7 Tagen', it: 'V1 in 7 giorni', pt: 'V1 em 7 dias', nl: 'V1 in 7 dagen', ar: 'V1 خلال 7 أيام', pl: 'V1 w 7 dni', tr: '7 günde V1' },
        other: { fr: 'Dépend de sa dispo', en: 'Depends on availability', es: 'Según disponibilidad', de: 'Hängt von der Verfügbarkeit ab', it: 'Dipende dalla disponibilità', pt: 'Depende da disponibilidade', nl: 'Afhankelijk van beschikbaarheid', ar: 'يعتمد على توفّره', pl: 'Zależy od dostępności', tr: 'Uygunluğa bağlı' },
      },
      {
        aspect: { fr: 'Continuité', en: 'Continuity', es: 'Continuidad', de: 'Kontinuität', it: 'Continuità', pt: 'Continuidade', nl: 'Continuïteit', ar: 'الاستمرارية', pl: 'Ciągłość', tr: 'Süreklilik' },
        khufu: { fr: 'Maintenance & support en option', en: 'Maintenance & support available', es: 'Mantenimiento y soporte opcionales', de: 'Wartung & Support optional', it: 'Manutenzione e supporto opzionali', pt: 'Manutenção e suporte opcionais', nl: 'Onderhoud & support optioneel', ar: 'الصيانة والدعم اختياريان', pl: 'Utrzymanie i wsparcie opcjonalnie', tr: 'Bakım ve destek isteğe bağlı' },
        other: { fr: 'Risque d’indisponibilité', en: 'Risk of unavailability', es: 'Riesgo de indisponibilidad', de: 'Risiko der Nichtverfügbarkeit', it: 'Rischio di indisponibilità', pt: 'Risco de indisponibilidade', nl: 'Risico op onbeschikbaarheid', ar: 'خطر عدم التوفّر', pl: 'Ryzyko niedostępności', tr: 'Erişilememe riski' },
      },
      {
        aspect: { fr: 'Prix', en: 'Price', es: 'Precio', de: 'Preis', it: 'Prezzo', pt: 'Preço', nl: 'Prijs', ar: 'السعر', pl: 'Cena', tr: 'Fiyat' },
        khufu: { fr: 'Forfait clair, 15 000 €', en: 'Clear flat fee, €15,000', es: 'Precio cerrado, 15 000 €', de: 'Klarer Festpreis, 15 000 €', it: 'Prezzo forfettario chiaro, 15 000 €', pt: 'Preço fixo claro, 15 000 €', nl: 'Heldere vaste prijs, 15 000 €', ar: 'سعر ثابت واضح، 15 000 €', pl: 'Jasna cena ryczałtowa, 15 000 €', tr: 'Net sabit ücret, 15 000 €' },
        other: { fr: 'TJM variable', en: 'Variable day rate', es: 'Tarifa variable', de: 'Variabler Tagessatz', it: 'Tariffa giornaliera variabile', pt: 'Diária variável', nl: 'Variabel dagtarief', ar: 'أجر يومي متغيّر', pl: 'Zmienna stawka dzienna', tr: 'Değişken günlük ücret' },
      },
    ],
    conclusion: {
      fr: 'Pour lancer vite et bien sans multiplier les prestataires, Khufu offre la couverture d’une agence à la vitesse d’un indépendant.',
      en: 'To launch fast and well without juggling providers, Khufu offers agency coverage at freelancer speed.',
      es: 'Para lanzar rápido y bien sin multiplicar proveedores, Khufu ofrece la cobertura de una agencia a la velocidad de un freelance.',
      de: 'Um schnell und gut zu launchen, ohne mehrere Dienstleister zu jonglieren, bietet Khufu Agentur-Abdeckung im Tempo eines Freelancers.',
      it: 'Per lanciare in fretta e bene senza moltiplicare i fornitori, Khufu offre la copertura di un’agenzia alla velocità di un freelance.',
      pt: 'Para lançar depressa e bem sem multiplicar fornecedores, a Khufu oferece a cobertura de uma agência à velocidade de um freelancer.',
      nl: 'Om snel en goed te lanceren zonder met meerdere leveranciers te jongleren, biedt Khufu de dekking van een bureau op de snelheid van een freelancer.',
      ar: 'للإطلاق بسرعة وجودة دون تعدّد المزوّدين، تقدّم Khufu تغطية وكالة بسرعة مستقل.',
      pl: 'Aby uruchomić szybko i dobrze bez żonglowania dostawcami, Khufu oferuje zasięg agencji z szybkością freelancera.',
      tr: 'Birden fazla tedarikçiyle uğraşmadan hızlı ve iyi başlatmak için Khufu, bir ajansın kapsamını bir freelancer hızında sunar.',
    },
    cta: 'sprint',
  },
  {
    slug: 'agence-vs-no-code',
    metaTitle: { fr: 'Agence vs no-code : que choisir ?', en: 'Agency vs no-code: which to choose?', es: 'Agencia vs no-code: ¿qué elegir?', de: 'Agentur vs. no-code: Was wählen?', it: 'Agenzia vs no-code: quale scegliere?', pt: 'Agência vs no-code: qual escolher?', nl: 'Bureau vs no-code: wat kiezen?', ar: 'وكالة أم no-code: ماذا تختار؟', pl: 'Agencja vs no-code: co wybrać?', tr: 'Ajans mı no-code mu: hangisini seçmeli?' },
    metaDescription: {
      fr: 'No-code ou développement sur-mesure ? Les limites du no-code pour un vrai produit, et quand une agence comme Khufu est le bon choix.',
      en: 'No-code or custom development? The limits of no-code for a real product, and when an agency like Khufu is the right choice.',
      es: '¿No-code o desarrollo a medida? Los límites del no-code para un producto real y cuándo una agencia como Khufu es la opción correcta.',
      de: 'No-code oder maßgeschneiderte Entwicklung? Die Grenzen von no-code für ein echtes Produkt und wann eine Agentur wie Khufu die richtige Wahl ist.',
      it: 'No-code o sviluppo su misura? I limiti del no-code per un prodotto reale e quando un’agenzia come Khufu è la scelta giusta.',
      pt: 'No-code ou desenvolvimento à medida? Os limites do no-code para um produto real e quando uma agência como a Khufu é a escolha certa.',
      nl: 'No-code of maatwerkontwikkeling? De grenzen van no-code voor een echt product en wanneer een bureau als Khufu de juiste keuze is.',
      ar: 'no-code أم تطوير مخصّص؟ حدود no-code لمنتج حقيقي، ومتى تكون وكالة مثل Khufu الخيار الصحيح.',
      pl: 'No-code czy rozwój na miarę? Ograniczenia no-code przy prawdziwym produkcie i kiedy agencja taka jak Khufu jest właściwym wyborem.',
      tr: 'No-code mu özel geliştirme mi? Gerçek bir ürün için no-code’un sınırları ve Khufu gibi bir ajansın ne zaman doğru seçim olduğu.',
    },
    title: { fr: 'Agence vs no-code', en: 'Agency vs no-code', es: 'Agencia vs no-code', de: 'Agentur vs. no-code', it: 'Agenzia vs no-code', pt: 'Agência vs no-code', nl: 'Bureau vs no-code', ar: 'وكالة مقابل no-code', pl: 'Agencja vs no-code', tr: 'Ajans vs no-code' },
    intro: {
      fr: 'Le no-code est parfait pour un prototype ou un outil interne simple. Mais dès que le produit doit scaler, s’intégrer finement ou vous appartenir vraiment, il montre ses limites. Khufu livre du code sur-mesure, à vous, aussi vite qu’un no-code.',
      en: 'No-code is great for a prototype or a simple internal tool. But as soon as the product needs to scale, integrate deeply or truly be yours, it hits limits. Khufu ships custom code, yours, as fast as no-code.',
      es: 'El no-code es ideal para un prototipo o una herramienta interna simple. Pero en cuanto el producto necesita escalar, integrarse a fondo o ser realmente tuyo, muestra sus límites. Khufu entrega código a medida, tuyo, tan rápido como el no-code.',
      de: 'No-code ist perfekt für einen Prototyp oder ein einfaches internes Tool. Doch sobald das Produkt skalieren, sich tief integrieren oder wirklich Ihnen gehören muss, stößt es an Grenzen. Khufu liefert maßgeschneiderten Code, Ihren, so schnell wie no-code.',
      it: 'Il no-code è perfetto per un prototipo o un semplice strumento interno. Ma non appena il prodotto deve scalare, integrarsi a fondo o essere davvero tuo, mostra i suoi limiti. Khufu consegna codice su misura, tuo, veloce come il no-code.',
      pt: 'O no-code é perfeito para um protótipo ou uma ferramenta interna simples. Mas assim que o produto precisa de escalar, integrar-se a fundo ou ser realmente seu, mostra os seus limites. A Khufu entrega código à medida, seu, tão rápido como o no-code.',
      nl: 'No-code is perfect voor een prototype of een eenvoudige interne tool. Maar zodra het product moet schalen, diep moet integreren of echt van jou moet zijn, stuit het op zijn grenzen. Khufu levert maatwerkcode, van jou, net zo snel als no-code.',
      ar: 'الـ no-code مثالي لنموذج أولي أو أداة داخلية بسيطة. لكن بمجرد أن يحتاج المنتج إلى التوسّع أو التكامل العميق أو أن يكون ملكك حقًا، تظهر حدوده. تُسلّم Khufu كودًا مخصّصًا، ملكك، بسرعة الـ no-code.',
      pl: 'No-code świetnie nadaje się do prototypu lub prostego narzędzia wewnętrznego. Ale gdy tylko produkt musi się skalować, głęboko integrować lub naprawdę należeć do Ciebie, pokazuje swoje ograniczenia. Khufu dostarcza kod na miarę, Twój, tak szybko jak no-code.',
      tr: 'No-code, bir prototip veya basit bir dahili araç için mükemmeldir. Ancak ürünün ölçeklenmesi, derinlemesine entegre olması veya gerçekten sizin olması gerektiğinde sınırlarını gösterir. Khufu, no-code kadar hızlı bir şekilde size ait özel kod teslim eder.',
    },
    khufuLabel: { fr: 'Khufu (sur-mesure)', en: 'Khufu (custom)', es: 'Khufu (a medida)', de: 'Khufu (maßgeschneidert)', it: 'Khufu (su misura)', pt: 'Khufu (à medida)', nl: 'Khufu (maatwerk)', ar: 'Khufu (مخصّص)', pl: 'Khufu (na miarę)', tr: 'Khufu (özel)' },
    otherLabel: { fr: 'No-code', en: 'No-code', es: 'No-code', de: 'No-code', it: 'No-code', pt: 'No-code', nl: 'No-code', ar: 'No-code', pl: 'No-code', tr: 'No-code' },
    rows: [
      {
        aspect: { fr: 'Scalabilité', en: 'Scalability', es: 'Escalabilidad', de: 'Skalierbarkeit', it: 'Scalabilità', pt: 'Escalabilidade', nl: 'Schaalbaarheid', ar: 'قابلية التوسّع', pl: 'Skalowalność', tr: 'Ölçeklenebilirlik' },
        khufu: { fr: 'Sans limite technique', en: 'No technical ceiling', es: 'Sin techo técnico', de: 'Keine technische Obergrenze', it: 'Nessun limite tecnico', pt: 'Sem teto técnico', nl: 'Geen technisch plafond', ar: 'بلا سقف تقني', pl: 'Bez technicznego sufitu', tr: 'Teknik tavan yok' },
        other: { fr: 'Plafonne vite', en: 'Hits a ceiling fast', es: 'Techo rápido', de: 'Stößt schnell an Grenzen', it: 'Raggiunge presto il limite', pt: 'Atinge o teto depressa', nl: 'Bereikt snel een plafond', ar: 'يبلغ سقفه سريعًا', pl: 'Szybko osiąga sufit', tr: 'Hızla tavana ulaşır' },
      },
      {
        aspect: { fr: 'Propriété', en: 'Ownership', es: 'Propiedad', de: 'Eigentum', it: 'Proprietà', pt: 'Propriedade', nl: 'Eigendom', ar: 'الملكية', pl: 'Własność', tr: 'Sahiplik' },
        khufu: { fr: 'Code source à vous', en: 'Source code is yours', es: 'Código fuente tuyo', de: 'Quellcode gehört Ihnen', it: 'Codice sorgente tuo', pt: 'Código-fonte seu', nl: 'Broncode is van jou', ar: 'الكود المصدري ملكك', pl: 'Kod źródłowy jest Twój', tr: 'Kaynak kod sizin' },
        other: { fr: 'Dépendant de la plateforme', en: 'Locked to the platform', es: 'Atado a la plataforma', de: 'An die Plattform gebunden', it: 'Vincolato alla piattaforma', pt: 'Preso à plataforma', nl: 'Gebonden aan het platform', ar: 'مقيّد بالمنصّة', pl: 'Uzależniony od platformy', tr: 'Platforma bağımlı' },
      },
      {
        aspect: { fr: 'Personnalisation', en: 'Customization', es: 'Personalización', de: 'Anpassbarkeit', it: 'Personalizzazione', pt: 'Personalização', nl: 'Aanpasbaarheid', ar: 'التخصيص', pl: 'Personalizacja', tr: 'Özelleştirme' },
        khufu: { fr: 'Totale', en: 'Total', es: 'Total', de: 'Vollständig', it: 'Totale', pt: 'Total', nl: 'Volledig', ar: 'كامل', pl: 'Pełna', tr: 'Tam' },
        other: { fr: 'Limitée aux briques dispo', en: 'Limited to available blocks', es: 'Limitada a los bloques', de: 'Auf verfügbare Bausteine begrenzt', it: 'Limitata ai blocchi disponibili', pt: 'Limitada aos blocos disponíveis', nl: 'Beperkt tot beschikbare blokken', ar: 'محدود بالوحدات المتاحة', pl: 'Ograniczona do dostępnych bloków', tr: 'Mevcut bloklarla sınırlı' },
      },
      {
        aspect: { fr: 'Coûts récurrents', en: 'Recurring costs', es: 'Costes recurrentes', de: 'Wiederkehrende Kosten', it: 'Costi ricorrenti', pt: 'Custos recorrentes', nl: 'Terugkerende kosten', ar: 'التكاليف المتكرّرة', pl: 'Koszty cykliczne', tr: 'Tekrarlayan maliyetler' },
        khufu: { fr: 'Hébergement maîtrisé', en: 'Controlled hosting', es: 'Alojamiento controlado', de: 'Kontrolliertes Hosting', it: 'Hosting sotto controllo', pt: 'Alojamento controlado', nl: 'Beheerste hosting', ar: 'استضافة مضبوطة التكلفة', pl: 'Kontrolowany hosting', tr: 'Kontrollü barındırma' },
        other: { fr: 'Abonnements qui grimpent', en: 'Subscriptions that climb', es: 'Suscripciones que suben', de: 'Steigende Abogebühren', it: 'Abbonamenti che salgono', pt: 'Subscrições que sobem', nl: 'Abonnementen die oplopen', ar: 'اشتراكات تتصاعد', pl: 'Rosnące subskrypcje', tr: 'Tırmanan abonelikler' },
      },
    ],
    conclusion: {
      fr: 'Le no-code pour valider une idée, Khufu pour construire le vrai produit — sans repartir de zéro.',
      en: 'No-code to validate an idea, Khufu to build the real product — without starting over.',
      es: 'No-code para validar una idea, Khufu para construir el producto real — sin empezar de cero.',
      de: 'No-code, um eine Idee zu validieren, Khufu, um das echte Produkt zu bauen – ohne bei null anzufangen.',
      it: 'Il no-code per validare un’idea, Khufu per costruire il prodotto reale — senza ripartire da zero.',
      pt: 'O no-code para validar uma ideia, a Khufu para construir o produto real — sem começar do zero.',
      nl: 'No-code om een idee te valideren, Khufu om het echte product te bouwen — zonder opnieuw te beginnen.',
      ar: 'الـ no-code للتحقّق من فكرة، وKhufu لبناء المنتج الحقيقي — دون البدء من الصفر.',
      pl: 'No-code do walidacji pomysłu, Khufu do zbudowania prawdziwego produktu — bez zaczynania od zera.',
      tr: 'Bir fikri doğrulamak için no-code, gerçek ürünü inşa etmek için Khufu — sıfırdan başlamadan.',
    },
    cta: 'sprint',
  },
  {
    slug: 'khufu-vs-agence-classique',
    metaTitle: { fr: 'Khufu vs agence classique', en: 'Khufu vs a classic agency', es: 'Khufu vs agencia clásica', de: 'Khufu vs. klassische Agentur', it: 'Khufu vs agenzia classica', pt: 'Khufu vs agência clássica', nl: 'Khufu vs klassiek bureau', ar: 'Khufu مقابل وكالة تقليدية', pl: 'Khufu vs klasyczna agencja', tr: 'Khufu vs klasik ajans' },
    metaDescription: {
      fr: 'Pourquoi choisir Khufu plutôt qu’une agence web classique : 7 jours au lieu de 3 mois, prix fixe affiché, code livré et approche AI-native.',
      en: 'Why choose Khufu over a classic web agency: 7 days instead of 3 months, a fixed public price, code delivered and an AI-native approach.',
      es: 'Por qué elegir Khufu en lugar de una agencia web clásica: 7 días en vez de 3 meses, precio fijo público, código entregado y enfoque AI-native.',
      de: 'Warum Khufu statt einer klassischen Webagentur wählen: 7 Tage statt 3 Monate, öffentlicher Festpreis, ausgelieferter Code und ein AI-native Ansatz.',
      it: 'Perché scegliere Khufu invece di un’agenzia web classica: 7 giorni invece di 3 mesi, prezzo fisso pubblico, codice consegnato e approccio AI-native.',
      pt: 'Porquê escolher a Khufu em vez de uma agência web clássica: 7 dias em vez de 3 meses, preço fixo público, código entregue e abordagem AI-native.',
      nl: 'Waarom Khufu boven een klassiek webbureau kiezen: 7 dagen in plaats van 3 maanden, een vaste openbare prijs, geleverde code en een AI-native aanpak.',
      ar: 'لماذا تختار Khufu بدلًا من وكالة ويب تقليدية: 7 أيام بدل 3 أشهر، سعر ثابت معلن، وتسليم الكود، ونهج AI-native.',
      pl: 'Dlaczego wybrać Khufu zamiast klasycznej agencji internetowej: 7 dni zamiast 3 miesięcy, jawna stała cena, dostarczony kod i podejście AI-native.',
      tr: 'Klasik bir web ajansı yerine neden Khufu seçmeli: 3 ay yerine 7 gün, açık sabit fiyat, teslim edilen kod ve AI-native yaklaşım.',
    },
    title: { fr: 'Khufu vs agence classique', en: 'Khufu vs classic agency', es: 'Khufu vs agencia clásica', de: 'Khufu vs. klassische Agentur', it: 'Khufu vs agenzia classica', pt: 'Khufu vs agência clássica', nl: 'Khufu vs klassiek bureau', ar: 'Khufu مقابل وكالة تقليدية', pl: 'Khufu vs klasyczna agencja', tr: 'Khufu vs klasik ajans' },
    intro: {
      fr: 'Une agence classique met souvent 3 mois, avec des devis flous et des allers-retours interminables. Khufu inverse tout : périmètre net, prix affiché, et une V1 en production en 7 jours grâce à une approche AI-native.',
      en: 'A classic agency often takes 3 months, with vague quotes and endless back-and-forth. Khufu flips it: tight scope, public price, and a V1 in production in 7 days thanks to an AI-native approach.',
      es: 'Una agencia clásica suele tardar 3 meses, con presupuestos vagos e idas y venidas interminables. Khufu lo invierte: alcance claro, precio público y una V1 en producción en 7 días gracias a un enfoque AI-native.',
      de: 'Eine klassische Agentur braucht oft 3 Monate, mit vagen Angeboten und endlosem Hin und Her. Khufu dreht das um: klarer Umfang, öffentlicher Preis und eine V1 in Produktion in 7 Tagen dank eines AI-native Ansatzes.',
      it: 'Un’agenzia classica impiega spesso 3 mesi, con preventivi vaghi e continui rimpalli. Khufu ribalta tutto: perimetro netto, prezzo pubblico e una V1 in produzione in 7 giorni grazie a un approccio AI-native.',
      pt: 'Uma agência clássica leva muitas vezes 3 meses, com orçamentos vagos e idas e voltas intermináveis. A Khufu inverte tudo: âmbito claro, preço público e uma V1 em produção em 7 dias graças a uma abordagem AI-native.',
      nl: 'Een klassiek bureau doet er vaak 3 maanden over, met vage offertes en eindeloos heen-en-weer. Khufu draait het om: strakke scope, openbare prijs en een V1 in productie in 7 dagen dankzij een AI-native aanpak.',
      ar: 'غالبًا ما تستغرق الوكالة التقليدية 3 أشهر، مع عروض أسعار غامضة وأخذ ورد لا ينتهي. تقلب Khufu ذلك: نطاق واضح، وسعر معلن، ونسخة V1 في الإنتاج خلال 7 أيام بفضل نهج AI-native.',
      pl: 'Klasyczna agencja często potrzebuje 3 miesięcy, z niejasnymi wycenami i niekończącą się wymianą uwag. Khufu to odwraca: jasny zakres, jawna cena i V1 na produkcji w 7 dni dzięki podejściu AI-native.',
      tr: 'Klasik bir ajans genelde 3 ay sürer, belirsiz teklifler ve bitmeyen gidip gelmelerle. Khufu bunu tersine çevirir: net kapsam, açık fiyat ve AI-native yaklaşım sayesinde 7 günde üretimde bir V1.',
    },
    khufuLabel: { fr: 'Khufu', en: 'Khufu', es: 'Khufu', de: 'Khufu', it: 'Khufu', pt: 'Khufu', nl: 'Khufu', ar: 'Khufu', pl: 'Khufu', tr: 'Khufu' },
    otherLabel: { fr: 'Agence classique', en: 'Classic agency', es: 'Agencia clásica', de: 'Klassische Agentur', it: 'Agenzia classica', pt: 'Agência clássica', nl: 'Klassiek bureau', ar: 'وكالة تقليدية', pl: 'Klasyczna agencja', tr: 'Klasik ajans' },
    rows: [
      {
        aspect: { fr: 'Délai de livraison', en: 'Delivery time', es: 'Plazo de entrega', de: 'Lieferzeit', it: 'Tempi di consegna', pt: 'Prazo de entrega', nl: 'Levertijd', ar: 'مدة التسليم', pl: 'Czas dostawy', tr: 'Teslim süresi' },
        khufu: { fr: '7 jours', en: '7 days', es: '7 días', de: '7 Tage', it: '7 giorni', pt: '7 dias', nl: '7 dagen', ar: '7 أيام', pl: '7 dni', tr: '7 gün' },
        other: { fr: '2 à 4 mois', en: '2 to 4 months', es: '2 a 4 meses', de: '2 bis 4 Monate', it: 'Da 2 a 4 mesi', pt: '2 a 4 meses', nl: '2 tot 4 maanden', ar: 'من شهرين إلى 4 أشهر', pl: '2 do 4 miesięcy', tr: '2 ila 4 ay' },
      },
      {
        aspect: { fr: 'Prix', en: 'Price', es: 'Precio', de: 'Preis', it: 'Prezzo', pt: 'Preço', nl: 'Prijs', ar: 'السعر', pl: 'Cena', tr: 'Fiyat' },
        khufu: { fr: 'Fixe et affiché (15 000 €)', en: 'Fixed and public (€15,000)', es: 'Fijo y público (15 000 €)', de: 'Fest und öffentlich (15 000 €)', it: 'Fisso e pubblico (15 000 €)', pt: 'Fixo e público (15 000 €)', nl: 'Vast en openbaar (15 000 €)', ar: 'ثابت ومعلن (15 000 €)', pl: 'Stała i jawna (15 000 €)', tr: 'Sabit ve açık (15 000 €)' },
        other: { fr: 'Devis flou, souvent 40k+', en: 'Vague quote, often €40k+', es: 'Presupuesto vago, a menudo 40k+', de: 'Vages Angebot, oft 40k+', it: 'Preventivo vago, spesso 40k+', pt: 'Orçamento vago, muitas vezes 40k+', nl: 'Vage offerte, vaak 40k+', ar: 'عرض غامض، غالبًا 40k+', pl: 'Niejasna wycena, często 40k+', tr: 'Belirsiz teklif, genelde 40k+' },
      },
      {
        aspect: { fr: 'Méthode', en: 'Method', es: 'Método', de: 'Methode', it: 'Metodo', pt: 'Método', nl: 'Methode', ar: 'المنهجية', pl: 'Metoda', tr: 'Yöntem' },
        khufu: { fr: 'AI-native, périmètre serré', en: 'AI-native, tight scope', es: 'AI-native, alcance ajustado', de: 'AI-native, klar umrissener Umfang', it: 'AI-native, perimetro serrato', pt: 'AI-native, âmbito apertado', nl: 'AI-native, strakke scope', ar: 'AI-native، نطاق محدّد بدقّة', pl: 'AI-native, ściśle określony zakres', tr: 'AI-native, dar kapsam' },
        other: { fr: 'Cycles longs, réunions', en: 'Long cycles, meetings', es: 'Ciclos largos, reuniones', de: 'Lange Zyklen, Meetings', it: 'Cicli lunghi, riunioni', pt: 'Ciclos longos, reuniões', nl: 'Lange cycli, vergaderingen', ar: 'دورات طويلة واجتماعات', pl: 'Długie cykle, spotkania', tr: 'Uzun döngüler, toplantılar' },
      },
      {
        aspect: { fr: 'Le code', en: 'The code', es: 'El código', de: 'Der Code', it: 'Il codice', pt: 'O código', nl: 'De code', ar: 'الكود', pl: 'Kod', tr: 'Kod' },
        khufu: { fr: 'À vous, dès le jour 1', en: 'Yours, from day 1', es: 'Tuyo, desde el día 1', de: 'Ihrer, ab Tag 1', it: 'Tuo, dal giorno 1', pt: 'Seu, desde o dia 1', nl: 'Van jou, vanaf dag 1', ar: 'ملكك، منذ اليوم الأول', pl: 'Twój, od dnia 1', tr: 'Sizin, 1. günden itibaren' },
        other: { fr: 'Souvent verrouillé', en: 'Often locked in', es: 'A menudo bloqueado', de: 'Oft eingeschlossen', it: 'Spesso vincolato', pt: 'Muitas vezes bloqueado', nl: 'Vaak vergrendeld', ar: 'غالبًا مقيّد', pl: 'Często zablokowany', tr: 'Genelde kilitli' },
      },
    ],
    conclusion: {
      fr: 'Même exigence de qualité, sans les 3 mois ni le devis flou : Khufu livre votre produit en une semaine.',
      en: 'The same quality bar, without the 3 months or the vague quote: Khufu ships your product in one week.',
      es: 'La misma exigencia de calidad, sin los 3 meses ni el presupuesto vago: Khufu entrega tu producto en una semana.',
      de: 'Derselbe Qualitätsanspruch, ohne die 3 Monate oder das vage Angebot: Khufu liefert Ihr Produkt in einer Woche.',
      it: 'Lo stesso livello di qualità, senza i 3 mesi né il preventivo vago: Khufu consegna il tuo prodotto in una settimana.',
      pt: 'A mesma exigência de qualidade, sem os 3 meses nem o orçamento vago: a Khufu entrega o seu produto numa semana.',
      nl: 'Dezelfde kwaliteitseis, zonder de 3 maanden of de vage offerte: Khufu levert je product in één week.',
      ar: 'المستوى نفسه من الجودة، دون الأشهر الثلاثة ولا العرض الغامض: تُسلّم Khufu منتجك في أسبوع واحد.',
      pl: 'Ten sam poziom jakości, bez 3 miesięcy i niejasnej wyceny: Khufu dostarcza Twój produkt w tydzień.',
      tr: 'Aynı kalite çıtası, 3 ay ve belirsiz teklif olmadan: Khufu ürününüzü bir haftada teslim eder.',
    },
    cta: 'sprint',
  },
  {
    slug: 'khufu-vs-upwork-fiverr',
    metaTitle: { fr: 'Khufu vs Upwork / Fiverr', en: 'Khufu vs Upwork / Fiverr', es: 'Khufu vs Upwork / Fiverr', de: 'Khufu vs. Upwork / Fiverr', it: 'Khufu vs Upwork / Fiverr', pt: 'Khufu vs Upwork / Fiverr', nl: 'Khufu vs Upwork / Fiverr', ar: 'Khufu مقابل Upwork / Fiverr', pl: 'Khufu vs Upwork / Fiverr', tr: 'Khufu vs Upwork / Fiverr' },
    metaDescription: {
      fr: 'Marketplace de freelances (Upwork, Fiverr) ou agence produit ? Qualité, coordination et résultat : pourquoi Khufu est un choix différent.',
      en: 'Freelance marketplace (Upwork, Fiverr) or product agency? Quality, coordination and outcome: why Khufu is a different choice.',
      es: '¿Marketplace de freelancers (Upwork, Fiverr) o agencia de producto? Calidad, coordinación y resultado: por qué Khufu es una opción distinta.',
      de: 'Freelancer-Marktplatz (Upwork, Fiverr) oder Produktagentur? Qualität, Koordination und Ergebnis: warum Khufu eine andere Wahl ist.',
      it: 'Marketplace di freelance (Upwork, Fiverr) o agenzia di prodotto? Qualità, coordinamento e risultato: perché Khufu è una scelta diversa.',
      pt: 'Marketplace de freelancers (Upwork, Fiverr) ou agência de produto? Qualidade, coordenação e resultado: porque a Khufu é uma escolha diferente.',
      nl: 'Freelancemarktplaats (Upwork, Fiverr) of productbureau? Kwaliteit, coördinatie en resultaat: waarom Khufu een andere keuze is.',
      ar: 'سوق مستقلين (Upwork، Fiverr) أم وكالة منتجات؟ الجودة والتنسيق والنتيجة: لماذا تُعدّ Khufu خيارًا مختلفًا.',
      pl: 'Marketplace freelancerów (Upwork, Fiverr) czy agencja produktowa? Jakość, koordynacja i wynik: dlaczego Khufu to inny wybór.',
      tr: 'Freelancer pazar yeri (Upwork, Fiverr) mi ürün ajansı mı? Kalite, koordinasyon ve sonuç: Khufu neden farklı bir seçim.',
    },
    title: { fr: 'Khufu vs Upwork / Fiverr', en: 'Khufu vs Upwork / Fiverr', es: 'Khufu vs Upwork / Fiverr', de: 'Khufu vs. Upwork / Fiverr', it: 'Khufu vs Upwork / Fiverr', pt: 'Khufu vs Upwork / Fiverr', nl: 'Khufu vs Upwork / Fiverr', ar: 'Khufu مقابل Upwork / Fiverr', pl: 'Khufu vs Upwork / Fiverr', tr: 'Khufu vs Upwork / Fiverr' },
    intro: {
      fr: 'Les marketplaces comme Upwork ou Fiverr donnent accès à beaucoup de freelances, mais la qualité est variable et c’est à vous d’orchestrer, tester et assembler le tout. Khufu vous livre un produit fini, sans avoir à jouer le chef de projet.',
      en: 'Marketplaces like Upwork or Fiverr give access to many freelancers, but quality varies and it’s on you to orchestrate, test and assemble everything. Khufu delivers a finished product, without you playing project manager.',
      es: 'Los marketplaces como Upwork o Fiverr dan acceso a muchos freelancers, pero la calidad es variable y te toca orquestar, probar y ensamblar todo. Khufu te entrega un producto terminado, sin que hagas de jefe de proyecto.',
      de: 'Marktplätze wie Upwork oder Fiverr geben Zugang zu vielen Freelancern, aber die Qualität schwankt und Sie müssen alles orchestrieren, testen und zusammenfügen. Khufu liefert Ihnen ein fertiges Produkt, ohne dass Sie Projektmanager spielen müssen.',
      it: 'Marketplace come Upwork o Fiverr danno accesso a molti freelance, ma la qualità varia e tocca a te orchestrare, testare e assemblare tutto. Khufu ti consegna un prodotto finito, senza dover fare il project manager.',
      pt: 'Marketplaces como Upwork ou Fiverr dão acesso a muitos freelancers, mas a qualidade é variável e cabe-lhe a si orquestrar, testar e montar tudo. A Khufu entrega-lhe um produto terminado, sem ter de fazer de gestor de projeto.',
      nl: 'Marktplaatsen als Upwork of Fiverr geven toegang tot veel freelancers, maar de kwaliteit varieert en jij moet alles orkestreren, testen en samenvoegen. Khufu levert je een afgewerkt product, zonder dat je projectmanager hoeft te spelen.',
      ar: 'تمنح أسواق مثل Upwork أو Fiverr الوصول إلى كثير من المستقلين، لكن الجودة متفاوتة وعليك أنت تنسيق كل شيء واختباره وتجميعه. تُسلّمك Khufu منتجًا مكتملًا دون أن تلعب دور مدير المشروع.',
      pl: 'Marketplace’y takie jak Upwork czy Fiverr dają dostęp do wielu freelancerów, ale jakość jest zmienna i to Ty musisz wszystko koordynować, testować i składać. Khufu dostarcza Ci gotowy produkt, bez odgrywania roli kierownika projektu.',
      tr: 'Upwork veya Fiverr gibi pazar yerleri birçok freelancer’a erişim sağlar, ama kalite değişkendir ve her şeyi düzenlemek, test etmek ve bir araya getirmek size kalır. Khufu, proje yöneticiliği yapmanıza gerek kalmadan size bitmiş bir ürün teslim eder.',
    },
    khufuLabel: { fr: 'Khufu', en: 'Khufu', es: 'Khufu', de: 'Khufu', it: 'Khufu', pt: 'Khufu', nl: 'Khufu', ar: 'Khufu', pl: 'Khufu', tr: 'Khufu' },
    otherLabel: { fr: 'Upwork / Fiverr', en: 'Upwork / Fiverr', es: 'Upwork / Fiverr', de: 'Upwork / Fiverr', it: 'Upwork / Fiverr', pt: 'Upwork / Fiverr', nl: 'Upwork / Fiverr', ar: 'Upwork / Fiverr', pl: 'Upwork / Fiverr', tr: 'Upwork / Fiverr' },
    rows: [
      {
        aspect: { fr: 'Qualité', en: 'Quality', es: 'Calidad', de: 'Qualität', it: 'Qualità', pt: 'Qualidade', nl: 'Kwaliteit', ar: 'الجودة', pl: 'Jakość', tr: 'Kalite' },
        khufu: { fr: 'Constante, une seule équipe', en: 'Consistent, one team', es: 'Constante, un solo equipo', de: 'Konstant, ein Team', it: 'Costante, un solo team', pt: 'Constante, uma só equipa', nl: 'Consistent, één team', ar: 'ثابتة، فريق واحد', pl: 'Stała, jeden zespół', tr: 'Tutarlı, tek ekip' },
        other: { fr: 'Très variable', en: 'Highly variable', es: 'Muy variable', de: 'Stark schwankend', it: 'Molto variabile', pt: 'Muito variável', nl: 'Sterk wisselend', ar: 'متفاوتة جدًا', pl: 'Bardzo zmienna', tr: 'Çok değişken' },
      },
      {
        aspect: { fr: 'Coordination', en: 'Coordination', es: 'Coordinación', de: 'Koordination', it: 'Coordinamento', pt: 'Coordenação', nl: 'Coördinatie', ar: 'التنسيق', pl: 'Koordynacja', tr: 'Koordinasyon' },
        khufu: { fr: 'Prise en charge de A à Z', en: 'Handled end to end', es: 'Gestionada de la A a la Z', de: 'Von A bis Z übernommen', it: 'Gestita dalla A alla Z', pt: 'Assegurada de A a Z', nl: 'Van A tot Z geregeld', ar: 'مُدارة من الألف إلى الياء', pl: 'Obsłużona od A do Z', tr: 'Baştan sona üstlenilir' },
        other: { fr: 'À votre charge', en: 'On you', es: 'A tu cargo', de: 'Ihre Aufgabe', it: 'A tuo carico', pt: 'A seu cargo', nl: 'Jouw taak', ar: 'على عاتقك', pl: 'Po Twojej stronie', tr: 'Size kalır' },
      },
      {
        aspect: { fr: 'Livrable', en: 'Deliverable', es: 'Entregable', de: 'Ergebnis', it: 'Deliverable', pt: 'Entregável', nl: 'Oplevering', ar: 'المُخرَج', pl: 'Rezultat', tr: 'Teslimat' },
        khufu: { fr: 'Produit fini, en production', en: 'Finished product, in production', es: 'Producto terminado, en producción', de: 'Fertiges Produkt, in Produktion', it: 'Prodotto finito, in produzione', pt: 'Produto terminado, em produção', nl: 'Afgewerkt product, in productie', ar: 'منتج مكتمل، في الإنتاج', pl: 'Gotowy produkt, na produkcji', tr: 'Bitmiş ürün, üretimde' },
        other: { fr: 'Des briques à assembler', en: 'Pieces to assemble', es: 'Piezas por ensamblar', de: 'Bausteine zum Zusammensetzen', it: 'Pezzi da assemblare', pt: 'Peças por montar', nl: 'Onderdelen om samen te voegen', ar: 'قطع تحتاج إلى تجميع', pl: 'Elementy do złożenia', tr: 'Birleştirilecek parçalar' },
      },
      {
        aspect: { fr: 'Prix', en: 'Price', es: 'Precio', de: 'Preis', it: 'Prezzo', pt: 'Preço', nl: 'Prijs', ar: 'السعر', pl: 'Cena', tr: 'Fiyat' },
        khufu: { fr: 'Forfait clair, 15 000 €', en: 'Clear flat fee, €15,000', es: 'Precio cerrado, 15 000 €', de: 'Klarer Festpreis, 15 000 €', it: 'Prezzo forfettario chiaro, 15 000 €', pt: 'Preço fixo claro, 15 000 €', nl: 'Heldere vaste prijs, 15 000 €', ar: 'سعر ثابت واضح، 15 000 €', pl: 'Jasna cena ryczałtowa, 15 000 €', tr: 'Net sabit ücret, 15 000 €' },
        other: { fr: 'Faible à l’heure, coût total flou', en: 'Cheap hourly, murky total', es: 'Barato por hora, total confuso', de: 'Günstig pro Stunde, unklarer Gesamtpreis', it: 'Basso all’ora, totale poco chiaro', pt: 'Barato à hora, total incerto', nl: 'Goedkoop per uur, onduidelijk totaal', ar: 'رخيص بالساعة، إجمالي غامض', pl: 'Tanio za godzinę, mętny koszt całkowity', tr: 'Saatlik ucuz, toplam belirsiz' },
      },
    ],
    conclusion: {
      fr: 'Une marketplace pour des tâches ponctuelles, Khufu pour livrer un vrai produit sans en gérer la complexité.',
      en: 'A marketplace for one-off tasks, Khufu to ship a real product without managing the complexity.',
      es: 'Un marketplace para tareas puntuales, Khufu para lanzar un producto real sin gestionar la complejidad.',
      de: 'Ein Marktplatz für einzelne Aufgaben, Khufu, um ein echtes Produkt zu liefern, ohne die Komplexität zu managen.',
      it: 'Un marketplace per compiti occasionali, Khufu per consegnare un prodotto reale senza gestirne la complessità.',
      pt: 'Um marketplace para tarefas pontuais, a Khufu para entregar um produto real sem gerir a complexidade.',
      nl: 'Een marktplaats voor losse taken, Khufu om een echt product te leveren zonder de complexiteit te beheren.',
      ar: 'سوق للمهام المتفرّقة، وKhufu لتسليم منتج حقيقي دون إدارة التعقيد.',
      pl: 'Marketplace do pojedynczych zadań, Khufu do dostarczenia prawdziwego produktu bez zarządzania złożonością.',
      tr: 'Tek seferlik işler için bir pazar yeri, karmaşıklığı yönetmeden gerçek bir ürün teslim etmek için Khufu.',
    },
    cta: 'sprint',
  },
  {
    slug: 'equipe-interne-vs-agence',
    metaTitle: { fr: 'Équipe interne vs agence : lancer un produit', en: 'In-house team vs agency to launch a product', es: 'Equipo interno vs agencia para lanzar un producto', de: 'Internes Team vs. Agentur für den Produktlaunch', it: 'Team interno vs agenzia per lanciare un prodotto', pt: 'Equipa interna vs agência para lançar um produto', nl: 'Intern team vs bureau om een product te lanceren', ar: 'فريق داخلي أم وكالة لإطلاق منتج؟', pl: 'Zespół wewnętrzny vs agencja przy uruchamianiu produktu', tr: 'Ürün başlatmak için iç ekip mi ajans mı' },
    metaDescription: {
      fr: 'Monter une équipe tech en interne ou passer par une agence ? Coût, délai et risque : pourquoi Khufu est plus rapide pour lancer une première version.',
      en: 'Build an in-house tech team or use an agency? Cost, time and risk: why Khufu is faster to launch a first version.',
      es: '¿Montar un equipo técnico interno o usar una agencia? Coste, plazo y riesgo: por qué Khufu es más rápido para lanzar una primera versión.',
      de: 'Ein internes Tech-Team aufbauen oder eine Agentur nutzen? Kosten, Zeit und Risiko: warum Khufu schneller eine erste Version launcht.',
      it: 'Costruire un team tech interno o rivolgersi a un’agenzia? Costo, tempo e rischio: perché Khufu è più veloce a lanciare una prima versione.',
      pt: 'Montar uma equipa técnica interna ou usar uma agência? Custo, prazo e risco: porque a Khufu é mais rápida a lançar uma primeira versão.',
      nl: 'Een intern techteam opbouwen of een bureau inzetten? Kosten, tijd en risico: waarom Khufu sneller een eerste versie lanceert.',
      ar: 'بناء فريق تقني داخلي أم الاستعانة بوكالة؟ التكلفة والوقت والمخاطر: لماذا Khufu أسرع في إطلاق نسخة أولى.',
      pl: 'Zbudować wewnętrzny zespół tech czy skorzystać z agencji? Koszt, czas i ryzyko: dlaczego Khufu szybciej uruchamia pierwszą wersję.',
      tr: 'Şirket içi teknik ekip mi kurmalı yoksa ajans mı kullanmalı? Maliyet, süre ve risk: Khufu neden ilk sürümü daha hızlı başlatır.',
    },
    title: { fr: 'Équipe interne vs agence', en: 'In-house team vs agency', es: 'Equipo interno vs agencia', de: 'Internes Team vs. Agentur', it: 'Team interno vs agenzia', pt: 'Equipa interna vs agência', nl: 'Intern team vs bureau', ar: 'فريق داخلي مقابل وكالة', pl: 'Zespół wewnętrzny vs agencja', tr: 'İç ekip vs ajans' },
    intro: {
      fr: 'Monter une équipe tech en interne prend des mois de recrutement et engage des salaires avant même la première ligne de code. Pour lancer une V1, Khufu est opérationnel immédiatement, sans embauche ni engagement long.',
      en: 'Building an in-house tech team takes months of hiring and commits salaries before the first line of code. To launch a V1, Khufu is operational immediately, with no hiring or long commitment.',
      es: 'Montar un equipo técnico interno lleva meses de contratación y compromete salarios antes de la primera línea de código. Para lanzar una V1, Khufu está operativo de inmediato, sin contrataciones ni compromisos largos.',
      de: 'Ein internes Tech-Team aufzubauen kostet Monate an Rekrutierung und bindet Gehälter, noch bevor die erste Codezeile steht. Um eine V1 zu launchen, ist Khufu sofort einsatzbereit, ohne Einstellung oder lange Bindung.',
      it: 'Costruire un team tech interno richiede mesi di selezione e impegna stipendi ancora prima della prima riga di codice. Per lanciare una V1, Khufu è operativo subito, senza assunzioni né impegni lunghi.',
      pt: 'Montar uma equipa técnica interna leva meses de recrutamento e compromete salários antes da primeira linha de código. Para lançar uma V1, a Khufu está operacional de imediato, sem contratações nem compromissos longos.',
      nl: 'Een intern techteam opbouwen kost maanden werving en legt salarissen vast nog voor de eerste regel code. Om een V1 te lanceren is Khufu meteen inzetbaar, zonder aanwerving of lange verbintenis.',
      ar: 'بناء فريق تقني داخلي يستغرق أشهرًا من التوظيف ويلتزم برواتب قبل أول سطر برمجي. لإطلاق نسخة V1، تكون Khufu جاهزة فورًا، دون توظيف أو التزام طويل.',
      pl: 'Zbudowanie wewnętrznego zespołu tech zajmuje miesiące rekrutacji i wiąże pensje jeszcze przed pierwszą linijką kodu. Aby uruchomić V1, Khufu jest gotowe od razu, bez zatrudniania i długich zobowiązań.',
      tr: 'Şirket içi teknik ekip kurmak aylarca işe alım gerektirir ve daha ilk kod satırından önce maaşları taahhüt eder. Bir V1 başlatmak için Khufu, işe alım veya uzun taahhüt olmadan hemen faaliyete geçer.',
    },
    khufuLabel: { fr: 'Khufu', en: 'Khufu', es: 'Khufu', de: 'Khufu', it: 'Khufu', pt: 'Khufu', nl: 'Khufu', ar: 'Khufu', pl: 'Khufu', tr: 'Khufu' },
    otherLabel: { fr: 'Équipe interne', en: 'In-house team', es: 'Equipo interno', de: 'Internes Team', it: 'Team interno', pt: 'Equipa interna', nl: 'Intern team', ar: 'فريق داخلي', pl: 'Zespół wewnętrzny', tr: 'İç ekip' },
    rows: [
      {
        aspect: { fr: 'Mise en route', en: 'Ramp-up', es: 'Puesta en marcha', de: 'Anlaufzeit', it: 'Avvio', pt: 'Arranque', nl: 'Opstart', ar: 'الانطلاق', pl: 'Rozruch', tr: 'Devreye alma' },
        khufu: { fr: 'Immédiate', en: 'Immediate', es: 'Inmediata', de: 'Sofort', it: 'Immediato', pt: 'Imediato', nl: 'Onmiddellijk', ar: 'فوري', pl: 'Natychmiastowy', tr: 'Anında' },
        other: { fr: 'Des mois de recrutement', en: 'Months of hiring', es: 'Meses de contratación', de: 'Monate der Rekrutierung', it: 'Mesi di selezione', pt: 'Meses de recrutamento', nl: 'Maanden werving', ar: 'أشهر من التوظيف', pl: 'Miesiące rekrutacji', tr: 'Aylarca işe alım' },
      },
      {
        aspect: { fr: 'Coût pour une V1', en: 'Cost for a V1', es: 'Coste para una V1', de: 'Kosten für eine V1', it: 'Costo per una V1', pt: 'Custo para uma V1', nl: 'Kosten voor een V1', ar: 'تكلفة نسخة V1', pl: 'Koszt V1', tr: 'Bir V1 maliyeti' },
        khufu: { fr: '15 000 € une fois', en: '€15,000 one-off', es: '15 000 € una vez', de: '15 000 € einmalig', it: '15 000 € una tantum', pt: '15 000 € uma vez', nl: '15 000 € eenmalig', ar: '15 000 € مرة واحدة', pl: '15 000 € jednorazowo', tr: '15 000 € tek seferlik' },
        other: { fr: 'Plusieurs salaires/mois', en: 'Several salaries/month', es: 'Varios salarios/mes', de: 'Mehrere Gehälter/Monat', it: 'Diversi stipendi/mese', pt: 'Vários salários/mês', nl: 'Meerdere salarissen/maand', ar: 'عدّة رواتب شهريًا', pl: 'Kilka pensji/miesiąc', tr: 'Ayda birkaç maaş' },
      },
      {
        aspect: { fr: 'Risque', en: 'Risk', es: 'Riesgo', de: 'Risiko', it: 'Rischio', pt: 'Risco', nl: 'Risico', ar: 'المخاطرة', pl: 'Ryzyko', tr: 'Risk' },
        khufu: { fr: 'Périmètre et prix fixés', en: 'Fixed scope and price', es: 'Alcance y precio fijos', de: 'Fester Umfang und Preis', it: 'Perimetro e prezzo fissi', pt: 'Âmbito e preço fixos', nl: 'Vaste scope en prijs', ar: 'نطاق وسعر ثابتان', pl: 'Stały zakres i cena', tr: 'Sabit kapsam ve fiyat' },
        other: { fr: 'Mauvais recrutement coûteux', en: 'Costly bad hire', es: 'Mala contratación costosa', de: 'Teure Fehleinstellung', it: 'Assunzione sbagliata costosa', pt: 'Má contratação dispendiosa', nl: 'Dure verkeerde aanwerving', ar: 'توظيف خاطئ مكلف', pl: 'Kosztowna zła rekrutacja', tr: 'Maliyetli yanlış işe alım' },
      },
      {
        aspect: { fr: 'Après la V1', en: 'After the V1', es: 'Después de la V1', de: 'Nach der V1', it: 'Dopo la V1', pt: 'Após a V1', nl: 'Na de V1', ar: 'بعد نسخة V1', pl: 'Po V1', tr: 'V1’den sonra' },
        khufu: { fr: 'Maintenance ou passage de relais', en: 'Maintenance or handover', es: 'Mantenimiento o traspaso', de: 'Wartung oder Übergabe', it: 'Manutenzione o passaggio di consegne', pt: 'Manutenção ou transferência', nl: 'Onderhoud of overdracht', ar: 'صيانة أو تسليم', pl: 'Utrzymanie lub przekazanie', tr: 'Bakım veya devir' },
        other: { fr: 'Équipe à occuper en continu', en: 'Team to keep busy', es: 'Equipo que mantener ocupado', de: 'Team dauerhaft auszulasten', it: 'Team da tenere occupato', pt: 'Equipa para manter ocupada', nl: 'Team dat je bezig moet houden', ar: 'فريق يجب إبقاؤه مشغولًا', pl: 'Zespół do stałego zajęcia', tr: 'Sürekli meşgul edilecek ekip' },
      },
    ],
    conclusion: {
      fr: 'Pour lancer, Khufu évite les mois de recrutement et le risque salarial — vous internalisez plus tard, si besoin.',
      en: 'To launch, Khufu avoids months of hiring and salary risk — you internalize later, if needed.',
      es: 'Para lanzar, Khufu evita meses de contratación y el riesgo salarial — internalizas más tarde, si hace falta.',
      de: 'Zum Launch vermeidet Khufu monatelange Rekrutierung und das Gehaltsrisiko – Sie internalisieren später, falls nötig.',
      it: 'Per lanciare, Khufu evita mesi di selezione e il rischio salariale — internalizzi più tardi, se serve.',
      pt: 'Para lançar, a Khufu evita meses de recrutamento e o risco salarial — internaliza mais tarde, se for preciso.',
      nl: 'Om te lanceren vermijdt Khufu maanden werving en het salarisrisico — je internaliseert later, indien nodig.',
      ar: 'للإطلاق، تتجنّب Khufu أشهر التوظيف ومخاطر الرواتب — ويمكنك الاستيعاب داخليًا لاحقًا عند الحاجة.',
      pl: 'Aby uruchomić, Khufu unika miesięcy rekrutacji i ryzyka płacowego — internalizujesz później, jeśli trzeba.',
      tr: 'Başlatmak için Khufu, aylarca işe alımı ve maaş riskini önler — gerekirse sonradan içselleştirirsiniz.',
    },
    cta: 'sprint',
  },
]

export const comparisons = fillLocaleDeep(comparisonsData) as unknown as Comparison[]

// ── Use cases (/cas-d-usage/[slug]) ──────────────────────────────────────────
const useCasesData: UseCaseInput[] = [
  {
    slug: 'lancer-un-saas',
    metaTitle: { fr: 'Lancer un SaaS en 1 semaine', en: 'Launch a SaaS in one week', es: 'Lanzar un SaaS en una semana', de: 'Ein SaaS in 1 Woche launchen', it: 'Lanciare un SaaS in 1 settimana', pt: 'Lançar um SaaS em 1 semana', nl: 'Een SaaS in 1 week lanceren', ar: 'إطلاق SaaS في أسبوع واحد', pl: 'Uruchom SaaS w 1 tydzień', tr: 'Bir SaaS’ı 1 haftada başlatın' },
    metaDescription: {
      fr: 'Comment lancer un SaaS rapidement : Khufu conçoit, développe et met en production votre SaaS en 7 jours, pour un prix fixe de 15 000 €.',
      en: 'How to launch a SaaS fast: Khufu designs, builds and ships your SaaS in 7 days, for a fixed price of €15,000.',
      es: 'Cómo lanzar un SaaS rápido: Khufu diseña, desarrolla y pone en producción tu SaaS en 7 días, por un precio fijo de 15 000 €.',
      de: 'Wie man ein SaaS schnell launcht: Khufu konzipiert, entwickelt und bringt Ihr SaaS in 7 Tagen in Produktion, zum Festpreis von 15 000 €.',
      it: 'Come lanciare un SaaS in fretta: Khufu progetta, sviluppa e mette in produzione il tuo SaaS in 7 giorni, a un prezzo fisso di 15 000 €.',
      pt: 'Como lançar um SaaS depressa: a Khufu concebe, desenvolve e põe em produção o seu SaaS em 7 dias, por um preço fixo de 15 000 €.',
      nl: 'Hoe je snel een SaaS lanceert: Khufu ontwerpt, bouwt en zet je SaaS in 7 dagen in productie, voor een vaste prijs van 15 000 €.',
      ar: 'كيف تطلق SaaS بسرعة: تصمّم Khufu وتطوّر وتُطلق منتجك SaaS في الإنتاج خلال 7 أيام، بسعر ثابت قدره 15 000 €.',
      pl: 'Jak szybko uruchomić SaaS: Khufu projektuje, buduje i wdraża Twój SaaS na produkcję w 7 dni, za stałą cenę 15 000 €.',
      tr: 'Bir SaaS nasıl hızlı başlatılır: Khufu, SaaS’ınızı 7 günde tasarlar, geliştirir ve üretime alır, 15 000 € sabit fiyata.',
    },
    persona: { fr: 'SaaS', en: 'SaaS', es: 'SaaS', de: 'SaaS', it: 'SaaS', pt: 'SaaS', nl: 'SaaS', ar: 'SaaS', pl: 'SaaS', tr: 'SaaS' },
    title: { fr: 'Lancer votre SaaS', en: 'Launch your SaaS', es: 'Lanzar tu SaaS', de: 'Ihr SaaS launchen', it: 'Lancia il tuo SaaS', pt: 'Lançar o seu SaaS', nl: 'Je SaaS lanceren', ar: 'أطلق منتجك SaaS', pl: 'Uruchom swój SaaS', tr: 'SaaS’ınızı başlatın' },
    intro: {
      fr: 'Vous avez une idée de SaaS et vous voulez la mettre entre les mains d’utilisateurs sans attendre des mois. Khufu conçoit et développe votre SaaS — auth, paiement, dashboard, base de données — et le met en production en une semaine.',
      en: 'You have a SaaS idea and want it in users’ hands without waiting months. Khufu designs and builds your SaaS — auth, payments, dashboard, database — and ships it to production in one week.',
      es: 'Tienes una idea de SaaS y quieres ponerla en manos de usuarios sin esperar meses. Khufu diseña y desarrolla tu SaaS — auth, pagos, dashboard, base de datos — y lo pone en producción en una semana.',
      de: 'Sie haben eine SaaS-Idee und wollen sie in die Hände von Nutzern bringen, ohne Monate zu warten. Khufu konzipiert und entwickelt Ihr SaaS — Auth, Zahlung, Dashboard, Datenbank — und bringt es in einer Woche in Produktion.',
      it: 'Hai un’idea di SaaS e vuoi metterla nelle mani degli utenti senza aspettare mesi. Khufu progetta e sviluppa il tuo SaaS — auth, pagamenti, dashboard, database — e lo mette in produzione in una settimana.',
      pt: 'Tem uma ideia de SaaS e quer pô-la nas mãos dos utilizadores sem esperar meses. A Khufu concebe e desenvolve o seu SaaS — auth, pagamentos, dashboard, base de dados — e coloca-o em produção numa semana.',
      nl: 'Je hebt een SaaS-idee en wilt het in handen van gebruikers krijgen zonder maanden te wachten. Khufu ontwerpt en bouwt je SaaS — auth, betalingen, dashboard, database — en zet het in één week in productie.',
      ar: 'لديك فكرة SaaS وتريد وضعها بين أيدي المستخدمين دون انتظار أشهر. تصمّم Khufu وتطوّر منتجك SaaS — المصادقة، الدفع، لوحة التحكم، قاعدة البيانات — وتضعه في الإنتاج خلال أسبوع.',
      pl: 'Masz pomysł na SaaS i chcesz oddać go w ręce użytkowników bez czekania miesiącami. Khufu projektuje i buduje Twój SaaS — auth, płatności, dashboard, baza danych — i wdraża go na produkcję w tydzień.',
      tr: 'Bir SaaS fikriniz var ve aylarca beklemeden kullanıcıların eline vermek istiyorsunuz. Khufu, SaaS’ınızı — kimlik doğrulama, ödeme, dashboard, veritabanı — tasarlar, geliştirir ve bir haftada üretime alır.',
    },
    problems: [
      { fr: 'Des mois de dev avant le moindre utilisateur', en: 'Months of dev before a single user', es: 'Meses de desarrollo antes del primer usuario', de: 'Monate Entwicklung vor dem ersten Nutzer', it: 'Mesi di sviluppo prima del primo utente', pt: 'Meses de desenvolvimento antes do primeiro utilizador', nl: 'Maanden ontwikkeling vóór de eerste gebruiker', ar: 'أشهر من التطوير قبل أول مستخدم', pl: 'Miesiące developmentu przed pierwszym użytkownikiem', tr: 'İlk kullanıcıdan önce aylarca geliştirme' },
      { fr: 'Des devis d’agence à 40k+ et flous', en: 'Vague agency quotes at €40k+', es: 'Presupuestos de agencia de 40k+ y vagos', de: 'Vage Agentur-Angebote ab 40k+', it: 'Preventivi d’agenzia vaghi da 40k+', pt: 'Orçamentos de agência vagos de 40k+', nl: 'Vage bureau-offertes van 40k+', ar: 'عروض وكالات غامضة بـ 40k+', pl: 'Niejasne wyceny agencji od 40k+', tr: 'Belirsiz ajans teklifleri, 40k+' },
      { fr: 'Un no-code qui plafonne dès la croissance', en: 'No-code that caps out on growth', es: 'No-code que se estanca al crecer', de: 'No-code, das beim Wachstum an Grenzen stößt', it: 'No-code che si blocca con la crescita', pt: 'No-code que estagna com o crescimento', nl: 'No-code dat vastloopt bij groei', ar: 'no-code يبلغ سقفه مع النمو', pl: 'No-code, które zatrzymuje się przy wzroście', tr: 'Büyümede tavana ulaşan no-code' },
    ],
    approach: {
      fr: 'On cadre le périmètre au jour 1, on développe sur une stack éprouvée (Next.js, NestJS, PostgreSQL), et on livre un SaaS en production, à vous, en 7 jours.',
      en: 'We scope on day 1, build on a proven stack (Next.js, NestJS, PostgreSQL), and deliver a production SaaS, yours, in 7 days.',
      es: 'Definimos el alcance el día 1, desarrollamos sobre un stack probado (Next.js, NestJS, PostgreSQL) y entregamos un SaaS en producción, tuyo, en 7 días.',
      de: 'Wir stecken den Umfang an Tag 1 ab, entwickeln auf einem bewährten Stack (Next.js, NestJS, PostgreSQL) und liefern ein SaaS in Produktion, Ihres, in 7 Tagen.',
      it: 'Definiamo il perimetro al giorno 1, sviluppiamo su uno stack collaudato (Next.js, NestJS, PostgreSQL) e consegniamo un SaaS in produzione, tuo, in 7 giorni.',
      pt: 'Definimos o âmbito no dia 1, desenvolvemos numa stack comprovada (Next.js, NestJS, PostgreSQL) e entregamos um SaaS em produção, seu, em 7 dias.',
      nl: 'We bakenen de scope af op dag 1, bouwen op een beproefde stack (Next.js, NestJS, PostgreSQL) en leveren een SaaS in productie, van jou, in 7 dagen.',
      ar: 'نحدّد النطاق في اليوم الأول، ونطوّر على حزمة مجرّبة (Next.js، NestJS، PostgreSQL)، ونسلّم SaaS في الإنتاج، ملكك، خلال 7 أيام.',
      pl: 'Zakres ustalamy w dniu 1, budujemy na sprawdzonym stacku (Next.js, NestJS, PostgreSQL) i dostarczamy SaaS na produkcji, Twój, w 7 dni.',
      tr: '1. günde kapsamı belirleriz, kanıtlanmış bir stack üzerinde (Next.js, NestJS, PostgreSQL) geliştiririz ve 7 günde size ait, üretimde bir SaaS teslim ederiz.',
    },
    outcomes: [
      { fr: 'Un SaaS lançable en 7 jours', en: 'A launchable SaaS in 7 days', es: 'Un SaaS lanzable en 7 días', de: 'Ein launchbares SaaS in 7 Tagen', it: 'Un SaaS lanciabile in 7 giorni', pt: 'Um SaaS lançável em 7 dias', nl: 'Een lanceerbare SaaS in 7 dagen', ar: 'SaaS جاهز للإطلاق خلال 7 أيام', pl: 'Gotowy do uruchomienia SaaS w 7 dni', tr: '7 günde başlatılabilir bir SaaS' },
      { fr: 'Code source à vous, prêt à scaler', en: 'Source code yours, ready to scale', es: 'Código fuente tuyo, listo para escalar', de: 'Quellcode Ihrer, bereit zu skalieren', it: 'Codice sorgente tuo, pronto a scalare', pt: 'Código-fonte seu, pronto a escalar', nl: 'Broncode van jou, klaar om te schalen', ar: 'الكود المصدري ملكك، جاهز للتوسّع', pl: 'Kod źródłowy Twój, gotowy do skalowania', tr: 'Kaynak kod sizin, ölçeklenmeye hazır' },
      { fr: 'Prix fixe : 15 000 €', en: 'Fixed price: €15,000', es: 'Precio fijo: 15 000 €', de: 'Festpreis: 15 000 €', it: 'Prezzo fisso: 15 000 €', pt: 'Preço fixo: 15 000 €', nl: 'Vaste prijs: 15 000 €', ar: 'سعر ثابت: 15 000 €', pl: 'Stała cena: 15 000 €', tr: 'Sabit fiyat: 15 000 €' },
    ],
    cta: 'sprint',
  },
  {
    slug: 'lancer-une-app-mobile',
    metaTitle: { fr: 'Lancer une app mobile en 1 semaine', en: 'Launch a mobile app in one week', es: 'Lanzar una app móvil en una semana', de: 'Eine Mobile-App in 1 Woche launchen', it: 'Lanciare un’app mobile in 1 settimana', pt: 'Lançar uma app móvel em 1 semana', nl: 'Een mobiele app in 1 week lanceren', ar: 'إطلاق تطبيق محمول في أسبوع واحد', pl: 'Uruchom aplikację mobilną w 1 tydzień', tr: 'Bir mobil uygulamayı 1 haftada başlatın' },
    metaDescription: {
      fr: 'Comment lancer une app mobile rapidement : Khufu développe votre app iOS et Android (React Native / Expo) et la prépare pour les stores en 7 jours.',
      en: 'How to launch a mobile app fast: Khufu builds your iOS and Android app (React Native / Expo) and gets it store-ready in 7 days.',
      es: 'Cómo lanzar una app móvil rápido: Khufu desarrolla tu app iOS y Android (React Native / Expo) y la deja lista para las stores en 7 días.',
      de: 'Wie man eine Mobile-App schnell launcht: Khufu entwickelt Ihre iOS- und Android-App (React Native / Expo) und macht sie in 7 Tagen store-ready.',
      it: 'Come lanciare un’app mobile in fretta: Khufu sviluppa la tua app iOS e Android (React Native / Expo) e la rende pronta per gli store in 7 giorni.',
      pt: 'Como lançar uma app móvel depressa: a Khufu desenvolve a sua app iOS e Android (React Native / Expo) e deixa-a pronta para as stores em 7 dias.',
      nl: 'Hoe je snel een mobiele app lanceert: Khufu bouwt je iOS- en Android-app (React Native / Expo) en maakt hem in 7 dagen store-klaar.',
      ar: 'كيف تطلق تطبيقًا محمولًا بسرعة: تطوّر Khufu تطبيقك لـ iOS وAndroid (React Native / Expo) وتجعله جاهزًا للمتاجر خلال 7 أيام.',
      pl: 'Jak szybko uruchomić aplikację mobilną: Khufu tworzy Twoją aplikację iOS i Android (React Native / Expo) i przygotowuje ją do sklepów w 7 dni.',
      tr: 'Bir mobil uygulama nasıl hızlı başlatılır: Khufu, iOS ve Android uygulamanızı (React Native / Expo) geliştirir ve 7 günde mağazaya hazır hale getirir.',
    },
    persona: { fr: 'App mobile', en: 'Mobile app', es: 'App móvil', de: 'Mobile-App', it: 'App mobile', pt: 'App móvel', nl: 'Mobiele app', ar: 'تطبيق محمول', pl: 'Aplikacja mobilna', tr: 'Mobil uygulama' },
    title: { fr: 'Lancer votre app mobile', en: 'Launch your mobile app', es: 'Lanzar tu app móvil', de: 'Ihre Mobile-App launchen', it: 'Lancia la tua app mobile', pt: 'Lançar a sua app móvel', nl: 'Je mobiele app lanceren', ar: 'أطلق تطبيقك المحمول', pl: 'Uruchom swoją aplikację mobilną', tr: 'Mobil uygulamanızı başlatın' },
    intro: {
      fr: 'Vous voulez une app iOS et Android sans monter une équipe mobile. Khufu conçoit et développe votre app en React Native / Expo et la prépare pour la publication sur l’App Store et Google Play en une semaine.',
      en: 'You want an iOS and Android app without hiring a mobile team. Khufu designs and builds your app in React Native / Expo and gets it ready for the App Store and Google Play in one week.',
      es: 'Quieres una app iOS y Android sin montar un equipo móvil. Khufu diseña y desarrolla tu app en React Native / Expo y la deja lista para la App Store y Google Play en una semana.',
      de: 'Sie wollen eine iOS- und Android-App, ohne ein Mobile-Team aufzubauen. Khufu konzipiert und entwickelt Ihre App in React Native / Expo und macht sie in einer Woche bereit zur Veröffentlichung im App Store und bei Google Play.',
      it: 'Vuoi un’app iOS e Android senza costruire un team mobile. Khufu progetta e sviluppa la tua app in React Native / Expo e la prepara per la pubblicazione su App Store e Google Play in una settimana.',
      pt: 'Quer uma app iOS e Android sem montar uma equipa mobile. A Khufu concebe e desenvolve a sua app em React Native / Expo e prepara-a para publicação na App Store e Google Play numa semana.',
      nl: 'Je wilt een iOS- en Android-app zonder een mobiel team op te bouwen. Khufu ontwerpt en bouwt je app in React Native / Expo en maakt hem in één week klaar voor publicatie in de App Store en Google Play.',
      ar: 'تريد تطبيقًا لـ iOS وAndroid دون بناء فريق للمحمول. تصمّم Khufu وتطوّر تطبيقك بـ React Native / Expo وتجهّزه للنشر على App Store وGoogle Play خلال أسبوع.',
      pl: 'Chcesz aplikacji iOS i Android bez budowania zespołu mobilnego. Khufu projektuje i buduje Twoją aplikację w React Native / Expo i przygotowuje ją do publikacji w App Store i Google Play w tydzień.',
      tr: 'Bir mobil ekip kurmadan iOS ve Android uygulaması istiyorsunuz. Khufu, uygulamanızı React Native / Expo ile tasarlar, geliştirir ve bir haftada App Store ve Google Play’de yayına hazır hale getirir.',
    },
    problems: [
      { fr: 'Recruter iOS + Android coûte cher et prend du temps', en: 'Hiring iOS + Android is slow and costly', es: 'Contratar iOS + Android es lento y caro', de: 'iOS + Android einzustellen ist langsam und teuer', it: 'Assumere iOS + Android è lento e costoso', pt: 'Contratar iOS + Android é lento e caro', nl: 'iOS + Android aanwerven is traag en duur', ar: 'توظيف iOS + Android بطيء ومكلف', pl: 'Zatrudnienie iOS + Android jest wolne i kosztowne', tr: 'iOS + Android işe almak yavaş ve pahalı' },
      { fr: 'Deux bases de code à maintenir', en: 'Two codebases to maintain', es: 'Dos bases de código que mantener', de: 'Zwei Codebasen zu warten', it: 'Due codebase da mantenere', pt: 'Duas codebases a manter', nl: 'Twee codebases om te onderhouden', ar: 'قاعدتا كود تحتاجان إلى صيانة', pl: 'Dwie bazy kodu do utrzymania', tr: 'Bakımı yapılacak iki kod tabanı' },
      { fr: 'Le time-to-market s’allonge', en: 'Time-to-market keeps slipping', es: 'El time-to-market se alarga', de: 'Die Time-to-Market verzögert sich immer weiter', it: 'Il time-to-market si allunga', pt: 'O time-to-market vai-se alongando', nl: 'De time-to-market blijft uitlopen', ar: 'يطول وقت الوصول إلى السوق', pl: 'Time-to-market wciąż się wydłuża', tr: 'Pazara çıkış süresi giderek uzuyor' },
    ],
    approach: {
      fr: 'Une seule base React Native / Expo pour iOS et Android, développée assistée par l’IA, avec le backend et les intégrations nécessaires — prête pour les stores en 7 jours.',
      en: 'A single React Native / Expo codebase for iOS and Android, AI-assisted, with the backend and integrations you need — store-ready in 7 days.',
      es: 'Una sola base React Native / Expo para iOS y Android, asistida por IA, con el backend e integraciones necesarios — lista para las stores en 7 días.',
      de: 'Eine einzige React Native / Expo-Codebasis für iOS und Android, KI-unterstützt, mit dem nötigen Backend und den nötigen Integrationen — store-ready in 7 Tagen.',
      it: 'Un’unica codebase React Native / Expo per iOS e Android, assistita dall’IA, con il backend e le integrazioni necessari — pronta per gli store in 7 giorni.',
      pt: 'Uma única codebase React Native / Expo para iOS e Android, assistida por IA, com o backend e as integrações necessários — pronta para as stores em 7 dias.',
      nl: 'Eén React Native / Expo-codebase voor iOS en Android, AI-ondersteund, met de backend en integraties die je nodig hebt — store-klaar in 7 dagen.',
      ar: 'قاعدة كود واحدة React Native / Expo لـ iOS وAndroid، مدعومة بالذكاء الاصطناعي، مع الخلفية والتكاملات اللازمة — جاهزة للمتاجر خلال 7 أيام.',
      pl: 'Jedna baza kodu React Native / Expo dla iOS i Android, wspierana przez AI, z potrzebnym backendem i integracjami — gotowa do sklepów w 7 dni.',
      tr: 'iOS ve Android için tek bir React Native / Expo kod tabanı, yapay zeka destekli, ihtiyacınız olan backend ve entegrasyonlarla — 7 günde mağazaya hazır.',
    },
    outcomes: [
      { fr: 'Une app iOS + Android prête pour les stores', en: 'An iOS + Android app, store-ready', es: 'Una app iOS + Android lista para las stores', de: 'Eine iOS- + Android-App, store-ready', it: 'Un’app iOS + Android pronta per gli store', pt: 'Uma app iOS + Android pronta para as stores', nl: 'Een iOS- + Android-app, store-klaar', ar: 'تطبيق iOS + Android جاهز للمتاجر', pl: 'Aplikacja iOS + Android gotowa do sklepów', tr: 'Mağazaya hazır bir iOS + Android uygulaması' },
      { fr: 'Une seule base de code, maintenable', en: 'A single, maintainable codebase', es: 'Una sola base de código, mantenible', de: 'Eine einzige, wartbare Codebasis', it: 'Un’unica codebase manutenibile', pt: 'Uma única codebase mantível', nl: 'Eén onderhoudbare codebase', ar: 'قاعدة كود واحدة قابلة للصيانة', pl: 'Jedna baza kodu, łatwa w utrzymaniu', tr: 'Tek, sürdürülebilir bir kod tabanı' },
      { fr: 'Prix fixe : 15 000 €', en: 'Fixed price: €15,000', es: 'Precio fijo: 15 000 €', de: 'Festpreis: 15 000 €', it: 'Prezzo fisso: 15 000 €', pt: 'Preço fixo: 15 000 €', nl: 'Vaste prijs: 15 000 €', ar: 'سعر ثابت: 15 000 €', pl: 'Stała cena: 15 000 €', tr: 'Sabit fiyat: 15 000 €' },
    ],
    cta: 'sprint',
  },
  {
    slug: 'entrepreneur-premier-produit',
    metaTitle: { fr: 'Entrepreneur : lancer votre premier produit', en: 'Founder: launch your first product', es: 'Emprendedor: lanzar tu primer producto', de: 'Gründer: Ihr erstes Produkt launchen', it: 'Imprenditore: lancia il tuo primo prodotto', pt: 'Empreendedor: lançar o seu primeiro produto', nl: 'Ondernemer: je eerste product lanceren', ar: 'رائد أعمال: أطلق منتجك الأول', pl: 'Przedsiębiorca: uruchom swój pierwszy produkt', tr: 'Girişimci: ilk ürününüzü başlatın' },
    metaDescription: {
      fr: 'Vous êtes entrepreneur et lancez votre premier produit ? Khufu transforme votre idée en produit lançable en 7 jours, prix fixe, sans équipe technique.',
      en: 'A founder launching your first product? Khufu turns your idea into a launchable product in 7 days, fixed price, with no tech team.',
      es: '¿Emprendedor lanzando tu primer producto? Khufu convierte tu idea en un producto lanzable en 7 días, precio fijo, sin equipo técnico.',
      de: 'Sie sind Gründer und launchen Ihr erstes Produkt? Khufu verwandelt Ihre Idee in 7 Tagen in ein launchbares Produkt, zum Festpreis, ohne Tech-Team.',
      it: 'Sei un imprenditore che lancia il primo prodotto? Khufu trasforma la tua idea in un prodotto lanciabile in 7 giorni, a prezzo fisso, senza team tecnico.',
      pt: 'É empreendedor a lançar o seu primeiro produto? A Khufu transforma a sua ideia num produto lançável em 7 dias, a preço fixo, sem equipa técnica.',
      nl: 'Ben je ondernemer die zijn eerste product lanceert? Khufu maakt van je idee in 7 dagen een lanceerbaar product, tegen vaste prijs, zonder techteam.',
      ar: 'رائد أعمال تطلق منتجك الأول؟ تحوّل Khufu فكرتك إلى منتج قابل للإطلاق خلال 7 أيام، بسعر ثابت، دون فريق تقني.',
      pl: 'Jesteś przedsiębiorcą uruchamiającym swój pierwszy produkt? Khufu zamienia Twój pomysł w gotowy do uruchomienia produkt w 7 dni, za stałą cenę, bez zespołu technicznego.',
      tr: 'İlk ürününü başlatan bir girişimci misiniz? Khufu, fikrinizi 7 günde başlatılabilir bir ürüne dönüştürür, sabit fiyatla, teknik ekip olmadan.',
    },
    persona: { fr: 'Nouvel entrepreneur', en: 'New founder', es: 'Nuevo emprendedor', de: 'Neuer Gründer', it: 'Nuovo imprenditore', pt: 'Novo empreendedor', nl: 'Nieuwe ondernemer', ar: 'رائد أعمال جديد', pl: 'Nowy przedsiębiorca', tr: 'Yeni girişimci' },
    title: { fr: 'Votre premier produit, lancé', en: 'Your first product, launched', es: 'Tu primer producto, lanzado', de: 'Ihr erstes Produkt, gelauncht', it: 'Il tuo primo prodotto, lanciato', pt: 'O seu primeiro produto, lançado', nl: 'Je eerste product, gelanceerd', ar: 'منتجك الأول، مُطلَق', pl: 'Twój pierwszy produkt, uruchomiony', tr: 'İlk ürününüz, başlatıldı' },
    intro: {
      fr: 'Vous avez une idée mais pas d’équipe technique. Plutôt que de chercher un CTO ou d’apprendre à coder, Khufu transforme votre idée en produit réel, en production, en une semaine — pour un prix que vous connaissez à l’avance.',
      en: 'You have an idea but no tech team. Instead of hunting for a CTO or learning to code, Khufu turns your idea into a real product, in production, in one week — for a price you know upfront.',
      es: 'Tienes una idea pero no un equipo técnico. En lugar de buscar un CTO o aprender a programar, Khufu convierte tu idea en un producto real, en producción, en una semana — por un precio que conoces de antemano.',
      de: 'Sie haben eine Idee, aber kein Tech-Team. Statt einen CTO zu suchen oder programmieren zu lernen, verwandelt Khufu Ihre Idee in ein echtes Produkt, in Produktion, in einer Woche — zu einem Preis, den Sie vorab kennen.',
      it: 'Hai un’idea ma non un team tecnico. Invece di cercare un CTO o imparare a programmare, Khufu trasforma la tua idea in un prodotto reale, in produzione, in una settimana — a un prezzo che conosci in anticipo.',
      pt: 'Tem uma ideia mas não uma equipa técnica. Em vez de procurar um CTO ou aprender a programar, a Khufu transforma a sua ideia num produto real, em produção, numa semana — por um preço que conhece à partida.',
      nl: 'Je hebt een idee maar geen techteam. In plaats van een CTO te zoeken of te leren coderen, maakt Khufu van je idee een echt product, in productie, in één week — tegen een prijs die je vooraf kent.',
      ar: 'لديك فكرة لكن ليس لديك فريق تقني. بدلًا من البحث عن CTO أو تعلّم البرمجة، تحوّل Khufu فكرتك إلى منتج حقيقي، في الإنتاج، خلال أسبوع — بسعر تعرفه مسبقًا.',
      pl: 'Masz pomysł, ale nie masz zespołu technicznego. Zamiast szukać CTO lub uczyć się programować, Khufu zamienia Twój pomysł w prawdziwy produkt, na produkcji, w tydzień — za cenę, którą znasz z góry.',
      tr: 'Bir fikriniz var ama teknik ekibiniz yok. Bir CTO aramak ya da kod öğrenmek yerine, Khufu fikrinizi bir haftada gerçek bir ürüne, üretimde, önceden bildiğiniz bir fiyata dönüştürür.',
    },
    problems: [
      { fr: 'Pas d’équipe ni de compétences techniques', en: 'No team or technical skills', es: 'Sin equipo ni conocimientos técnicos', de: 'Kein Team und keine technischen Fähigkeiten', it: 'Nessun team né competenze tecniche', pt: 'Sem equipa nem competências técnicas', nl: 'Geen team of technische vaardigheden', ar: 'لا فريق ولا مهارات تقنية', pl: 'Brak zespołu i umiejętności technicznych', tr: 'Ne ekip ne de teknik beceri' },
      { fr: 'Peur de dépenser trop pour un premier essai', en: 'Fear of overspending on a first try', es: 'Miedo a gastar de más en un primer intento', de: 'Angst, für einen ersten Versuch zu viel auszugeben', it: 'Paura di spendere troppo per un primo tentativo', pt: 'Medo de gastar demais numa primeira tentativa', nl: 'Angst om te veel uit te geven aan een eerste poging', ar: 'الخوف من الإنفاق الزائد على محاولة أولى', pl: 'Obawa przed nadmiernym wydatkiem na pierwszą próbę', tr: 'İlk denemede fazla harcama korkusu' },
      { fr: 'Besoin d’aller vite pour tester le marché', en: 'Need to move fast to test the market', es: 'Necesidad de ir rápido para probar el mercado', de: 'Notwendigkeit, schnell den Markt zu testen', it: 'Bisogno di andare veloci per testare il mercato', pt: 'Necessidade de ir depressa para testar o mercado', nl: 'Noodzaak om snel de markt te testen', ar: 'الحاجة إلى التحرّك بسرعة لاختبار السوق', pl: 'Potrzeba szybkiego działania, by przetestować rynek', tr: 'Pazarı test etmek için hızlı hareket etme ihtiyacı' },
    ],
    approach: {
      fr: 'On vous accompagne du cadrage à la mise en production. Vous gardez la vision, on s’occupe de tout le reste — design, dev, hébergement — en 7 jours.',
      en: 'We guide you from scoping to production. You keep the vision, we handle everything else — design, dev, hosting — in 7 days.',
      es: 'Te acompañamos del alcance a la producción. Tú mantienes la visión, nosotros nos ocupamos del resto — diseño, desarrollo, alojamiento — en 7 días.',
      de: 'Wir begleiten Sie vom Scoping bis zur Produktion. Sie behalten die Vision, wir kümmern uns um alles andere — Design, Entwicklung, Hosting — in 7 Tagen.',
      it: 'Ti accompagniamo dallo scoping alla messa in produzione. Tu mantieni la visione, noi ci occupiamo di tutto il resto — design, sviluppo, hosting — in 7 giorni.',
      pt: 'Acompanhamo-lo do enquadramento à produção. Mantém a visão, nós tratamos de todo o resto — design, desenvolvimento, alojamento — em 7 dias.',
      nl: 'We begeleiden je van scoping tot productie. Jij houdt de visie, wij regelen al het andere — design, dev, hosting — in 7 dagen.',
      ar: 'نرافقك من تحديد النطاق إلى الإنتاج. أنت تحتفظ بالرؤية، ونحن نتولّى كل ما تبقّى — التصميم، التطوير، الاستضافة — خلال 7 أيام.',
      pl: 'Prowadzimy Cię od określenia zakresu do produkcji. Ty zachowujesz wizję, my zajmujemy się resztą — design, dev, hosting — w 7 dni.',
      tr: 'Kapsam belirlemeden üretime kadar size eşlik ederiz. Vizyon sizde kalır, geri kalan her şeyi — tasarım, geliştirme, barındırma — 7 günde biz hallederiz.',
    },
    outcomes: [
      { fr: 'Un produit en ligne pour tester votre marché', en: 'A live product to test your market', es: 'Un producto online para probar tu mercado', de: 'Ein Live-Produkt, um Ihren Markt zu testen', it: 'Un prodotto online per testare il tuo mercato', pt: 'Um produto online para testar o seu mercado', nl: 'Een live product om je markt te testen', ar: 'منتج على الإنترنت لاختبار سوقك', pl: 'Produkt online do przetestowania Twojego rynku', tr: 'Pazarınızı test etmek için canlı bir ürün' },
      { fr: 'Un budget maîtrisé, connu d’avance', en: 'A controlled, upfront budget', es: 'Un presupuesto controlado y conocido', de: 'Ein kontrolliertes, vorab bekanntes Budget', it: 'Un budget controllato, noto in anticipo', pt: 'Um orçamento controlado, conhecido à partida', nl: 'Een beheerst, vooraf bekend budget', ar: 'ميزانية مضبوطة معروفة مسبقًا', pl: 'Kontrolowany budżet, znany z góry', tr: 'Önceden bilinen, kontrollü bir bütçe' },
      { fr: 'Le code et le produit vous appartiennent', en: 'The code and product are yours', es: 'El código y el producto son tuyos', de: 'Code und Produkt gehören Ihnen', it: 'Il codice e il prodotto sono tuoi', pt: 'O código e o produto são seus', nl: 'De code en het product zijn van jou', ar: 'الكود والمنتج ملكك', pl: 'Kod i produkt należą do Ciebie', tr: 'Kod ve ürün sizindir' },
    ],
    cta: 'sprint',
  },
  {
    slug: 'startup-valider-vite',
    metaTitle: { fr: 'Startup : valider votre produit vite', en: 'Startup: validate your product fast', es: 'Startup: valida tu producto rápido', de: 'Startup: Ihr Produkt schnell validieren', it: 'Startup: valida in fretta il tuo prodotto', pt: 'Startup: valide o seu produto depressa', nl: 'Startup: valideer je product snel', ar: 'شركة ناشئة: تحقّق من منتجك بسرعة', pl: 'Startup: szybko zweryfikuj swój produkt', tr: 'Startup: ürününüzü hızlıca doğrulayın' },
    metaDescription: {
      fr: 'Startup qui doit valider vite ? Khufu livre une V1 en production en 7 jours pour tester votre marché avant de lever ou de recruter une équipe.',
      en: 'A startup that must validate fast? Khufu ships a production V1 in 7 days to test your market before raising or hiring a team.',
      es: '¿Una startup que debe validar rápido? Khufu entrega una V1 en producción en 7 días para probar tu mercado antes de levantar o contratar equipo.',
      de: 'Ein Startup, das schnell validieren muss? Khufu liefert in 7 Tagen eine V1 in Produktion, um Ihren Markt zu testen, bevor Sie Kapital aufnehmen oder ein Team einstellen.',
      it: 'Una startup che deve validare in fretta? Khufu consegna una V1 in produzione in 7 giorni per testare il tuo mercato prima di raccogliere fondi o assumere un team.',
      pt: 'Uma startup que precisa de validar depressa? A Khufu entrega uma V1 em produção em 7 dias para testar o seu mercado antes de levantar capital ou contratar uma equipa.',
      nl: 'Een startup die snel moet valideren? Khufu levert in 7 dagen een V1 in productie om je markt te testen voordat je ophaalt of een team aanwerft.',
      ar: 'شركة ناشئة عليها التحقّق بسرعة؟ تُسلّم Khufu نسخة V1 في الإنتاج خلال 7 أيام لاختبار سوقك قبل جمع التمويل أو توظيف فريق.',
      pl: 'Startup, który musi szybko zweryfikować? Khufu dostarcza V1 na produkcji w 7 dni, aby przetestować Twój rynek przed rundą lub zatrudnieniem zespołu.',
      tr: 'Hızlı doğrulaması gereken bir startup mı? Khufu, yatırım almadan veya ekip kurmadan önce pazarınızı test etmek için 7 günde üretimde bir V1 teslim eder.',
    },
    persona: { fr: 'Startup', en: 'Startup', es: 'Startup', de: 'Startup', it: 'Startup', pt: 'Startup', nl: 'Startup', ar: 'شركة ناشئة', pl: 'Startup', tr: 'Startup' },
    title: { fr: 'Valider vite, avant de scaler', en: 'Validate fast, before scaling', es: 'Validar rápido, antes de escalar', de: 'Schnell validieren, vor dem Skalieren', it: 'Validare in fretta, prima di scalare', pt: 'Validar depressa, antes de escalar', nl: 'Snel valideren, vóór het schalen', ar: 'التحقّق بسرعة، قبل التوسّع', pl: 'Weryfikuj szybko, przed skalowaniem', tr: 'Ölçeklemeden önce hızlıca doğrulayın' },
    intro: {
      fr: 'Une startup vit et meurt sur sa vitesse d’exécution. Plutôt que de brûler des mois de runway à recruter, Khufu livre une V1 en production en 7 jours pour mettre votre hypothèse à l’épreuve du marché.',
      en: 'A startup lives and dies on execution speed. Instead of burning months of runway hiring, Khufu ships a production V1 in 7 days to put your hypothesis to the market test.',
      es: 'Una startup vive y muere por su velocidad de ejecución. En lugar de quemar meses de runway contratando, Khufu entrega una V1 en producción en 7 días para poner tu hipótesis a prueba en el mercado.',
      de: 'Ein Startup lebt und stirbt mit seiner Ausführungsgeschwindigkeit. Statt Monate Runway mit Einstellungen zu verbrennen, liefert Khufu in 7 Tagen eine V1 in Produktion, um Ihre Hypothese dem Markttest zu unterziehen.',
      it: 'Una startup vive e muore sulla velocità di esecuzione. Invece di bruciare mesi di runway assumendo, Khufu consegna una V1 in produzione in 7 giorni per mettere la tua ipotesi alla prova del mercato.',
      pt: 'Uma startup vive e morre pela sua velocidade de execução. Em vez de queimar meses de runway a contratar, a Khufu entrega uma V1 em produção em 7 dias para pôr a sua hipótese à prova do mercado.',
      nl: 'Een startup leeft en sterft bij zijn uitvoeringssnelheid. In plaats van maanden runway op te branden met aanwerven, levert Khufu in 7 dagen een V1 in productie om je hypothese aan de markt te toetsen.',
      ar: 'الشركة الناشئة تحيا وتموت بسرعة تنفيذها. بدلًا من إحراق أشهر من الـ runway في التوظيف، تُسلّم Khufu نسخة V1 في الإنتاج خلال 7 أيام لوضع فرضيّتك تحت اختبار السوق.',
      pl: 'Startup żyje i umiera przez szybkość realizacji. Zamiast przepalać miesiące runway na rekrutację, Khufu dostarcza V1 na produkcji w 7 dni, aby poddać Twoją hipotezę próbie rynku.',
      tr: 'Bir startup, uygulama hızıyla yaşar ve ölür. Aylarca runway’i işe alımla yakmak yerine, Khufu hipotezinizi pazar testine tabi tutmak için 7 günde üretimde bir V1 teslim eder.',
    },
    problems: [
      { fr: 'Le runway se consume vite', en: 'Runway burns fast', es: 'El runway se consume rápido', de: 'Der Runway verbrennt schnell', it: 'Il runway si consuma in fretta', pt: 'O runway consome-se depressa', nl: 'De runway brandt snel op', ar: 'الـ runway يُستهلك بسرعة', pl: 'Runway szybko się wypala', tr: 'Runway hızla tükenir' },
      { fr: 'Recruter une équipe prend des mois', en: 'Hiring a team takes months', es: 'Contratar equipo lleva meses', de: 'Ein Team einzustellen dauert Monate', it: 'Assumere un team richiede mesi', pt: 'Contratar uma equipa leva meses', nl: 'Een team aanwerven duurt maanden', ar: 'توظيف فريق يستغرق أشهرًا', pl: 'Zatrudnienie zespołu zajmuje miesiące', tr: 'Ekip kurmak aylar sürer' },
      { fr: 'Il faut des preuves pour lever', en: 'You need traction to raise', es: 'Necesitas tracción para levantar', de: 'Sie brauchen Traktion, um Kapital aufzunehmen', it: 'Serve trazione per raccogliere fondi', pt: 'Precisa de tração para levantar capital', nl: 'Je hebt tractie nodig om op te halen', ar: 'تحتاج إلى جذب مستخدمين لجمع التمويل', pl: 'Potrzebujesz trakcji, aby pozyskać finansowanie', tr: 'Yatırım almak için çekiş gücüne ihtiyacınız var' },
    ],
    approach: {
      fr: 'On livre une V1 solide et mesurable (analytics inclus) en une semaine. Vous testez, vous apprenez, et vous itérez en régie ou en maintenance ensuite.',
      en: 'We ship a solid, measurable V1 (analytics included) in one week. You test, you learn, then iterate on a day rate or maintenance afterwards.',
      es: 'Entregamos una V1 sólida y medible (analítica incluida) en una semana. Pruebas, aprendes y luego iteras por horas o en mantenimiento.',
      de: 'Wir liefern in einer Woche eine solide, messbare V1 (inklusive Analytics). Sie testen, Sie lernen und iterieren danach auf Tagessatzbasis oder in der Wartung.',
      it: 'Consegniamo una V1 solida e misurabile (analytics inclusi) in una settimana. Testi, impari e poi iteri a giornata o in manutenzione.',
      pt: 'Entregamos uma V1 sólida e mensurável (analítica incluída) numa semana. Testa, aprende e depois itera à diária ou em manutenção.',
      nl: 'We leveren in één week een solide, meetbare V1 (analytics inbegrepen). Je test, je leert en itereert daarna op dagbasis of via onderhoud.',
      ar: 'نُسلّم نسخة V1 متينة وقابلة للقياس (مع analytics) خلال أسبوع. تختبر وتتعلّم ثم تكرّر بأجر يومي أو ضمن الصيانة لاحقًا.',
      pl: 'Dostarczamy solidną, mierzalną V1 (z analityką) w tydzień. Testujesz, uczysz się, a potem iterujesz w rozliczeniu dziennym lub w utrzymaniu.',
      tr: 'Bir haftada sağlam, ölçülebilir bir V1 (analitik dahil) teslim ederiz. Test edersiniz, öğrenirsiniz ve sonra günlük ücretle veya bakımla yinelersiniz.',
    },
    outcomes: [
      { fr: 'Une V1 mesurable en 7 jours', en: 'A measurable V1 in 7 days', es: 'Una V1 medible en 7 días', de: 'Eine messbare V1 in 7 Tagen', it: 'Una V1 misurabile in 7 giorni', pt: 'Uma V1 mensurável em 7 dias', nl: 'Een meetbare V1 in 7 dagen', ar: 'نسخة V1 قابلة للقياس خلال 7 أيام', pl: 'Mierzalna V1 w 7 dni', tr: '7 günde ölçülebilir bir V1' },
      { fr: 'Des preuves pour convaincre investisseurs et users', en: 'Proof for investors and users', es: 'Pruebas para inversores y usuarios', de: 'Belege, um Investoren und Nutzer zu überzeugen', it: 'Prove per convincere investitori e utenti', pt: 'Provas para convencer investidores e utilizadores', nl: 'Bewijs voor investeerders en gebruikers', ar: 'أدلّة لإقناع المستثمرين والمستخدمين', pl: 'Dowody, by przekonać inwestorów i użytkowników', tr: 'Yatırımcıları ve kullanıcıları ikna edecek kanıtlar' },
      { fr: 'Une base propre pour scaler ensuite', en: 'A clean base to scale from', es: 'Una base limpia para escalar', de: 'Eine saubere Basis zum späteren Skalieren', it: 'Una base pulita da cui scalare', pt: 'Uma base limpa para escalar depois', nl: 'Een schone basis om vanuit te schalen', ar: 'قاعدة نظيفة للتوسّع لاحقًا', pl: 'Czysta baza do dalszego skalowania', tr: 'Sonradan ölçeklenecek temiz bir temel' },
    ],
    cta: 'sprint',
  },
  {
    slug: 'grande-entreprise-tester-un-produit',
    metaTitle: { fr: 'Grande entreprise : tester un produit vite', en: 'Enterprise: test a product fast', es: 'Gran empresa: probar un producto rápido', de: 'Großunternehmen: ein Produkt schnell testen', it: 'Grande impresa: testare un prodotto in fretta', pt: 'Grande empresa: testar um produto depressa', nl: 'Grote onderneming: een product snel testen', ar: 'شركة كبيرة: اختبار منتج بسرعة', pl: 'Duża firma: szybko przetestuj produkt', tr: 'Büyük şirket: bir ürünü hızlıca test edin' },
    metaDescription: {
      fr: 'Grande entreprise qui veut tester un nouveau produit sans mobiliser l’IT ? Khufu livre un prototype en production en 7 jours, hors des cycles internes.',
      en: 'A large company wanting to test a new product without tying up IT? Khufu ships a production prototype in 7 days, outside internal cycles.',
      es: '¿Una gran empresa que quiere probar un producto sin movilizar a TI? Khufu entrega un prototipo en producción en 7 días, fuera de los ciclos internos.',
      de: 'Ein Großunternehmen, das ein neues Produkt testen will, ohne die IT zu binden? Khufu liefert in 7 Tagen einen Prototyp in Produktion, außerhalb interner Zyklen.',
      it: 'Una grande impresa che vuole testare un nuovo prodotto senza impegnare l’IT? Khufu consegna un prototipo in produzione in 7 giorni, fuori dai cicli interni.',
      pt: 'Uma grande empresa que quer testar um novo produto sem ocupar a TI? A Khufu entrega um protótipo em produção em 7 dias, fora dos ciclos internos.',
      nl: 'Een grote onderneming die een nieuw product wil testen zonder IT te belasten? Khufu levert in 7 dagen een prototype in productie, buiten de interne cycli.',
      ar: 'شركة كبيرة تريد اختبار منتج جديد دون شغل قسم IT؟ تُسلّم Khufu نموذجًا أوليًا في الإنتاج خلال 7 أيام، خارج الدورات الداخلية.',
      pl: 'Duża firma, która chce przetestować nowy produkt bez angażowania IT? Khufu dostarcza prototyp na produkcji w 7 dni, poza cyklami wewnętrznymi.',
      tr: 'BT’yi meşgul etmeden yeni bir ürün test etmek isteyen büyük bir şirket mi? Khufu, iç döngülerin dışında 7 günde üretimde bir prototip teslim eder.',
    },
    persona: { fr: 'Grande entreprise', en: 'Enterprise', es: 'Gran empresa', de: 'Großunternehmen', it: 'Grande impresa', pt: 'Grande empresa', nl: 'Grote onderneming', ar: 'شركة كبيرة', pl: 'Duża firma', tr: 'Büyük şirket' },
    title: { fr: 'Tester un produit, hors des cycles internes', en: 'Test a product, outside internal cycles', es: 'Probar un producto, fuera de los ciclos internos', de: 'Ein Produkt testen, außerhalb interner Zyklen', it: 'Testare un prodotto, fuori dai cicli interni', pt: 'Testar um produto, fora dos ciclos internos', nl: 'Een product testen, buiten de interne cycli', ar: 'اختبار منتج، خارج الدورات الداخلية', pl: 'Przetestuj produkt, poza cyklami wewnętrznymi', tr: 'Bir ürünü iç döngülerin dışında test edin' },
    intro: {
      fr: 'Les cycles internes d’une grande entreprise sont longs et l’IT est souvent saturée. Khufu agit comme une cellule d’innovation externe : on livre un produit ou un prototype en production en 7 jours, pour valider une idée sans mobiliser vos équipes.',
      en: 'Internal cycles at a large company are slow and IT is often overloaded. Khufu acts as an external innovation unit: we ship a product or prototype to production in 7 days, to validate an idea without tying up your teams.',
      es: 'Los ciclos internos de una gran empresa son lentos y TI suele estar saturada. Khufu actúa como una célula de innovación externa: entregamos un producto o prototipo en producción en 7 días, para validar una idea sin movilizar a tus equipos.',
      de: 'Die internen Zyklen eines Großunternehmens sind lang und die IT ist oft überlastet. Khufu agiert als externe Innovationseinheit: Wir bringen ein Produkt oder einen Prototyp in 7 Tagen in Produktion, um eine Idee zu validieren, ohne Ihre Teams zu binden.',
      it: 'I cicli interni di una grande impresa sono lunghi e l’IT è spesso satura. Khufu agisce come un’unità di innovazione esterna: mettiamo un prodotto o un prototipo in produzione in 7 giorni, per validare un’idea senza impegnare i tuoi team.',
      pt: 'Os ciclos internos de uma grande empresa são longos e a TI está muitas vezes saturada. A Khufu funciona como uma célula de inovação externa: pomos um produto ou protótipo em produção em 7 dias, para validar uma ideia sem ocupar as suas equipas.',
      nl: 'De interne cycli van een grote onderneming zijn lang en IT is vaak overbelast. Khufu fungeert als een externe innovatie-eenheid: we zetten een product of prototype in 7 dagen in productie, om een idee te valideren zonder je teams te belasten.',
      ar: 'الدورات الداخلية للشركة الكبيرة طويلة، وقسم IT غالبًا مثقل. تعمل Khufu كوحدة ابتكار خارجية: نضع منتجًا أو نموذجًا أوليًا في الإنتاج خلال 7 أيام، للتحقّق من فكرة دون شغل فرقك.',
      pl: 'Cykle wewnętrzne dużej firmy są długie, a IT często przeciążone. Khufu działa jak zewnętrzna komórka innowacji: wdrażamy produkt lub prototyp na produkcję w 7 dni, aby zweryfikować pomysł bez angażowania Twoich zespołów.',
      tr: 'Büyük bir şirketin iç döngüleri uzundur ve BT genelde aşırı yüklüdür. Khufu bir dış inovasyon birimi gibi hareket eder: ekiplerinizi meşgul etmeden bir fikri doğrulamak için 7 günde bir ürünü veya prototipi üretime alırız.',
    },
    problems: [
      { fr: 'Cycles internes longs, IT saturée', en: 'Slow internal cycles, overloaded IT', es: 'Ciclos internos lentos, TI saturada', de: 'Lange interne Zyklen, überlastete IT', it: 'Cicli interni lunghi, IT satura', pt: 'Ciclos internos longos, TI saturada', nl: 'Lange interne cycli, overbelaste IT', ar: 'دورات داخلية طويلة، وIT مثقل', pl: 'Długie cykle wewnętrzne, przeciążone IT', tr: 'Uzun iç döngüler, aşırı yüklü BT' },
      { fr: 'Difficile de tester une idée rapidement', en: 'Hard to test an idea quickly', es: 'Difícil probar una idea rápido', de: 'Schwer, eine Idee schnell zu testen', it: 'Difficile testare un’idea rapidamente', pt: 'Difícil testar uma ideia rapidamente', nl: 'Moeilijk om een idee snel te testen', ar: 'من الصعب اختبار فكرة بسرعة', pl: 'Trudno szybko przetestować pomysł', tr: 'Bir fikri hızlıca test etmek zor' },
      { fr: 'Coûts et lourdeur des grands projets', en: 'Cost and weight of big projects', es: 'Coste y pesadez de los grandes proyectos', de: 'Kosten und Schwerfälligkeit großer Projekte', it: 'Costi e pesantezza dei grandi progetti', pt: 'Custo e peso dos grandes projetos', nl: 'Kosten en logheid van grote projecten', ar: 'تكاليف المشاريع الكبيرة وثقلها', pl: 'Koszty i ociężałość dużych projektów', tr: 'Büyük projelerin maliyeti ve hantallığı' },
    ],
    approach: {
      fr: 'On travaille comme une équipe produit externe, agile et cadrée : périmètre défini, livraison en 7 jours, puis passage de relais à vos équipes ou maintenance par Khufu.',
      en: 'We work as an external product team, agile and scoped: defined scope, delivery in 7 days, then handover to your teams or maintenance by Khufu.',
      es: 'Trabajamos como un equipo de producto externo, ágil y acotado: alcance definido, entrega en 7 días, y luego traspaso a tus equipos o mantenimiento por Khufu.',
      de: 'Wir arbeiten als externes Produktteam, agil und klar umrissen: definierter Umfang, Lieferung in 7 Tagen, dann Übergabe an Ihre Teams oder Wartung durch Khufu.',
      it: 'Lavoriamo come un team di prodotto esterno, agile e delimitato: perimetro definito, consegna in 7 giorni, poi passaggio di consegne ai tuoi team o manutenzione da parte di Khufu.',
      pt: 'Trabalhamos como uma equipa de produto externa, ágil e delimitada: âmbito definido, entrega em 7 dias, depois transferência para as suas equipas ou manutenção pela Khufu.',
      nl: 'We werken als een extern productteam, agile en afgebakend: gedefinieerde scope, levering in 7 dagen, daarna overdracht aan je teams of onderhoud door Khufu.',
      ar: 'نعمل كفريق منتج خارجي، رشيق ومحدّد النطاق: نطاق معرّف، تسليم خلال 7 أيام، ثم تسليم لفرقك أو صيانة من Khufu.',
      pl: 'Pracujemy jak zewnętrzny zespół produktowy, zwinny i o określonym zakresie: zdefiniowany zakres, dostawa w 7 dni, potem przekazanie Twoim zespołom lub utrzymanie przez Khufu.',
      tr: 'Harici bir ürün ekibi gibi çalışırız, çevik ve kapsamı belirlenmiş: tanımlı kapsam, 7 günde teslim, ardından ekiplerinize devir veya Khufu tarafından bakım.',
    },
    outcomes: [
      { fr: 'Un prototype ou produit en production en 7 jours', en: 'A prototype or product in production in 7 days', es: 'Un prototipo o producto en producción en 7 días', de: 'Ein Prototyp oder Produkt in Produktion in 7 Tagen', it: 'Un prototipo o prodotto in produzione in 7 giorni', pt: 'Um protótipo ou produto em produção em 7 dias', nl: 'Een prototype of product in productie in 7 dagen', ar: 'نموذج أولي أو منتج في الإنتاج خلال 7 أيام', pl: 'Prototyp lub produkt na produkcji w 7 dni', tr: '7 günde üretimde bir prototip veya ürün' },
      { fr: 'Une idée validée sans mobiliser l’IT', en: 'An idea validated without tying up IT', es: 'Una idea validada sin movilizar a TI', de: 'Eine validierte Idee, ohne die IT zu binden', it: 'Un’idea validata senza impegnare l’IT', pt: 'Uma ideia validada sem ocupar a TI', nl: 'Een gevalideerd idee zonder IT te belasten', ar: 'فكرة تم التحقّق منها دون شغل قسم IT', pl: 'Pomysł zweryfikowany bez angażowania IT', tr: 'BT’yi meşgul etmeden doğrulanmış bir fikir' },
      { fr: 'Un passage de relais propre', en: 'A clean handover', es: 'Un traspaso limpio', de: 'Eine saubere Übergabe', it: 'Un passaggio di consegne pulito', pt: 'Uma transferência limpa', nl: 'Een schone overdracht', ar: 'تسليم نظيف', pl: 'Czyste przekazanie', tr: 'Temiz bir devir' },
    ],
    cta: 'sprint',
  },
  {
    slug: 'combien-coute-un-saas',
    metaTitle: { fr: 'Combien coûte un SaaS en 2026 ?', en: 'How much does a SaaS cost in 2026?', es: '¿Cuánto cuesta un SaaS en 2026?', de: 'Was kostet ein SaaS im Jahr 2026?', it: 'Quanto costa un SaaS nel 2026?', pt: 'Quanto custa um SaaS em 2026?', nl: 'Wat kost een SaaS in 2026?', ar: 'كم يكلّف SaaS في 2026؟', pl: 'Ile kosztuje SaaS w 2026?', tr: '2026’da bir SaaS ne kadara mal olur?' },
    metaDescription: {
      fr: 'Combien coûte le développement d’un SaaS ? Les fourchettes du marché (freelance, agence, no-code) et l’offre à prix fixe de Khufu : 15 000 € pour une V1 en 7 jours.',
      en: 'How much does building a SaaS cost? Market ranges (freelance, agency, no-code) and Khufu’s fixed price: €15,000 for a V1 in 7 days.',
      es: '¿Cuánto cuesta desarrollar un SaaS? Rangos de mercado (freelance, agencia, no-code) y el precio fijo de Khufu: 15 000 € por una V1 en 7 días.',
      de: 'Was kostet die Entwicklung eines SaaS? Marktspannen (Freelance, Agentur, no-code) und der Festpreis von Khufu: 15 000 € für eine V1 in 7 Tagen.',
      it: 'Quanto costa sviluppare un SaaS? Le fasce di mercato (freelance, agenzia, no-code) e il prezzo fisso di Khufu: 15 000 € per una V1 in 7 giorni.',
      pt: 'Quanto custa desenvolver um SaaS? As faixas de mercado (freelancer, agência, no-code) e o preço fixo da Khufu: 15 000 € por uma V1 em 7 dias.',
      nl: 'Wat kost het bouwen van een SaaS? Marktbandbreedtes (freelance, bureau, no-code) en de vaste prijs van Khufu: 15 000 € voor een V1 in 7 dagen.',
      ar: 'كم يكلّف تطوير SaaS؟ نطاقات السوق (مستقل، وكالة، no-code) وسعر Khufu الثابت: 15 000 € لنسخة V1 خلال 7 أيام.',
      pl: 'Ile kosztuje stworzenie SaaS? Przedziały rynkowe (freelancer, agencja, no-code) i stała cena Khufu: 15 000 € za V1 w 7 dni.',
      tr: 'Bir SaaS geliştirmek ne kadara mal olur? Piyasa aralıkları (freelancer, ajans, no-code) ve Khufu’nun sabit fiyatı: 7 günde bir V1 için 15 000 €.',
    },
    persona: { fr: 'Coûts & budget', en: 'Costs & budget', es: 'Costes y presupuesto', de: 'Kosten & Budget', it: 'Costi e budget', pt: 'Custos e orçamento', nl: 'Kosten & budget', ar: 'التكاليف والميزانية', pl: 'Koszty i budżet', tr: 'Maliyet ve bütçe' },
    title: { fr: 'Combien coûte un SaaS ?', en: 'How much does a SaaS cost?', es: '¿Cuánto cuesta un SaaS?', de: 'Was kostet ein SaaS?', it: 'Quanto costa un SaaS?', pt: 'Quanto custa um SaaS?', nl: 'Wat kost een SaaS?', ar: 'كم يكلّف SaaS؟', pl: 'Ile kosztuje SaaS?', tr: 'Bir SaaS ne kadara mal olur?' },
    intro: {
      fr: 'Le coût d’un SaaS varie énormément : de quelques milliers d’euros en no-code à 40 000 € et plus en agence classique, sans compter les délais. Khufu propose un repère simple : une V1 de SaaS en production en 7 jours, pour un prix fixe de 15 000 €.',
      en: 'The cost of a SaaS varies wildly: from a few thousand euros in no-code to €40,000+ with a classic agency, timelines aside. Khufu offers a simple benchmark: a production SaaS V1 in 7 days, for a fixed €15,000.',
      es: 'El coste de un SaaS varía muchísimo: desde unos pocos miles de euros en no-code hasta 40 000 € o más con una agencia clásica, sin contar los plazos. Khufu ofrece una referencia simple: una V1 de SaaS en producción en 7 días, por un precio fijo de 15 000 €.',
      de: 'Die Kosten eines SaaS schwanken enorm: von ein paar tausend Euro mit no-code bis 40 000 € und mehr bei einer klassischen Agentur, von den Fristen ganz zu schweigen. Khufu bietet einen einfachen Richtwert: eine SaaS-V1 in Produktion in 7 Tagen, zum Festpreis von 15 000 €.',
      it: 'Il costo di un SaaS varia enormemente: da qualche migliaio di euro con il no-code a 40 000 € e oltre con un’agenzia classica, senza contare i tempi. Khufu offre un riferimento semplice: una V1 di SaaS in produzione in 7 giorni, a un prezzo fisso di 15 000 €.',
      pt: 'O custo de um SaaS varia imenso: de alguns milhares de euros em no-code a 40 000 € ou mais numa agência clássica, sem contar os prazos. A Khufu oferece uma referência simples: uma V1 de SaaS em produção em 7 dias, por um preço fixo de 15 000 €.',
      nl: 'De kosten van een SaaS lopen enorm uiteen: van een paar duizend euro met no-code tot 40 000 € en meer bij een klassiek bureau, doorlooptijden nog daargelaten. Khufu biedt een simpele richtprijs: een SaaS-V1 in productie in 7 dagen, voor een vaste 15 000 €.',
      ar: 'تتفاوت تكلفة SaaS بشكل هائل: من بضعة آلاف من اليوروهات مع no-code إلى 40 000 € وأكثر مع وكالة تقليدية، دون احتساب المُدد. تقدّم Khufu مرجعًا بسيطًا: نسخة V1 من SaaS في الإنتاج خلال 7 أيام، بسعر ثابت قدره 15 000 €.',
      pl: 'Koszt SaaS jest bardzo zróżnicowany: od kilku tysięcy euro w no-code do 40 000 € i więcej w klasycznej agencji, nie licząc terminów. Khufu oferuje prosty punkt odniesienia: V1 SaaS na produkcji w 7 dni, za stałą cenę 15 000 €.',
      tr: 'Bir SaaS’ın maliyeti çok değişkendir: no-code ile birkaç bin avrodan klasik bir ajansta 40 000 € ve üzerine kadar, süreler bir yana. Khufu basit bir referans sunar: 7 günde üretimde bir SaaS V1, 15 000 € sabit fiyata.',
    },
    problems: [
      { fr: 'Des devis d’agence flous et élevés (40k+)', en: 'Vague, high agency quotes (€40k+)', es: 'Presupuestos de agencia vagos y altos (40k+)', de: 'Vage, hohe Agentur-Angebote (40k+)', it: 'Preventivi d’agenzia vaghi ed elevati (40k+)', pt: 'Orçamentos de agência vagos e elevados (40k+)', nl: 'Vage, hoge bureau-offertes (40k+)', ar: 'عروض وكالات غامضة ومرتفعة (40k+)', pl: 'Niejasne, wysokie wyceny agencji (40k+)', tr: 'Belirsiz, yüksek ajans teklifleri (40k+)' },
      { fr: 'Le no-code semble pas cher mais plafonne', en: 'No-code looks cheap but caps out', es: 'El no-code parece barato pero se estanca', de: 'No-code wirkt günstig, stößt aber an Grenzen', it: 'Il no-code sembra economico ma si blocca', pt: 'O no-code parece barato mas estagna', nl: 'No-code lijkt goedkoop maar loopt vast', ar: 'الـ no-code يبدو رخيصًا لكنه يبلغ سقفه', pl: 'No-code wygląda tanio, ale osiąga sufit', tr: 'No-code ucuz görünür ama tavana ulaşır' },
      { fr: 'Difficile d’anticiper le budget total', en: 'Hard to anticipate the total budget', es: 'Difícil anticipar el presupuesto total', de: 'Schwer, das Gesamtbudget vorherzusehen', it: 'Difficile prevedere il budget totale', pt: 'Difícil antecipar o orçamento total', nl: 'Moeilijk om het totale budget in te schatten', ar: 'من الصعب توقّع الميزانية الإجمالية', pl: 'Trudno przewidzieć całkowity budżet', tr: 'Toplam bütçeyi öngörmek zor' },
    ],
    approach: {
      fr: 'Un prix fixe, connu à l’avance : 15 000 € pour concevoir, développer et mettre en production votre SaaS en 7 jours. Pas de dépassement, pas de surprise.',
      en: 'A fixed price, known upfront: €15,000 to design, build and ship your SaaS in 7 days. No overruns, no surprises.',
      es: 'Un precio fijo, conocido de antemano: 15 000 € para diseñar, desarrollar y poner en producción tu SaaS en 7 días. Sin sobrecostes, sin sorpresas.',
      de: 'Ein Festpreis, vorab bekannt: 15 000 €, um Ihr SaaS in 7 Tagen zu konzipieren, zu entwickeln und in Produktion zu bringen. Keine Überschreitungen, keine Überraschungen.',
      it: 'Un prezzo fisso, noto in anticipo: 15 000 € per progettare, sviluppare e mettere in produzione il tuo SaaS in 7 giorni. Nessuno sforamento, nessuna sorpresa.',
      pt: 'Um preço fixo, conhecido à partida: 15 000 € para conceber, desenvolver e pôr em produção o seu SaaS em 7 dias. Sem derrapagens, sem surpresas.',
      nl: 'Een vaste prijs, vooraf bekend: 15 000 € om je SaaS in 7 dagen te ontwerpen, bouwen en in productie te zetten. Geen overschrijdingen, geen verrassingen.',
      ar: 'سعر ثابت معروف مسبقًا: 15 000 € لتصميم وتطوير ووضع منتجك SaaS في الإنتاج خلال 7 أيام. لا تجاوزات ولا مفاجآت.',
      pl: 'Stała cena, znana z góry: 15 000 € za zaprojektowanie, zbudowanie i wdrożenie Twojego SaaS na produkcję w 7 dni. Bez przekroczeń, bez niespodzianek.',
      tr: 'Önceden bilinen sabit bir fiyat: SaaS’ınızı 7 günde tasarlamak, geliştirmek ve üretime almak için 15 000 €. Bütçe aşımı yok, sürpriz yok.',
    },
    outcomes: [
      { fr: 'Un budget clair : 15 000 €', en: 'A clear budget: €15,000', es: 'Un presupuesto claro: 15 000 €', de: 'Ein klares Budget: 15 000 €', it: 'Un budget chiaro: 15 000 €', pt: 'Um orçamento claro: 15 000 €', nl: 'Een helder budget: 15 000 €', ar: 'ميزانية واضحة: 15 000 €', pl: 'Jasny budżet: 15 000 €', tr: 'Net bir bütçe: 15 000 €' },
      { fr: 'Un SaaS en production en 7 jours', en: 'A production SaaS in 7 days', es: 'Un SaaS en producción en 7 días', de: 'Ein SaaS in Produktion in 7 Tagen', it: 'Un SaaS in produzione in 7 giorni', pt: 'Um SaaS em produção em 7 dias', nl: 'Een SaaS in productie in 7 dagen', ar: 'SaaS في الإنتاج خلال 7 أيام', pl: 'SaaS na produkcji w 7 dni', tr: '7 günde üretimde bir SaaS' },
      { fr: 'Code à vous, prêt à scaler', en: 'Code yours, ready to scale', es: 'Código tuyo, listo para escalar', de: 'Code Ihrer, bereit zu skalieren', it: 'Codice tuo, pronto a scalare', pt: 'Código seu, pronto a escalar', nl: 'Code van jou, klaar om te schalen', ar: 'الكود ملكك، جاهز للتوسّع', pl: 'Kod Twój, gotowy do skalowania', tr: 'Kod sizin, ölçeklenmeye hazır' },
    ],
    cta: 'sprint',
  },
  {
    slug: 'combien-coute-une-app-mobile',
    metaTitle: { fr: 'Combien coûte une app mobile ?', en: 'How much does a mobile app cost?', es: '¿Cuánto cuesta una app móvil?', de: 'Was kostet eine Mobile-App?', it: 'Quanto costa un’app mobile?', pt: 'Quanto custa uma app móvel?', nl: 'Wat kost een mobiele app?', ar: 'كم يكلّف تطبيق محمول؟', pl: 'Ile kosztuje aplikacja mobilna?', tr: 'Bir mobil uygulama ne kadara mal olur?' },
    metaDescription: {
      fr: 'Combien coûte le développement d’une app mobile iOS et Android ? Les fourchettes du marché et l’offre de Khufu : 15 000 € pour une app prête pour les stores en 7 jours.',
      en: 'How much does building an iOS and Android mobile app cost? Market ranges and Khufu’s offer: €15,000 for a store-ready app in 7 days.',
      es: '¿Cuánto cuesta desarrollar una app móvil iOS y Android? Rangos de mercado y la oferta de Khufu: 15 000 € por una app lista para las stores en 7 días.',
      de: 'Was kostet die Entwicklung einer iOS- und Android-Mobile-App? Marktspannen und das Angebot von Khufu: 15 000 € für eine store-ready App in 7 Tagen.',
      it: 'Quanto costa sviluppare un’app mobile iOS e Android? Le fasce di mercato e l’offerta di Khufu: 15 000 € per un’app pronta per gli store in 7 giorni.',
      pt: 'Quanto custa desenvolver uma app móvel iOS e Android? As faixas de mercado e a oferta da Khufu: 15 000 € por uma app pronta para as stores em 7 dias.',
      nl: 'Wat kost het bouwen van een iOS- en Android-app? Marktbandbreedtes en het aanbod van Khufu: 15 000 € voor een store-klare app in 7 dagen.',
      ar: 'كم يكلّف تطوير تطبيق محمول لـ iOS وAndroid؟ نطاقات السوق وعرض Khufu: 15 000 € لتطبيق جاهز للمتاجر خلال 7 أيام.',
      pl: 'Ile kosztuje stworzenie aplikacji mobilnej iOS i Android? Przedziały rynkowe i oferta Khufu: 15 000 € za aplikację gotową do sklepów w 7 dni.',
      tr: 'Bir iOS ve Android mobil uygulaması geliştirmek ne kadara mal olur? Piyasa aralıkları ve Khufu’nun teklifi: 7 günde mağazaya hazır bir uygulama için 15 000 €.',
    },
    persona: { fr: 'Coûts & budget', en: 'Costs & budget', es: 'Costes y presupuesto', de: 'Kosten & Budget', it: 'Costi e budget', pt: 'Custos e orçamento', nl: 'Kosten & budget', ar: 'التكاليف والميزانية', pl: 'Koszty i budżet', tr: 'Maliyet ve bütçe' },
    title: { fr: 'Combien coûte une app mobile ?', en: 'How much does a mobile app cost?', es: '¿Cuánto cuesta una app móvil?', de: 'Was kostet eine Mobile-App?', it: 'Quanto costa un’app mobile?', pt: 'Quanto custa uma app móvel?', nl: 'Wat kost een mobiele app?', ar: 'كم يكلّف تطبيق محمول؟', pl: 'Ile kosztuje aplikacja mobilna?', tr: 'Bir mobil uygulama ne kadara mal olur?' },
    intro: {
      fr: 'Développer une app iOS et Android coûte souvent cher, surtout avec deux équipes ou deux bases de code. Khufu utilise une seule base React Native / Expo et livre une app prête pour les stores en 7 jours, pour un prix fixe de 15 000 €.',
      en: 'Building an iOS and Android app is often expensive, especially with two teams or two codebases. Khufu uses a single React Native / Expo codebase and delivers a store-ready app in 7 days, for a fixed €15,000.',
      es: 'Desarrollar una app iOS y Android suele ser caro, sobre todo con dos equipos o dos bases de código. Khufu usa una sola base React Native / Expo y entrega una app lista para las stores en 7 días, por un precio fijo de 15 000 €.',
      de: 'Eine iOS- und Android-App zu entwickeln ist oft teuer, besonders mit zwei Teams oder zwei Codebasen. Khufu nutzt eine einzige React Native / Expo-Codebasis und liefert eine store-ready App in 7 Tagen, zum Festpreis von 15 000 €.',
      it: 'Sviluppare un’app iOS e Android è spesso costoso, soprattutto con due team o due codebase. Khufu usa un’unica codebase React Native / Expo e consegna un’app pronta per gli store in 7 giorni, a un prezzo fisso di 15 000 €.',
      pt: 'Desenvolver uma app iOS e Android é muitas vezes caro, sobretudo com duas equipas ou duas codebases. A Khufu usa uma única codebase React Native / Expo e entrega uma app pronta para as stores em 7 dias, por um preço fixo de 15 000 €.',
      nl: 'Een iOS- en Android-app bouwen is vaak duur, vooral met twee teams of twee codebases. Khufu gebruikt één React Native / Expo-codebase en levert een store-klare app in 7 dagen, voor een vaste 15 000 €.',
      ar: 'تطوير تطبيق لـ iOS وAndroid مكلف غالبًا، خاصةً مع فريقين أو قاعدتَي كود. تستخدم Khufu قاعدة كود واحدة React Native / Expo وتُسلّم تطبيقًا جاهزًا للمتاجر خلال 7 أيام، بسعر ثابت قدره 15 000 €.',
      pl: 'Tworzenie aplikacji iOS i Android jest często drogie, zwłaszcza z dwoma zespołami lub dwiema bazami kodu. Khufu używa jednej bazy kodu React Native / Expo i dostarcza aplikację gotową do sklepów w 7 dni, za stałą cenę 15 000 €.',
      tr: 'Bir iOS ve Android uygulaması geliştirmek, özellikle iki ekip veya iki kod tabanıyla, genelde pahalıdır. Khufu tek bir React Native / Expo kod tabanı kullanır ve mağazaya hazır bir uygulamayı 7 günde, 15 000 € sabit fiyata teslim eder.',
    },
    problems: [
      { fr: 'Deux plateformes = coûts qui doublent', en: 'Two platforms = doubling costs', es: 'Dos plataformas = costes que se duplican', de: 'Zwei Plattformen = doppelte Kosten', it: 'Due piattaforme = costi raddoppiati', pt: 'Duas plataformas = custos a dobrar', nl: 'Twee platforms = dubbele kosten', ar: 'منصّتان = تكاليف مضاعفة', pl: 'Dwie platformy = podwojone koszty', tr: 'İki platform = ikiye katlanan maliyet' },
      { fr: 'Devis élevés et délais de plusieurs mois', en: 'High quotes and multi-month timelines', es: 'Presupuestos altos y plazos de varios meses', de: 'Hohe Angebote und mehrmonatige Fristen', it: 'Preventivi elevati e tempi di più mesi', pt: 'Orçamentos elevados e prazos de vários meses', nl: 'Hoge offertes en doorlooptijden van maanden', ar: 'عروض مرتفعة ومُدد تمتدّ لأشهر', pl: 'Wysokie wyceny i wielomiesięczne terminy', tr: 'Yüksek teklifler ve aylarca süren teslim süreleri' },
      { fr: 'Budget difficile à cadrer', en: 'Budget hard to pin down', es: 'Presupuesto difícil de acotar', de: 'Budget schwer festzulegen', it: 'Budget difficile da definire', pt: 'Orçamento difícil de definir', nl: 'Budget moeilijk vast te leggen', ar: 'ميزانية يصعب تحديدها', pl: 'Trudny do określenia budżet', tr: 'Belirlenmesi zor bir bütçe' },
    ],
    approach: {
      fr: 'Une seule base de code pour iOS et Android, un prix fixe de 15 000 €, et une app prête à publier sur l’App Store et Google Play en 7 jours (hors délai de validation des stores).',
      en: 'A single codebase for iOS and Android, a fixed €15,000, and an app ready to publish on the App Store and Google Play in 7 days (excluding store review time).',
      es: 'Una sola base de código para iOS y Android, un precio fijo de 15 000 €, y una app lista para publicar en la App Store y Google Play en 7 días (sin contar la revisión de las stores).',
      de: 'Eine einzige Codebasis für iOS und Android, ein Festpreis von 15 000 € und eine App, die in 7 Tagen bereit zur Veröffentlichung im App Store und bei Google Play ist (ohne Prüfzeit der Stores).',
      it: 'Un’unica codebase per iOS e Android, un prezzo fisso di 15 000 € e un’app pronta a pubblicare su App Store e Google Play in 7 giorni (esclusi i tempi di revisione degli store).',
      pt: 'Uma única codebase para iOS e Android, um preço fixo de 15 000 € e uma app pronta a publicar na App Store e Google Play em 7 dias (sem contar o tempo de revisão das stores).',
      nl: 'Eén codebase voor iOS en Android, een vaste prijs van 15 000 € en een app die in 7 dagen klaar is om te publiceren in de App Store en Google Play (exclusief reviewtijd van de stores).',
      ar: 'قاعدة كود واحدة لـ iOS وAndroid، وسعر ثابت قدره 15 000 €، وتطبيق جاهز للنشر على App Store وGoogle Play خلال 7 أيام (باستثناء وقت مراجعة المتاجر).',
      pl: 'Jedna baza kodu dla iOS i Android, stała cena 15 000 € i aplikacja gotowa do publikacji w App Store i Google Play w 7 dni (bez czasu weryfikacji sklepów).',
      tr: 'iOS ve Android için tek bir kod tabanı, 15 000 € sabit fiyat ve 7 günde App Store ile Google Play’de yayına hazır bir uygulama (mağaza inceleme süresi hariç).',
    },
    outcomes: [
      { fr: 'Un budget clair : 15 000 €', en: 'A clear budget: €15,000', es: 'Un presupuesto claro: 15 000 €', de: 'Ein klares Budget: 15 000 €', it: 'Un budget chiaro: 15 000 €', pt: 'Um orçamento claro: 15 000 €', nl: 'Een helder budget: 15 000 €', ar: 'ميزانية واضحة: 15 000 €', pl: 'Jasny budżet: 15 000 €', tr: 'Net bir bütçe: 15 000 €' },
      { fr: 'iOS + Android en une seule base', en: 'iOS + Android in one codebase', es: 'iOS + Android en una sola base', de: 'iOS + Android in einer Codebasis', it: 'iOS + Android in un’unica codebase', pt: 'iOS + Android numa só codebase', nl: 'iOS + Android in één codebase', ar: 'iOS + Android في قاعدة كود واحدة', pl: 'iOS + Android w jednej bazie kodu', tr: 'Tek kod tabanında iOS + Android' },
      { fr: 'Prête pour les stores en 7 jours', en: 'Store-ready in 7 days', es: 'Lista para las stores en 7 días', de: 'Store-ready in 7 Tagen', it: 'Pronta per gli store in 7 giorni', pt: 'Pronta para as stores em 7 dias', nl: 'Store-klaar in 7 dagen', ar: 'جاهزة للمتاجر خلال 7 أيام', pl: 'Gotowa do sklepów w 7 dni', tr: '7 günde mağazaya hazır' },
    ],
    cta: 'sprint',
  },
]

export const useCases = fillLocaleDeep(useCasesData) as unknown as UseCase[]

export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug)
export const getUseCase = (slug: string) => useCases.find((u) => u.slug === slug)
