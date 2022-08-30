import { useSelector } from 'react-redux';
import React, { useEffect, useMemo, useState } from 'react';

import { selectAllImages} from '../features/images/imageSlice';



const ImageContainer = () => {
    const[mainData,setMainData]=useState([])
    const images = useSelector(selectAllImages);
    
    

    useEffect(()=>{
        if(images.length>0){
            setMainData(images.slice(0,8))
        }
    },[images]);

    
    const content =useMemo(()=> {
        
       return mainData.map((img)=> 
<>
        <div className='col-3'>
            <div className="card" key={img.id} src={img.urls.thumb}>
                <img alt="rendered-images" className='searched-img' src={img.urls.thumb}/>
            </div>
            <br></br><br></br>
        </div>
        
        </>
        )}
       ,[mainData]);
    

        return (
            <>
            <div className='row mt-5'>
            {content}
            </div>
            {mainData.length === 8 && 
            <div className='row-main mt-5'>
            <button className='load-more' onClick={()=>{
                setMainData([...images])
            }}>
                Load More       
                </button></div>}
            {mainData.length === 10 && <h2>No More images</h2>}
        
        
        </>

        
       
    )
}

export default ImageContainer;