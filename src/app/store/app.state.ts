import { person } from "../models/person";
import { task } from "../models/task";

export interface Appstate {
    person : person[];
    task : task[];
}

export const initialstate : Appstate = {
    person: [{
        id: 1,
        fname: "sanjay",
        lname: "yadav"
    }],
    task: []
}