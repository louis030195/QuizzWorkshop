import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ImagesPage} from '../images/images';
import { ResultPage } from '../result/result';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {




  next(){


    this.navCtrl.push(ImagesPage, {animation:"ios-transition",animate:true
    });
  }

  constructor(public navCtrl: NavController, private storage: Storage) {
    //this.fct();
    this.resetStorage();
  }

  resetStorage(){
    let test : any = "123456789";
    let gagnant : number = 0;
    for(let i in test) {
      this.storage.get(i).then((val) => {
        this.storage.set(test[i], null);
      });
    }
  }

  fct(){
    this.navCtrl.push(ResultPage, {animation:"ios-transition",animate:true
    });
  }
}
