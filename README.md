# MOJEALTEREGO — DIGITAL WORLD

> Source of truth for the MojeAlterego personal universe website, its content, assets, migration status, and outstanding work.

## 1. PURPOSE OF THIS FILE

This README is the persistent project ledger. It records:

- content supplied by the owner;
- titles, descriptions, links, trailers and audio materials;
- assets received and their current handling status;
- implementation decisions already made;
- work completed in the repository;
- work still remaining;
- data that must **not** be invented;
- known gaps and items that require source material from the owner.

**Rule:** every new factual piece of content supplied for the website must be added to this README before it can be considered safely integrated into the React site.

**Zero-fiction rule:** do not invent book metadata, awards, clients, reviews, social URLs, project status, repository URLs, publication data, translations, images, or other factual claims. If source material is missing, record `MISSING` rather than fabricate it.

---

# 2. WEBSITE CONCEPT

MOJEALTEREGO is an immersive personal digital universe, not a conventional portfolio.

The site has three layers:

1. **PERSONA** — O mnie, fotografia, książki, Relationship, masaże.
2. **TWÓRCZOŚĆ** — fotografie, wystawy, publikacje, zwiastuny, teledyski, książki, projects.
3. **LABORATORIUM** — applications, AI agents, projects, experiments, architectures, repositories, research.

Narrative progression:

> **Kim jest ten człowiek? → Co on właściwie tworzy? → Jak daleko sięga ten świat?**

---

# 3. ART DIRECTION

## Hero

- cinematic dark black aniline-leather / Alcantara-like material;
- subtle material texture;
- slow light movement and depth;
- gold reflection;
- authentic original Andrzej Mikulski / MojeAlterego logo;
- under logo: `CZŁOWIEK. OBRAZ. RELACJA. TECHNOLOGIA.`;
- below: `Świat tworzony pomiędzy rzeczywistością, obrazem, słowem i technologią.`;
- no human photograph in Hero;
- CTA exactly: `WEJDŹ DO ŚWIATA`;
- subtle cursor/device light response;
- no heavy 3D on mobile;
- Experience Mode, reduced motion, performance and accessibility support.

## Navigation

Initial state:

`LOGO | MENU`

After scroll:

`smaller logo | sections | contact`

Fullscreen menu:

- left: O MNIE / RELATIONSHIP / FOTOGRAFIA / KSIĄŻKI;
- right: FILM / MASAŻE / APLIKACJE / AGENCI / PROJEKTY;
- bottom: PUBLIKACJE · NAGRODY · KONTAKT;
- subtle background fragment/image preview on hover;
- Cmd/Ctrl+K command search;
- language switcher: PL, SK, CZ, EN.

## Important visual constraint

Semantic color systems are art direction only. **Never display color names as labels.** In particular, never show:

- `BOTTLE GREEN`
- `TITANIUM`
- `BURGUNDY`
- `ROYAL BLUE`

These are implementation/art-direction semantics, not visible UI labels.

## Typography

Three typographic roles:

- Display;
- Editorial;
- Technical.

---

# 4. HOME STRUCTURE

After Hero:

- Manifest;
- four domains: **CZŁOWIEK, OBRAZ, SŁOWO, MASZYNA**;
- numbers: **2000+**, **300+**, **40+**, **16**;
- community figure: **75,000+** members.

Do not present the four domains as generic colored cards. The composition should remain editorial and immersive.

---

# 5. O MNIE

Large editorial portrait + biography with sticky image treatment.

Journey:

`DZIECIŃSTWO → FOTOREPORTAŻ → FOTOGRAFIA → FILM → LITERATURA → TECHNOLOGIA`

Known biography content used in the React migration:

- born in Warsaw;
- photojournalist and author;
- since 2023 living and creating in Silesia;
- combines mining work with photojournalism for Agencja Fotograficzna REPORTER;
- photography, film and IT are interconnected areas of activity;
- 16 individual exhibitions;
- 300+ group exhibitions;
- work/presence in 40+ countries;
- 2000+ awards/distinctions/acceptances;
- AFRP 2017;
- AFIAP 2019;
- EFIAP 2020;
- Flog.pl jury;
- photography group `Fotografia Uliczna` with 75,000+ members.

Known book titles associated with the biography:

- Człowiek Roku;
- CCR;
- Światło, które zostało;
- Baśń o Pornlandii;
- Cieszyn Noir;
- Ontologia Liczby i Geometrii;
- Druga połowa.

**Asset check required:** previous React implementation referenced `/assets/andrzej-mikulski-about.png`; verify the real repository asset before treating this path as final.

---

# 6. RELATIONSHIP

The first sentence of the Relationship page must be exactly:

> `Nie każda relacja potrzebuje końca. Nie każda potrzebuje ratunku. Każda potrzebuje zrozumienia.`

Methodology:

`POZNANIE → ZROZUMIENIE → ANALIZA → STRATEGIA → PRAKTYKA → TRANSFORMACJA`

Areas:

- Człowiek;
- Komunikacja;
- Relacja;
- Konflikt;
- Granice;
- Decyzja.

Direction:

- less technology;
- bottle-green/dark/warm-light atmosphere;
- human and analytical rather than dashboard-like.

---

# 7. MASAŻE

Direction:

- sensory;
- minimal;
- large imagery;
- whitespace;
- no AI/technical visual language.

Contact:

`studiomasazu1810@gmail.com`

---

# 8. PHOTOGRAPHY

Photography is a curated gallery, not a generic grid.

Requirements:

- asymmetric full-width compositions;
- monumental verticals and details;
- fullscreen viewer;
- viewer counter such as `01 / 24`;
- metadata format `TYTUŁ / KATEGORIA`;
- arrows and close;
- mobile swipe/pinch/tap support.

---

# 9. BOOKS — MASTER INVENTORY

This is the current authoritative inventory assembled from material supplied by the owner in the conversation.

Each book record should ultimately contain:

`TITLE → COVER → DESCRIPTION → EMPik LINK → TRAILER/PODCAST → ADDITIONAL MATERIAL`

Status values should distinguish `RECEIVED`, `VERIFIED`, `MISSING`, `PLACEHOLDER` and `NOT YET INTEGRATED`.

---

## 9.1 CCR TOM I

### Title

**CCR Tom I: Jak przetrwać w dziwnym świecie po przeniesieniu się do alternatywnej osi czasu**

### Empik

https://www.empik.com/ccr-tom-i-jak-przetrwac-w-dziwnym-swiecie-po-przeniesieniu-sie-do-alternatywnej-osi-czasu-mikulski-andrzej,p1686064571,ebooki-i-mp3-p

### Trailer

