import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ArchivioService } from './archivio.service';
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
  title: string ="Byblos";
  selezione:string= 'home';

  /* metodo per cambiare la visualizzazione della pagina principale */
  cambioView(name:string){
    this.selezione=name;
  }
  
  constructor() {}

  ngOnInit() {}
}