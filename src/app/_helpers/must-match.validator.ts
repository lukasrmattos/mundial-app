import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
        const formGroup = group as FormGroup;
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
            // return if another validator has already found an error on the matchingControl
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ 'mustMatch': true });
        } else {
            matchingControl.setErrors(null);
        }

        return null;
    }
}
