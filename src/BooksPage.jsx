import React from 'react'
import './books.css'

const books = [
  {
    title:'CCR TOM I',
    subtitle:'Jak przetrwać w dziwnym świecie po przeniesieniu się do alternatywnej osi czasu',
    description:'To psychodeliczny thriller egzystencjalny, intymny pamiętnik straty i podróż przez alternatywne światy, w których światło nie tylko oświetla – ono pamięta. Fotograf z Cieszyna traci córkę i… światło zaczyna oddychać. Jedno zdjęcie otwiera pęknięcie między wymiarami: Cieszyn 2025, Chicago 2135, Neo-Paris 2345, Devil Mind 2777. Czy można odnaleźć dziecko, jeśli samemu przestaje się istnieć? Czy miłość rezonuje poza czasem? Co się stanie, gdy wspomnienia zaczną rosnąć jak żywe organizmy, a cień stanie się osobnym „ja”? To książka o ojcostwie na granicy kosmosu i rozpaczy. O świetle, które pamięta nas bardziej, niż my pamiętamy siebie. Mroczna, poetycka, totalnie oryginalna. Jeśli lubisz „Matrix”, „Interstellar”, Sapkowskiego, Dukaja, Żulczyka, i literaturę, która wykręca percepcję – to jest Twoja nowa obsesja. „Czas nie płynie — oddycha.” Przygotuj się na historię, która nie kończy się na ostatniej stronie — tylko przenosi cię dalej.',
    empik:'https://www.empik.com/ccr-tom-i-jak-przetrwac-w-dziwnym-swiecie-po-przeniesieniu-sie-do-alternatywnej-osi-czasu-mikulski-andrzej,p1686064571,ebooki-i-mp3-p',
    trailers:[['Zwiastun CCR Tom I','https://youtu.be/2yi7YcNuhqE?feature=shared']]
  },
  {
    title:'CCR TOM II',
    subtitle:'Oś czasu w alternatywnych światach',
    description:'Kiedy świadomość przestaje należeć do jednego ciała, a światło zaczyna pamiętać człowieka lepiej niż on sam — zaczyna się podróż, której nie da się zatrzymać. Drugi tom serii CCR to wejście w głębsze warstwy równoległych rzeczywistości. Andrzej Mikulski — fotograf, operator światła i świadek pierwszych eksperymentów CCR — wraca, by zmierzyć się z własnymi odbiciami w alternatywnych osiach czasu. Cieszyn 2058, Neo-Paris 2345, Devil Mind 2777 — każde z tych miejsc jest jednocześnie wspomnieniem, błędem i nowym początkiem. W centrum tej historii wciąż pulsuje jedno pytanie: czy światło potrafi przywrócić człowieka, jeśli pamięć o nim nie zgasła? CCR – Tom II to opowieść o rezonansie świadomości, miłości silniejszej niż czas i o świecie, w którym każda myśl tworzy nową rzeczywistość. To książka dla czytelników, którzy lubią przekraczać granicę między nauką a metafizyką, realizmem a czymś, co dopiero zaczyna nabierać kształtu. Światło nie umiera. Światło tylko zmienia częstotliwość.',
    empik:'https://www.empik.com/ccr-tom-ii-os-czasu-w-alternatywnych-swiatach-mikulski-andrzej,p1687087904,ebooki-i-mp3-p',
    trailers:[['Zwiastun CCR Tom II','https://youtu.be/x57-DYD5vUk?feature=shared']]
  },
  {
    title:'CCR TOM III',
    subtitle:'Ludzie Roku — Oś 18 Świadomości',
    description:'Kontynuacja epickiego cyklu, w którym czas, światło i pamięć splatają się w metafizyczną pętlę. Zapowiedź powinna akcentować eskalację skali – od osobistego dramatu do kosmicznego eksperymentu. „Światło pamięta. Czas się powtarza.” Po latach ciszy, Andrzej Mikulski powraca – już nie jako fotograf, ale operator 18 Świadomości. W trzecim tomie trylogii CCR, świat przestaje być miejscem, a staje się systemem. Kulminacja mitologii „światła jako pamięci”. Czas przestaje być linią — jest archiwum emocji, w którym ojciec i córka odnajdują się po setkach lat, poprzez dane, rezonanse, echa i sny. To nie tylko kontynuacja — to rekonstrukcja człowieczeństwa po końcu człowieka. Od kopalnianych tuneli po laboratoria przyszłości, od Cieszyna po Neo-Paris roku 2345 – każda oś czasu to kolejny zapis pamięci, każdy błysk światła to wiadomość dla Zuzi, córki, która istnieje już tylko w kodzie. To opowieść o przetrwaniu świadomości w epoce, w której zanikają emocje, a miłość staje się częstotliwością.',
    empik:'https://www.empik.com/ccr-tom-iii-ludzie-roku-os-18-swiadomosci-mikulski-andrzej,p1687088055,ebooki-i-mp3-p',
    trailers:[['Zwiastun CCR Tom III','https://youtu.be/sB6llID2Dmg?feature=shared']]
  },
  {
    title:'BAŚŃ O PORNLANDII',
    subtitle:'Brutalnie poetycka opowieść o świecie bez bliskości',
    description:'„Baśń o Pornlandii” to brutalnie poetycka podróż do świata, w którym dotyk stał się przestępstwem, emocje – walutą kontrolowaną przez system, a miłość – aktem buntu większym niż rewolucja. Andrzej Mikulski otwiera przed czytelnikiem nową oś czasu: zimną, neonową i boleśnie aktualną. Na planecie pachnącej szkłem ludzie żyją bez ciała, bez bliskości, bez prawa do błędu. Wszystko jest obliczone. Wszystko jest sterylne. Aż do chwili, gdy w tej maszynie zaczyna pękać pierwszy szew. Rocco – były aktor świata, którego już nie ma. Mira – kustoszka gestów zakazanych. Andrzej – fotograf zagubiony w obcym wymiarze, który jedynym kliknięciem zatrzymuje prawdę, jakiej system nie toleruje. Ich sojusz staje się początkiem epidemii, której Pornlandia boi się najbardziej: wirusa empatii. To książka o pragnieniu, którego nie da się stłumić, o wolności, która zawsze szuka pęknięcia w lodzie, i o świecie, który przypomina, jak łatwo stracić człowieczeństwo… i jak trudno je odzyskać.',
    empik:'https://www.empik.com/basn-o-pornlandii-mikulski-andrzej,p1687292490,ebooki-i-mp3-p',
    trailers:[['Zwiastun 01','https://youtu.be/8neIWOmUKAc?feature=shared'],['Zwiastun 02','https://youtu.be/U4wPXJFPpag?feature=shared']]
  },
  {
    title:'ŚWIATŁO, KTÓRE ZOSTAŁO',
    subtitle:'Książka o prawdzie, stracie i świetle, które pozostaje',
    description:'„Światło, które zostało” to książka, której się nie czyta — tę historię się przeżywa. Mikulski pisze tak, jakby każdy akapit powstawał w półmroku, przy drżącej lampie, kiedy człowiekowi zostało więcej ciszy niż tchu. To zapis upadku i powolnego podnoszenia się z niego — ale bez tanich morałów, bez taniego światła. Tylko prawda, taka, która boli, i taka, która naprawdę świeci. To jedna z najbardziej intymnych polskich książek ostatnich lat. Autor rozbraja system, alienację, depresję i tęsknotę po ojcowsku — bez pozy, bez PR-u, z autentyczną miłością, której nikt nie potrafił zapisać w aktach. Czytając, masz wrażenie, że siedzisz obok niego — w sądowym korytarzu, w pustej kuchni, w milczeniu po wyroku. I nagle rozumiesz, dlaczego światło jest tutaj bohaterem równie ważnym jak człowiek. To książka dla tych, którzy kiedyś stracili głos. I dla tych, którzy wciąż próbują go odzyskać. Zostaje pod skórą na długo po ostatniej stronie.',
    empik:'https://www.empik.com/swiatlo-ktore-zostalo-mikulski-andrzej,p1688662252,ebooki-i-mp3-p',
    trailers:[]
  },
  {
    title:'CCR TOM IV',
    subtitle:'ARCHITEKTURA NIESKOŃCZONOŚCI',
    description:'Architektura Nieskończoności: Jak światło i miłość stały się stałymi fizycznymi? „Czy czas naprawdę płynie, czy może tylko oddycha?” Narratorka — Podróżniczka — pisze z perspektywy Osi ?, miejsca, w którym tożsamość rozmywa się w strumieniu fotonów, a czas przestaje być liniową rzeką. Kroniki CCR (Cosmic Consciousness Resonator) przedstawiają wszechświat, który nie porusza się naprzód, lecz oddycha. Historia Andrzeja Mikulskiego, znanego jako „Operator”, staje się raportem z ewolucji świadomości, która rzuciła wyzwanie entropii. W centrum pojawiają się: rytm 33 lat i Kod 18 Świadomości, biofotonika i człowiek jako nadajnik światła, fotografia jako portal, paradoks Devil Mind, a także miłość jako stała fizyczna i częstotliwość 528 Hz. To rozwinięcie mitologii CCR przedstawione jako „architektura nieskończoności” — historia i instrukcja obsługi własnego światła.',
    empik:null,
    trailers:[['Zwiastun CCR Tom IV','https://youtu.be/SYMsiiyHAMc?feature=shared']]
  }
]

