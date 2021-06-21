/*
FORMAT {
    login
    email
    gender
    data [
        { param: value }
    ]
}
*/
const PARAMS = [
    {key: "TICs e Desenvolvimento Tecnológico", value: 0},
    {key: "Dados e Informação", value: 0},
    {key: "Arranjos Institucionais", value: 0},
    {key: "Administração e Gerenciamento da Cidade", value: 0},
    {key: "Serviços Públicos", value: 0},
    {key: "Economia do Conhecimento e Ambiente Pró-Negócios", value: 0},
    {key: "Capital Humano e Criatividade", value: 0},
    {key: "Governança, Engajamento e Colaboração", value: 0},
    {key: "Inclusão de minorias", value: 0},
    {key: "Ambiente Natural e Sustentabilidade Ecológica", value: 0},
    {key: "Ambiente Construído e Infraestrutura da Cidade", value: 0},
];

export function getBarGraphData(data_array) {
  const data_content = [...PARAMS];
  data_content.forEach(({key}, index) => {
      data_array.forEach(({data}) => {
          data_content[index].value += data[key];
      })
  })

  return data_content;
}

export function usefulInfo(data_array) {
    const info = {
        genderInfo: {
            Masculino: 0,
            Feminino: 0,
            'Não Binário': 0,
            Outro: 0,
        }
    };

    data_array.forEach(elem => {
        if(elem.Gênero === 'Masculino') info.genderInfo.Masculino += 1;
        else if(elem.Gênero === 'Feminino') info.genderInfo.Feminino += 1;
        else if(elem.Gênero === 'Não Binário') info.genderInfo['Não Binário'] += 1;
        else info.genderInfo.Outro += 1;
    })

    return info;
}
