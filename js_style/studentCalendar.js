
        document.addEventListener('DOMContentLoaded', function() {
            const calendarGrid = document.getElementById('calendarGrid');
            const currentMonthYearElement = document.getElementById('currentMonthYear');
            const prevMonthButton = document.getElementById('prevMonth');
            const nextMonthButton = document.getElementById('nextMonth');
            const todayButton = document.getElementById('today');
            
            let currentDate = new Date();
            let currentMonth = currentDate.getMonth();
            let currentYear = currentDate.getFullYear();
            
            // Sample events data
            const events = [
                { date: new Date(2025, 6, 2), type: 'lesson', title: 'Advanced JavaScript Concepts' },
                { date: new Date(2025, 6, 3), type: 'workshop', title: 'UX Design Principles Workshop' },
                { date: new Date(2025, 6, 4), type: 'deadline', title: 'React Project Deadline' },
                { date: new Date(2025, 6, 7), type: 'lesson', title: 'Node.js Fundamentals' },
                { date: new Date(2025, 6, 10), type: 'meeting', title: 'Study Group Meeting' },
                { date: new Date(2025, 6, 12), type: 'lesson', title: 'TypeScript Basics' },
                { date: new Date(2025, 6, 15), type: 'deadline', title: 'UX Case Study Submission' },
                { date: new Date(2025, 6, 17), type: 'workshop', title: 'Design Systems Workshop' },
                { date: new Date(2025, 6, 20), type: 'lesson', title: 'React Native Introduction' },
                { date: new Date(2025, 6, 22), type: 'meeting', title: 'Career Counseling Session' },
                { date: new Date(2025, 6, 25), type: 'deadline', title: 'Portfolio Update Deadline' },
                { date: new Date(2025, 6, 28), type: 'lesson', title: 'GraphQL Fundamentals' },
                { date: new Date(2025, 6, 30), type: 'workshop', title: 'Accessibility in Web Design' }
            ];
            
            function renderCalendar() {
                // Update month and year display
                const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                currentMonthYearElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
                
                // Clear previous calendar
                calendarGrid.innerHTML = '';
                
                // Get first day of month and total days
                const firstDay = new Date(currentYear, currentMonth, 1).getDay();
                const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                
                // Previous month's days
                const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
                
                // Add previous month's days
                for (let i = firstDay - 1; i >= 0; i--) {
                    const dayElement = document.createElement('div');
                    dayElement.className = 'calendar-day p-2 border border-white/5 text-white/30';
                    dayElement.innerHTML = `<div class="text-right">${prevMonthDays - i}</div>`;
                    calendarGrid.appendChild(dayElement);
                }
                
                // Add current month's days
                const today = new Date();
                for (let i = 1; i <= daysInMonth; i++) {
                    const dayElement = document.createElement('div');
                    
                    // Check if this is today
                    const isToday = i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
                    
                    dayElement.className = `calendar-day p-2 border border-white/5 relative ${isToday ? 'active-day' : ''}`;
                    
                    // Day number
                    const dayNumber = document.createElement('div');
                    dayNumber.className = 'text-right';
                    dayNumber.textContent = i;
                    dayElement.appendChild(dayNumber);
                    
                    // Check for events on this day
                    const dayEvents = events.filter(event => 
                        event.date.getDate() === i && 
                        event.date.getMonth() === currentMonth && 
                        event.date.getFullYear() === currentYear
                    );
                    
                    if (dayEvents.length > 0) {
                        const eventContainer = document.createElement('div');
                        eventContainer.className = 'flex mt-1 space-x-1 justify-end';
                        
                        // Add event dots (max 3 visible)
                        const visibleEvents = dayEvents.slice(0, 3);
                        visibleEvents.forEach(event => {
                            const eventDot = document.createElement('div');
                            eventDot.className = 'event-dot';
                            
                            // Set color based on event type
                            if (event.type === 'lesson') {
                                eventDot.style.backgroundColor = '#4A90E2';
                            } else if (event.type === 'workshop') {
                                eventDot.style.backgroundColor = '#50E3C2';
                            } else if (event.type === 'deadline') {
                                eventDot.style.backgroundColor = '#E67E22';
                            } else {
                                eventDot.style.backgroundColor = '#808080';
                            }
                            
                            eventContainer.appendChild(eventDot);
                        });
                        
                        // If there are more events than shown
                        if (dayEvents.length > 3) {
                            const moreIndicator = document.createElement('div');
                            moreIndicator.className = 'text-xs text-white/50';
                            moreIndicator.textContent = '+' + (dayEvents.length - 3);
                            eventContainer.appendChild(moreIndicator);
                        }
                        
                        dayElement.appendChild(eventContainer);
                        
                        // Add first event preview if there's space
                        if (dayEvents.length > 0) {
                            const firstEvent = dayEvents[0];
                            const eventPreview = document.createElement('div');
                            eventPreview.className = 'text-xs mt-2 truncate text-white/70';
                            eventPreview.textContent = firstEvent.title;
                            dayElement.appendChild(eventPreview);
                        }
                    }
                    
                    calendarGrid.appendChild(dayElement);
                }
                
                // Calculate how many days from next month to show
                const totalCells = 42; // 6 rows of 7 days
                const remainingCells = totalCells - (firstDay + daysInMonth);
                
                // Add next month's days
                for (let i = 1; i <= remainingCells; i++) {
                    const dayElement = document.createElement('div');
                    dayElement.className = 'calendar-day p-2 border border-white/5 text-white/30';
                    dayElement.innerHTML = `<div class="text-right">${i}</div>`;
                    calendarGrid.appendChild(dayElement);
                }
            }
            
            // Initial render
            renderCalendar();
            
            // Event listeners for navigation
            prevMonthButton.addEventListener('click', function() {
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                }
                renderCalendar();
            });
            
            nextMonthButton.addEventListener('click', function() {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
                renderCalendar();
            });
            
            todayButton.addEventListener('click', function() {
                const today = new Date();
                currentMonth = today.getMonth();
                currentYear = today.getFullYear();
                renderCalendar();
            });
        });
