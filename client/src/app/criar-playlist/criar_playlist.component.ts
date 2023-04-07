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

    constructor(private playlistService : PlaylistService, private router: Router) {}

    criarPlaylist(event: Event) {
      event.preventDefault();
      const nome_playlist = document.querySelector('.playlist_input_name') as HTMLInputElement
      const imagem_playlist = document.querySelector('.picture_input') as HTMLInputElement
      const publicavel = document.querySelector('.publicar_input') as HTMLInputElement

      if (!nome_playlist.value) {
        alert('Preencha o nome da playlist');
        return;
      }


     /* if (this.playlistService.verificarNomePlaylistExistente(nome_playlist.value)) {
        console.log('Já existe uma playlist com esse nome');
        exibe mensagem de erro ou faz outra ação apropriada
      } else {*/
        const playlist = new Playlist(
          0,
         nome_playlist.value,
         this.user_id,
         imagem_playlist.value,
         publicavel.checked,
         [],
         []
       );

        const novaPlaylist = this.playlistService.addPlaylist(playlist).subscribe(newPlaylists => {
          console.log(newPlaylists)
            alert('Playlist criada com sucesso')
            this.router.navigate(['/minhas_playlists']);
          });
      }





    ngOnInit(): void {
      const input_pic: HTMLElement | null = document.querySelector('.picture_input');
      const pictureImage = document.querySelector('.picture_image')
      if (input_pic && pictureImage){
      input_pic.addEventListener('change', function(e){
        const inputTarget = e.target as HTMLInputElement;
        if (inputTarget.files){
        const file = inputTarget.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', function(e) {
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
