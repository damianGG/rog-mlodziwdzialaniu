import Link from "next/link";
import Image from "next/image";

// GLOBAL CUSTOM COMPONENTS


// ======================================================
interface BlogCard4Props {
  date: string;
  image: string;
  title: string;
  category: string;
  className?: string;
  description: string;
}
// ======================================================

export default function BlogCard4(props: BlogCard4Props) {
  const { date, image, title, category, description, className = "card" } = props;

  return (
    <article>
      <div className={className}>
        <figure className="card-img-top overlay overlay-1 hover-scale">
          <Link href="#">
            <Image width={560} height={350} src={image} alt={title} className="w-100 h-auto" />
            <span className="bg" />
          </Link>

          <figcaption>
            <h5 className="from-top mb-0">Read More</h5>
          </figcaption>
        </figure>

        <div className="card-body">
          <div className="post-header">
            <h2 className="post-title h3 mt-1 mb-3">
              <Link title={title} className="link-dark" href="#" />
            </h2>
          </div>

          <div className="post-content">
            <p>{description}</p>
          </div>
        </div>

        <div className="card-footer">
          <ul className="post-meta d-flex mb-0">
            <li className="post-date">
              <i className="uil uil-calendar-alt" />

            </li>

            <li className="post-comments">
              <Link
                href="#"
                className="link-dark"
                title="Comments"

              />
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
