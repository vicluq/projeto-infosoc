import React, { useState, useCallback, useEffect } from "react";
import makeRequest from "../../data/makeRequest";
import { usefulInfo } from "../../data/dataHandler";


const Showcase = ({ setLoading }) => {
  const [fetched_data, setData] = useState([]);
  let { genderInfo } = usefulInfo(fetched_data);
  useEffect(() => {
      setLoading(true);
      makeRequest(null, "GET").then((data) => {
          setData(Object.values(data));
          setLoading(false);
        });
    }, [setLoading]);
 
    
  return (
    <div>
      <div className="info">
        <div className="total_collected">
          <h3>Quantia Coletada</h3>
          <p>{fetched_data.length}</p>
        </div>
        <div className="by_gender">
          <h3>Quantia por Gênero</h3>
          <div>
            <div>
              <p>Feminino</p>
              <p>
                {genderInfo.Feminino}
              </p>
            </div>
            <div>
              <p>Masculino</p>
              <p>{genderInfo.Masculino}</p>
            </div>
            <div>
              <p>Não Binário</p>
              <p>{genderInfo['Não Binário']}</p>
            </div>
            <div>
              <p>Outro</p>
              <p>{genderInfo.Outro}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
