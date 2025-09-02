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
