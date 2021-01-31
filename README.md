# Gulp Static Boilerplate

Esse é um boilerplate para projetos básicos baseados em HTML + Sass e com suporte para multiplas páginas.

## Tecnologias

- HTML
- Gulp
- Babel
- Sass
- Browsersync

## Iniciando

`yarn install`
</br>
`gulp server`

## Acessando Múltiplas Páginas

`http://localhost:3000/another-page.html`

> Para criar novas páginas basta adicionar os respectivos arquivos {nome}.html na raiz do projeto.

## Pastas

```sh
│
├── README.md
│
└── dist/ # Pasta com os arquivos finais de estilo e scripts.
│
└── src
│    ├── img/
│    │
│    ├── js/
│    │   ├── pages/ # Scripts das páginas
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
