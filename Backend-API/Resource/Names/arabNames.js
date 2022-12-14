// UAE, KSA, Qatar, Turkey, Afghanistan 50 each. Farmed from nameParser API. (Approx.)
const arabNames = [
  { author: "Sara Fernandes" },
  { author: "Sara Iqbal" },
  { author: "Umair Alhammadi" },
  { author: "Laura Hussein" },
  { author: "Aamir Akhtar" },
  { author: "Mohamad Taha" },
  { author: "Shahzad Kamal" },
  { author: "Daniel Saeed" },
  { author: "Farah Abdallah" },
  { author: "Mohd Hameed" },
  { author: "Sarah Rahman" },
  { author: "Amr Tariq" },
  { author: "Rebecca Taha" },
  { author: "Michael Bilal" },
  { author: "Martin Raja" },
  { author: "Maria Ismail" },
  { author: "Анна Hameed" },
  { author: "Karim Mansour" },
  { author: "Fadi Ali" },
  { author: "Farhan Ansari" },
  { author: "Adeel King" },
  { author: "Raja Islam" },
  { author: "Mariam Mirza" },
  { author: "Kate Shah" },
  { author: "Ashraf Malik" },
  { author: "Naveed Ismail" },
  { author: "Arun John" },
  { author: "Faisal Lee" },
  { author: "James Shah" },
  { author: "Farah Taylor" },
  { author: "Rachel Rana" },
  { author: "Paul Syed" },
  { author: "Raja Abdulla" },
  { author: "Shahzad Imran" },
  { author: "Laura Taylor" },
  { author: "Анна Syed" },
  { author: "Sara Mahmoud" },
  { author: "Raja Mehmood" },
  { author: "Sami Hameed" },
  { author: "Alex King" },
  { author: "Rachel Mahmood" },
  { author: "Ahmad Saleem" },
  { author: "Rana Hussain" },
  { author: "Farah Roy" },
  { author: "Hamza Sheikh" },
  { author: "Raja Ali" },
  { author: "Samer Hamdan" },
  { author: "Simon Alsuwaidi" },
  { author: "Saad Thomas" },
  { author: "Sami Saeed" },
  { author: "Abdullah-al Aldossary" },
  { author: "Om Alshareef" },
  { author: "Bandar Shah" },
  { author: "Hamad Hamed" },
  { author: "Ahmed Noor" },
  { author: "Hasan Aldossary" },
  { author: "Saudi Alshareef" },
  { author: "Ismail Alkhaldi" },
  { author: "Abdul Alturki" },
  { author: "Fatimah Ibrahim" },
  { author: "Mona Alharbi" },
  { author: "Eng Al-harbi" },
  { author: "Mona Khan" },
  { author: "Al Noor" },
  { author: "Ashraf Saleem" },
  { author: "Abdullah-al Alshaikh" },
  { author: "Fatimah Alattas" },
  { author: "Waqas Alshareef" },
  { author: "Saud Khan" },
  { author: "Rami Salman" },
  { author: "Mohamed Altamimi" },
  { author: "Abdullah-al Alrashed" },
  { author: "Amal Aldossary" },
  { author: "Eng Alghamdi" },
  { author: "Asma Abdulaziz" },
  { author: "Mazen Khalil" },
  { author: "Abrar Alrasheed" },
  { author: "Tariq Alomar" },
  { author: "Abdul-rahman Al-harbi" },
  { author: "Bader Alnasser" },
  { author: "Sarah Alsaeed" },
  { author: "Noura Malik" },
  { author: "Noura Alsharif" },
  { author: "Fatimah Malik" },
  { author: "Naif Alturki" },
  { author: "Eng Abdulaziz" },
  { author: "Eng Alharbi" },
  { author: "Saleh Alotaibi" },
  { author: "Hanan Rahman" },
  { author: "Mazen Alshahrani" },
  { author: "Reem Alanazi" },
  { author: "Fatimah Kamal" },
  { author: "Manal Alharbi" },
  { author: "Amal Mahmoud" },
  { author: "Usman Turki" },
  { author: "Abrar Alshahrani" },
  { author: "Eng Ahmed" },
  { author: "Amal Ahmed" },
  { author: "Saud Adel" },
  { author: "Saeed Alamri" },
  { author: "Mohamed Kumar" },
  { author: "Ali Mohamed" },
  { author: "Ahmed Khan" },
  { author: "Qatar Khan" },
  { author: "Ali Hussain" },
  { author: "Mohammed Ibrahim" },
  { author: "Qatar Kumar" },
  { author: "Qatar Hassan" },
  { author: "Ahmed Hassan" },
  { author: "Hassan Ibrahim" },
  { author: "Omar Kumar" },
  { author: "Hassan Mohamed" },
  { author: "Khaled Khan" },
  { author: "Hassan Hassan" },
  { author: "Qatar Ahmad" },
  { author: "Khaled Ali" },
  { author: "Khaled Ahmed" },
  { author: "Hassan Kumar" },
  { author: "Mohamed Ali" },
  { author: "Qatar Hussain" },
  { author: "Mohamed Mohamed" },
  { author: "Qatar Ali" },
  { author: "Khaled Ahmad" },
  { author: "Qatar Mohammed" },
  { author: "Mahmoud Ibrahim" },
  { author: "Ahmad Ali" },
  { author: "Mohammed Hassan" },
  { author: "Mahmoud Ahmed" },
  { author: "Mohammed Ahmad" },
  { author: "Hassan Hussain" },
  { author: "Qatar Ibrahim" },
  { author: "Omar Khan" },
  { author: "Ali Khan" },
  { author: "Qatar Ahmed" },
  { author: "Mohamed Ahmed" },
  { author: "Adnan Fidan" },
  { author: "Nehir Arslanoğlu" },
  { author: "Iskender Özen" },
  { author: "Berivan Erkol" },
  { author: "Hicran Arıcan" },
  { author: "Abdurrahim Harman" },
  { author: "Birkan Atasever" },
  { author: "Seval Akşit" },
  { author: "Güner Demirer" },
  { author: "Çoşkun Akkaş" },
  { author: "Edip Omer" },
  { author: "Sinem Kor" },
  { author: "Michael Yazan" },
  { author: "Şafak Kırca" },
  { author: "Gültekin Kalayci" },
  { author: "Özan Izmir" },
  { author: "Atalay Yavaş" },
  { author: "Fatma Nuri" },
  { author: "Yiğitcan Kalkan" },
  { author: "Nedim Emre" },
  { author: "Yalniz Akbiyik" },
  { author: "Nazlican Erdemir" },
  { author: "Muhittin Inceoğlu" },
  { author: "Aykut Altınbaş" },
  { author: "Mavi Asya" },
  { author: "Nazli Aylin" },
  { author: "Gulseren şenay" },
  { author: "Sezen Yapıcı" },
  { author: "Selcan Yiğiter" },
  { author: "Aslan Erdemli" },
  { author: "Reyhan Kansu" },
  { author: "Zeliha Yalçin" },
  { author: "Gökçe üçüncü" },
  { author: "Murad Melek" },
  { author: "Nebahat Ankara" },
  { author: "Huriye Varlı" },
  { author: "Seda Atalay" },
  { author: "Ezgi Sariçiçek" },
  { author: "Atakan Tanrikulu" },
  { author: "Armağan Arkan" },
  { author: "Ibrahim Arici" },
  { author: "Naciye çırak" },
  { author: "Gulcan Ertem" },
  { author: "Zubeyde çal" },
  { author: "Secil Atasever" },
  { author: "Yunus Pamuk" },
  { author: "Sebnem Devrim" },
  { author: "Mert Altinay" },
  { author: "Hidayet Ekim" },
  { author: "Beytüllah Eksioglu" },
  { author: "Khalid Khan" },
  { author: "David Safi" },
  { author: "John Ahmad" },
  { author: "Kakar" },
  { author: "Shinwari" },
  { author: "Rafael Ramos" },
  { author: "Ferreira" },
  { author: "Habib Ullah" },
  { author: "Paul Hamdard" },
  { author: "Afghan" },
  { author: "Shah" },
  { author: "Ribeiro" },
  { author: "Mohammadi" },
  { author: "Sadat" },
  { author: "Wardak" },
  { author: "Abdullah Oliveira" },
  { author: "Fernandes" },
  { author: "Mustafa Ribeiro" },
  { author: "Jan Kakar" },
  { author: "Omid Khan" },
  { author: "Mark Nazari" },
  { author: "David Ali" },
  { author: "Carvalho" },
  { author: "Jan Afghan" },
  { author: "Abdullah Ramos" },
  { author: "Bilal Mohammadi" },
  { author: "Mohammad Noori" },
  { author: "Rohullah Ahmadi" },
  { author: "Rohullah Ramos" },
  { author: "Safi" },
  { author: "Marcelo Mohammadi" },
  { author: "Hamid Ahmadi" },
  { author: "Gomes" },
  { author: "Oliveira" },
  { author: "Najibullah Stanikzai" },
  { author: "Paul Sadat" },
  { author: "Abdullah Rahmani" },
  { author: "Habibi" },
  { author: "Asad-ullah Silva" },
  { author: "Ahmadi" },
  { author: "Abdul Martins" },
  { author: "Muhammad Martins" },
];

export default arabNames;
