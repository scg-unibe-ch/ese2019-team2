import { Component, OnInit } from '@angular/core';
import { alphabeticOnlyValidator, numberValidator } from '../../CustomValidator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth-service/auth.service';
import {isUndefined} from "util";
import {PopoverController} from "@ionic/angular";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-newservice',
  templateUrl: './newservice.page.html',
  styleUrls: ['./newservice.page.scss'],
})
export class NewservicePage implements OnInit {

  errorMessage = '';
  serviceForm: FormGroup;
  validationMessages = {
    category: [
      { type: 'required', message: 'This field can\'t be empty.'},
      { type: 'nonalphabeticChars', message: 'The category can only contain alphabetic chars.'}
    ],
    subCategory: [
      { type: 'required', message: 'This field can\'t be empty.'},
      { type: 'nonalphabeticChars', message: 'The sub-category can only contain alphabetic chars.'}
    ],
    userID: [
      { type: 'required'},
    ],
    title: [
      { type: 'required', message: 'This field can\'t be empty.'}
    ],
    img: [],
    price: [
      { type: 'required', message: 'This field can\'t be empty.'},
      { type: 'nonnumeric', message: 'The price has to be numeric'}
    ],
    description: [
      { type: 'required', message: 'This field can\'t be empty.'},
    ],
    rating: [
      { type: 'nonnumeric', message: 'The rating has to be numeric'}
    ]
  };

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private popCtrl: PopoverController, private router: Router) { }

  ngOnInit() {
    this.serviceForm = this.formBuilder.group({
      category: ['', [Validators.required, alphabeticOnlyValidator]],
      subCategory: ['', []],
      userID: ['', []],
      title: ['', [Validators.required]],
      img: ['', []],
      price: ['', [Validators.required, numberValidator]],
      description: ['', [Validators.required]],
      rating: ['', [numberValidator]],
    }, {});
  }

  onSubmit(value: any) {
    const category = this.serviceForm.get('category').value;
    const subCategory = this.serviceForm.get('subCategory').value;
    const userID = this.auth.getUserID();
    const title = this.serviceForm.get('title').value;
    const img = this.serviceForm.get('img').value;
    const price = this.serviceForm.get('price').value;
    const description = this.serviceForm.get('description').value;
    const rating = this.serviceForm.get('rating').value;
    this.auth.createNewService(category, subCategory, userID, title, img, price, description, rating).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  canCreateService() {
    return this.auth.canOpen('admin');
  }

}
