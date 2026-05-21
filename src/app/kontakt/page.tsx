import Link from "next/link";

export default function Kontakt() {
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
                    <h1 className="display-1 mb-3" style={{ color: "white" }}>Kontakt</h1>
                </div>
            </section>

            <div className="container mt-5 mb-15">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="card shadow-lg mb-6">
                            <div className="card-body p-6">
                                <h2 className="h3 mb-3">Biuro projektu (Rzeszów)</h2>
                                <p className="mb-1"><strong>Adres:</strong> Rzeszów, ul. Kazimierza Pułaskiego 9A</p>
                                <p className="mb-1"><strong>Tel:</strong> +48 786 444 815</p>
                                <p className="mb-0"><strong>E-mail:</strong> <a href="mailto:rogszkolenia@gmail.com">rogszkolenia@gmail.com</a></p>
                            </div>
                        </div>

                        <div className="card shadow-lg">
                            <div className="card-body p-6">
                                <h2 className="h3 mb-3">Biuro Projektu</h2>
                                <p className="mb-1"><strong>Adres:</strong> Aleja Niepodległości 4 lok. 204, 96-100 Skierniewice</p>
                                <p className="mb-1">Biuro projektu czynne jest od poniedziałku do piątku w godzinach 8:00 - 16:00</p>
                                <p className="mb-3">(istnieje możliwość umówienia się na inne godziny spotkania)</p>
                                <p className="mb-1"><strong>Tel:</strong> +48 786 444 815</p>
                                <p className="mb-0"><strong>E-mail:</strong> <a href="mailto:strefaintegracji@rogszkolenia.pl">strefaintegracji@rogszkolenia.pl</a></p>
                            </div>
                        </div>

                        <div className="text-center mt-6">
                            <Link
                                href="https://www.facebook.com/search/top/?q=%23funduszeue%20%23FunduszeEuropejskie"
                                className="link-primary"
                                target="_blank"
                            >
                                #FunduszeUE #FunduszeEuropejskie
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
