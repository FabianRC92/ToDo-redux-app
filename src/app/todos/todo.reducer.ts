import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { ToDo } from './models/todo.model';

export const initialState: ToDo[] = [
    new ToDo('Salvar al mundo')
];

const _todoReducer = createReducer(
    initialState,
    on(actions.crear, (state, { texto }) => [...state, new ToDo(texto)]),
    on(actions.toggle, (state, { id }) => state.map(todo => {

        if (todo.id === id) {
            return {
                ...todo,
                completado: !todo.completado
            }
        } else return todo;

    })),
    on(actions.editar, (state, { id, texto }) => state.map(todo => {

        if (todo.id === id) {
            return {
                ...todo,
                texto: texto
            }
        } else return todo;

    })),
    on(actions.borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(actions.toggleAll, (state, { completado }) => state.map(todo => {
        return {
            ...todo,
            completado: completado
        }
    })),
    on(actions.limpiar, (state) => state.filter(todo => !todo.completado))

);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}
