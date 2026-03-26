let temperatura = Number(prompt("Quanti gradi ci sono fuori?"))

if(temperatura < 20 && temperatura >= 0){
    console.log("Non ci sono più le mezze stagioni");
    
}else if(temperatura >= 30){
    console.log("Lu mare, lu sole, lu ientu");
    
}else if(temperatura < 30 && temperatura >= 20){
    console.log("Mi dia una peroni sudata");
    
}else if(temperatura < 0 && temperatura >= -11){
    console.log("Non è tanto il freddo quanto l umidità");
    
}else if(temperatura <= -10){
    console.log("Copriti ancora ti raffreddi");
    
}else{console.log("Temperatura non valida");
}

switch(true){
    case temperatura < 20 && temperatura >= 0 :
        console.log("Non ci sono più le mezze stagioni");
        break

    case temperatura >= 30 :
        console.log("Lu mare, lu sole, lu ientu");
        break
        
        
    case temperatura < 30 && temperatura >= 20 :
        console.log("Mi dia una peroni sudata");
        break

    case temperatura < 0 && temperatura >= -10 :
        console.log("Non è tanto il freddo quanto l umidità");
        break

    case temperatura < -10 :
        console.log("Copriti ancora ti raffreddi");
        break

        default :
        console.log("Temperatura non valida");         
        
}
