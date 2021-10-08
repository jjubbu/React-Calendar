import produce from "immer";
import {createAction, handleActions} from "redux-actions";

const initialState = {
    year:"2021",
    month:"10"
}

const MONTH = "MONTH";
export const setMonth = createAction(MONTH, (year,month)=>({year,month}));

export default handleActions({
    [MONTH]: (state, action) => produce(state, (draft) => {
        draft.year = action.payload.year;
        draft.month = action.payload.month;
        console.log(initialState);
})
},
initialState)