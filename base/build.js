const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  LevelFormat, convertInchesToTwip, BorderStyle, ExternalHyperlink
} = require("docx");

const numbering = {
  config: [
    {
      reference: "bullets",
      levels: [
        { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: convertInchesToTwip(0.35), hanging: convertInchesToTwip(0.2) } } } },
      ],
    },
    {
      reference: "numbers",
      levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: convertInchesToTwip(0.35), hanging: convertInchesToTwip(0.2) } } } },
      ],
    },
  ],
};

const GOLD = "9C6B30";
const DARK = "2B2622";
const GRAY = "5B5652";

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 160 },
    border: { bottom: { color: GOLD, space: 4, style: BorderStyle.SINGLE, size: 6 } },
    children: [new TextRun({ text, bold: true, color: DARK, size: 30 })],
  });
}

function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, size: 21, color: DARK, italics: opts.italics || false })],
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 80 },
    children: [new TextRun({ text, size: 21, color: DARK })],
  });
}

function num(text) {
  return new Paragraph({
    numbering: { reference: "numbers", level: 0 },
    spacing: { after: 80 },
    children: [new TextRun({ text, size: 21, color: DARK })],
  });
}

function note(text) {
  return new Paragraph({
    spacing: { after: 160, before: 60 },
    shading: { fill: "F7F1E8" },
    children: [new TextRun({ text, size: 20, color: GRAY, italics: true })],
  });
}

