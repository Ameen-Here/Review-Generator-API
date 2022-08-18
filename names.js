import axios from "axios";

import germanNames from "./Resource/Names/germanNames.js";

const generateName = async (nameArray) => {
  for (let i = 0; i < 250; i++) {
    const name = await axios.get(
      "https://api.parser.name/?api_key=14d88c7ba470803d912a260beab6d271&endpoint=generate&country_code=DE"
    );
    const response = await name.data;
    let newName = `${response.data[0].name.firstname.name} ${response.data[0].name.lastname.name}`;
    const isNameExist = nameArray.filter((name) => name.author === newName);
    if (!isNameExist.length) nameArray.push({ author: newName });
  }
  console.dir(nameArray, { maxArrayLength: null });
};

generateName(germanNames);

export default generateName;
