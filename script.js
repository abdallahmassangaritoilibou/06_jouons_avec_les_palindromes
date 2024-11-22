function isvalidDate(date){
  const tableau = date.split("/") //split permet de separé la date a chaque /
  console.log(tableau)//j'affiche le tableau qui à separé la  
  let jour = tableau[0];// le jour = à l'index 0 dans 
  let mois = tableau[1]
  let année = tableau[2]
  let maxDaysInMonth; // je fai une déclaration de variable sans valeur pour lui assigné une valeur dans mes condition 
  console.log(jour)
  
   if(mois == 1 || mois == 3|| mois== 5 ||mois == 7 || mois ==8 || mois ==12 ) {// je compare et stock tous les mois qui se termine par 31 dans la variable maxDaysInMonth
    maxDaysInMonth=31
    // consloe.log("true")
  }
  else if (mois == 4|| mois== 6 ||mois == 9 || mois== 11) {//je vais comparé les nombres de par jour mois  
    maxDaysInMonth= 30
    // console.log ("true")
  }
    else if (mois == 2){ 
      maxDaysInMonth=29
      //console.log("true")
    }

else if(0<jour && jour<=maxDaysInMonth ){//je vais comparé le jour
  
    console.log(true)// on affiche  vrai
  }
  else if(0<tableau[1] && tableau[1] <13){//je vais comparé le mois
  
    
   
}
    return jour >=1 && jour <= maxDaysInMonth && mois>=1 && mois <=12 && année>999 && année<9999  

     
  }
console.log(isvalidDate("24/12/2001"))
