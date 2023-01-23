(async function() {
    const data = [
      { temperature: -10, hours: 10 },
      { temperature: -7, hours: 11 },
      { temperature: 2, hours: 12 },
      { temperature: -5, hours: 13 },
      { temperature: -30, hours: 14 },
      { temperature: -1, hours: 15 },
      { temperature: 98, hours: 16 },
      { temperature: -6, hours: 17 },
      { temperature: -84, hours: 18 },
      { temperature: 20, hours: 19 },
    ];
  
    new Chart(
      document.getElementById('acquisitions'),
      {
        type: 'line',
        data: {
          labels: data.map(row => row.hours),
          datasets: [
            {
              label: 'Looping tension',
              data: data.map(row => row.temperature)
            }
          ]
        },
      }
    );
  })();
Chart.defaults.backgroundColor = 'none';
Chart.defaults.borderColor = '#36A2EB';
Chart.defaults.color = '#000';
