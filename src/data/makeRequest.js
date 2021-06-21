const URL = "https://routerreact-5c9e0.firebaseio.com/.json";

function parseData(data) {
  const data_object = {
    data: {},
  };
  [...data].forEach(({ field_name, value }) => {
    if (
      field_name === "Login CIn" ||
      field_name === "Email" ||
      field_name === "Portador(a) de alguma deficiência" ||
      field_name === "Gênero"
    ) {
      data_object[field_name] = value;
    } else {
      data_object.data[field_name] = value;
    }
  });
  return data_object;
}

function makeRequest(data, type) {
  if (type.toLowerCase() === "get") {
    return fetch(URL, { method: "GET" }).then((res) => res.json());
  } else if (type.toLowerCase() === "post") {
    return fetch(URL, {
      method: "POST",
      body: JSON.stringify(parseData(data)),
    });
  }
}

export default makeRequest;
