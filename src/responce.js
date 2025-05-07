export function response(city) {
  const apiKey = '2b4b5f62a91761dfce58826b7cb07fdd';
  const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  return fetch(geoUrl)
    .then(response => response.json())
    .then(geoData => {
      if (!geoData || geoData.length === 0) {
        throw new Error('Город не найден');
      }
      const { lat: latitude, lon: longitude } = geoData[0];
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      return fetch(weatherUrl);
    })
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}