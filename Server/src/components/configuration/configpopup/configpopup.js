import React from "react";
import { Grid, Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CancelIcon from '@mui/icons-material/Cancel';
import PopupAddSecuregateway from "../popup-addsecuregateway";

function ConfigPopup() {

    //Add new secure gateway popup
    const [addSecureopen, addsecuresetOpen] = React.useState(false);

    //Add new secure gateway Popup
    const addsecureClickOpen = () => {
        addsecuresetOpen(true);
    };
    const addsecureClose = () => {
        addsecuresetOpen(false)
    };

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    
                    <div className="configbtns">
                        <Button onClick={addsecureClickOpen} className="btnsecure">Add New Gateway - Secure</Button>
                        <Button href="http://10.147.18.48:4000/" target='_blank'>Add New Gateway - Default</Button>
                    </div> 

                    <Dialog open={addSecureopen} onClose={addsecureClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" className="custom_dialog">
                        <div className="closebtn" onClick={addsecureClose}><CancelIcon /></div>
                        <DialogTitle id="alert-dialog-title" className="form_title">
                            Add New Secure Gateway
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <PopupAddSecuregateway />
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                  
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default ConfigPopup;