import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { RicercaComponent } from './ricerca/ricerca.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [InserimentoComponent, RicercaComponent, CommonModule],
})
export class RootComponent implements OnInit {
  title: string = "Byblos";
  selezione: string = 'home';

  /* metodo per cambiare la visualizzazione della pagina principale */
  //scrive in selezione il valore passato come parametro, prende valore e lo imposta. prende come parametro stringa e lo mette in var del component
  //prende valore e lo imposta in var del controller
  //la var è accessibile dalla view
  cambioView(name:string){
    this.selezione=name;
  }

  constructor() {}
  ngOnInit() {}
}