import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { getAktualnoscBySlug } from '@/lib/aktualnosci-repo';
import DownloadElement from '@/components/reuseable/process-list/DownloadElement';
import '../style.css';

export const revalidate = 0;

export default async function BlogDetailsTemplate({ params }: { params: { slug: string } }) {
  const article = await getAktualnoscBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const formattedDate = format(new Date(article.data), 'dd MMMM yyyy', { locale: pl });

  return (
    <>
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-xl-8 mx-auto">
              <div className="post-header">
                <div className="post-category text-line" />
                <h1 className="display-1 mb-4">{article.tytul}</h1>
                <ul className="post-meta mb-5">
                  <li className="post-date">
                    <i className="uil uil-calendar-alt" />
                    <span>{formattedDate}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light">
        <div className="container pb-14 pb-md-16">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="blog single mt-n17">
                <div className="card">
                  <div className="card-body">
                    <div className="classic-view">
                      <article className="post">
                        <div className="post-content mb-5">
                          {article.opis.split('\n\n').map((paragraph, index) => (
                            <p className="mt-3 mb-3" key={index}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        {article.pliki?.length ? (
                          <div className="d-flex flex-column gap-3">
                            {article.pliki.map((plik) => (
                              <DownloadElement key={plik.url} title={plik.nazwa} link1={plik.url} />
                            ))}
                          </div>
                        ) : null}
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
