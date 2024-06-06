import React, {useState, useEffect} from "react"

function SlideShow({imagens, intervalo}){

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const slideIntervalo = setIntervalo(() => {
            setIndex(prevIndex => (prevIndex +1) % imagens.length);
        }, intervalo);
        return() => limparIntervalo(slideIntervalo);

    }, [imagens.length, intervalo]);

    return(
        <>
        <div className="slideshow">
            <img src={imagens[index]} alt={`Slide${index}`} />
        </div>
        </>
    )
}

export default SlideShow