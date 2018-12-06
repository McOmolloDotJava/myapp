import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  register ={ };

  constructor(private heroService: HeroService) {

   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.register);
    this.heroService.sendData(this.register).subscribe(res => {
      console.log(res)
    }      
      );   
  }

}
