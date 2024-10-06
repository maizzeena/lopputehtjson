fetch('https://maizzeena.github.io/tiedot/lopputehtava.json')

    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })

    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        rumba(responseJson);
    })

    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

function rumba(data) {
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    teksti = "<p>Opettajana " + "<a href=opettajat.html#carlos>" + data.opettajat[0] + "</a></p>";

    teksti = teksti + "<ul>";
    teksti = teksti + "Kaupunki: " + data.kaupunki + "<br>";
    teksti = teksti + "Studio: " + data.paikka + "<br>";
    teksti = teksti + "Osoite: " + data.osoite + "<br>";
    teksti = teksti + "<p>Ajankohta: " + data.pvm[0] + " klo " + data.klo[0] + "</p>";
    teksti = teksti + "Max. osallistujamäärä: " + data.osallistujamaara + "<br>";
    teksti = teksti + "Viimeinen päivä ilmoittautua: " + data.ilmottautuminen[0] + "<br>";
    teksti = teksti + "</ul>";

    // teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus").innerHTML = teksti;

}

fetch('https://maizzeena.github.io/tiedot/lopputehtava.json')

    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })

    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        hiphop(responseJson);
    })

    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("vastaus2").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

function hiphop(data) {
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    teksti = "<p>Opettajana " + "<a href=opettajat.html#mikael>" + data.opettajat[1] + "</a></p>";

    teksti = teksti + "<ul>";
    teksti = teksti + "Kaupunki: " + data.kaupunki + "<br>";
    teksti = teksti + "Studio: " + data.paikka + "<br>";
    teksti = teksti + "Osoite: " + data.osoite + "<br>";
    teksti = teksti + "<p>Ajankohta: " + data.pvm[1] + " klo " + data.klo[1] + "</p>";
    teksti = teksti + "Max. osallistujamäärä: " + data.osallistujamaara + "<br>";
    teksti = teksti + "Viimeinen päivä ilmoittautua: " + data.ilmottautuminen[1] + "<br>";
    teksti = teksti + "</ul>";

    // teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus2").innerHTML = teksti;

}

fetch('https://maizzeena.github.io/tiedot/lopputehtava.json')

    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })

    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        samba(responseJson);
    })

    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("vastaus3").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

function samba(data) {
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    teksti = "<p>Opettajana " + "<a href=opettajat.html#eva>" + data.opettajat[2] + "</a></p>";

    teksti = teksti + "<ul>";
    teksti = teksti + "Kaupunki: " + data.kaupunki + "<br>";
    teksti = teksti + "Studio: " + data.paikka + "<br>";
    teksti = teksti + "Osoite: " + data.osoite + "<br>";
    teksti = teksti + "<p>Ajankohta: " + data.pvm[2] + " klo " + data.klo[2] + "</p>";
    teksti = teksti + "Max. osallistujamäärä: " + data.osallistujamaara + "<br>";
    teksti = teksti + "Viimeinen päivä ilmoittautua: " + data.ilmottautuminen[2] + "<br>";
    teksti = teksti + "</ul>";

    // teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus3").innerHTML = teksti;

}

fetch('https://maizzeena.github.io/tiedot/lopputehtava.json')

    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })

    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        ope(responseJson);
    })

    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("ope").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

function ope(data) {
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    teksti = "<p>Laji: " + data.laji[0] + "</p>";

    teksti = teksti + "<p>" + data.kokemus[0] + "</p>"

    // teksti-muuttujan sisällön tulostus
    document.getElementById("ope").innerHTML = teksti;

}

fetch('https://maizzeena.github.io/tiedot/lopputehtava.json')

    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })

    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        ope2(responseJson);
    })

    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("ope2").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

function ope2(data) {
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    teksti = "<p>Laji: " + data.laji[1] + "</p>";

    teksti = teksti + "<p>" + data.kokemus[1] + "</p>"

    // teksti-muuttujan sisällön tulostus
    document.getElementById("ope2").innerHTML = teksti;

}

fetch('https://maizzeena.github.io/tiedot/lopputehtava.json')

    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })

    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        ope3(responseJson);
    })

    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("ope3").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

function ope3(data) {
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    teksti = "<p>Laji: " + data.laji[2] + "</p>";

    teksti = teksti + "<p>" + data.kokemus[2] + "</p>"

    // teksti-muuttujan sisällön tulostus
    document.getElementById("ope3").innerHTML = teksti;

}