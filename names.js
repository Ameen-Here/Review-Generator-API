import axios from "axios";

// UK and US 25 each
const europeanName = [
  { author: "Willy Dinges" },
  { author: "Leanne Deeb" },
  { author: "Shella March" },
  { author: "Abigail Berrios" },
  { author: "Kareen Jeter" },
  { author: "Lakia Hallam" },
  { author: "Shanika Noelle" },
  { author: "Megha Linares" },
  { author: "Gunner Sydney" },
  { author: "Boyd Kristina" },
  { author: "Alin Gluck" },
  { author: "Lula Belz" },
  { author: "Cesare Kristensen" },
  { author: "Bonnie Bratt" },
  { author: "Jeane Kazmierczak" },
  { author: "Miki Negrete" },
  { author: "Manoj Magnani" },
  { author: "Shu Heasley" },
  { author: "Dre Tobey" },
  { author: "Josue Maggs" },
  { author: "Joris Devaney" },
  { author: "Cherilyn Brightwell" },
  { author: "Lang Blakley" },
  { author: "Rochelle Liang" },
  { author: "Elisa Spring" },
  { author: "Claire-Louise Ruthven" },
  { author: "Hazel Mclay" },
  { author: "Sofie White" },
  { author: "Lionel Heathcote" },
  { author: "Deanne Monroe" },
  { author: "Khalil Gas" },
  { author: "Giuseppe Tibbs" },
  { author: "Kimmy Bevan" },
  { author: "Didier Calder" },
  { author: "Cheri Carless" },
  { author: "Dariusz Cafe" },
  { author: "Deena Pomfret" },
  { author: "Gus Myles" },
  { author: "Heidi Maddox" },
  { author: "Konrad Jelly" },
  { author: "Charl O'donovan" },
  { author: "Lynda Comerford" },
  { author: "Sofia Chesterton" },
  { author: "Anisa Mowbray" },
  { author: "Geri Shires" },
  { author: "Abhishek Lovett" },
  { author: "Marcela Mishra" },
  { author: "Bethanie Mulder" },
  { author: "Sadie Corlett" },
  { author: "Jo-Anna Beaven" },
];

const arabName = [];

const chineeseName = [];

const indianName = [];

const generateName = async (nameArray) => {
  for (let i = 0; i < 25; i++) {
    const name = await axios.get(
      "https://api.parser.name/?api_key=ur_id&endpoint=generate&country_code=FR"
    );
    const response = await name.data;
    let newName = `${response.data[0].name.firstname.name} ${response.data[0].name.lastname.name}`;
    const isNameExist = nameArray.filter((name) => name.author === newName);
    if (!isNameExist.length) nameArray.push({ author: newName });
  }

  console.log(nameArray);

  for (let i = 0; i < 25; i++) {
    const name = await axios.get(
      "https://api.parser.name/?api_key=ur_id&endpoint=generate&country_code=DE"
    );
    const response = await name.data;
    let newName = `${response.data[0].name.firstname.name} ${response.data[0].name.lastname.name}`;
    const isNameExist = nameArray.filter((name) => name.author === newName);
    if (!isNameExist.length) nameArray.push({ author: newName });
  }

  console.log(nameArray);

  for (let i = 0; i < 25; i++) {
    const name = await axios.get(
      "https://api.parser.name/?api_key=ur_id&endpoint=generate&country_code=PT"
    );
    const response = await name.data;
    let newName = `${response.data[0].name.firstname.name} ${response.data[0].name.lastname.name}`;
    const isNameExist = nameArray.filter((name) => name.author === newName);
    if (!isNameExist.length) nameArray.push({ author: newName });
  }

  console.log(nameArray);

  for (let i = 0; i < 25; i++) {
    const name = await axios.get(
      "https://api.parser.name/?api_key=ur_id&endpoint=generate&country_code=IT"
    );
    const response = await name.data;
    let newName = `${response.data[0].name.firstname.name} ${response.data[0].name.lastname.name}`;
    const isNameExist = nameArray.filter((name) => name.author === newName);
    if (!isNameExist.length) nameArray.push({ author: newName });
  }

  console.log(nameArray);
};

// generateName(europeanName);

export default europeanName;
