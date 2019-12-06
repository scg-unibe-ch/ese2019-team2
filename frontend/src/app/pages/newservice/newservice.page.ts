import { Component, OnInit } from '@angular/core';
import { alphabeticOnlyValidator, numberValidator } from '../../CustomValidator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth-service/auth.service';
import {PopoverController} from '@ionic/angular';
import {Router} from '@angular/router';
import {CreateService} from '../../services/create/create.service';

@Component({
  selector: 'app-newservice',
  templateUrl: './newservice.page.html',
  styleUrls: ['./newservice.page.scss'],
})
export class NewservicePage implements OnInit {

  idTemp = null;
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
      { type: 'required'}
    ],
    username: [
      { type: 'required'}
    ],
    serviceName: [
      { type: 'required', message: 'This field can\'t be empty.'}
    ],
    img: [],
    price: [
      { type: 'required', message: 'This field can\'t be empty.'},
      { type: 'nonnumeric', message: 'The price has to be numeric'}
    ],
    maxPeople: [],
    location: [
      { type: 'required', message: 'This field can\'t be empty.'}
    ],
    street: [],
    city: [],
    zip: [],
    description: [
      { type: 'required', message: 'This field can\'t be empty.'}
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
      username: ['', []],
      serviceName: ['', [Validators.required]],
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
    // load Id in temp storage to write it to service on submit afterwards
    this.loadUserID();
  }

  onSubmit(value: any) {
    const category = this.serviceForm.get('category').value;
    const subCategory = this.serviceForm.get('subCategory').value;
    const userID = this.idTemp;
    const username = this.auth.getUsername();
    const serviceName = this.serviceForm.get('serviceName').value;
    const img = this.serviceForm.get('img').value;
    const price = this.serviceForm.get('price').value;
    const maxPeople = this.serviceForm.get('maxPeople').value;
    const location = this.serviceForm.get('location').value;
    const street = this.serviceForm.get('street').value;
    const city = this.serviceForm.get('city').value;
    const zip = this.serviceForm.get('zip').value;
    const description = this.serviceForm.get('description').value;
    const rating = this.serviceForm.get('rating').value;
    this.creator.createNewService(category, subCategory, userID, username, serviceName, img, price, maxPeople, location, street, city, zip, description, rating)
        .subscribe(() => {
          this.router.navigate(['/home']);
        });
  }

  canCreateService() {
    return this.auth.canOpen('admin');
  }

  loadUserID() {
    return this.creator.getUserID()
        .subscribe(data => {
          this.idTemp = data[0]._id;
        });
  }

}
