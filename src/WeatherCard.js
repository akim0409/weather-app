import {
  weatherCodeToDescription,
  formatDateString,
  celsiusToFarenheit,
  kmToMi,
  dateToDayString,
} from "./util";

const WeatherCard = (props) => {
  const { day } = props;

  const weatherDescription = weatherCodeToDescription(day.weatherCode);

  return (
    <div className="m-4 text-[#BDAF94] rounded-lg flex flex-col justify-center">
      <div className="rounded-lg pt-6 pb-6 flex-1 flex flex-col justify-between bg-white border border-[#E6DFD2]">
        <div className="text-2xl text-[#AD9294] text-center font-nunito">
          {dateToDayString(day.time)}
        </div>
        <div className="text-center text-lg text-[#c2ac80] font-nunito">
          {formatDateString(day.time)}
        </div>
        <div className="my-4  flex justify-center bg-clip-text text-transparent text-8xl text-center">
          {weatherDescription.icon}
        </div>
        <div className="mb-4 font-lato text-3xl text-center font-semibold text-[#C7ACAE]">
          {weatherDescription.desc}
        </div>
        <div className="flex justify-between text-lg font-nunito mx-4">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <i className="text-xl fa-regular fa-temperature-three-quarters text-red-400 w-4 mr-px"></i>
              {celsiusToFarenheit(day.maxTemperature)}{" "}
              <span className="text-[#D4C6AB]">°F</span>
            </div>
            <div className="flex justify-end text-base">
              {celsiusToFarenheit(day.minTemperature)}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <i className="fa-regular fa-wind text-xl text-[#668CAF] mr-1"></i>
              <span className="">{Math.round(kmToMi(day.windSpeed))}</span>{" "}
              <span className="text-[#D4C6AB]">mi/h</span>
            </div>
            <div className="flex justify-between">
              <i className="text-xl fa-sharp fa-regular fa-droplet text-[#668CAF] w-4"></i>
              <div>
                <span className="">{day.precipitationProbability}</span>
                <span className="text-[#D4C6AB]"> %</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
