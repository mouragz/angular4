import { Component, Inject , OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Translator, TranslatorContainer } from 'angular-translator';
import '../assets/sass/build/ltr/shared.scss';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //optionsSelect: Array<any>;

  ngOnInit() {
    /*this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];*/
  }
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
  /*public isOpenChange(): void { console.log('isOpenChange triggered!'); }

  public onHidden(): void { console.log('onHidden triggered!'); }

  public onShown(): void { console.log('OnShown triggered!'); } */
}
