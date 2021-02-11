const { apiRequest } = require("../modules/api");
const { createContainer } = require("../modules/container");

let url_string = window.location.href;
let url = new URL(url_string);
let userName = url.searchParams.get("username");
let repository = url.searchParams.get("reponame");

if (userName === null || repository === null) {
  return (window.location = `./index.html`);
}

let returnButton = document.querySelector(".returnButton");
returnButton.addEventListener("click", (event) => {
  event.preventDefault();
  return (window.location = `./repositories.html?username=${userName}`);
});

let repositoryDetails = apiRequest(
  `https://api.github.com/repos/${userName}/${repository}`,
  `./index.html`
).then((repoData) => {
  createContainer(repoData);

  let buttonGit = document.querySelector(".buttonGit");
  let buttonData = buttonGit.dataset.repourl;
  buttonGit.addEventListener("click", (event) => {
    event.preventDefault;
    return window.open(buttonData);
  });
});
