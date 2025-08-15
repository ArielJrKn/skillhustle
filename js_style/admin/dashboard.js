// graphique 1
document.addEventListener('DOMContentLoaded', function() {
// Registrations Chart
		const registrationsChart = echarts.init(document.getElementById('registrations-chart'));
		const registrationsOption = {
			animation: false,
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(255, 255, 255, 0.9)',
				borderColor: '#e5e7eb',
				textStyle: { color: '#1f2937' },
				axisPointer: { type: 'shadow' }
			},
			grid: { top: 10, right: 10, bottom: 30, left: 40 },
			xAxis: {
				type: 'category',
				data: ['Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
				axisLine: { lineStyle: { color: '#e5e7eb' } },
				axisLabel: { color: '#1f2937' }
			},
			yAxis: {
				type: 'value',
				axisLine: { show: false },
				axisLabel: { color: '#1f2937' },
				splitLine: { lineStyle: { color: '#f1f5f9' } }
			},
			series: [{
				name: 'Nouvelles inscriptions',
				type: 'line',
				smooth: true,
				symbol: 'none',
				lineStyle: { width: 3, color: 'rgba(87, 181, 231, 1)' },
				areaStyle: {
					color: {
						type: 'linear',
						x: 0, y: 0, x2: 0, y2: 1,
						colorStops: [
							{ offset: 0, color: 'rgba(87, 181, 231, 0.2)' },
							{ offset: 1, color: 'rgba(87, 181, 231, 0.05)' }
						]
					}
				},
				data: [145, 182, 215, 287, 315, 368]
			}]
		};
		registrationsChart.setOption(registrationsOption);
// Monthly Revenue Chart
		const monthlyRevenueChart = echarts.init(document.getElementById('monthly-revenue-chart'));
		const monthlyRevenueOption = {
			animation: false,
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(255, 255, 255, 0.9)',
				borderColor: '#e5e7eb',
				textStyle: { color: '#1f2937' },
				axisPointer: { type: 'shadow' }
			},
			grid: { top: 10, right: 10, bottom: 30, left: 40 },
			xAxis: {
				type: 'category',
				data: ['Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
				axisLine: { lineStyle: { color: '#e5e7eb' } },
				axisLabel: { color: '#1f2937' }
			},
			yAxis: {
				type: 'value',
				axisLine: { show: false },
				axisLabel: { color: '#1f2937', formatter: '{value} €' },
				splitLine: { lineStyle: { color: '#f1f5f9' } }
			},
			series: [{
				name: 'Revenus mensuels',
				type: 'bar',
				barWidth: '60%',
				itemStyle: {
					color: 'rgba(141, 211, 199, 1)',
					borderRadius: [4, 4, 0, 0]
				},
				data: [38500, 40200, 42100, 44300, 46500, 48392]
			}]
		};
		monthlyRevenueChart.setOption(monthlyRevenueOption);
// Handle window resize
		window.addEventListener('resize', function() {
			registrationsChart.resize();
			monthlyRevenueChart.resize();
		});
	});

// graphique 2
document.addEventListener('DOMContentLoaded', function() {
		const chartOptions = {
			animation: false,
			grid: { top: 0, right: 0, bottom: 0, left: 0 },
			xAxis: { show: false, type: 'category', boundaryGap: false },
			yAxis: { show: false, type: 'value' },
			series: [{
				type: 'line',
				smooth: true,
				symbol: 'none',
				lineStyle: { width: 2 },
				areaStyle: {
					color: {
						type: 'linear',
						x: 0, y: 0, x2: 0, y2: 1,
						colorStops: [
							{ offset: 0, color: 'rgba(87, 181, 231, 0.2)' },
							{ offset: 1, color: 'rgba(87, 181, 231, 0.05)' }
						]
					}
				},
				data: []
			}]
		};
// Users Chart
		const usersChart = echarts.init(document.getElementById('users-chart'));
		const usersOptions = JSON.parse(JSON.stringify(chartOptions));
		usersOptions.series[0].data = [2450, 2560, 2610, 2680, 2750, 2845];
		usersOptions.series[0].itemStyle = { color: 'rgba(87, 181, 231, 1)' };
		usersChart.setOption(usersOptions);
// Courses Chart
		const coursesChart = echarts.init(document.getElementById('courses-chart'));
		const coursesOptions = JSON.parse(JSON.stringify(chartOptions));
		coursesOptions.series[0].data = [110, 115, 118, 121, 124, 127];
		coursesOptions.series[0].itemStyle = { color: 'rgba(141, 211, 199, 1)' };
		coursesChart.setOption(coursesOptions);
// Bugs Chart
		const bugsChart = echarts.init(document.getElementById('bugs-chart'));
		const bugsOptions = JSON.parse(JSON.stringify(chartOptions));
		bugsOptions.series[0].data = [15, 18, 16, 19, 21, 23];
		bugsOptions.series[0].itemStyle = { color: 'rgba(252, 141, 98, 1)' };
		bugsChart.setOption(bugsOptions);
// Revenue Chart
		const revenueChart = echarts.init(document.getElementById('revenue-chart'));
		const revenueOptions = JSON.parse(JSON.stringify(chartOptions));
		revenueOptions.series[0].data = [38500, 40200, 42100, 44300, 46500, 48392];
		revenueOptions.series[0].itemStyle = { color: 'rgba(251, 191, 114, 1)' };
		revenueChart.setOption(revenueOptions);
// Handle window resize
		window.addEventListener('resize', function() {
			usersChart.resize();
			coursesChart.resize();
			bugsChart.resize();
			revenueChart.resize();
		});
	});

// ajout d'une tâches
document.addEventListener('DOMContentLoaded', function(){
	    const addTask = document.getElementById('addTask');
        const addTaskForm = document.querySelector('.addTaskForm');
        const addTaskClose = document.querySelector('.addTaskClose');
        const taskForm = document.querySelector('.taskForm');

        addTask.addEventListener('click', function(){
            addTaskForm.classList.remove('hidden')
        })
        addTaskClose.addEventListener('click', function(){
            addTaskForm.classList.add('hidden');
        })

        taskForm.addEventListener('click', function(e){
            e.stopPropagation()
        })

        addTaskForm.addEventListener('click', function(e){
            // if (!addTaskForm.classList.contains('hidden') && !addTaskForm.contains(e.target) && !addTask.contains(e.target)) {
                addTaskForm.classList.add('hidden');
            // }
        });

})