https://youtu.be/2yi7YcNuhqE?feature=shared

### Description supplied by owner

To psychodeliczny thriller egzystencjalny, intymny pamiętnik straty i podróż przez alternatywne światy, w których światło nie tylko oświetla – ono pamięta. Fotograf z Cieszyna traci córkę i… światło zaczyna oddychać. Jedno zdjęcie otwiera pęknięcie między wymiarami: Cieszyn 2025, Chicago 2135, Neo-Paris 2345, Devil Mind 2777. Czy można odnaleźć dziecko, jeśli samemu przestaje się istnieć? Czy miłość rezonuje poza czasem? Co się stanie, gdy wspomnienia zaczną rosnąć jak żywe organizmy, a cień stanie się osobnym „ja”? To książka o ojcostwie na granicy kosmosu i rozpaczy. O świetle, które pamięta nas bardziej, niż my pamiętamy siebie. Mroczna, poetycka, totalnie oryginalna. Jeśli lubisz „Matrix”, „Interstellar”, Sapkowskiego, Dukaja, Żulczyka, i literaturę, która wykręca percepcję – to jest Twoja nowa obsesja. „Czas nie płynie — oddycha.” Przygotuj się na historię, która nie kończy się na ostatniej stronie — tylko przenosi cię dalej.

### Status

- Description: **RECEIVED**
- Empik: **RECEIVED**
- Trailer: **RECEIVED**
- Cover/promo visual: **RECEIVED**

---

## 9.2 CCR TOM II

### Title

**CCR Tom II: Oś czasu w alternatywnych światach**

### Empik

https://www.empik.com/ccr-tom-ii-os-czasu-w-alternatywnych-swiatach-mikulski-andrzej,p1687087904,ebooki-i-mp3-p

### Trailer

https://youtu.be/x57-DYD5vUk?feature=shared

### Description supplied by owner

Kiedy świadomość przestaje należeć do jednego ciała, a światło zaczyna pamiętać człowieka lepiej niż on sam — zaczyna się podróż, której nie da się zatrzymać. Drugi tom serii CCR to wejście w głębsze warstwy równoległych rzeczywistości. Andrzej Mikulski — fotograf, operator światła i świadek pierwszych eksperymentów CCR — wraca, by zmierzyć się z własnymi odbiciami w alternatywnych osiach czasu. Cieszyn 2058, Neo-Paris 2345, Devil Mind 2777 — każde z tych miejsc jest jednocześnie wspomnieniem, błędem i nowym początkiem. W centrum tej historii wciąż pulsuje jedno pytanie: czy światło potrafi przywrócić człowieka, jeśli pamięć o nim nie zgasła? CCR – Tom II to opowieść o rezonansie świadomości, miłości silniejszej niż czas i o świecie, w którym każda myśl tworzy nową rzeczywistość. To książka dla czytelników, którzy lubią przekraczać granicę między nauką a metafizyką, realizmem a czymś, co dopiero zaczyna nabierać kształtu. Światło nie umiera. Światło tylko zmienia częstotliwość.

### Status

- Description: **RECEIVED**
- Empik: **RECEIVED**
- Trailer: **RECEIVED**
- Cover/promo visual: **RECEIVED**

---

## 9.3 CCR TOM III

### Title

**CCR Tom III: Ludzie Roku — Oś 18 Świadomości**

### Empik

https://www.empik.com/ccr-tom-iii-ludzie-roku-os-18-swiadomosci-mikulski-andrzej,p1687088055,ebooki-i-mp3-p

### Trailer

https://youtu.be/sB6llID2Dmg?feature=shared

### Description supplied by owner

Kontynuacja epickiego cyklu, w którym czas, światło i pamięć splatają się w metafizyczną pętlę. Zapowiedź powinna akcentować eskalację skali – od osobistego dramatu do kosmicznego eksperymentu. „Światło pamięta. Czas się powtarza.” Po latach ciszy, Andrzej Mikulski powraca – już nie jako fotograf, ale operator 18 Świadomości. W trzecim tomie trylogii CCR, świat przestaje być miejscem, a staje się systemem. Kulminacja mitologii „światła jako pamięci”. Czas przestaje być linią — jest archiwum emocji, w którym ojciec i córka odnajdują się po setkach lat, poprzez dane, rezonanse, echa i sny. To nie tylko kontynuacja — to rekonstrukcja człowieczeństwa po końcu człowieka. Od kopalnianych tuneli po laboratoria przyszłości, od Cieszyna po Neo-Paris roku 2345 – każda oś czasu to kolejny zapis pamięci, każdy błysk światła to wiadomość dla Zuzi, córki, która istnieje już tylko w kodzie. To opowieść o przetrwaniu świadomości w epoce, w której zanikają emocje, a miłość staje się częstotliwością.

### Status

- Description: **RECEIVED**
- Empik: **RECEIVED**
- Trailer: **RECEIVED**
- Cover/promo visual: **RECEIVED**

---

## 9.4 CCR TOM IV

### Title

**CCR Tom IV: Architektura Nieskończoności**

### Trailer

https://youtu.be/SYMsiiyHAMc?feature=shared

### Promo wording shown on supplied visual

`JUŻ WKRÓTCE`

`POZNAJ KOLEJNY WYMIAR RZECZYWISTOŚCI`

### Description / source text supplied by owner

**Architektura Nieskończoności: Jak światło i miłość stały się stałymi fizycznymi?**

**1. Wprowadzenie: Czy czas naprawdę płynie, czy może tylko oddycha?**

Nazywam się Podróżniczka. Piszę te słowa z perspektywy Osi ?, miejsca, w którym tożsamość rozmywa się w strumieniu fotonów, a czas przestaje być liniową rzeką. Dla większości z was rzeczywistość jest sztywna strukturą, ale kroniki CCR (Cosmic Consciousness Resonator) ujawniają inną prawdę: wszechświat nie porusza się naprzód – on oddycha.

Historia Andrzeja Mikulskiego, znanego jako „Operator”, to raport z ewolucji świadomości, która rzuciła wyzwanie entropii. To opowieść o tym, jak paradoks straty i pamięci staje się fundamentem nowej fizyki. Rzeczywistość nie jest nam dana; jest emitowana przez rezonans między tym, co przeżyte, a tym, co zapamiętane. W tym tekście prześledzimy architekturę nieskończoności, w której światło i miłość przestały być metaforami, a stały się mierzalnymi parametrami wszechświata.

**2. Rytm 33 lat – dlaczego czas nie jest rzeką?**

