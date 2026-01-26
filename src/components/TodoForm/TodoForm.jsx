import { useRef, useState } from "react"
import { ButtonComponent } from "../shared/Button/ButtonComponent"
import { Field } from "../shared/Field/Field"
import { useDispatch } from "react-redux"
import { todoAdded, todosDeleteAll } from "../features/todos/todosSlice"
import s from './TodoForm.module.css'
import { Box, Button, Modal, Typography } from "@mui/material"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const TodoForm = ({setSearchTodo}) => {

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
                    onChange={(e) => handleChangeInputTodo(e)}
                    inputRef={inputRef}
                    label='input todo'
                    size='small'
                    value={inputTodo}
                    fullWidth
                />
                <ButtonComponent
                    variant="contained"
                    size='medium'
                    onClick={() => addInputTodo()}
                    sx={{ marginLeft: 2 }}> Add </ButtonComponent>
            </form>
            <Field
                label='Search Task'
                size='small'
                onChange={(e) => handleSearchInput(e)}
                sx={{ marginTop: 2 }}
                fullWidth
            />
            <ButtonComponent
                variant="contained"
                size='medium'
                onClick={() => setOpen(true)}
                sx={{ marginTop: 2 }}
                fullWidth > Delete all </ButtonComponent>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Хотите удалить все заметки?
                    </Typography>
                    <Button onClick={() => handleDeleteAll()}>Yes</Button>
                    <Button onClick={() => setOpen(false)}>No</Button>
                </Box>

            </Modal>
        </>
    )
}

export default TodoForm