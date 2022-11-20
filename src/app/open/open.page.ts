import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open',
  templateUrl: './open.page.html',
  styleUrls: ['./open.page.scss'],
})
export class OpenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tx() {
    this.router.navigateByUrl('/calls');
  }

  ws() {
    this.router.navigateByUrl('/callws');
  }
}
