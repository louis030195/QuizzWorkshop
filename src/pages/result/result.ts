import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  private result;
  private total : number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.total = 0;
    this.result = new Array();
    this.findResult();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  findResult(){
    let test : any = "12345";
    for(let i in test) {
      this.storage.get(test[i]).then((val) => {
        console.log("storage "+test[i]+" : " + val);
        this.result[test[i]] = val;
        this.total += this.result[test[i]];
        if(test[i] == 5){
          this.log();
        }
      });
    };
  }

  log(){
    for(var i=1; i<this.result.length; i++){
      switch(i){
        case 1:
          (document.getElementById('resultBW') as HTMLParagraphElement).innerText =  Math.round(((this.result[i]*100)/this.total)) + "%";
          break;
        case 2:
          (document.getElementById('resultEP') as HTMLParagraphElement).innerText = Math.round(((this.result[i]*100)/this.total)) + "%";
          break;
        case 3:
          (document.getElementById('resultVO') as HTMLParagraphElement).innerText = Math.round(((this.result[i]*100)/this.total)) + "%";
          break;
        case 4:
          (document.getElementById('resultMH') as HTMLParagraphElement).innerText = Math.round(((this.result[i]*100)/this.total)) + "%";
          break;
        case 5:
          (document.getElementById('resultGM') as HTMLParagraphElement).innerText = Math.round(((this.result[i]*100)/this.total)) + "%";
          break;
        }
      console.log(" numero " + i + " : " + Math.round(((this.result[i]*100)/this.total)) + "%");
    }
  }
}
