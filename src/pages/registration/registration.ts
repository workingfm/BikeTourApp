import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  user: any = {
    name: "",
    surname: "",
    email: "",
    password: ""
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  registration() {
    console.log("Registration", this.user);
    //chiama servizio di registrazione e rimanda alla login page 
  }

}
