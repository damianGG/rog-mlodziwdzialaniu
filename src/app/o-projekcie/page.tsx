import About6 from "@/components/blocks/about/About6Project";
import About6v2 from "@/components/blocks/about/About6v2";
import About6v3 from "@/components/blocks/about/About6v3";
import Image from "next/image";

export default function News() {
    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',
                    backgroundImage: "url('/img/flaga-ue-tlo.png')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                />
                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: 'white' }}>
                                O projekcie
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15" >
                <div className=" mt-4 mb-15">
                    <br />
                    <p className="mb-3 fw-bold lead fs-lg">Wartość projektu: 746 090,71zł </p>
                    <p className="mb-3 fw-bold lead fs-lg">Wysokość wkładu Funduszy Europejskich: 708 786,17 zł</p>
                    <br />

                    <p className="mb-3 fw-bold lead fs-lg">
                        Głównym celem projektu jest wsparcie aktywnego włączenia społecznego w celu
                        promowania równości szans, niedyskryminacji i aktywnego uczestnictwa oraz
                        zwiększenie zdolności do zatrudnienia w szczególności grup w niekorzystnej sytuacji,
                        tj. 52 osób (32K, 20M) zagrożonych ubóstwem i wykluczeniem społecznym oraz ich
                        otoczenia powyżej 29 roku życia, zamieszkujących na obszarze woj. łódzkiego w
                        rozumieniu KC w okresie 01.01.2025-31.01.2026.
                        <br />

                    </p>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/1 IŚR.webp"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <p className="display-6 mb-3">Udział w projekcie obejmuje następujące elementy:</p>

                        <p className="lead fs-lg">
                            Opracowanie wraz z podsumowaniem Indywidualnej Ścieżki
                            Reintegracji (IŚR) z uwzględnieniem diagnozy sytuacji problemowej,
                            zasobów, potencjału, predyspozycji, potrzeb uczestników projektu –
                            dla wszystkich Uczestników/czek projektu
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Uczestnik/czka wspólnie z doradcą zawodowym oraz psychologiem będzie
                                        uczestniczyć w przygotowaniu dla niego/niej Indywidualnej Ścieżki
                                        Reintegracji – zestawu kompleksowych, zindywidualizowanych i
                                        uzupełniających się form wsparcia, mających na celu wyprowadzenie z
                                        ubóstwa lub wykluczenia społecznego.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Na podstawie Indywidualnej Ścieżki Reintegracji i indywidualnej diagnozy
                                        dobierany będzie rodzaj wsparcia dla każdego/j Uczestnika/czki.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Na koniec wsparcia danego/j Uczestnika/czki nastąpi podsumowanie IŚR.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy/a Uczestnik/czka otrzyma 4 godz. zegarowe indywidualnych sesji z
                                        doradcą zawodowym oraz 2 godz. zegarowe indywidualnych sesji z
                                        psychologiem.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image

                                        src="/img/photos/2 Instrumenty aktywizacji społecznej.webp"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>
                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Poradnictwo specjalistyczne psychologiczne – dla wszystkich
                            Uczestników/czek projektu
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Celem poradnictwa będzie wsparcie Uczestników/czek w odzyskaniu
                                        równowagi emocjonalnej i zmotywowanie do podjęcia zmian w swoim życiu,
                                        jak również wyposażenie w nowe umiejętności społeczne, w tym asertywność
                                        i komunikację.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparcie będzie dostosowane do sytuacji danego/j Uczestnika/czki i dobrane
                                        zostaną najbardziej adekwatne działania do zdiagnozowanych potrzeb.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Po rozeznaniu się w dokładnej sytuacji Uczestnika/czki psycholog wykona
                                        testy czy analizy, udzieli rad, wskazówek i podpowiedzi umożliwiających
                                        wyjście z trudnej sytuacji społeczno-zawodowej.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Dzięki pracy z psychologiem Uczestnicy/czki odreagują napięcie/stres
                                        związane z trudnościami, będą mogli/ły rozpoznać i zrozumieć swoje
                                        problemy, wspólnie poszukają ich źródła, a także sposobów ich rozwiązania,
                                        odzyskają wpływ na kształtowanie swojego życia i uwierzą we własne siły, a
                                        także zostaną ustalone cele i sposoby działania w sytuacjach kryzysowych.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy/a Uczestnik/czka projektu otrzyma 2 godz. zegarowe wsparcia.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6">
                        <h2 className="display-4 mb-3"></h2>
                        <p className="lead fs-lg">
                            Indywidualne specjalistyczne poradnictwo prawne - dla połowy
                            Uczestników/czek projektu
                        </p>
                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Celem wsparcia będzie udzielenie Uczestnikom/czkom projektu porad
                                        prawnych dot. m.in. prawa pracy, cywilnego i rodzinnego, rozwiązywania
                                        spraw mieszkaniowych, socjalnych i alimentacyjnych, udzielania informacji o
                                        możliwości korzystania ze świadczeń z pomocy społecznej i innych rozwiązań
                                        ustaw. oraz udzielenie pomocy w pisaniu pism/wniosków do urzędów.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" />
                                        Poradnictwo wesprze Uczestników/czki w rozwiązywaniu problemów
                                        prawnych, determinujących ich wykluczenie społeczne i ubóstwo. Konsultacje
                                        z prawnikiem pomogą osobom wykluczonym i zagrożonym ubóstwem nabyć
                                        wiedzę w zakresie przysługujących im praw i obowiązków.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" />
                                        Spotkania z prawnikiem przewidziano dla 26 Uczestników/czek projektu - śr. 2
                                        godz. zegarowe dla Uczestnika/czki.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 position-relative">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/3 Warsztaty rozwoju osobistego.webp"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>


                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image

                                        src="/img/photos/5 Kursy i szkolenia zawodowe.webp"

                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Kursy i szkolenia zawodowe – dla wszystkich Uczestników/czek
                            projektu
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Celem kursów i szkoleń będzie zdobycie kompetencji lub kwalifikacji
                                        zawodowych. Tematyka szkoleń będzie zgodna ze zdiagnozowanymi
                                        potrzebami i potencjałem Uczestników/czek projektu oraz ze
                                        zdiagnozowanymi potrzebami na rynku pracy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Szkolenia umożliwią Uczestnikom/czkom zdobycie zatrudnienia i polepszenie
                                        swojej sytuacji społecznej i zawodowej.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Średnia liczba godzin kursu wyniesie 120 godzin dydaktycznych.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Dla 20 Uczestników/czek projektu zaplanowano egzamin zewnętrzny.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W czasie realizacji szkoleń Uczestnikom/czkom projektu przysługuje catering,
                                        stypendium szkoleniowe oraz w razie potrzeby zwroty kosztów dojazdu oraz
                                        opieki nad dzieckiem/osobą zależną.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image

                                        src="/img/photos/4 Instrumenty aktywizacji zawodowej.webp"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Pośrednictwo pracy – dla wszystkich Uczestników/czek projektu
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Celem wsparcia będzie udzielenie Uczestnikom/czkom projektu pozostającym
                                        bez pracy pomocy w uzyskaniu odpowiedniego zatrudnienia oraz
                                        pracodawcom w pozyskaniu pracowników o poszukiwanych kwalifikacjach
                                        zawodowych.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach pośrednictwa pracy pośrednik zbierze niezbędne informacje o
                                        Uczestnikach/czkach, pozyska oferty pracy i udzieli pracodawcom informacji o
                                        kandydatach do pracy. Wspólnie z Uczestnikami/czkami przeanalizuje oferty
                                        pracy, poinformuje o aktualnej sytuacji i przewidywanych zmianach na
                                        regionalnym i lokalnym rynku pracy, zainicjuje i zorganizuje kontakty
                                        Uczestników/czek projektu z pracodawcami oraz poinformuje
                                        Uczestników/czki o przysługujących im prawach i obowiązkach.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Dzięki pracy pośrednika z Uczestnikiem/czką projektu zdefiniowany zostanie
                                        cel, zakres działań oraz termin realizacji poszukiwań właściwych ofert pracy.                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy/a Uczestnik/czka projektu otrzyma 2 godz. zegarowe wsparcia.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/6 Staże zawodowe.webp"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Staże zawodowe – dla 21 Uczestników/czek projektu
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Celem staży będzie polepszenie umiejętności praktycznych przez
                                        Uczestników/czki projektu oraz zdobycie doświadczenia zawodowego na
                                        stanowisku związanym z tematyką szkolenia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Czas pracy Uczestnika/czki odbywającego/j staż będzie trwał 8 godzin na
                                        dobę (40 godzin tygodniowo), a w przypadku osoby z niepełnosprawnością (w
                                        stopniu znacznym lub umiarkowanym) 7 godzin na dobę (35 godzin
                                        tygodniowo), każdorazowo przez okres 3 miesięcy.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Staże będą odbywać się firmach zlokalizowanych możliwie najbliżej miejsc
                                        zamieszkania Uczestników/czek projektu na stanowiskach w zakresie jakich
                                        Uczestnik/czka projektu zdobył/a kwalifikacje/kompetencje zgodnie z
                                        ustalonym programem stażu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestnicy/czki projektu mogą ubiegać się o zwrot
                                        kosztów opieki nad dzieckiem/osobą zależną.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/7 Mentoring i zatrudnienie wspomagane.webp"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Mentoring, zatrudnienie wspomagane
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparcie będzie przeznaczone dla osób, które podejmą zatrudnienie, a z ich
                                        IŚR będzie wynikała konieczność objęcia tego typu wsparciem.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Celem wsparcia będzie pomoc Uczestnikowi/czce w utrzymaniu zatrudnienia.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparcie świadczone będzie w miejscu pracy danego Uczestnika/czki
                                        projektu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Mentoring będzie polegał na wsparciu Uczestnika/czki projektu przez mentora
                                        w radzeniu sobie ze zmianami i z nową sytuacją zawodową. Mentor będzie
                                        pomagał Uczestnikowi/czce w wykorzystaniu jego/jej potencjału w nowym
                                        miejscu pracy. Rolą mentora będzie motywowanie Uczestnika/czki do
                                        działania, pomoc we wdrożeniu się w nowe miejsce pracy oraz
                                        ukierunkowanie na działania na określony cel. Wsparciem zostanie objętych
                                        14 Uczestników/czek w wymiarze śr. 8 godz. zegarowych na osobę.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Zatrudnienie wspomagane będzie skierowane do osób z
                                        niepełnosprawnością, które podejmą zatrudnienie. Zakłada ono indywidualną
                                        pracę trenera pracy z osobą z niepełnosprawnością przy maksymalnym jej

                                        włączeniu w całość procesu decyzyjnego dotyczącego zatrudnienia. Oznacza
                                        to pomoc trenera począwszy od przygotowania do pracy, aż do wsparcia w
                                        miejscu pracy (adaptacja na nowym stanowisku pracy), jak również dalszy
                                        monitoring. Wsparciem zostanie objętych 12 Uczestników/czek z
                                        niepełnosprawnością w wymiarze śr. 12 godz. zegarowych na osobę.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/uslugi-zdrowotne.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Usługi zdrowotne
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestnik/czka projektu będzie miał/a możliwość
                                        skorzystania ze sfinansowania usługi zdrowotnej np. wizyty u dietetyka,
                                        fizjoterapeuty, konsultacji medycznej ukierunkowanej na przeciwdziałanie
                                        powstawaniu chorób czy konsultacji psychiatrycznej wspierającej wyjście z
                                        depresji, zaburzeń depresyjnych, czy uzależnienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Objęcie wsparciem będzie wynikało z IŚR danego Uczestnika/czki projektu.
                                        Usługa będzie dobierana indywidualnie dla danej osoby i będzie wynikała z
                                        jego/jej potrzeb zdrowotnych.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 12 Uczestników/czek.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

