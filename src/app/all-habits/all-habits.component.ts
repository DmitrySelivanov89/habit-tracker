import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Habit } from '../models/habit';

@Component({
  selector: 'app-all-habits',
  templateUrl: './all-habits.component.html',
  styleUrls: ['./all-habits.component.scss'],
})
export class AllHabitsComponent implements OnInit {
  @Input()
  habits: Habit[] = [];

  @Output()
  add = new EventEmitter<void>();

  @Output()
  edit = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  addButtonClick() {
    this.add.emit();
  }

  editButtonClick(i: number) {
    this.edit.emit(i);
  }

  public onDelete(index: number) {
    this.habits.splice(index, 1);
  }
}
