function createContainer(model) {
  let container = document.querySelector(".container");

  return (container.innerHTML = `<div class="container-header">
    <h3 class="title-mediumwhite repo-name">${model.name}</h3>
  </div>
  <div class="container-main">
    <div>
      <p class="text-medium repo-stars"><span>${
        model.stargazers_count
      }</span> Stars</p>
      ${
        model.language === null
          ? ""
          : `<p class="text-medium repo-language">${model.language}</p>`
      }
      ${
        model.description === null
          ? ""
          : `<p class="text-medium repo-description">
      ${model.description}
    </p>`
      } 
    </div>
    <button class="button2 buttonGit" data-repourl="${
      model.svn_url
    }">VER NO GITHUB</button>
  </div>`);
}

module.exports.createContainer = createContainer;
