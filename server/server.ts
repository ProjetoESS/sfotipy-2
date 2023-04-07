import express = require('express');
import bodyParser = require("body-parser");
import { PlaylistService } from './src/playlist-service';

import { MusicService } from './src/music-service';
import { Music } from '../common/music';
import { Playlist } from '../common/playlist';

var app = express();

var musicService: MusicService = new MusicService();
var playlistService = new PlaylistService();

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(allowCrossDomain);

app.use(bodyParser.json());

app.post('/criar_playlist', (req: express.Request, res: express.Response) => {
  const newPlaylist = <Playlist>req.body;
  
  try {
    const result = playlistService.addPlaylist(newPlaylist);
    if (result) {
      return res.status(201).send(result);
    }
    return res.status(400).send({ message: 'Não foi possível criar a playlist.' });
  } catch (error) {
    return res.status(500).send({ message: 'Erro interno do servidor.' });
  }
});


app.get('/minhas_playlists', (req, res) => {
  //const ownerId = parseInt(req.query.ownerId as string);
  const ownerId = 1
  console.log(ownerId) // busca o ownerId a partir dos parâmetros da requisição
  const userPlaylists = playlistService.getUserPlaylists(ownerId); // busca as playlists do usuário a partir do PlaylistService
  res.json(userPlaylists); // retorna as playlists como uma resposta JSON
});

app.get('/musics', function (req, res) {
  const musics = musicService.get();
  res.send(JSON.stringify(musics));
});

app.get('/musics/:id', function (req, res) {
  const id: number = Number(req.params.id);
  const music = musicService.getById(id);
  if (music) {
    res.send(music);
  } else {
    res.status(404).send({ message: `Music ${id} could not be found` });
  }
});

app.post('/musics', function (req: express.Request, res: express.Response) {
  const music: Music = <Music>req.body;
  try {
    const result = musicService.add(music);
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(403).send({ message: "Music list is full" });
    }
  } catch (err) {
    const { message } = err;
    res.status(400).send({ message })
  }
});

app.put('/musics', function (req: express.Request, res: express.Response) {
  const music: Music = <Music>req.body;
  const result = musicService.update(music);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ message: `Music ${music.id} could not be found.` });
  }
});


app.get('/playlist/category/:id', function (req: express.Request, res: express.Response) {
  const playlistId: number = Number(req.params.id);
  const playlist = playlistService.getById(playlistId);
  const playlistCategories = playlist.categories;
  if (playlistCategories) {
    res.send(playlistCategories);
  } else {
    res.status(404).send({ message: 'Playlist could not be found' });
  }
});

app.get('/playlist/category', function (req: express.Request, res: express.Response) {
  const allCategories = playlistService.getAllCategories();
  if (allCategories) {
    res.send(allCategories);
  } else {
    res.status(404).send({ message: "Error getting categories" });
  }
});

app.post('/playlist/category/:id', function (req: express.Request, res: express.Response) {
  const id: number = Number(req.params.id);
  const newCategory: string = req.body.category;
  try {
    const result = playlistService.addNewCategory(id, newCategory);
    if (result) {
      res.send(result);
    } else {
      res.status(404).send(result);
    }
  } catch {
    res.status(403).send({ message: "Could not add new category, reached max size" });
  }
});

app.delete('/playlist/category/:id', function (req: express.Request, res: express.Response) {
  const id: number = Number(req.params.id);
  const category: string = req.body.category;
  try {
    const result = playlistService.deleteCategory(id, category);
    if (result) {
      res.send(result);
    } else {
      res.send({ message: "Invalid playlist" });
    }
  } catch {
    res.send({ message: "Category does not exist in playlist" })
  }
})

app.get('/playlist-em-alta', function (req, res) {
  const plstEa = playlistService.getEA();
  res.send(JSON.stringify(plstEa));
})

app.get('/playlist-publica', function (req, res) {
  const plstEa = playlistService.getPB();
  res.send(JSON.stringify(plstEa));
})

app.get('/playlist-recomendada', function (req, res) {
  const plstEa = playlistService.getRC();
  res.send(JSON.stringify(plstEa));
})

app.get('/playlist-minha', function (req, res) {
  const plstEa = playlistService.getMN();
  res.send(JSON.stringify(plstEa));
})

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { app, server, closeServer }
