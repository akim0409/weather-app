import RainyAnimation from "./images/RainyAnimation";
import CloudyAnimation from "./images/CloudyAnimation";
import SnowAnimation from "./images/SnowAnimation";
import FoggyAnimation from "./images/FoggyAnimation";
import SunnyAnimation from "./images/SunnyAnimation";
import ThunderAnimation from "./images/ThunderAnimation";

export const weatherCodeToDescription = (weatherCode) => {
  if (weatherCode === 17) {
    return {
      desc: "Thunder",
      icon: <ThunderAnimation />,
    };
  } else if (weatherCode <= 2) {
    return {
      desc: "Sunny",
      icon: <SunnyAnimation />,
    };
  } else if (weatherCode <= 19) {
    return {
      desc: "Cloudy",
      icon: <CloudyAnimation />,
    };
  } else if (weatherCode <= 29) {
    return {
      desc: "Rainy",
      icon: <RainyAnimation />,
    };
  } else if (weatherCode <= 39) {
    return {
      desc: "Snow",
      icon: <SnowAnimation />,
    };
  } else if (weatherCode <= 49 && weatherCode >= 40) {
    return {
      desc: "Fog",
      icon: <FoggyAnimation />,
    };
  } else if (weatherCode <= 69 && weatherCode >= 50) {
    return {
      desc: "Rainy",
      icon: <RainyAnimation />,
    };
  } else if (weatherCode <= 79 && weatherCode >= 70) {
    return {
      desc: "Snow",
      icon: <SnowAnimation />,
    };
  } else if (weatherCode <= 94 && weatherCode >= 80) {
    return {
      desc: "Rainy",
      icon: <RainyAnimation />,
    };
  } else if (weatherCode <= 99 && weatherCode >= 95) {
    return {
      desc: "Thunder",
      icon: <ThunderAnimation />,
    };
  }
};

export const dateToDayString = (d) => {
  const date = new Date(d);
  const dayOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return dayOfWeek[date.getDay()];
};

export const formatDateString = (date) => {
  // eslint-disable-next-line
  const [_, month, day] = date.split("-");
  const monthWords = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  return `${monthWords[month]} ${day}`;
};

export const celsiusToFarenheit = (c) => {
  return Math.round(c * (9 / 5) + 32);
};

export const kmToMi = (km) => {
  return (km * 0.62137).toFixed(1);
};
