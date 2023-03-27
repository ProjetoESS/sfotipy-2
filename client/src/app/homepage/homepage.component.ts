import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  plEma : Array<[string, string]>;
  plPub : Array<[string, string]>;
  plRec : Array<[string, string]>;
  plMin : Array<[string, string]>;

  constructor(){
    //Temporário
    this.plEma = [["plst1", "/assets/cover9.jpg"], ["plst2", "/assets/cover3.webp"], ["plst3", "/assets/cover5.webp"], 
                  ["plst4", "/assets/cover1.jpg"], ["plst5", "/assets/cover2.jpg"]]

    this.plPub = [["plst1", "/assets/cover1.jpg"], ["plst2", "/assets/cover2.jpg"], ["plst3", "/assets/cover3.webp"], 
                  ["plst4", "/assets/cover4.webp"], ["plst5", "/assets/cover5.webp"]];

    this.plRec = [["plst1", "/assets/cover6.jpg"], ["plst2", "/assets/cover7.jpg"], ["plst3", "/assets/cover8.jpg"], 
                  ["plst4", "/assets/cover9.jpg"], ["plst5", "/assets/cover1.jpg"]];

    this.plMin = [["plst1", "/assets/cover2.jpg"], ["plst2", "/assets/cover3.webp"], ["plst3", "/assets/cover4.webp"], 
                  ["plst4", "/assets/cover5.webp"], ["plst5", "/assets/cover6.jpg"]];
  }
  @Input() isLogged : boolean = true;
}
