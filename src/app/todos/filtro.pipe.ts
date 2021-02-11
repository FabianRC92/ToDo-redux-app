import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroToDo'
})
export class FiltroPipe implements PipeTransform {

  transform(value: ToDo[], filtro: filtrosValidos): ToDo[] {

    switch (filtro) {
      case 'completados':
        return value.filter(todo => todo.completado)
      case 'pendientes':
        return value.filter(todo => !todo.completado)
      default:
        return value;
    }

  }

}
