import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { add } from '../../store/peopole/people.actions';
import { person } from "../../models/person";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  myForm: FormGroup=new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl('')
    });;

    constructor(private fb: FormBuilder,private store : Store) {}

    ngOnInit(){
      this.myForm = this.fb.group({
        fname: ['', [Validators.required,Validators.required]],
        lname: ['', [Validators.required, Validators.required]]
      });
    }

    onSubmit(form : FormGroup):void{
      const person : person = {
        id: 2,
        fname: form.value.fname,
        lname: form.value.lname
      }

      this.store.dispatch(add({p:person}))
    }
}
