import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PopupForm from "./popupform";
import CancelIcon from '@mui/icons-material/Cancel';

function PopupBlock() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="contained" onClick={handleClickOpen} className="cusbtn">
               Create
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <div className="closebtn" onClick={handleClose}><CancelIcon/></div>
                <DialogTitle id="alert-dialog-title" className="form_title">
                    Title of the form
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                       <PopupForm/>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
export default PopupBlock;