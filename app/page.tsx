import Image from "next/image";

const studioInstagram = "https://www.instagram.com/elestudiotattoo/";
const emailHref =
  "mailto:elestudiobarcelona@gmail.com?subject=Quiero%20contaros%20mi%20idea&body=Hola%2C%20me%20gustar%C3%ADa%20hacerme%20un%20tattoo.%20Mi%20idea%20es%3A%20";
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=El+Estudio+Tattoo+Passatge+de+Valeri+Serra+10+Barcelona";

const works = [
  { src: "/images/pink-boots.jpg", alt: "Tattoo en color de botas rosas", className: "work work-tall" },
  { src: "/images/vive-momento.jpg", alt: "Tattoo fine line con el texto Vive el momento", className: "work" },
  { src: "/images/abstract-foot.jpg", alt: "Tattoo abstracto delicado en el pie", className: "work" },
  { src: "/images/matching.jpg", alt: "Dos tattoos pequeños a juego", className: "work work-wide" },
  { src: "/images/flower-rib.jpg", alt: "Tattoo fine line floral bajo las costillas", className: "work" },
  { src: "/images/sardine.jpg", alt: "Tattoo pequeño de una sardina", className: "work" },
  { src: "/images/stars.jpg", alt: "Tattoo minimal de estrellas y una inicial", className: "work" },
  { src: "/images/healed-flower.jpg", alt: "Tattoo floral cicatrizado en la espalda", className: "work work-wide" },
];

const artists = [
  {
    name: "Sandra",
    handle: "@sandratatuaje",
    specialty: "Fine line · microrealismo",
    href: "https://www.instagram.com/sandratatuaje/",
  },
  {
    name: "Carolina",
    handle: "@llajetatuaje",
    specialty: "Tattoo custom · línea fina",
    href: "https://www.instagram.com/llajetatuaje/",
  },
  {
    name: "Ilca",
    handle: "@yuccatattoo",
    specialty: "Artista residente",
    href: "https://www.instagram.com/yuccatattoo/",
  },
  {
    name: "Julia",
    handle: "@chultatu",
    specialty: "Fine line · ornamental",
    href: "https://www.instagram.com/chultatu/",
  },
];

const reviews = [
  {
    quote: "El estudio es precioso y el resultado no me puede gustar más.",
    name: "Marina Huerta",
  },
  {
    quote: "Delicadeza, limpieza y elegancia. Cuidan cada detalle.",
    name: "Noemi Fariña Díaz",
  },
  {
    quote: "Sandra me aconsejó en todo momento. El sitio es precioso y la higiene, de diez.",
    name: "Queralt Rodríguez",
  },
];

function MessageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 5.5h14v10H9l-4 3v-13Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.5 9.5h7M8.5 12.5H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M19 10c0 4.7-7 10-7 10S5 14.7 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.9" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="El Estudio Tattoo, inicio">
          <span className="brand-mark">E</span>
          <span>EL ESTUDIO<br />TATTOO</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#trabajos">Trabajos</a>
          <a href="#artistas">Artistas</a>
          <a href="#visitanos">Estudio</a>
        </nav>
        <a className="header-cta" href={studioInstagram} target="_blank" rel="noreferrer">
          <span>Contar mi idea</span>
          <InstagramIcon />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Fine line · minimal · custom · Barcelona</p>
          <h1>NO HACE FALTA QUE TRAIGAS EL DIBUJO PERFECTO.</h1>
          <p className="hero-intro">
            Trae la idea, una referencia o solo aquello que quieres recordar. Aquí empieza el diseño que después será solo tuyo.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={studioInstagram} target="_blank" rel="noreferrer">
              <span>Contar mi idea</span>
              <InstagramIcon />
            </a>
            <a className="text-link" href="#trabajos">Ver trabajos <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <Image src="/images/studio.jpg" alt="Interior luminoso de El Estudio Tattoo en Barcelona" fill priority sizes="(max-width: 800px) 100vw, 45vw" />
          <div className="hero-card">
            <span className="rating">4,9</span>
            <span>90 reseñas en Google</span>
            <a href={mapsHref} target="_blank" rel="noreferrer">Leer reseñas</a>
          </div>
        </div>
      </section>

      <section className="statement" aria-label="Presentación">
        <p>Una idea puede llegar a medias.</p>
        <h2>EL TRAZO SE TRABAJA CONTIGO.</h2>
        <p className="statement-note">Cuatro artistas, cuatro maneras de mirar y el tiempo necesario para que el diseño encaje en tu cuerpo.</p>
      </section>

      <section className="portfolio" id="trabajos">
        <div className="section-head">
          <span className="section-number">01 / Trabajos</span>
          <h2>PEQUEÑO NO SIGNIFICA IMPERSONAL.</h2>
          <p>Línea fina, color, piezas a juego y diseños hechos desde cero.</p>
        </div>
        <div className="works-grid">
          {works.map((work, index) => (
            <figure className={work.className} key={work.src}>
              <Image src={work.src} alt={work.alt} fill sizes="(max-width: 680px) 50vw, 25vw" />
              <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
            </figure>
          ))}
        </div>
        <a className="portfolio-link" href={studioInstagram} target="_blank" rel="noreferrer">
          <span>Ver trabajos recientes en Instagram</span>
          <InstagramIcon />
        </a>
      </section>

      <section className="artists" id="artistas">
        <div className="artists-intro">
          <span className="section-number">02 / Artistas</span>
          <h2>ENCUENTRA LA MANO QUE ENTIENDE TU IDEA.</h2>
          <p>Explora su trabajo y escribe directamente al estudio para encontrar el mejor encaje.</p>
        </div>
        <div className="artist-list">
          {artists.map((artist, index) => (
            <a href={artist.href} target="_blank" rel="noreferrer" className="artist-row" key={artist.name}>
              <span className="artist-index">0{index + 1}</span>
              <strong>{artist.name}</strong>
              <span className="artist-specialty">{artist.specialty}</span>
              <span className="artist-handle">{artist.handle}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="process-title">
          <span className="section-number">03 / Cómo empieza</span>
          <h2>LA PRIMERA PARTE NO SE TATÚA. SE HABLA.</h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <h3>Cuenta la idea</h3>
            <p>Envía referencias, zona y tamaño aproximado. No hace falta que tengas el diseño cerrado.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Encuentra a tu artista</h3>
            <p>El estilo y la forma de trabajar importan. El equipo te orienta para dar con la persona adecuada.</p>
          </li>
          <li>
            <span>03</span>
            <h3>Revisa antes de empezar</h3>
            <p>La composición, el tamaño y la colocación se ajustan contigo antes de pasar a la piel.</p>
          </li>
        </ol>
      </section>

      <section className="reviews" id="resenas">
        <div className="reviews-head">
          <span className="section-number">04 / Lo cuentan ellas</span>
          <h2>LA DELICADEZA TAMBIÉN SE NOTA ANTES DE EMPEZAR.</h2>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <a href={mapsHref} target="_blank" rel="noreferrer" className="review-card" key={review.name}>
              <span className="stars" aria-label="5 estrellas">★★★★★</span>
              <blockquote>“{review.quote}”</blockquote>
              <span className="review-name">{review.name} · Google</span>
            </a>
          ))}
        </div>
      </section>

      <section className="visit" id="visitanos">
        <div className="visit-image">
          <Image src="/images/script.jpg" alt="Tattoo de caligrafía fina realizado en El Estudio Tattoo" fill sizes="(max-width: 800px) 100vw, 45vw" />
        </div>
        <div className="visit-copy">
          <span className="section-number">05 / Barcelona</span>
          <h2>TU PRÓXIMO TATTOO PUEDE EMPEZAR CON UNA FOTO GUARDADA.</h2>
          <p>Passatge de Valeri Serra, 10<br />08011 Barcelona</p>
          <div className="contact-list">
            <a href={mapsHref} target="_blank" rel="noreferrer"><PinIcon /><span>Abrir ubicación en Maps</span></a>
            <a href={emailHref}><MessageIcon /><span>elestudiobarcelona@gmail.com</span></a>
            <a href="tel:+34936274156"><span className="phone-icon">93</span><span>936 274 156</span></a>
          </div>
          <a className="button button-pink" href={studioInstagram} target="_blank" rel="noreferrer">
            <span>Contar mi idea por Instagram</span>
            <InstagramIcon />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">EL ESTUDIO TATTOO</div>
        <div className="footer-links">
          <a href={studioInstagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={mapsHref} target="_blank" rel="noreferrer">Google Maps</a>
          <a href={emailHref}>Email</a>
        </div>
        <p>Fine line · minimal · custom · Barcelona</p>
      </footer>

      <a className="mobile-cta" href={studioInstagram} target="_blank" rel="noreferrer">
        <span>Contar mi idea</span>
        <InstagramIcon />
      </a>
    </main>
  );
}
