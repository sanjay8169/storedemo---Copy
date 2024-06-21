import { createReducer, on } from "@ngrx/store";
import { Appstate,initialstate } from "../app.state";
import { add, clear, remove } from "./people.actions";
import { person } from "../../models/person";

export const kartperson = createReducer(
    initialstate,
    on(add, (state : Appstate,{p} : any):Appstate => {
        console.log("add reducer called", JSON.stringify(p
        ));
        return {
            ...state,
            person: [...state.person,p]
        };
    }),
    on(remove, (state : Appstate,{pid}) => ({
        ...state,
        person : state.person.filter((p)=> p.id != pid)
    })),
    on(clear, (state : Appstate) => ({
        ...state,
        person : []}))
);