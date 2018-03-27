import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {BrainstormingPage} from "../brainstorming/brainstorming";

/**
 * Generated class for the WordsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-words',
  templateUrl: 'words.html',
})
export class WordsPage {
  private index : number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.index = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WordsPage');
  }

  words(result){
    this.index++;
    if(result=="1"){
      let value : any = (document.getElementById('value') as HTMLParagraphElement).innerText;
      for(let char in value){

        let j = 1;
        this.storage.get(value[char]).then((val) => {
          if(val==null) {
            j = 1;
          }
          else {
            j = +val + 1;
          }
          this.storage.set(value[char], j);

        });


      }
    }

    switch(this.index){
      case 1:
        (document.getElementById('words') as HTMLParagraphElement).innerText = "The key to happiness is simplicity";
        (document.getElementById('value') as HTMLParagraphElement).innerText = "14";
        break;
      case 2:
        (document.getElementById('words') as HTMLParagraphElement).innerText = "Be a gamechanger";
        (document.getElementById('value') as HTMLParagraphElement).innerText = "25";
        break;
      case 3:
        (document.getElementById('words') as HTMLParagraphElement).innerText = "I follow my own direction";
        (document.getElementById('value') as HTMLParagraphElement).innerText = "25";
        break;
      case 4:
        (document.getElementById('words') as HTMLParagraphElement).innerText = "Everything starts with a dream";
        (document.getElementById('value') as HTMLParagraphElement).innerText = "234";
        break;
      case 5:
        (document.getElementById('words') as HTMLParagraphElement).innerText = "Who keeps his children soul never ages";
        (document.getElementById('value') as HTMLParagraphElement).innerText = "2";
        break;
      case 6:
        (document.getElementById('words') as HTMLParagraphElement).innerText = "At the right place at the right time";
        (document.getElementById('value') as HTMLParagraphElement).innerText = "14";
        break;
      case 7:
        (document.getElementById('words') as HTMLParagraphElement).innerText = "After going around the world all you want is to stay at home";
        (document.getElementById('value') as HTMLParagraphElement).innerText = "14";
        break;
      case 8:
        (document.getElementById('words') as HTMLParagraphElement).innerText = "Take caring of your life is taking care of you";
        (document.getElementById('value') as HTMLParagraphElement).innerText = "35";
        break;
      case 9:
        this.navCtrl.push(BrainstormingPage, {animation:"ios-transition",animate:true
        });
        break;
    }

  }

}
