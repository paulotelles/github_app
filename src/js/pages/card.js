function createCard(model) {
  let cardArea = document.querySelector(".repositories-cardarea");
  cardArea.innerHTML = "";

  //recuperando o valor do filtro e ordenando conforme o necessário
  let order = document.querySelector(".starFilter");
  if (order.value == "descending") {
    model.sort(function (a, b) {
      return b.stargazers_count - a.stargazers_count;
    });
  }
  if (order.value == "ascending") {
    model.sort(function (a, b) {
      return a.stargazers_count - b.stargazers_count;
    });
  }

  model.forEach((element) => {
    //percorrendo os objetos e trocando os valores nulos por vazio"
    Object.keys(element).forEach((key) => {
      if (element[key] == null) {
        element[key] = " ";
      }
    });

    //criando a div do card e adicionando a class
    let card = document.createElement("div");
    card.classList.add("card");

    //adicionando o html do card já com os valores recebido
    card.innerHTML = `<div class="card-header">
          <h3 class="title-mediumblack">${element.name}</h3>
          <p class="text-medium">
            <span class="primarycolor">${element.stargazers_count}</span> Stars
          </p>
        </div>
        <h4 class="title-subtitle">${element.language}</h4>
        <p class="text-small">
          ${element.description}
        </p>
        <button class="button2" data-repofullname="${element.full_name}">VER DETALHES</button>
        `;
    cardArea.appendChild(card);
  });
}
