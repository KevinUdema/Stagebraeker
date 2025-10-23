// TODO at some point figure out why it only works on resave and not on refresh of the page
export default function addOverserver() {
  const inViewport = (entries, observer) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };

  const Obs = new IntersectionObserver(inViewport);

  // Attach observer to every [data-inviewport] element:
  document.querySelectorAll("[data-inviewport]").forEach((el) => {
    Obs.observe(el);
  });
  return addOverserver;
}
