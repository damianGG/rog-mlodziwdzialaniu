export default function AboutProjectPage() {
    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: "relative",
                    backgroundPosition: "right",
                    backgroundImage: "url('/img/flaga-ue-tlo.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)"
                    }}
                />
                <div className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center" style={{ position: "relative", zIndex: 1 }}>
                    <h1 className="display-1 mb-3" style={{ color: "white" }}>O projekcie</h1>
                </div>
            </section>

            <div className="container mt-5 mb-15">
                <h2 className="display-6 mb-3">Cel projektu</h2>
                <p className="lead fs-lg">
                    Celem projektu jest wsparcie aktywnego włączenia społecznego oraz zwiększenie zdolności do zatrudnienia
                    52 osób (32 kobiet, 20 mężczyzn) w wieku 18–29 lat zagrożonych ubóstwem i wykluczeniem społecznym.
                </p>

                <h2 className="display-6 mt-8 mb-3">Grupa docelowa</h2>
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li><i className="uil uil-check" />osoby w wieku 18–29 lat,</li>
                    <li className="mt-2"><i className="uil uil-check" />osoby bezrobotne lub bierne zawodowo,</li>
                    <li className="mt-2"><i className="uil uil-check" />osoby zagrożone ubóstwem lub wykluczeniem społecznym,</li>
                    <li className="mt-2"><i className="uil uil-check" />mieszkańcy województwa łódzkiego.</li>
                </ul>

                <p className="lead fs-lg mt-6 mb-2">W projekcie przewidziano wsparcie dla:</p>
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li><i className="uil uil-check" />52 uczestników,</li>
                    <li className="mt-2"><i className="uil uil-check" />15 osób z niepełnosprawnościami,</li>
                    <li className="mt-2"><i className="uil uil-check" />15 osób długotrwale bezrobotnych.</li>
                </ul>

                <h2 className="display-6 mt-10 mb-4">Formy wsparcia</h2>
                <div className="row gy-6">
                    <div className="col-12">
                        <h4>1. Indywidualna Ścieżka Reintegracji (IŚR)</h4>
                        <ul>
                            <li>diagnoza sytuacji uczestnika,</li>
                            <li>4h doradztwa zawodowego,</li>
                            <li>2h wsparcia psychologicznego.</li>
                        </ul>

                        <h4>2. Poradnictwo psychologiczne</h4>
                        <ul>
                            <li>indywidualne wsparcie dla wszystkich uczestników,</li>
                            <li>pomoc w radzeniu sobie ze stresem i problemami życiowymi.</li>
                        </ul>

                        <h4>3. Poradnictwo prawne</h4>
                        <ul>
                            <li>dla 26 osób,</li>
                            <li>pomoc w sprawach zawodowych, rodzinnych i socjalnych.</li>
                        </ul>

                        <h4>4. Szkolenia i kursy zawodowe</h4>
                        <ul>
                            <li>dostosowane do potrzeb rynku pracy,</li>
                            <li>możliwość zdobycia kwalifikacji.</li>
                        </ul>

                        <h4>5. Pośrednictwo pracy</h4>
                        <ul>
                            <li>pomoc w znalezieniu zatrudnienia,</li>
                            <li>kontakt z pracodawcami.</li>
                        </ul>

                        <h4>6. Staże zawodowe</h4>
                        <ul>
                            <li>dla 26 uczestników,</li>
                            <li>zdobycie doświadczenia zawodowego.</li>
                        </ul>
                    </div>
                </div>

                <h2 className="display-6 mt-10 mb-3">Rezultaty projektu</h2>
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li><i className="uil uil-check" />min. 47 osób zdobędzie kwalifikacje,</li>
                    <li className="mt-2"><i className="uil uil-check" />min. 16 osób podejmie pracę,</li>
                    <li className="mt-2"><i className="uil uil-check" />min. 9 osób będzie aktywnie poszukiwać pracy,</li>
                    <li className="mt-2"><i className="uil uil-check" />min. 37 osób poprawi swoją sytuację społeczną.</li>
                </ul>
            </div>
        </>
    );
}
