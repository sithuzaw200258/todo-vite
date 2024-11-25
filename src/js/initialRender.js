import { addList, tasks } from "./list";

const initialRender = () => {
    tasks.forEach((task) => addList(task));
}

export default initialRender;