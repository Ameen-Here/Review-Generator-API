import axios from "axios";

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

// generateName(COUNTRYNAME);

export default generateName;

// New
// Uae
// Spanish names
// Russia
// Ukraine

// About to
// France
// South korea
// Saudi arabia
// qatar
// switzerland
// Netherland
// Mexico
// South Africa
// Kenya
