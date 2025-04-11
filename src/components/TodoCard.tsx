import React from "react"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";




export default function TodoCard(props){
    const {children, handleDeleteTodo, index, handleEditTodo, handleChangeTodo, checked} = props
    return( <div>
        <li className="todoItem">
                {children}
                <div className="actionContainer">
                    <IconButton  onClick={()=> handleEditTodo(index)}>
                        <EditIcon>
                    <i className="fa-solid fa-pen-to-square"></i></EditIcon></IconButton>
                    <IconButton onClick={()=> handleDeleteTodo(index)}>
                        <DeleteIcon>
                    <i className="fa-solid fa-trash-can"></i></DeleteIcon></IconButton>
                    <Checkbox checked={checked} onChange={() => handleChangeTodo(index)}></Checkbox>
                    </div>
                </li>
    </div>
)
       
} 