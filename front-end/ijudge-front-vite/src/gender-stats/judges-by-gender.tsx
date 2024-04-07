import React from 'react';
import './static.css';

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
                {/* {chartImageNames.map((name, index) => { */}
                    return <div className="chart">
                            <p>Robert P Coleman</p>
                            <img src={`./assets/charts/Coleman_Robert-P_Gender_plot.png`}  />
                            <p>Scott DiClaudio</p>
                            <img src={`./assets/charts/DiClaudio_Scott_Gender_plot.png`}  />
                            <p>Michael Erdos</p>
                            <img src={`./assets/charts/Erdos_Michael_Gender_plot.png`}  />
                            <p>Rayford A Means"</p>
                            <img src={`./assets/charts/Means_Rayford-A_Gender_plot.png`} />
                            <p>Frank Palumbo</p>
                            <img src={`./assets/charts/Palumbo_Frank_Gender_plot.png`}  />

                        </div>
                {/* })} */}
            </div>
        </div>
    );
}