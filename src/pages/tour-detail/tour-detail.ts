import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

declare var google;

@IonicPage()
@Component({
  selector: 'page-tour-detail',
  templateUrl: 'tour-detail.html',
})
export class TourDetailPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  tour: any;
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date(),
    locale: 'en-GB'
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController, 
    private alertCtrl: AlertController,
    private translate: TranslateService,
    public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourDetailPage');
    this.translate.get("SEPTEMBER").subscribe( value => {
      console.log(value);
    });
    console.log(this.navParams.get("tour"));
    this.tour = this.navParams.get("tour");
    this.loadMap();
      
  }

  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      debugger
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }, (err) => {
      console.log(err);
    });
 
  }



  addEvent(currentDate: any) {
    console.log(currentDate);
    let modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;

        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);

        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  test() {
    console.log("test");
  }

  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }


}
