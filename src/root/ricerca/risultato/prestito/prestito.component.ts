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
  constructor(private as: ArchivioService) { }
  ngOnInit() {
  }
}


