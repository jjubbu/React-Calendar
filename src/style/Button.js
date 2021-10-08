import React from "react";
import styled from "styled-components";

const Button = (props) => {

    const {children, } = props;
    const styles = {
        
    }

    return(
        <React.Fragment>
            <ButtonBox>{children}</ButtonBox>
        </React.Fragment>
    )
}

Button.defaultProps = {

}

const ButtonBox = styled.div`

`

export default Button;