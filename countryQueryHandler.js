import japaneeseName from "./Resource/Names/japaneeseName.js";
import asianNames from "./Resource/Names/asianNames.js";
import europeanNames from "./Resource/Names/europeanNames.js";
import arabNames from "./Resource/Names/arabNames.js";
import indianNames from "./Resource/Names/indianNames.js";

const NAME_COLLECTION = [
  arabNames,
  europeanNames,
  asianNames,
  indianNames,
  japaneeseName,
];

const nameRouter = {
  japan: japaneeseName,
  china: asianNames,
  europe: europeanNames,
  middleEast: arabNames,
  india: indianNames,
};

const checkWrongCountryInput = (newString) => {
  const checkWrongInput = newString.filter(
    (string) => !nameRouter[string.trim()]
  ); // Checking if given value is existes
  if (checkWrongInput.length > 0) return false;
  return true;
};

const extractCountryName = (queryCountry) => {
  const tempString = queryCountry.split(","); // Converted  array with comma seperated
  if (!checkWrongCountryInput(tempString)) return false;
  return tempString;
};

export { extractCountryName, nameRouter, NAME_COLLECTION };
