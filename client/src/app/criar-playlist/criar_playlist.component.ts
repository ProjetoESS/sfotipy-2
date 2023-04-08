import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Playlist } from '../../../../common/playlist';
import { PlaylistService } from '../playlist.service';
import { Router, NavigationExtras } from '@angular/router';

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
  constructor(private playlistService: PlaylistService, private router: Router) { }

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
        const playlist = new Playlist(<Playlist><unknown>{
          "id": 0,
          "ownerId": this.user_id,
          "name": this.nome_playlist,
          "categories": [],
          "musics": [],
          "image": this.imagem_playlist,
          "link": "",
          "owner": "",
          "followers": [],
          "availability": this.publicavel
        })

        const novaPlaylist = this.playlistService.addPlaylist(playlist).subscribe(newPlaylists => {
          //console.log(newPlaylists)
          alert('Playlist criada com sucesso')
          this.router.navigate(['/minhas_playlists']);
        });
      }
    })




  }

  ngOnInit(): void {
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
