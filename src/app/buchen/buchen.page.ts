import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
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
  message: string;

  constructor(
    public fb: FormBuilder,
    private router: Router
  ){
    this.buchenForm = new FormGroup({
      names: new FormControl(),
      sameCar: new FormControl()
    });

    this.buchenForm = this.fb.nonNullable.group({
    names: ['', Validators.required],
    sameCar: false,
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.nomen = this.buchenForm.value.names;
    this.basinf.push(this.nomen);

    if (this.buchenForm.value.sameCar === true) {
      this.gla = 'Gleiches Fahrzeug';
    } else {
      this.gla = 'Fahrzeug egal';
    }
    this.basinf.push(this.gla);



    const navex: NavigationExtras = {
      state: {
        bi: this.basinf
      }
    };
    this.router.navigate([`/buchen1`], navex);
  }
}
