import React, { useState } from "react"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from "@mui/material/colors";





export default function TodoInput(props){
    const { handleAddTodos, setTodoValues, todoValue } = props
    const theme = createTheme({
        palette: {
            primary:{
                main: orange[300]
            }
        }
    })
 
    

    return( 
    <header>
        <ThemeProvider theme={theme}><TextField fullWidth variant="outlined" color="primary" value={todoValue} onChange={(e) => setTodoValues(e.target.value)} label="enter to do:" /></ThemeProvider>
        <Fab size="large" variant="extended" color="secondary" aria-label="add" onClick={() => {
            handleAddTodos(todoValue)
            setTodoValues('')}}
            endIcon={<AddIcon/>}
            >ADD
        <AddIcon />
        </Fab>
    </header>
)
       
}