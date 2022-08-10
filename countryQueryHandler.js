import japaneeseName from "./Resource/Names/japaneeseName.js";
import asianNames from "./Resource/Names/asianNames.js";
import europeanNames from "./Resource/Names/europeanNames.js";
import arabNames from "./Resource/Names/arabNames.js";

const nameRouter = {
  japan: japaneeseName,
  china: asianNames,
  europe: europeanNames,
  middleEast: arabNames,
};

const checkWrongCountryInput = (newString) => {
  const checkWrongInput = newString.filter(
    (string) => !nameRouter[string.trim()]
  ); // Checking if given value is existes
  if (checkWrongInput.length > 0) return false;
  return true;
};

const extractCountryName = (queryCountry) => {
  const tempString = queryCountry
    .split("") // Converting string "[xyz,xyz]" to ["[","x","y",.......,"z","]"]
    .slice(1) // Removing first bracket
    .slice(0, -1) // Removing last bracket
    .join("") // Converting to string
    .split(","); // Converted back to array with comma seperated
  if (!checkWrongCountryInput(tempString)) return false;
  return tempString;
};

export default extractCountryName;
