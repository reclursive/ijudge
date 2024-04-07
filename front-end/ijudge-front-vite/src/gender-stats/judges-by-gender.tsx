import React from 'react';
// import './assets/charts/charts.css';


export const JudgesByGender = () => {

    // const chartImages = require.context('./assets/charts', true);
    // const chartImageNames = chartImages.keys().map((key) => key.split('/').pop());
    const chartImageNames = [
        "Coleman_Robert-P_Gender_plot",
        "DiClaudio_Scott_Gender_plot",
        "Erdos_Michael_Gender_plot",
        "Means_Rayford-A_Gender_plot",
        "Palumbo_Frank_Gender_plot"
    ]

    console.log(chartImageNames);
    return (
        <div>
            <div className="chart-container">
                <div className="chart-title">Judges by Gender</div>
                {chartImageNames.map((name) => {
                    return <div className="chart">
                            <img src={`../assets/charts/${name}.pdf`} alt="Judges" />
                        </div>
                })}
            </div>
        </div>
    );
}