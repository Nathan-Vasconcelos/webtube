const divPai = document.getElementById("conteiner-video");
const botaoPesquisar = document.getElementById("botaoPesquisar");

function carregarVideo(){
    const link = document.getElementById("barraDePesquisa").value;
    console.log("carregando vídeo");
    console.log(link);
    divPai.innerHTML =
    `<iframe width="100%" height="72%" src="https://www.youtube.com/embed/${link}"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen class="video"></iframe>`
}

botaoPesquisar.addEventListener("click", carregarVideo);