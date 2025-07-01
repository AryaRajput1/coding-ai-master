import React from 'react';

const Loader: React.FC<{ label: string }> = ({ label }) => {
    return (<div className='flex items-center gap-2'>
        <span className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <span className='text-black'>{label}</span>
    </div>
    );
};

export default Loader;
