import { useEffect, useState } from "react";
import zips from "zips";
import WeatherCard from "./WeatherCard";
import ZipcodeForm from "./ZipcodeForm";
import { celsiusToFarenheit } from "./util";
import MajorCitiesWeatherButton from "./MajorCitiesWeatherButton";

const Forecast = () => {
  const [daily, setDaily] = useState(null);

  const [location, setLocation] = useState({
    lat: 40.6281,
    long: -73.9467,
    city: "Brooklyn",
    state: "NY",
  });

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.long}&timezone=GMT&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max,precipitation_probability_mean,sunrise,sunset`
    )
      .then((response) => response.json())
      .then((data) => setDaily(data.daily));
  }, [location]);

  if (daily === null) {
    return null;
  }

  const forecasts = [];
  for (let i = 0; i < daily.time.length; i += 1) {
    forecasts.push({
      time: daily.time[i],
      weatherCode: daily.weathercode[i],
      maxTemperature: daily.temperature_2m_max[i],
      minTemperature: daily.temperature_2m_min[i],
      windSpeed: daily.windspeed_10m_max[i],
      precipitationProbability: daily.precipitation_probability_mean[i],
    });
  }

  const weatherCards = forecasts
    .slice(0, 5)
    .map((day, idx) => <WeatherCard key={idx} day={day} />);

  const majorCitiesButtons = [99501, 98101, 33101].map((zip, idx) => (
    <MajorCitiesWeatherButton
      key={idx}
      setLocation={setLocation}
      location={zips.getByZipCode(zip)}
    />
  ));

  return (
    <div className="flex flex-col bg-[#FCF6F5]">
      <div className="flex justify-center overflow-hidden relative flex md:rounded-b-[50%]  bg-[#F9D9CC] text-xl text-[#5D494A] font-nunito">
        <div className="my-4 z-10">
          <div className="leading-relaxed text-center text-4xl lg:text-5xl my-14">
            <span className="">Today it is </span>
            <span className="bg-[#FFB177] px-4 py-2 rounded-lg">
              {celsiusToFarenheit(forecasts[0].maxTemperature)}
              <span className="bg-[#FFB177] ml-1">°F</span>
            </span>
            <span>
              {" "}
              in {location.city}, {location.state}
            </span>
          </div>
        </div>
        <div className="top-[-50px] right-[-63px] absolute w-96 h-96 bg-gradient-to-br rounded-full from-orange-300 to-red-400 drop-shadow-[0_80px_80px_#F4ECD4]"></div>
      </div>
      <div className="flex-1 flex flex-col">
        <ZipcodeForm setLocation={setLocation} />
        <div className="m-6 flex justify-center items-center text-center text-lg font-nunito text-[#B7B1B0]">
          <div className="hidden md:block w-32 mx-8 h-1 rounded-lg bg-[#D5CFCE]"></div>
          or select a city
          <div className="hidden md:block w-32 mx-8 h-1 rounded-lg bg-[#D5CFCE]"></div>
        </div>
        <div className="flex justify-center mx-4">{majorCitiesButtons}</div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center flex-wrap my-8">
            {weatherCards}
          </div>
        </div>
      </div>
      <div className="bg-[#476D90] text-[#A0C6E9] flex justify-center py-4">
        <div>By Autumn Kim</div>
        <div className="ml-4">autumnkim0409@gmail.com</div>
      </div>
    </div>
  );
};

export default Forecast;
