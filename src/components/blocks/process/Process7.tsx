import { ProcessList1 } from "@/components/reuseable/process-list";
import DownloadList from "@/components/reuseable/process-list/DownloadList";
import { doPobrania2, processList1 } from "@/data/process";
import { doPobrania } from "@/data/process";
import Link from "next/link";
const backendLink = process.env.STRAPI_PUBLIC_BACKEND_LINK;

// Definicje interfejsów
interface FileData {
  attributes: {
    url: string;
  };
}

interface OptionalFile {
  data?: FileData[];
}

interface DocumentAttributes {
  tytul: string;
  kolorowy?: OptionalFile;
  czarnobialy?: OptionalFile;
}

interface DocumentItem {
  id: number;
  attributes: DocumentAttributes;
}

interface StrapiResponse {
  data: DocumentItem[];
}

export async function getStrapiData() {
  try {
    const response = await fetch(`${backendLink}/api/lsi-dokumenties?sort=rank:asc&populate=*`, {
      method: 'GET',
      cache: "no-store",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BEARER_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return { data: [] }; // Zwraca pustą tablicę danych zamiast null
  }
}

export default async function Process7() {
  const dataFromStrapi = await getStrapiData();
  const data = dataFromStrapi?.data || [];

  return (
    <>
      <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
        <div className="row mb-5">
          <div className="col-md-12 col-xl-12 col-xxl-12 mx-auto text-center">
            <h2 className="display-4 mb-4 px-lg-10">KTO MOŻE WZIĄĆ UDZIAŁ W PROJEKCIE? <br></br></h2>
            <p className="mt-3">W
              projekcie mogą uczestniczyć osoby, które spełniają następujące
              kryteria</p>
            <div className="col-lg-12 order-lg-2 flex flex-col items-center gap-4 mx-auto " >
              {processList1.map((item) => (
                <ProcessList1 {...item} key={item.no} />
              ))}



            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <p className="lead fs-lg pe-lg-5 mt-10">
            Rekrutacja realizowana będzie z uwzględnieniem zasady równych szans i płci oraz
            niedyskryminacji, w tym dostępności dla osób z niepełnosprawnościami. Przy rekrutacji
            stosowane będą także zasady zrównoważonego rozwoju.
          </p>
          <br />
          <p className="lead fs-lg pe-lg-5 mt-10">
            Do wzięcia udziału w projekcie zapraszamy wszystkich chętnych
            spełniających wyżej wymienione kryteria, a w szczególności zapraszamy
            kobiety, osoby z niepełnosprawnościami oraz osoby długotrwale
            bezrobotne.

          </p>

          <br />
          <p className="lead fs-lg pe-lg-5 mt-10">
            <strong>
              Istnieje możliwość skorzystania z tłumacza języka migowego lub pomocy asystenta osoby z
              niepełnosprawnością, a także możliwość wejścia z psem asystującym.
            </strong>

          </p>


        </div>
        {/* <div>
          <p className="lead fs-lg pe-lg-5 mt-10"> Rekrutacja realizowana będzie z uwzględnieniem zasady równych szans i płci oraz niedyskryminacji, w tym dostępności dla osób z niepełnosprawnościami. Przy rekrutacji stosowane będą także zasady zrównoważonego rozwoju.</p>
        </div> */}

      </div >
      <div className="container pt-10 pt-md-10 pb-13 pb-md-15">
        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
            <h2 className="display-4 mb-4 px-lg-14">Jak zgłosić się do projektu?</h2>
            <p>Komplet dokumentów rekrutacyjnych można składać osobiście w Biurze projektu bądź
              przesyłać je listownie lub e-mailem. </p>
            <p className="display-4 mb-4 px-lg-14">Na komplet dokumentów rekrutacyjnych składa się:</p>
            <div className="col-lg-12 order-lg-2">
              <div className="shadow-lg mt-10">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">1</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-start">Wydrukuj formularz rekrutacyjny – załącznik nr 1 do Regulaminu
                        rekrutacji i uczestnictwa w projekcie oraz załącznik nr 2 Ankieta
                        motywacji do zmiany sytuacji społeczno-zawodowej).</h4>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                </svg>
              </div>
              <div className="shadow-lg mt-10">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">2</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-start">
                        Wybierz z Zakładu Ubezpieczeń Społecznych lub Powiatowego Urzędu
                        Pracy wymagane zaświadczenie.
                      </h4>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                </svg>
              </div>
              <div className="shadow-lg mt-10">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">3</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-start ">Zgromadź dokumenty potwierdzające status osoby zagrożonej ubóstwem
                        lub wykluczeniem społecznym oraz pozostałe wymagane załączniki.</h4>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                </svg>
              </div>
              <div className="shadow-lg mt-10">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">4</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-start ">Kopia dokumentu potwierdzającego obywatelstwo tj. np. paszport, wiza,
                        karta stałego/czasowego pobytu (w przypadku braku polskiego
                        obywatelstwa).</h4>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                </svg>
              </div>
              <div className="shadow-lg mt-10">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">5</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-start ">Dokument potwierdzający miejsce zamieszkania na terenie województwa
                        łódzkiego (np. zaświadczenie z Urzędu Miasta/Gminy lub deklaracja za
                        śmieci lub akt własności lokalu mieszkalnego lub umowa najmu lokalu
                        mieszkalnego lub PIT lub faktura np. za telefon (gdzie wskazany jest
                        adresem miejsca zamieszkania) lub w przypadku osób pobierających np. 800
                        plus lub bon żłobkowy lub świadczenia z rodzinnego kapitału opiekuńczego
                        - decyzji wydanej w tej sprawie gdzie wskazano adres miejsca
                        zamieszkania wnioskodawcy lub dokument z ZUS potwierdzający zgłoszenie
                        do ubezpieczeń i miejsce zamieszkania Uczestniczka/czki projektu).</h4>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                </svg>
              </div>
              <div className="shadow-lg mt-10">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">6</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-start ">Orzeczenie o stopniu niepełnosprawności w rozumieniu ustawy z dnia 27
                        sierpnia 1997 r. o rehabilitacji zawodowej i społecznej oraz
                        zatrudnianiu osób niepełnosprawnych (Dz. U. z 2023 r. poz. 100, z późn.
                        zm.) lub orzeczenia albo innego dokumentu, o którym mowa w ustawie z
                        dnia 19 sierpnia 1994 o ochronie zdrowia psychicznego (Dz. U. z 2022 r.
                        poz. 2123)(jeśli dotyczy).</h4>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="shadow-lg mt-10">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">6</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-start ">Klauzula informacyjna Instytucji Pośredniczącej - załącznik nr 3 do Regulaminu
                        rekrutacji i uczestnictwa w projekcie.</h4>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="text-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                </svg>
              </div> */}
              {/* <div className="shadow-lg mt-10">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">4</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-start">Złóż komplet dokumentów osobiście lub za pośrednictwem osoby trzeciej do Biura
                        projektu bądź prześlij je e-mailem/pocztą tradycyjną/kurierem na adres Biura
                        projektu/email (patrz zakładka <a href="/kontakt">„Kontakt”</a> )</h4>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="text-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                </svg>
              </div> */}
              {/* <div className="shadow-lg mt-10 mb-10">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">5</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-start">Skontaktujemy się z Tobą telefonicznie lub mailowo, żeby poinformować o
                        zakwalifikowaniu do projektu.</h4>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* Reszta kroków */}
            </div>
          </div>
        </div>
        <p className="text-center mt-5">Aby uzyskać więcej informacji prosimy o kontakt z Biurem projektu – dane w zakładce
          <a href="/kontakt">„Kontakt”</a></p>
        {/* <p className="text-center mt-5">
          Jeśli potrzebujesz pomocy w wypełnieniu dokumentów rekrutacyjnych zapraszamy
          do Biura projektu (patrz zakładka <a href="/kontakt">„Kontakt”</a> ).Ponadto zapewniamy
          możliwość skorzystania z tłumacza języka migowego, pętli indukcyjnej lub pomocy
          asystenta osoby z niepełnosprawnością. Dla osób, które mają problem z dojazdem
          do Biura projektu (np. osoby z niepełnosprawnościami) możliwy jest dojazd do
          Kandydatów/ek do domu i pomoc kadry projektu w wypełnieniu dokumentów
          rekrutacyjnych.
        </p> */}

      </div>
      <div className="container pt-10 pt-md-10 pb-13 pb-md-15">
        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
            <h2 className="display-4 mb-10 px-lg-14">Dokumenty do pobrania</h2>
            <div className="d-flex flex-column align-items-start">
              <p>
                <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                  <span className="number"><i className="uil uil-file-download fs-40"></i></span>
                </span>
                - pobrania pliku w wersji kolorowej
              </p>
              <p>
                <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4" style={{ backgroundColor: "white" }}>
                  <span className="number" style={{ color: "black" }}><i className="uil uil-file-download fs-40"></i></span>
                </span>
                - pobrania pliku w wersji czarno-białej
              </p>
            </div>
            <p>Prosimy o drukowanie dokumentów rekrutacyjnych w kolorze.
              Wersja czarno-biała dotyczy sytuacji braku możliwości wydruku w kolorze.</p>
            {/* Sprawdź, czy dane są puste */}
            {data.length === 0 ? (
              <p className="text-danger">Wkrótce pojawią się tutaj dokumenty do pobrania</p>
            ) : (
              <div className="col-lg-12 order-lg-2">
                {/* Iteruj po dokumentach */}
                {data.map((item: any) => {
                  const kolorowyUrl = item.attributes.kolorowy?.data?.[0]?.attributes?.url || '';
                  const czarnobialyUrl = item.attributes.czarnobialy?.data?.attributes?.url || '';

                  // Sprawdź liczbę dostępnych plików i wyświetl odpowiednie przyciski
                  return (
                    <DownloadList
                      key={item.id}
                      title={item.attributes.tytul}
                      link1={kolorowyUrl}
                      link2={czarnobialyUrl}
                      className="mb-5"
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <p className="text-center mt-5">Aby uzyskać więcej informacji prosimy o kontakt z Biurem projektu - dane w zakładce <Link href="/kontakt" className="link-primary">„Kontakt”.</Link> </p>
      </div>
    </>
  );
}