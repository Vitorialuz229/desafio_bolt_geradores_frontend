import { Component, OnInit } from '@angular/core';
import { RalieService } from '../../service/ralie.service';
import { Producer } from '../../interface/producer';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ralie-list',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './ralie-list.component.html',
  styleUrl: './ralie-list.component.css',
})
export class RalieListComponent implements OnInit {
  produtores: Producer[] = [];

  constructor(private service: RalieService) { }

  ngOnInit(): void {
    this.getTop5Producer();
  }

  getTop5Producer(): void {
    this.service.getTop5Producer().subscribe({
      next: (data) => {
        this.produtores = data;
        console.log(this.produtores);
      },
      error: (error) => {
        console.error('Erro ao obter os produtores:', error);
      }
    });
  }
}