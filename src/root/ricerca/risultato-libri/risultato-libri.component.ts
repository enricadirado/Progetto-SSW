import { CommonModule } from '@angular/common';
import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-risultato-libri',
  templateUrl: './risultato-libri.component.html',
  styleUrls: ['./risultato-libri.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class RisultatoLibriComponent implements OnInit {
  @Input() numeroLibri: number;
  constructor() { }
  ngOnInit() {
  }
}