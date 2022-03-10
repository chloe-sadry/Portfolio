import React, {useEffect, useState} from 'react'
import Person from './Person';
import PersonHobbies from './PersonHobbies';




function FirstPage() {
const [allpeople, setAllPeople] = useState();

useEffect(() => {

    fetch('http://localhost:1337/person')
    .then(res => res.json())
    .then(response => setAllPeople(response))

  },[])

return(
<>
    <section className="firstpage">
        <div className="start-content">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="mid-content">
            {allpeople?
                <section>
                    {allpeople.map((item) => (
                        <Person
                        key={item.id}
                        firstname={item.firstname}
                        lastname={item.lastname}
                        hobby={item.hobby}
                        secondhobby={item.secondhobby}
                        />
                    ))}
                </section>
                :
                <h4>Chargement</h4>
                }
            
            <div className="description-content">
                <div className="speech-text-description">
                    <p className="first-text-description">
                        Je dessine et développe
                    </p>
                    <p className="second-speech-description">Mon truc <span>c’est les nouvelles technologies,</span> surtout les machines dans ce style là </p>
                    {allpeople?
                        <div>
                            {allpeople.map((item) => (
                                <PersonHobbies
                                key={item.id}
                                hobby={item.hobby}
                                secondhobby={item.secondhobby}
                                />
                            ))}
                        </div>
                        :
                        <h4>Chargement</h4>
                        }
                    <p className="third-speech-description">J’aime voyager (comme beaucoup de personne ?..), future destination désirée:</p>
                </div>
            </div>
        </div>
        <div className="end-content">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </section>
</>
)
        }

export default FirstPage