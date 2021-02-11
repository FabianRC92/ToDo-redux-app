import { ActionReducerMap } from '@ngrx/store';
import { ToDo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer';
import { filtrosValidos } from './filtro/filtro.actions';

export interface AppState {
    todos: ToDo[],
    filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}