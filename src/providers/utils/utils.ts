import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ModalController } from 'ionic-angular';

@Injectable()
export class UtilsProvider {

  constructor(
    public http: HttpClient,
    public modalCtrl: ModalController,
    public alert: AlertController) {
    console.log('Hello UtilsProvider Provider');
  }

  showAlert() {
    let alert = this.alert.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    })
    alert.present();
  }

  showModal(component:any, data: any ) {
    let profileModal = this.modalCtrl.create(component, data);
    profileModal.present();
  }

}
