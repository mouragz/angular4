import { Component, Inject , OnInit, ViewEncapsulation} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Translator, TranslatorContainer } from 'angular-translator';
import '../assets/sass/build/ltr/shared.scss';
@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dir: string;
  lang: string = "en";
  public radioModel: string = 'Left';
  constructor( @Inject(DOCUMENT) private document: any, private translator: Translator, public translatorContainer: TranslatorContainer) { }
  toogleLanguage(lang) {
    console.log("called")
    if (lang == 'en' || lang == 'ch') {
      this.translatorContainer.language = lang == 'en' ? 'en' : 'ch';
      this.dir = 'ltr';
      this.document.getElementById('dirHtml').setAttribute('dir', 'ltr');
      this.document.getElementById('languageMain').setAttribute('href', '/main.css');
    } else {
      this.translatorContainer.language = 'ar';
      this.dir = 'rtl';
      this.document.getElementById('dirHtml').setAttribute('dir', 'rtl');
      this.document.getElementById('languageMain').setAttribute('href', '/main.rtl.css');
    }
  }
}
