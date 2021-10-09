//일정 저장하는 모듈!

import produce from "immer";
import {createAction, handleActions} from "redux-actions";
import {firestore} from "../../shared/firebase";

const initialState = {
    list: [
        // {
        //     id: 1,
        //     title: 'event 1',
        //     start: '2021-10-14T10:00:00',
        //     end: '2021-06-14T12:00:00',
        //     color: '#FFDE00'
        // }, {
        //     id: 2,
        //     title: 'event 2',
        //     start: '2021-10-14T10:00:00',
        //     end: '2021-06-14T12:00:00',
        //     color: "pink"
        // }
    ]
}

//액션
const ADD_SCH = "ADD_SCH"; //일정 저장 액션
const SET_SCH = "SET_SCH"
const DONE_SCH = "DONE_SCH";
const DELET_SCH = "DONE_SCH";


const addSCH = createAction(
    DONE_SCH,
    (start, end, color, memo) => ({start, end, color, memo})
);
const setSCH = createAction(SET_SCH, (event_list) => ({event_list}));
const doneSCH = createAction(DONE_SCH, (done,docID)=>({done, docID}));
const deletSCH = createAction(DELET_SCH, (docID)=>({docID}));

//미들웨어 db에서 일정 가져오기
const getSCH_FB = () => {
    return function (dispatch, getState, {history}) {
        
        const db = firestore.collection("schedule");
        
        db
            .get()
            .then((querySnapshot) => {
                let event_list = [];
                querySnapshot.forEach((doc) => {
                    let id = doc.id;
                    let data = doc.data();
                    let _list = {
                        id,
                        ...data
                    }
                    event_list.push(_list);

                });
                console.log('ALLeventList:::', event_list)
                dispatch(setSCH(event_list));
            });
        
        
    }
}

//db에 일정 저장하기
const addSCH_FB = (start = null, end = null, color, memo = null) => {
    return function (dispatch, getState, {history}) {
        const db = firestore.collection("schedule");
        db
            .add({start: start, end: end, title: memo, color: color, done:false})
            .then((docRef) => {
                console.log("이게모냐:::", docRef);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        history.replace('/');

    }
};

//완료상태로 바꾸기
const changeDoneFB = (done, docID) => {
    return function (dispatch, getState, {history}) {
    const db = firestore.collection("schedule").doc(docID);
    db.update({
        color:'#363636',
        done:true
    }).then((doc) => {
        dispatch(doneSCH(true, docID));
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}
}

//일정 삭제
const deleteFB = (docID)=>{
    return function (dispatch, getState, {history}){
        firestore.collection("schedule").doc(docID)
        .delete().then(() => {
            console.log("Document successfully deleted!");
            dispatch(deletSCH(docID));
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
}

//리듀서

export default handleActions({
    [ADD_SCH]: (state, action) => produce(state, (draft) => {

    }),
    [SET_SCH]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.event_list;
    }),
    [DONE_SCH]:(state, action)=>produce(state, (draft)=>{
        let idx = draft.list.findIndex((index)=>index.id === action.payload.docID);
        draft.list[idx] = {
            ...draft.list[idx],
            ...action.payload.done,
            color:'#363636'
        }
    }),
    [DELET_SCH]: (state, action) => produce(state, (draft)=>{
        let idx = draft.list.findIndex((index)=>index.id === action.payload.docID);
        draft.list.splice(idx,1);
        console.log("삭제 후 이벤트 리스트:::",state.list)
    })
}, initialState);

export const actionCreators = {
    setSCH,
    addSCH,
    addSCH_FB,
    getSCH_FB,
    changeDoneFB,
    doneSCH,
    deleteFB
}