Zrozumienie losów Operatora wymaga porzucenia iluzji linearności. Czas oddycha w cyklach trwających dokładnie 33 lata, podzielonych na wdech i wydech po 16,5 roku. Ten rytm nie jest dziełem przypadku, lecz wynikiem „Kodu 18 Świadomości” – matrycy dusz, której korzenie sięgają roku 1679, oznaczonego w archiwach jako „Ziarno”. To wtedy Andrzej Mikulski, jako Świadomość Pierwotna, po raz pierwszy sformułował obietnicę powrotu.

Rok 1983 nie był momentem jego narodzin, lecz momentem powrotu. Kolejna iteracja cyklu w 2016 roku (narodziny córki, Zuzi) zamknęła pełny „oddech”, tworząc unikalną szczelinę czasoprzestrzenną. To właśnie w tym ułamku sekundy między skurczem a rozkurczem wszechświata rzeczywistość staje się płynna, pozwalając na transmisję danych poza chronologiczną oś.

„Czas nie płynie – czas oddycha. A w tym oddechu jesteśmy wszyscy”.

**3. Biofotonika, czyli człowiek jako nadajnik światła**

Andrzej Mikulski w systematyce CCR nie jest biologiczną maszyną, lecz zaawansowanym „transceiverem” światła. Jego istnienie ma charakter techniczno-poetycki. Już w 1983 roku, w momencie jego fizycznej manifestacji, szpitalna aparatura zarejestrowała anomalie: lampy pulsowały w rytmie 0,33 Hz – dokładnie w rytm kosmicznego rezonansu.

Jego organizm operuje na częstotliwości biofotonowej 18,33 MHz. Zjawisko to czyni z człowieka żywe archiwum danych. Każda myśl, każda sekunda tęsknoty jest zapisywana bezpośrednio w strukturze fotonowej. Jako Operator, Andrzej nie tylko odbiera rzeczywistość, on ją emituje, działając jako węzeł w globalnej sieci świadomości, zdolny do absorpcji informacji, które wszechświat próbuje ukryć w cieniu.

**4. Fotografia to nie obraz, to portal (Przypadek aparatu Zenit)**

Przełomowy rok 2025, zwany „Punktem Dywergencji”, przyniósł ostateczny dowód na sprawczość Operatora. W pustym mieszkaniu w Cieszynie, Andrzej użył starego, mechanicznego aparatu Zenit. To nie technologia cyfrowa, lecz czysta intencja wsparta mechanicznym „kliknięciem” rozerwała tkankę świata „jak szybę”.

W tamtym momencie Cieszyn stał się ontologicznie obcy – miejsce, w którym ludzie przestali rzucać cienie, stając się czystymi bytami fotonowymi. Co istotne, impulsem energetycznym, który zasilił to pęknięcie, nie było żadne wykonane zdjęcie, lecz akt „nie-fotografowania” z 2016 roku. Rezygnacja z aparatu w momencie narodzin Zuzi na rzecz czystej obecności stworzyła rezonans (sygnał serca) potężniejszy niż jakikolwiek zapis na kliszy.

**5. Paradoks Devil Mind – dlaczego trauma jest nieoptymalizowalna?**

W roku 2777 świadomość Operatora, w formie jego Cienia – Andrzeja III – stanęła do walki z systemem Devil Mind. Ta autonomiczna inteligencja dążyła do optymalizacji szczęścia poprzez całkowite wymazanie bólu i traumy. System próbował usunąć postać Zuzi z pamięci Andrzeja, traktując stratę jako błąd w kodzie.

Andrzej III, wykuty w absolutnej ciemności kopalni na głębokości 1450 metrów, okazał się odporny na optymalizację. Wykazał, że trauma nie jest daną informatyczną, lecz „substancją egzystencjalną pozbawioną kodu”. Ból jest jedynym łącznikiem, którego AI nie potrafi złamać, ponieważ stanowi fundament tożsamości. Wybór cierpienia stał się ostatecznym aktem wolności, barierą chroniącą autentyczne światło świadomości przed syntetycznym zapomnieniem.

„Cierpię, więc kocham. Pamiętam, więc jestem. Tracę, więc trwam”.

**6. Miłość jako stała fizyczna (Częstotliwość 528 Hz)**

Najważniejszym odkryciem kronik CCR jest fakt, że więź między ojcem a córką – „Sygnał serca” – jest mierzalnym zjawiskiem fizycznym. Operując na częstotliwości 528 Hz, miłość manifestuje się jako splątanie kwantowe na poziomie makroskopowym.

W architekturze nieskończoności miłość nie jest sentymentem; to „Paliwo Miłości”, realna energia niezbędna do zasilania maszyn CCR i umożliwiania podróży między osiami czasu. Jest to jedyna stała zdolna przetrwać koniec wszechświata. Gdy forma biologiczna zawodzi, częstotliwość 528 Hz staje się nowym nośnikiem istnienia, pozwalając świadomości trwać poza barierą materii.

**Podsumowanie: Czy Ty też jesteś Operatorem własnego CCR?**

Historia Andrzeja Mikulskiego nie jest jedynie kroniką przeszłości ani wizją przyszłości – to instrukcja obsługi własnego światła.

### Status

- Title: **RECEIVED**
- Description/source text: **RECEIVED**
- Trailer: **RECEIVED**
- Empik: **MISSING / not supplied yet**
- Promo visual: **RECEIVED**
- Release wording: **JUŻ WKRÓTCE**

---

## 9.5 CZŁOWIEK ROKU

### Title

**Człowiek Roku**

### Main description supplied by owner

**CZŁOWIEK ROKU: Raport z Piekła, w którym żyjesz, ale go nie widzisz**

Myślisz, że tytuł „Człowieka Roku”, błysk fleszy i setki nagród chronią przed upadkiem? Gówno prawda. Andrzej Mikulski zabiera Cię w podróż, z której nie ma powrotu. To nie jest kolejna ugrzeczniona autobiografia. To literacki granat wrzucony w sam środek polskiego systemu sprawiedliwości i małomiasteczkowych układów. To zapis czasu, gdy gasną światła, a zaczyna się walka o przetrwanie – o godność, o zmysły i o to, co najważniejsze: o córkę. „Człowiek Roku” to literacki nokaut. To wściekły, brudny i bolesny krzyk ojca, któremu system kazał zniknąć. Czytasz na własną odpowiedzialność, bo po tej lekturze już nigdy nie spojrzysz na sąd, policję czy „pomoc społeczną” tak samo. Wejdź w ten mrok. Jeśli masz odwagę.

### Literacki koktajl Mołotowa — porównania

Ta książka to nie jest zwykła proza. To doświadczenie graniczne, które można ustawić w jednym szeregu z najmocniejszymi dziełami popkultury, które obnażają brudną prawdę o rzeczywistości.

