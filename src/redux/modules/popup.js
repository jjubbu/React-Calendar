//팝업 제어 모듈
import produce from "immer";
import {createAction, handleActions} from "redux-actions";

const initialState = {
    popup:false,
}

const IS_POPUP = "IS_POPUP"; 

export const isPopup = createAction(IS_POPUP,(popup)=>({popup}));

export default handleActions(
    {
        [IS_POPUP]:(state,action)=>produce(state,(draft)=>{
            draft.popup = action.payload.popup;
        })
    }, initialState
);