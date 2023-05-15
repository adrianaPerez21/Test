var texto = "";
var estudiantes = ["yesica",'anahi',"melina","liliana","carla","tamara","jessica","maday","melany","summer"]

for(let i=0; i< estudiantes.length; i++){
   texto += estudiantes[i] + "<br>"
}

document.getElementById("demo").innerHTML = texto
