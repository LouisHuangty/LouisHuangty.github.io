// -------------------- have evaluated the code quality by Eslink --------------------
// create dataset object
const chartData3 = 'csv/pie.csv';

/**
 * parse the file from CSV to JSON
 * @function logCSV
 * @param {Object} datapoints - every point related to data
 */
d3.csv(chartData3).then(function logCSV (datapoints) {
    console.log(datapoints);

    // creat a list for each column
    const exportValue = [];

    // add every element in each column to relative list
    for (let i = 0; i < datapoints.length; i++) {
        exportValue.push(datapoints[i].exportValue);
    }

    // log list
    console.log(exportValue);

    // the label of each pie in the graph
    const labels = [
        'Italy',
        'Germany',
        'Spain',
        'Netherlands',
        'France',
        'Belgium',
        'Poland',
        'Denmark',
        'Portugal',
        'Austria',
        'Romania',
        'Czech Republic',
        'Sweden',
        'Bulgaria',
        'Slovak Republic',
        'Greece',
        'Croatia',
        'Hungary',
        'Lithuania',
        'Slovenia',
        'Finland',
        'Latvia',
        'Ireland',
        'Estonia',
        'Luxembourg',
        'Malta',
        'Cyprus'
    ]; ;

    const data = {
        labels: labels,
        datasets: [{
            // link label to relative list
            label: 'value',
            data: exportValue,
            backgroundColor: [
                'rgb(0, 0, 0)',
                'rgb(32, 32, 32)',
                'rgb(64, 64, 64)',
                'rgb(96, 96, 96)',
                'rgb(128, 128, 128)',
                'rgb(160, 160, 160)',
                'rgb(192, 192, 192)',
                'rgb(224, 224, 224)'
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        // the type of the chart
        type: 'pie',

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
                    text: 'Value of clothing exports from the European Union in 2019, by country',
                    color: 'black',
                    font: {
                        size: 20
                    }
                },
                // the subtitile of the graph
                subtitle: {
                    display: true,
                    text: '(in million U.S. dollars)',
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
        document.getElementById('pieChart'),
        config
    );
});
