import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[ToDo] Crear ToDo',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[ToDo] Toggle ToDo',
    props<{ id: number }>()
);

export const editar = createAction(
    '[ToDo] Editar ToDo',
    props<{ id: number, texto: string }>()
);

export const borrar = createAction(
    '[ToDo] Borrar ToDo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[ToDo] ToggleAll ToDo',
    props<{ completado: boolean }>()
);

export const limpiar=createAction('[ToDo] Limpiar ToDo');