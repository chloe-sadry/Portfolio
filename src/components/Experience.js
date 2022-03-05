import React from 'react';

const Experience = (props) => {
    const {jobExp, tasksExp, dateExp} = props
    return (
        <>
        <div className='experience'>
            <h2>{jobExp}</h2>
            <p>{tasksExp}</p>
            <p>{dateExp}</p>
        </div>
        
        </>
    );
};

export default Experience;