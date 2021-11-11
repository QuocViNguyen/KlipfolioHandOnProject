import React, { useState, useEffect } from 'react';
import Skeleton from "@mui/material/Skeleton";
import Store from '../../Store'; 
import Metric from './Metric';


function MetricList(props) {
    const [list, setList] = useState([]);

    const convertMetricData = (myDataSources) => {
        const temp = [];
        Object.assign(temp, []);
        myDataSources.forEach(myDataSource => {
            myDataSource.metrics.forEach(myMetric => {
                myDataSource.data['type'] = myMetric;
                myDataSource.data['title'] = myDataSource.title;
                temp[myMetric] = myDataSource.data;  
            })
        })
        setList(temp);
    }

    useEffect(() => {
    }, [list]);

    Store.subscribe(()=> {
        if (Object.keys(Store.getState().dataSource).length !== 0){
            convertMetricData(Store.getState().dataSource);
        }
    })

    return ( 
        <div className="flex space-x-8 px-auto mx-8">
            { 
                RenderMetricList(list,7)
            }
        </div>
     );
}

export default MetricList;

function RenderMetricList(list, size){
    var MetricList = [];

    for (var key in list) {
        MetricList.push(
            <Metric type={key} title={list[key]['title']} data={list[key]}/>
        );
    }

    for (let index = 0; index < size - (Object.keys(list).length); index++) {
        MetricList.push(
            <Skeleton variant="rectangular">
                <Metric />
            </Skeleton>
        );
    }
    return MetricList;
}