
        document.addEventListener('DOMContentLoaded', function() {
            const chartDom = document.getElementById('statsChart');
            const myChart = echarts.init(chartDom);
            
            const option = {
                animation: false,
                grid: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                xAxis: {
                    type: 'category',
                    data: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
                    show: false
                },
                yAxis: {
                    type: 'value',
                    show: false
                },
                series: [{
                    data: [8, 12, 6, 15, 9, 4, 7],
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        color: 'rgba(87, 181, 231, 1)',
                        width: 2
                    },
                    itemStyle: {
                        color: 'rgba(87, 181, 231, 1)'
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(87, 181, 231, 0.2)'
                            }, {
                                offset: 1,
                                color: 'rgba(87, 181, 231, 0.05)'
                            }]
                        }
                    },
                    showSymbol: false
                }],
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    textStyle: {
                        color: '#1f2937'
                    }
                }
            };
            
            myChart.setOption(option);
        });