import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Producer } from '../interface/producer';

@Injectable({
  providedIn: 'root',
})
export class RalieService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTop5Producer(): Observable<Producer[]> {
    return this.http.get<Producer[]>(`${this.apiUrl}/top-5-produtores`).pipe(
      map((data) => {
        return data.map((produtor) => ({
          ...produtor,
          dataPublicacao: new Date(produtor.dataPublicacao),
          dataPrevistaOperacao: produtor.dataPrevistaOperacao ? new Date(produtor.dataPrevistaOperacao) : null,
          dataRealizadaOperacao: produtor.dataRealizadaOperacao ? new Date(produtor.dataRealizadaOperacao) : null,
          dataIngestao: new Date(produtor.dataIngestao),
        }));
      })
    );
  }
}