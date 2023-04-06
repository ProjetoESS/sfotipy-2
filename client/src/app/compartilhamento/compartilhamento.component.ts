import { Component, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard'

@Component({
  selector: 'app-compartilhamento',
  templateUrl: './compartilhamento.component.html',
  styleUrls: ['./compartilhamento.component.scss']
})

export class CompartilhamentoComponent {

  @Input() playlistId: string = "";
  pageLink = "https:://localhost:3000/playlist/" + this.playlistId;

  constructor(private clipboard: Clipboard) {};

  copyLink() {
    this.clipboard.copy(this.pageLink);
  }

}
