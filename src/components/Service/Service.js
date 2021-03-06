import { React } from 'react';
import { useDispatch } from 'react-redux';
import { selectService, loadDataSource } from '../../actions';
import Store from '../../Store';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { useToggle } from "rooks";
import { Box } from '@material-ui/core';

function Service(props) {
    const [open, setOpen] = useToggle(false);

    var selectHighLightColor = "bg-gray-400";
    const dispatch = useDispatch();

    const fetchDataSource = (serviceName) => {
        setOpen(true);
        var params = { serviceName: serviceName.toLowerCase() };

        axios.get('http://localhost:4000/getDataSources', { params }).then(response => {
            setTimeout(() => {
                setOpen(false);
                dispatch(loadDataSource(response.data));
              }, 1000);
        }).catch(error => {
            setOpen(false);
            alert("Error loading Data Sources for " + serviceName + " service!");
        })
    }

    const onClickHandle = (event) => {
        SelectedHighlightHandler(selectHighLightColor, props);
        fetchDataSource(props.name);
        dispatch(selectService({ name: props.name, API: props.API, logo: props.logo }));
    }

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        boxShadow: 24,
        p: 4,
      };

    return (
        <div id={props.id} className="service-div transform hover:scale-110 hover:-translate-y-3 transition ease-in-out" >
            <div>
                <p className='text-large font-medium'>{props.name}</p>
                <br />
                <img alt='service' src={props.logo} className="serv-img w-20 h-auto filter drop-shadow-lg" onClick={onClickHandle} />
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={null}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle} className='bg-transparent focus:outline-none'>
                        <iframe title="loading gif" src="https://giphy.com/embed/qvzuaIqxv4qrlyAfKo" width="250" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

Store.subscribe(() => {
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