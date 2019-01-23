import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login ={ };

  constructor(private loginService: LoginService) {

   }

  ngOnInit() {
  }
  onSubmit(): void {
    console.log(this.login);
    this.loginService.sendData(this.login).subscribe(res => {
      console.log(res+" that is the reult");
      
    }      
      );   
  }
}
