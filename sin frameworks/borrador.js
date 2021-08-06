
//APUNTES

function manitoArriba() {
    if (mydataString) {
        localStorage.setItem("data_JSON_api", JSON.stringify(data)); //guardas
    }
    
    let mydataString = localStorage.getItem("data_JSON_api"); // sacas
    
    let mydataObject = JSON.parse(mydataString);

}

