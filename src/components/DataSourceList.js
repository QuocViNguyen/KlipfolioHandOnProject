import React, { useState, useEffect } from 'react';
import DataSource from './DataSource';
import Skeleton from "@mui/material/Skeleton";
import Store from '../Store';


function DataSourceList(props) {
    const [list, setList] = React.useState(Array.from(Array(props.size).fill(0)));

    useEffect(() => {
        console.log(list);
    }, [list]);


    const unsubscribe = Store.subscribe(()=> {
        setList(Store.getState().dataSource);
        // console.log(Store.getState().dataSource);
    })

    return ( 
        <div className="flex space-x-8 px-auto mx-12">
            { 
                list[0] ? 
                (
                    RenderDataSourceList(list,7)
                ):
                (   
                    CreateSkeletonList(7)
                )
            }
        </div>
     );
}

export default DataSourceList;


function CreateSkeletonList(size){
    var SkeletonList = [];

    for (let index = 0; index < size; index++) {
        SkeletonList.push(
            <Skeleton variant="rectangular">
                <DataSource />
            </Skeleton>
        );
    }
    return SkeletonList;
}

function RenderDataSourceList(list, size){
    var SourceList = [];

    for (let index = 0; index < list.length; index++) {
        SourceList.push(
            <DataSource title = {list[index].title}/>
        );
    }

    for (let index = 0; index < (size - list.length); index++) {
        SourceList.push(
            <Skeleton variant="rectangular">
                <DataSource />
            </Skeleton>
        );
    }

    return SourceList;
}