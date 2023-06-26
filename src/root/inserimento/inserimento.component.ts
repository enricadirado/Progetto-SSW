import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivioService } from '../archivio.service';
import { Libro } from '../libro';
import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from '../archivio';
import { NotificaComponent } from './notifica/notifica.component';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  standalone: true,
  imports: [CommonModule, NotificaComponent],
})
export class InserimentoComponent implements OnInit {
  @Input() selezione: string;
  @Output() newViewEvent = new EventEmitter<string>();
  notifica: string;
  
  constructor(private as: ArchivioService) {}
  ngOnInit() {}

  /* metodo invocato sul pulsante 'chiudi' per tornare alla home e per nascondere la notifica di avvenuto inserimento */
  chiudi() {
    this.newViewEvent.emit('home');
    this.notifica='false';
  }

  /* metodo che resetta la notifica di avvenuto inserimento */
  notificaFalse(){
    this.notifica='false';
  }

  /* metodo per inserire un nuovo documento nella biblioteca */
  inserisciDoc() {
    var inputTitolo: HTMLInputElement = document.getElementById('titolo') as HTMLInputElement;
    var titolo = inputTitolo.value;
    var inputAutore: HTMLInputElement = document.getElementById('autore') as HTMLInputElement;
    var autore = inputAutore.value;
    var inputPosizione: HTMLInputElement = document.getElementById('posizione') as HTMLInputElement;
    var posizione = inputPosizione.value;
    let libro: Libro = new Libro(autore, titolo, posizione, 'undefined');
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        var archivio1: Archivio = new Archivio(JSON.parse(x.response));
        archivio1.aggiuntaLibro(libro);
        var archivio2 = JSON.stringify(archivio1.archivio);
        this.as.setData(archivio2).subscribe({
          next: (x: AjaxResponse<any>) => {
            console.log(x.response); 
            this.notifica='true';
            setTimeout(() => this.notificaFalse(), 2000);
          },
          error: (err) =>
            console.error('Observer got an error: ' + JSON.stringify(err)),
        });
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });

    /* resetto i valori di input della ricerca */
    inputTitolo.value = '';
    inputAutore.value = '';
    inputPosizione.value = '';
  }
}