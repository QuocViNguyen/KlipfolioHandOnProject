import React, { useState } from 'react';
import Box from '@mui/material/Box';

function Metric(props) {
    const [data, setData] = useState(false);

    return (
        <div className='w-60 h-36 bg-gray-50 transform hover:scale-110 hover:-translate-y-3 transition ease-in-out'>
            <Box >
            {props.title}
            </Box>
        </div>
    );
}

export default Metric;