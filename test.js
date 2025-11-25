// test.js
// ÄLÄ tulosta itse avainta – tarkista vain että se on olemassa
if (!process.env.MOVIE_API_KEY) {
  console.error("MOVIE_API_KEY puuttuu ympäristömuuttujista!");
  process.exit(1);
} else {
  console.log("MOVIE_API_KEY löytyi. ✅");
  process.exit(0);
}
