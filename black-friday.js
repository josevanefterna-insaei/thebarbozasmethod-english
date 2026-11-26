(() => {
  const checkouts = {
  "beginner": "https://pay.hotmart.com/P107480454P?off=bp4njgd1",
  "intermediate": "https://pay.hotmart.com/T107480461M?off=tu1pkj4p",
  "advanced": "https://pay.hotmart.com/I107481897W?off=cnje3qn6",
  "complete": "https://pay.hotmart.com/C107486132E?off=8i77ds6d"
};
  if (!Object.values(checkouts).every(Boolean)) return;

  const starts = Date.parse("2026-11-26T12:00:00-03:00");
  const ends = Date.parse("2026-11-28T12:00:00-03:00");
  const normal = document.querySelectorAll("[data-bf-normal]");
  const promotional = document.querySelectorAll("[data-bf-only]");
  const links = Array.from(document.querySelectorAll("[data-bf-checkout]"), link => ({
    link,
    regular: link.getAttribute("href"),
    promotional: checkouts[link.dataset.bfCheckout]
  }));
  if (!links.length || links.some(({ promotional }) => !promotional)) return;

  let timer;
  function update() {
    clearTimeout(timer);
    const now = Date.now();
    const active = now >= starts && now < ends;
    links.forEach(({ link, regular, promotional }) => {
      link.setAttribute("href", active ? promotional : regular);
    });
    normal.forEach(element => { element.hidden = active; });
    promotional.forEach(element => { element.hidden = !active; });
    const next = now < starts ? starts : ends;
    if (now < ends) timer = setTimeout(update, Math.min(next - now, 2147483647));
  }
  update();
  window.addEventListener("pageshow", update);
  document.addEventListener("visibilitychange", update);
})();
