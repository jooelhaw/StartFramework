import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-contact',
  imports: [TitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  viewAge(userAge: HTMLLabelElement, input: HTMLInputElement) {
    if (input.value === '') {
      userAge.classList.add('label-site');
    } else {
      userAge.classList.remove('label-site');
    }
  }
}
