(function () {
  var D = window.MIMI_DATA;

  // --- Nav ---
  function renderNav() {
    var el = document.querySelector('#nav .container');
    el.innerHTML =
      '<a href="#hero" class="nav-logo">' + D.meta.title + '<span class="nav-furigana">' + D.meta.titleFurigana + '</span></a>' +
      '<ul class="nav-links">' +
        '<li><a href="#promotion">キャンペーン</a></li>' +
        '<li><a href="#staff">' + D.staff.heading + '</a></li>' +
        '<li><a href="#menu">料金</a></li>' +
        '<li><a href="#info">' + D.info.heading + '</a></li>' +
        '<li><a href="#faq">' + D.faq.heading + '</a></li>' +
        '<li><a href="tel:' + D.info.phone.replace(/-/g, '') + '" class="nav-cta">📞 ' + D.info.phone + '</a></li>' +
      '</ul>' +
      '<button class="nav-hamburger" aria-label="メニュー">' +
        '<span></span><span></span><span></span>' +
      '</button>';
  }

  // --- Hero ---
  function renderHero() {
    var el = document.querySelector('#hero .container');
    var pills = '';
    if (D.hero.highlights && D.hero.highlights.length) {
      for (var i = 0; i < D.hero.highlights.length; i++) {
        pills += '<span class="hero-pill">' + D.hero.highlights[i] + '</span>';
      }
      pills = '<div class="hero-highlights reveal">' + pills + '</div>';
    }
    el.innerHTML =
      pills +
      '<h1 class="hero-headline reveal">' + D.hero.headline + '</h1>' +
      '<p class="hero-sub reveal">' + D.hero.subCopy + '</p>' +
      '<a href="' + D.hero.ctaHref + '" class="btn btn-primary btn-lg reveal">' +
        '📞 ' + D.hero.ctaText +
      '</a>';
  }

  // --- About ---
  function renderAbout() {
    var el = document.querySelector('#about .container');
    var cards = '';
    for (var i = 0; i < D.about.points.length; i++) {
      var p = D.about.points[i];
      cards +=
        '<div class="about-card reveal">' +
          '<div class="about-card-icon">' + p.icon + '</div>' +
          '<h3>' + p.title + '</h3>' +
          '<p>' + p.text + '</p>' +
        '</div>';
    }
    var gallery = '';
    if (D.about.gallery && D.about.gallery.length) {
      var imgs = '';
      for (var j = 0; j < D.about.gallery.length; j++) {
        var g = D.about.gallery[j];
        imgs += '<img src="' + g.src + '" alt="' + g.alt + '" loading="lazy">';
      }
      gallery = '<div class="about-gallery reveal">' + imgs + '</div>';
    }
    el.innerHTML =
      '<div class="section-heading reveal"><h2>' + D.about.heading + '</h2></div>' +
      '<div class="about-grid">' + cards + '</div>' +
      gallery;
  }

  // --- Promotion ---
  function renderPromotion() {
    var el = document.querySelector('#promotion .container');
    if (!el || !D.promotion) return;
    var P = D.promotion;
    el.innerHTML =
      '<div class="section-heading reveal">' +
        '<span class="promo-tag">' + P.tag + '</span>' +
        '<h2>' + P.heading + '</h2>' +
      '</div>' +
      '<p class="promo-sub reveal">' + P.subCopy + '</p>' +
      '<div class="promo-image-wrap reveal">' +
        '<img class="promo-image" src="' + P.image + '" alt="' + P.imageAlt + '" loading="lazy">' +
      '</div>';
  }

  // --- Staff ---
  function renderStaff() {
    var el = document.querySelector('#staff .container');
    var avatar = D.staff.image
      ? '<div class="staff-avatar"><img src="' + D.staff.image + '" alt="' + (D.staff.imageAlt || D.staff.name) + '" loading="lazy"></div>'
      : '<div class="staff-avatar">🌸</div>';
    el.innerHTML =
      '<div class="section-heading reveal"><h2>' + D.staff.heading + '</h2></div>' +
      '<div class="staff-content reveal">' +
        avatar +
        '<div class="staff-name">' + D.staff.name + '</div>' +
        '<div class="staff-role">' + D.staff.role + '</div>' +
        '<div class="staff-career">' + D.staff.career + '</div>' +
        '<div class="staff-message">' + D.staff.message + '</div>' +
      '</div>';
  }

  // --- Menu ---
  function renderMenu() {
    var el = document.querySelector('#menu .container');
    if (!el || !D.menu) return;
    var M = D.menu;
    el.innerHTML =
      '<div class="section-heading reveal"><h2>' + M.heading + '</h2></div>' +
      '<div class="menu-popular-badge reveal">' +
        '<span class="menu-popular-label">' + M.popularLabel + '</span>' +
        '<span class="menu-popular-item">' + M.popularItem + '</span>' +
      '</div>' +
      '<div class="menu-image-wrap reveal">' +
        '<img class="menu-image" src="' + M.image + '" alt="' + M.imageAlt + '" loading="lazy">' +
      '</div>' +
      '<p class="menu-note reveal">' + M.note + '</p>';
  }

  // --- Info ---
  function renderInfo() {
    var el = document.querySelector('#info .container');
    var mapSrc = 'https://maps.google.com/maps?q=' + encodeURIComponent(D.info.mapQuery) + '&output=embed&hl=ja';
    var roomRow = D.info.room
      ? '<div class="info-row">' +
          '<div class="info-label">個室</div>' +
          '<div class="info-value">' + D.info.room + '</div>' +
        '</div>'
      : '';
    el.innerHTML =
      '<div class="section-heading reveal"><h2>' + D.info.heading + '</h2></div>' +
      '<div class="info-grid">' +
        '<div class="info-table reveal">' +
          '<div class="info-row">' +
            '<div class="info-label">住所</div>' +
            '<div class="info-value">' +
              D.info.address.postal + '<br>' +
              D.info.address.full + '<br>' +
              '<span class="info-furigana">' + D.info.address.furigana + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="info-row">' +
            '<div class="info-label">電話番号</div>' +
            '<div class="info-value"><a href="tel:' + D.info.phone.replace(/-/g, '') + '">' + D.info.phone + '</a></div>' +
          '</div>' +
          '<div class="info-row">' +
            '<div class="info-label">ご予約</div>' +
            '<div class="info-value">' + D.info.reservation + '</div>' +
          '</div>' +
          '<div class="info-row">' +
            '<div class="info-label">営業時間</div>' +
            '<div class="info-value">' + D.info.hours + '</div>' +
          '</div>' +
          roomRow +
          '<div class="info-row">' +
            '<div class="info-label">駐車場</div>' +
            '<div class="info-value">' + D.info.parking + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="info-map reveal">' +
          '<iframe src="' + mapSrc + '" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
        '</div>' +
      '</div>';
  }

  // --- FAQ ---
  function renderFaq() {
    var el = document.querySelector('#faq .container');
    var items = '';
    for (var i = 0; i < D.faq.items.length; i++) {
      var f = D.faq.items[i];
      items +=
        '<div class="faq-item reveal">' +
          '<button class="faq-question">' + f.q + '</button>' +
          '<div class="faq-answer">' +
            '<div class="faq-answer-inner">' + f.a + '</div>' +
          '</div>' +
        '</div>';
    }
    el.innerHTML =
      '<div class="section-heading reveal"><h2>' + D.faq.heading + '</h2></div>' +
      '<div class="faq-list">' + items + '</div>';
  }

  // --- Footer ---
  function renderFooter() {
    var el = document.querySelector('#footer .container');
    var year = new Date().getFullYear();
    el.innerHTML =
      '<div class="footer-phone"><a href="tel:' + D.info.phone.replace(/-/g, '') + '">📞 ' + D.info.phone + '</a></div>' +
      '<p class="footer-copyright">&copy; ' + year + ' ' + D.footer.copyright + '</p>';
  }

  // --- Meta ---
  function renderMeta() {
    document.title = D.meta.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', D.meta.description);
  }

  // --- Render All ---
  function renderAll() {
    renderMeta();
    renderNav();
    renderHero();
    renderAbout();
    renderPromotion();
    renderStaff();
    renderMenu();
    renderInfo();
    renderFaq();
    renderFooter();
  }

  document.addEventListener('DOMContentLoaded', renderAll);
})();
