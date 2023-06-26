import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Libro } from '../../libro';
import { RimozioneComponent } from './rimozione/rimozione.component';
import { PrestitoComponent } from './prestito/prestito.component';
import { RestituzioneComponent } from './restituzione/restituzione.component';

@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.component.html',
  styleUrls: ['./risultato.component.css'],
  standalone: true,
  imports: [CommonModule, RimozioneComponent, PrestitoComponent,RestituzioneComponent],
})
export class RisultatoComponent implements OnInit {
  @Input() numeroLibri: number;
  @Input() libroTrovato: Libro;
  @Output() removeDocEvent = new EventEmitter<void>();
  
  /* metodo per invocare la funzione di ricerca nel componente 'ricerca' */
  removeDoc() {
    this.removeDocEvent.emit();
  }
  constructor() {}
  ngOnInit() {}
}
