import { content } from './content.js';

const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));

const whatsapp = (message = content.messages.general) => `${content.business.whatsapp}?text=${encodeURIComponent(message)}`;
const mapsUrl = `${content.business.mapsBase}${encodeURIComponent(content.business.address)}`;
const logo = `<img class="brand-mark" src="/public/images/nutri-vida-conceitual.svg" alt="Nutri Vida — identidade visual conceitual" width="214" height="60" />`;
const arrow = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 10h10m-4-4 4 4-4 4" /></svg>';
const whatsappIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.7a8.3 8.3 0 0 1-12.3 7.2L3 20l1.2-4.7a8.3 8.3 0 1 1 16-3.6Z"/><path d="M8.3 8.2c.3-.6.7-.6 1-.6.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.4.7 1 1.4 1.8 1.8.3.2.5.2.7 0l.8-.9c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5-.1.5-.4 1.2-.9 1.5-.4.3-1 .5-1.6.4-1-.1-2.2-.7-3.5-1.8-1.5-1.2-2.5-2.8-2.8-3.9-.2-.8 0-1.4.3-1.8Z"/></svg>';
const locationIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10.1c0 5.2-7 11.1-7 11.1S5 15.3 5 10.1a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.2"/></svg>';
const leafIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 4.8C11 4.7 5.8 7.7 5.8 13c0 3.2 2.3 5.1 5.1 5.1 5.1 0 7.7-5.5 8.6-13.3Z"/><path d="M4 20c3.3-4.5 7.1-7.6 12.3-10.4M12.3 14.2l-.1-4.1m-3.9 7.1-.2-3.5"/></svg>';

const navLinks = content.navigation.map(({ label, href }) => `<a href="${esc(href)}">${esc(label)}</a>`).join('');
const categoryCards = content.categories.map((category) => `
  <article class="category-card reveal">
    <a class="category-image" href="${esc(whatsapp(category.message))}" target="_blank" rel="noopener noreferrer" aria-label="Pergunte sobre ${esc(category.title)} pelo WhatsApp">
      <img src="${esc(category.image)}" data-fallback="${esc(category.fallback)}" data-fallback-alt="${esc(category.alt)}" alt="${esc(category.alt)}" loading="lazy" width="560" height="420" />
      <span class="image-index">${esc(category.number)}</span>
      <span class="image-arrow" aria-hidden="true">${arrow}</span>
    </a>
    <div class="category-copy">
      <p class="suggested-label">Categoria sugerida</p>
      <h3>${esc(category.title)}</h3>
      <a class="text-link" href="${esc(whatsapp(category.message))}" target="_blank" rel="noopener noreferrer">Consultar com a loja <span aria-hidden="true">↗</span></a>
    </div>
  </article>`).join('');
const benefits = content.benefits.map(({ number, title, text }) => `
  <article class="benefit reveal">
    <span class="benefit-number">${esc(number)}</span>
    <div><h3>${esc(title)}</h3><p>${esc(text)}</p></div>
  </article>`).join('');
const addressLines = content.business.addressLines.map((line) => `<span>${esc(line)}</span>`).join('');

