import React from 'react';
// import './assets/charts/charts.css';


export const JudgesByRace = () => {

    // const chartImages = require.context('./assets/charts', true);
    // const chartImageNames = chartImages.keys().map((key) => key.split('/').pop());
    const chartImageNames = [
        "Coleman_Robert-P_Race_plot",
        "DiClaudio_Scott_Race_plot",
        "Erdos_Michael_Race_plot",
        "Means_Rayford-A_Race_plot",
        "Palumbo_Frank_Race_plot"
    ]

    

    console.log(chartImageNames);
    return (
        <div>
            <div className="chart-container">
                <div className="chart-title">Judges by Race</div>
                {chartImageNames.map((name) => {
                    return <div className="chart">
                            <img src={`../assets/charts/${name}.pdf`} alt="Judges" />
                        </div>
                })}
            </div>
        </div>
    );
}