import { createReducer, on } from "@ngrx/store";
import { Appstate, initialstate } from "../app.state";
import { add, remove } from "./task.actions";

export const task = createReducer(
    initialstate,
    on(add,(state:Appstate, {task} : any):Appstate => {
        console.log("add reducer called",JSON.stringify(task));
        return {
            ...state,
            task : [...state.task,task]
        };
    }),
    on(remove,(state :Appstate, {id} : any) : Appstate => ({
        ...state,
        task : state.task.filter((data) => data.id != id)
    }))
);