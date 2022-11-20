import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pausch',
  templateUrl: './pausch.page.html',
  styleUrls: ['./pausch.page.scss'],
})
export class PauschPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/info');
  }
}
