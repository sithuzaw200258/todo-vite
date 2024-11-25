import initialRender from "./initialRender";
import listener from "./listener";
import observer from "./observer";


class Todo{
    init(){
        console.log("Todo init");
        observer();
        initialRender();
        listener();
    }
}

export default Todo;