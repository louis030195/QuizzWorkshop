import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {ColorPage} from "../color/color";

/**
 * Generated class for the BrainstormingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brainstorming',
  templateUrl: 'brainstorming.html',
})
export class BrainstormingPage {
  private index : number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage ) {
    this.index=0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrainstormingPage');
  }

  brainstorming(value){
    console.log("value : "+value);

    for(let char in value){
      console.log("value : "+value[char]);

      let j;
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


    this.index++;
    console.log("index : "+this.index);

    switch(this.index){
      case 1:
        (document.getElementById('1') as HTMLDivElement).hidden = true;

        (document.getElementById('2') as HTMLDivElement).hidden = false;
        break;
      case 2:
        (document.getElementById('2') as HTMLDivElement).hidden = true;

        (document.getElementById('3') as HTMLDivElement).hidden = false;

        break;
      case 3:
        (document.getElementById('3') as HTMLDivElement).hidden = true;

        (document.getElementById('4') as HTMLDivElement).hidden = false;

        break;
      case 4:
        (document.getElementById('4') as HTMLDivElement).hidden = true;

        (document.getElementById('5') as HTMLDivElement).hidden = false;

        break;
      case 5:
        this.navCtrl.push(ColorPage, {animation:"ios-transition",animate:true
        });
        break;
    }

  }

}
