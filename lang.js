// 語言切換：預設依瀏覽器語言（中文顯示繁中，其他顯示英文），可手動切換並記住選擇
(() => {
  const KEY = 'pvd-site-lang';
  let saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch {}
  const initial = saved || (navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en');

  function setLang(lang) {
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    document.querySelectorAll('.lang-switch button').forEach((b) => b.classList.toggle('on', b.dataset.lang === lang));
    try {
      localStorage.setItem(KEY, lang);
    } catch {}
  }

  setLang(initial);
  document.addEventListener('DOMContentLoaded', () => {
    setLang(document.documentElement.dataset.lang);
    document.querySelectorAll('.lang-switch button').forEach((b) => (b.onclick = () => setLang(b.dataset.lang)));
  });
})();
