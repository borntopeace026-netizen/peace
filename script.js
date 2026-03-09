document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.getElementById("copyBtn");
  const contractAddress = document.getElementById("contractAddress");
  const logo = document.getElementById("logo");
  const easterEgg = document.getElementById("easterEgg");

  if (copyBtn && contractAddress) {
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(contractAddress.textContent.trim());
      copyBtn.textContent = "COPIED";

      setTimeout(function () {
        copyBtn.textContent = "COPY";
      }, 1500);
    });
  }

  let clickCount = 0;
  let resetTimer = null;

  if (logo && easterEgg) {
    logo.addEventListener("click", function () {
      clickCount += 1;

      if (resetTimer) {
        clearTimeout(resetTimer);
      }

      resetTimer = setTimeout(function () {
        clickCount = 0;
      }, 2000);

      if (clickCount >= 3) {
        easterEgg.classList.add("show");

        setTimeout(function () {
          easterEgg.classList.remove("show");
        }, 3000);

        clickCount = 0;
      }
    });
  }
});
