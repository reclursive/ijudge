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

    const judgeNames = [
        "Robert P Coleman",
        "Scott DiClaudio",
        "Michael Erdos",
        "Rayford A Means",
        "Frank Palumbo"
    ]

    console.log(chartImageNames);
    return (
        <div>
            <div className="chart-container">
                <div className="chart-title">Judges by Gender</div>
                {chartImageNames.map((name, index) => {
                    return <div className="chart">
                            <p>{judgeNames[index]}</p>
                            <img src={`/assets/charts/${name}.png`} alt="Judges" />
                        </div>
                })}
            </div>
        </div>
    );
}