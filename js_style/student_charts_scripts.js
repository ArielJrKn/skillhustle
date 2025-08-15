
        document.addEventListener('DOMContentLoaded', function() {
            initializeCharts();
        });
        
        function initializeCharts() {
            const isDarkMode = document.body.classList.contains('dark-mode');
            const textColor = isDarkMode ? '#CCCCCC' : '#1f2937';
            const borderColor = isDarkMode ? '#333333' : '#e5e7eb';
            
            // Learning Statistics Chart
            const learningChart = echarts.init(document.getElementById('learningChart'));
            
            const learningOption = {
                animation: false,
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderColor: borderColor,
                    textStyle: {
                        color: '#1f2937'
                    }
                },
                legend: {
                    data: ['Study Hours', 'Quiz Scores', 'Assignments Completed'],
                    textStyle: {
                        color: textColor
                    },
                    bottom: 0
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '15%',
                    top: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    axisLine: {
                        lineStyle: {
                            color: borderColor
                        }
                    },
                    axisLabel: {
                        color: textColor
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: borderColor
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: borderColor,
                            opacity: 0.3
                        }
                    },
                    axisLabel: {
                        color: textColor
                    }
                },
                series: [
                    {
                        name: 'Study Hours',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            width: 3,
                            color: 'rgba(87, 181, 231, 1)'
                        },
                        symbol: 'none',
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(87, 181, 231, 0.2)'
                                }, {
                                    offset: 1, color: 'rgba(87, 181, 231, 0.01)'
                                }]
                            }
                        },
                        data: [32, 28, 36, 42]
                    },
                    {
                        name: 'Quiz Scores',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            width: 3,
                            color: 'rgba(141, 211, 199, 1)'
                        },
                        symbol: 'none',
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(141, 211, 199, 0.2)'
                                }, {
                                    offset: 1, color: 'rgba(141, 211, 199, 0.01)'
                                }]
                            }
                        },
                        data: [85, 90, 88, 95]
                    },
                    {
                        name: 'Assignments Completed',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            width: 3,
                            color: 'rgba(251, 191, 114, 1)'
                        },
                        symbol: 'none',
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(251, 191, 114, 0.2)'
                                }, {
                                    offset: 1, color: 'rgba(251, 191, 114, 0.01)'
                                }]
                            }
                        },
                        data: [3, 4, 3, 5]
                    }
                ]
            };
            
            learningChart.setOption(learningOption);
            
            // Handle window resize
            window.addEventListener('resize', function() {
                learningChart.resize();
            });
        }