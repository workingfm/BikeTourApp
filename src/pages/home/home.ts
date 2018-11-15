import { Component } from '@angular/core';
import { Globalization } from '@ionic-native/globalization';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, ModalController, NavController, Platform } from 'ionic-angular';
import { TourDetailPage } from '../tour-detail/tour-detail';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  eventSource = [];
  viewTitle: string;
  tours: any;

  constructor(
    public navCtrl: NavController,
    private globalization: Globalization,
    private translate: TranslateService,
    private socialSharing: SocialSharing
  ) {
    this.tours = [{
      title: "Tour Milano 1",
      description: "The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
      img: "assets/imgs/milan.jpeg"
    },
    {
      title: "Tour Milano 2",
      description: "The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
      img: "assets/imgs/tour.png"
    }];
    this.globalization.getPreferredLanguage()
      .then(res => console.log(res))
      .catch(e => console.log(e));

      this.translate.get("SEPTEMBER").subscribe( value => {
        console.log(value);
      });

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  gotoDetail(tour: any) {
      this.navCtrl.push(TourDetailPage, {
        tour: tour
      });
  }

  share(tour: any) {
    this.socialSharing.shareViaFacebook(tour.title, tour.img, tour.title)
    .then(() => {
      console.log("condiviso con successo3");
    }).catch(() => {
      // Sharing via email is not possible
      console.log("error ");
    });
  }

}

