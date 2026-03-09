const copyBtn = document.getElementById("copyBtn");
const contractAddress = document.getElementById("contractAddress");
const holdersCount = document.getElementById("holdersCount");
const logo = document.getElementById("logo");
const easterEgg = document.getElementById("easterEgg");

if (copyBtn && contractAddress) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(contractAddress.textContent.trim());
      copyBtn.textContent = "COPIED";

      setTimeout(() => {
        copyBtn.textContent = "COPY";
      }, 1500);
    } catch (error) {
      copyBtn.textContent = "ERROR";
    }
  });
}

let currentHolders = 128;

if (holdersCount) {
  setInterval(() => {
    const bump = Math.random() < 0.35 ? 1 : 0;
    currentHolders += bump;
    holdersCount.textContent = currentHolders.toLocaleString();
  }, 9000);
}

let logoClicks = 0;

if (logo && easterEgg) {
  logo.addEventListener("click", () => {
    logoClicks += 1;

    if (logoClicks >= 5) {
      easterEgg.classList.add("show");

      setTimeout(() => {
        easterEgg.classList.remove("show");
        logoClicks = 0;
      }, 4000);
    }
  });
}
