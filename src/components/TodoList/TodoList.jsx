import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos, todoDelete, todoToggle } from '../features/todos/todosSlice';
import ListItem from './ListItem/index'
import { useState } from 'react';
import s from './TodoList.module.css'



const TodoList = ({ searchTodo }) => {

    const [todo, setTodo] = useState(null)
    const [sortType, setSortType] = useState('date')
    const [sort, setSort] = useState('asc')

    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()



    const handleChange = (id) => {
        dispatch(todoToggle(id))
    }

    const deleteOne = (id) => {
        dispatch(todoDelete(id))
        setTodo(null)
    }

    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchTodo.toLowerCase()))

    const sortedTodos = [...filteredTodos].sort((a, b) => {

        let result = 0

        if (sortType === 'alphabet') {
            result = a.text.localeCompare(b.text)
        }
        if (sortType === 'date') {
            result = new Date(a.date) - new Date(b.date)
        }

        return sort === 'desc' ? -result : result
    })


    return (
        <>
            <select className={s.sort} name="sort" id="sort" onClick={(e) => setSortType(e.target.value)}>
                <option value="date">По дате</option>
                <option value="alphabet">По алфавиту</option>
            </select>
            <select className={s.sort} name="sort" id="sort" onClick={(e) => setSort(e.target.value)}>
                <option value="asc">По возрастанию</option>
                <option value="desc">По убыванию</option>
            </select>
            <div className={s.todo_list}>

                {sortedTodos.map((t, i) => {

                    return <>
                        <ListItem key={i}
                            setTodo={setTodo}
                            item={t}
                            handleChange={handleChange}
                            style={s}
                        />
                    </>
                })}
            </div>

            <Dialog
                sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
                maxWidth="xs"
                open={todo}
            >
                <DialogTitle>{todo ? `Хотите удалить заметку ${todo.text}?` : ''}</DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={() => setTodo(null)}>
                        Cancel
                    </Button>
                    <Button onClick={() => deleteOne(todo.id)}>Ok</Button>
                </DialogActions>
            </Dialog>
        </>

    )
}

export default TodoList