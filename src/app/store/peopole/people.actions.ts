import { createAction, props } from "@ngrx/store"
import { person } from "../../models/person"

export const add = createAction('[person] add',props<{p : person}>());
export const remove = createAction('[person] remove',props<{pid : number}>());
export const clear = createAction('[person] clear');