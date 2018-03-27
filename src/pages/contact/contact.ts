import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultPage} from "../result/result";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  private contact : FormGroup;
  private createdCode;
  private elementType : 'url' | 'canvas' | 'img' = 'url';
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.createdCode = "MATMSG:TO:sonlight03@mail.com;\
      SUB:My results;BODY:I just finished your quizz,\n\
      [Insert feedback / comments here]\n\
      Thanks\n\
      [Your Name];";
    this.contact = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }


  click() {
    this.navCtrl.push(ResultPage, {
      animation: "ios-transition", animate: true
    });
  }

}
