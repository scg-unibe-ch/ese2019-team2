import {Component, OnInit} from '@angular/core';
import {alphabeticOnlyValidator, numberValidator} from '../../CustomValidator';
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
   currentIndex = 1;
   imageIndices = [];
   errorMessage = '';
   serviceForm: FormGroup;
   validationMessages = {
      category: [
         {type: 'required', message: 'This field can\'t be empty.'},
      ],
      subCategory: [
         {type: 'required', message: 'This field can\'t be empty.'},
         {type: 'nonalphabeticChars', message: 'The sub-category can only contain alphabetic chars.'}
      ],
      userID: [
         {type: 'required'}
      ],
      username: [
         {type: 'required'}
      ],
      serviceName: [
         {type: 'required', message: 'This field can\'t be empty.'}
      ],
      img: [],
      price: [
         {type: 'required', message: 'This field can\'t be empty.'},
         {type: 'nonnumeric', message: 'The price has to be numeric'}
      ],
      maxPeople: [],
      location: [
         {type: 'required', message: 'This field can\'t be empty.'}
      ],
      street: [],
      city: [],
      zip: [],
      description: [
         {type: 'required', message: 'This field can\'t be empty.'}
      ],
      clicks: [
         {type: 'nonnumeric', message: 'The clicks has to be numeric'}
      ]
   };

   // tslint:disable-next-line:max-line-length
   constructor(
      private creator: CreateService,
      private formBuilder: FormBuilder,
      private auth: AuthService,
      private popCtrl: PopoverController,
      private router: Router
   ) {
   }

   ngOnInit() {
      this.imageIndices.push(1);
      this.serviceForm = this.formBuilder.group({
         category: ['', [Validators.required]],
         subCategory: ['', []],
         userID: ['', []],
         username: ['', []],
         serviceName: ['', [Validators.required]],
         img1: ['', []],
         img2: ['', []],
         img3: ['', []],
         img4: ['', []],
         img5: ['', []],
         img6: ['', []],
         img7: ['', []],
         img8: ['', []],
         img9: ['', []],
         img10: ['', []],
         price: ['', [Validators.required, numberValidator]],
         maxPeople: ['', []],
         location: ['', [Validators.required, alphabeticOnlyValidator]],
         street: ['', []],
         city: ['', []],
         zip: ['', []],
         description: ['', [Validators.required]],
         clicks: ['', []],
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
      //const img = this.serviceForm.get('img').value;
      let img = [];
      let temp = null;
      if (this.imageIndices.length > 1) {
         for (let i of this.imageIndices) {
            temp = this.serviceForm.get('img' + i.toString()).value.toString();
            if (temp !== ('' || null)) {
               img[i - 1] = temp;
            }
         }
      }
      const price = this.serviceForm.get('price').value;
      const maxPeople = this.serviceForm.get('maxPeople').value;
      const location = this.serviceForm.get('location').value;
      const street = this.serviceForm.get('street').value;
      const city = this.serviceForm.get('city').value;
      const zip = this.serviceForm.get('zip').value;
      const description = this.serviceForm.get('description').value;
      const clicks = this.serviceForm.get('clicks').value;

      // tslint:disable-next-line:max-line-length
      this.creator.createNewService(
         category,
         subCategory,
         userID,
         username,
         serviceName,
         img,
         price,
         maxPeople,
         location,
         street,
         city,
         zip,
         description,
         clicks
      )
         .subscribe(() => {
            this.router.navigate(['/home']);
         });
   }

   onClickAddImageField() {
      this.currentIndex++;
      this.imageIndices.push(this.currentIndex);
   }

   canCreateService() {
      return this.auth.canOpen('serviceProvider');
   }

   loadUserID() {
      return this.creator.getUserID()
         .subscribe(data => {
            this.idTemp = data[0]._id;
         });
   }

}
