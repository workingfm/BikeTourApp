import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ModalController, ToastController } from 'ionic-angular';

@Injectable()
export class UtilsProvider {

  constructor(
    public http: HttpClient,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alert: AlertController) {
    console.log('Hello UtilsProvider Provider');
  }

  showAlert(title: string, subtitle: string) {
    let alert = this.alert.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Ok']
    })
    alert.present();
  }

  showModal(component:any, data: any ) {
    let profileModal = this.modalCtrl.create(component, data);
    profileModal.present();
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

}
