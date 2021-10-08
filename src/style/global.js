import {createGlobalStyle} from "styled-components";
import { normalize } from 'react-style-reset/string';

export const GlobalStyle = createGlobalStyle `

${normalize};

*{padding:0; margin:0;}

html{
    width: 100%;
    height: 100%;
    color:white;
    font-size: 12px;

    body{
        width: 100%;
        height: 100%;
        background: #0D0C09;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width:680px){
        font-size: 9px;
    }
}

#root{
    width: 83%;
    max-width: 990px;
    position: relative;
}

//메인 캘린더 디자인
//헤더 초기화
 .fc-next-button, .fc-prev-button{
    position: absolute;
    z-index: -9999;
    opacity: 0;
}

//풀캘린더 기본 팝업 뜨지 않게 레이아웃 뒤로 옮기기
.fc-daygrid-day-events{
    position: absolute;
    z-index: -9999;
}




`


