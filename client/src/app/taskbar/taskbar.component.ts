import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent {
  show : boolean = false;
  @Input() isLogged : boolean = true;

  @Output() logOutEvent = new EventEmitter<boolean>();	
  
  showProfile() : void{
    this.show = !this.show;
  }

	getLogOut($event : boolean) : void{
		this.isLogged = $event
		document.getElementById("pp")!.style.display="none";

    this.logOutEvent.emit(this.isLogged);
	}
}
