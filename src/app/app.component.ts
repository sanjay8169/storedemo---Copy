import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReaderComponent } from './reader/reader.component';
import { WriterComponent } from './writer/writer.component';
import { PersonComponent } from './components/person/person.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReaderComponent,WriterComponent,PersonComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'storedemo';
}
