import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ItemService } from '../../services/item/item.service';
import { LETTER_PATTERN, NUMBER_PATTERN } from '../../constants/validationPatterns';

@Component({
  selector: 'app-items',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  constructor(private itemService: ItemService) {}

  itemList: any[] = [];
  itemForm = new FormGroup({
    color: new FormControl('', [Validators.required, Validators.pattern(LETTER_PATTERN)]),
    number: new FormControl('', [Validators.required, Validators.pattern(NUMBER_PATTERN)]),
  });

  ngOnInit(): void {
    this.itemService
      .getItems()
      .then((response: object) => this.itemList = response['data'])
      .catch(e => {console.log(e.message)});
  }

  get color() {
    return this.itemForm.get('color');
  }

  get number() {
    return this.itemForm.get('number');
  }

  getErrorMessageColor(): string {
    return this.color.hasError('required')
      ? 'The field cannot be empty'
      : this.color.hasError('pattern')
        ? 'Invalid color'
        : '';
  }

  getErrorMessageNumber(): string {
    return this.number.hasError('required')
      ? 'The field cannot be empty'
      : this.number.hasError('pattern')
        ? 'Invalid number'
        : '';
  }

  createItem(FormData: any, formDirective): void {
    this.itemService
      .createItem({
        color: this.color.value,
        number: this.number.value
      })
      .then((response: object) => {
        this.itemList.push(response['data']);

        formDirective.resetForm();
        this.itemForm.reset();
      })
      .catch(e => {console.error(e.message)});
  }
}
