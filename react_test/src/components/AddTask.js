import { useState } from "react";


const AddTask = ( { onAdd }) => {
    const [text, setText] = useState('')
    const [content, SetContent] = useState('')
    const [value, setValue] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('cant be empty')
            return
        }
        onAdd({ text, content, value })
        setText('')
        SetContent('')
        setValue(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" 
            placeholder="Add Task" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            

        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type="text" placeholder="Content" value={content}
            onChange={(e) => SetContent(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Set value</label>
            <input type="checkbox" 
            checked={value}
            value={value}
            onChange={(e) => setValue(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block"/>
        
    </form>
  )
}

export default AddTask
