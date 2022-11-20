import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tankendi',
  templateUrl: './tankendi.page.html',
  styleUrls: ['./tankendi.page.scss'],
})
export class TankendiPage implements OnInit {

  constructor(private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async z2() {
    const alert = await this.alertCtrl.create({
      message: '<strong>1020 Wien</strong><br><br>Handelskai 388a<br><br>06:00-21:00',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async z3() {
    const alert = await this.alertCtrl.create({
      message: '<strong>1030 Wien</strong><br><br>Erdbergstr. 189<br><br>06:00-22:00<br><br><br>Oberzellergasse 3a<br><br>00:00-24:00',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async z10() {
    const alert = await this.alertCtrl.create({
      message: '<strong>1100 Wien</strong><br><br>Grenzackerstr. 6-8<br><br>06:00-22:00<br><br><br>Raxstr. 38<br><br>00:00-24:00',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async z12() {
    const alert = await this.alertCtrl.create({
      message: '<strong>1120 Wien</strong><br><br>Bonygasse 47<br><br>06:00-22:00',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async z19() {
    const alert = await this.alertCtrl.create({
      message: '<strong>1190 Wien</strong><br><br>Krottenbachstr. 32-34<br><br>06:00-23:00',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async z20() {
    const alert = await this.alertCtrl.create({
      message: '<strong>1200 Wien</strong><br><br>Jägerstr. 60<br><br>06:00-22:00',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async z21() {
    const alert = await this.alertCtrl.create({
      message: '<strong>1210 Wien</strong><br><br>Leopoldauestr. 180<br><br>00:00-24:00',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async z22() {
    const alert = await this.alertCtrl.create({
      message: '<strong>1220 Wien</strong><br><br>Donaustadtstr. 43<br><br>00:00-24:00<br><br><br>Rautenweg 13<br><br>06:00-22:00',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async z23() {
    const alert = await this.alertCtrl.create({
      message: '<strong>1230 Wien</strong><br><br>Breitenfurterstr. 210<br><br>06:00-24:00',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  goBack() {
    this.router.navigateByUrl('/tanken');
  }
}
