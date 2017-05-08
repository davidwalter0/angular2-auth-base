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
  selector: 'empty',
  styleUrls: [
    'empty.component.css',
  ],
  templateUrl: 'empty.component.html'
})

export class EmptyComponent implements OnInit {
  constructor() { }
  public ngOnInit() { }
}
