import React from 'react';


const PersonHobbies = (props) => {
    const {hobbies, hobbiesTwo} = props
    return (
        <p className="hobbies-speech">
            Je suis inspirée par {hobbies} <br /> <span>Mais aussi par {hobbiesTwo},</span> ça se voit pas du tout n'est ce pas ?..
        </p>
    );
};

export default PersonHobbies;