const page = `
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="#inicio" aria-label="Nutri Vida — início">${logo}</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Abrir menu de navegação">
        <span></span><span></span>
      </button>
      <nav class="primary-navigation" id="primary-navigation" aria-label="Navegação principal">
        ${navLinks}
        <a class="nav-contact" href="${esc(whatsapp())}" target="_blank" rel="noopener noreferrer">Fale pelo WhatsApp ${arrow}</a>
      </nav>
    </div>
  </header>

  <main id="conteudo">
    <section class="hero section-wrap" id="inicio" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-line"></span>${esc(content.copy.heroEyebrow)}</p>
        <h1 id="hero-title">${esc(content.copy.heroTitle)}</h1>
        <p class="hero-text">${esc(content.copy.heroText)}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#produtos">${esc(content.copy.heroPrimary)} ${arrow}</a>
          <a class="button button-quiet" href="${esc(whatsapp())}" target="_blank" rel="noopener noreferrer">${esc(content.copy.heroSecondary)}</a>
        </div>
        <div class="hero-proof" aria-label="Avaliação no Google: ${esc(content.rating.value)} de ${esc(content.rating.max)}, com base em ${esc(content.rating.count)} avaliações">
          <span class="proof-star" aria-hidden="true">★</span>
          <span><strong>${esc(content.rating.value)} / ${esc(content.rating.max)}</strong> no Google <i></i> ${esc(content.rating.count)} avaliações</span>
        </div>
      </div>
      <div class="hero-visual reveal">
        <div class="hero-image-frame">
          <img class="hero-image" src="${esc(content.heroImage.src)}" data-fallback="${esc(content.heroImage.fallback)}" data-fallback-alt="${esc(content.heroImage.fallbackAlt)}" alt="${esc(content.heroImage.alt)}" fetchpriority="high" width="900" height="675" />
        </div>
        <div class="hero-caption"><span class="caption-dot"></span><span>${esc(content.copy.heroCaption)}</span></div>
        <div class="hero-location-chip"><span class="leaf-stamp" aria-hidden="true">${leafIcon}</span><span><strong>Nutri Vida</strong><small>${esc(content.brand.location)}</small></span></div>
      </div>
      <a class="hero-scroll" href="#produtos" aria-label="Rolar até as categorias"><span>Role para descobrir</span><span class="scroll-line" aria-hidden="true"></span></a>
    </section>

    <section class="products section-wrap" id="produtos" aria-labelledby="products-title">
      <div class="section-heading reveal">
        <div><p class="eyebrow"><span class="eyebrow-line"></span>${esc(content.copy.productsEyebrow)}</p><h2 id="products-title">${esc(content.copy.productsTitle)}</h2></div>
        <p class="section-intro">${esc(content.copy.productsText)}</p>
      </div>
      <div class="category-grid">${categoryCards}</div>
      <p class="concept-note"><span class="concept-marker" aria-hidden="true">${leafIcon}</span> Categorias ilustrativas e editáveis. Consulte diretamente a Nutri Vida sobre produtos e disponibilidade.</p>
    </section>

    <section class="benefits" aria-labelledby="benefits-title">
      <div class="section-wrap benefits-inner">
        <div class="benefits-heading reveal"><p class="eyebrow eyebrow-light"><span class="eyebrow-line"></span>${esc(content.copy.benefitsEyebrow)}</p><h2 id="benefits-title">${esc(content.copy.benefitsTitle)}</h2></div>
        <div class="benefit-list">${benefits}</div>
      </div>
    </section>

    <section class="about section-wrap" id="sobre" aria-labelledby="about-title">
      <div class="about-visual reveal">
        <img src="${esc(content.photos.about)}" data-fallback="${esc(content.photos.aboutFallback)}" data-fallback-alt="${esc(content.photos.aboutAlt)}" alt="${esc(content.photos.aboutAlt)}" loading="lazy" width="900" height="500" />
        <div class="photo-label"><span>Um olhar para a loja</span><span class="photo-label-mark">NV</span></div>
        <div class="about-photo-inset"><img src="${esc(content.photos.aboutInset)}" data-fallback="${esc(content.photos.aboutInsetFallback)}" data-fallback-alt="${esc(content.photos.aboutInsetAlt)}" alt="${esc(content.photos.aboutInsetAlt)}" loading="lazy" width="300" height="280" /></div>
      </div>
      <div class="about-copy reveal">
        <p class="eyebrow"><span class="eyebrow-line"></span>${esc(content.copy.aboutEyebrow)}</p>
        <h2 id="about-title">${esc(content.copy.aboutTitle)}</h2>
        <p>${esc(content.copy.aboutText)}</p>
        <a class="button button-primary" href="${esc(whatsapp())}" target="_blank" rel="noopener noreferrer">${esc(content.copy.aboutButton)} ${arrow}</a>
        <p class="demo-note">${esc(content.brand.demonstrationNote)}</p>
      </div>
    </section>

    <section class="review-band" aria-labelledby="review-title">
      <div class="section-wrap review-inner reveal">
        <div class="review-rating"><span class="review-big">${esc(content.rating.value)}</span><div><span class="stars" role="img" aria-label="${esc(content.rating.max)} estrelas">★★★★★</span><span>de ${esc(content.rating.max)} no Google</span><small>Com base em ${esc(content.rating.count)} avaliações.</small></div></div>
        <div class="review-quote"><p class="eyebrow"><span class="eyebrow-line"></span>${esc(content.copy.reviewsEyebrow)}</p><h2 id="review-title">${esc(content.rating.quote)}</h2><p class="review-source">${esc(content.rating.source)}</p></div>
        <span class="review-flower" aria-hidden="true">${leafIcon}</span>
      </div>
    </section>

    <section class="contact section-wrap" id="localizacao" aria-labelledby="location-title">
      <div class="contact-copy reveal">
        <p class="eyebrow"><span class="eyebrow-line"></span>${esc(content.copy.locationEyebrow)}</p>
        <h2 id="location-title">${esc(content.copy.locationTitle)}</h2>
        <p class="contact-intro">${esc(content.copy.locationText)}</p>
        <div class="address-block"><span class="contact-icon">${locationIcon}</span><div><strong>Visite ou fale com a loja</strong><address>${addressLines}</address></div></div>
        <div class="contact-detail"><span>Telefone / WhatsApp</span><a href="tel:${esc(content.business.phoneLink)}">${esc(content.business.phoneDisplay)}</a></div>
        <div class="contact-actions">
          <a class="button button-primary" href="${esc(whatsapp(content.messages.visit))}" target="_blank" rel="noopener noreferrer">Fale pelo WhatsApp ${whatsappIcon}</a>
          <a class="button button-outline" href="${esc(mapsUrl)}" target="_blank" rel="noopener noreferrer">${esc(content.copy.mapButton)} ${arrow}</a>
        </div>
        <p class="delivery-note">${esc(content.business.deliveryMessage)}</p>
      </div>
      <div class="contact-photo reveal">
        <img src="${esc(content.photos.storefront)}" data-fallback="${esc(content.photos.storefrontFallback)}" data-fallback-alt="${esc(content.photos.storefrontAlt)}" alt="${esc(content.photos.storefrontAlt)}" loading="lazy" width="700" height="680" />
        <div class="contact-photo-tag"><span class="caption-dot"></span> A sua loja em Abelardo Luz</div>
      </div>
    </section>

    <section class="final-cta" aria-labelledby="final-title">
      <div class="cta-leaf cta-leaf-one" aria-hidden="true">${leafIcon}</div><div class="cta-leaf cta-leaf-two" aria-hidden="true">${leafIcon}</div>
      <div class="section-wrap cta-inner reveal">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-line"></span>Uma conversa começa por aqui</p>
        <h2 id="final-title">${esc(content.copy.finalTitle)}</h2>
        <p>${esc(content.copy.finalText)}</p>
        <a class="button button-cream" href="${esc(whatsapp())}" target="_blank" rel="noopener noreferrer">${esc(content.copy.finalButton)} ${whatsappIcon}</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="section-wrap footer-main">
      <div class="footer-brand">${logo}<p>${esc(content.copy.footerDescription)}</p></div>
      <div class="footer-column"><h2>Explore</h2><nav aria-label="Navegação do rodapé">${navLinks}</nav></div>
      <div class="footer-column"><h2>Visite</h2><address>${addressLines}</address><a class="footer-phone" href="tel:${esc(content.business.phoneLink)}">${esc(content.business.phoneDisplay)}</a></div>
      <div class="footer-column footer-contact"><h2>Fale com a loja</h2><p>Dúvidas sobre produtos ou entrega? Estamos a uma mensagem de distância.</p><a class="footer-whatsapp" href="${esc(whatsapp())}" target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp ${arrow}</a></div>
    </div>
    <div class="section-wrap footer-bottom"><span>© ${new Date().getFullYear()} ${esc(content.brand.name)} · Abelardo Luz, SC</span><span>${esc(content.brand.demonstrationNote)}</span></div>
  </footer>

  <a class="floating-whatsapp" href="${esc(whatsapp())}" target="_blank" rel="noopener noreferrer" aria-label="Fale com a Nutri Vida pelo WhatsApp">${whatsappIcon}<span>WhatsApp</span></a>
`;

