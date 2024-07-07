"use client";

import { useRef, useEffect } from "react";

export const PlacesAutoComplete = () => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "ng" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };
  useEffect(() => {
    if (window.google) {
      console.log("--------------loaded");
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        options,
      );
    }
  }, [window.google]);
  return (
    <div>
      <label>enter address :</label>
      <input ref={inputRef} />
    </div>
  );
};
