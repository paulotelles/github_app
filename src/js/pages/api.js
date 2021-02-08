//função genérica para comunicação com API

function apiRequest(urlOrigin) {
  return fetch(urlOrigin)
    .then((resposta) => {
      if (resposta.ok) {
        return resposta.json();
      }
      return console.log(resposta);
    })
    .then((json) => {
      return json;
    });
}
