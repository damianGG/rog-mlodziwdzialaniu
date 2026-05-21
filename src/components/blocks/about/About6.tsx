export default function About6() {
    return (
        <div className="container pt-5 pt-md-5 pb-13 pb-md-15 mb-n14 mb-md-n17" style={{ maxWidth: "56rem" }} data-bs-theme="dark">
            <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center">
                <div className="col-lg-12">
                    <h2 className="display-4 mb-3 text-center mb-10">Krótki opis projektu</h2>

                    <p className="lead fs-lg">
                        Projekt skierowany jest do młodych osób w wieku 18–29 lat zagrożonych ubóstwem i wykluczeniem społecznym
                        z województwa łódzkiego. Oferuje kompleksowe wsparcie społeczne i zawodowe zwiększające szanse na zatrudnienie.
                    </p>

                    <p className="lead fs-lg mt-5">W ramach projektu oferujemy:</p>
                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                        <li><i className="uil uil-check" />indywidualne doradztwo zawodowe i psychologiczne,</li>
                        <li className="mt-3"><i className="uil uil-check" />bezpłatne szkolenia zawodowe,</li>
                        <li className="mt-3"><i className="uil uil-check" />staże zawodowe,</li>
                        <li className="mt-3"><i className="uil uil-check" />pomoc w znalezieniu pracy,</li>
                        <li className="mt-3"><i className="uil uil-check" />wsparcie prawne,</li>
                        <li className="mt-3"><i className="uil uil-check" />możliwość zdobycia kwalifikacji.</li>
                    </ul>

                    <h4 className="lead fs-lg mt-5">Udział w projekcie jest bezpłatny.</h4>
                </div>
            </div>
        </div>
    );
}
