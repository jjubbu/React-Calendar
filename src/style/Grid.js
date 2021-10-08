import React from "react";
import styled from "styled-components";

const Grid = (props) => {

    const {children,width,height,padding,margin,display ,background} = props;
    const styles = {
        width: width,
        height: height,
        padding: padding,
        margin: margin,
        display: display,
        background:background,
    }

    return(
        <React.Fragment>
            <GridBox {...styles}>{children}</GridBox>
        </React.Fragment>
    )
}

Grid.defaultProps = {
width:"100%",
height:"100%",
padding:"0",
margin:"0",
display:"block",
background: "#0D0C09",

}

const GridBox = styled.div`
width: ${(props)=>props.width};
height: ${(props)=>props.height};
padding: ${(props)=>props.padding};
margin: ${(props)=>props.margin};
display: ${(props)=>props.display};
background: ${(props)=>props.background};


`

export default Grid;