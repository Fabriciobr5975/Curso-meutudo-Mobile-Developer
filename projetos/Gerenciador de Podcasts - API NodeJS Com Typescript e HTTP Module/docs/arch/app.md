# Nome do Aplicativo

Podcast Manager

### Descrição

Um app ao estilo Netflix, aonde passa centralizar diferentes episódios separados por categorias

### Domínio

Podcast feitos em vídeo

### Features

- Listar os episódios de podcasts em sessões de categorias
  - [saúde, bodybuild, mentalidade, humor]
- Filtrar episódios de nome de podcasts

## Como

#### Feature

Listar os episódios de podcasts em sessões de categorias

### Como vou implementar

GET: Retorna lista de episódios

response:

```js
[
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saúde", "esporte", "bodybuild"],
  },
  {
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"],
  },
];
```
GET: Retorna a lista de episódios baseado em um parâmetro enviado pelo client do nome do podcast