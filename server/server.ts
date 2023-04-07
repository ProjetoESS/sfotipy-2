import express = require('express');
import bodyParser = require("body-parser");
import { PlaylistService } from './src/playlist-service';

import { MusicService } from './src/music-service';
import fs = require('fs');
import { Music } from '../common/music';
import { Playlist } from '../common/playlist';
import { Category } from '../common/category';

const app = express();
const cors = require('cors');
const multipart = require('connect-multiparty')

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
app.use(bodyParser.urlencoded({ extended: true }));

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
  const newCategory: Category = req.body.category;
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
  const category: Category = req.body.category;
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
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const multipartMiddleware = multipart({ uploadDir: './usuarios' });

app.post('/usuarios', multipartMiddleware, (req, res) => {
  const files = req.body;
  console.log(files)
  //const userJson = JSON.stringify(files);
  const filePath = './usuarios/user.json';

  // Verifica se o arquivo já existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    let users = [];

    // Se o arquivo já existe, lê o conteúdo e adiciona ao array
    if (!err) {
      const fileContent = fs.readFileSync(filePath);
      users = JSON.parse(fileContent.toString());
    }

    // Adiciona o novo usuário ao array
    users.push(files);

    // Grava o array de usuários no arquivo
    fs.writeFile(filePath, JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to save user data.' });
      } else {
        res.json({ message: 'User data saved.' });
      }
    });
  });
});

app.get('/usuarios', (req, res) => {
  const filePath = './usuarios/user.json';

  // Verifica se o arquivo existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to load user data.' });
    } else {
      // Lê o conteúdo do arquivo
      const fileContent = fs.readFileSync(filePath);
      const users = JSON.parse(fileContent.toString());

      // Verifica se foi passado um email na consulta
      const email = req.query.email;
      if (email) {
        // Filtra o array de usuários pelo email
        const filteredUsers = users.filter((user: { email: string; }) => user.email === email as string);
        res.json(filteredUsers);
      } else {
        // Retorna todos os usuários
        res.json(users);
      }
    }
  });
});

app.use((err: { message: any; }, req: any, res: { json: (arg0: { error: any; }) => void; }, next: any) => res.json({ error: err.message }))


var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { app, server, closeServer }
