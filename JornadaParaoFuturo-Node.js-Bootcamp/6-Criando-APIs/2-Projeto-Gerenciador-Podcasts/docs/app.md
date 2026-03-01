# Podcast Manager

### Descrição

Um app ao estilo Netflix, aonde posso centralizar diferentes episódios de podcasts separados por categoria

### Domínio

Podcast feito em vídeo

### Features

- Listar os episodios de podcasts em sessões de categorias
  - [saúde, fitness, mentalidade, humor]

  #### Como implementar

  Vou retornar em uma api rest(json) o nome do podcast, nome ep, imagem capa, link, categoria

```js
[
  {
    podcastName: "flow",
    episode: "Nome do Episodio",
    videoId: "pQSuQmUfS30",
    cover: "https://",
    link: "youtube/",
    categoria: ["saúde", "fitness"],
  },
];
```

- Filtrar episódios por nome de podcasts

- Listar os episodios de podcasts em sessões de categorias
