const modal = document.getElementById("bankModal");
const motivoText = document.getElementById("motivo-text");

function openModal(motivo) {
  motivoText.textContent = motivo ? `Motivo sugerido: ${motivo}` : '';
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}

function copyCBU() {
  const cbuText = document.getElementById("cbu-text").textContent.replace("CBU: ", "");
  navigator.clipboard.writeText(cbuText).then(() => {
    const status = document.getElementById("copy-status");
    status.textContent = "¡CBU copiado ✅!";
    setTimeout(() => {
      status.textContent = "";
    }, 2000);
  }).catch(err => {
    alert("No se pudo copiar el CBU. Por favor copia manualmente.");
  });
}
