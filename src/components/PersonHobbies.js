import React from 'react';


const PersonHobbies = (props) => {
    const {hobby, secondhobby} = props
    return (
        <p className="hobbies-speech">
            Je suis inspirée par {hobby} <br /> <span>Mais aussi par {secondhobby},</span> ça se voit pas du tout n'est ce pas ?..
        </p>
    );
};

export default PersonHobbies;