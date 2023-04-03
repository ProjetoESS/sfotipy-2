import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent {
	username : string;
	followers : Number;

	@Input() isLogged : boolean = true;

	@Output() logOutEvent = new EventEmitter<boolean>();

	constructor(){
		// Change to default values
		this.username = "Victor"; 
		this.followers = 5471;
	}

	logOut(){
		this.isLogged = false;
		this.logOutEvent.emit(this.isLogged);
	}
}

