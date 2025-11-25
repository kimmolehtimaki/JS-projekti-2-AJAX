// Määritetään muuttujat väkäselle ja napille
const chevron = document.getElementById("chevron");
const ddBtn = document.getElementById("dropdownBtn");
// const open = !menu.classList.toggle("hidden");
// const closed = menu.classList.toggle("hidden");
const searchBtn = document.getElementById("searchBtn");

// Dropdown-valikon avaaminen
function toggleDropdown() {
    let dropdown = document.querySelector("#dropdown-box");
    let open = !dropdown.classList.toggle("hidden");
    chevron.classList.toggle("rotate-180", open);
}

//lisätään kuuntelija väkäsen kääntämiseen
ddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let open = !menu.classList.toggle("hidden");
  chevron.classList.toggle("rotate-180");
});


//API-kutsu pudotusvalikon kautta
function fetchTrending() {
  //muuttuja elokuvalle
    let timeWindow = document.getElementById("timeWindow").value;
            
    var xmlhttp = new XMLHttpRequest();
    //määritetään dynaamisesti muuttuja URL:lle, jotta saadaan API-kutsu muuttumaan käyttäjän valinnan mukaisesti
    const url = `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=75b11fc2e5b77958825f59ca418f0b6b`;

    xmlhttp.open("GET", url, true);
    //lähetetään kutsu
    xmlhttp.send();
  

    //luodaan vastauksen käsittelijä
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            let json = xmlhttp.responseText;

            //parsitaan data
            let data = JSON.parse(json);
            let movies = data.results;
            
            //kutsutaan taulukon kirjoittamisen funktiota
            renderTable(movies);
        } //if päättyy
      }   
};  

//API-kutsu avainsanan perusteella

function fetchKeyword() {
  let keyword = document.getElementById("textSearch").value;

  var xmlhttp = new XMLHttpRequest();
    //määritetään dynaamisesti muuttuja URL:lle, jotta saadaan API-kutsu muuttumaan käyttäjän valinnan mukaisesti
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1'&api_key=75b11fc2e5b77958825f59ca418f0b6b`;

     xmlhttp.open("GET", url, true);
    //lähetetään kutsu
    xmlhttp.send();

    //luodaan vastauksen käsittelijä
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            let json = xmlhttp.responseText;

            //parsitaan data
            let data = JSON.parse(json);
            let movies = data.results;
            
            //Listataan tulokset arvostelun mukaan laskevassa järjestyksessä ja kutsutaan taulukon kirjoittamisen funktiota
            movies.sort((a, b) => b.vote_average - a.vote_average);
            renderTable(movies);
        } //if päättyy
      }   
};

//Taulukon renderöinti
function renderTable(movies) {
  //litätään rivit taulukkoon
            let table = `<table border="1">
                        <tr>
                            <th>Elokuva</th>
                            <th>Alkuperäiskieli</th>
                            <th>Julkaisupäivä</th>
                            <th>Arvostelut</th>
                            <th>Juliste</th>
                        </tr>`;
                        

            //käydään elokuvat läpi for-silmukalla
            for (let i = 0; i < movies.length; i++) {
              let title = movies[i].original_title;
              let language = movies[i].original_language;
              let date = movies[i].release_date;
              // parsitaan lokaaliksi dateObj:ksi (fi)
              let dateString = '2025-11-13'
              let [year, month, day] = dateString.split('-');
              const dateObj = new Date(+year, +month -1, +day);
              let dateFormat = dateObj.toLocaleDateString('de-De');
              
              
              let votes = movies[i].vote_average;
              let poster = movies[i].poster_path;

            // luodaan otsikot silmukan jokaisella kierroksella uusi rivi
            //kovakoodataan poster koko w=92px, voisi konfiguroida, mutta dokumentaation mukaan tämäkin toiminee
            // https://developer.themoviedb.org/reference/configuration-details
              table+= `
                        <tr>
                            <td>${title}</td>
                            <td>${language}</td>
                            <td>${dateFormat}</td>
                            <td>${(votes.toFixed(1))}</td>
                            <td><img src="https://image.tmdb.org/t/p/w92${poster}"></td>
                        </tr>`;
            } //for-silmukka päättyy
              table+=`</table>`;
            //lisätään sisältö div:iin
            document.getElementById("movieTable").innerHTML = table;
};


