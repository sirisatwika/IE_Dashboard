import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// import '../page/Map.css'

import "./deviceMap.css";


const WorldMap = ({ setTooltipContent }) => {

  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  return (
    <React.Fragment>
      <div className="map_region">
        <div data-tip="" className="map_left">
          <ButtonGroup orientation="vertical" variant='outlined'>
            <Button key="one" sx={{ p: 1, borderColor: 'gray', color: 'black', "&:hover": { backgroundColor: "transparent", borderColor: 'gray' } }} onClick={handleZoomIn}>+</Button>
            <Button key="two" sx={{ p: 1, borderColor: 'gray', color: 'black', "&:hover": { backgroundColor: "transparent", borderColor: 'gray' } }} onClick={handleZoomOut}>-</Button>
          </ButtonGroup>
          <ComposableMap>
            <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd}>
              <Geographies geography="./features.json" >
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} fill="#8f9db3" stroke="#FFF" style={{ default: { outline: "none" }, hover: { outline: "none" }, pressed: { outline: "none" }, }} />
                  ))}
              </Geographies>
              <Marker coordinates={[76.5966534219, 12.3553756805]} onMouseEnter={() => {
                setTooltipContent(<>
                  <div className="cusmarker">
                    <p>Lorem Ipsum placeholder text for use in your graphic</p>
                  </div>
                </>)
              }}
                onMouseLeave={() => { setTooltipContent(""); }}>
                <circle r={8} fill="#f91f50" stroke="#f0e7ff" strokeWidth={1} />
              </Marker>
              <Marker coordinates={[-74.006, 40.7128]} >
                <circle r={8} fill="#f91f50" stroke="#f0e7ff" strokeWidth={1} />
              </Marker>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    </React.Fragment>
  )
}
export default WorldMap;