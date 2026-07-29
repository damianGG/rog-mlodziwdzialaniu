import Link from 'next/link';
import type { Metadata } from 'next';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { aktualnosci } from '@/data/aktualnosci';
import './style.css';

export const metadata: Metadata = {
  title: 'Aktualności o projekcie',
  description: 'Aktualności o projekcie',
};

function createSlug(text: string): string {
  const polishChars: { [key: string]: string } = {
    ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z',
    Ą: 'a', Ć: 'c', Ę: 'e', Ł: 'l', Ń: 'n', Ó: 'o', Ś: 's', Ź: 'z', Ż: 'z',
  };

  return text
    .split('')
    .map((char) => polishChars[char] || char)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function NewsPage() {
  const sortedData = [...aktualnosci].sort(
    (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
  );

  return (
    <>
      <section
        className="wrapper"
        style={{
          position: 'relative',
          backgroundPosition: 'right',
          backgroundImage: "url('/img/flaga-ue-tlo.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
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
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
        <div
          className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
              <h1 className="display-1 mb-3" style={{ color: 'white' }}>
                Aktualności
              </h1>
              <p className="lead px-xxl-10"></p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5 mb-5">
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

      <div className="container mb-15">
        <div className="row gx-0 gx-md-3 gx-xl-8 gy-8 align-items-center">
          {sortedData.length > 0 ? (
            sortedData.map((article) => {
              const slug = createSlug(article.tytul);
              const articleUrl = `/aktualnosci/${article.id}-${slug}`;

              return (
                <div className="col-md-4" key={article.id}>
                  <Link href={articleUrl}>
                    <div className="card news-card">
                      <div className="card-body">
                        <div className="post-header">
                          <h2 className="post-title h3 mt-1 mb-3">{article.tytul}</h2>
                        </div>
                        <div className="post-content">
                          <p>{article.podtytul}</p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <ul className="post-meta d-flex mb-0">
                          <li className="post-date">
                            <i className="uil uil-calendar-alt"></i>
                            <span>{format(new Date(article.data), 'dd MMMM yyyy', { locale: pl })}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center">
              <p>Brak dostępnych aktualności.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
