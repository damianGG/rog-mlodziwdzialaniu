import Link from "next/link";

export default function NewsPage() {
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
                    <h1 className="display-1 mb-3" style={{ color: "white" }}>Aktualności</h1>
                </div>
            </section>

            <div className="container mt-5 mb-15">
                <div className="card shadow-lg">
                    <div className="card-body p-8">
                        <h2 className="h2 mb-4">Rusza nabór do projektu „Moc Możliwości – Młodzi w Działaniu!”</h2>
                        <p>
                            Zapraszamy osoby w wieku 18–29 lat z województwa łódzkiego do udziału w projekcie.
                        </p>

                        <p className="fw-bold mt-4 mb-2">Oferujemy:</p>
                        <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li><i className="uil uil-check" />indywidualne doradztwo zawodowe i psychologiczne,</li>
                            <li className="mt-2"><i className="uil uil-check" />bezpłatne szkolenia zawodowe,</li>
                            <li className="mt-2"><i className="uil uil-check" />staże zawodowe,</li>
                            <li className="mt-2"><i className="uil uil-check" />pomoc w znalezieniu pracy,</li>
                            <li className="mt-2"><i className="uil uil-check" />wsparcie prawne,</li>
                            <li className="mt-2"><i className="uil uil-check" />możliwość zdobycia kwalifikacji.</li>
                        </ul>

                        <p className="mt-4">Udział w projekcie jest bezpłatny.</p>

                        <div className="mt-5">
                            <Link href="/rekrutacja" className="btn btn-primary rounded-pill">
                                Więcej o naborze do projektu „Moc Możliwości – Młodzi w Działaniu!”
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
