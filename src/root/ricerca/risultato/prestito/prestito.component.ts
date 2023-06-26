import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../../../libro';
import { ArchivioService } from '../../../archivio.service';
import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from '../../../archivio';

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css'],
  standalone:true
})
export class PrestitoComponent implements OnInit {
  @Input() libroTrovato: Libro;
  archivio2: Array<Libro>=[];
  constructor(private as: ArchivioService) { }
  
  /* metodo per prestare un libro */
  newName(){
    var input: HTMLInputElement = document.getElementById("nominativoInput") as HTMLInputElement;
    var nome = input.value;
    this.libroTrovato.nominativo=nome;
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let archivio1: Archivio= new Archivio(JSON.parse(x.response));
        archivio1.prestitoLibro(this.libroTrovato, nome);
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
  ngOnInit() {
  }
}



/*
import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../../../libro';
import { ArchivioService } from '../../../archivio.service';
import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from '../../../archivio';

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css'],
  standalone:true
})
export class PrestitoComponent implements OnInit {
  @Input() libroTrovato: Libro;
  archivio2: Array<Libro>=[];
  constructor(private as: ArchivioService) { }
  
  newName(){
    prendo il nome
    var input: HTMLInputElement = document.getElementById("nominativoInput") as HTMLInputElement;
    var nome = input.value;
    console.log(nome);

    this.libroTrovato.nominativo=nome;
    console.log('nuovo nominativo:', this.libroTrovato.nominativo);

    
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        prendo l'archivio
        let archivioStart: Archivio= new Archivio(JSON.parse(x.response));
        console.log('archivio start', archivioStart);

        elimino il libro e ottengo un array
        this.archivio2 = archivioStart.archivio.filter((el) =>
        (this.libroTrovato.titolo !== el.titolo || this.libroTrovato.autore !== el.autore ||  this.libroTrovato.posizione !== el.posizione));
        console.log('archivio 2', this.archivio2);


        creo il libro
        let libro: Libro = new Libro(this.libroTrovato.autore, this.libroTrovato.titolo, this.libroTrovato.posizione, nome);


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

  ngOnInit() {
  }

}

*/