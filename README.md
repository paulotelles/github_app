# Gulp Static Boilerplate


This is a standard for basic projects based on HTML + Sass and with support for multiple pages.

Esse é um boilerplate para projetos básicos baseados em HTML + Sass e com suporte para multiplas páginas.

## Technologies / Tecnologias

- HTML
- Gulp
- Babel
- Sass
- Browsersync

## Initializing / Iniciando

`yarn install`
</br>
`gulp server`

## Acessing Multiple Pages / Acessando Múltiplas Páginas

`http://localhost:3000/another-page.html`

> To create new pages just add the respective files {name} .html at the root of the project.

> Para criar novas páginas basta adicionar os respectivos arquivos {nome}.html na raiz do projeto.

## Folders / Pastas

```sh
│
├── README.md
│
└── dist/ # Folder with the finals style and scripts / Pasta com os arquivos finais de estilo e scripts.
│
└── src
│    ├── img/
│    │
│    ├── js/
│    │   ├── pages/ # Page Scripts / Scripts das páginas
│    │
│    ├── sass/
│        ├── base/
│        ├── components/
│        ├── pages # Estilos das páginas (Apenas esses arquivos são convertidos para CSS pelo Gulp)
│
├── gulpfile.js # Gulp Configs
│
│
```
