import { React } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useToggle } from "rooks";
import BarChart from '../Chart';
import Backdrop from '@mui/material/Backdrop';

function Metric(props) {
    const [open, setOpen] = useToggle();

    const toggle = () => {
        setOpen(!open);
    }

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        boxShadow: 24,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        p: 4,
    };

    return (
        <div className='w-60 h-36 bg-gray-50 transform hover:scale-110 hover:-translate-y-3 transition ease-in-out' onClick={toggle}>
            <Box className='text-large font-medium'>
            {props.title}
            </Box>

            <div>
                <Modal
                    open={open}
                    onClose={0}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Box sx={modalStyle} className='bg-transparent focus:outline-none'>
                        <BarChart data={props.data} title={props.title} type={props.type}/>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

export default Metric;