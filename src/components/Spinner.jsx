import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin h-10 w-10 border-4 border-yellow-300 border-t-transparent rounded-full"></div>
        </div>
    );
};

export default Spinner;