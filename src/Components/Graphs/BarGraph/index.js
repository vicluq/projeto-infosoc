import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { AutoSizer } from "react-virtualized";
import { Container } from "./styles";

const BarGraph = ({ data, label }) => {
  return (
    <Container>
      <h3>{label || "Todos os Dados"}</h3>
      <AutoSizer>
        {({ height, width }) => {
          console.log(height, width);
          return (
            <div className="BarContainer" style={{ height, width }}>
              <ResponsiveBar
                height={height}
                width={width}
                data={data}
                keys={["total"]}
                indexBy="key"
                margin={{ top: 30, right: 100, bottom: 100, left: 50 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "set3" }}
                axisTop={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 8,
                  tickRotation: 15,
                  legend: "",
                  legendPosition: "middle",
                  legendOffset: 100,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              />
            </div>
          );
        }}
      </AutoSizer>
    </Container>
  );
};

export default BarGraph;
