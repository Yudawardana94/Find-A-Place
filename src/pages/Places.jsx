/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import {
  GoogleMap,
  StandaloneSearchBox,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

import { recordHistory } from "../features/place/placeSlice";
import "./Places.css";

import HistoryPlace from "../components/HistoryPlace";

function Places() {
  const dispatch = useDispatch();

  const defaultCenter = useMemo(
    () => ({ lat: -6.2087634, lng: 106.845599 }),
    []
  );
  const inputRef = useRef();

  const [center, setCenter] = useState(defaultCenter);
  const [text, setText] = useState("");

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      dispatch(recordHistory(place));
      setText(place.name);
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  return (
    <div className="container">
      <HistoryPlace />
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        libraries={["places"]}
      >
        <StandaloneSearchBox
          onLoad={(ref) => (inputRef.current = ref)}
          onPlacesChanged={handlePlaceChanged}
          className="input-wrapper"
        >
          <Input
            type="text"
            placeholder="Search Place"
            value={text}
            onChange={(val) => setText(val.target.value)}
            className="input-container"
          />
        </StandaloneSearchBox>
        <GoogleMap
          zoom={15}
          center={center}
          mapContainerClassName="map-container"
        >
          <Marker position={center}></Marker>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Places;
