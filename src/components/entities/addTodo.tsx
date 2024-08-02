import { useState } from 'react';

import { TODO_CONTENT, TODO_TITLE } from '@/constant'
import AddButton from '../ui/addButton';
import { Todo } from '@/types';

interface AddTodoProps {
    onAddButtonClick: (newTodo: Todo) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddButtonClick }) => {
    const [todo_title, setTodoTitle] = useState<string>('');
    const [todo_content, setTodoContent] = useState<string>('');

    const handleAddButtonClick = () => {
        if (todo_title.trim() !== '') {
            const newTodo = { title: todo_title, content: todo_content, status: false };
            onAddButtonClick(newTodo);
            setTodoTitle('');
            setTodoContent('');
        }
    };

    return (
        <div className='flex flex-col gap-[26px] m-auto'>
            <input type="text" className='w-[296px] border border-black p-1' id="todo_title" placeholder={TODO_TITLE} value={todo_title}
                onChange={(e) => setTodoTitle(e.target.value)} />
            <div>
                <textarea className="w-[296px] h-[113px] border border-black p-1" id='todo_content' placeholder={TODO_CONTENT} value={todo_content}
                    onChange={(e) => setTodoContent(e.target.value)}></textarea>
                <AddButton onAddButtonClick={handleAddButtonClick} />
            </div>
        </div>
    );
}

export default AddTodo;