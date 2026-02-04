export interface Producer {
  id: number;
  codigoUsina: number;
  nomeUsina: string;
  uf: string;
  tipoGeracao: string;
  potenciaOutorgada: number;
  dataPublicacao: Date; 
  dataPrevistaOperacao: Date | null; 
  dataRealizadaOperacao: Date | null; 
  dataIngestao: Date; 
}