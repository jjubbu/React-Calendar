import React from "react";
import styled from "styled-components";

const Text = (props) => {

    const {children, } = props;
    const styles = {
        
    }

    return(
        <React.Fragment>
            <TextBox>{children}</TextBox>
        </React.Fragment>
    )
}

Text.defaultProps = {

}

const TextBox = styled.div`

`

export default Text;