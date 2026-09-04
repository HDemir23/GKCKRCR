import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  DownloadSimple,
  InstagramLogo,
  PinterestLogo,
  Printer,
  Sparkle,
} from "@phosphor-icons/react/ssr";
import { Header } from "@/components/header";
import { NewsletterForm } from "@/components/newsletter-form";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

const products = [
  { title: "Celestial Frame TV Set", category: "Duvar sanatı", image: "/images/gk-wall-art-room.webp", imagePosition: "42% center", href: "https://www.etsy.com/shop/DesignGKStudio" },
  { title: "Moon Garden Stickers", category: "Sticker seti", image: "/images/gk-sticker-flatlay.webp", imagePosition: "center 35%", href: "https://www.etsy.com/shop/MoodPaperShop" },
  { title: "Japandi Ink Pair", category: "Baskı seti", image: "/images/gk-hero-studio.webp", imagePosition: "68% 38%", href: "https://www.etsy.com/shop/DesignGKStudio" },
  { title: "Cozy Botanicals", category: "Desen paketi", image: "/images/gk-sticker-flatlay.webp", imagePosition: "25% 78%", href: "https://www.etsy.com/shop/MoodPaperShop" },
  { title: "Retro Flower Study", category: "Duvar sanatı", image: "/images/gk-hero-studio.webp", imagePosition: "81% 37%", href: "https://www.etsy.com/shop/DesignGKStudio" },
];

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">İçeriğe geç</a>
      <div className="announcement"><span aria-hidden="true">紙と光</span> GK Studio dijital sanat showroomu. <a href="#yeni">Showroom'u gez</a></div>
      <Header />

      <main id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <Reveal className="hero-copy" mode="load">
            <p className="eyebrow">Dijital tasarım stüdyosu <span aria-hidden="true">/ 紙</span></p>
            <h1 id="hero-title">Fikrinden duvarına.</h1>
            <p className="hero-lead">Baskıya hazır wall art, sticker ve pattern setleri. Seç, indir, kendi alanına taşı.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#koleksiyonlar">Koleksiyonları gör <ArrowDownRight size={18} weight="bold" /></a>
              <a className="text-link" href="#yeni">Showroom <ArrowUpRight size={17} /></a>
            </div>
          </Reveal>
          <div className="hero-media">
            <Image src="/images/gk-hero-brutalist-v2.webp" alt="Beton bir stüdyoda siyah, kırık beyaz ve kırmızı tonlarda GK Studio baskıları" fill priority loading="eager" sizes="(max-width: 767px) 100vw, 56vw" />
            <span className="hero-seal" aria-hidden="true">形</span>
          </div>
        </section>

        <section className="studio-note shell" aria-label="Stüdyo yaklaşımı">
          <div className="note-orbit" aria-hidden="true"><span /></div>
          <p>Boşluk, denge ve iz. Günlük alanlara karakter katan dijital sanat ve kağıt ürünleri.</p>
          <p className="note-detail">Brutalist netliği; Japon baskı sanatının sakin ritmi, asimetrisi ve dokusuyla buluşturuyoruz.</p>
        </section>

        <section className="collections shell section" id="koleksiyonlar" aria-labelledby="collections-title">
          <Reveal className="section-heading">
            <h2 id="collections-title">İki koleksiyon. Tek yaratıcı dünya.</h2>
            <p>Duvarlar için sakin kompozisyonlar, günlük anlar için neşeli kağıt ürünleri.</p>
          </Reveal>

          <div className="collection-grid">
            <Reveal className="collection-panel wall-panel">
              <div className="collection-image">
                <Image src="/images/gk-wall-art-room.webp" alt="Modern bir odada sergilenen celestial ve Japandi duvar sanatları" fill sizes="(max-width: 767px) 100vw, 52vw" />
              </div>
              <div className="collection-copy">
                <p className="collection-name">Design GK Studio</p>
                <h3>Wall Art &amp; Frame TV</h3>
                <p>Celestial, Japandi ve soyut kompozisyonlar. Evde baskı ya da profesyonel baskı için hazır.</p>
                <a className="text-link" href="https://www.etsy.com/shop/DesignGKStudio" target="_blank" rel="noreferrer">Etsy mağazasını aç <ArrowUpRight size={17} /></a>
              </div>
            </Reveal>

            <Reveal className="collection-panel sticker-panel" delay={0.08}>
              <div className="collection-copy">
                <p className="collection-name">Mood Paper Shop</p>
                <h3>Sticker &amp; Pattern</h3>
                <p>Vintage çiçekler, sıcak kahve anları ve retro desenlerle hazırlanan indirilebilir setler.</p>
                <a className="text-link" href="https://www.etsy.com/shop/MoodPaperShop" target="_blank" rel="noreferrer">Etsy mağazasını aç <ArrowUpRight size={17} /></a>
              </div>
              <div className="collection-image">
                <Image src="/images/gk-sticker-flatlay.webp" alt="Retro çiçek, ay ve kahve temalı sticker ve pattern setleri" fill sizes="(max-width: 767px) 100vw, 38vw" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="products-section section" id="yeni" aria-labelledby="products-title">
          <div className="wave-field" aria-hidden="true" />
          <div className="shell">
            <Reveal className="products-heading">
              <h2 id="products-title">Showroom</h2>
              <p>Seçili işleri incele. Her parça ilgili Etsy vitrininine açılır.</p>
            </Reveal>
            <div className="product-scroller">
              {products.map((product, index) => <ProductCard key={product.title} {...product} index={index} />)}
            </div>
          </div>
        </section>

        <section className="how-it-works shell section" aria-labelledby="process-title">
          <Reveal className="process-heading">
            <h2 id="process-title">Ekrandan duvara, üç hareket.</h2>
          </Reveal>
          <div className="process-list">
            <Reveal className="process-item"><DownloadSimple size={28} /><div><h3>Dosyanı indir</h3><p>Satın alımdan hemen sonra yüksek çözünürlüklü dosyalara ulaş.</p></div></Reveal>
            <Reveal className="process-item" delay={0.06}><Printer size={28} /><div><h3>İstediğin gibi yazdır</h3><p>Evde, yerel baskıcıda veya online baskı servisinde hazırla.</p></div></Reveal>
            <Reveal className="process-item" delay={0.12}><Sparkle size={28} /><div><h3>Kendi alanına kat</h3><p>Çerçevele, kes, yapıştır. Tasarımı kendi hikayenin parçası yap.</p></div></Reveal>
          </div>
        </section>

        <section className="gift-section shell section" id="hediye" aria-labelledby="gift-title">
          <Reveal className="gift-panel">
            <div className="gift-sun" aria-hidden="true" />
            <div className="gift-copy">
              <p className="eyebrow">Stüdyo hediyesi</p>
              <h2 id="gift-title">İlk tasarım bizden.</h2>
              <p>Mini wall art print ve sticker setini indir. Yeni koleksiyonları da ilk sen gör.</p>
            </div>
            <NewsletterForm />
          </Reveal>
        </section>

        <section className="about-section shell section" id="hakkimda" aria-labelledby="about-title">
          <Reveal className="about-portrait">
            <Image src="/images/gk-hero-studio.webp" alt="GK Studio çalışma masasında baskı ve kağıt ürünleri" fill sizes="(max-width: 767px) 100vw, 42vw" />
            <span aria-hidden="true">GK</span>
          </Reveal>
          <Reveal className="about-copy" delay={0.08}>
            <h2 id="about-title">Merhaba, ben Gökçe.</h2>
            <p>Basit fikirleri net ve kullanılabilir tasarımlara dönüştürüyorum. Her dosyayı gerçek baskı kalitesini düşünerek hazırlıyorum.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/gk.stud.io/" target="_blank" rel="noreferrer"><InstagramLogo size={20} /> Instagram</a>
              <a href="https://www.pinterest.com/studiobygokce/" target="_blank" rel="noreferrer"><PinterestLogo size={20} /> Pinterest</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-main">
          <a className="wordmark footer-wordmark" href="#top" aria-label="GK Studio ana sayfa"><Image className="brand-logo" src="/gk-logo.svg" alt="GK Studio" width={280} height={72} /></a>
          <p>Her ruh haline uygun dijital tasarımlar.</p>
          <nav aria-label="Alt menü">
            <a href="#koleksiyonlar">Koleksiyonlar</a>
            <a href="#hediye">Hediyeni al</a>
            <a href="#hakkimda">Hakkımda</a>
          </nav>
        </div>
        <div className="shell footer-bottom"><p>© 2026 GK Studio</p><p>Dijital ürünler, anında indirme</p></div>
      </footer>
    </div>
  );
}
