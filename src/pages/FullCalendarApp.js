import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {history} from "../redux/store";
import styled from "styled-components";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

import {actionCreators as getEventAction} from "../redux/modules/schedule";
// import { setMonth } from "../redux/modules/month";
import { isPopup } from "../redux/modules/popup";

import Popup from "../components/Popup";

//캘린더 헤더 내부 요소 설정
const headerCustom = {
    start: 'prev',
    center: 'title',
    end: 'next'
}
const titleCustom = (date) => {
    return date.date.year+"년 "+(date.date.month+1)+"월"
}

const dayMaxEventRows = true;
const views = {
    dayGrid: {
        dayMaxEventRows: 2
    }
}

const FullCalendarApp = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getEventAction.getSCH_FB());
    }, []);
    
    const list = useSelector(state => state.schedule.list);
    let newList = list.filter((event)=>event.done ===false);
    let onlyDoneList = list.filter((event)=>event.done ===true);
    const [done, setDone] = React.useState(false);
    const [buttonText, setbuttonText] = React.useState('> 완료한 일정 보기')
    
    
    const is_popup = useSelector(state => state.popup.popup);
    const [day, setday] = React.useState();

    
    // const [month, setMonth] = React.useState();
    
    
    

    const addButton = () => {
        // console.log('모듈 리스트 :::', list);
        history.push('/add');
    }
    const seeButton =()=>{
        //완료버튼
        if(done === false){
            setDone(true)
            setbuttonText('> 진행중인 일정 보기')
        }else{
            setDone(false)
            setbuttonText('> 완료한 일정 보기')
        }
        
        
    }

    const schClick = (info) => {
        // console.log(info.event.title);
        console.log('Popup is:::',info.dateStr);
        setday(info.dateStr)
        dispatch(isPopup(true));
    } 

    const calendarRef = React.useRef();
    const PrevButton = () => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.prev();
    }
    const NextButton = () => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.next();
    }

    return (
        <React.Fragment>
            
            {is_popup? <Popup day={day}/>:null}
            <MonthMove>
                <button onClick={PrevButton}>{String("<")}</button>
                {/* <div>
                    <p>{year}</p>
                    <h1>{month}<span>월</span></h1>
                </div> */}
                <button onClick={NextButton}>{String(">")}</button>
            </MonthMove>
            <FullCalendar
            ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={headerCustom}
                titleFormat={titleCustom}
                events={!done?newList:onlyDoneList}
                dateClick={schClick}
                weekends={true}
                dayMaxEventRows={dayMaxEventRows}
                views={views}
            />
            <button onClick={addButton}>일정 추가</button>
            <button onClick={seeButton}>{buttonText}</button>

        </React.Fragment>
    )
}



const MonthMove = styled.div`
width:250px;
height: 60px;
/* height: 154px; */
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
top:-20px;
left: 50%;
margin-left: -125px;

div{
    text-align: center;
}

p{
    font-size: 2rem;
    color:#ccc;
}
h1{
    font-size: 6rem;
    margin: 0;
    span{font-size:3rem;}
}

@media only screen and (max-width:680px){
}

button{
    font-size: 4rem;
    border: none;
    background: none;
    color: white;
    height: 60px;
    line-height: 60px;

    &:hover{
        color:#ffde00;
    }
}

`

export default FullCalendarApp;