import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: ToDo[] = [];
  filtroActual: filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('todos').subscribe(todo => this.todos = todo);
    this.store.subscribe(({ todos, filtro }) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });
  }

}
