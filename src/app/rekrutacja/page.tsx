
import Process7 from "@/components/blocks/process/Process7";
import { listRecruitmentDocuments } from "@/lib/recruitment-documents";



export const dynamic = "force-dynamic"

export default async function News() {
    const documents = await listRecruitmentDocuments();
    const blackAndWhiteDocuments = documents.filter((document) => document.category === "czarno-biale");
    const colourDocuments = documents.filter((document) => document.category === "kolor");

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
                                Rekrutacja
                            </h1>
                            <p className="lead px-xxl-10" style={{ color: 'white' }}>Sprawdź jak wygląda proces rekrutacji</p>
                        </div>
                    </div>
                </div>
            </section>
            <Process7 />
            {(blackAndWhiteDocuments.length > 0 || colourDocuments.length > 0) && (
                <section className="wrapper bg-light">
                    <div className="container py-12 py-md-14">
                        <div className="row">
                            <div className="col-lg-10 mx-auto text-center">
                                <h2 className="display-4 mb-8">Dokumenty rekrutacyjne do pobrania</h2>
                            </div>
                        </div>
                        <div className="row g-4">
                            {[
                                { title: "Dokumenty czarno-białe", documents: blackAndWhiteDocuments },
                                { title: "Dokumenty kolorowe", documents: colourDocuments },
                            ].map(({ title, documents: categoryDocuments }) => categoryDocuments.length > 0 && (
                                <div className="col-md-6" key={title}>
                                    <div className="card shadow-sm h-100">
                                        <div className="card-body">
                                            <h3 className="h4 mb-3">{title}</h3>
                                            <ul className="icon-list mb-0">
                                                {categoryDocuments.map((document) => (
                                                    <li key={document.url} className="mb-2">
                                                        <i className="uil uil-file-download me-2" />
                                                        <a href={document.url} target="_blank" rel="noreferrer">
                                                            {document.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};
