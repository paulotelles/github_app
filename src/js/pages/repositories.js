let url_string = window.location.href;
let url = new URL(url_string);
let userName = url.searchParams.get("username");
console.log(userName);

fetch(`https://api.github.com/users/${userName}`)
  .then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    return console.log(resposta);
  })
  .then((json) => {
    return console.log(json);
  });
