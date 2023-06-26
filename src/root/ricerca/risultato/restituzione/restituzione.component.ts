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
  constructor(private as: ArchivioService) {}
  ngOnInit() {}
}



