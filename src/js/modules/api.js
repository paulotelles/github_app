//função genérica para comunicação com API

function apiRequest(urlOrigin, urlError) {
  return fetch(urlOrigin)
    .then((resposta) => {
      if (resposta.ok) {
        return resposta.json();
      }
      return (window.location = urlError);
    })
    .then((json) => {
      return json;
    });
}

module.exports.apiRequest = apiRequest;
