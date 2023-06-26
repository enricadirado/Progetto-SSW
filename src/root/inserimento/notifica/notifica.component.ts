import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NotificaComponent implements OnInit {
  @Input() notifica: string;
  constructor() { }

  ngOnInit() {
  }

}