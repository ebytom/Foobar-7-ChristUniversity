function changechevron(id){
    var elem = document.getElementById(id);
    var clarr = elem.getAttribute('class').split(" ");
    if(clarr.indexOf('rotatechevron')>0){
        clarr.pop('rotatechevron')
        clarr.join(" ");
        elem.setAttribute('class',clarr);
    }else{
        clarr.push('rotatechevron')
        clarr.join(" ");
        elem.setAttribute('class',clarr);
    }
}