import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-risultato-reset',
  templateUrl: './risultato-reset.component.html',
  styleUrls: ['./risultato-reset.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class RisultatoResetComponent implements OnInit {
  @Input() numeroLibri: number;
  constructor() { }
  ngOnInit() {
  }

}