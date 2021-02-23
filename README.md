# Github App

This application was developed to consult Github user profiles, bringing information about the user and the repositories through communication with the Github API.

Esse aplicativo foi desenvolvido para fazer consultas aos perfis de usuários do Github, trazendo informações sobre o usuário e os repositórios através da comunicação com a API do Github.


## :pushpin: Goals and challenges / Objetivos e desafios

Objective: Develop an application that searches for user data and their repositories, within the Github application.

Objetivo: Desenvolver uma aplicação que busca dados do usuário e seus repositórios, dentro da aplicação do Github.

Desafios:

- [x] Communicate with the Github API / Fazer a comunicação com a API do Github
- [x] Get user profile information. / Trazer informações sobre o perfil do usuário
- [x] Get information about all user's public repositories. / Trazer informações sobre todos os repositórios públicos do usuário.
- [x] Criar filtro para ordenação dos repositórios por estrelas. / Create filter for ordering repositories by stars.
- [x] Create a page for detailing the user's repository. / Criar uma pagina para detalhamento do repositório do usuário.
- [x] Treating returning null when consuming Github API. / Tratar os dados nulos retornados da API do Github.


## :rocket: Technologies / Tecnologias

- HTML
- Gulp
- Babel
- Sass
- Browsersync
- Javascript


## :movie_camera: Live Version

`https://paulotelles.github.io/github_app/index.html`


## :technologist: How to use / Como utilizar

You can start by downloading the project to your machine.

Inicialmente deve começar baixando o projeto em sua máquina.


### Initializing / Iniciando

To start, you must run the first command inside the folder you downloaded the project to install all dependencies. After installation, which may take a few minutes depending on your internet, you can compile and run the program using the second command.

Para iniciar você deve rodar o primeiro comando dentro da pasta que você baixou o projeto para instalar todas as dependências. Após a instalação que pode demorar alguns minutos dependendo da sua internet, você poderá compilar e executar o programa utilizando o segundo comando.

`yarn install`
</br>
`gulp server`


### Github API

- Api Documentation: `https://docs.github.com/en/rest`

- Endpoints:

  > User Details: `https://api.github.com/users/{username}`
  
  > User Repositories: `https://api.github.com/users/{username}/repos`
  
  > Repository Details: `https://api.github.com/repos/{full_name}`
