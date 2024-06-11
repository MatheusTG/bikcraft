// Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  console.log(link.href, window.location.href)
  console.log(link.origin,  window.location.href)
  console.log('=====')
  if (
    link.href.includes(window.location.href) &&
    link.origin + "/" !== window.location.href && // development
    link.origin + "/bikcraft/" !== window.location.href // production (GitHub)
  ) {
    link.classList.add("ativo");
  }
}

if (links) {
  links.forEach(ativarLink);
}

// Ativar Items do Orçamento
const paramentros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}

paramentros.forEach(ativarProduto);

// Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;

  media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function selecionarImagem(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(selecionarImagem);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
