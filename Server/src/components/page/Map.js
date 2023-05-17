import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import '../page/Map.css'


const WorldMap = ({ setTooltipContent }) => {

  const [position, setPosition] = useState({ coordinates: [0, 1], zoom: 2 });

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
                    <Geography key={geo.rsmKey} geography={geo} fill="#a4a6eb" stroke="#c6c7f3" style={{ default: { outline: "none" }, hover: { outline: "none" }, pressed: { outline: "none" }, }} />
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
                <g
                  fill="none"
                  stroke="#f91f50"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
              </Marker>
              <Marker coordinates={[-74.006, 40.7128]} >
                <g
                  fill="none"
                  stroke="#f91f50"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
              </Marker>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    </React.Fragment>
  )
}
export default WorldMap;