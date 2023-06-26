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

  /* metodo per rimuovere un libro */
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
  constructor(private as: ArchivioService) {}
  ngOnInit() {}
}
