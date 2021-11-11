import React, { useState, useEffect } from 'react';
import DataSource from './DataSource.js';
import Skeleton from "@mui/material/Skeleton";
import Store from '../../Store';


function DataSourceList(props) {
    const [list, setList] = useState(Array.from(Array(props.size).fill(0)));

    useEffect(() => {
    }, [list]);

    Store.subscribe(()=> {
        setList(Store.getState().dataSource);
    })

    return ( 
        <div className="flex space-x-8 px-auto mx-8">
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
            <div>
                <Skeleton variant="rectangular">
                    <DataSource />
                </Skeleton>
            </div>

        );
    }
    return SourceList;
}