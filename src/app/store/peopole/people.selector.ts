import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Appstate } from "../app.state";

export const selectpersontate = createFeatureSelector<Appstate>('person');

export const personSelector = createSelector(
    selectpersontate,
    (state:Appstate) => state.person
);  