import React from 'react';

const Experience = (props) => {
    const {jobName, tasksExp, dateExp} = props
    return (
        <>
        <div className='experience'>
            <h2>{jobName}</h2>
            <p>{tasksExp}</p>
            <p>{dateExp}</p>
        </div>
        
        </>
    );
};

export default Experience;