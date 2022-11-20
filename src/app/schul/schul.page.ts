import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schul',
  templateUrl: './schul.page.html',
  styleUrls: ['./schul.page.scss'],
})
export class SchulPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/info');
  }

}
