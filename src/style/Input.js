import React from "react";
import styled from "styled-components";

const Input = (props) => {

    const {children, } = props;
    const styles = {
        
    }

    return(
        <React.Fragment>
            <InputBox>{children}</InputBox>
        </React.Fragment>
    )
}

Input.defaultProps = {

}

const InputBox = styled.div`

`

export default Input;