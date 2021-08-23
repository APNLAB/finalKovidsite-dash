

  function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

async function covid(){
    const data = await fetch ("https://www.hpb.health.gov.lk/api/get-current-statistical")
    const response = await data.json()
    const realData = response.data
    const localCases = realData["local_total_cases"]
    const localDeaths = realData["local_deaths"]
    const localRecovered = realData["local_recovered"] 
    const localNewCases = realData["local_new_cases"]
    const localNewDeaths = realData["local_new_deaths"]
    const localTime = realData["update_date_time"]
    const localActiveCases = realData["local_active_cases"]
    const hospitalactive = realData["local_total_number_of_individuals_in_hospitals"]
    const totalpcr = realData["total_pcr_testing_count"]
    const dailypcr = realData["daily_pcr_testing_data"][0]['pcr_count']

   


    document.getElementById("totalcases").innerHTML = thousands_separators(localCases)
    document.getElementById("totaldeaths").innerHTML = thousands_separators(localDeaths)
    document.getElementById("totalrecovered").innerHTML = thousands_separators(localRecovered)
    document.getElementById("dialycase").innerHTML = thousands_separators(localNewCases)
    document.getElementById("dialydeath").innerHTML = thousands_separators(localNewDeaths)
    document.getElementById("realtime").innerHTML = localTime
    document.getElementById("localActive").innerHTML = thousands_separators(localActiveCases)
    document.getElementById("hospital").innerHTML = thousands_separators(hospitalactive)
    document.getElementById("total-pcr").innerHTML = thousands_separators(totalpcr)
    document.getElementById("dailypcrCount").innerHTML = thousands_separators(dailypcr)
     
   
}

covid();


const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()



  

/* async function anotherfunction(){
    const Data = await fetch("https://disease.sh/v3/covid-19/countries/usa?strict=true")
    const response = await Data.json()
    const realData = response.data
    const usaDeaths = response["deaths"]
    const usaCases = response["cases"]
    console.log(response);

    document.querySelector("#deathUS").append(usaDeaths);
    //document.querySelector("#caseUS").append(usaCases);
    //document.getElementById("deathUS").innerHTML = usaCases
}
anotherfunction();
 */



