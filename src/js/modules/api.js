//função genérica para comunicação com API
/*module.exports.apiRequest = (urlOrigin) => {
  
}*/

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

module.exports.apiRequest = apiRequest;
