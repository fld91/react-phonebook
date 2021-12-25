import * as React from 'react';
import Box from '@mui/material/Box';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { new_contact,changeEmail,changeMobile,changeName } from '../actions/actions';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    textAlign: "center",
    boxShadow: 24,
    p: 4,
};

export default function AddContactModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const data = useSelector(state => state.addContact)
    const dispatch = useDispatch();
   

    return (
        <div>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClick={handleOpen}
            >

            </SpeedDial>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2>New Contact</h2>
                    <TextField id="outlined-basic" label="Full name" variant="outlined" value={data.name} onChange={e=>dispatch(changeName(e.target.value))} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="Mobile" variant="outlined" value={data.mobile}  onChange={e=>dispatch(changeMobile(e.target.value))}/>
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="email" variant="outlined" value={data.email} onChange={e=>dispatch(changeEmail(e.target.value))}/>
                    <br />
                    Favoriate
                    <Switch label="Favoriate" />
                    <br />
                    <br />
                    <Button variant="contained"
                        onClick={() => {
                            dispatch(new_contact(data))
                            handleClose()
                        }}>Save Contact</Button>
                </Box>
            </Modal>
        </div>
    );
}
