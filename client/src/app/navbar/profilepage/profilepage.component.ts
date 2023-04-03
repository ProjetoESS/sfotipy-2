import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { UserService } from 'src/app/user.service';
import { User } from '../../../../../common/user';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent {
	userId : number = 0;
	user : User = new User;

	@Input() isLogged : boolean = true;

	@Output() logOutEvent = new EventEmitter<boolean>();

	constructor(private userService : UserService){
	
	}

	logOut(){
		this.isLogged = false;
		this.logOutEvent.emit(this.isLogged);
	}

	ngOnInit() : void{
		this.userService.getUserById(this.userId)
			.pipe(
				tap({
				next: as => { this.user = as; },
				error: msg => { alert(msg.message); }
				})
			)
			.subscribe();
	}
}

