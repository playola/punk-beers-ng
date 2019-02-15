import {
  Component, OnInit, Input, Output, EventEmitter,
} from '@angular/core';

@Component({
  selector: 'beer-button',
  templateUrl: './beer-button.component.html',
  styleUrls: ['./beer-button.component.scss'],
})
export class BeerButtonComponent implements OnInit {
  @Input() label: string;
  @Output() onClick = new EventEmitter<any>();

  constructor() {}
  ngOnInit() {}

  handleOnClick(event) {
    this.onClick.emit(event);
  }
}
