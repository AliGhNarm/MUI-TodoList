import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { checkboxClasses, Typography } from "@mui/material";
import TodoCard from "./components/TodoCard";
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {

    const [todos, setTodos] = useState([]) 
    const [todoValue, setTodoValues] = useState('')
    const [checked, setChecked] = useState('')
    const theme = createTheme();

    theme.typography.h1 = {
      fontSize: '1.2rem',
      textAlign: "center",
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    };
    


    function persistData(newList){
      localStorage.setItem('todos', JSON.stringify({todos: newList}))
      localStorage.setItem('checked', JSON.stringify({checked: newList}))
    }

    function handleAddTodos (newTodo){
      const newTodoList = [... todos, newTodo]
      setTodos(newTodoList)
      persistData(newTodoList)

    }

    function handleDeleteTodo(index) {
      const newTodoList = todos.filter((todo, todoIndex)=> {
        return todoIndex !== index
      })
      persistData(newTodoList)
      setTodos(newTodoList)
    }

    function handleEditTodo(index){
      const valueToEdit = todos[index]
      setTodoValues(valueToEdit)
      handleDeleteTodo(index)
    }

    function handleChangeTodo(index){
      setChecked(index)
      

    }
  
    useEffect(()=> {
      if (!localStorage){
        return
      }

      let localTodos = localStorage.getItem('todos') 
      let localChecked = localStorage.getItem('checked')
      if (!localTodos){
        return
      } 
      if (!localChecked){
        return
      }
      localTodos = JSON.parse(localTodos).todos
      localChecked = JSON.parse(localChecked).checked
      setTodos(localTodos)
      setChecked(localTodos)
      
    },[])
  return (
    <>
     <>
        <ThemeProvider theme={theme}><Typography align="center" sx={{display: "relative"}} variant="h1" className="header h1">TODO LIST</Typography></ThemeProvider>
        <TodoInput todoValue={todoValue} setTodoValues={setTodoValues} handleAddTodos = {handleAddTodos}/>
        <TodoList handleChangeTodo={handleChangeTodo} handleDeleteTodo={handleDeleteTodo} handleEditTodo = {handleEditTodo}  todos={todos}/>
 
      </> 
    </>
  )
}

export default App
