import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {provideTranslator} from 'angular-translator';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['./home.component.scss'],
  providers: [ provideTranslator('home') ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServer(id: number){
    //complex calculation 
     this.router.navigate(['/servers',id,'edit'],{queryParams:{allowEdit: '1'},fragment:'loading'});
  }

}
