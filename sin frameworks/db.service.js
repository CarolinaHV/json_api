let xhttp = new XMLHttpRequest(); 
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    let r = JSON.parse(xhttp.responseText);
    let personas = r.data;

    let salida = '';
    
    for(let i = 0; i < personas.length; i++) {
        salida += `<li>${personas[i].name} tiene ${personas[i].edad} años, y su frase favorita es ${personas[i].frase}`;
    }

    document.getElementById('personas')
        .innerHTML = salida;

    }
};
xhttp.open("GET", "db.json", true);
xhttp.send();