import React from "react";
import { getBarGraphData, FILTERS } from "../../../data/dataHandler";
import { Container } from "./styles";
import BarGraph from "../../../Components/Graphs/BarGraph";

const GENDERS = ["Feminino", "Masculino", "Não Binário", "Outro"];

const Graphs = ({ filter, data }) => {
  const barGraphData = getBarGraphData(data);
  const renderContent = () => {
    switch (filter) {
      case FILTERS.BY_GENDER:
        return (
          <>
            {GENDERS.map((gender) => {
              const filteredData = getBarGraphData(
                data.filter(({ Gênero }) => Gênero === gender)
              );
              return <BarGraph label={gender} data={filteredData} />;
            })}
          </>
        );
      case FILTERS.DISABLED:
        return (
          <>
            <BarGraph label={"Portadores(as) de Deficência"} data={getBarGraphData(data.filter((elem) => elem['Portador(a) de alguma deficiência'] === "Sim"))} />
            <BarGraph label={"Não Portadores(as) de Deficência"} data={getBarGraphData(data.filter((elem) => elem['Portador(a) de alguma deficiência'] === "Não"))} />
          </>
        );
      case FILTERS.DEFAULT:
      default:
        return <BarGraph data={barGraphData} />;
    }
  };

  return <Container layout={filter}>{renderContent()}</Container>;
};

export default Graphs;
