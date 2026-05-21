import Link from "next/link";
import { slideInDownAnimate, zoomInAnimate } from "@/utils/animation";
import Image from "next/image";

export default function Hero4() {
    return (
        <section className="wrapper bg-light">
            <div className="container pt-8 pt-md-14">
                <div className="row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 mb-7 mb-md-10 mb-lg-16 align-items-center">
                    <div
                        className="col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative order-lg-2"
                        style={zoomInAnimate("0ms")}
                    >
                        <div className="shape bg-dot primary rellax w-17 h-19" style={{ top: "-1.7rem", left: "-1.5rem" }} />
                        <div
                            className="shape rounded bg-soft-primary rellax d-md-block"
                            style={{ width: "85%", height: "90%", right: "-0.8rem", bottom: "-1.8rem" }}
                        />
                        <figure className="rounded">
                            <Image
                                src="/img/photos/zdjecie_lodzkie.jpg"
                                width="400"
                                height="300"
                                alt="Moc Możliwości – Młodzi w Działaniu"
                            />
                        </figure>
                    </div>

                    <div className="col-lg-5 mt-lg-n10 text-center text-lg-start">
                        <h1 className="display-1 mb-5 fs-40" style={slideInDownAnimate("600ms")}>
                            Moc Możliwości – Młodzi w Działaniu!
                        </h1>

                        <h4>Okres realizacji: 01.05.2026 r. – 30.04.2027 r.</h4>

                        <p className="lead fs-lg mt-4">
                            Projekt skierowany jest do młodych osób w wieku 18–29 lat zagrożonych ubóstwem i wykluczeniem społecznym
                            z województwa łódzkiego. Oferuje kompleksowe wsparcie społeczne i zawodowe zwiększające szanse na zatrudnienie.
                        </p>

                        <div className="d-flex justify-content-center justify-content-lg-start flex-wrap gap-2 mt-3">
                            <span>
                                <Link href="/aktualnosci" className="btn btn-lg btn-primary rounded-pill me-2">
                                    Aktualności
                                </Link>
                            </span>
                            <span>
                                <Link href="/rekrutacja" className="btn btn-lg btn-primary rounded-pill">
                                    Rekrutacja
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
