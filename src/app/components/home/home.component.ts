import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RalieListComponent } from '../ralie-list/ralie-list.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, RalieListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