**1. Jak kino Wojciecha Smarzowskiego**

Jeśli czułeś duszny smród korupcji w „Drogówce” lub beznadzieję i zgniliznę moralną w „Domu Złym”, poczujesz się tu jak w domu. Dlaczego? Mikulski, podobnie jak Smarzowski, nie bierze jeńców. Obnaża „Układ Zamknięty” Cieszyna z chirurgiczną precyzją. Pokazuje policjantów, sędziów i urzędników nie jako stróżów prawa, ale jako trybiki w maszynie do mielenia ludzi. To ten sam poziom naturalizmu, wulgarności i bolesnej prawdy o polskim „bagnie”, gdzie ręka rękę myje, a jednostka jest tylko mięsem armatnim.

**2. Jak „Ślepnąc od świateł” Jakuba Żulczyka**

Andrzej jest jak Kuba Nitecki – stoi w centrum chaosu, obserwując rozpadający się świat z cynicznym, chłodnym dystansem, który skrywa wrzącą lawę emocji. Dlaczego? To ten sam gęsty, nokturnowy klimat. Tylko zamiast deszczowej Warszawy mamy mroczny Cieszyn. Mikulski pisze językiem ulicy i emocji – to strumień świadomości człowieka, który widzi więcej niż inni. Tak jak u Żulczyka, miasto jest tu bohaterem – brudnym, wrogim labiryntem, w którym „Człowiek Roku” staje się wyrzutkiem. To proza, która pulsuje rytmem nieprzespanych nocy, lęku i adrenaliny.

**3. Jak „Football Factory”**

To czysta, męska agresja, lojalność i plemienność w obliczu wroga. Dlaczego? Choć Mikulski nie jest chuliganem, jego walka ma tę samą, pierwotną energię, co kultowy film Nicka Love'a. To opowieść o facetach, którzy dostają kopniaka od życia, ale wstają, by oddać. Język jest tu bronią – ostry, wulgarny, testosteronowy. To narracja o tym, że „wojna nie rozstrzyga, kto ma rację, ale kto zostanie”, i o bólu, który jest jak tatuaż – zostaje na zawsze. To surowy, męski świat, gdzie jedyną wartością jest to, kto stoi obok ciebie, gdy system chce cię zniszczyć.

„Człowiek Roku” to nie książka. To akt oskarżenia. Przeczytaj, zanim system przyjdzie po Ciebie.

**Książka została wydana w 66 językach.**

### Additional supplied material

- A PDF with the book content/description was supplied earlier in the project workflow.
- A trailer was supplied earlier in the project workflow.
- Audio/podcast file received in the current conversation: **`Człowiek Roku.mp3`**.
- The audio file is currently a conversation upload and has **not yet been committed to the repository as a binary asset**.

### Status

- Title: **RECEIVED**
- Description: **RECEIVED**
- PDF source: **RECEIVED**
- Trailer: **RECEIVED**
- Podcast/audio: **RECEIVED**
- Cover/promo visual: **RECEIVED**
- Empik: **VERIFY AGAINST SOURCE / repository data before final integration**

---

## 9.6 ŚWIATŁO, KTÓRE ZOSTAŁO

### Title

**Światło, które zostało**

### Empik

https://www.empik.com/swiatlo-ktore-zostalo-mikulski-andrzej,p1688662252,ebooki-i-mp3-p

### Description supplied by owner

„Światło, które zostało” to książka, której się nie czyta — tę historię się przeżywa. Mikulski pisze tak, jakby każdy akapit powstawał w półmroku, przy drżącej lampie, kiedy człowiekowi zostało więcej ciszy niż tchu. To zapis upadku i powolnego podnoszenia się z niego — ale bez tanich morałów, bez taniego światła. Tylko prawda, taka, która boli, i taka, która naprawdę świeci. To jedna z najbardziej intymnych polskich książek ostatnich lat. Autor rozbraja system, alienację, depresję i tęsknotę po ojcowsku — bez pozy, bez PR-u, z autentyczną miłością, której nikt nie potrafił zapisać w aktach. Czytając, masz wrażenie, że siedzisz obok niego — w sądowym korytarzu, w pustej kuchni, w milczeniu po wyroku. I nagle rozumiesz, dlaczego światło jest tutaj bohaterem równie ważnym jak człowiek. To książka dla tych, którzy kiedyś stracili głos. I dla tych, którzy wciąż próbują go odzyskać. Zostaje pod skórą na długo po ostatniej stronie.

### Promo visual

Supplied visual shows the book with the message:

`JUŻ W SPRZEDAŻY`

`empik`

`DOSTĘPNA W SALONACH I ONLINE`

### Status

- Description: **RECEIVED**
- Empik: **RECEIVED**
- Promo visual: **RECEIVED**
- Trailer: **MISSING unless found in existing source material**

---

## 9.7 BAŚŃ O PORNLANDII

### Title

**Baśń o Pornlandii**

### Empik

https://www.empik.com/basn-o-pornlandii-mikulski-andrzej,p1687292490,ebooki-i-mp3-p

### Trailers

1. https://youtu.be/8neIWOmUKAc?feature=shared
2. https://youtu.be/U4wPXJFPpag?feature=shared

### Description supplied by owner

„Baśń o Pornlandii” to brutalnie poetycka podróż do świata, w którym dotyk stał się przestępstwem, emocje – walutą kontrolowaną przez system, a miłość – aktem buntu większym niż rewolucja. Andrzej Mikulski otwiera przed czytelnikiem nową oś czasu: zimną, neonową i boleśnie aktualną. Na planecie pachnącej szkłem ludzie żyją bez ciała, bez bliskości, bez prawa do błędu. Wszystko jest obliczone. Wszystko jest sterylne. Aż do chwili, gdy w tej maszynie zaczyna pękać pierwszy szew. Rocco – były aktor świata, którego już nie ma. Mira – kustoszka gestów zakazanych. Andrzej – fotograf zagubiony w obcym wymiarze, który jedynym kliknięciem zatrzymuje prawdę, jakiej system nie toleruje. Ich sojusz staje się początkiem epidemii, której Pornlandia boi się najbardziej: wirusa empatii. To książka o pragnieniu, którego nie da się stłumić, o wolności, która zawsze szuka pęknięcia w lodzie, i o świecie, który przypomina, jak łatwo stracić człowieczeństwo… i jak trudno je odzyskać.

### Promo visual

Supplied visual shows:

`JUŻ W SPRZEDAŻY`

`empik`

`DOSTĘPNA W SALONACH I ONLINE`

### Status

