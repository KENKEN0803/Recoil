import {atom} from "recoil";
import {ItodoItem} from "./types";

export const atoms = {
    textState: atom({
        key: 'textState', // unique ID (with respect to other atoms/selectors)
        default: '', // default value (aka initial value)
    }),
    todoListState: atom<ItodoItem[]>({
        key: 'todoListState',
        default: [],
    }),
}
