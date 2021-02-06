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
    let userData = json;
    console.log(userData.name);
    console.log(userData.bio);
    console.log(userData.followers);
    console.log(userData.following);
    console.log(userData.email);
    return console.log(userData);
  });

fetch(`https://api.github.com/users/${userName}/repos`)
  .then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    return console.log(resposta);
  })
  .then((json) => {
    let userRepo = json;
    json.forEach((element) => {
      let userRepoData = element;
      console.log(userRepoData.name);
      console.log(userRepoData.stargazers_count);
      console.log(userRepoData.language);
      console.log(userRepoData.description);
      return console.log(userRepo);
    });
  });