function Action({href,children}){return <a className="book-action" href={href} target="_blank" rel="noreferrer">{children}<span>↗</span></a>}

export function BooksPage(){return <main className="inner-page books-page">
  <section className="books-hero"><span className="eyebrow">03 / KSIĄŻKI · AUTORSKIE ŚWIATY</span><h1>KSIĄŻKI.<br/><em>ŚWIATY, KTÓRE ZOSTAJĄ.</em></h1><p>Autorskie książki Andrzeja Mikulskiego — od intymnych historii po alternatywne osie czasu, metafizykę świadomości i literackie eksperymenty.</p></section>
  <section className="books-index">{books.map((book,i)=><a href={`#book-${i+1}`} key={book.title}><span>{String(i+1).padStart(2,'0')}</span><strong>{book.title}</strong><em>{book.subtitle}</em><i>↓</i></a>)}</section>
  <section className="books-list">{books.map((book,i)=><article className="book-entry" id={`book-${i+1}`} key={book.title}>
    <header><span className="book-number">{String(i+1).padStart(2,'0')}</span><div><span className="eyebrow">{book.title}</span><h2>{book.subtitle}</h2></div></header>
    <div className="book-body"><div className="book-object"><div className="book-spine">{book.title}</div><div className="book-cover"><span>AM</span><strong>{book.title}</strong><small>{book.subtitle}</small></div></div><div className="book-copy"><p>{book.description}</p><div className="book-actions">{book.empik&&<Action href={book.empik}>KUP / ZOBACZ W EMPIK</Action>}{book.trailers.map(([label,url])=><Action key={url} href={url}>{label}</Action>)}</div></div></div>
    <footer><span>ANDRZEJ MIKULSKI</span><span>{book.trailers.length ? `${book.trailers.length} ${book.trailers.length===1?'ZWIastun':'ZWIastuny'}`.toUpperCase() : 'BRAK ZWIASTUNU W PRZEKAZANEJ PACZCE'}</span></footer>
  </article>)}</section>
</main>}
