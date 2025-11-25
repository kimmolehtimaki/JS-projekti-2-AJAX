# Projektin nimi ja tekijät

Projektin nimi on "xxx", tekijänä Kimmo Lehtimäki

## Verkkolinkit:

Pääset julkaistuun sovellukseen käsiksi osoitteessa https://kimmotodo.netlify.app/
Linkki projektin videoesittelyyn [ScreenPal](https://go.screenpal.com...)

## Työn jakautuminen

Työ tehtiin yksilötyönä

## Oma arvio työstä ja oman osaamisen kehittymisestä

Mielestäni onnistuin saamaan tärkeimmät tehtävänannon määrittämät toiminnallisuudet sisällytettyä sovellukseen. Ensimmäisten toiminnallisuuksien koodaaminen meni kohtalaisen joutuisasti, mutta kompleksisempien osalta kehitystyö alkoi tökkimään. Niinpä kaikki toiminnallisuudet eivät täysin toimi toteutuksessa.
UI:n kehittäminen jäi melkoisen vajaavaiseksi, koska toiminnallisuuksien kehittäminen vei huomattavan paljon aikaa.
Sovelluksesta jäi puuttumaan tietojen tallentaminen LocalStorageen. Sain sen jo osittain toimimaan avainten osalta, mutta arvot jäivät puuttumaan
Koen, että olen oppinut valtavasti DOM-skriptaamisesta projektin aikana. Hiljalleen ymmärrys on alkanut parantumaan ja tekemiseen tuli edes hiukan selkeyttä. Käytin huomattavan paljon aikaa projektin työstämisen lisäksi myös DOM-skriptauksen opiskeluun ja opetettujen asioiden kertaamiseen.
Epäselväksi jäi miten paljon houkuttelemman toteutuksen olisin saanut esim. Bootstrapin avulla. Myös tietojen paikallinen tallentamisen epäonnistuminen ihmetyttää, koska työpajoissa asia tuntui melko selkeältä.
Antaisin itselleni pisteitä seuraavasti: 8/10 p

## Palaute opettajalle kurssista sekä itse opetuksesta tähän saakka

Kurssi sekä lähiopetus ovat tuntuneet haastavilta. Suurimmilta osin oman vaillinaisen perusosaamisen johdosta ja niinpä oppiminen on tuntunut välillä todella hitaalta.
Oppimisen tueksi olen ottanut käyttöön erilaisia työkaluja (esim. mimo.org), jossa pystyn kertaamaan ja harjoittelemaan perusasioiden tekemistä ja täten harjoittamaan koodaamisen vaatimaa lihasmuistia.

## Sisällysluettelo:

- [Tietoja sovelluksesta](#tietoja-sovelluksesta)
- [Tunnetut virheet/bugit](#Tunnetut virheet/bugit)
- [Kuvakaappaukset](#kuvakaappaukset)
- [Teknologiat](#teknologiat)
- [Asennus](#asennus)
- [Lähestymistapa](#lähestymistapa)
- [Kiitokset](#kiitokset)
- [Lisenssi](#lisenssi)

## Tietoja sovelluksesta

Tehtävälista on sovellus, jonka tarkoituksena on esittää yksinkertainen "ToDo-lista" suunnitelluista tehtävistä. Listaa tulisi pystyä päivittämään, sinne lisäämään ja poistamaan tehtäviä. Listan tulisi olla interaktiivinen käyttäjän toimintojen perusteella.

## Tunnetut virheet/bugit

Sovelluksessa oli tarkoitus tallentaa tietoja LocalStorageen, jotta lista ei tyhjentyisi aina selaimen päivittämisen yhteydessä. Tämä toteutus ei onnistunut.
Lisäksi tarkoituksena oli luoda filtterointi, jonka avulla käyttäjä pystyy näkemään valintansa mukaan joko kaikki tai vain aktiiviset listalla olevat tehtävät. Tämän toteutus ei täysin onnistunut.

## Kuvakaappaukset

Lisää tähän vähintään yksi kuvakaappaus toimivasta sovelluksesta  
`https://laureauas-my.sharepoint.com/:i:/g/personal/kil00006_laurea_fi/EUzsSsnOXa1BhqTqaGOqALgB2OONlKEvyLiv2vihh-3M_g?e=tiWzpG`

## Teknologiat

Kuvaa, mitä teknologioita käytettiin ja mikä oli niiden rooli projektissasi.  
Käytin seuraavia teknologioita: `html`, `css`, `JavaScript`
CSS-muotoiluun käytin Visual Studio Coden "Tailwind" laajennusta
CSS ja JavaScript eritytettiin omiin tiedostoihinsa.

## Asennus

Kirjoita lyhyet ohjeet sovelluksen käynnistämiseen ja käyttöön. Esimerkiksi:

- lataa kaikki tiedostot ja avaa index.html selaimessasi
- sovelluksen julkinen repositorio: 

## Kiitokset

Käytin projektin työstämiseen netistä löytyviä tutorialioita, jotka listattu alla. ChatGPT:tä käytin koodauksen aikana muutaman kerran koodauksen aikana syntaksivirheiden paikantamiseen kun koodi ei meinannut toimia, tällä sain nopeutettua kehittämistä. Yritin myös saada ChatGPT:ltä apua ratkaisemaan ongelmaa tehtävien "filtteroinnin" osalta (koodi alla), mutta aika ei riittänyt analysoimaan ratkaisua tarpeeksi, jotta olisin sen saanut toimimaan.

<!-- //Näytetään vain aktiiviset tehtävät l. ei niitä jotka merkattu "done"
showActiveButton.addEventListener("click", function() {
    const tasks = list.querySelectorAll("li");
    tasks.forEach(task => {
        if (task.classList.contains("done")) {
            task.style.display = "none";
        } else {
            task.style.display = "";
        }
    }); -->

- [Morten Rand-Henriksen](https://www.linkedin.com/learning/javascript-essential-training-2017/welcome)
- [Web Dev Simplified](https://www.youtube.com/watch?v=XF1_MlZ5l6M)
- [freeCodeCamp.org](https://www.youtube.com/watch?v=5fb2aPlgoys)
- [Mika Stenberg](https://mika-stenberg.gitbook.io/web-sovelluksia-javascriptin-avulla) , lisäksi Laurea Canvaksen materiaali
- [mimo.org] (mimo.org) Javascript ja Front-End developer -moduulit
- [Andy's Tech Tutorials] - The Movie Database API Tutorial (https://www.youtube.com/watch?v=FlFyrOEz2S4)
Tailwind-muotoilun apuna käytin seuraavia Youtubesta löytyviä tutorialeja:
    - [Tyler_Potts] - Tailwind CSS for Beginners: Build Websites Faster(https://www.youtube.com/watch?v=dcRenJApot0)
    - [AyyazTech] - How to create dropdown in tailwind CSS(https://www.youtube.com/watch?v=h-vhYwFlgSk)
- [Lavarian,Laza] - Convert a dd/mm/yy string to Date objec in Javascript
    

## Lisenssi

Valitse projektille lisenssi seuraamalla tätä [opasta](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository).

Esimerkki: MIT-lisenssi @ [Kimmo Lehtimäki]
