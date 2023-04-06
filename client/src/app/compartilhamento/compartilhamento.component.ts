import { Component, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compartilhamento',
  templateUrl: './compartilhamento.component.html',
  styleUrls: ['./compartilhamento.component.scss']
})

export class CompartilhamentoComponent {

  playlistId: number = 0;
  pageLink: string = "";

  constructor(private clipboard: Clipboard, private route: ActivatedRoute, private router: Router) {};

  copyLink() {
    this.clipboard.copy(this.pageLink);
  }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.playlistId = id;
    this.pageLink = "https:://localhost:3000/playlist/" + this.playlistId;
  }

}
