import {AbstractControl} from '@angular/forms';

export function passwordValidator(control: AbstractControl) {
   if (control.value === null) {
      return;
   }
   const password: string = control.value.toString();

   if (password === password.toLowerCase() || password === password.toUpperCase()) {
      return {passwordUpperLowerCaseRestriction: true};
   }
   const numberRegex = /.*\d+.*/;
   const specialCharRegex = /.([^A-Za-z0-9])/;
   if (!password.match(numberRegex) && password.search(specialCharRegex) === -1) {
      return {passwordSpecialCharRestriction: true};
   }
   const spaceRegex = /.* .*/;
   if (password.match(spaceRegex)) {
      return {passwordSpaceRestriction: true};
   }
   return null;
}

export function alphabeticOnlyValidator(control: AbstractControl) {
   const input: string = control.value.toString();
   const alphabeticRegex = /^[A-ZÄÖÜÉÈÊÂÀÁÔÒÓÛÙÚÎÌÍß]+$/i;
   if (!input.match(alphabeticRegex)) {
      return {nonalphabeticChars: true};
   }
   return null;
}

export function numberValidator(control: AbstractControl) {
   const input: string = control.value.toString();
   const numericRegex = /^\d*\d\.?\d?\d?$/;
   if (!input.match(numericRegex)) {
      return {nonnumeric: true};
   }
   return null;
}
