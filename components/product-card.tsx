"use client";

import Image from "next/image";
import { ArrowUpRight, Check, Plus } from "@phosphor-icons/react";
import { useShop } from "./shop-provider";

type ProductCardProps = {
  title: string;
  category: string;
  image: string;
  imagePosition?: string;
  index: number;
};

export function ProductCard({ title, category, image, imagePosition = "center", index }: ProductCardProps) {
  const { addToCart, lastAdded } = useShop();
  const added = lastAdded === title;

  return (
    <article className={`product-card product-card-${index + 1}`}>
      <a className="product-image" href="#hediye" aria-label={`${title} detaylarını gör`}>
        <Image src={image} alt={`${title} dijital ürün önizlemesi`} fill sizes="(max-width: 720px) 78vw, (max-width: 1100px) 40vw, 28vw" style={{ objectPosition: imagePosition }} />
      </a>
      <div className="product-copy">
        <div>
          <p>{category}</p>
          <h3>{title}</h3>
        </div>
        <button className={added ? "add-button is-added" : "add-button"} type="button" onClick={() => addToCart(title)} aria-label={`${title} ürününü sepete ekle`}>
          {added ? <Check size={18} weight="bold" /> : <Plus size={18} weight="bold" />}
        </button>
      </div>
      <a className="product-link" href="#hediye">
        Dijital indirme <ArrowUpRight size={16} />
      </a>
    </article>
  );
}
