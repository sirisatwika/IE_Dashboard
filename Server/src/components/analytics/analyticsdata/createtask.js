import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import '../analytics.css';

function CreateTask(){

    //set state for dialog box//
    const [open, Createtask] = React.useState(false);

    //use theme for responsive screen//
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    //Handle dialog box open//
    const handleClickOpen = () => {
        Createtask(true);
    };

    //Handle dialog Box close//
    const handleClose = () => {
        Createtask(false);
    };

    return(
        <React.Fragment>
            <Button variant="text" onClick={handleClickOpen} className="edgebtn">
                <AddIcon/> Create Tasks
            </Button>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle>
                    Create Task
                 </DialogTitle>  
                 <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when x 
                    </DialogContentText>
                </DialogContent>  
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
export default CreateTask;