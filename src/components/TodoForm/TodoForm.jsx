import { useRef, useState } from "react"
import { ButtonComponent } from "../shared/Button/ButtonComponent"
import { Field } from "../shared/Field/Field"
import { useDispatch } from "react-redux"
import { todosDeleteAll } from "../features/todos/todosSlice"
import s from './TodoForm.module.css'

const TodoForm = ({ addTodo }) => {

    const [inputTodo, setInputTodo] = useState('')

    const dispatch = useDispatch()

    const inputRef = useRef(null)

    const onChangeInputTodo = (e) => {
        setInputTodo(e.target.value)
    }

    const addInputTodo = () => {
        if (!inputTodo.trim()) return

        addTodo({ id: Math.random(), text: inputTodo.trim() })

        setInputTodo('')
    }

    const onPressEnter = (e) => {
        e.preventDefault()
        inputRef.current.blur()
        if (!inputTodo.trim()) return
        addTodo({ id: Math.random(), text: inputTodo.trim() })
        setInputTodo('')
    }

    return (
        <div>
            <form className={s.todoForm_element_item} onSubmit={onPressEnter}  >
                <Field
                    onChange={(e) => onChangeInputTodo(e)}
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
                sx={{ marginTop: 2 }}
                fullWidth
            />
            <ButtonComponent
                variant="contained"
                size='medium'
                onClick={() => dispatch(todosDeleteAll())}
                sx={{ marginTop: 2 }}
                fullWidth > Delete all </ButtonComponent>
        </div>
    )
}

export default TodoForm