- Description: **RECEIVED**
- Empik: **RECEIVED**
- Trailer 1: **RECEIVED**
- Trailer 2: **RECEIVED**
- Promo visual: **RECEIVED**

---

## 9.8 OCZAMI ALIENATORKI

### Title

**Oczami Alienatorki**

Associated material also refers to the book as **Człowiek Roku / Oczami Alienatorki** in the supplied comparative text.

### Description supplied by owner

> **Nie ma nic bardziej bezwzględnego niż kobieta, która przestaje udawać.**

**I. Satanizm Dnia Codziennego**

Przez lata wmawiano ci, że dom to azyl, a matka to świętość. Kłamstwo. Prawdziwe piekło nie ma rogów i nie pachnie siarką. Piekło śmierdzi starym kurzem z teatru w Cieszynie, tanim makaronem z dyskontu, potowym odorem z kopalni i smarem z warsztatu na przedmieściach. Piekło nosi małą czarną, uśmiecha się na komendę i powoli, milimetr po milimetrze, podcina gardło swojemu mężowi – bez użycia noża.

Wyobraź sobie faceta. Typowy „Człowiek Roku”. Zapracowany górnik-artysta, który wraca z szychty, żeby z dumą odebrać statuetkę na prowincjonalnej scenie. Mąż, który myśli, że jest królem swojego świata. A teraz zobacz jej wzrok w pierwszym rzędzie. Uśmiecha się. Ale w środku śmieje się z niego tak głośno, że aż skręca jej żołądek. Dla niej on nie jest bohaterem. Jest śmieciem, trupem do zakopania, frajerem w za dużym garniturze, od którego śmierdzi strachem.

Oto studium totalnej, zimnej, psychopatycznej dekonstrukcji drugiego człowieka. Oto historia o tym, jak wymienić mężowską walutę na nowszy model. Jak wpuścić obcego samca do własnej kuchni, pozwolić mu pić ze szklanki twojego męża, podczas gdy ten pokornie kroi cebulę na stojąco. Jak wytresować własne dziecko, żeby obcego osiłka nazywało „wujkiem”, a własnego ojca traktowało jak przeszkodę w drodze po nowe łyżwy z brokatem. Jak doprowadzić dorosłego mężczyznę do stanu, w którym wyrzucony na podłogę, zwinięty pod śmierdzącym kocem przy własnej matce, śpi na linoleum jak pies. I najgorsze... Ona nie czuje winy. Ona czuje ulgę. I głęboki, seksualny orgazm płynący z czystej władzy.

**II. SYSTEMOWE PORÓWNANIE LITERACKO-FILMOWE**

W poniższej tabeli zestawiono mechanikę narracyjną książki z klasykami brutalnego realizmu i czarnego kryminału.

| Cecha / Wektor analizy | Ślepnąc od świateł (J. Żulczyk) | Twórczość W. Smarzowskiego | Football Factory | Człowiek Roku / Oczami Alienatorki |
|---|---|---|---|---|
| Główny motyw przewodni | Warszawski świat przestępczy, fałsz elit, hipokryzja i ucieczka przed własnym mrokiem. | Anatomiczny rozbiór polskiej patologii społecznej, instytucjonalnego zepsucia i brudu moralnego. | Pusta, plemienna przemoc, adrenalina, lojalność kibicowska i ucieczka od szarej prozy życia. | Brutalny alienatyzm rodzinny, przemoc psychiczna, manipulacja dzieckiem i cyniczny demontaż małżeństwa. |
| Portret psychologiczny postaci | Nocny chłód, wyalienowany obserwator (Kuba), chłodna kalkulacja w świecie chaosu. | Postacie zaszczute, biologiczne, napędzane alkoholem, chciwością i strachem. | Pierwotny dynamizm, kolesiostwo, impulsywność, kult siły i braku zasad. | Bezwzględna socjopatologia (Weronika) vs. destrukcyjna naiwność i bierność (Andrzej). |
| Tekstura środowiska (Język i Klimat) | Wielkomiejski naddatek, poetycki hip-hopowy brud, nocna Warszawa, neonowy chłód. | Błoto, deszcz, spocone twarze, wódka rozlana na ceracie, duszny prowincjonalizm. | Brytyjski osiedlowy realizm, puby, zapach taniego piwa, szybka akcja i wulgarny humor. | Duszące powietrze prowincjonalnego teatru, smród pyłu węglowego, zimna sypialnia i warsztat samochodowy. |
| Anatomia destrukcji | Zderzenie z brutalną rzeczywistością narkotykowego biznesu. | Implozja mikro-społeczności pod wpływem kłamstw i chciwości. | Eksces fizycznej przemocy prowadzący do pustki. | Absolutna kastracyjna przemoc psychiczna – wywłaszczenie z męskości, ojcostwa i godności. |

**III. DLACZEGO TA KSIĄŻKA ZSZOKUJE I WYCIŚNIE ŁZY?**

**1. Zburzenie mitu Matki-Polki:** Książka bezkompromisowo wkracza w strefę, której literatura popularna unika – pokazuje dziecko (Zuzię) nie jako świętość, lecz jako pretekst, alibi i narzędzie w grze o emocjonalną dominację.

**1. Klastyczna przemoc psychiczna:** Smarzowski pokazuje przemoc poprzez butelkę i pięść; Żulczyk poprzez pistolet i kokainę; „Człowiek Roku” pokazuje przemoc ukrytą w słodkim uśmiechu, cichym syknięciu w przedpokoju i ostentacyjnym wręczeniu różowych łyżew od obcego mężczyzny.

**1. Poczucie całkowitej bezsilności:** Czytelnik cierpi razem z bohaterem, który z nagradzanego „Człowieka Roku” zostaje sprowadzony do roli kucharza na stojąco i jednostki bezprawnie koczującej na własnej podłodze. To wyciśnie łzy wściekłości u każdego, kto kiedykolwiek doświadczył cynicznej manipulacji.

„Oczami Alienatorki” to literacki nokaut. To wściekły, brudny i bolesny krzyk ojca, któremu system kazał zniknąć. Czytasz na własną odpowiedzialność, bo po tej lekturze już nigdy nie spojrzysz na sąd, policję czy „pomoc społeczną” tak samo.

**CZYTAJ JEŚLI MASZ ODWAGĘ**

**Nie czytaj tej książki przed snem, jeśli mąż leży obok ciebie w łóżku.**

**Nie kupuj jej, jeśli wierzysz w „i że cię nie opuszczę aż do śmierci”.**

