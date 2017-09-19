import { Component, DoCheck } from '@angular/core';
import { TranslatorContainer, provideTranslator } from 'angular-translator';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: ['./users.component.scss'],
  providers: [provideTranslator('users')]
})
export class UsersComponent{
  users: any;
  constructor(public translatorContainer: TranslatorContainer) {
    console.log("lang" + translatorContainer.language);
    if (translatorContainer.language == "en") {
      this.users = [
        {
          id: 1,
          name: 'Max'
        },
        {
          id: 2,
          name: 'Anna'
        },
        {
          id: 3,
          name: 'Chris'
        }
      ];
    } else {
      this.users = [
        {
          id: 1,
          name: 'ماكس'
        },
        {
          id: 2,
          name: 'أنا'
        },
        {
          id: 3,
          name: 'كريس'
        }
      ];
    }
  }
}
