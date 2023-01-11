// -------------------- have evaluated the code quality by Eslink --------------------
// create dataset object
const chartData2 = 'csv/bar.csv';

/**
 * parse the file from CSV to JSON
 * @function logCSV
 * @param {Object} datapoints - every point related to data
 */
d3.csv(chartData2).then(function logCSV (datapoints) {
    console.log(datapoints);
    // creat a list for each column
    const value2015 = [];
    const value2016 = [];
    const value2017 = [];
    const value2018 = [];

    // add every element in each column to relative list
    for (let i = 0; i < datapoints.length; i++) {
        value2015.push(datapoints[i].value2015);
        value2016.push(datapoints[i].value2016);
        value2017.push(datapoints[i].value2017);
        value2018.push(datapoints[i].value2018);
    }

    // log each list
    console.log(value2015);
    console.log(value2016);
    console.log(value2017);
    console.log(value2018);

    // the label of X coordinate of the graph
    const labels = [
        'China',
        'Bangladesh',
        'Turkey',
        'India',
        'Cambodia'
    ]; ;

    const data = {
        labels: labels,
        datasets: [
            {
                // link each label to relative list
                label: '2015',
                data: value2015,
                backgroundColor: [
                    'rgb(224,224,224)'
                ]
            },

            {
                // link each label to relative list
                label: '2016',
                data: value2016,
                backgroundColor: [
                    'rgb(128, 128, 128)'
                ]
            },

            {
                // link each label to relative list
                label: '2017',
                data: value2017,
                backgroundColor: [

                    'rgb(64,64,64)'
                ]
            },

            {
                // link each label to relative list
                label: '2018',
                data: value2018,
                backgroundColor: [
                    'rgb(0，0，0)'
                ]
            }
        ]
    };

    const config = {
        // the type of the chart
        type: 'bar',

        // link the data above to chart
        data: data,
        options: {
            // chart responsive
            responsive: true,
            // the button to show or hidden the certain bar
            plugins: {
                legend: {
                    position: 'top'
                },
                // the title of the graph
                title: {
                    display: true,
                    text: 'Main import partner for clothing in the EU',
                    color: 'black',
                    font: {
                        size: 20
                    }
                },
                // the subtitile of the graph
                subtitle: {
                    display: true,
                    text: '(in million euros)',
                    color: 'grey',
                    font: {
                      size: 12,
                      family: 'tahoma',
                      weight: 'normal',
                      style: 'italic'
                    }
                }
            }
        }
    };

    // === include 'setup' then 'config' above ===
    // link the chart to html
    const myChart = new Chart(
        document.getElementById('barChart'),
        config
    );
});
