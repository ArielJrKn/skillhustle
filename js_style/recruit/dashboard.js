
			document.addEventListener('DOMContentLoaded', function() {
				const trafficChart = echarts.init(document.getElementById('trafficChart'));
				const option = {
					animation: false,
					grid: { top: 20, right: 20, bottom: 40, left: 40 },
					tooltip: {
						trigger: 'axis',
						backgroundColor: 'rgba(255, 255, 255, 0.9)',
						textStyle: { color: '#1f2937' }
					},
					legend: {
						data: ['Direct Applications', 'Job Boards', 'Social Media', 'Referrals'],
						textStyle: { color: '#9CA3AF' },
						top: 0
					},
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
						axisLine: { lineStyle: { color: '#374151' } },
						axisLabel: { color: '#9CA3AF' }
					},
					yAxis: {
						type: 'value',
						axisLine: { lineStyle: { color: '#374151' } },
						axisLabel: { color: '#9CA3AF' },
						splitLine: { lineStyle: { color: '#374151' } }
					},
					series: [
						{
							name: 'Direct Applications',
							type: 'line',
							smooth: true,
							symbol: 'none',
							data: [45, 52, 48, 61, 55, 67, 73],
							lineStyle: { color: 'rgba(87, 181, 231, 1)', width: 3 },
							areaStyle: { color: 'rgba(87, 181, 231, 0.1)' }
						},
						{
							name: 'Job Boards',
							type: 'line',
							smooth: true,
							symbol: 'none',
							data: [32, 38, 35, 42, 39, 45, 48],
							lineStyle: { color: 'rgba(141, 211, 199, 1)', width: 3 },
							areaStyle: { color: 'rgba(141, 211, 199, 0.1)' }
						},
						{
							name: 'Social Media',
							type: 'line',
							smooth: true,
							symbol: 'none',
							data: [18, 22, 25, 28, 24, 31, 35],
							lineStyle: { color: 'rgba(251, 191, 114, 1)', width: 3 },
							areaStyle: { color: 'rgba(251, 191, 114, 0.1)' }
						},
						{
							name: 'Referrals',
							type: 'line',
							smooth: true,
							symbol: 'none',
							data: [12, 15, 18, 16, 20, 23, 26],
							lineStyle: { color: 'rgba(252, 141, 98, 1)', width: 3 },
							areaStyle: { color: 'rgba(252, 141, 98, 0.1)' }
						}
					]
				};
				trafficChart.setOption(option);
			});



			document.addEventListener('DOMContentLoaded', function() {
				const pipelineChart = echarts.init(document.getElementById('pipelineChart'));
				const option = {
					animation: false,
					grid: { top: 20, right: 20, bottom: 40, left: 80 },
					tooltip: {
						trigger: 'axis',
						backgroundColor: 'rgba(255, 255, 255, 0.9)',
						textStyle: { color: '#1f2937' }
					},
					xAxis: {
						type: 'value',
						axisLine: { lineStyle: { color: '#374151' } },
						axisLabel: { color: '#9CA3AF' },
						splitLine: { lineStyle: { color: '#374151' } }
					},
					yAxis: {
						type: 'category',
						data: ['Hired', 'Final Interview', 'Technical Test', 'Phone Screen', 'Applied'],
						axisLine: { lineStyle: { color: '#374151' } },
						axisLabel: { color: '#9CA3AF' }
					},
					series: [{
						type: 'bar',
						data: [23, 45, 78, 125, 247],
						itemStyle: {
							color: function(params) {
								const colors = [
									'rgba(52, 199, 89, 1)',
									'rgba(87, 181, 231, 1)',
									'rgba(251, 191, 114, 1)',
									'rgba(141, 211, 199, 1)',
									'rgba(252, 141, 98, 1)'
								];
								return colors[params.dataIndex];
							},
							borderRadius: [0, 4, 4, 0]
						}
					}]
				};
				pipelineChart.setOption(option);
			});

			