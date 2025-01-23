import {
  Component,
  ElementRef,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-portfolio',
  imports: [TitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  @ViewChild('selectedImg') selectedImg!: ElementRef;
  @ViewChild('full') fullPage!: ElementRef;
  // @ViewChildren('img') images!: QueryList<ElementRef>;

  onClick(imgSrc: string) {
    this.fullPage.nativeElement.style.display = 'flex';
    this.selectedImg.nativeElement.src = imgSrc;
  }
  logDiv(event: MouseEvent, fullPage: HTMLDivElement) {
    if (event.target == fullPage) {
      fullPage.style.display = 'none';
    }
  }
}
