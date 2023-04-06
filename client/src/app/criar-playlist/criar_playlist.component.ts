import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './criar_playlist.component.html',
  styleUrls: ['./criar_playlist.component.css']
})
export class CriarPlaylistComponent implements OnInit {
    user_id: number = 1
    id: number = 1


    constructor(private playlistService : PlaylistService, private router: Router) {}

    criarPlaylist(event: Event) {
      event.preventDefault()
      const nome_playlist = document.querySelector('.playlist_input_name') as HTMLInputElement
      const imagem_playlist = document.querySelector('.picture_input') as HTMLInputElement
      const publicavel = document.querySelector('.publicar_input') as HTMLInputElement

      if (!nome_playlist.value) {
        alert('Preencha o nome da playlist');
        return;
      }

      const playlist = {
        id: this.id,
        name: nome_playlist.value,
        ownerId: this.user_id,
        image: imagem_playlist.value,
        isPublic: publicavel.checked,
        categories: [],
        songs: []
      };
      this.id++;
      this.playlistService.addPlaylist(playlist).subscribe((response: any) => {
        const navigationExtras: NavigationExtras = {
          state: {
            successMessage: 'Playlist criada com sucesso!'
          }
        };
        this.router.navigateByUrl('/minhas_playlists', navigationExtras);
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
