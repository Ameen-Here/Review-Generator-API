import axios from "axios";
import asianNames from "./Resource/Names/asianNames.js";
import indianNames from "./Resource/Names/indianNames.js";
import europeanNames from "./Resource/Names/europeanNames.js";
import arabNames from "./Resource/Names/arabNames.js";
import japaneeseName from "./Resource/Names/japaneeseName.js";
import usNames from "./Resource/Names/unitedStatesNames.js";
import portugalNames from "./Resource/Names/portugalNames.js";

const generateName = async (nameArray) => {
  for (let i = 0; i < 250; i++) {
    const name = await axios.get(
      "https://api.parser.name/?api_key=YOUR_API_KEY&endpoint=generate&country_code=COUNTRY_CODE"
    );
    const response = await name.data;
    let newName = `${response.data[0].name.firstname.name} ${response.data[0].name.lastname.name}`;
    const isNameExist = nameArray.filter((name) => name.author === newName);
    if (!isNameExist.length) nameArray.push({ author: newName });
  }
  console.dir(nameArray, { maxArrayLength: null });
};

// generateName(Country_Storing_folder);

export default generateName;
