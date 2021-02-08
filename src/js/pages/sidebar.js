function createSideBar(model) {
  // tratando os valores do objeto que são nulos
  Object.keys(model).forEach((key) => {
    if (model[key] == null) {
      model[key] = " ";
    }
  });

  //selecionando a div do sidebar
  let sectionSideBar = document.querySelector(".sidebar");

  //gerando os dados do sidebar com base no model recebido da API
  let sideBarData = `<div class="sidebar-imgcontainer">
        <img src="${model.avatar_url}" class="user-avatar"/>
    </div>
    <h3 class="user-name title-bigwhite">${model.name}</h3>
    <p class="user-bio text-mediumwhite">
      ${model.bio}
    </p>
    <div class="sidebar-followers">
      <p class="user-follower text-mediumwhite">${model.followers} Seguidores</p>
      <p class="user-following text-mediumwhite">${model.following} Seguindo</p>
    </div>
    <p class="user-email text-extrabigwhite">${model.email}</p>
    <div class="sidebar-buttonarea">
            <button class="user-research button_01">
            Pesquisar Novo Usuario
          </button>
    </div>
    `;
  return (sectionSideBar.innerHTML = sideBarData);
}
