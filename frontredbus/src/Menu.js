import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';

export const Menu=()=>{
    return(
        <>
         <div className="mt-4 container">
            <h1 className="display-2 text-center text-info"></h1>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 shadow-lg p-3">
                     {/*added text fields Menu.js*/}
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <FormControl variant=""></FormControl>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="From" variant="standard" />
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="To" variant="standard" />
                                <input type="date" 
                                 className="form-control mt-1" 
                                 />
                                {/*<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Date" variant="standard" />*/}
                                {/* Added search button*/}
                                <Button variant="outlined" href="#outlined-buttons">Search</Button>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}