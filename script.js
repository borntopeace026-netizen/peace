document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.getElementById("copyBtn");
  const contractAddress = document.getElementById("contractAddress");
  const logo = document.getElementById("logo");
  const easterEgg = document.getElementById("easterEgg");

  if (copyBtn && contractAddress) {
    copyBtn.addEventListener("click", async function () {
      try {
        await navigator.clipboard.writeText(contractAddress.textContent.trim());
        copyBtn.textContent = "COPIED";

        setTimeout(function () {
          copyBtn.textContent = "COPY";
        }, 1500);
      } catch (error) {
        copyBtn.textContent = "ERROR";
      }
    });
  }

  let clicks = 0;

  if (logo && easterEgg) {
    logo.addEventListener("click", function () {
      clicks += 1;

      if (clicks >= 5) {
        easterEgg.classList.add("show");

        setTimeout(function () {
          easterEgg.classList.remove("show");
          clicks = 0;
        }, 4000);
      }
    });
  }
});
