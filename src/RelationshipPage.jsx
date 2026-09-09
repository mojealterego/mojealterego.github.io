import React from 'react'

const method = [
  ['01','POZNANIE','Historia • kontekst • emocje','Poznajemy sytuację bez pochopnych ocen i gotowych diagnoz.'],
  ['02','ZROZUMIENIE','Potrzeby • oczekiwania • mechanizmy','Szukamy tego, co naprawdę znajduje się pod powierzchnią konfliktu.'],
  ['03','ANALIZA','Komunikacja • zachowania • granice','Przyglądamy się schematom, które wpływają na relację.'],
  ['04','STRATEGIA','Możliwości • decyzje • kierunek','Porządkujemy sytuację i określamy możliwe drogi działania.'],
  ['05','PRAKTYKA','Rozmowa • reakcja • konsekwencja','Przekładamy wiedzę na konkretne zachowania i decyzje.'],
  ['06','TRANSFORMACJA','Świadomość • sprawczość • zmiana','Celem nie jest chwilowa ulga, lecz większa świadomość siebie i własnych wyborów.'],
]

const selfAreas = [
  ['POTRZEBY','Czego naprawdę potrzebuję?','Bliskości? Bezpieczeństwa? Wolności? Uznania? Stabilności? Namiętności? Spokoju?'],
  ['EMOCJE','Co właściwie czuję?','Lęk • złość • smutek • zazdrość • samotność • poczucie odrzucenia • bezsilność'],
  ['GRANICE','Na co się zgadzam?','Szacunek • sposób komunikacji • prywatność • wierność • przestrzeń • sposób rozwiązywania konfliktów'],
  ['WARTOŚCI','Czego nie chcę zdradzić w sobie?','Szacunek • lojalność • wolność • uczciwość • odpowiedzialność • rozwój'],
  ['WYBORY','Co zrobię z tym, co już wiem?','Wiedza o sobie ma znaczenie dopiero wtedy, kiedy prowadzi do świadomego wyboru.'],
]

const audiences = [
  ['DLA SINGLI','Kiedy chcesz lepiej rozumieć siebie, swoje potrzeby i sposób budowania przyszłych relacji.'],
  ['DLA PAR','Kiedy chcesz zrozumieć, co dzieje się pomiędzy Wami i jak możecie zbudować lepszy sposób funkcjonowania razem.'],
  ['W KRYZYSIE','Kiedy relacja znalazła się w punkcie, w którym dotychczasowe sposoby komunikacji przestały działać.'],
  ['PO ZDRADZIE','Kiedy zaufanie zostało naruszone i trzeba zdecydować, co dalej.'],
  ['PO ROZSTANIU','Kiedy potrzebujesz uporządkować emocje, zrozumieć doświadczenie i odzyskać własny kierunek.'],
]

const decisions = [
  ['01','ZATRZYMANIE','Najpierw przestajemy działać impulsywnie.'],
  ['02','ZROZUMIENIE','Rozpoznajemy, co naprawdę dzieje się w relacji.'],
  ['03','ODPOWIEDZIALNOŚĆ','Oddzielamy własny wpływ od odpowiedzialności drugiej osoby.'],
  ['04','DECYZJA','Określamy, czy celem jest odbudowa, zmiana relacji czy świadome zakończenie.'],
  ['05','DZIAŁANIE','Tworzymy konkretny kierunek dalszego postępowania.'],
]

function Quote({children,author=false}){return <blockquote className="relationship-quote"><span className="quote-mark">“</span><p>{children}</p>{author&&<cite>— ANDRZEJ MIKULSKI —</cite>}<span className="quote-mark end">”</span></blockquote>}
function Panel({number,title,children,className=''}){return <article className={`relationship-panel ${className}`}><div className="panel-number">{number}</div><h3>{title}</h3>{children}</article>}

