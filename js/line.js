// -------------------- have evaluated the code quality by Eslink --------------------
// create dataset object
const chartData = 'csv/line.csv';

/**
 * parse the file from CSV to JSON
 * @function logCSV
 * @param {Object} datapoints - every point related to data
 */
d3.csv(chartData).then(function logCSV (datapoints) {
    console.log(datapoints);

    // creat a list for each column
    const exportValue = [];
    const importValue = [];

    // add every element in each column to relative list
    for (let i = 0; i < datapoints.length; i++) {
        exportValue.push(datapoints[i].exportValue);
        importValue.push(datapoints[i].importValue);
    }

    // log each list
    console.log(exportValue);
    console.log(importValue);

    // the label of X coordinate of the graph
    const labels = [
        '2000',
        '2001',
        '2002',
        '2003',
        '2004',
        '2005',
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019'
    ]; ;

    const data = {
        labels: labels,
        datasets: [
            {
                // link each label to relative list
                label: 'export',
                data: exportValue,
                backgroundColor: [
                    'rgb(192,192,192)'
                ],
                borderColor: [
                    'rgb(192,192,192)'
                ]
            },

            {
                // link each label to relative list
                label: 'import',
                data: importValue,
                backgroundColor: [
                    'rgb(0，0，0)'
                ],
                borderColor: [
                    'rgb(0，0，0)'
                ]
            }
        ]
    };

    const config = {
        // the type of the chart
        type: 'line',

        // link the data above to chart
        data: data,
        options: {
            // chart responsive
            responsive: true,

            // the button to show or hidden the certain line
            plugins: {
                legend: {
                    position: 'top'
                },

                // the title of the graph
                title: {
                    display: true,
                    text: 'European Union: clothing export and import value 2000-2019',
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
        document.getElementById('lineChart'),
        config
    );
});
