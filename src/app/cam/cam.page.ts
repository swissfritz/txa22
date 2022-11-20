import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cam',
  templateUrl: './cam.page.html',
  styleUrls: ['./cam.page.scss'],
})
export class CamPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  con() {
    this.router.navigateByUrl('/camcon');
  }

  pr() {
    this.router.navigateByUrl('/campr');
  }
}
