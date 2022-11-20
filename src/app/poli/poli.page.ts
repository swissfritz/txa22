import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poli',
  templateUrl: './poli.page.html',
  styleUrls: ['./poli.page.scss'],
})
export class PoliPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/info');
  }
}
