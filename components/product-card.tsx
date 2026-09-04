import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";

type ProductCardProps = {
  title: string;
  category: string;
  image: string;
  imagePosition?: string;
  index: number;
  href: string;
};

export function ProductCard({ title, category, image, imagePosition = "center", index, href }: ProductCardProps) {
  return (
    <article className={`product-card product-card-${index + 1}`}>
      <a className="product-image" href={href} target="_blank" rel="noreferrer" aria-label={`${title} ürününü Etsy'de gör`}>
        <Image src={image} alt={`${title} dijital ürün önizlemesi`} fill sizes="(max-width: 720px) 78vw, (max-width: 1100px) 40vw, 28vw" style={{ objectPosition: imagePosition }} />
      </a>
      <div className="product-copy">
        <div>
          <p>{category}</p>
          <h3>{title}</h3>
        </div>
        <a className="product-link" href={href} target="_blank" rel="noreferrer" aria-label={`${title} ürününü Etsy'de incele`}>
          Etsy'de incele <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
