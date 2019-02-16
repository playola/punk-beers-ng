import {
  Component, OnInit, Input, Output, EventEmitter,
} from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent implements OnInit {
  @Input() inputModel: string = '';
  @Output() inputModelChange = new EventEmitter<string>();
  placeholder: string = 'Filter by name';

  constructor() {}
  ngOnInit() {}
}
