const input = document.getElementById("keywords");
const saveBtn = document.getElementById("save");
const toast = document.getElementById("toast");

// Load saved keywords
chrome.storage.local.get("rkisonerSettings", (res) => {
  const settings = res.rkisonerSettings || { keywords: [] };
  input.value = settings.keywords.join(", ");
});

// Save new keywords
saveBtn.addEventListener("click", () => {
  const words = input.value
    .split(",")
    .map((w) => w.trim())
    .filter((w) => w.length);

  chrome.storage.local.set({ rkisonerSettings: { keywords: words } }, () => {
    // Show toast
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);

    // Play Rockstar sound 🎵
    const audio = new Audio(chrome.runtime.getURL("save.mp3"));
    audio.play();
  });
});
