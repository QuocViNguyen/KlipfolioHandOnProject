import React, { useState } from 'react';
import Box from '@mui/material/Box';

function DataSource(props) {
    const [data, setData] = useState(false);

    return (
        <div className='w-60 h-24 bg-gray-50 transform hover:scale-110 hover:-translate-y-3 transition ease-in-out'>
            <p>{props.title}</p>
            <Box>

            </Box>
        </div>
    );
}

export default DataSource;