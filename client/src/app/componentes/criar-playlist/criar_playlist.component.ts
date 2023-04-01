import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './criar_playlist.component.html',
  styleUrls: ['./criar_playlist.component.css']
})
export class PlaylistComponent implements OnInit {
    constructor() {}



    criarPlaylist() {
      const nome_playlist = document.querySelector('.playlist_name') as HTMLInputElement
      const imagem_playlist = document.querySelector('.picture_input_name') as HTMLInputElement
      console.log(nome_playlist)
      console.log(imagem_playlist)
        console.log('bom')
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
