import { useState } from "react";
import Title from  './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import Loading from './components/Loading';
import './App.css';

type ResultStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

function App() {

  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultStateType>({
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: ''
  })
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://proxy-study.vercel.app/city-weather-data?q=${city}`)
    .then(res => res.json())
    .then(data => {
      setResults({
        country: data.location.country,
        cityName: data.location.name,
        temperature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon
      });
      setCity("");
      setLoading(false);
    })
    .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
  }  
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form getWeather={getWeather} setCity={setCity} city={city} />
        {loading ? <Loading /> : <Results results={results} />}
      </div>
    </div>
  );
}

export default App;
