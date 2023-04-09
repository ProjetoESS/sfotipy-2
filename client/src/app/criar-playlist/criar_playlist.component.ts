import { Component, HostListener } from '@angular/core';
import { OnInit } from '@angular/core';
import { Playlist } from '../../../../common/playlist';
import { PlaylistService } from '../playlist.service';
import { MusicasService } from '../musicas.service';
import { Router, NavigationExtras } from '@angular/router';
import { CriarPlaylistModule } from './criar_playlist.module';

@Component({
  selector: 'app-root',
  templateUrl: './criar_playlist.component.html',
  styleUrls: ['./criar_playlist.component.css']
})


export class CriarPlaylistComponent implements OnInit {
  user_id: number = 1
  id: number = 6
  successMessage: string = '';
  nome_playlist: string = ''
  imagem_playlist: string = ''
  publicavel: string = ''
  musicas_add: string[] = []
  musicasFiltradas: string[] = [];
  exibirPopup: boolean = false;

  @HostListener('document:click', ['$event'])
  fecharPopup(event: MouseEvent) {
    const addMusicaElement = (event.target as Element)?.closest('.addMusica');
    if (!addMusicaElement) {
      this.exibirPopup = false;
    }
  }

  constructor(private playlistService: PlaylistService, private musicservice: MusicasService, private router: Router) { }

  musicas = this.musicservice.getMusics()

  adicionarMusica(musica: string) {
    this.musicas_add.push(musica)
  }

  exibirOpcoesMusicas() {
    // exibe o pop-up de opções de músicas
    this.exibirPopup = true;

  }

  filtrarMusicas(event: KeyboardEvent) {
    // filtra as músicas com base no texto de pesquisa e atualiza a lista de músicas filtradas
    const textoPesquisa = (event.target as HTMLInputElement).value.toLocaleLowerCase()
    this.musicas.subscribe(musicas => {
      this.musicasFiltradas = musicas.filter(musica =>
        musica.name.toLowerCase().startsWith(textoPesquisa)
      ).map(musica => musica.name);
    });

  }

  criarPlaylist(event: Event) {
    event.preventDefault();
    this.nome_playlist = (document.querySelector('.playlist_input_name') as HTMLInputElement).value
    this.imagem_playlist = (document.querySelector('.picture_input') as HTMLInputElement).value
    this.publicavel = String((document.querySelector('.publicar_input') as HTMLInputElement).checked)
    if (this.publicavel == 'true') {
      this.publicavel = 'public'
    } else {
      this.publicavel = 'private'
    }

    if (!this.nome_playlist) {
      alert('Preencha o nome da playlist.');
      return;
    }

    if (this.nome_playlist.length > 35) {
      alert('Nome da playlist não pode ser maior que 35 caracteres.')
      return
    }

    this.playlistService.verificarNomePlaylistExistente(this.nome_playlist).subscribe(result => {
      if (result) {
        alert('Já existe uma playlist com esse nome');
        return
      } else {
        this.musicservice.getMusics().subscribe(musics => {
          const musicIdsToAdd = [];

          // Iterate over the songs in musicas_add and search for their IDs
          for (const musica of this.musicas_add) {
            const matchingMusic = musics.find(m => m.name.toLowerCase() === musica.toLowerCase());
            if (matchingMusic) {
              musicIdsToAdd.push(matchingMusic.id);
            }
          }
          console.log(musics)
        })

        const playlist = new Playlist(<Playlist><unknown>{
          "id": 0,
          "ownerId": this.user_id,
          "name": this.nome_playlist,
          "categories": [],
          "musics": this.musicas_add,
          "image": this.imagem_playlist,
          "link": "",
          "owner": "",
          "followers": [],
          "availability": this.publicavel
        })

        const novaPlaylist = this.playlistService.addPlaylist(playlist).subscribe(newPlaylists => {

          alert('Playlist criada com sucesso')
          this.router.navigate(['/minhas_playlists']);
        });
      }
    })

  }

  ngOnInit(): void {
    this.musicas.subscribe(musicas => {
      this.musicasFiltradas = musicas.map(musica => musica.name);

    });

    const input_pic: HTMLElement | null = document.querySelector('.picture_input');
    const pictureImage = document.querySelector('.picture_image')
    if (input_pic && pictureImage) {
      input_pic.addEventListener('change', function (e) {
        const inputTarget = e.target as HTMLInputElement;
        if (inputTarget.files) {
          const file = inputTarget.files[0];
          const reader = new FileReader();
          reader.addEventListener('load', function (e) {
            const readerTarget = e.target
            if (readerTarget && readerTarget.result) {
              const img = document.createElement('img');
              img.src = readerTarget.result as string
              img.classList.add('picture_img')

              pictureImage.innerHTML = '';
              pictureImage.appendChild(img)
            }
          })
          reader.readAsDataURL(file);
        }
      })
    }
  }
}
