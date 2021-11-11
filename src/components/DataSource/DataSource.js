import { React } from 'react';
import Box from '@mui/material/Box';
import data from '../../media/data.png';

function DataSource(props) {
    return (
        <div className='w-60 h-24 bg-gray-50 transform hover:scale-110 hover:-translate-y-3 transition ease-in-out'>
            <Box className='h-12 text-sm md:text-lg font-medium'>
                {props.title}
            </Box>
            <Box className='absolute bottom-0'>
                <img alt='data' src={data} className="object-bottom"/>
            </Box>
        </div>
    );
}

export default DataSource;