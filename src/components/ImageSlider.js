import React, {useState} from 'react';
import { SliderData } from './SliderData';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';


const ImageSlider = ({ slides }) => {

    const[current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        };
    
        const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        };
    
        if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
        }

    return (
    
    
        <section className="secondpage slider">
            <div className="border-animate">
                <GoArrowLeft className='left-arrow' onClick={prevSlide} />
            </div>
            <div className="border-animate right-animate">
                <GoArrowRight className='right-arrow' onClick={nextSlide} />
            </div>
            <div className="start-content">

            </div>
            <div className="mid-content">
                
                <h3>J'ai dessiné Ça :</h3>
                
                <div className="slide-container">
                    {SliderData.map((slide, index) => {
                        return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                            <img src={slide.image} alt='' className='image' />
                            )}
                        </div>
                        );
                    })}
                </div>
            </div>
            <div className="end-content">

            </div>
            
        </section>
    
    
    );
};

export default ImageSlider;