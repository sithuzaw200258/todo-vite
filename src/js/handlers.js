import { input, listGroup } from "./selector.js";
import { addList, deleteAllList, checkList, editList, deleteList } from "./list.js";

// 3. Handler
export const listGroupHandler = (event) => {
    // console.log(event)
    // console.dir(event.target);
    const list = event.target.closest(".list");
    const listId = list.id;
    // console.log(list);
    // console.dir(list);

    if (event.target.classList.contains("check-list")) {
        checkList(listId);
    } else if (event.target.classList.contains("list-edit-btn")) {
        editList(listId);
    } else if (event.target.classList.contains("list-delete-btn")) {
        deleteList(listId);
    }

}

export const inputHandler = (event) => {
    // console.dir(event)
    // console.dir(event.key)
    if (event.key === "Enter") {
        if (input.value.trim()) {
            addList(input.value);
        } else {
            alert("Please Fill Input Task");
        }
    }
}

export const addListHandler = () => {
    if (input.value.trim()) {
        addList(input.value);
    } else {
        alert("Please Fill Input Task");
    }
}

export const deleteAllHandler = () => {
    const lists = listGroup.querySelectorAll(".list");
    deleteAllList(lists);
}

export const checkAllHandler = () => {
    const lists = listGroup.querySelectorAll(".list");
    lists.forEach((list) => {
        // list.querySelector(".check-list").checked = true;
        list.querySelector(".check-list").toggleAttribute("checked");
        checkList(list.id);
    })
}