export function RelationshipPage(){return <main className="inner-page relationship-page">
  <section className="relationship-hero">
    <div className="relationship-brandline"><span>AM</span><i>RELATIONSHIP COACHING</i><b>01 / 18</b></div>
    <div className="relationship-hero-copy">
      <span className="eyebrow">ANDRZEJ MIKULSKI</span>
      <h1>RELACJA<br/><em>ZACZYNA SIĘ OD CIEBIE.</em></h1>
      <p className="relationship-subline">ŚWIADOMOŚĆ SIEBIE • POTRZEBY • GRANICE • EMOCJE • WYBORY</p>
      <p className="relationship-lead">Nie każda relacja potrzebuje końca. Nie każda potrzebuje ratunku. Każda potrzebuje zrozumienia.</p>
      <p>Profesjonalnie. Empatycznie. Skutecznie. Bez gotowych recept i bez oceniania Twojej historii.</p>
    </div>
    <div className="relationship-hero-aside"><span>WIEDZA</span><span>DOŚWIADCZENIE</span><span>EMPATIA</span><span>STRATEGIA</span><span>TRANSFORMACJA</span></div>
  </section>

  <section className="relationship-section relationship-opening">
    <div className="relationship-section-head"><span>02</span><div><span className="eyebrow">JAK PRACUJĘ</span><h2>RELACJA TO SYSTEM.<br/><em>CZŁOWIEK TO HISTORIA.</em></h2></div></div>
    <div className="relationship-two-col"><div><p>Nie szukam jednej uniwersalnej odpowiedzi. Najpierw poznaję człowieka, jego historię, sposób komunikowania, potrzeby, granice i rzeczywisty problem.</p><p>Relacja nie rozpada się wyłącznie przez brak uczuć. Czasem rozpada się dlatego, że potrzeby pozostają niewypowiedziane, emocje zamieniają się w oskarżenia, a rozmowa staje się walką o to, kto ma rację.</p></div><Quote>Nie będę decydował za Ciebie.<br/>Nie będę oceniał Twojej historii.<br/>Będę pomagał Ci ją lepiej zobaczyć.</Quote></div>
  </section>

  <section className="relationship-section">
    <div className="relationship-title-row"><span>03</span><h2>METODA</h2><p>WIDZIEĆ WIĘCEJ. ROZUMIEĆ GŁĘBIEJ. DZIAŁAĆ ŚWIADOMIE.</p></div>
    <div className="relationship-method">{method.map(([n,t,m,d])=><article key={n}><span className="method-number">{n}</span><div className="method-icon">◇</div><h3>{t}</h3><small>{m}</small><p>{d}</p></article>)}</div>
  </section>

  <section className="relationship-section">
    <div className="relationship-title-row"><span>04</span><h2>RELACJA ZACZYNA SIĘ OD CIEBIE.</h2><p>ŚWIADOMOŚĆ SIEBIE • POTRZEBY • GRANICE • EMOCJE • WYBORY</p></div>
    <p className="relationship-centered-copy">Zanim spróbujemy zrozumieć drugiego człowieka, warto zatrzymać się przy sobie. Co naprawdę jest dla mnie ważne? Czego potrzebuję? Na co się zgadzam, a czego nie chcę już przekraczać? Jak reaguję, kiedy czuję lęk, odrzucenie, zazdrość albo utratę kontroli?</p>
    <div className="relationship-panels five">{selfAreas.map(([t,q,d],i)=><Panel key={t} number={String(i+1).padStart(2,'0')} title={t}><p><strong>{q}</strong></p><p>{d}</p></Panel>)}</div>
    <Quote author>Nie możesz zbudować spokojnej relacji, prowadząc nieustanną wojnę z samym sobą.</Quote>
  </section>

  <section className="relationship-section relationship-communication">
    <div className="relationship-title-row"><span>05</span><h2>KOMUNIKACJA,<br/><em>KTÓRA BUDUJE RELACJĘ.</em></h2><p>NIE CHODZI TYLKO O TO, CO MÓWIMY. CHODZI O TO, CZY POTRAFIMY NAPRAWDĘ SIĘ USŁYSZEĆ.</p></div>
    <div className="relationship-two-col"><div><p>Relacja nie rozpada się wyłącznie przez brak uczuć. Czasem rozpada się dlatego, że potrzeby pozostają niewypowiedziane, emocje są zamieniane w oskarżenia, a rozmowa staje się walką o to, kto ma rację.</p><p>Dojrzała komunikacja nie polega na tym, aby zawsze mówić to, co druga osoba chce usłyszeć. Polega na umiejętności powiedzenia prawdy o sobie bez ranienia drugiego człowieka — oraz wysłuchania jego prawdy bez natychmiastowej potrzeby obrony.</p></div><Panel number="01 → 03" title="SŁYSZĘ • ROZUMIEM • PRZYJMUJĘ"><p><strong>Słyszę</strong> — rejestruję słowa.</p><p><strong>Rozumiem</strong> — dostrzegam znaczenie i emocje.</p><p><strong>Przyjmuję</strong> — uznaję, że druga osoba ma prawo do swoich odczuć i perspektyw.</p></Panel></div>
    <div className="relationship-contrast"><div><h3>ZAMIAST OSKARŻENIA — KOMUNIKAT</h3><p>„Ty nigdy mnie nie słuchasz.”</p><p>„Zawsze wszystko musi być po Twojemu.”</p><p>„Przez Ciebie tak się czuję.”</p></div><div><h3>POWIEDZ</h3><p>„Potrzebuję, żebyś mnie teraz naprawdę wysłuchał.”</p><p>„Mam poczucie, że trudno nam znaleźć rozwiązanie, które uwzględnia nas oboje.”</p><p>„W tej sytuacji czuję złość i bezsilność.”</p></div></div>
    <Quote author>Najtrudniejsza rozmowa nie zawsze jest tą, w której trzeba znaleźć właściwe słowa. Czasem jest tą, w której trzeba naprawdę wysłuchać.</Quote>
  </section>

  <section className="relationship-section relationship-conflict">
    <div className="relationship-title-row"><span>06</span><h2>KONFLIKT<br/><em>NIE MUSI OZNACZAĆ KOŃCA.</em></h2><p>RÓŻNICA ZDAŃ NIE NISZCZY RELACJI. NISZCZY JĄ SPOSÓB, W JAKI TRAKTUJEMY SIEBIE PODCZAS RÓŻNICY.</p></div>
    <div className="relationship-two-col"><div><p>Konflikt jest naturalną częścią każdej bliskiej relacji. Dwie osoby mogą kochać się, szanować i jednocześnie mieć zupełnie inne potrzeby, oczekiwania, granice oraz sposoby reagowania.</p><p>Problem zaczyna się wtedy, gdy celem rozmowy przestaje być rozwiązanie problemu, a staje się nim udowodnienie własnej racji, ukaranie drugiej osoby albo zmuszenie jej do ustąpienia.</p><p><em>Nie każda różnica wymaga zwycięzcy. Czasem wymaga zrozumienia.</em></p></div><Panel number="01 → 05" title="CYKL KONFLIKTU"><p><strong>WYZWALACZ</strong> — co uruchomiło napięcie?</p><p><strong>INTERPRETACJA</strong> — co sobie powiedziałem?</p><p><strong>EMOCJA</strong> — co naprawdę poczułem?</p><p><strong>REAKCJA</strong> — co zrobiłem?</p><p><strong>KONSEKWENCJA</strong> — co wydarzyło się między nami?</p></Panel></div>
    <div className="relationship-panels three"><Panel number="01" title="ZATRZYMAJ"><p>Nie odpowiadaj natychmiast pod wpływem impulsu.</p></Panel><Panel number="02" title="NAZWIJ"><p>Określ, co naprawdę czujesz.</p></Panel><Panel number="03" title="ODDZIEL"><p>Oddziel fakty od własnych interpretacji.</p></Panel></div>
    <Quote author>W dojrzałej relacji nie chodzi o to, żeby nigdy się nie ranić. Chodzi o to, żeby umieć zatrzymać się, zanim rana stanie się sposobem komunikacji.</Quote>
  </section>

  <section className="relationship-section relationship-boundaries">
    <div className="relationship-title-row"><span>07</span><h2>GRANICE,<br/><em>KTÓRE CHRONIĄ RELACJĘ.</em></h2><p>GRANICA NIE JEST KARĄ. NIE JEST GROŹBĄ. NIE JEST PRÓBĄ KONTROLOWANIA DRUGIEGO CZŁOWIEKA.</p></div>
    <div className="relationship-two-col"><div><p>Granica mówi przede wszystkim o mnie — o tym, na co się zgadzam, czego nie akceptuję i co zrobię, kiedy określona sytuacja będzie się powtarzać.</p><p>Zdrowa relacja nie wymaga rezygnacji z siebie. Wymaga dwóch osób, które potrafią być blisko, nie przekraczając wzajemnie swoich granic.</p></div><Panel number="W I E M → M Ó W I Ę → DZIAŁAM" title="CZYM JEST ZDROWA GRANICA?"><p><strong>Wiem</strong> — wiem, co jest dla mnie ważne.</p><p><strong>Mówię</strong> — potrafię zakomunikować to jasno.</p><p><strong>Działam</strong> — moje słowa mają konsekwencje.</p></Panel></div>
    <div className="relationship-contrast"><div><h3>KONTROLA</h3><p>„Nie możesz spotykać się z tymi ludźmi.”</p><p>„Masz mi pokazać telefon.”</p><p>„Nie wolno Ci wychodzić beze mnie.”</p></div><div><h3>GRANICA</h3><p>„Nie chcę być w relacji, w której ukrywanie kontaktów z innymi osobami jest normą.”</p><p>„Potrzebuję w relacji wzajemnego szacunku dla prywatności.”</p><p>„Jeżeli rozmowa zamienia się w obrażanie, kończę ją i wracam do niej, kiedy oboje będziemy spokojniejsi.”</p></div></div>
    <Quote author>Granica nie mówi: „Masz się zmienić”. Mówi: „Ja wiem, na co się zgadzam — i na co już nie”.</Quote>
  </section>

  <section className="relationship-section">
    <div className="relationship-title-row"><span>08</span><h2>ŚWIADOME DECYZJE<br/><em>BUDUJĄ RELACJĘ.</em></h2></div>
    <div className="relationship-two-col"><div><p>Relacja nie rozpada się w jednej chwili. Rozpada się wtedy, kiedy zbyt długo ignorujemy to, co dzieje się między nami.</p><p>Możesz kochać drugą osobę, a jednocześnie ranić ją swoimi reakcjami. Możesz chcieć bliskości, a jednocześnie jej unikać. Możesz pragnąć zrozumienia, a jednocześnie zamykać się w sobie.</p><p><em>Zmiana nie polega na tym, że stajesz się kimś innym. Polega na tym, że zaczynasz świadomie wybierać to, co wcześniej robiłeś automatycznie.</em></p></div><Quote>Zrób to.<br/><br/>Stracone szanse bolą bardziej niż ewentualna porażka w działaniu. Z niej się przynajmniej czegoś nauczysz.</Quote></div>
    <div className="relationship-decisions">{decisions.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
  </section>

  <section className="relationship-section relationship-freedom">
    <div className="relationship-title-row"><span>09</span><h2>WOLNOŚĆ<br/><em>ZACZYNA SIĘ OD DECYZJI.</em></h2><p>NAJTRUDNIEJSZE GRANICE CZĘSTO NIE STOJĄ WOKÓŁ NAS. STOJĄ W NASZEJ GŁOWIE.</p></div>
    <div className="relationship-two-col"><div><p>Czasem człowiek nie potrzebuje kolejnej rady. Potrzebuje odwagi, żeby zakwestionować to, co przez lata uważał za niepodważalne.</p><p>Mówimy sobie: „Nie mogę”, „Nie wypada”, „To już nie dla mnie”, „Musi być”. Z pozoru są to tylko słowa. Powtarzane wystarczająco długo zaczynają jednak wyznaczać granice naszego świata.</p><p>Najbardziej niebezpieczne ograniczenia nie zawsze są tymi, które ktoś stawia przed nami. Czasem sami budujemy je z własnych przekonań, lęków i doświadczeń.</p></div><Quote>„Człowiek sam buduje sobie solidny płot ze wszystkich słów „nie da się”, „nie mogę”, „nie powinienem”, „muszę”, a potem wygląda zza szczachet tego płotu i zazdrości tym, którzy żyją na wolności.”</Quote></div>
    <p className="relationship-final-line">MOŻLIWOŚĆ ZACZYNA SIĘ TAM, GDZIE KOŃCZY SIĘ „NIE DA SIĘ”.</p>
  </section>

  <section className="relationship-section relationship-past">
    <div className="relationship-title-row"><span>10</span><h2>NIE KAŻDĄ HISTORIĘ<br/><em>TRZEBA KONTYNUOWAĆ.</em></h2></div>
    <div className="relationship-two-col"><div><p>Nie wszystko, co wydarzyło się w naszym życiu, możemy zmienić. Są słowa, których już nie cofniemy. Są decyzje, których konsekwencji nie da się wymazać. Są relacje, które zakończyły się mimo naszych starań.</p><p>Przeszłość jednak nie musi być miejscem, w którym spędzamy resztę życia. Możemy wyciągnąć z niej lekcję, zrozumieć własne wybory i zobaczyć, czego naprawdę potrzebujemy.</p><p>Nie oznacza to zapomnienia. Oznacza wolność wyboru. To moment, w którym przeszłość przestaje być wyrokiem, a staje się doświadczeniem, z którego możemy coś zabrać — i z czymś się pożegnać.</p></div><Panel number="ZOSTAW • ZABIERZ • WYBIERZ" title="TO, CO BYŁO, NIE MUSI DECYDOWAĆ O TYM, CO BĘDZIE."><p><strong>ZOSTAW</strong> to, czego nie możesz zmienić.</p><p><strong>ZABIERZ</strong> to, czego nauczyła Cię przeszłość.</p><p><strong>WYBIERZ</strong> to, jak chcesz żyć dalej.</p></Panel></div>
    <Quote author>Nie zmienisz wczoraj. Możesz zmienić jutro.</Quote>
  </section>

  <section className="relationship-section relationship-training">
    <div className="relationship-title-row"><span>11</span><h2>SUPERVISION<br/><em>MASTER TRAINING • GRAND MASTER</em></h2><p>ROZWÓJ PROFESJONALISTY • DOSKONALENIE WARSZTATU • PRZEKAZYWANIE WIEDZY</p></div>
    <div className="training-levels"><Panel number="01" title="SUPERVISION"><p>Profesjonalna analiza pracy coacha, sposobu prowadzenia procesu, doboru narzędzi, komunikacji z klientem oraz sytuacji wymagających szczególnej uważności.</p></Panel><Panel number="02" title="MASTER TRAINING"><p>Rozwój warsztatu poprzez uporządkowaną metodologię, praktyczne narzędzia oraz pracę na rzeczywistych mechanizmach występujących w relacjach.</p></Panel><Panel number="03" title="GRAND MASTER LEVEL"><p>Poziom dla najbardziej zaawansowanych praktyków — osób, które chcą nie tylko doskonalić własny warsztat, ale również rozwijać autorskie podejście, tworzyć rozwiązania i przekazywać wiedzę kolejnym profesjonalistom.</p></Panel></div>
    <Quote author>Prawdziwe mistrzostwo zaczyna się wtedy, gdy wiedza przestaje być tylko tym, co posiadasz — i staje się tym, co potrafisz świadomie przekazać dalej.</Quote>
  </section>

  <section className="relationship-section relationship-stress">
    <div className="relationship-title-row"><span>12</span><h2>STRES POWODUJE,<br/><em>ŻE WSZYSTKICH EFEKTÓW OCZEKUJEMY „NA JUŻ”.</em></h2></div>
    <div className="relationship-two-col"><div><p>Kiedy jesteśmy zestresowani, chcemy natychmiastowych rezultatów. Chcemy, żeby wszystko wydarzyło się szybko, żeby ludzie zrozumieli nas od razu, żeby sytuacje odmieniły się w jednej chwili.</p><p>Problem w tym, że życie nie działa w przyspieszonym tempie. Wszystko, co ma wartość, potrzebuje czasu, cierpliwości i wewnętrznego spokoju.</p><p>Pokora nie oznacza rezygnacji z marzeń. To świadomość, że są rzeczy, na które mamy wpływ, i są takie, które potrzebują czasu.</p></div><Quote>Gdy nauczymy się pokory, to zrozumiemy, że działając konsekwentnie krok po kroku, przyjdzie w odpowiednim momencie to, co powinno się wydarzyć.</Quote></div>
    <p className="relationship-final-line">POKORA NIE OSŁABIA.<br/><em>POKORA USTAWIA NAS NA WŁAŚCIWEJ DRODZE.</em></p>
  </section>

  <section className="relationship-section relationship-first-step">
    <div className="relationship-title-row"><span>13</span><h2>ODWAŻ SIĘ<br/><em>ZROBIĆ PIERWSZY KROK.</em></h2><p>NIE CZEKAJ NA IDEALNY MOMENT</p></div>
    <div className="relationship-two-col"><div><p>Nie zawsze będziesz wiedzieć, czy decyzja, którą podejmujesz, jest właściwa. Nie zawsze będziesz mieć pewność, że to dobry moment.</p><p>Czasem jednak największym błędem nie jest zła decyzja. Jest nim pozostawanie w miejscu tylko dlatego, że boisz się zrobić pierwszy krok.</p><p>Nie chodzi o to, żeby przestać się bać. Chodzi o to, żeby nie pozwolić, aby strach podejmował decyzje za Ciebie.</p></div><Quote>Nie musisz wiedzieć, dokąd prowadzi droga.<br/>Wystarczy, że zdecydujesz się ruszyć.</Quote></div>
    <p className="relationship-final-line">DECYZJA • DZIAŁANIE • DOŚWIADCZENIE • ZMIANA</p>
  </section>

  <section className="relationship-section relationship-maturity">
    <div className="relationship-title-row"><span>14</span><h2>NIE MUSISZ BYĆ<br/><em>ZROZUMIANY PRZEZ KAŻDEGO.</em></h2><p>AKCEPTACJA • GRANICE • ODWAGA • WŁASNA DROGA</p></div>
    <div className="relationship-two-col"><div><p>Z czasem zaczynamy rozumieć, że nie każda opinia zasługuje na naszą uwagę. Nie każdy musi nas rozumieć, akceptować ani zgadzać się z naszym sposobem życia.</p><p>Są ludzie, którzy będą oceniać nasze decyzje, podważać nasze wybory i przypisywać nam winę za rzeczy, za które nie jesteśmy odpowiedzialni.</p><p>I właśnie wtedy dojrzewamy naprawdę — kiedy przestajemy budować własną wartość na tym, jak widzą nas inni.</p><p>Możesz iść swoją drogą, nawet jeśli nie wszyscy ją zrozumieją. Potrzebujesz decyzji, żeby stworzyć własny dalszy ciąg.</p></div><Quote>Wolę, żeby nazywali mnie z pogardą straceńcem marzeń, niż z uśmiechem ich złodziejem.</Quote></div>
  </section>

  <section className="relationship-section relationship-audience">
    <div className="relationship-title-row"><span>15</span><h2>DLA KOGO?</h2><p>KAŻDA HISTORIA JEST INNA.</p></div>
    <div className="relationship-panels five">{audiences.map(([t,d],i)=><Panel key={t} number={String(i+1).padStart(2,'0')} title={t}><p>{d}</p></Panel>)}</div>
    <p className="relationship-centered-copy">Relacja może wymagać odbudowy. Może wymagać zmiany. Czasem może wymagać zakończenia. Rolą pracy nie jest narzucenie jednej odpowiedzi, lecz pomoc w świadomym zobaczeniu sytuacji.</p>
  </section>

  <section className="relationship-section relationship-contact">
    <div className="relationship-contact-grid"><div><span className="eyebrow">ANDRZEJ MIKULSKI</span><h2>RELATIONSHIP<br/><em>COACHING</em></h2><p>PROFESJONALNIE. EMPATYCZNIE. SKUTECZNIE.</p><p className="gold">ZMIENIAM RELACJE • ZMIENIAM ŻYCIE</p></div><div className="contact-details"><h3>KONTAKT</h3><p>518 873 940</p><p>grandmasterrelationshiptrainer@gmail.com</p><p><strong>STACJONARNIE</strong><br/>Całe województwo śląskie</p><p><strong>ONLINE</strong><br/>Cała Polska, Słowacja i Czechy</p><p><strong>JĘZYKI</strong><br/>Polski — ojczysty<br/>Słowacki — biegły<br/>Czeski — komunikatywny</p></div></div>
    <Quote author>Jeśli nie spróbujesz, nigdy nie dowiesz się, czy było warto.</Quote>
  </section>

  <section className="relationship-last-thought"><span className="eyebrow">18 / 18 · OSTATNIA MYŚL</span><h2>NIE MUSISZ BYĆ<br/><em>ZROZUMIANY PRZEZ KAŻDEGO.</em></h2><p>Dojrzałość zaczyna się tam, gdzie przestajesz potrzebować akceptacji wszystkich.</p><Quote>Dojrzałość emocjonalna oznacza, że rozumiesz już, że niektórzy ludzie będą Cię krytykować i obwiniać, choć to nie będzie Twoja wina. Niektórzy nie zrozumieją, co czujesz i nie będą szanowali Twoich granic. Niektórzy nigdy Cię nie polubią. Gdy to wiemy, łatwiej się żyje.</Quote><div className="relationship-footer-line">WIEDZA • DOŚWIADCZENIE • EMPATIA • STRATEGIA • TRANSFORMACJA</div></section>
</main>}
