const copyBtn = document.getElementById("copyBtn");
const ca = document.getElementById("ca");

if (copyBtn && ca) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(ca.textContent);
      copyBtn.textContent = "COPIED";
      setTimeout(() => {
        copyBtn.textContent = "COPY";
      }, 1500);
    } catch (err) {
      copyBtn.textContent = "ERROR";
    }
  });
}
