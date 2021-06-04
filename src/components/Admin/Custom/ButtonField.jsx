import * as React from "react";
import PropTypes from 'prop-types';
import { useRecordContext } from 'react-admin';
import { Button } from "@material-ui/core";

const ButtonField = (props) => {
    //const { source } = props;
    const record = useRecordContext(props);
    const link = record.researchPaperURL || record.wsProposalLink;

    return(
        <Button variant="contained" onClick={()=>{
            window.open(link, "_blank")
        }}>
            View
        </Button>
    );    
}

ButtonField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

export default ButtonField;