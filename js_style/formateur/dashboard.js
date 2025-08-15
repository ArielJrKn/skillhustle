			document.addEventListener('DOMContentLoaded', function() {
				const userMenuButton = document.getElementById('userMenuButton');
				const userMenu = document.getElementById('userMenu');
				if (userMenuButton && userMenu) {
					userMenuButton.addEventListener('click', function() {
						userMenu.classList.toggle('hidden');
					});
					document.addEventListener('click', function(event) {
						if (!userMenuButton.contains(event.target) && !userMenu.contains(event.target)) {
							userMenu.classList.add('hidden');
						}
					});
				}
			});



			document.addEventListener('DOMContentLoaded', function() {
				const mobileMenuButton = document.getElementById('mobileMenuButton');
				const closeMobileMenu = document.getElementById('closeMobileMenu');
				const mobileSidebar = document.getElementById('mobileSidebar');
				const mobileSidebarBackdrop = document.getElementById('mobileSidebarBackdrop');
				if (mobileMenuButton && closeMobileMenu && mobileSidebar && mobileSidebarBackdrop) {
					mobileMenuButton.addEventListener('click', function() {
						mobileSidebar.classList.remove('-translate-x-full');
						mobileSidebarBackdrop.classList.remove('hidden');
					});
					closeMobileMenu.addEventListener('click', function() {
						mobileSidebar.classList.add('-translate-x-full');
						mobileSidebarBackdrop.classList.add('hidden');
					});
					mobileSidebarBackdrop.addEventListener('click', function() {
						mobileSidebar.classList.add('-translate-x-full');
						mobileSidebarBackdrop.classList.add('hidden');
					});
				}
			});



			document.addEventListener('DOMContentLoaded', function() {
	// Activity Chart
				const activityChart = echarts.init(document.getElementById('activityChart'));
				const activityOption = {
					animation: false,
					tooltip: {
						trigger: 'axis',
						backgroundColor: 'rgba(255, 255, 255, 0.8)',
						textStyle: {
							color: '#1f2937'
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
						data: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
						axisLine: {
							lineStyle: {
								color: '#4B5563'
							}
						},
						axisLabel: {
							color: '#9CA3AF'
						}
					},
					yAxis: {
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#4B5563'
							}
						},
						splitLine: {
							lineStyle: {
								color: 'rgba(75, 85, 99, 0.2)'
							}
						},
						axisLabel: {
							color: '#9CA3AF'
						}
					},
					series: [
						{
							name: 'Visites',
							type: 'line',
							smooth: true,
							lineStyle: {
								width: 3,
								color: 'rgba(87, 181, 231, 1)'
							},
							symbol: 'none',
							areaStyle: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
									{
										offset: 0,
										color: 'rgba(87, 181, 231, 0.2)'
									},
									{
										offset: 1,
										color: 'rgba(87, 181, 231, 0.05)'
									}
								])
							},
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: 'Inscriptions',
							type: 'line',
							smooth: true,
							lineStyle: {
								width: 3,
								color: 'rgba(141, 211, 199, 1)'
							},
							symbol: 'none',
							areaStyle: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
									{
										offset: 0,
										color: 'rgba(141, 211, 199, 0.2)'
									},
									{
										offset: 1,
										color: 'rgba(141, 211, 199, 0.05)'
									}
								])
							},
							data: [45, 62, 53, 80, 40, 76, 65]
						}
					]
				};
				activityChart.setOption(activityOption);
	// Completion Chart
				const completionChart = echarts.init(document.getElementById('completionChart'));
				const completionOption = {
					animation: false,
					tooltip: {
						trigger: 'item',
						backgroundColor: 'rgba(255, 255, 255, 0.8)',
						textStyle: {
							color: '#1f2937'
						}
					},
					series: [
						{
							name: 'Taux de complétion',
							type: 'pie',
							radius: ['50%', '70%'],
							avoidLabelOverlap: false,
							itemStyle: {
								borderRadius: 8,
								borderColor: '#2D2D2D',
								borderWidth: 2
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
							data: [
								{ value: 65, name: 'Terminé', itemStyle: { color: 'rgba(87, 181, 231, 1)' } },
								{ value: 20, name: 'En cours', itemStyle: { color: 'rgba(141, 211, 199, 1)' } },
								{ value: 15, name: 'Non commencé', itemStyle: { color: 'rgba(251, 191, 114, 1)' } }
							]
						}
					]
				};
				completionChart.setOption(completionOption);
	// Ratings Chart
				const ratingsChart = echarts.init(document.getElementById('ratingsChart'));
				const ratingsOption = {
					animation: false,
					tooltip: {
						trigger: 'axis',
						backgroundColor: 'rgba(255, 255, 255, 0.8)',
						textStyle: {
							color: '#1f2937'
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
						data: ['1★', '2★', '3★', '4★', '5★'],
						axisLine: {
							lineStyle: {
								color: '#4B5563'
							}
						},
						axisLabel: {
							color: '#9CA3AF'
						}
					},
					yAxis: {
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#4B5563'
							}
						},
						splitLine: {
							lineStyle: {
								color: 'rgba(75, 85, 99, 0.2)'
							}
						},
						axisLabel: {
							color: '#9CA3AF'
						}
					},
					series: [
						{
							name: 'Nombre d\'évaluations',
							type: 'bar',
							barWidth: '60%',
							itemStyle: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
									{ offset: 0, color: 'rgba(252, 141, 98, 1)' },
									{ offset: 1, color: 'rgba(251, 191, 114, 1)' }
								]),
								borderRadius: [4, 4, 0, 0]
							},
							data: [5, 12, 45, 192, 233]
						}
					]
				};
				ratingsChart.setOption(ratingsOption);
	// Resize charts when window is resized
				window.addEventListener('resize', function() {
					activityChart.resize();
					completionChart.resize();
					ratingsChart.resize();
				});
			});