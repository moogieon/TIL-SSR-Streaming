import { FC, useEffect, useRef, useState } from "react";
import { geoMercator, geoPath, json, select } from "d3";
import { feature } from "topojson";

export interface Props {}

const MapTest: FC<Props> = () => {
  const svgRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const projection = geoMercator();
    const pathGenerator = geoPath().projection(projection);

    json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(
      (data) => {
        // Convert topoJSON to geoJSON
        const countries = feature(data, data.objects.countries);
        console.log(countries);
        // Join data and draw svg path
        svg
          .selectAll("path")
          .data(countries.features)
          .enter()
          .append("path")
          .attr("class", "country")
          .attr("d", pathGenerator)
          .append("title") // (*)
          .text((d) => d.properties.name); // (*)
      }
    );
  }, []);

  return (
    <>
      <div className="flex flex-col  items-center">
        <div style={{ marginBottom: "2rem" }} className="m-auto container h-1">
          <svg ref={svgRef} className="relative"></svg>
        </div>
      </div>
    </>
  );
};

export default MapTest;
