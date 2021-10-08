import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {isPopup} from "../redux/modules/popup";
import {actionCreators as PopupAction} from "../redux/modules/schedule"

const Popup = (props) => {
    const day = props.day;
    const dispatch = useDispatch();

    const Test = () => {}

    //이벤트 리스트 불러오기
    const list = useSelector(state => state.schedule.list);
    //불러온 리스트중 선택한 날짜와 맞는 이벤트만 걸러내기
    const eventList = list.filter(
        event => event.start === day || event.end === day
    );

    //팝업창 닫기
    const goBack = () => {
        dispatch(isPopup(false));
    }

    const doneButton = async (e) => {
        const eventID = e.target.attributes.eventID.value;
        await dispatch(PopupAction.changeDoneFB(true, eventID));
        dispatch(isPopup(false));
    }

    const deletButton = (e) => {
        const eventID = e.target.attributes.eventID.value;
        dispatch(PopupAction.deleteFB(eventID));
    }

    return (
        <React.Fragment>
            <PopupBack>
                <PopupBox>
                    <button onClick={goBack}>닫기</button>
                    <p>{day.split('-')[0]}년</p>
                    <p>{day.split('-')[1]}<span>월</span>
                        {day.split('-')[2]}<span>일</span>
                    </p>

                    <ListSection>
                        {
                            eventList.map((x, idx) => {

                                return (
                                    <Eventlist
                                        style={{
                                            background: x.color
                                        }}>
                                        <div
                                            style={x.color === '#363636'
                                                ? {
                                                    color: "white"
                                                }
                                                : {
                                                    color: "#363636"
                                                }}>{x.title}</div>
                                        <div>
                                            {
                                                x.color === '#363636'
                                                    ? null
                                                    : <button eventID={x.id} onClick={doneButton} className="doneButton">완료</button>
                                            }
                                            <button eventID={x.id} onClick={deletButton} className="deleteButton">삭제</button>
                                        </div>
                                    </Eventlist>
                                )

                            })
                        }
                    </ListSection>
                    {/* <button onClick={Test}>테스트</button> */}
                </PopupBox>

            </PopupBack>
        </React.Fragment>
    )
}

const PopupBack = styled.div `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,.5);
display: flex;
justify-content: center;
align-items: center;
z-index: 9999;
`

const PopupBox = styled.section `
width:66%;
height: 500px;
background: #fff;
color:#000;
border-radius: 10px;
position: relative;
display: flex;
flex-direction: column;

&>button{
background: none;
border: none;
font-size: 2rem;
position: absolute;
right: 30px;
top:30px;
}
p{
    padding: 0;
    margin: 0 0 0 13%;
}
//년도
p:nth-child(2){
    font-size: 2rem;
    margin-top: 70px;
}
//00월 00일
p:nth-child(3){
    font-size: 3rem;
     position: relative;
    width: fit-content;
    span{
       font-size: 2rem;
    }
    &::after{
            content: "";
            display: block;
            width: 100%;
            height: 15px;
            background-color: #ffde00;
            mix-blend-mode: multiply;
            position: absolute;
            bottom:-5px;
        }
}
@media only screen and (max-width:680px){
    width:80%;
    &>button{top:22.5px; right:22.5px;}
    p:nth-child(2){margin-top:52.5px;}
}
`
const ListSection = styled.section `
width:74%;
margin: 35px auto;
height: 100%;
overflow-y: scroll;
@media only screen and (max-width:680px){
   
}
`

const Eventlist = styled.section `
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 10px;
margin-bottom: 10px;
padding: 15px;

div:first-child{
    font-size: 2rem;
    color:#363636;
}

div:last-child{
    display: flex;
    gap:10px;
    button{
    width:50px;
    height: 25px;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;

    &.doneButton{
        background-color: #363636;
        color:white;
        
    }
    &.deleteButton{
        background-color: white;
        color:#363636;
    }

}



}

@media only screen and (max-width:550px){
   padding: 10px;
}


`

export default Popup;