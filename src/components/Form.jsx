import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { data } from '../formData';

const renderInput = ({type, label, id}) => {
    let input = null;
    switch(type){
        case "text":
            input = <TextField
            id={id}
            label={label}
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
                ),
            }}
            />;
            break;
        default:
            break;
    }
    return input;
}

const getInput = (page) => {
    return data[page].fields.map(field => renderInput(field));
}

const Form = () => {
  
    const [page, changePage] = useState(0);

    return (
        <FormControl style={{margin: "1em"}}>
            { getInput(page) }
            <div style={{display: "flex"}}>
                <Button variant="contained" startIcon={<NavigateNextIcon style={{transform: "rotate(180deg)"}}/>}  onClick={() => changePage(page-1)} disabled={page === 0}>
                    Back
                </Button>
                <div> Page {page+1}</div>
                <Button variant="contained" color="primary" endIcon={<NavigateNextIcon />} onClick={() => changePage(page+1)} disabled={page === 5}>
                    Next
                </Button>
            </div>
        </FormControl>
    );
  }

  export default Form;