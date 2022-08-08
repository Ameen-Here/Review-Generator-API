import axios from "axios";
import asianNames from "./Resource/Names/asianNames";
import indianNames from "./Resource/Names/indianNames";
import europeanNames from "./Resource/Names/europeanNames";
import arabNames from "./Resource/Names/arabNames";

const generateName = async (nameArray) => {
  for (let i = 0; i < 50; i++) {
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

// generateName(THE ARRAY OF DATABASE YOU WANT TO PUSH TO);

export default generateName;
