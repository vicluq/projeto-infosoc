import React, { useState, useCallback, useEffect } from "react";
import makeRequest from "../../data/makeRequest";
import { usefulInfo, FILTERS } from "../../data/dataHandler";
import { Container, Content, InfoContainer } from "./styles";
import Graphs from "./Graphs";

const Showcase = ({ setLoading }) => {
  const [fetched_data, setData] = useState([]);
  const [filter, setFilter] = useState(FILTERS.DEFAULT);

  let { genderInfo, total, disabled } = usefulInfo(fetched_data);

  useEffect(() => {
    setLoading(true);
    makeRequest(null, "GET").then((data) => {
      setData(Object.values(data));
      setLoading(false);
    });
  }, [setLoading]);

  return (
    <Container>
      <Content>
        <InfoContainer className="info">
          <div className="total_collected">
            <h3>Quantia Coletada</h3>
            <p>
              <span className="dat_info">{total}</span>
            </p>
          </div>
          <div className="by_gender">
            <h3>Quantia por Gênero</h3>
            <div className="by_gender_data">
              <div>
                <p>
                  Feminino:{" "}
                  <span className="dat_info">{genderInfo.Feminino}</span>
                </p>
              </div>
              <div>
                <p>
                  Masculino:{" "}
                  <span className="dat_info">{genderInfo.Masculino}</span>
                </p>
              </div>
              <div>
                <p>
                  Não Binário:{" "}
                  <span className="dat_info">{genderInfo["Não Binário"]}</span>
                </p>
              </div>
              <div>
                <p>
                  Outro: <span className="dat_info">{genderInfo.Outro}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="disabled_total">
            <h3>Portadores de Deficiência</h3>
            <p>
              <span className="dat_info">{disabled}</span>
            </p>
          </div>
          <div className="filter_selection">
            <h4>Filtar</h4>
            <select
              name="filters"
              id="filters"
              value={filter}
              onChange={({ target }) => setFilter(target.value)}
            >
              <option value={FILTERS.DEFAULT}>Todos</option>
              <option value={FILTERS.BY_GENDER}>Por Gênero</option>
              <option value={FILTERS.DISABLED}>Por Deficiência</option>
            </select>
          </div>
        </InfoContainer>
        <Graphs data={fetched_data} filter={filter} />
      </Content>
    </Container>
  );
};

export default Showcase;
