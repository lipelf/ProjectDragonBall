document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  // Seleciona todos os elementos <article> na página
  const articles = document.querySelectorAll("article");

  // Adiciona um ouvinte de evento ao input de pesquisa que será executado sempre que o valor do input mudar
  searchInput.addEventListener("input", () => {
    // Obtém o valor do input de pesquisa e converte para letras minúsculas
    const query = searchInput.value.toLowerCase();

    // Itera sobre todos os artigos
    articles.forEach((article) => {
      const title = article.querySelector("h2").textContent.toLowerCase();

      if (title.includes(query)) {
        article.style.display = "";
      } else {
        article.style.display = "none";
      }
    });
  });

  // Seleciona todos os links dentro do elemento <nav>
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Previne o comportamento padrão do link (navegar para outra página)
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);

      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
