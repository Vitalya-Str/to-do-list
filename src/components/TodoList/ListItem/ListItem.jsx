import { Button, Checkbox, FormControlLabel } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../features/todos/todosSlice";


const ListItem = ({ handleChange, setTodo, item, style }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(item.text)

    const dispatch = useDispatch()

    const onSave = (id) => {
        dispatch(updateTodo({ id, text }))
        setIsEditing(false)
    }

    const isActiveChecked = item.checked ? style.todo_card_active : ''

    return (
        <div className={`${style.todo_card} ${isActiveChecked}`}>

            {isEditing ? (<input value={text} onChange={(e) => setText(e.target.value)} />) :

                (<FormControlLabel
                    control={<Checkbox
                        checked={item.checked}
                        onChange={() => handleChange(item.id)}
                    />}
                    label={<div className={style.lable_card}>
                        <span>{item.text}</span>
                        <span className={style.lable_card_date}>{item.date}</span>
                    </div>}
                />)}



            <div className={style.todo_card_item}>

                <Button onClick={isEditing ? () => onSave(item.id) : () => setIsEditing(true)}>
                    {isEditing ? 'Save' : <ModeEditIcon />}
                </Button>
                <Button onClick={() => setTodo(item)}>
                    <DeleteForeverIcon />
                </Button>

            </div>
        </div>
    )
}

export default ListItem