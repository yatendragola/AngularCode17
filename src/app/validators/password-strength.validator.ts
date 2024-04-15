import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export function createpasswordStrengthValidator():ValidatorFn{

    return (control:AbstractControl):ValidationErrors | null=>{

        const value = control.value;
        if(!value){
            return null;                
        }
        const hasUpperCase = /[A-Z]+/.test(value);
        const hasLowerCase = /[a-z]+/.test(value);
        const hasNumber = /[0-9]+/.test(value);
        
        const passwordValid  = hasUpperCase && hasLowerCase && hasNumber;
        
        return !passwordValid ? {passwordStrength:true}:null;
    }
}