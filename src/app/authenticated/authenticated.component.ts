import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/filter';
import { Title } from '@angular/platform-browser';
import { MdlSnackbarService } from 'angular2-mdl';
import { AbstractComponent } from '../abstract.component';

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');

@Component({
  selector: 'authenticated',
  styleUrls: [
    'authenticated.component.css',
  ],
  templateUrl: 'authenticated.component.html'
})

export class AuthenticatedComponent implements OnInit {
  constructor() { }
  public ngOnInit() { }
}
