import { createAction, props } from "@ngrx/store";
import { task } from "../../models/task";

export const add = createAction('[task] add',props<{task : task}>());
export const remove = createAction('[task] remove',props<{task : task}>());