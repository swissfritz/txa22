import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camcon',
  templateUrl: './camcon.page.html',
  styleUrls: ['./camcon.page.scss'],
})
export class CamconPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/info');
  }

}
