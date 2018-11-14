import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';
import { UtilsProvider } from '../../providers/utils/utils';
import { RegistrationPage } from '../registration/registration';

interface User {
  username: string;
  password: string;
}

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loginProvider: LoginProvider,
    private utils: UtilsProvider) {

    this.user = { username: "", password: "" };
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(): void {
    console.log("User ", this.user);
    this.loginProvider.login(this.user).subscribe(res => {
      if((<any>res).autenticated) {
        console.log(res);
        this.utils.showToast("Login avvenuta con successo");
        this.navCtrl.setRoot(HomePage);
      }
      else {
        this.utils.showAlert("Errore", "Utente non abilitato")
      }
    });
  }

  doRegistration() {
    this.navCtrl.push(RegistrationPage);
  }

}
