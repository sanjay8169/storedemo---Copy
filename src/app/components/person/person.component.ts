import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { person } from '../../models/person';
import { Observable } from 'rxjs';
import { personSelector } from '../../store/peopole/people.selector';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [JsonPipe  ],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit {
  persons : person[] | undefined;
  persons$:Observable<person[]> | undefined;
  constructor(private store : Store){}

  ngOnInit(): void {
    this.persons$ = this.store.pipe(select(personSelector));
    this.persons$.subscribe((data)=>this.persons = data )
  }

}
