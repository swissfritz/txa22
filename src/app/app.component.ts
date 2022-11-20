import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'Startseite';
  pages = [
    {
      title: 'Startseite',
      url: '',
      icon: ''
    },
    {
      title: 'Informationen',
      url: '/info',
      icon: ''
    },
    {
      title: 'Geöffnet / Anrufen',
      url: '/open',
      icon: ''
    },
    {
      title: 'Fahrzeug buchen',
      url: '/buchen',
      icon: ''
    },
    {
      title: 'Tanken',
      url: '/tanken',
      icon: ''
    },
    {
      title: 'Regeln',
      url: '/regeln',
      icon: ''
    },
    {
      title: 'Panne',
      url: '/panne',
      icon: ''
    },
    {
      title: 'Unfall',
      url: '/unfall',
      icon: ''
    },
    {
      title: 'Anfahrt',
      url: '/anfahrt',
      icon: ''
    }
  ];
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
