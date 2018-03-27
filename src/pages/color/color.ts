import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ResultPage } from '../result/result';
import {ContactPage} from "../contact/contact";

/**
 * Generated class for the ColorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-color',
  templateUrl: 'color.html',
})
export class ColorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorPage');
  }

  color(value){
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
    this.navCtrl.push(ContactPage, {animation:"ios-transition",animate:true
    });
  }

}
