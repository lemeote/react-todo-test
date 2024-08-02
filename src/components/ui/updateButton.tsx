import React, {MouseEvent} from 'react';

import {UPDATE} from '@/constant';

interface UpdateButtonProps {
    onUpdateButtonClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const UpdateButton: React.FC<UpdateButtonProps> = ({onUpdateButtonClick}) => {
    return(
        <div className="flex justify-center items-center w-[62px] h-8 bg-green m-auto rounded-[10px] cursor-pointer" onClick={onUpdateButtonClick}>
            <span className='text-white'>{UPDATE}</span>
        </div>
    );
}

export default UpdateButton;