const doc = new Document({
  numbering,
  styles: {
    default: { document: { run: { font: "Georgia" } } },
  },
  sections: [
    {
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1000, bottom: 1000, left: 1100, right: 1100 } } },
      children: [
        new Paragraph({
          spacing: { after: 60 },
          children: [new TextRun({ text: "REKLAMSIZ BÜYÜME PLANI", bold: true, size: 40, color: DARK })],
        }),
        new Paragraph({
          spacing: { after: 300 },
          children: [new TextRun({ text: "DesignGKStudio — Dijital Sticker/Pattern & Dijital Wall Art Mağazaları", size: 22, color: GOLD, italics: true })],
        }),

        p("Bunlar SEO, indirim, çoklu satış, promosyon kodu ve mockup dışında kalan, doğrudan yeni trafik kaynağı yaratan veya dönüşümü artıran taktikler. Hepsi düşük bütçe veya sıfır bütçeyle uygulanabilir."),

        h1("1. Asıl Sorunun Kökü"),
        p("13-14 satış / 6-7 ay demek, hem trafik düşük hem de gelen az sayıda ziyaretçinin satın alma oranı düşük. Reklamı kapatınca trafik tamamen Etsy aramasına bağımlı kaldı. Etsy'nin arama algoritması aktif satış hızını da sıralamaya dahil ediyor: az satış → düşük sıralama → daha az görünürlük → daha az satış. Bu kısır döngüyü kırmanın yolu, trafiği Etsy dışından, kendi kontrolündeki bir kanaldan üretmek."),

        h1("2. Pinterest — Reklamsız Ama Kalıcı Trafik Motoru"),
        p("Etsy'ye giden dış (Etsy dışı) trafiğin yaklaşık üçte biri Pinterest'ten geliyor — Google, Instagram ve Facebook'un toplamından bile fazla. Ve bu tamamen organik, ücretsiz."),
        bullet("Her ürün için 5 farklı pin tasarımı, günlük 10 pin paylaşma hedefi."),
        bullet("\"Value-first\" pin mantığı: önce sorunu göster (\"boş, sıkıcı duvar\"), sonra ürünün çözümünü göster (\"15$ altı galeri duvarı seti\")."),
        bullet("Bir pin, paylaşıldıktan 6-12 ay sonra bile tıklama getirmeye devam ediyor — yani reklamın aksine, attığın emek zamanla katlanıyor, tükenmiyor."),
        bullet("Panoları \"ürün kataloğu\" gibi değil, \"oda ilhamı / planlama ilhamı\" gibi kur — sosyal medyada zaten fark ettiğin \"decor inspo\" çerçevesi Pinterest'te de işliyor."),

        h1("3. E-posta Listesi — Algoritmadan Bağımsız Tek Kanalın"),
        p("500 kişilik aktif bir e-posta listesi, aylık Etsy gelirinin %20-30'unu doğrudan veya tekrar satışla üretebiliyor. Etsy algoritması değişse de, reklam bütçen olmasa da bu kanal sana ait kalıyor."),
        bullet("Kurulum: ücretsiz bir landing page (ör. basit bir Canva/Carrd sayfası) + orada e-posta karşılığında küçük bir hediye (freebie)."),
        bullet("Sticker mağazası için hediye fikri: mini bir ücretsiz sticker seti veya planner sayfası."),
        bullet("Wall art mağazası için hediye fikri: tek parçalık ücretsiz bir printable (\"bir oda için ücretsiz boho print\")."),
        bullet("Sipariş sonrası dijital teslimat mesajına \"bir dahaki alışverişine %10\" + landing page linkini ekle."),
        bullet("Pinterest/Instagram bio linkini doğrudan Etsy'ye değil, önce bu landing page'e yönlendir — böylece ziyaretçi kaybolsa bile e-posta listende kalıyor."),
        bullet("Kayıt olanları hangi niş/temadan geldiğine göre etiketle (boho, Japandi, kedi vb.) — yeni ürün çıkınca sadece o temayı sevenlere yaz."),

        h1("4. Ticari Lisans & Paket Upsell (Çoklu Satıştan Farklı)"),
        p("Çoklu satış indirimini zaten yapıyorsun; bunun ötesinde aynı dosyadan ekstra gelir katmanı yaratabilirsin."),
        bullet("Sticker/pattern mağazasında ayrı bir \"ticari kullanım lisansı\" ürünü sat — POD (print-on-demand) yapan alıcılar bunun için ayrıca ödemeye razı."),
        bullet("Wall art mağazasında tek tasarımları değil, \"galeri duvarı seti\" (3-5 parça tek fiyat) gibi oda bazlı paketler kur — tek tek satmaktan daha cazip görünüp sepet tutarını yükseltiyor."),

        h1("5. Sosyal Kanıt Açığını Kapat"),
        p("Az sayıda satış = az yorum, az yorum = yeni ziyaretçinin güvenmemesi. Bu SEO'dan bağımsız, saf bir dönüşüm sorunu."),
        bullet("Her siparişten sonra kişisel bir teşekkür mesajıyla nazikçe yorum iste — otomatik şablon olsa bile samimi tonda olsun."),
        bullet("Star Seller rozeti 2026'da arama sıralamasında daha fazla ağırlık kazandı: %95 mesaj yanıt oranı, 4.8+ puan, 3 ayda en az 5 sipariş / $300 satış şartı var. Düşük hacimde bile bu eşiği tutturmak mümkün ve rozet, tıklama oranını %12-18 artırıyor."),
        bullet("Mesajlara 24 saat içinde yanıt vermek tek başına hem rozeti hem de algoritma puanını besliyor."),

        h1("6. İki Mağazanı Birbirine Bağla"),
        p("Sticker/pattern ve wall art mağazaların aynı alıcı kitlesine (estetik/ev dekoru meraklıları) hitap ediyor. Bu çapraz trafik neredeyse bedava."),
        bullet("Sticker mağazasındaki teslimat notuna wall art mağazasının linkini (ve tersini) \"bunu da beğenebilirsin\" notuyla ekle."),
        bullet("İki mağaza için ortak bir Pinterest/Instagram hesabı üzerinden çapraz tanıtım yap; \"aynı estetik, iki farklı ürün\" mesajı ver."),

        h1("7. Platform Çeşitlendirme"),
        p("Aynı tasarımları Etsy dışında da satışa açmak hem ek gelir hem de markanın (DesignGKStudio) internette daha çok yerde görünmesini sağlar — bu da dolaylı olarak Etsy'ye geri dönen aramaları artırır."),
        bullet("Creative Fabrica, Design Bundles gibi tasarım pazaryerleri (özellikle sticker/pattern dosyaları için)."),
        bullet("Gumroad veya kendi basit bir sayfan — tamamen kendi kontrolünde, Etsy komisyonu yok."),
        bullet("Etsy'yi ana mağaza olarak göstermeye devam et; diğerleri ek kanal."),

        h1("8. Mikro-Niş ve Uzun Kuyruk Başlıklar"),
        p("SEO yapıyorsun ama derinlik farkı burada: geniş kelimelerde (\"boho wall art\") binlerce rakiple yarışıyorsun. Hiper-spesifik, uzun kuyruk ifadeler arama hacmi düşük olsa da çok daha az rekabetli ve dönüşüm oranı belirgin şekilde daha yüksek."),
        bullet("Örnek: \"boho wall art\" yerine \"küçük yatak odası için boho galeri duvarı seti\"."),
        bullet("Etiketlerde tek kelime kullanma (\"art\", \"gift\") — her tag gerçek bir arama cümlesi gibi 2-3 kelimelik olsun."),

        h1("9. Basit Kişiselleştirme Seçenekleri"),
        p("Dijital üründe bile küçük bir özelleştirme seçeneği sunmak Etsy'de dönüşümü belirgin artıran etkenlerden biri — alıcı \"bana özel\" hissettiğinde satın alma ihtimali yükseliyor."),
        bullet("Sticker setlerinde renk paleti / stil varyantı seçimi."),
        bullet("Wall art'ta isim, tarih veya kısa metin ekleme opsiyonu (\"personalize et\" fiyatı biraz daha yüksek tutulabilir)."),

        h1("10. Video ve Görsel Arama"),
        p("Etsy artık listing'lerde video desteğini ve görsel/AI destekli aramanın ağırlığını artırdı."),
        bullet("İlk görsele ek olarak kısa bir ekran kaydı videosu ekle (dosyayı GoodNotes/telefonda kullanma anı, ya da wall art'ı gerçek bir duvarda gösteren kısa pan çekimi) — yeni çekim ekipmanı gerektirmiyor."),
        bullet("Bu hem tıklama oranını hem de Etsy'nin \"listing kalite skorunu\" iyileştiriyor."),

        h1("11. Körlemesine Değil, Veriyle Niş Seç"),
        p("EverBee veya Alura gibi araçların ücretsiz katmanlarıyla hangi anahtar kelimelerde gerçek arama hacmi ve düşük rekabet olduğunu görebilirsin — \"bu niş iyi gibi\" tahmini yerine veriye dayalı karar."),

        h1("12. Topluluklarda Satmadan Görünür Ol"),
        p("Reddit (ör. r/homedecor, dijital planlama toplulukları) ve ilgili Facebook gruplarında doğrudan link paylaşmak spam sayılıp yasaklanma riski taşır. Bunun yerine sorulara gerçekten yardımcı olarak, ipucu vererek görünür ol; profilindeki bio linki oradan organik tıklama getirir."),

        h1("İlk 30 Gün İçin Uygulama Sırası"),
        num("1. Hafta — Star Seller şartlarını kontrol et; geçmiş alıcılara nazik bir yorum hatırlatma mesajı gönder."),
        num("2. Hafta — Landing page + freebie + Pinterest hesabını kur; her iki mağazadan ürünler için pin üretmeye başla."),
        num("3. Hafta — İki mağaza arasında çapraz link ve sipariş sonrası mesaj şablonlarını oluştur."),
        num("4. Hafta — EverBee/Alura ile en az 5 listing başlığını uzun kuyruk anahtar kelimeyle yenile; bir ticari lisans veya paket ürünü ekle."),

        note("Not: Reklamsız büyüme yavaş başlar ama Pinterest + e-posta listesi zamanla Etsy algoritmasından bağımsız, tamamen senin kontrolünde bir trafik kaynağına dönüşüyor — bütçen olmadığı için tam ihtiyacın olan şey bu."),

        h1("Kaynaklar"),
        p("Craftybase — Pinterest for Etsy Sellers (2026 Strategy Guide)", { italics: true }),
        p("GetBetterListing — 2026 Etsy External Traffic SEO Guide", { italics: true }),
        p("Insight Agent — Building Your Etsy Email List (2026 Guide)", { italics: true }),
        p("Insight Agent — Etsy SEO 2026: What's Changed & How to Rank", { italics: true }),
        p("Craftybase / Outfy / ListifyAI — Etsy Star Seller Requirements 2026", { italics: true }),
        p("Printify / Craftybase / Outfy — Best Etsy SEO / Keyword Tools 2026 (EverBee, Alura)", { italics: true }),
        p("mydesigns.io — How to Sell Digital Products on Etsy in 2026 (bundle & pricing strategy)", { italics: true }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  require("fs").writeFileSync("etsy_reklamsiz_buyume_plani.docx", buf);
  console.log("done");
});
