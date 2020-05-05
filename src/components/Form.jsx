import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ThankYouPage from './ThankYouPage';
import { data } from '../formData';

const renderInput = ({type, label, id}, setName) => {
    let input = null;
    switch(type){
        case "text":
        case "number":
            input = <TextField
            key={id}
            required
            id={id}
            label={label}
            onChange={ ({target: {value}}) =>
                {
                    if(id === 'last-name-input'){
                        setName(value);
                    }
                }
            }
            type={type}
            />;
            break;
        case "switch":
            input = <FormControlLabel
                control={<Switch name="checkedA" id={id}/>}
                label={label}
                key={id}
            />;
            break;
        default:
            break;
    }
    return input;
}

const getInput = (page, setName) => {
    return data[page].fields.map(field => renderInput(field, setName));
}

const getProgress = (page) => {
    return (page * 100) / data.length;
}

const Form = () => {
  
    const [page, changePage] = useState(0);
    const [name, setName] = useState(null);
    const [openSnackbar, snackbar] = useState(false);

    const validateForm = () => {
        let validated = true;
        switch(page){
            case 0:
            case 2:
                for(let field of data[page].fields){
                    if(!document.getElementById(field.id).value){
                        validated = false;
                    }
                }
                break;
            case 1:
                validated = data[page].fields.some( field => document.getElementById(field.id).checked);
                break;
            case 3:
                validated = data[page].fields.some( field => document.getElementById(field.id).checked);
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

    if(page === data.length)
        return <ThankYouPage name={name}/>;
    return (
        <FormControl style={{margin: "1em"}}>
            <Typography variant="h3" gutterBottom>
                {data[page].title}
            </Typography>
            <Typography variant="subtitle1" style={{textAlign: "center"}}>
                {data[page].validationMessage}
            </Typography>
            { getInput(page, setName) }
            <LinearProgress variant="determinate" value={getProgress(page+1)} className="progress-bar"/>
            <div className="button-container">
                <Button variant="contained" startIcon={<NavigateNextIcon style={{transform: "rotate(180deg)"}}/>}  onClick={() => changePage(page-1)} disabled={page === 0}>
                    Back
                </Button>
                <div> Page {page+1} of {data.length}</div>
                <Button variant="contained" color="primary" endIcon={<NavigateNextIcon />} onClick={() => confirmChangePage(page+1)}>
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