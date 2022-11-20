import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proz',
  templateUrl: './proz.page.html',
  styleUrls: ['./proz.page.scss'],
})
export class ProzPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/info');
  }
}
