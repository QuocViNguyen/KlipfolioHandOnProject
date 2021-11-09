import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectService, loadDataSource } from '../actions';
import Store from '../Store';
import axios from 'axios';

function Service(props) {
    const [searchTerm, setSearchTerm] = useState("");
    var selectHighLightColor = "bg-gray-400";
    const dispatch = useDispatch();

    const fetchDataSource=(serviceName)=>{
        var params = { serviceName: serviceName.toLowerCase() };
        axios.get('http://localhost:4000/getDataSources', {params}).then(response=>{
            dispatch(loadDataSource(response.data));
        })
    }

    const onClickHandle = (event) => {
        //Remove highlight of previously selected service
        SelectedHighlightHandler(selectHighLightColor, props);
        fetchDataSource(props.name);
        dispatch(selectService({name: props.name, API: props.API, logo: props.logo}));
    }

    return (
        <div id={props.id} className="service-div transform hover:scale-110 hover:-translate-y-3 transition ease-in-out" >
            <p>{props.name}</p>
            <br/>
            <img src={props.logo} className="serv-img w-20 h-auto filter drop-shadow-lg" onClick={onClickHandle}/>
        </div>
    );
}

const unsubscribe = Store.subscribe(()=> {
    // console.log("ASDASD");
})

export default Service;


function SelectedHighlightHandler(selectHighLightColor, props) {
    var allServices = Array.from(document.getElementsByClassName('serv-img'));
    allServices.forEach(element => {
        element.classList.remove(selectHighLightColor);
    });

    var serviceImg = document.getElementById(props.id).getElementsByTagName('img')[0];
    if (serviceImg.classList.contains(selectHighLightColor)) {
        serviceImg.classList.remove(selectHighLightColor);
    } else {
        serviceImg.classList.add(selectHighLightColor);
    }
}





