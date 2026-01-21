// Listen for settings
let rkisonerSettings = { keywords: [] };

chrome.storage.local.get("rkisonerSettings", (res) => {
  rkisonerSettings = res.rkisonerSettings || { keywords: [] };
  startObserver();
});

// React to changes live
chrome.storage.onChanged.addListener((changes) => {
  if (changes.rkisonerSettings) {
    rkisonerSettings = changes.rkisonerSettings.newValue;
    scanPage();
  }
});

// Watch YouTube DOM
function startObserver() {
  const observer = new MutationObserver(() => {
    scanPage();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  scanPage();
}

// Blur matching elements
function scanPage() {
  if (!rkisonerSettings.keywords.length) return;

  const elements = document.querySelectorAll(
    "ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer, ytd-compact-video-renderer"
  );

  elements.forEach((el) => {
    const text = el.innerText?.toLowerCase() || "";
    if (shouldBlur(text)) {
      if (!el.dataset.rkisoner) {
        el.style.filter = "blur(12px)";
        el.style.position = "relative";

        // GTA VI styled overlay
        const overlay = document.createElement("div");
        overlay.innerText = "⭐ RKISIONER FILTERED ⭐";
        overlay.style.position = "absolute";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.5)";
        overlay.style.color = "#ff4cff";
        overlay.style.fontSize = "18px";
        overlay.style.fontWeight = "bold";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "9999";
        el.appendChild(overlay);

        el.dataset.rkisoner = "true";
      }
    }
  });
}

function shouldBlur(text) {
  return rkisonerSettings.keywords.some((word) =>
    text.includes(word.toLowerCase())
  );
}
