
function dataBip(numberBip) {
    Promise.all([
      fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberBip}`)
    ]).then((responses)=>{
      return Promise.all(responses.map((response => response.json())));
    }).then((responseJsons)=>{ 
      const dataTarjeta = responseJsons[0]
      console.log(dataTarjeta);
    });
    
  };