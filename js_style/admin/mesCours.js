
        document.addEventListener('DOMContentLoaded', function () {
            // Enrollments Chart
            const enrollmentsChart = echarts.init(document.getElementById('enrollments-chart'));
            const enrollmentsOption = {
                animation: false,
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: '#e5e7eb',
                    textStyle: {
                        color: 'gray'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
                    axisLine: {
                        lineStyle: {
                            color: 'gray'
                        }
                    },
                    axisLabel: {
                        color: 'gray'
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: 'gray'
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#f3f4f6'
                        }
                    }
                },
                series: [
                    {
                        name: 'Inscriptions',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            width: 3,
                            color: 'rgba(87, 181, 231, 1)'
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(87, 181, 231, 0.2)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(87, 181, 231, 0.0)'
                                }
                            ])
                        },
                        data: [420, 532, 601, 684, 790, 842, 910, 984, 1052, 1120, 1184, 1250]
                    }
                ]
            };
            enrollmentsChart.setOption(enrollmentsOption);

            // Categories Chart
            const categoriesChart = echarts.init(document.getElementById('categories-chart'));
            const categoriesOption = {
                animation: false,
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: '#e5e7eb',
                    textStyle: {
                        color: '#1f2937'
                    }
                },
                legend: {
                    orient: 'vertical',
                    right: 10,
                    top: 'center',
                    textStyle: {
                        color: 'gray'
                    }
                },
                series: [
                    {
                        name: 'Catégories',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 8,
                            borderColor: '#fff',
                        },
                        label: {
                            show: false
                        },
                        emphasis: {
                            label: {
                                show: false
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        color: [
                            'rgba(87, 181, 231, 1)',
                            'rgba(141, 211, 199, 1)',
                            'rgba(251, 191, 114, 1)',
                            'rgba(252, 141, 98, 1)',
                        ],
                        data: [
                            { value: 68, name: 'Développement' },
                            { value: 42, name: 'Design' },
                            { value: 53, name: 'Business' },
                            { value: 84, name: 'Marketing' }
                        ]
                    }
                ]
            };
            categoriesChart.setOption(categoriesOption);

            // Resize charts when window size changes
            window.addEventListener('resize', function () {
                enrollmentsChart.resize();
                categoriesChart.resize();
            });
        });




        document.addEventListener('DOMContentLoaded', function () {
            const selectAllCheckbox = document.getElementById('select-all');
            const rowCheckboxes = document.querySelectorAll('.select-row');

            if (selectAllCheckbox) {
                selectAllCheckbox.addEventListener('change', function () {
                    const isChecked = this.checked;
                    rowCheckboxes.forEach(checkbox => {
                        checkbox.checked = isChecked;
                    });
                });
            }

            rowCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function () {
                    const allChecked = Array.from(rowCheckboxes).every(cb => cb.checked);
                    const someChecked = Array.from(rowCheckboxes).some(cb => cb.checked);

                    if (selectAllCheckbox) {
                        selectAllCheckbox.checked = allChecked;
                        selectAllCheckbox.indeterminate = someChecked && !allChecked;
                    }
                });
            });
        });