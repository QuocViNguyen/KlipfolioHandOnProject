import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Service from './Service';
import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import ServiceList from './ServiceList';
import facebook from '../media/facebook.png';
import dropbox from '../media/dropbox.png';
import googledrive from '../media/googledrive.png';
import slack from '../media/slack.png';


function ServiceSection() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value);
    };

    return (
        <div className=''>
            <p className=''>Recommended services</p>
            <br/>
            <Grid container rowSpacing={0.3} columnSpacing={0.3}>
                <Grid item xs={12} md={12} className='text-center'>
                    <ServiceList
                        list={[
                            {name:"Facebook", API:"HAHAH", logo: facebook},
                            {name:"dropbox", API:"HAHAH", logo: dropbox},
                            {name:"googledrive", API:"HAHAH", logo: googledrive},
                            {name:"slack", API:"HAHAH", logo:slack},
                            {name:"Facebook", API:"HAHAH", logo: facebook},
                            {name:"dropbox", API:"HAHAH", logo: dropbox},
                            {name:"googledrive", API:"HAHAH", logo: googledrive},
                            {name:"slack", API:"HAHAH", logo:slack},
                            {name:"Facebook", API:"HAHAH", logo: facebook},
                            {name:"dropbox", API:"HAHAH", logo: dropbox},
                            {name:"googledrive", API:"HAHAH", logo: googledrive},
                            {name:"slack", API:"HAHAH", logo:slack},
                            {name:"Facebook", API:"HAHAH", logo: facebook},
                            {name:"dropbox", API:"HAHAH", logo: dropbox},
                            {name:"googledrive", API:"HAHAH", logo: googledrive},
                            {name:"slack", API:"HAHAH", logo:slack}
                        ]}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default ServiceSection;