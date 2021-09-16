import { useEffect, useState } from 'react';

const API_PATH = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_PATH1 = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q=";

const KEY_API = "27153e51947708ddc23e81d8ff0a840a";

export const useFetch = () => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [newCity, setNewCity] = useState('евпатория');

  useEffect(() => {
    const fetchData = async () => {

      const request = await fetch(`${API_PATH}${newCity}&units=metric&lang=ru&appid=${KEY_API}`);
      console.log(request);

      if (request.ok) {
        const res = await request.json();
        setResponse(res)
        setError(null)
      } else if (request.cod == 429) {
        setError("Ваша учетная запись временно заблокирована в связи с превышением ограничений на запросы вашего типа подписки. Пожалуйста, выберите подходящую подписку http://openweathermap.org/price")
      } else {
        setError('Error: данный сервис временно недоступен, смените временные ключи')
      }
    }
    fetchData();

  }, [newCity])

  return { response, error, setNewCity, newCity }
}

