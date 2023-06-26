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
  constructor(private as: ArchivioService) {}
  
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
        console.log(archivioStart, 'start type:', Array.isArray(archivioStart)); /***/
        console.log(this.archivioFinal,'final type:', Array.isArray(this.archivioFinal) ); /***/
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
  ngOnInit() {}
}

/*
console.log(x.response, '1 type:', typeof(x.response));
console.log(JSON.parse(x.response), '1 type:', typeof(JSON.parse(x.response)));
 var archivio: Archivio = new Archivio(JSON.parse(x.response));
        console.log(archivio, '1 type:', typeof(archivio));
*/


/*

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
  constructor(private as: ArchivioService) {}

  ricercaLibro(valInp:string) {
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let input: HTMLInputElement = document.getElementById('res') as HTMLInputElement;
        let y = input.value;
        
        console.log('input value: ', y);
        console.log('input length: ', y.length);
        
        let archivioStart: Archivio = new Archivio(JSON.parse(x.response));
        this.archivioFinal = archivioStart.archivio.filter((el) =>
          (el.titolo + el.autore).toLowerCase().includes(y)
        );
        console.log(archivioStart, 'start type:', typeof archivioStart); 
        console.log(this.archivioFinal,'final type:', typeof this.archivioFinal ); 
        if (y.length>0 && y!='') {
          if (this.archivioFinal.length === 1) {
            this.libroTrovato = this.archivioFinal[0];
            this.numeroLibri = this.archivioFinal.length;
            console.log('ramo 1', valInp);
            invio parametro nominativo
            this.nominativo=this.libroTrovato.nominativo;           
          } else {
            this.numeroLibri = this.archivioFinal.length;
            console.log('ramo 2', valInp);
          }
        } else{
          console.log('ramo 3', valInp);
          this.libroTrovato = undefined;
          this.numeroLibri = -1;
        }
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
  ngOnInit() {}
}

*/




/*


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
  constructor(private as: ArchivioService) {}

 
  ricercaLibro(valInp:string) {
    console.log('valInp', valInp);
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let input: HTMLInputElement = document.getElementById('res') as HTMLInputElement;
        let y = input.value;
        
        console.log('input value: ', y);
        console.log('input length: ', y.length);
        
        let archivioStart: Archivio = new Archivio(JSON.parse(x.response));
        this.archivioFinal = archivioStart.archivio.filter((el) =>
          (el.titolo + el.autore).toLowerCase().includes(y)
        );
        console.log(archivioStart, 'start type:', typeof archivioStart); 
        console.log(this.archivioFinal,'final type:', typeof this.archivioFinal ); 
        
        if (y.length>0 && y!='') {
          if (this.archivioFinal.length === 1) {
            this.libroTrovato = this.archivioFinal[0];
            this.numeroLibri = this.archivioFinal.length;
            console.log('ramo 1', valInp);
            
            this.nominativo=this.libroTrovato.nominativo;           
          } else {
            this.numeroLibri = this.archivioFinal.length;
            console.log('ramo 2', valInp);
          }
        } else{
          console.log('ramo 3', valInp);
          this.libroTrovato = undefined;
          this.numeroLibri = -1;
        }
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
  ngOnInit() {}
}

*/