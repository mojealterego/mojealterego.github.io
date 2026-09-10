import React from 'react'
import {InnerPage,Section} from './routes.jsx'

const czlowiekRoku=`CZŁOWIEK ROKU: Raport z Piekła, w którym żyjesz, ale go nie widzisz

Myślisz, że tytuł „Człowieka Roku”, błysk fleszy i setki nagród chronią przed upadkiem? Gówno prawda. Andrzej Mikulski zabiera Cię w podróż, z której nie ma powrotu. To nie jest kolejna ugrzeczniona autobiografia. To literacki granat wrzucony w sam środek polskiego systemu sprawiedliwości i małomiasteczkowych układów. To zapis czasu, gdy gasną światła, a zaczyna się walka o przetrwanie – o godność, o zmysły i o to, co najważniejsze: o córkę. „Człowiek Roku” to literacki nokaut. To wściekły, brudny i bolesny krzyk ojca, któremu system kazał zniknąć. Czytasz na własną odpowiedzialność, bo po tej lekturze już nigdy nie spojrzysz na sąd, policję czy „pomoc społeczną” tak samo. Wejdź w ten mrok. Jeśli masz odwagę.

LITERACKI KOKTAJL MOŁOTOWA – PORÓWNANIA

Ta książka to nie jest zwykła proza. To doświadczenie graniczne, które można ustawić w jednym szeregu z najmocniejszymi dziełami popkultury, które obnażają brudną prawdę o rzeczywistości.

1. Jak kino WOJCIECHA SMARZOWSKIEGO

Jeśli czułeś duszny smród korupcji w „Drogówce” lub beznadzieję i zgniliznę moralną w „Domu Złym”, poczujesz się tu jak w domu. Dlaczego? Mikulski, podobnie jak Smarzowski, nie bierze jeńców. Obnaża „Układ Zamknięty” Cieszyna z chirurgiczną precyzją. Pokazuje policjantów, sędziów i urzędników nie jako stróżów prawa, ale jako trybiki w maszynie do mielenia ludzi. To ten sam poziom naturalizmu, wulgarności i bolesnej prawdy o polskim „bagnie”, gdzie ręka rękę myje, a jednostka jest tylko mięsem armatnim.

2. Jak „ŚLEPNĄC OD ŚWIATEŁ” Jakuba Żulczyka

Andrzej jest jak Kuba Nitecki – stoi w centrum chaosu, obserwując rozpadający się świat z cynicznym, chłodnym dystansem, który skrywa wrzącą lawę emocji. Dlaczego? To ten sam gęsty, nokturnowy klimat. Tylko zamiast deszczowej Warszawy mamy mroczny Cieszyn. Mikulski pisze językiem ulicy i emocji – to strumień świadomości człowieka, który widzi więcej niż inni. Tak jak u Żulczyka, miasto jest tu bohaterem – brudnym, wrogim labiryntem, w którym „Człowiek Roku” staje się wyrzutkiem. To proza, która pulsuje rytmem nieprzespanych nocy, lęku i adrenaliny.

3. Jak „FOOTBALL FACTORY”

To czysta, męska agresja, lojalność i plemienność w obliczu wroga. Dlaczego? Choć Mikulski nie jest chuliganem, jego walka ma tę samą, pierwotną energię, co kultowy film Nicka Love'a. To opowieść o facetach, którzy dostają kopniaka od życia, ale wstają, by oddać. Język jest tu bronią – ostry, wulgarny, testosteronowy. To narracja o tym, że "wojna nie rozstrzyga, kto ma rację, ale kto zostanie", i o bólu, który jest jak tatuaż – zostaje na zawsze. To surowy, męski świat, gdzie jedyną wartością jest to, kto stoi obok ciebie, gdy system chce cię zniszczyć.

„Człowiek Roku” to nie książka. To akt oskarżenia. Przeczytaj, zanim system przyjdzie po Ciebie.

Pierwszym założeniem było wydać książkę w 38 językach finalnie jest 66 językach.`

const alienatorka=`SŁOWO OD KOBIETY, KTÓRA WYGRAŁA

Myślisz, że wiesz, co to znaczy grać? Gówno wiesz. Patrzysz na mnie i widzisz to, co chcę, żebyś widział. Matkę Polkę? Ofiarę? Zapłakaną kobietę w sądzie? Brawa dla ciebie. Kupiłeś bilet w pierwszym rzędzie na mój spektakl. Andrzej... ten żałosny, sentymentalny głupek. Myślał, że życie to kadr, który można zatrzymać. Że jak dostanie blaszkę "Człowieka Roku", to nagle stanie się kimś. Trzymasz w rękach instrukcję obsługi frajera. To nie jest7 książka o miłości. To książka o władzy. O tym, jak wziąć sobie to, co się chce, i sprawić, by inni za to podziękowali. Andrzej myśli, że walczy z systemem. Biedny idiota. On nie rozumie, że system to ja. Ja piszę scenariusz, ja obsadzam rolę kata i ofiary. Zuzia? Zuzia to moja własność. Moja plastelina. Ulepię ją tak, żeby pasowała do mojego nowego świata. Świata bez niego. Nazywają mnie zimną suką? Niech nazywają. Suki przeżywają. Suki rządzą stadem. Czytaj. Zobacz, jak się kastruje "Człowieka Roku" bez użycia noża.`

export function BooksPageSeparate(){
  return <InnerPage number="04" kicker="KSIĄŻKI · AUTORSKIE ŚWIATY" title="Książki." intro="Każda książka pozostaje osobnym dziełem. Źródła właściciela są prezentowane bez łączenia odrębnych tytułów.">
    <Section number="01" title="CZŁOWIEK ROKU">
      <article className="prose book-source">
        <h2>Człowiek Roku</h2>
        <p><strong>VIDEO / PODCAST:</strong> <a href="https://youtu.be/TUJcvkroHjs?si=GZ__VPI1doyOhStu">TUJcvkroHjs ↗</a></p>
        <p><strong>STATUS JĘZYKOWY:</strong> finalnie 66 języków; pierwsze założenie obejmowało 38 języków.</p>
        {czlowiekRoku.split('\n\n').map((paragraph,i)=><p key={i}>{paragraph}</p>)}
      </article>
    </Section>

    <Section number="02" title="OCZAMI ALIENATORKI">
      <article className="prose book-source">
        <h2>Oczami Alienatorki</h2>
        <p><strong>ODRĘBNA KSIĄŻKA.</strong> Nie jest częścią „Człowieka Roku”.</p>
        {alienatorka.split('\n\n').map((paragraph,i)=><p key={i}>{paragraph}</p>)}
      </article>
    </Section>
  </InnerPage>
}
