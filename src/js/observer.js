import { updateDoneTaskTotal, updateTaskTotal } from "./list";
import { listGroup } from "./selector";

const observer = () => {
    const jobs = () => {
        console.log("Observer is working");
        updateTaskTotal();
        updateDoneTaskTotal();
    }
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    const listGroupObserver = new MutationObserver(jobs);

    // Start observing the target node for configured mutations
    listGroupObserver.observe(listGroup, config);
}

export default observer;