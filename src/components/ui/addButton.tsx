import React, { MouseEvent } from 'react';

import { ADD } from '@/constant';

interface AddButtonProps {
    onAddButtonClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onAddButtonClick }) => {
    return (
        <div
            className="flex justify-center items-center w-[280px] h-10 rounded-[10px] bg-green m-auto cursor-pointer"
            onClick={onAddButtonClick}
        >
            <span className='font-normal text-white leading-[22px]'>{ADD}</span>
        </div>
    );
};

export default AddButton;