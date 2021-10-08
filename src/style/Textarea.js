import React from "react";
import styled from "styled-components";

const Textarea = (props) => {

    const {children, } = props;
    const styles = {
        
    }

    return(
        <React.Fragment>
            <TextareaBox>{children}</TextareaBox>
        </React.Fragment>
    )
}

Textarea.defaultProps = {

}

const TextareaBox = styled.div`

`

export default Textarea;