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
        console.log('bom')
    }

    ngOnInit(): void {}
}
