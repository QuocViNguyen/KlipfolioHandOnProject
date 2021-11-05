import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectService } from '../actions';
import Store from '../Store';

function Service(props) {
    const [searchTerm, setSearchTerm] = useState("");
    var selectHighLightColor = "bg-gray-400";
    const dispatch = useDispatch();


    const onClickHandle = (event) => {

        dispatch(selectService({name: props.name, API: props.API, logo: props.logo}));
        var serviceImg = document.getElementById(props.id).getElementsByTagName('img')[0];
        if (serviceImg.classList.contains(selectHighLightColor)){
            serviceImg.classList.remove(selectHighLightColor);
        }else{
            serviceImg.classList.add(selectHighLightColor);    
        }
    }

    return (
        <div id={props.id} className="service-div transform hover:scale-110 hover:-translate-y-3 transition ease-in-out" >
            <p>{props.name}</p>
            <br/>
            <img src={props.logo} className="w-20 h-auto filter drop-shadow-lg" onClick={onClickHandle}/>
        </div>
    );
}

const unsubscribe = Store.subscribe(()=> {
    console.log("ASDASD");
})

export default Service;
