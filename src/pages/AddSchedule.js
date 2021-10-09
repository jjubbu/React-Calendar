import React from "react";
import {useDispatch} from "react-redux";
import {actionCreators as addAction} from "../redux/modules/schedule";
import styled from "styled-components";
import {history} from "../redux/store";

const AddSchedule = () => {
    const [_color, setColor] = React.useState('#FF477E');

    const dispatch = useDispatch();

    const _start = React.useRef();
    const _end = React.useRef();
    const _memo = React.useRef();

    const getColor = (e) => {
        const siblings = t => [...t.parentElement.children].filter(e => e != t);
        siblings(e.target).map((x)=>{
            x.setAttribute('class','');
        });
        e.target.classList.add("on");
        const color = e.target.attributes.tagColor.value;
        // console.log(color);
        setColor(color);
    }
    const Save = () => {
        const start = _start.current.value;
        const end = _end.current.value;
        const memo = _memo.current.value;
        const color = _color;

        console.log('저장-시작일:::', start);
        console.log('저장-끝일:::', end);
        console.log('저장-메모:::', memo);
        console.log('저장-태그색상:::', color);
        if (start === "" || end === "" || memo === ""){
            alert('일시와 내용을 전부 입력해주세요!')
        }else{dispatch(addAction.addSCH_FB(start, end, color, memo));}
        
    }

    return (
        <React.Fragment>
            <Box>
                <GoBack
                    onClick={() => {
                        history.replace('/')
                    }}>{String("< 뒤로가기")}</GoBack>
                <Label for="day">
                    <h1>일시</h1>
                    <div>
                    <input type="date" id="day" ref={_start}/>
                    <p>~</p>
                    <input type="date" id="day" ref={_end}/>
                    </div>
                </Label>
                <Label>
                    <h1>내용</h1>
                    <textarea ref={_memo}/>
                </Label>
                <ButtonBox>
                    <ul>
                        <button
                            className="on"
                            tagColor={'#FF477E'}
                            onClick={getColor}
                            style={{
                                background: "#FF477E"
                            }}></button>

                        <button
                            className=""
                            tagColor={'#FFDE00'}
                            onClick={getColor}
                            style={{
                                background: "#FFDE00"
                            }}></button>

                        <button
                            className=""
                            tagColor={'#47D3FF'}
                            onClick={getColor}
                            style={{
                                background: "#47D3FF"
                            }}></button>

                        <button
                            className=""
                            tagColor={'#00E817'}
                            onClick={getColor}
                            style={{
                                background: "#00E817"
                            }}></button>

                        <button
                            className=""
                            tagColor={'#FF8311'}
                            onClick={getColor}
                            style={{
                                background: "#FF8311"
                            }}></button>

                        <button
                            className=""
                            tagColor={'#C05AFF'}
                            onClick={getColor}
                            style={{
                                background: "#C05AFF"
                            }}></button>

                    </ul>
                    <SaveButton onClick={Save}>저장</SaveButton>
                </ButtonBox>
            </Box>
        </React.Fragment>
    )
}
const Box = styled.section `

width:90%;
max-width:786px;
display: flex;
flex-direction:column;
margin:0 auto;
`

const Label = styled.label `

width: 100%;
display:flex;
justify-content:space-between;
align-items:start;
margin-bottom:36px;

h1{
    font-size:36px;
    line-height:36px;
    height: 40px;
    width: 65px;
    margin:0 5% 0 0;
}
p{
    font-size:36px;
    line-height:36px;
    margin: 0 3%;
}
div{
    display: flex;
    flex: 1;
}
input{
    flex:1;
    height: 40px;
    border-radius:10px;
    border:none;
    padding-left:10px;
    font-size: 1.5rem;
}

textarea{
    flex:1;
    height:264px;
    border-radius:10px;
    border:none;
    padding:10px;
    resize: none;
    font-size: 1.5rem;
}


@media only screen and (max-width:680px){
    flex-direction: column;
    h1{
        margin-bottom:20px ;
    }
    p{}
    div{width:100%}
    input{
        /* width: calc(100% - 10px); */
        height: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin: 10px 0;
    }
    textarea{
        width: calc(100% - 20px);
    }
}



`
const ButtonBox = styled.div `
display: flex;
justify-content:space-between;
align-items: center;
ul{
        button {
            width:25px;
            height: 25px;
            border-radius:100px;
            border:none;
            opacity:.5;
            margin-right:10px;
            cursor:pointer;
            &.on{
                opacity: 1;
            }
        } 
}
@media only screen and (max-width:680px){
    align-items: flex-end;
    ul{
        width:30%;
        display: flex;
        flex-wrap: wrap;
        gap:8px;

        button{margin:0}
    }
}
`

const SaveButton = styled.button `
width:174px;
height: 50px;
font-size:2rem;
background: #ffde00;
border:none;
border-radius:10px;
cursor:pointer;

&:hover{
    opacity: .5;
}
@media only screen and (max-width:680px){
    width:174px;
    height: 40px;
}
`

const GoBack = styled.button `

color:white;
background: none;
border:none;
width: fit-content;
font-size: 1.5rem;
margin-bottom: 78px;
@media only screen and (max-width:680px){
    margin-bottom: 58px ;
}
`

export default AddSchedule;