import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-buchen',
  templateUrl: './buchen.page.html',
  styleUrls: ['./buchen.page.scss'],
})
export class BuchenPage implements OnInit {

  public buchenForm: FormGroup;
  basinf = [];
  nomen: string;
  gla: string;
  sameCar: boolean;
  aca: string;
  callCar: boolean;
  aco: string;
  callColl: boolean;
  message: string;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  )
  {this.buchenForm = this.formBuilder.group({
    namen: ['', Validators.compose([Validators.required])
    ],
    sameCar: false,
    callCar: false,
    callColl: false
    });
  }

  ngOnInit() {
  }


  goNext() {
    this.nomen = this.buchenForm.value.namen;
    this.basinf.push(this.nomen);

    if (this.buchenForm.value.sameCar === true) {
      this.gla = 'Gleiches Fahrzeug';
    } else {
      this.gla = '';
    }
    this.basinf.push(this.gla);

    console.log('basisinfo: ', this.basinf);

    const navex: NavigationExtras = {
      state: {
        bi: this.basinf
      }
    };
    this.router.navigate([`/ft1`], navex);
  }
}
