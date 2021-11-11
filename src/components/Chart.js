import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { bgColors, borderColors } from '../Colors';

const Chart = (props) => {
    var myLabels = [];
    var myDatas = [];
    var type = props.type;

    props.data.forEach(element => {
        myLabels.push(element.date);
        myDatas.push(element.access);
    });

    function RenderChart(type) {
        switch (type) {
            case 'bar':
                return (
                    <div>
                        <Bar
                            data={{
                                labels: myLabels,
                                datasets: [
                                    {
                                        label: props.title,
                                        data: myDatas,
                                        backgroundColor: bgColors,
                                        borderColor: borderColors,
                                        borderWidth: 2,
                                    },
                                ],
                            }}
                            height={400}
                            width={600}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes: [
                                        {
                                            ticks: {
                                                beginAtZero: true,
                                            },
                                        },
                                    ],
                                },
                                legend: {
                                    labels: {
                                        fontSize: 25,
                                    },
                                },
                            }} />
                    </div>
                );
            case 'line':
                return (
                    <div>
                        <Line
                            data={{
                                labels: myLabels,
                                datasets: [
                                    {
                                        label: props.title,
                                        data: myDatas,
                                        backgroundColor: bgColors,
                                        borderColor: borderColors,
                                        borderWidth: 2,
                                    },
                                ],
                            }}
                            height={400}
                            width={600}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes: [
                                        {
                                            ticks: {
                                                beginAtZero: true,
                                            },
                                        },
                                    ],
                                },
                                legend: {
                                    labels: {
                                        fontSize: 25,
                                    },
                                },
                            }} />
                    </div>
                );
            case 'pie':
                return (
                    <div>
                        <Pie
                            data={{
                                labels: myLabels,
                                datasets: [
                                    {
                                        label: props.title,
                                        data: myDatas,
                                        backgroundColor: bgColors,
                                        borderColor: borderColors,
                                        borderWidth: 2,
                                    },
                                ],
                            }}
                            height={400}
                            width={600}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes: [
                                        {
                                            ticks: {
                                                beginAtZero: true,
                                            },
                                        },
                                    ],
                                },
                                legend: {
                                    labels: {
                                        fontSize: 25,
                                    },
                                },
                            }} />
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <div>
            {RenderChart(type)}
        </div>
    )
}

export default Chart