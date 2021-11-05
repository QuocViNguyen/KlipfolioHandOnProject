import React, { useState, useEffect } from 'react';
import Service from './Service';



function ServiceList(props) {
    const [list, setList] = React.useState([]);

    useEffect(() => {
        console.log(props.list);
        setList(props.list);
    }, []);

    return ( 
        <div className="flex space-x-8">
            { 
                list.map((item, key) => {
                    return <Service name={item.name} API={item.API} logo={item.logo} id={"service-" + key}/>
                })
            }
        </div>
     );
}

export default ServiceList;