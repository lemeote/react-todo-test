import React, {MouseEvent} from 'react';
import {REMOVE} from '@/constant'

interface DeleteButtonProps {
    onDeleteButtonClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({onDeleteButtonClick}) => {
    return(
        <div className="flex justify-center items-center w-[62px] h-8 bg-gray-400 m-auto rounded-[10px] cursor-pointer" onClick={onDeleteButtonClick}>
            <span className='text-white'>{REMOVE}</span>
        </div>
    );
}

export default DeleteButton;