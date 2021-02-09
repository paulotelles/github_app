const { apiRequest } = require("../modules/api");
const { createCard } = require("../modules/card");
const { createSideBar } = require("../modules/sidebar");

//recuperando o parametro da url para utilizar

let url_string = window.location.href;
let url = new URL(url_string);
let userName = url.searchParams.get("username");

//fazendo a primeira requisição com os dados necessários no sidebar.

let userData = apiRequest(`https://api.github.com/users/${userName}`).then(
  (userData) => {
    //função para construção do sidebar
    createSideBar(userData);

    let newSearch = document.querySelector(".user-research");
    newSearch.addEventListener("click", (event) => {
      event.preventDefault();
      return (window.location = `./index.html`);
    });
  }
);

//fazendo a requisão para dar carga na parte dos repositórios
function getUserRepo(userName) {
  let userRepo = apiRequest(
    `https://api.github.com/users/${userName}/repos`
  ).then((userData) => {
    createCard(userData);

    //coloca um listener em todos os botões e recupera o dado do nome do repositorio para acesso.
    let buttonDetails = document.querySelectorAll(".button2");
    buttonDetails.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        let repoFullName = button.dataset.repofullname;
        return (window.location = `./repositoriesdetails.html?repofullname=${repoFullName}`);
      });
    });
  });
}

getUserRepo(userName);

//
// colocando um listener na mudança de valores do filtro de estrelas e caso tenha mudança, alterar o repositorio
//

let filterStars = document.querySelector(".starFilter");
filterStars.addEventListener("change", () => {
  getUserRepo(userName);
});

//
// colocando um listener no button do sidebar
//
