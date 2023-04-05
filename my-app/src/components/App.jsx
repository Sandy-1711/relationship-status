import React from 'react';
import Heart from './Heart';
function App() {

    function daysBetween(date1, date2) {
        const oneDay = 1000 * 60 * 60 * 24;
        const date1Time = date1.getTime();
        const date2Time = date2.getTime();
        const timeDifference = Math.abs(date2Time - date1Time);
        return Math.round(timeDifference / oneDay);
    }
    var difference = daysBetween(new Date(), new Date(2022, 10, 29));

    var months = Math.round(difference / 31);
    var days = difference % 30;

    
    return <div>
        <h1>💜{months + " months "}💜</h1>
        <h1>💜{days + "days "}💜</h1>
        <p>I love you my little baby</p>
    </div>
}
export default App;