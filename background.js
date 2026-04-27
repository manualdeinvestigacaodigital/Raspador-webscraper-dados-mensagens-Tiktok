chrome.action.onClicked.addListener(async (tab) => {
  if (!tab || !tab.id) return;
  const url = tab.url || '';
  if (!/^https:\/\/www\.tiktok\.com\//i.test(url)) {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => alert('Abra uma página do TikTok em https://www.tiktok.com/ e clique novamente no ícone TK.')
    });
    return;
  }
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      world: 'MAIN',
      args: [chrome.runtime.getURL('bookmarklet.js')],
      func: (scriptUrl) => {
        try {
          const old = document.getElementById('__tk_guilherme_loader__');
          if (old) old.remove();
        } catch (e) {}
        const s = document.createElement('script');
        s.id = '__tk_guilherme_loader__';
        s.src = scriptUrl + '?t=' + Date.now();
        s.onload = () => { try { s.remove(); } catch (e) {} };
        (document.head || document.documentElement).appendChild(s);
      }
    });
  } catch (err) {
    console.error('Falha ao injetar o raspador:', err);
  }
});
