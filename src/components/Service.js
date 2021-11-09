import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectService, loadDataSource } from '../actions';
import Store from '../Store';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import { useToggle } from "rooks";
import { Box } from '@material-ui/core';

function Service(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [open, setOpen] = useToggle(false);

    var selectHighLightColor = "bg-gray-400";
    const dispatch = useDispatch();

    const fetchDataSource = (serviceName) => {
        setOpen(true);
        var params = { serviceName: serviceName.toLowerCase() };
        axios.get('http://localhost:4000/getDataSources', { params }).then(response => {
            dispatch(loadDataSource(response.data));
            setOpen(false);
        }).catch(error => {
            setOpen(false);
            alert("Error loading Data Sources for " + serviceName + " service!");
        })
    }

    const onClickHandle = (event) => {
        //Remove highlight of previously selected service
        SelectedHighlightHandler(selectHighLightColor, props);
        fetchDataSource(props.name);
        dispatch(selectService({ name: props.name, API: props.API, logo: props.logo }));
    }

    const toggle = () => {
        setOpen(!open);
    }

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '5%',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div id={props.id} className="service-div transform hover:scale-110 hover:-translate-y-3 transition ease-in-out" >
            <div>
                <p>{props.name}</p>
                <br />
                <img src={props.logo} className="serv-img w-20 h-auto filter drop-shadow-lg" onClick={onClickHandle} />
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={null}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle} className='flex-col items-center	'>
                        <CircularProgress />
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

const unsubscribe = Store.subscribe(() => {
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