export function response() {
  const apiKey = '2b4b5f62a91761dfce58826b7cb07fdd';
  const latitude = 51.5074;
  const longitude = -0.1278;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  return fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error)
        throw error;
      });

  }