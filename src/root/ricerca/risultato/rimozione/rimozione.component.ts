import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Libro } from '../../../libro';
import { ArchivioService } from '../../../archivio.service';
import { Archivio } from '../../../archivio';
import { AjaxResponse } from 'rxjs/ajax';

@Component({
  selector: 'app-rimozione',
  templateUrl: './rimozione.component.html',
  styleUrls: ['./rimozione.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RimozioneComponent implements OnInit {
  @Input() libroTrovato: Libro;
  @Output() rimuoviDocEvent = new EventEmitter<void>();
  archivioFinal: Array<Libro>=[];

  constructor(private as: ArchivioService) {}
  rimuoviDoc(){
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) =>{
        let archivioStart: Archivio= new Archivio(JSON.parse(x.response));
        archivioStart.rimozioneLibro(this.libroTrovato);
        var archivio3= JSON.stringify(archivioStart.archivio);
        this.as.setData(archivio3).subscribe({
          next: (x: AjaxResponse<any>) =>{
            console.log(x.response);
            this.rimuoviDocEvent.emit();
            /* resetta il campo di input per la ricerca */
            let input: HTMLInputElement = document.getElementById( 'res' ) as HTMLInputElement;
            input.value="";
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
let archivio1: Archivio= new Archivio(JSON.parse(x.response));
        console.log('archivio start', archivio1);

        this.libroTrovato.nominativo=this.nome;

        archivio1.prestitoLibro(this.libroTrovato, this.nome);
  
        converto array in stringa
        var archivio2 = JSON.stringify(archivio1.archivio);
        console.log('final', archivio2);

*/


/*
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Libro } from '../../../libro';
import { ArchivioService } from '../../../archivio.service';
import { Archivio } from '../../../archivio';
import { AjaxResponse } from 'rxjs/ajax';

@Component({
  selector: 'app-rimozione',
  templateUrl: './rimozione.component.html',
  styleUrls: ['./rimozione.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RimozioneComponent implements OnInit {
  @Input() libroTrovato: Libro;
  @Output() rimuoviDocEvent = new EventEmitter<string>();

  archivioFinal: Array<Libro>=[];
  xStr: string;

  constructor(private as: ArchivioService) {}
  rimuoviDoc(){
    console.log('rimozione', this.libroTrovato);
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) =>{
        let archivioStart: Archivio= new Archivio(JSON.parse(x.response));

        this.archivioFinal = archivioStart.archivio.filter((el) =>
        (el.titolo !== this.libroTrovato.titolo || el.autore !== this.libroTrovato.autore || el.posizione !== this.libroTrovato.posizione || el.nominativo !== this.libroTrovato.nominativo));


        var archivio3= JSON.stringify(this.archivioFinal);
        this.xStr='hide';

        this.as.setData(archivio3).subscribe({
          next: (x: AjaxResponse<any>) =>{
            console.log(x.response);
            this.rimuoviDocEvent.emit(this.xStr);
            let input: HTMLInputElement = document.getElementById( 'res' ) as HTMLInputElement;
            input.value="";
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



/*


import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Libro } from '../../../libro';
import { ArchivioService } from '../../../archivio.service';
import { Archivio } from '../../../archivio';
import { AjaxResponse } from 'rxjs/ajax';

@Component({
  selector: 'app-rimozione',
  templateUrl: './rimozione.component.html',
  styleUrls: ['./rimozione.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RimozioneComponent implements OnInit {
  @Input() libroTrovato: Libro;
  
  @Output() rimuoviDocEvent = new EventEmitter<string>();

  archivioFinal: Array<Libro>=[];
  
  xStr: string ='hide';

  constructor(private as: ArchivioService) {}
  rimuoviDoc(){
    console.log('rimozione', this.libroTrovato);
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) =>{
        let archivioStart: Archivio= new Archivio(JSON.parse(x.response));
        this.archivioFinal = archivioStart.archivio.filter((el) =>
        (el.titolo !== this.libroTrovato.titolo || el.autore !== this.libroTrovato.autore || el.posizione !== this.libroTrovato.posizione || el.nominativo !== this.libroTrovato.nominativo));
        var archivio3= JSON.stringify(this.archivioFinal);
      
        this.as.setData(archivio3).subscribe({
          next: (x: AjaxResponse<any>) =>{
            console.log(x.response);
            manda in output xStr 
            this.rimuoviDocEvent.emit(this.xStr);
            
            let input: HTMLInputElement = document.getElementById( 'res' ) as HTMLInputElement;
            input.value="";
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