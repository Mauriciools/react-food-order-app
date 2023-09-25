import { useReducer } from 'react';

const initialInputState = { value: '', isTouched: false };
const inputStateReducer = (state, action) => {
    if (action.type === "INPUT") {
        return { value: action.value, isTouched: state.isTouched };
    };
    if (action.type === "BLUR") {
        return { value: state.value, isTouched: action.isTouched };
    };

    return initialInputState;
};

const useInput = (validationFunction) => {
    const [inputState, dispatchInputState] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = validationFunction(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatchInputState({ type: "INPUT", value: event.target.value });
    };

    const valueBlurHandler = (event) => {
        dispatchInputState({ type: "BLUR", isTouched: true });
    };

    const reset = () => {
        dispatchInputState({ type: "RESET" });
    };

    return {
        enteredValue: inputState.value,
        valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    };
};

export default useInput;
