(function () {
  const cfg = window.DEIYV || {};

  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    });
  }

  if (header) {
    const onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  function waLink(text) {
    const msg = encodeURIComponent(text || "Hola ROMBO, quiero agendar una producción.");
    if (cfg.whatsapp) {
      const phone = String(cfg.whatsapp).replace(/\D/g, "");
      return "https://wa.me/" + phone + "?text=" + msg;
    }
    return "mailto:" + (cfg.email || "hola@deiyv.com") + "?subject=Producci%C3%B3n%20ROMBO&body=" + msg;
  }

  document.querySelectorAll("[data-wa]").forEach(function (el) {
    const custom = el.getAttribute("data-wa");
    el.setAttribute("href", waLink(custom));
  });

  const form = document.querySelector("[data-brief]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const nombre = (data.get("nombre") || "").toString().trim();
      const negocio = (data.get("negocio") || "").toString().trim();
      const pieza = (data.get("pieza") || "").toString().trim();
      const zona = (data.get("zona") || "").toString().trim();
      const fecha = (data.get("fecha") || "").toString().trim();
      const lines = [
        "Hola ROMBO, soy " + (nombre || "—") + ".",
        negocio ? "Negocio: " + negocio + "." : "",
        pieza ? "Pieza: " + pieza + "." : "",
        zona ? "Zona: " + zona + "." : "",
        fecha ? "Fecha tentativa: " + fecha + "." : "",
        "Quiero agendar y recibir alcance + precio."
      ].filter(Boolean);
      window.location.href = waLink(lines.join(" "));
    });
  }

  const io = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" })
    : null;

  document.querySelectorAll("[data-reveal]").forEach(function (el, i) {
    el.style.setProperty("--d", (i % 8) * 60 + "ms");
    if (io) io.observe(el);
    else el.classList.add("is-in");
  });

  document.querySelectorAll("[data-tilt]").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty("--rx", (y * -6).toFixed(2) + "deg");
      card.style.setProperty("--ry", (x * 8).toFixed(2) + "deg");
    });
    card.addEventListener("pointerleave", function () {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
})();
