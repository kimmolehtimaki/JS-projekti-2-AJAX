# Projektin nimi ja tekijät

Projektin nimi on "Elokuvaideat", tekijänä Kimmo Lehtimäki

## Verkkolinkit:

Pääset julkaistuun sovellukseen käsiksi osoitteessa [https://kimmoajax.netlify.app]
Linkki projektin videoesittelyyn [ScreenPal](https://go.screenpal.com/watch/cTXOVonqwE9)

## Työn jakautuminen

Työ tehtiin yksilötyönä

## Oma arvio työstä ja oman osaamisen kehittymisestä

Asetin itselleni useita tavoitteita projektin työstämiseen. Näistä mainittakoon:
- Git komentorivin käytön harjaantuminen
- Tailwindcss:n käyttö sovelluksen tyylien muokkaamisessa
- Versiohallinnan ja haarojen käytössä harjaantuminen

Onnistuin saamaan tehtävänannon määrittämät toiminnallisuudet sisällytettyä sovellukseen. Omien tavoitteiden saavuttaminen kokonaisuudessaan oli hieman liian suuri tavoite yhdellä kertaa. Esim. pudotusvalikkoa lähdin alussa tekemään täysin tailwind:llä, mutta jouduin palaamaan jossain vaiheessa JS:n perustason <select> -elementin käyttämiseen.
Huomattava määrä aikaa kului muutoinkin sovelluksen UI:n viimeistelyyn, koska lähdin opettelemaan Tailwind:ä käytännössä alusta. Muilta osin kehittäminen meni kohtalaisen hvyin. 

TMDB:n API:n käyttö oli minulle uutta ja dokumentaation tutustumiseen meni oma aikansa. Aluksi en saanut API-kutsuja lähtemään, jolloin päätin mennä helpompaa ja tutumpaa tietä funktiokutsujen osalta.

Jälleen koen, että olen oppinut valtavista JavaScript-kehittämisestä projektin aikana. Oppiminen tuntuu olevan väillä tuskastuttavan hidastta, ja tähänkin projektiin käytetty aika ja työmäärä ylitti ennakkoarvion huomattavasti. Kuitenkin tuntuu että koko ajan pääsee paremmin ja paremmin "jyvälle" aiheesta, eikä ihan jokaiseen asiaan tarvitse enää tukeutua googleen tai tekoälyyn. 
Palautuksen myöhästymisestä johtuen, antaisin itselleni pisteitä seuraavasti: 7/10 p

## Palaute opettajalle kurssista sekä itse opetuksesta tähän saakka

Kurssi sekä lähiopetus ovat paikooitellen tuntuneet haastavilta ja kuten mainittua oppiminen on tuntunut välillä todella hitaalta. Projektit ovat olleet kurssin aikana todella antoisia oppimisen kannalta.

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

Elokuvaideat on sovellus, joka mahdollistaa käyttäjän hakea ideoita omaan elokuva hetkeen tai iltaan. Sovelluksen avulla pystyy tarkastelemaan suoraan "trendaavia" elokuvia tai etsimään omia suosikkielokuvia hakusanojen avulla.

## Tunnetut virheet/bugit

Sovellus ei sisällä suuria bugeja tai virheitä. Tosin hakutulokset palauttavat vain tulosten ensimmäisen sivun, joten jatkokehitettävää riittäisi ainakin usemman sivun hakemisesta ja selaamisesta. Hakusanan avulla haettaessa olisin halunnut mukaan toiminnallisuuden, käyttäjälle aletaan ehdottamaan avainsanan perusteella, mutta tähän ei tällä kertaa taidot ja aika riittänyt.

## Kuvakaappaukset

Lisää tähän vähintään yksi kuvakaappaus toimivasta sovelluksesta  
`https://laureauas-my.sharepoint.com/:i:/g/personal/kil00006_laurea_fi/IQATwJDUBdYTSp_q40fiIgoJAcwjj6NdDCmpH8cxdx-4xzs?e=2rJlab`

## Teknologiat

Kuvaa, mitä teknologioita käytettiin ja mikä oli niiden rooli projektissasi.  
Käytin seuraavia teknologioita: `html`, `JavaScript`
Sovelluksen tyylien muotoiluun käytin Tailwindcss:ää ja Visual Studio Coden "Tailwind" laajennusta. En ladannut erillisiä Tailwind-kirjastoja vaan tyylit haettiin Tailwindin CDN:n kautta, joka toimii mielestäni näin pienissä tehtävissä.
JavaScript eritytettiin omaan tiedostoon.
API-kutsujen validointiin käytin Postman-ohjelmistoa.

## Asennus

Kirjoita lyhyet ohjeet sovelluksen käynnistämiseen ja käyttöön. Esimerkiksi:

- lataa kaikki tiedostot ja avaa index.html selaimessasi
- sovelluksen julkinen repositorio: https://github.com/kimmolehtimaki/JS-projekti-2-AJAX.git

## Kiitokset

Käytin projektin työstämiseen netistä löytyviä tutoraaleja, jotka listattu alla. ChatGPT:tä käytin koodauksen aikana muutaman kerran isompien ongelmien kohdalla, joihin en löytänyt muualta ratkaisua. Debuggaus taidoissani huomasin parantamisen varaa, jolloin eteenpäin pääsemiseksi turvauduin tekoälyyn. 

- [Morten Rand-Henriksen](https://www.linkedin.com/learning/javascript-essential-training-2017/welcome)
- [Web Dev Simplified](https://www.youtube.com/watch?v=XF1_MlZ5l6M)
- [freeCodeCamp.org](https://www.youtube.com/watch?v=5fb2aPlgoys)
- [Mika Stenberg](https://mika-stenberg.gitbook.io/web-sovelluksia-javascriptin-avulla) , lisäksi Laurea Canvaksen materiaali
- [mimo.org] (mimo.org) Javascript ja Front-End developer -moduulit
- [Andy's Tech Tutorials] - The Movie Database API Tutorial | For Beginners (https://www.youtube.com/watch?v=FlFyrOEz2S4)

Tailwind-muotoilun apuna käytin seuraavia tutorialeja, enimmäkseen Youtubesta:
    - [Tailwindcss] - Documentation (https://tailwindcss.com/docs/installation/play-cdn)
    - [Tyler_Potts] - Tailwind CSS for Beginners: Build Websites Faster(https://www.youtube.com/watch?v=dcRenJApot0)
    - [AyyazTech] - How to create dropdown in tailwind CSS(https://www.youtube.com/watch?v=h-vhYwFlgSk)
    - [Lavarian,Laza] - Convert a dd/mm/yy string to Date objec in Javascript
    - [Helalee,Muslim] - Tailwind CSS for Devs in Hurry (https://www.youtube.com/watch?v=0JN_Bk8QuWY)

- ChatGpt: etsin apua API-kutsun lähettämättömyyden virheen paikantamisessa sekä API-avaimen piilottamiseen Githubissa.
    

## Lisenssi

Valitse projektille lisenssi seuraamalla tätä [opasta](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository).

Esimerkki: MIT-lisenssi @ [Kimmo Lehtimäki]
