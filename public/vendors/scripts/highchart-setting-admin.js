// chart 4 all data default

const dataChart = function () {
    $.get("/data/chart/manager", function (data) {
        var rejected1 = 0;
        var rejected2 = 0;
        var rejected3 = 0;
        var rejected4 = 0;
        var rejected5 = 0;
        var rejected6 = 0;
        var rejected7 = 0;
        var rejected8 = 0;
        var rejected9 = 0;
        var rejected10 = 0;
        var rejected11 = 0;
        var rejected12 = 0;
        var completed1 = 0;
        var completed2 = 0;
        var completed3 = 0;
        var completed4 = 0;
        var completed5 = 0;
        var completed6 = 0;
        var completed7 = 0;
        var completed8 = 0;
        var completed9 = 0;
        var completed10 = 0;
        var completed11 = 0;
        var completed12 = 0;
        var pending1 = 0;
        var pending2 = 0;
        var pending3 = 0;
        var pending4 = 0;
        var pending5 = 0;
        var pending6 = 0;
        var pending7 = 0;
        var pending8 = 0;
        var pending9 = 0;
        var pending10 = 0;
        var pending11 = 0;
        var pending12 = 0;
        var progress1 = 0;
        var progress2 = 0;
        var progress3 = 0;
        var progress4 = 0;
        var progress5 = 0;
        var progress6 = 0;
        var progress7 = 0;
        var progress8 = 0;
        var progress9 = 0;
        var progress10 = 0;
        var progress11 = 0;
        var progress12 = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i]["NumMonth"] == 1) {
                if (data[i]["STATUS_NAME"] === "Customer Rejected") {
                    rejected1++;
                } else if (data[i]["STATUS_NAME"] === "Completed") {
                    completed1++;
                } else if (data[i]["STATUS_NAME"] === "Pending") {
                    pending1++;
                } else if (data[i]["STATUS_NAME"] === "In Progress") {
                    progress1++;
                } else {
                    console.log("nothing");
                }
            } else if (data[i]["NumMonth"] == 2) {
                if (data[i]["STATUS_NAME"] === "Customer Rejected") {
                    rejected2++;
                } else if (data[i]["STATUS_NAME"] === "Completed") {
                    completed2++;
                } else if (data[i]["STATUS_NAME"] === "Pending") {
                    pending2++;
                } else if (data[i]["STATUS_NAME"] === "In Progress") {
                    progress2++;
                } else {
                    console.log("nothing");
                }
            } else if (data[i]["NumMonth"] == 3) {
                if (data[i]["STATUS_NAME"] === "Customer Rejected") {
                    rejected3++;
                } else if (data[i]["STATUS_NAME"] === "Completed") {
                    completed3++;
                } else if (data[i]["STATUS_NAME"] === "Pending") {
                    pending3++;
                } else if (data[i]["STATUS_NAME"] === "In Progress") {
                    progress3++;
                } else {
                    console.log("nothing");
                }
            } else if (data[i]["NumMonth"] == 4) {
                if (data[i]["STATUS_NAME"] === "Customer Rejected") {
                    rejected4++;
                } else if (data[i]["STATUS_NAME"] === "Completed") {
                    completed4++;
                } else if (data[i]["STATUS_NAME"] === "Pending") {
                    pending4++;
                } else if (data[i]["STATUS_NAME"] === "In Progress") {
                    progress4++;
                } else {
                    console.log("nothing");
                }
            } else if (data[i]["NumMonth"] == 5) {
                if (data[i]["STATUS_NAME"] === "Customer Rejected") {
                    rejected5++;
                } else if (data[i]["STATUS_NAME"] === "Completed") {
                    completed5++;
                } else if (data[i]["STATUS_NAME"] === "Pending") {
                    pending5++;
                } else if (data[i]["STATUS_NAME"] === "In Progress") {
                    progress5++;
                } else {
                    console.log("nothing");
                }
            } else if (data[i]["NumMonth"] == 6) {
                if (data[i]["STATUS_NAME"] === "Customer Rejected") {
                    rejected6++;
                } else if (data[i]["STATUS_NAME"] === "Completed") {
                    completed6++;
                } else if (data[i]["STATUS_NAME"] === "Pending") {
                    pending6++;
                } else if (data[i]["STATUS_NAME"] === "In Progress") {
                    progress6++;
                } else {
                    console.log("nothing");
                }
            } else if (data[i]["NumMonth"] == 7) {
                if (data[i]["STATUS_NAME"] === "Customer Rejected") {
                    rejected7++;
                } else if (data[i]["STATUS_NAME"] === "Completed") {
                    completed7++;
                } else if (data[i]["STATUS_NAME"] === "Pending") {
                    pending7++;
                } else if (data[i]["STATUS_NAME"] === "In Progress") {
                    progress7++;
                } else {
                    console.log("nothing");
                }
            } else if (data[i]["NumMonth"] == 8) {
                if (data[i]["STATUS_NAME"] === "Customer Rejected") {
                    rejected8++;
                } else if (data[i]["STATUS_NAME"] === "Completed") {
                    completed8++;
                } else if (data[i]["STATUS_NAME"] === "Pending") {
                    pending8++;
                } else if (data[i]["STATUS_NAME"] === "In Progress") {
                    progress8++;
                } else {
                    console.log("nothing");
                }
            } else if (data[i]["NumMonth"] == 9) {
                if (data[i]["STATUS_NAME"] === "Customer Rejected") {
                    rejected9++;
                } else if (data[i]["STATUS_NAME"] === "Completed") {
                    completed9++;
                } else if (data[i]["STATUS_NAME"] === "Pending") {
                    pending9++;
                } else if (data[i]["STATUS_NAME"] === "In Progress") {
                    progress9++;
                } else {
                    console.log("nothing");
                }
            } else if (data[i]["NumMonth"] == 10) {
                if (data[i]["STATUS_NAME"] === "Customer Rejected") {
                    rejected10++;
                } else if (data[i]["STATUS_NAME"] === "Completed") {
                    completed10++;
                } else if (data[i]["STATUS_NAME"] === "Pending") {
                    pending10++;
                } else if (data[i]["STATUS_NAME"] === "In Progress") {
                    progress10++;
                } else {
                    console.log("nothing");
                }
            } else if (data[i]["NumMonth"] == 11) {
                if (data[i]["STATUS_NAME"] === "Customer Rejected") {
                    rejected11++;
                } else if (data[i]["STATUS_NAME"] === "Completed") {
                    completed11++;
                } else if (data[i]["STATUS_NAME"] === "Pending") {
                    pending11++;
                } else if (data[i]["STATUS_NAME"] === "In Progress") {
                    progress11++;
                } else {
                    console.log("nothing");
                }
            } else if (data[i]["NumMonth"] == 12) {
                if (data[i]["STATUS_NAME"] === "Customer Rejected") {
                    rejected12++;
                } else if (data[i]["STATUS_NAME"] === "Completed") {
                    completed12++;
                } else if (data[i]["STATUS_NAME"] === "Pending") {
                    pending12++;
                } else if (data[i]["STATUS_NAME"] === "In Progress") {
                    progress12++;
                } else {
                    console.log("nothing");
                }
            } else {
                console.log("Nothing");
            }
        }
        Highcharts.chart("chart4", {
            chart: {
                type: "column",
            },
            renderTo: "chartBox",
            title: {
                text: "Monthly Lead Report",
            },
            xAxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Lead Report",
                },
            },
            tooltip: {
                headerFormat:
                    '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat:
                    '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: "</table>",
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Pending",
                    data: [
                        pending1,
                        pending2,
                        pending3,
                        pending4,
                        pending5,
                        pending6,
                        pending7,
                        pending8,
                        pending9,
                        pending10,
                        pending11,
                        pending12,
                    ],
                },

                {
                    name: "Customer Rejected",
                    data: [
                        rejected1,
                        rejected2,
                        rejected3,
                        rejected4,
                        rejected5,
                        rejected6,
                        rejected7,
                        rejected8,
                        rejected9,
                        rejected10,
                        rejected11,
                        rejected12,
                    ],
                },
                {
                    name: "Completed",
                    data: [
                        completed1,
                        completed2,
                        completed3,
                        completed4,
                        completed5,
                        completed6,
                        completed7,
                        completed8,
                        completed9,
                        completed10,
                        completed11,
                        completed12,
                    ],
                },
                {
                    name: "Progress",
                    data: [
                        progress1,
                        progress2,
                        progress3,
                        progress4,
                        progress5,
                        progress6,
                        progress7,
                        progress8,
                        progress9,
                        progress10,
                        progress11,
                        progress12,
                    ],
                },
            ],
        });
    });
};
dataChart();
// filter by month
const getMonth = document.getElementById("month-filter");
$("#month-filter").change(() => {
    if (getMonth.value != "null") {
        $.get(`/filter/${getMonth.value}/manager`, function (data) {
            var allMonth = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ];
            if (getMonth.value != "null") {
                allMonth = allMonth[parseInt(getMonth.value) - 1];
            }
            var rejected = 0;
            var completed = 0;
            var pending = 0;
            var progress = 0;
            for (var i = 0; i < data.length; i++) {
                if (data[i]["STATUS_NAME"] === "Customer Rejected") {
                    rejected++;
                } else if (data[i]["STATUS_NAME"] === "Completed") {
                    completed++;
                } else if (data[i]["STATUS_NAME"] === "Pending") {
                    pending++;
                } else if (data[i]["STATUS_NAME"] === "In Progress") {
                    progress++;
                } else {
                    console.log("nothing");
                }
            }
            Highcharts.chart("chart4", {
                chart: {
                    type: "column",
                },
                renderTo: "chartBox",
                title: {
                    text: "Monthly Lead Report",
                },

                xAxis: {
                    categories: [allMonth],
                    crosshair: true,
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: "Lead Report",
                    },
                },
                tooltip: {
                    headerFormat:
                        '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat:
                        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                    footerFormat: "</table>",
                    shared: true,
                    useHTML: true,
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0,
                    },
                },
                series: [
                    {
                        name: "Pending",
                        data: [pending],
                    },

                    {
                        name: "Customer Rejected",
                        data: [rejected],
                    },
                    {
                        name: "Completed",
                        data: [completed],
                    },
                    {
                        name: "Progress",
                        data: [progress],
                    },
                ],
            });
        });
    } else {
        dataChart();
    }
});
