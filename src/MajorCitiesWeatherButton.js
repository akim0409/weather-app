const MajorCitiesWeatherButton = (props) => {
  const { setLocation, location } = props;

  return (
    <button
      className="w-32 rounded-lg bg-orange-300 text-lg text-white text-center py-3 m-2 hover:bg-orange-400"
      onClick={() => {
        setLocation({
          lat: location.lat,
          long: location.long,
          city: location.city,
          state: location.state,
        });
      }}
    >
      {location.city}
    </button>
  );
};

export default MajorCitiesWeatherButton;
