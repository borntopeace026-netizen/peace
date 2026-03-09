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

  if (logo && easterEgg) {
    logo.addEventListener("click", function () {
      clickCount += 1;

      if (clickCount === 5) {
        easterEgg.classList.add("show");

        setTimeout(function () {
          easterEgg.classList.remove("show");
          clickCount = 0;
        }, 4000);
      }
    });
  }
});
