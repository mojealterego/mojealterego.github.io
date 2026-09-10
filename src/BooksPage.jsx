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
    title:'O ŻYCIU O RELACJACH',
    subtitle:'O TYM, CO NAPRAWDĘ MA ZNACZENIE',
    description:`NIE CZYTAJ TEJ KSIĄŻKI, JEŚLI NIE CHCESZ NICZEGO ZMIENIAĆ.

Są książki, które czytasz i odkładasz na półkę.

Są też takie, które sprawiają, że po przeczytaniu jednej strony zaczynasz inaczej patrzeć na siebie, swoje relacje, decyzje i życie.

Ta książka należy do tej drugiej kategorii.

To nie jest zbiór pustych motywacyjnych haseł.

To zaproszenie do zatrzymania się, zadania sobie trudnych pytań i podjęcia decyzji, które być może od dawna odkładasz na później.

O miłości.
O granicach.
O strachu.
O czasie.
O własnej wartości.
O błędach.
O przebaczeniu.
O marzeniach.
O odwadze.
O tym, kim jesteś, kiedy przestajesz żyć według oczekiwań innych.

Bo czasami nie potrzebujesz kolejnej rady. Potrzebujesz zobaczyć prawdę, której od dawna unikasz.

TA KSIĄŻKA NIE MA CIĘ ZMIENIĆ.

Ma pomóc Ci zobaczyć, co naprawdę wymaga zmiany.
Każda strona została stworzona tak, aby nie tylko przekazać myśl, ale również uruchomić refleksję.

Nie pytaj wyłącznie:

„Czy to prawda?”

Zapytaj:

„Czy to dotyczy mnie?”
Bo możesz wiedzieć, czym są zdrowe granice — i nadal pozwalać innym je przekraczać.

Możesz wiedzieć, że czas jest najcenniejszy — i nadal odkładać życie na później.

Możesz wiedzieć, że warto walczyć o swoje marzenia — i nadal bać się zrobić pierwszy krok.

Możesz kochać drugiego człowieka — i jednocześnie zapominać o sobie.

Wiedza nie zmienia życia.
Dopiero zastosowanie jej w życiu może to zrobić.

A JEŚLI CHCESZ PÓJŚĆ KROK DALEJ?

Sama książka może być początkiem.

Dlatego powstały również szkolenia i programy rozwojowe, które pozwalają przełożyć refleksję na konkretne działanie.

Nie chodzi o kolejną godzinę słuchania teorii.

Chodzi o:

ZROZUMIENIE → DECYZJĘ → DZIAŁANIE → ZMIANĘ

Podczas szkoleń pracujemy nad tym, co naprawdę wpływa na codzienne życie:

budowaniem zdrowych relacji,

komunikacją,

granicami,

pewnością siebie,

podejmowaniem decyzji,

radzeniem sobie z lękiem i presją,

rozpoznawaniem własnych potrzeb,

pracą nad przekonaniami,

odpowiedzialnością za własne wybory,

budowaniem życia zgodnego z własnymi wartościami.

Nie po to, żeby stać się kimś innym.
Po to, żeby bardziej świadomie stać się sobą.

KSIĄŻKA, KTÓRA ZADAJE PYTANIA

Nie obiecuje, że po jej przeczytaniu wszystkie problemy znikną.

Nie obiecuje idealnego życia.

Nie mówi, że wystarczy „myśleć pozytywnie”.

Mówi coś znacznie bardziej wymagającego:

Masz wpływ na wiele swoich decyzji.
Masz wpływ na to, gdzie stawiasz granice.

Masz wpływ na to, komu dajesz swój czas.

Masz wpływ na to, czy pozostajesz w miejscu, czy robisz pierwszy krok.

Masz wpływ na to, czego uczysz się ze swoich błędów.

Masz wpływ na to, czy żyjesz według własnych wartości.

I czasami właśnie od jednej decyzji zaczyna się całkowicie nowy rozdział.

NIE CZEKAJ NA IDEALNY MOMENT

Bo może nigdy nie nadejść.

Nie będziesz zawsze gotowy.
Nie przestaniesz się bać wszystkich rzeczy.
Nie będziesz mieć pewności, że każda decyzja będzie właściwa.

Ale możesz zrobić coś ważniejszego:

Możesz zacząć działać pomimo niepewności.
Możesz powiedzieć „nie”.

Możesz powiedzieć „tak”.

Możesz przeprosić.

Możesz odejść.

Możesz wrócić.

Możesz zacząć od nowa.

Możesz zawalczyć o swoje marzenie.

Możesz przestać udowadniać swoją wartość innym.

Możesz wreszcie zacząć żyć bardziej po swojemu.

DLA KOGO JEST TA KSIĄŻKA?

Dla człowieka, który czuje, że stać go na więcej.

Dla osoby, która chce lepiej rozumieć siebie i innych.

Dla tych, którzy są na zakręcie i nie wiedzą jeszcze, którą drogę wybrać.

Dla tych, którzy chcą poprawić swoje relacje.

Dla tych, którzy zbyt długo odkładali ważne decyzje.

Dla tych, którzy potrzebują odzyskać odwagę.

Dla tych, którzy chcą się rozwijać — ale nie chcą żyć według gotowego schematu.

I dla każdego, kto choć raz pomyślał:

„Chcę coś zmienić, tylko nie wiem, od czego zacząć.”

A MOŻE ZACZNIESZ OD JEDNEJ STRONY?

Jednej myśli.

Jednego pytania.

Jednej decyzji.

Jednej rozmowy.

Jednego „nie”.

Jednego „spróbuję”.

Jednego pierwszego kroku.

Bo nie musisz od razu zmieniać całego swojego życia.
Czasami wystarczy zmienić jedną rzecz, która zacznie zmieniać wszystko inne.

KSIĄŻKA + SZKOLENIA
PRZECZYTAJ. ZATRZYMAJ SIĘ. ZASTANÓW. DZIAŁAJ.

Książka daje Ci przestrzeń do refleksji.

Szkolenia pomagają przełożyć refleksję na praktykę.

Ty podejmujesz decyzję, co z tym zrobisz.

NIE CZEKAJ, AŻ ŻYCIE SAMO SIĘ ZMIENI.
ZACZNIJ OD SIEBIE.

Kup książkę.
Weź udział w szkoleniu.
Zrób pierwszy krok.

Bo być może za rok będziesz dokładnie w tym samym miejscu.

Chyba że zdecydujesz się zrobić coś inaczej już dzisiaj.

AM | ANDRZEJ MIKULSKI

Książka • Szkolenia • Rozwój osobisty • Relacje • Świadome życie

TWOJE ŻYCIE NIE MUSI WYGLĄDAĆ TAK, JAK WYGLĄDA DZISIAJ.

Ale ktoś musi podjąć decyzję, żeby je zmienić.
Dlaczego nie Ty?`,
    empik:null,
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
