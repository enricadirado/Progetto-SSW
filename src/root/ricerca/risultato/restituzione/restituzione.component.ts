import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AjaxResponse } from 'rxjs/ajax';
import { ArchivioService } from '../../../archivio.service';
import { Archivio } from '../../../archivio';
import { Libro } from '../../../libro';

@Component({
  selector: 'app-restituzione',
  templateUrl: './restituzione.component.html',
  styleUrls: ['./restituzione.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class RestituzioneComponent implements OnInit {
  @Input() libroTrovato: Libro;
  archivio2: Array<Libro>=[];
  nome: string = "undefined";
  constructor(private as: ArchivioService) {}
  
  /* metodo per restituire un libro */
  rimuoviName(){
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let archivio1: Archivio= new Archivio(JSON.parse(x.response));
        this.libroTrovato.nominativo=this.nome;
        archivio1.prestitoLibro(this.libroTrovato, this.nome);
        var archivio2 = JSON.stringify(archivio1.archivio);
        this.as.setData(archivio2).subscribe({
          next: (x: AjaxResponse<any>) => {
            console.log(x.response);
          },
          error: (err) =>
            console.error('Observer got an error: ' + JSON.stringify(err)),
        });
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }

  ngOnInit() {}
}


/*

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AjaxResponse } from 'rxjs/ajax';
import { ArchivioService } from '../../../archivio.service';
import { Archivio } from '../../../archivio';
import { Libro } from '../../../libro';

@Component({
  selector: 'app-restituzione',
  templateUrl: './restituzione.component.html',
  styleUrls: ['./restituzione.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class RestituzioneComponent implements OnInit {
  @Input() libroTrovato: Libro;
  archivio2: Array<Libro>=[];
  nome: string = "undefined";
  constructor(private as: ArchivioService) {}
  rimuoviName(){
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        prendo l'archivio
        let archivioStart: Archivio= new Archivio(JSON.parse(x.response));
        console.log('archivio start', archivioStart);

        this.libroTrovato.nominativo=this.nome; 
        elimino il libro e ottengo un array
        this.archivio2 = archivioStart.archivio.filter((el) =>
        (this.libroTrovato.titolo !== el.titolo || this.libroTrovato.autore !== el.autore ||  this.libroTrovato.posizione !== el.posizione || this.libroTrovato.nominativo !== this.nome));
        console.log('archivio 2', this.archivio2);

        creo il libro
        let libro: Libro = new Libro(this.libroTrovato.autore, this.libroTrovato.titolo, this.libroTrovato.posizione, this.nome);

        converto array in archivio
        let archivioMid: Archivio= new Archivio(this.archivio2);

        aggiungo libro
        archivioMid.aggiuntaLibro(libro);
        console.log('mid', archivioMid);

        converto array in stringa
        var archivioFinal = JSON.stringify(archivioMid.archivio);
        console.log('final', archivioFinal);

        setto nuovo valore
        this.as.setData(archivioFinal).subscribe({
          next: (x: AjaxResponse<any>) => {
            console.log(x.response);
          },
          error: (err) =>
            console.error('Observer got an error: ' + JSON.stringify(err)),
        });
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }

  ngOnInit() {}
}

*/


