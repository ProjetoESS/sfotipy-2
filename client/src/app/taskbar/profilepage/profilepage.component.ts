import { Component } from '@angular/core';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent {
	username : string;
	followers : Number;

	constructor(){
		// Change to default values
		this.username = "Victor"; 
		this.followers = 5471;
	}

	logOut(){
		//To do
	}
}
