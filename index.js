/* Crea uno script che recuperi i dati dalla seguente API: https://api.covid19api.com/summary. 
Da questa:
1. Ritorna i Total Confirmed
2. Ritorna la lista di tutte le country, con name countrycode e totalconfirmed
3. Ritrona solo il più alto per i Total Confirmed e i Toltal confirmed più basso*/





async function recDati(){
    let inRec = await fetch('https://api.covid19api.com/summary')
    let datiRec = await inRec.json();
    console.log(datiRec);
    
    let ulist = document.getElementById('list');
    let ilist = document.createElement('li')
    
    let totalConfirmed = datiRec.Global.TotalConfirmed
    ilist.appendChild(document.createTextNode("il numero di totalConfirmed è " + totalConfirmed));
    ulist.appendChild(ilist);

   
    let countryName = datiRec.Countries.map(item =>{  //ciclio e mappo le propietà
        return {
            name: item.Country,
            countryCode: item.CountryCode,
            totalConfirmed: item.TotalConfirmed,
        } 
    });

    //visto che erano 194 ne ho fatti stampare alcuni

   /* for(let i = 0; i < countryName.length; i++){
      
        let finaleCountry = countryName[i];
        
        let ilist = document.createElement('li')
        ilist.appendChild(document.createTextNode(finaleCountry.name + " " + finaleCountry.countryCode + " " + finaleCountry.totalConfirmed));
        ulist.appendChild(ilist);
        
        
    }*/
    
    
    for(let i = 0; i < 5; i++){
      
        let finaleCountry = countryName[i];
        
        let ilist = document.createElement('li')
        ilist.appendChild(document.createTextNode("nome: "+ finaleCountry.name + " code: " + finaleCountry.countryCode + " totalConfermed " + finaleCountry.totalConfirmed));
        ulist.appendChild(ilist);
        
        
    }
 

    let maxValue
    let minValue
    for (let i = 0; i < countryName.length; i++){
        if (i === 0){
            maxValue = countryName[i].totalConfirmed
            minValue = countryName[i].totalConfirmed
        }else{
            if (countryName[i].totalConfirmed > maxValue){
               maxValue = countryName[i].totalConfirmed 
            
            }else{
                if (minValue < countryName[i].totalConfirmed){
                    minValue = countryName[i].totalConfirmed
                }
            }
        }
       
    }  

    let lilist = document.createElement('li')
    lilist.appendChild(document.createTextNode("il valore più alto è " + maxValue + " il valore più basso è " + minValue));
    ulist.appendChild(lilist);
    console.log(maxValue);
    console.log(minValue);

     

   


} recDati();



