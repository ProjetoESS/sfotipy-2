import { Component } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent {
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
}
