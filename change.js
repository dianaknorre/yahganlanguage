change = document.getElementById("change")

function change_all(){
    if(document.getElementsByTagName('div')[3].innerHTML == "Кнорре") {
    document.getElementsByTagName('div')[2].innerHTML = "GU MVD Rossii po g. Moskve";
    document.getElementsByTagName('div')[3].innerHTML = "Knorre";
    document.getElementsByTagName('div')[4].innerHTML = "Diana";
    document.getElementsByTagName('div')[5].innerHTML = "Viktorovna";
    document.getElementsByTagName('div')[6].innerHTML = "F";
    document.getElementsByTagName('div')[8].innerHTML = "Moscow";
    document.getElementsByTagName('div')[9].innerHTML = '<a href="images/myphoto.png" target="_blank"><img src="images/myphoto.png" height="150" width="120" title="Me with Loop, my plushie"></a>';
    } else {
    document.getElementsByTagName('div')[2].innerHTML = "ГУ МВД России по г. Москве";
    document.getElementsByTagName('div')[3].innerHTML = "Кнорре";
    document.getElementsByTagName('div')[4].innerHTML = "Диана";
    document.getElementsByTagName('div')[5].innerHTML = "Викторовна";
    document.getElementsByTagName('div')[6].innerHTML = "жен";
    document.getElementsByTagName('div')[8].innerHTML = "г. Москва";
    document.getElementsByTagName('div')[9].innerHTML = '<a href="images/myphoto.png" target="_blank"><img src="images/myphoto.png" height="150" width="120"  title="Я со стрелками и Лупом"></a>';
    }
}

change.addEventListener("click", change_all)