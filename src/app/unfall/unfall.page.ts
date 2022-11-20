import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unfall',
  templateUrl: './unfall.page.html',
  styleUrls: ['./unfall.page.scss'],
})
export class UnfallPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goUnfall() {
    this.router.navigateByUrl('/unfmain');
  }
}
