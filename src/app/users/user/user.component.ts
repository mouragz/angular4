import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import {provideTranslator} from 'angular-translator';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: ['./user.component.scss'],
  providers: [ provideTranslator('users')]
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //using snapshot for first initialization or when recreate component
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params
       .subscribe(
         (params: Params)=>{
             this.user.id=params['id'];
             this.user.name=params['name'];
         }
       );
  }
}
