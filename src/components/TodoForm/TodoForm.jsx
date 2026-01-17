import { ButtonComponent } from "../shared/Button/ButtonComponent"
import { Field } from "../shared/Field/Field"
import s from './TodoForm.module.css'

const TodoForm = () => {

    return (
        <div >
            <div className={s.todoForm_element_item}>
                <Field
                    label='input to do'
                    size='small'
                    fullWidth
                />
                <ButtonComponent
                    variant="contained"
                    size='medium'
                    sx={{ marginLeft: 2 }}> Add </ButtonComponent>
            </div>
            <Field
                label='Search Task'
                size='small'
                sx={{ marginTop: 2 }}
                fullWidth
            />
            <ButtonComponent
                variant="contained"
                size='medium'
                sx={{ marginTop: 2 }}
                fullWidth > Delete all </ButtonComponent>
        </div>
    )
}

export default TodoForm