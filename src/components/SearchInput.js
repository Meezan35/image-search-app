import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { fetchImages} from '../features/images/imageSlice';
import './input.css';
export default function SearchInput (){

    const [photo,setPhoto] = useState('jack');



    const dispatch = useDispatch();

    const onSearchClick = ()=>{
        dispatch(fetchImages(photo))
    }
return (
    <div className='row-main'>
        <input type="text" placeholder="Search an image" onChange={(e)=>setPhoto(e.target.value)} />
        <div class="input-group-append">
        <button className='search-btn'onClick={onSearchClick} >
        <i class="fa fa-search" aria-hidden="true"></i>
        </button>
    </div>
          <div/>
    </div>
 
    )
}