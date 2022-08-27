import arabNames from "./Resource/Names/arabNames.js";
import asianNames from "./Resource/Names/asianNames.js";
import chineeseNames from "./Resource/Names/chineeseName.js";
import europeanNames from "./Resource/Names/europeanNames.js";
import germanNames from "./Resource/Names/germanNames.js";
import indianNames from "./Resource/Names/indianNames.js";
import italianNames from "./Resource/Names/italianNames.js";
import japaneeseName from "./Resource/Names/japaneeseName.js";
import portugalNames from "./Resource/Names/portugalNames.js";
import RussianNames from "./Resource/Names/russianNames.js";
import spanishNames from "./Resource/Names/spanishNames.js";
import uaeNames from "./Resource/Names/uaeNames.js";
import UkraineNames from "./Resource/Names/ukraneNames.js";
import ukNames from "./Resource/Names/unitedKingdomNames.js";
import usNames from "./Resource/Names/unitedStatesNames.js";

const NAME_COLLECTION = [
  arabNames, //
  asianNames, //
  chineeseNames, //
  europeanNames, //
  germanNames, //
  indianNames, //
  italianNames, //
  japaneeseName, //
  portugalNames, //
  RussianNames, //
  spanishNames, //
  uaeNames, //
  UkraineNames, //
  ukNames, //
  usNames, //
];

const nameRouter = {
  JP: japaneeseName,
  ASI: asianNames,
  EUR: europeanNames,
  ARAB: arabNames,
  IN: indianNames,
  GB: ukNames,
  PT: portugalNames,
  US: usNames,
  IT: italianNames,
  CN: chineeseNames,
  DE: germanNames,
  RU: RussianNames,
  ES: spanishNames,
  AE: uaeNames,
  UA: UkraineNames,
};

const checkWrongCountryInput = (newString) => {
  const checkWrongInput = newString.filter(
    (string) => !nameRouter[string.trim().toUpperCase()]
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
