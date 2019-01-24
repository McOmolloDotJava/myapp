import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login ={ };
  error = "";

  constructor(private loginService: LoginService,private router: Router) {

   }

  ngOnInit() {
  }
  onSubmit(): void {
    console.log(this.login);
    this.loginService.sendData(this.login).subscribe(res => {
      console.log(res+" that is the reult");
      if(res==1){
        console.log(res+" login successfull");
        this.router.navigateByUrl('/dashboard');
      }else{
        console.log(res+" login failed");
        this.error=" error login failed";
        console.log(this.error);
        this.router.navigateByUrl('/login');
      }
    }      
      );   
  }
}
