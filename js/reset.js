// Solução adequada quando a página não recarrega, 
// e sim vai para uma página e volta, apagando o conteúdo já salvo no cache
window.addEventListener("pageshow", () => {
  const formulario = document.getElementById('form-contato');
  if (formulario) {
    formulario.reset(); // Limpa todos os inputs, textareas e selects automaticamente
  }
});