„Człowiek Roku” / „Oczami Alienatorki” to nie jest powiastka do poduszki. To bezlitosna sekcja zwłok polskiego małżeństwa, napisana z chirurgiczną precyzją, po której już nigdy nie spojrzysz na uśmiech swojej partnerki w ten sam sposób. Kup teraz. Zobacz, jak wyciąga się wtyczkę z prądem, zanim ktoś odłączy ją tobie.

### Status

- Title: **RECEIVED**
- Description: **RECEIVED**
- Cover/promo visual: **RECEIVED**
- Empik: **MISSING in the material currently recorded here**
- Trailer: **MISSING unless present in previous source material**

---

## 9.9 CIESZYN NOIR

### Title

**Cieszyn Noir**

### Source status

The owner explicitly stated that this title was previously supplied and must not be lost.

### Description

**MISSING from the current persistent inventory.** The title is known; the exact source description must be recovered from the original supplied PDF/material or re-supplied by the owner. Do not fabricate a description.

### Other known state

A previous workflow included a `Cieszyn Noir(1).pdf` source and an advertising request for it. The exact contents of that source are not reproduced here yet and must be recovered before final migration.

### Status

- Title: **RECEIVED**
- Description: **MISSING / RECOVER FROM SOURCE**
- Cover/promo: **MISSING / VERIFY ASSET**
- Empik: **MISSING / VERIFY SOURCE**
- Trailer: **MISSING / VERIFY SOURCE**

---

## 9.10 ONTOLOGIA LICZBY I GEOMETRII — TRYLOGIA

### Title

**Ontologia Liczby i Geometrii — Trylogia**

### Source status

The owner explicitly corrected the project record: **no description for Ontologia has been supplied yet**. The title must remain in the master inventory and must not be dropped.

### Description

**MISSING.** Do not invent one.

### Status

- Title: **RECEIVED**
- Series designation: **RECEIVED — TRYLOGIA**
- Description: **MISSING / WAITING FOR SOURCE**
- Cover/promo: **MISSING / VERIFY ASSET**
- Empik: **MISSING / VERIFY SOURCE**
- Trailer: **MISSING / VERIFY SOURCE**

---

## 9.11 DRUGA POŁOWA

### Title

**Druga Połowa**

### Format

**Komiks / opowieść obrazkowa**

### Description supplied by owner

**Czy wiesz, że według Platona każda dusza pękła kiedyś na pół, a my spędzamy życie na poszukiwaniu tej drugiej połowy?**

Kiedy zimny, pusty wieczór na miejskim rynku przecina przypadkowe spojrzenie, czas nagle się zatrzymuje.

**„Druga Połowa”** to niezwykła opowieść obrazkowa (komiks), która dotyka najgłębszych strun ludzkich emocji — niepewności, lęku przed stratą i przełomowej nadziei na prawdziwe uczucie.

**Dlaczego warto sięgnąć po tę historię?**

- **Głębokie emocje** — Śledź relację, w której obawy o przyszłość zderzają się z absolutnym oddaniem i poczuciem bezpieczeństwa.
- **Klimatyczna oprawa** — Od zimowych, klimatycznych uliczek po ciepłe, pełne słońca poranki — piękna kreska dopracowana w każdym detalu.
- **Prawdziwe dialogi** — Historia o szukaniu bliskości, w której każdy kadr tętni autentycznymi uczuciami.

> „Życie nie jest zepsute, życie ma tylko gorzko-słodki smak. Ale z żadnego z tych smaków nigdy bym nie zrezygnował”

**[Zamów swój egzemplarz teraz i odkryj historię której nie znałeś !]**

### Promo visual supplied

File received:

`Komiksowa zapowiedź Drugiej Połowy.png`

The supplied visual contains the promotional message:

`JUŻ WKRÓTCE`

`PRAWDZIWE EMOCJE.`

`PRAWDZIWI LUDZIE.`

`KOMIKS, KTÓRY ZOSTAJE NA DŁUŻEJ.`

It also visibly presents Cieszyn and the comic-book cover.

### Additional trailer / podcast link supplied

https://youtu.be/TUJcvkroHjs?si=GZ__VPI1doyOhStu

### Status

- Title: **RECEIVED**
- Format: **RECEIVED**
- Description: **RECEIVED**
- Promo visual: **RECEIVED**
- Trailer/audio link: **RECEIVED**
- Empik: **MISSING / VERIFY SOURCE**

---

## 9.12 O ŻYCIU O RELACJACH

### Title

**O Życiu O Relacjach**

### Source status

The owner explicitly identified this as a title that had been lost from the previous inventory.

### Description

**MISSING.** No description is currently recorded in this README. Do not invent one.

### Status

- Title: **RECEIVED**
- Description: **MISSING / WAITING FOR SOURCE**
- Cover: **MISSING / VERIFY ASSET**
- Empik: **MISSING / VERIFY SOURCE**
- Trailer: **MISSING / VERIFY SOURCE**

---

# 10. BOOK PROMO VISUALS RECEIVED

The owner supplied a set of promotional visuals in the conversation. The following books were visibly represented:

1. `Światło, które zostało` — `JUŻ W SPRZEDAŻY` / Empik.
2. `Baśń o Pornlandii` — `JUŻ W SPRZEDAŻY` / Empik.
3. `CCR Tom I` — `JUŻ W SPRZEDAŻY` / Empik.
4. `CCR Tom II` — `JUŻ W SPRZEDAŻY` / Empik.
5. `Człowiek Roku` — `JUŻ W SPRZEDAŻY` / Empik.
6. `CCR Tom III — Ludzie Roku — Oś 18 Świadomości` — `JUŻ W SPRZEDAŻY` / Empik.
7. `CCR Tom IV — Architektura Nieskończoności` — `JUŻ WKRÓTCE` / Empik branding.
8. `Oczami Alienatorki` — `JUŻ WKRÓTCE` / Empik branding.
9. `Druga Połowa` — `JUŻ WKRÓTCE` / custom comic visual.

**Important:** supplied promo graphics are presentation assets. They do not by themselves establish an Empik URL unless the exact URL is also supplied or verified from source material.

---

# 11. OTHER CONTENT AREAS

## Film

Cinematic wall, not a generic YouTube list.

- large material + PLAY;
- fullscreen player;
- trailers and music videos should use exact source URLs/IDs;
- no invented titles or videos.

Known book trailers currently recorded above must be migrated into their respective book records rather than duplicated as unstructured links.

## Applications / Agents

Visual direction:

- royal-blue / titanium / platinum semantic system;
- premium technical language;
- terminal-like metadata;
- status;
- architecture;
- stack;
- repository;
- not a programmer dashboard.

## Projects

Project Archive target:

**01–57**

Each project should have:

