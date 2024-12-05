import { Component } from '@angular/core';

declare function getRandomPhoto(): string;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  getRandomPhotoUrl(){
    console.log(getRandomPhoto());
    return getRandomPhoto();
  }
}
