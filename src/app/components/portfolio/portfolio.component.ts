import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-portfolio',
  imports: [TitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  selectedImage: string | null = null;
  onImageClick(src: string) {
    this.selectedImage =src;
    console.log(this.selectedImage);
    
  }
}
