// 2.Listener
import { addListHandler, checkAllHandler, deleteAllHandler, inputHandler, listGroupHandler } from "./handlers.js";
import { addTaskBtn, checkAll, deleteAll, input, listGroup } from "./selector.js";


const listener = () => {
    input.addEventListener("keyup", inputHandler);
    addTaskBtn.addEventListener("click", addListHandler);
    listGroup.addEventListener("click", listGroupHandler);
    deleteAll.addEventListener("click", deleteAllHandler);
    checkAll.addEventListener("click", checkAllHandler);
}

export default listener;