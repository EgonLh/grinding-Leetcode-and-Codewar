function twiceAsOld(dadYearsOld, sonYearsOld) {
    if(sonYearsOld*2 > dadYearsOld){
        return sonYearsOld*2 - dadYearsOld;
    }else{
        return dadYearsOld-sonYearsOld*2
    }
  }


// refactor
const twiceAsOld = (dadYearsOld,sonYearsOld) => (sonYearsOld*2>dadYearsOld)?sonYearsOld*2-dadYearsOld:dadYearsOld-sonYearsOld*2;