export const FILTERS = {
  BY_GENDER: "genero",
  DISABLED: "disabled",
  DEFAULT: "default",
};

export function getBarGraphData(data_array) {
  const PARAMS = [
    { key: "TICs e Desenvolvimento Tecnológico", total: 0 },
    { key: "Dados e Informação", total: 0 },
    { key: "Arranjos Institucionais", total: 0 },
    { key: "Administração e Gerenciamento da Cidade", total: 0 },
    { key: "Serviços Públicos", total: 0 },
    { key: "Economia do Conhecimento e Ambiente Pró-Negócios", total: 0 },
    { key: "Capital Humano e Criatividade", total: 0 },
    { key: "Governança, Engajamento e Colaboração", total: 0 },
    { key: "Inclusão de minorias", total: 0 },
    { key: "Ambiente Natural e Sustentabilidade Ecológica", total: 0 },
    { key: "Ambiente Construído e Infraestrutura da Cidade", total: 0 },
  ];
  
  PARAMS.forEach(({ key }, index) => {
    data_array.forEach(({ data }) => {
      const val = Number(data[key]);
      PARAMS[index].total += Number((val/(data_array.length)).toPrecision(2));
      console.log(PARAMS);
    });
  });
  
  return PARAMS;
}

export function usefulInfo(data_array) {
  const info = {
    total: data_array.length,
    genderInfo: {
      Masculino: 0,
      Feminino: 0,
      "Não Binário": 0,
      Outro: 0,
    },
    disabled: 0,
  };

  data_array.forEach((elem) => {
    if (elem.Gênero === "Masculino") info.genderInfo.Masculino += 1;
    else if (elem.Gênero === "Feminino") info.genderInfo.Feminino += 1;
    else if (elem.Gênero === "Não Binário") info.genderInfo["Não Binário"] += 1;
    else info.genderInfo.Outro += 1;

    if(elem['Portador(a) de alguma deficiência'] === "Sim") info.disabled += 1;
  });

  return info;
}
