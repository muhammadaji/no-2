main = (word) => {
    var str = word;
    var res = new Array();
    res = str.split("");
    var text = "";
    var filter = new Array("r","j");
    var totalmatch = 0;
  
    for ( var i = 0; i < res.length; i++ ) {
      for ( var j = 0; j < filter.length; j++ ) {
        if (res[i] == filter[j]) {
          totalmatch ++;
        }
      }  
    }
  
    if ( totalmatch > 1 ) {
      for ( x = 0; x < res.length; x++ ) {
        if ("AIUEO".indexOf(res[x]) !== -1) {
          res[x] = res[x].toLowerCase();
        } else if ( res[x] === "r") {
          res[x] = "j";
        } else if ( res[x] === "j") {
          res[x] = "r";
        }else{
          res[x] = `${x}#`;
        }
          text += res[x];
      }
    } else if ( totalmatch < 2) {
        for ( x = 0; x < res.length; x++) {
          if ("AIUEO".indexOf(res[x]) !== -1) {
          res[x] = res[x].toLowerCase();
          } else if (res[x] === "r") {
            res[x] = "r";
          } else if (res[x] === "j") {
            res[x] = "j";
          } else {
            var char = "bcdfghklmnpqrstvwxyz";
            res[x] = char.charAt(Math.floor(Math.random() * char.length));
          }
            text += res[x];
        }
    }
    console.log(text)
  }

  main("01E3r5");