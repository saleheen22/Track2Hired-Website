
import React, { useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


import 'highcharts/highcharts-3d';

import { JobsContext } from '../../provider/JobsProvider'; 
import Loader from '../Common/Loader'; 





const JobDashboard = () => {
    const { jobs, isLoading } = useContext(JobsContext);

    if (isLoading) {
        return <Loader message="Loading dashboard data..." />;
    }

    // --- Prepare Data for the Chart ---
    const totalJobs = jobs.length;
    const appliedCount = jobs.filter(job => job.applied).length;
    const interviewCount = jobs.filter(job => job.interview).length;
    const offerCount = jobs.filter(job => job.offer).length;
    // You might want a "Tracked Only" count if applicable
    // const trackedOnlyCount = totalJobs - appliedCount; // Simplistic example

    const categories = ['Applied', 'Interview', 'Offer'];
    const chartData = [
        { y: appliedCount, color: '#3B82F6' }, // Blue
        { y: interviewCount, color: '#F59E0B' }, // Amber
        { y: offerCount, color: '#10B981' }  // Emerald
    ];

    const options: Highcharts.Options = {
        chart: {
            type: 'column', // Changed from 'pie' to 'column'
            options3d: {
                enabled: true,
                alpha: 0,  // Adjusted angle for column view
                beta: 0,   // Adjusted angle for column view
                depth: 50,  // Depth of the columns
                viewDistance: 25
            }
        },
        title: {
            text: 'Job Application Stages'
        },
        xAxis: { // Added xAxis for categories
            categories: categories,
            labels: {
                skew3d: true,
                style: {
                    fontSize: '16px'
                }
            }
        },
        yAxis: { // Added yAxis for values
            allowDecimals: false, // No decimal counts for jobs
            min: 0,
            title: {
                text: 'Number of Jobs',
                skew3d: true
            }
        },
        tooltip: { // Adjusted tooltip format
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: {point.y}'
        },
        plotOptions: {
            column: {
                depth: 40,
                stacking: undefined,
               
                dataLabels: {
                    enabled: true, // Show data labels
                    format: '{point.y}', // Display the y-value (the count)
                    style: {
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#333' // Adjust color as needed
                    },
                    // Optional: Adjust position if needed, e.g., inside bars
                    // inside: true,
                    // verticalAlign: 'top',
                    // y: -10 // Adjust vertical offset
                }
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            type: 'column', // Ensure series type is column
            name: 'Job Search Stages',
            data: chartData,
            colorByPoint: true // Use colors defined in chartData
        }]
    };


    return (
        <div className="p-4 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Job Application Analytics</h1>
            <p className="text-lg md:text-xl text-center">Total number of jobs Tracked: {totalJobs}</p>
            {jobs.length > 0 ? (
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
            ) : (
                <p className="text-center text-gray-600 mt-10">No job data available to display analytics.</p>
            )}
        </div>
    );
};

export default JobDashboard;