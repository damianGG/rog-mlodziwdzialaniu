

// CUSTOM DATA
import { aboutList2 } from "@/data/about";
import Image from "next/image";
import dietetykPhoto from "/public/img/photos/dietetyk.webp";

export default function About6v2() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      <div className="col-lg-6 position-relative order-lg-1">

        <div className="overlap-grid overlap-grid-2">

          <div>
            <figure className="rounded shadow">
              <Image
                src={dietetykPhoto}
                width={8}
                height={1000}
                alt="hero"
              />
            </figure>
          </div>
          <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

        </div>
      </div>

      <div className="col-lg-6">


        <h2 className="display-4 mb-3">Modułowe kształcenie</h2>

        <p className="lead fs-lg">
          Diagnoza sytuacji Uczestniczki projektu na rynku pracy zgodnie z założeniami dotyczącymi narzędzia Indywidualny Plan Działania opisanego w ustawie o promocji zatrudnienia i instytucjach rynku pracy
        </p>

        <div className="row gy-3 gx-xl-8">
          <div className="col-xl-12">
            <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
              <li>
                <i className="uil uil-check" /> Celem wsparcia jest identyfikacja potrzeb Uczestniczki projektu, w tym m.in. poprzez diagnozowanie potrzeb szkoleniowych lub walidacyjnych (potwierdzanie nabytych wcześniej kwalifikacji i kompetencji), możliwości doskonalenia zawodowego oraz poprzez opracowanie lub aktualizację IPD dla każdej Uczestniczki projektu.
              </li>
              <li className="mt-3">
                <i className="uil uil-check" /> Dzięki opracowaniu IPD każda z Uczestniczek projektu otrzyma ofertę wsparcia, obejmującą takie formy pomocy, które zostaną zidentyfikowane u niej jako niezbędne w celu poprawy sytuacji na rynku pracy lub uzyskania zatrudnienia.
              </li>
              <li className="mt-3">
                <i className="uil uil-check" /> W trakcie spotkania zostanie przeprowadzona diagnoza/ocena umiejętności cyfrowych z wykorzystaniem „Europejskiego narzędzia do oceny poziomu kompetencji cyfrowych”. W zależności od jego wyniku Uczestniczka zostanie lub nie zostanie zakwalifikowana do udziału w szkoleniu z zakresu kompetencji cyfrowych.
              </li>
              <li className="mt-3">
                <i className="uil uil-check" /> Każdy Uczestniczka projektu otrzyma śr. 5 godz. zegarowych wsparcia.
              </li>
              <li className="mt-3">
                <i className="uil uil-check" /> Wsparciem zostaną objęte 72 Uczestniczki.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
