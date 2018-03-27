import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {WordsPage} from "../words/words";

/**
 * Generated class for the Question1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-images',
  templateUrl: 'images.html',
})
export class ImagesPage {
  private index : number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    // Or to get a key/value pair

    this.index = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagesPage');

  }

  images(value){

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
        (document.getElementById('paysage') as HTMLDivElement).hidden = true;

        (document.getElementById('art') as HTMLDivElement).hidden = false;
        break;
      case 2:
        (document.getElementById('art') as HTMLDivElement).hidden = true;

        (document.getElementById('personne') as HTMLDivElement).hidden = false;

        break;
      case 3:
        (document.getElementById('personne') as HTMLDivElement).hidden = true;

        (document.getElementById('agencement') as HTMLDivElement).hidden = false;

        break;
      case 4:
        this.navCtrl.push(WordsPage, {animation:"ios-transition",animate:true
        });
        break;
    }
  }

}
