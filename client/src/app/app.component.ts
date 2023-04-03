import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Sfotipy';

	isLogged : boolean = true;

	getLogOut($event : boolean) : void{
		this.isLogged = $event;
	}
}
