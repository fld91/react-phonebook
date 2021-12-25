import React from 'react'
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { addRecent, toggle_fav } from '../actions/actions';
import IconButton from '@mui/material/IconButton';
import Phone from '@mui/icons-material/Phone';
import { border, borderRadius } from '@mui/system';

const styles = {
    container: {
        display: "flex",
        height: "50px",
        backgroundColor: "#5584AC",
        margin: "2px",
        borderRadius: "5px",
        padding: "2px"
    },
    infoContainer: {
        flex: 1,

    },
    mobile: {
        fontSize: "14px",

    }

}
function stringToColor(string) {
    let hash = 0;
    let i;
    

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function Contactcard(props) {
    const dispatch = useDispatch();
    return (
        <div style={styles.container}>
            <div>
                <Avatar {...stringAvatar(props.name)} />
            </div>
            <div style={styles.infoContainer}>
                {props.name}
                <br />
                <span style={styles.mobile}>+91 {props.mobile}</span>
            </div>
            <div>
                <Rating
                    name="simple-controlled"
                    value={props.isFav}
                    max={1}
                    onChange={(event, newValue) => {
                        //setValue(newValue);
                        dispatch(toggle_fav(props.id))
                    }} />


            </div>
            <IconButton
                onClick={() => {
                    dispatch(addRecent(props.id))
                }
                }><Phone /></IconButton>
        </div>
    )
}

export default Contactcard
