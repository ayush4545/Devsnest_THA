import {DECREMENT, INCREMENT} from "../actionTypes";

const Increment = (num: number) => {
    return {
        type: INCREMENT,
        payload: num
    }
}

const Decrement = (num: number) => {
    return {
        type: DECREMENT,
        payload: num
    }
}

export {Increment, Decrement}