document.querySelector('#site').innerHTML = page;
document.querySelector('#site').setAttribute('aria-busy', 'false');
document.querySelectorAll('img[data-fallback]').forEach((image) => {
  image.addEventListener('error', () => {
    if (image.dataset.fallbackUsed === 'true') return;
    image.dataset.fallbackUsed = 'true';
    image.src = image.dataset.fallback;
    image.alt = image.dataset.fallbackAlt || image.alt;
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-navigation');
const setMenu = (open) => {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
  navigation.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
};
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && menuToggle.getAttribute('aria-expanded') === 'true') setMenu(false);
}, { passive: true });

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const floating = document.querySelector('.floating-whatsapp');
const finalSection = document.querySelector('.final-cta');
if ('IntersectionObserver' in window) {
  const floatObserver = new IntersectionObserver((entries) => {
    floating.classList.toggle('is-muted', entries.some((entry) => entry.isIntersecting));
  }, { threshold: 0.15 });
  [finalSection, document.querySelector('.site-footer')].forEach((section) => floatObserver.observe(section));
}

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visibleIds = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target.id);
    if (!visibleIds.length) return;
    const active = visibleIds[0];
    document.querySelectorAll('.primary-navigation a[href^="#"]').forEach((link) => {
      if (link.hash === `#${active}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));
}
