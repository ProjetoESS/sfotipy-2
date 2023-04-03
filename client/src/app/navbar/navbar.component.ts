import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  show : boolean = false;
  @Input() isLogged : boolean = true;
  @Output() logOutEvent = new EventEmitter<boolean>();	
  
  showProfile() : void{
    console.log(this.show);
    
    this.show = !this.show;
  }
  
	getLogOut($event : boolean) : void{
		this.isLogged = $event
		document.getElementById("pp")!.style.display="none";

    this.logOutEvent.emit(this.isLogged);
	}
}
