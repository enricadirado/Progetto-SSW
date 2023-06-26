import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ArchivioService } from '../archivio.service';
import { Libro } from '../libro';
import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from '../archivio';
import { RisultatoComponent } from './risultato/risultato.component';
import { RisultatoLibriComponent } from './risultato-libri/risultato-libri.component';
import { RisultatoNulloComponent } from './risultato-nullo/risultato-nullo.component';
import { RisultatoResetComponent } from './risultato-reset/risultato-reset.component';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RisultatoComponent,
    RisultatoLibriComponent,
    RisultatoNulloComponent,
    RisultatoResetComponent
  ],
})
export class RicercaComponent implements OnInit {
  numeroLibri: number;
  archivioFinal: Array<Libro> = [];
  archivioStart: Archivio;
  libroTrovato: Libro;
  valInp:string;
  y:string;
  nominativo: string;
  
  /* metodo per cercare un libro */
  ricercaLibro() {
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let input: HTMLInputElement = document.getElementById('res') as HTMLInputElement;
        let y = input.value;
        let archivioStart: Archivio = new Archivio(JSON.parse(x.response));
        this.archivioFinal = archivioStart.archivio.filter((el) =>
          (el.titolo + el.autore).toLowerCase().includes(y)
        );
        console.log(archivioStart, Array.isArray(archivioStart)); /***/
        console.log(this.archivioFinal, Array.isArray(this.archivioFinal) ); /***/
        if (y.length>0 && y!='') {
          if (this.archivioFinal.length === 1) {
            this.libroTrovato = this.archivioFinal[0];
            this.numeroLibri = this.archivioFinal.length;
            this.nominativo=this.libroTrovato.nominativo;           
          } else {
            this.numeroLibri = this.archivioFinal.length;
          }
        } else{
          this.libroTrovato = undefined;
          this.numeroLibri = -1;
        }
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
  constructor(private as: ArchivioService) {}
  ngOnInit() {}
}
