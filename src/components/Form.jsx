import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';

import { data } from '../formData';

const renderInput = ({type, label, id}) => {
    let input = null;
    switch(type){
        case "text":
            input = <TextField
            required
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

const getProgress = (page) => {
    return (page * 100) / data.length;
}

const Form = () => {
  
    const [page, changePage] = useState(0);
    const [openSnackbar, snackbar] = useState(false);

    const validateForm = () => {
        let validated = true;
        switch(page){
            case 0:
                for(let field of data[page].fields){
                    if(!document.getElementById(field.id).value){
                        validated = false;
                    }
                }
                break;
            default:
                break;
        }
        return validated;
    }

    const confirmChangePage = (value) => {
        if(validateForm()){
            changePage(value);
        }
        else{
            snackbar(true);
        }
    }

    return (
        <FormControl style={{margin: "1em"}}>
            <Typography variant="h3" gutterBottom>
                {data[page].title}
            </Typography>
            { getInput(page) }
            <LinearProgress variant="determinate" value={getProgress(page+1)} />
            <div style={{display: "flex"}}>
                <Button variant="contained" startIcon={<NavigateNextIcon style={{transform: "rotate(180deg)"}}/>}  onClick={() => changePage(page-1)} disabled={page === 0}>
                    Back
                </Button>
                <div> Page {page+1}</div>
                <Button variant="contained" color="primary" endIcon={<NavigateNextIcon />} onClick={() => confirmChangePage(page+1)} disabled={(page === data.length - 1)}>
                    Next
                </Button>
            </div>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={openSnackbar}
                onClose={() => snackbar(false)}
                autoHideDuration={2000}
                message="Please fullfil form validation before moving forward"
            />
        </FormControl>
    );
  }

  export default Form;