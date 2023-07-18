import React from "react"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

 const Message = ({purcharseID}) => {
    return(
        <Stack sx={{ width: '100%' }} spacing={2}>

        <Alert severity="success">This is a success alert — check it out!{purcharseID}</Alert>
      </Stack>
    );
};

export default Message;