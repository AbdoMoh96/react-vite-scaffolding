import {useSelector} from "react-redux";

const counterValueSelector = () => {
    return useSelector((state) => state.reducers.counter.value);
}

export default counterValueSelector;