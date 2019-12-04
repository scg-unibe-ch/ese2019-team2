import { Component, OnInit } from '@angular/core';
import { alphabeticOnlyValidator, numberValidator } from '../../CustomValidator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth-service/auth.service';
import {isUndefined} from "util";
import {PopoverController} from "@ionic/angular";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {CreateService} from '../../services/create/create.service';

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
    name: [
      { type: 'required', message: 'This field can\'t be empty.'}
    ],
    img: [],
    price: [
      { type: 'required', message: 'This field can\'t be empty.'},
      { type: 'nonnumeric', message: 'The price has to be numeric'}
    ],
    maxPeople: [],
    location: [
      { type: 'required', message: 'This field can\'t be empty.'},
      { type: 'nonalphabeticChars', message: 'The sub-category can only contain alphabetic chars.'}
    ],
    street: [],
    city: [],
    zip: [],
    description: [
      { type: 'required', message: 'This field can\'t be empty.'},
    ],
    rating: [
      { type: 'nonnumeric', message: 'The rating has to be numeric'}
    ]
  };

  constructor(private creator: CreateService, private formBuilder: FormBuilder, private auth: AuthService, private popCtrl: PopoverController, private router: Router) { }

  ngOnInit() {
    this.serviceForm = this.formBuilder.group({
      category: ['', [Validators.required, alphabeticOnlyValidator]],
      subCategory: ['', []],
      userID: ['', []],
      name: ['', [Validators.required]],
      img: ['', []],
      price: ['', [Validators.required, numberValidator]],
      maxPeople: ['', []],
      location: ['', [Validators.required, alphabeticOnlyValidator]],
      street: ['', []],
      city: ['', []],
      zip: ['', []],
      description: ['', [Validators.required]],
      rating: ['', []],
    }, {});
  }

  onSubmit(value: any) {
    const category = this.serviceForm.get('category').value;
    const subCategory = this.serviceForm.get('subCategory').value;
    // ToDo: still not getting the ID even though json with correct user is given back
    const userID = this.creator.getUserID();
    const name = this.serviceForm.get('name').value;
    const img = this.serviceForm.get('img').value;
    const price = this.serviceForm.get('price').value;
    const maxPeople = this.serviceForm.get('maxPeople').value;
    const location = this.serviceForm.get('location').value;
    const street = this.serviceForm.get('street').value;
    const city = this.serviceForm.get('city').value;
    const zip = this.serviceForm.get('zip').value;
    const description = this.serviceForm.get('description').value;
    const rating = this.serviceForm.get('rating').value;
    this.creator.createNewService(category, subCategory, userID, name, img, price, maxPeople, location, street, city, zip, description, rating).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  canCreateService() {
    return this.auth.canOpen('admin');
  }

  printuserid() {
    return this.creator.getUserID();
  }

}
