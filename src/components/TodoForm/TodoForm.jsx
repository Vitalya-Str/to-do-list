import { useRef, useState } from "react"
import { ButtonComponent } from "../shared/Button/ButtonComponent"
import { Field } from "../shared/Field/Field"
import { useDispatch } from "react-redux"
import { todoAdded, todosDeleteAll } from "../features/todos/todosSlice"
import s from './TodoForm.module.css'
import {  Button, Dialog, DialogActions, DialogTitle } from "@mui/material"


const TodoForm = ({ setSearchTodo }) => {

    const [inputTodo, setInputTodo] = useState('')

    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const inputRef = useRef(null)

    const handleChangeInputTodo = (e) => {
        setInputTodo(e.target.value)
    }

    const addInputTodo = () => {
        if (!inputTodo.trim()) return
        dispatch(todoAdded({ id: Math.random(), text: inputTodo.trim() }))
        setInputTodo('')
    }

    const onPressEnter = (e) => {
        e.preventDefault()
        inputRef.current.blur()
        if (!inputTodo.trim()) return
        dispatch(todoAdded({ id: Math.random(), text: inputTodo.trim() }))
        setInputTodo('')

    }

    const handleDeleteAll = () => {
        dispatch(todosDeleteAll())
        setOpen(false)
    }

    const handleSearchInput = (e) => {
        setSearchTodo(e.target.value)
    }
    return (
        <>
            <form className={s.todoForm_element_item} onSubmit={onPressEnter}  >
                <Field
                    onChange={handleChangeInputTodo}
                    inputRef={inputRef}
                    label='input todo'
                    size='small'
                    value={inputTodo}
                    fullWidth
                />
                <ButtonComponent
                    variant="contained"
                    size='medium'
                    onClick={addInputTodo}
                    sx={{ marginLeft: 2 }}> Add </ButtonComponent>
            </form>
            <Field
                label='Search Task'
                size='small'
                onChange={handleSearchInput}
                sx={{ marginTop: 2 }}
                fullWidth
            />
            <ButtonComponent
                variant="contained"
                size='medium'
                onClick={() => setOpen(true)}
                sx={{ marginTop: 2 }}
                fullWidth > Delete all </ButtonComponent>

            <Dialog
                sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
                maxWidth="xs"
                open={open}
            >
                <DialogTitle>Хотите удалить все заметки?</DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteAll}>Ok</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default TodoForm