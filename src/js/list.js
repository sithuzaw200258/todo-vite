import Swal from "sweetalert2";
import { doneTaskTotal, input, listGroup, listTemplate, taskTotal } from "./selector.js";
import { v4 as uuidv4 } from 'uuid';

export const tasks = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
// 4. Action Logic
export const updateTaskTotal = () => {
    // Task Total
    const list = document.querySelectorAll(".list");
    // console.dir(list)
    taskTotal.innerText = list.length;
}

export const updateDoneTaskTotal = () => {
    // Task Total
    const doneList = document.querySelectorAll(".list input:checked");
    // console.dir(doneList)
    doneTaskTotal.innerText = doneList.length;
}

export const createNewList = (task) => {
    // const list = listTemplate.cloneNode(true);
    const template = listTemplate.content.cloneNode(true);
    // console.log(template)
    const list = template.querySelector(".list");
    const listText = list.querySelector(".list-text");
    list.id = "list" + uuidv4();
    list.classList.add("animate__animated", "animate__slideInDown", "bg-slate-50");
    listText.innerText = task;

    return list;
}

export const addList = (task) => {
    // Get Input Value
    // const task = input.value;
    // console.log(task)

    // Add New List
    let list = createNewList(task);
    listGroup.append(list);

    // Update Task Total
    // updateTaskTotal();

    // Clear Input Value
    input.value = null;
}

export const deleteList = (listId) => {
    const list = document.getElementById(listId);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            list.classList.remove("animate__slideInDown");
            list.classList.add("animate__hinge");
            list.addEventListener("animationend", () => {
                list.remove();
            })
        }
    });
}

export const editList = (listId) => {
    // console.log("U click edit button");
    const list = document.getElementById(listId);
    const listText = list.querySelector(".list-text");
    const checkList = list.querySelector(".check-list");
    const listEditBtn = list.querySelector(".list-edit-btn");

    // List Edit
    listEditBtn.setAttribute("disabled", true);
    checkList.setAttribute("disabled", true);
    const listInput = document.createElement("input");
    listInput.classList.add("border-2", "border-violet-400", "rounded-md", "focus:outline-none", "focus:border-violet-600", "px-3");
    listInput.value = listText.innerText;
    listText.after(listInput);
    listInput.focus();
    listText.classList.add("hidden");

    listInput.addEventListener("change", () => {
        listEditBtn.removeAttribute("disabled");
        checkList.removeAttribute("disabled");
        listText.innerText = listInput.value;
        listInput.remove();
        listText.classList.remove("hidden");
    });
}

export const checkList = (listId) => {
    // console.log("U click check list");
    const list = document.getElementById(listId);
    const listText = list.querySelector(".list-text");
    const checkList = list.querySelector(".check-list");
    const listEditBtn = list.querySelector(".list-edit-btn");

    // List Check
    // updateDoneTaskTotal();
    listText.classList.toggle("line-through");
    list.classList.toggle("opacity-50");
    // console.dir(checkList);
    // console.dir(checkList.checked);
    if (checkList.checked) {
        listEditBtn.setAttribute("disabled", true);
    } else {
        listEditBtn.removeAttribute("disabled");
    }
}

export const deleteAllList = (lists) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete all!"
    }).then((result) => {
        if (result.isConfirmed) {
            lists.forEach((list) => {
                list.classList.remove("animate__slideInDown");
                list.classList.add("animate__fadeOut");
                list.addEventListener("animationend", () => {
                    list.remove();
                })
            })
        }
    });
}