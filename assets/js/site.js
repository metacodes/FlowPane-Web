(() => {
  const root = document.documentElement;
  const storageKey = "flowpane.website.locale";
  const locales = new Set(["en", "zh-Hans"]);

  function localizedAttribute(element, name, locale) {
    return element.getAttribute(`data-${name}-${locale.toLowerCase()}`);
  }

  function applyLocale(locale, persist = false) {
    if (!locales.has(locale)) locale = "en";

    root.lang = locale;
    root.dataset.locale = locale;

    const title = document.querySelector("title");
    const localizedTitle = title && localizedAttribute(title, "title", locale);
    if (localizedTitle) document.title = localizedTitle;

    document.querySelectorAll("[data-meta-en]").forEach((element) => {
      const value = localizedAttribute(element, "meta", locale);
      if (value) element.setAttribute("content", value);
    });

    document.querySelectorAll("[data-alt-en]").forEach((element) => {
      const value = localizedAttribute(element, "alt", locale);
      if (value) element.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-aria-en]").forEach((element) => {
      const value = localizedAttribute(element, "aria", locale);
      if (value) element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-set-locale]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.setLocale === locale));
    });

    const openGraphLocale = document.querySelector("[data-og-locale]");
    if (openGraphLocale) {
      openGraphLocale.setAttribute("content", locale === "zh-Hans" ? "zh_CN" : "en_US");
    }

    if (persist) {
      try { localStorage.setItem(storageKey, locale); } catch {}
    }
  }

  document.querySelectorAll("[data-set-locale]").forEach((button) => {
    button.addEventListener("click", () => applyLocale(button.dataset.setLocale, true));
  });

  document.querySelectorAll(".mobile-menu-panel a").forEach((link) => {
    link.addEventListener("click", () => link.closest("details")?.removeAttribute("open"));
  });

  applyLocale(root.dataset.locale);

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = [...document.querySelectorAll(".reveal")];

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((element) => element.classList.add("is-visible"));
  } else {
    root.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.12 });
    reveals.forEach((element) => observer.observe(element));
  }
})();
