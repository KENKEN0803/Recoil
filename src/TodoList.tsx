import {useRecoilValue} from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import {atoms} from "./atoms";
import {ItodoItem} from "./types";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const todoList = useRecoilValue<ItodoItem[]>(atoms.todoListState);

    return (
        <>
            {/* <TodoListStats /> */}
            {/* <TodoListFilters /> */}
            <TodoItemCreator />

            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
}
