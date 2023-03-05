import { useState } from "react";
import zips from "zips";

const ZipcodeForm = (props) => {
  const { setLocation } = props;
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");

  return (
    <form
      className="flex justify-center m-2 mt-12 flex-col"
      onSubmit={(event) => {
        event.preventDefault();
        const result = zips.getByZipCode(zipcode);
        if (result === null) {
          setError(`Zipcode ${zipcode} is not valid`);
        } else {
          setError("");
          setLocation({
            lat: result.lat,
            long: result.long,
            city: result.city,
            state: result.state,
          });
        }
      }}
    >
      <div className="h-6 text-red-400 text-center font-sm mb-2">{error}</div>
      <div className="flex justify-center">
        <input
          className="px-6 py-2 rounded-l-lg bg-[#EFE9E8] text-2xl text-[#A39D9C] placeholder-[#C6C0BF] outline-none border-l-2 border-t-2 border-b-2 border-[#DDD7D6] focus:border-[#BCB6B5]"
          placeholder="Type in a US zipcode"
          value={zipcode}
          onChange={(event) => {
            if (event.nativeEvent.data === null) {
              setError("");
              setZipcode(event.target.value);
              return;
            }

            const allowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            if (allowed.includes(event.nativeEvent.data)) {
              if (zipcode.length < 5) {
                setError("");
                setZipcode(event.target.value);
              }
            } else {
              setError("Zipcode must be numbers only");
            }
          }}
        />
        <button
          className="rounded-r-lg bg-orange-400 px-4 py-1 hover:bg-orange-500"
          type="submit"
        >
          <i className="text-white text-2xl fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
};

export default ZipcodeForm;
