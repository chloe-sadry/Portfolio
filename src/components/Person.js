import React from 'react';


const Person = (props) => {
    const {firstname, lastname} = props
    return (
        <>
            
        <div className='person'>
            <div className="hi-bubble-wrap">
                <div className="speech-text">
                    <p className="typing-demo first-speech">
                        Salut !
                    </p>
                    
                    <span className="bubble-hangdown-1"></span>
                    <span className="bubble-hangdown-2"></span>
                </div>
            </div>

            <div className="bubble-wrap">
                <div className="speech-text">
                    <p className="typing-demo second-speech">
                        Je suis
                    </p>

                    <span className="person-name">{firstname} {lastname}</span>
                    <span className="bubble-hangdown-1"></span>
                    <span className="bubble-hangdown-2"></span>
                </div>
            </div>
            
        </div>
        
        </>
    );
};

export default Person;