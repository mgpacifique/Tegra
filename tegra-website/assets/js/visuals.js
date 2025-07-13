document.addEventListener('DOMContentLoaded', function() {
    // Load Chart.js from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = initCharts;
    document.head.appendChild(script);

    function initCharts() {
        const charts = document.querySelectorAll('.donut-chart');
        
        charts.forEach(chartEl => {
            const percent = parseFloat(chartEl.dataset.percent);
            const label = chartEl.dataset.label;
            
            new Chart(chartEl, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [percent, 100 - percent],
                        backgroundColor: [
                            `hsl(${getComputedStyle(document.documentElement)
                                .getPropertyValue('--secondary-color-h')}, 
                             50%)`,
                            '#ffffff20'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    cutout: '75%',
                    responsive: true,
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false },
                        title: {
                            display: true,
                            text: label,
                            color: `var(--primary-color)`,
                            font: { size: 14 }
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeOutQuart'
                    }
                }
            });
        });
    }
});