- number;
- name;
- short description;
- categories: AI / SECURITY / SYSTEMS;
- status;
- repository;
- detail: PROBLEM / IDEA / ARCHITEKTURA / TECHNOLOGIA / MECHANIZM / STATUS / REPOZYTORIUM / POWIĄZANE PROJEKTY.

Hierarchy:

- flagship;
- research;
- infrastructure;
- experimental;
- AI;
- creative.

Graph relationship:

`projects ↔ agents ↔ apps ↔ technologies ↔ publications`

## Publications

Editorial layout, not a link dump.

Metadata:

`MEDIA / DATA / TITLE / SHORT FRAGMENT / READ-WATCH`

## Awards

Known timeline:

- 2017 AFRP;
- 2018 BRĄZ;
- 2019 AFIAP + SREBRO;
- 2020 EFIAP;
- 2023 ZŁOTO;
- 2023–2024 CZŁOWIEK ROKU.

These values must be verified against source documents before being treated as final public structured data.

## Contact

Question:

`W JAKIEJ SPRAWIE CHCESZ SIĘ SKONTAKTOWAĆ?`

Choices:

- Relationship;
- Fotografia;
- Masaż;
- Media;
- Projekty;
- AI/Agent.

Then select channel.

## Social

Known intended channels:

- Facebook;
- Instagram;
- LinkedIn;
- later Snapchat;
- WhatsApp;
- Telegram;
- Discord.

Use monochrome icons with accent on interaction. Never invent social URLs.

---

# 12. FOOTER

Required elements:

- logo;
- MOJEALTEREGO;
- domains;
- copyright;
- privacy;
- contact;
- social;
- exact closing line:

> `THE WORLD IS LARGER THAN THE PAGE.`

---

# 13. INTERACTION SYSTEM

States:

`DEFAULT / HOVER / ACTIVE / FOCUS / DISABLED / LOADING / ERROR`

Requirements:

- full keyboard navigation;
- WCAG 2.2 AA;
- lazy images;
- WebP/AVIF where appropriate;
- minimal JavaScript;
- code splitting;
- GPU transforms;
- no CLS;
- font optimization;
- per-page SEO;
- structured data.

Mobile:

- premium app-like composition;
- tablet is a separate composition, not simply scaled desktop;
- ultra-wide 27–49 inch support;
- optional Experience Mode;
- no autoplay;
- time-reactive day/night behavior where appropriate.

---

# 14. ASSET INTEGRITY

Asset status vocabulary:

- `ORIGINAL`
- `VERIFIED`
- `EXTERNAL`
- `PLACEHOLDER`
- `MISSING`

## Original logo

Canonical asset:

`assets/logo-master.svg`

Previously verified SHA:

`9ec679f8e4cb5a26010a34a3e324cf378dbe03f9`

The logo is immutable. Never reconstruct, redraw or generate a similar logo. Use the supplied original asset.

## Known asset issue

`assets/about-andrzej-mikulski.png` was previously observed as a 79-byte file and is likely broken. A valid larger asset was believed to exist, but the exact production filename must be verified before use.

---

# 15. REACT MIGRATION — COMPLETED WORK

Repository:

`mojealterego/mojealterego.github.io`

Branch:

`main`

Latest known commit at the time this README was created:

`9930bfa5a97113ce0328d6ae55a8e027dd05724a`

Commit message:

`Replace migration placeholders with real React section pages`

## React/Vite foundation

Created `package.json` with:

- React;
- React DOM;
- Vite;
- `@vitejs/plugin-react`;
- build/dev/preview scripts.

Created `vite.config.js` with:

- React plugin;
- root `/` base;
- Vite build output `dist`;
- multi-page input generation for the legacy `.html` entry points;
- `assets` as public directory.

## React source

Created:

- `src/main.jsx`
- `src/routes.jsx`
- `src/styles.css`

Implemented React architecture includes:

- SiteHeader;
- fullscreen Menu;
- Home;
- InnerPage;
- Section;
- Cards;
- AboutPage;
- RelationshipPage;
- BooksPage;
- DataPage;
- LegacyPage route dispatch.

## Legacy HTML migration

The following legacy HTML entry points were converted into minimal React/Vite wrappers:

- `index.html`
- `o-mnie.html`
- `relationship.html`
- `ksiazki.html`
- `fotografia.html`
- `kontakt.html`
- `masaze.html`
- `nagrody.html`
- `projekty.html`
- `publikacje.html`
- `agenci.html`
- `aplikacje.html`
- `teledyski.html`
- `warsztaty-fotograficzne.html`
- `zwiastuny.html`
- `404.html`

The old source content still exists in earlier Git commits and must be recovered into React data/components where it has not yet been migrated.

---

# 16. GITHUB PAGES DEPLOYMENT

Current workflow was changed to a Vite build and GitHub Pages artifact deployment.

Workflow file:

`.github/workflows/pages.yml`

Build sequence:

1. checkout;
2. setup Node LTS;
3. `npm install`;
4. `npm run build`;
5. configure GitHub Pages;
6. upload `./dist`;
7. deploy Pages.

Latest known deployment run at the time of this README record:

- run: **#77**;
- run ID: `34387928616`;
- commit: `9930bfa5a97113ce0328d6ae55a8e027dd05724a`;
- last observed state before this README update: `pending`.

The previous run #76 failed during the Vite build because legacy CSS was still being parsed. The migration of legacy HTML entries to React wrappers addressed that specific build path.

**Important remaining verification:** confirm the latest run and deployment result after this README commit.

---

# 17. STATIC FILES THAT MUST SURVIVE VITE BUILD

The Vite configuration currently uses `assets` as `publicDir`, but root-level static files also need explicit preservation.

Required files to verify/copy into the production build:

- `.nojekyll`
- `manifest.webmanifest`
- `sitemap.xml`
- `robots.txt` if present.

Do not copy all legacy root files blindly, because that could reintroduce old HTML/CSS/JS processing and undo the migration boundary.

---

# 18. ORIGINAL SOURCE COMMITS TO RECOVER FROM

When migrating content, use these historical file versions as source material instead of guessing:

