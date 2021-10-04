import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const LivePreview = () => {

        // getting the parameters form the path with useParams() 

    const {liveId} = useParams()

        // storing the id in sepaerate verraible 

    const id = liveId;

            // using state for live preview 

    const [datas, setDatas] = useState([])

    useEffect(()=>{
        fetch('/teachers.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])


    return (

            // this section will be added dynamically in the site 

        <div className="text-center py-5">
            <h2>{datas[id]?.course_name}</h2>
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7roE88D2FQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
};

export default LivePreview;