import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-unfmain',
  templateUrl: './unfmain.page.html',
  styleUrls: ['./unfmain.page.scss'],
})
export class UnfmainPage implements OnInit {
  image = null;
  img = null;
  imageList = [];

  constructor(
    public router: Router,
    private camera: Camera,
    private emailComposer: EmailComposer,
    private webview: WebView) { }

  ngOnInit() {
  }

  captureImage() {
    const options: CameraOptions = {
      quality: 30,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imagePath) => {
      this.image = this.webview.convertFileSrc(imagePath);
      this.img = imagePath;
      this.imageList.push(this.img);
    });
  }

  sendMailT() {
    const email = {
      to: 'schaden@taxiwerbung.at',
      subject: 'Unfall',
      body: 'Meine Unfallfotos',
      attachments: this.imageList,
      isHtml: true
    };

    this.emailComposer.open(email);
  }
}