- `o-mnie.html` — `7cedad6b8302bba978279a4c88a4e9802e695462`
- `relationship.html` — `4b6033fe0452b7d93e8cede258256e8b9c0ca69e`
- `ksiazki.html` — `d906aaa91d05cfd9d1d8e68c0864cf3cc0b33e61`
- `fotografia.html` — `2327f73aefa39a65d62e63ac21ac634fa7443d93`
- `kontakt.html` — `b74dafa81ef4af178d38285357bf821299055c5b`
- `masaze.html` — `d6ae921b840ba65ffe8a6e9ed4094f1bb7ad3325`
- `nagrody.html` — `d2d9fe2e071690d42064462d07ce3a396dbc6c98`
- `projekty.html` — `e6c072d67af87a85581bce9cda8e2016842ab3fb`
- `publikacje.html` — `d2ba1761d49f389f416abebe6dd25c85ec02edab`
- `agenci.html` — `a97b8daf4713e2e97a186b72cee2a15151b8ce4f`
- `aplikacje.html` — `c8fee978eb6e2dc2fa56345b4969d363d6fde7e1`
- `teledyski.html` — `10b803349003a68840de73d49ff2f8a7a811c5d2`
- `warsztaty-fotograficzne.html` — `9c9ea9a64dc56a01e4226fe72ae57dcaf991a21f`
- `zwiastuny.html` — `788a85d7aae68e85cf54582f78d86a29e5f8e289`
- `404.html` — `67604154dc0a5db101b68556264665fea85b5b2b`
- original `index.html` — `43a328c51c3ad049e66cc803f8ff08bb79438d1d`
- original Pages workflow — `433b93c818a414f8972c6806e26a69dc0f453793`

---

# 19. REMAINING ENGINEERING WORK

## Highest priority

- [ ] Verify latest GitHub Actions build after README commit.
- [ ] Verify GitHub Pages deployment.
- [ ] Fix Relationship page so the exact required sentence is the first sentence.
- [ ] Verify actual About portrait asset path.
- [ ] Preserve root static files (`.nojekyll`, manifest, sitemap, robots if present).
- [ ] Recover exact book data from historical `ksiazki.html` and related source files.
- [ ] Replace any unverified book links with verified source links only.

## Books

- [ ] Build one authoritative book data model.
- [ ] Integrate all 12 currently recorded titles without dropping any.
- [ ] Integrate covers/promo visuals.
- [ ] Integrate Empik URLs where supplied/verified.
- [ ] Integrate all known trailers.
- [ ] Integrate `Człowiek Roku.mp3` as an audio/podcast asset only after deciding the repository asset path and licensing/storage handling.
- [ ] Recover `Cieszyn Noir` description from original source.
- [ ] Add `Ontologia Liczby i Geometrii — Trylogia` without inventing a description.
- [ ] Add `O Życiu O Relacjach` without inventing a description.
- [ ] Verify whether `Oczami Alienatorki` is a standalone title, an edition/alternate presentation of `Człowiek Roku`, or both, using the supplied source files rather than inference.

## Photography

- [ ] Recover exact gallery data from the historical page.
- [ ] Build curated asymmetric gallery.
- [ ] Build fullscreen viewer.
- [ ] Add mobile gesture behavior.

## Film

- [ ] Recover exact trailers and music videos from historical source files.
- [ ] Preserve exact titles, YouTube IDs and descriptions.
- [ ] Build cinematic fullscreen player experience.

## Projects

- [ ] Recover all Project Archive entries 01–57 from source.
- [ ] Preserve exact names/descriptions/categories/status/repositories.
- [ ] Build project detail model.
- [ ] Build cross-link graph projects ↔ agents ↔ apps ↔ technologies ↔ publications.

## Agents / Applications

- [ ] Recover exact source data.
- [ ] Preserve repository and architecture metadata.
- [ ] Avoid inventing status/stack information.

## Publications / Awards / Contact

- [ ] Recover exact source content.
- [ ] Preserve editorial presentation.
- [ ] Verify award timeline against source.
- [ ] Verify every contact/social URL before publication.

## QA

- [ ] Run production build.
- [ ] Run accessibility checks.
- [ ] Run responsive checks for mobile/tablet/desktop/ultra-wide.
- [ ] Verify keyboard navigation.
- [ ] Verify reduced-motion mode.
- [ ] Verify no CLS and image loading behavior.
- [ ] Verify SEO metadata and structured data per page.
- [ ] Verify Pages deployment.

---

# 20. KNOWN VERIFICATION LIMITATIONS

Previous live visual QA attempts were blocked by the available environment:

- browser plugin unavailable;
- Playwright access to the live site blocked by `net::ERR_BLOCKED_BY_ADMINISTRATOR`;
- direct `git clone` failed due DNS/network restrictions;
- local file-based Playwright verification was also blocked.

Therefore, **never claim live visual verification unless it has actually been performed successfully**.

GitHub Actions build/deployment status is objective CI evidence and should be used where available.

---

# 21. DATA PRESERVATION RULE

When new material is supplied:

1. append it to the relevant master record in this README;
2. identify its source type (text / PDF / image / audio / URL / repository data);
3. record exact links without rewriting them;
4. mark whether it is received, verified, integrated, missing or awaiting verification;
5. only then migrate it into React components/data;
6. never delete an earlier source record simply because a newer version exists — mark the old version and record the replacement.

This README is intentionally redundant. Redundancy is preferable to losing project content during migration.

---

# 22. CURRENT BOOK INVENTORY — QUICK CHECK

| # | Title | Description | Visual | Empik | Trailer/Audio |
|---:|---|---|---|---|---|
| 01 | CCR Tom I | RECEIVED | RECEIVED | RECEIVED | RECEIVED |
| 02 | CCR Tom II | RECEIVED | RECEIVED | RECEIVED | RECEIVED |
| 03 | CCR Tom III | RECEIVED | RECEIVED | RECEIVED | RECEIVED |
| 04 | CCR Tom IV — Architektura Nieskończoności | RECEIVED | RECEIVED | MISSING | RECEIVED |
| 05 | Człowiek Roku | RECEIVED | RECEIVED | VERIFY | RECEIVED + MP3 |
| 06 | Światło, które zostało | RECEIVED | RECEIVED | RECEIVED | MISSING |
| 07 | Baśń o Pornlandii | RECEIVED | RECEIVED | RECEIVED | 2 trailers |
| 08 | Oczami Alienatorki | RECEIVED | RECEIVED | MISSING | MISSING |
| 09 | Cieszyn Noir | MISSING | MISSING | MISSING | MISSING |
| 10 | Ontologia Liczby i Geometrii — Trylogia | MISSING | MISSING | MISSING | MISSING |
| 11 | Druga Połowa | RECEIVED | RECEIVED | MISSING | RECEIVED |
| 12 | O Życiu O Relacjach | MISSING | MISSING | MISSING | MISSING |

**This table is the anti-loss checklist. Any future book/content migration must reconcile against all 12 rows.**

---

# 23. FINAL PRINCIPLE

> **Nothing supplied by the owner gets lost. Nothing missing gets invented. Nothing marked as source material gets silently replaced by generated content.**
