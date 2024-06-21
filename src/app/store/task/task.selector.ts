import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Appstate } from "../app.state";

export const selecttaskselector = createFeatureSelector<Appstate>('task');

export const taskSelector = createSelector(
    selecttaskselector,
    (state:Appstate) => state.task
)