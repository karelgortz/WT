import {Component, OnInit} from '@angular/core';
import {SwPush} from "@angular/service-worker";
import {NotificationService} from "../services/notification.service";
import { getMessaging, getToken } from "firebase/messaging";
import {firebaseConfig} from "../firebase/firebaseconfig"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor() {}


  ngOnInit(): void {
    this.requestPermission()
  }

  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging,
      { vapidKey: firebaseConfig.vapidKey}).then(
      (currentToken) => {
        if (currentToken) {
          console.log("token received.....");
          console.log(currentToken);
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }
}
