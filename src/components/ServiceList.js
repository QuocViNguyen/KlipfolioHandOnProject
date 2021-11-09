import React, { useState, useEffect } from 'react';
import Service from './Service';

function ServiceList(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(props.list);
    }, []);

    return ( 
        <div className="flex space-x-8 px-auto mx-12">
            { 
                list.map((item, key) => {
                    return <Service name={item.name} API={item.API} logo={item.logo} id={"service-" + key} list={list}/>
                })
            }
        </div>
     );
}

export default ServiceList;