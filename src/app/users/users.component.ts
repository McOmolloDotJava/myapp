import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
usersToView =[];
  constructor(private usersService: HeroService) { }

  ngOnInit() {
    this.recieveUsers();
  }

  recieveUsers(){
this.usersService.getData().subscribe(myUsers =>{
this.usersToView = myUsers
console.log('userstoview',this.usersToView);
console.log('users',myUsers);
});

  }

}
