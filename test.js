// test.js
// ÄLÄ tulosta itse avainta – tarkista vain että se on olemassa
const API_KEY = process.env.MOVIE_API_KEY; 

if (API_KEY) {
    console.log("API-avain ladattu turvallisesti GitHub Actionsista.");
    //Tee API-kutsu käyttäen API:KEY:tä
    } else {    
    console.error("VIRHE: API-avainta ei löydy ympäristömuuttujista."); 
}
