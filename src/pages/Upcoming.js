import React, { useState, useEffect } from 'react';
import Button from '../components/ui/Button';
import Movies from '../components/Movies/Movies';
import Hero from '../components/Hero/Hero';
import GetDataUpcoming from '../utils/networks/GetDataUpcaming';

const Upcoming = () => {

    const [movies, setMovies] = useState([])
    const [pages, setPages] = useState(1)

    const getData = async(number) => {
        const data = await GetDataUpcoming(number)
        await setMovies(data.results)
    }


    const handleNext = () => {
        const data = pages
        setPages(data+1)
    }

    const handleBefore = () => {
        if(pages > 1) {
            const data = pages
            setPages(data-1)
        } else {
            setPages(1)
        }
    }

    useEffect(
        function(){
            getData(pages)
        }, [pages]
    )

    return (
        <div>
            <Hero />
            <Movies item={movies} title={"Upcoming Movies"} />
            <Button onClick={handleBefore} variant="secondary">Kembali</Button>
            <Button onClick={handleNext} variant="primary">Selanjutnya</Button>
        </div>
    );
}

export default Upcoming;
