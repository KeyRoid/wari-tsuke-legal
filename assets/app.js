(function () {
  const STORAGE_KEY = "wari_tsuke_lang";
  const DEFAULT_LANG = "ja";

  function setLang(lang) {
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "ja");
    document.documentElement.setAttribute("data-lang", lang === "en" ? "en" : "ja");
    localStorage.setItem(STORAGE_KEY, lang);

    const jaBtn = document.getElementById("lang-ja");
    const enBtn = document.getElementById("lang-en");
    if (jaBtn && enBtn) {
      jaBtn.setAttribute("aria-pressed", lang !== "en" ? "true" : "false");
      enBtn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
    }
  }

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ja") return saved;

    const nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("en")) return "en";
    return DEFAULT_LANG;
  }

  window.WariTsukeLang = { setLang, getLang };

  document.addEventListener("DOMContentLoaded", function () {
    const lang = getLang();
    setLang(lang);

    const jaBtn = document.getElementById("lang-ja");
    const enBtn = document.getElementById("lang-en");

    if (jaBtn) jaBtn.addEventListener("click", () => setLang("ja"));
    if (enBtn) enBtn.addEventListener("click", () => setLang("en"));
  });
})();
