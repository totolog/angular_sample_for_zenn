import { AbstractControl, ValidatorFn } from "@angular/forms";

export function errorWordValidation(word: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const errorWord = control.value.includes(word);
    return errorWord ? {'errorWord': {value: control.value}} : null;
  };
}