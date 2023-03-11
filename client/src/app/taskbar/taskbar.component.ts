import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent {
  @Input() isLogged : boolean = true;

  @Output() logOutEvent = new EventEmitter<boolean>();

	toHome() : void{
		//To do
	}
	
    showProfile() : void{
		let disp : string = document.getElementById("pp")!.style.display;
		
        if(disp != "none"){
          document.getElementById("pp")!.style.display="none";
        }
        else{
          document.getElementById("pp")!.style.display="block";
        }
    }

	getLogOut($event : boolean) : void{
		this.isLogged = $event
		document.getElementById("pp")!.style.display="none";

    this.logOutEvent.emit(this.isLogged);
	}
}
