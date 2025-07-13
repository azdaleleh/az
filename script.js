// Função para mover o botão "Não" aleatoriamente (usado só na página 3)
function moverBotao(botao) {
  const container = botao.closest(".container");
  const maxX = container.offsetWidth - botao.offsetWidth;
  const maxY = container.offsetHeight - botao.offsetHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  botao.style.left = `${randomX}px`;
  botao.style.top = `${randomY}px`;
}

// Página 1 → Página 2 (botão "Não" fixo, só troca de página no clique)
document.getElementById("nao1").addEventListener("click", () => {
  document.getElementById("pagina1").classList.remove("ativa");
  document.getElementById("pagina2").classList.add("ativa");
});

// Página 2 → Página 3 (botão "Não" NÃO foge, apenas troca no clique)
document.getElementById("nao2").addEventListener("click", () => {
  document.getElementById("pagina2").classList.remove("ativa");
  document.getElementById("pagina3").classList.add("ativa");
});

// Página 3 → botão "Não" foge (não troca de página)
document.getElementById("nao3").addEventListener("mouseenter", () => {
  moverBotao(document.getElementById("nao3"));
});

// Botões "Sim" → vão direto pra página final
document.getElementById("sim1").addEventListener("click", () => {
  document.getElementById("pagina1").classList.remove("ativa");
  document.getElementById("paginaFinal").classList.add("ativa");
});
document.getElementById("sim2").addEventListener("click", () => {
  document.getElementById("pagina2").classList.remove("ativa");
  document.getElementById("paginaFinal").classList.add("ativa");
});
document.getElementById("sim3").addEventListener("click", () => {
  document.getElementById("pagina3").classList.remove("ativa");
  document.getElementById("paginaFinal").classList.add("ativa");
});

// Botão de música no topo (▶️)
document.getElementById("playMusica").addEventListener("click", () => {
  const musica = document.getElementById("musicaFundo");
  if (musica.paused) {
    musica.play();
    document.getElementById("playMusica").textContent = "⏸️";
  } else {
    musica.pause();
    document.getElementById("playMusica").textContent = "▶️";
  }
});
