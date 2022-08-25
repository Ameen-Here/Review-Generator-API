import axios from "axios";
import UkraineNames from "./Resource/Names/ukraneNames.js";

const generateName = async (nameArray) => {
  for (let i = 0; i < 250; i++) {
    const name = await axios.get(
      "https://api.parser.name/?api_key=8d8f59a4997f835d1a662c1ceb293242&endpoint=generate&country_code=UA"
    );
    const response = await name.data;
    let newName = `${response.data[0].name.firstname.name} ${response.data[0].name.lastname.name}`;
    const isNameExist = nameArray.filter((name) => name.author === newName);
    if (!isNameExist.length) nameArray.push({ author: newName });
  }
  console.dir(nameArray, { maxArrayLength: null });
};

generateName(UkraineNames);

export default generateName;

// New
// Uae
// Spanish names
// Russia

// About to
// Ukraine

// France
// South korea
// Saudi arabia
// qatar
// switzerland
// Netherland
// Mexico
// South Africa
// Kenya
