function toggleMode() {
  console.log("entrou")
  const nome = document.documentElement
  nome.classList.toggle("light")

  // pegar a tag img
  const nomeImg = document.querySelector("#profile img")

  // substituir a imagem
  if (nome.classList.contains("light")) {
    console.log("sim")
    // se tiver light mode, adicionar a imagem light
    nomeImg.setAttribute("src", "./assets/avatar-light.png")
  } else {
    console.log("nao")
    // se tiver sem light mode, manter a imagem normal
    nomeImg.setAttribute("src", "./assets/avatar.png")
  }
}
