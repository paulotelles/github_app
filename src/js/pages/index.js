let buttonSearchUser = document.getElementById("searchusername");

buttonSearchUser.addEventListener("click", (evento) => {
  evento.preventDefault();
  let userName = document.getElementById("username");

  /* abrindo a comunicação com a api*/
  fetch(`https://api.github.com/users/${userName.value}`)
    .then((resposta) => {
      /*se encontrar o usuário*/
      if (resposta.ok) {
        window.location = `./another-page.html?username=${userName.value}`;
        return (userName.value = "");
      }

      /*se o servidor responder com 404*/
      if (resposta.status === 404) {
        let warningDiv = document.querySelector(".display-error");

        let warnBootstrap = `
        <div class="alert alert-danger fade in alert-dismissible">
          <a
            href="#"
            class="close"
            data-dismiss="alert"
            aria-label="close"
            title="close"
            >×</a
          >
          <strong>Usuário: ${userName.value}</strong> não encontrado, tente novamente.
        </div>
        `;
        warningDiv.innerHTML = warnBootstrap;
        return (userName.value = "");
      }

      /*caso ocorra algum erro*/
      throw new Error(
        `Não foi possível executar sua solicitação, retorno: ${resposta.status}`
      );
    })
    .catch((error) => {
      console.log(
        "Não foi possível executar a requisição, erro: " + error.message
      );
    });
});
