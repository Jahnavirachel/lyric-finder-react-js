import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const Context = createContext()

function ContextAPI({children}) {
    let intialState = {
        songs_list: []
    }
    const [state, setState] = useState(intialState);

    useEffect(()=>{
         axios.get(`https://fast-dawn-89938.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=20&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setState({
                    songs_list: res.data.message.body.track_list
                })
            })
            .catch(error=> console.log(error));
    },[])
    return (
        <Context.Provider value={[state,setState]}>{children}</Context.Provider>
    );
}

export default ContextAPI;