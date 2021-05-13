function formLoad() {
  var x = document.createElement("INPUT");
  y.setAttribute("type", "text");
  y.setAttribute("id", "input");
  y.setAttribute("placeholder", "Things to alphabetize");
  document.getElementById("myForm").appendChild(y);
  var z = document.createElement("BUTTON");
  z.setAttribute("type", "button");
  z.setAttribute("name", "Submit");
  z.setAttribute("id", "sbmt");
  z.setAttribute("onclick", "formSub()");
  var mess = document.createTextNode("Submit");
  z.appendChild(mess);
  var br = document.createElement("BR");
  document.getElementById("myForm").appendChild(br);
  var br1 = document.createElement("BR");
  document.getElementById("myForm").appendChild(br1);
  document.getElementById("myForm").appendChild(z);
};

function formSub() {
  w3.hide('#zbtn');
  var empty = 0;
  var ok = document.createElement("BUTTON");
  //var srch = document.createElement("div");
  for (i = 2; i < headers.length; i++) {
    //gets vals from input
    //split vals by ,
    var valsplit = [];

    var val = document.getElementById("inp" + headers[i]).value;
    var val1 = val.split(",");
    for (b=0; b < val1.length; b++){
      valsplit.push(val1[b]);
    }
    //start loop to run through each val
    for (c=0; c<valsplit.length; c++){
      var inpts = [];
      val = valsplit[c];
      var hdr = headers[i];
      //run through each input and if all empty then throw error, otherwise find
      if (val === "") {
        empty++;
      } else {
        //should write input into cl
        //console.log(db[hdr].length);
        inpts.push("You searched for: '" +val+"'");
        //run through db in "for i in" funct using the header[i]
        var num = 0;
        for (k = 0; k < db[hdr].length; k++){
          if (db[hdr][k].toLowerCase() == val){
            console.log("found match");
            //loop through each section of db and draw info
            for (a = 1 ; a < 8 ; a++){
              var hdr1 = headers[a];
              inpts.push(" "+hdr1+": "+db[hdr1][k]);
            };
          } else {
            //if cant find any matches then throw error
            num++;
          };
        };
        if (num == k){
            inpts.push(" No results found");
          };
        //show results of pulls
        console.log(inpts);
        inptscool.push(inpts.concat());
        //if finds more than one then append each to body in <p>
      };
    };
  };
  if (empty >= headers.length - 2) {
    alert("Please fill out a box");
  };
  //call new funct to show results
  resultLoad(resultTxt);
};

function resultLoad(resultTxt){
  //append results to end of page
  //srch.innerHTML = inptscool;
  console.log(inptscool);
  for(t=0;t<inptscool.length;t++){
    var nw = document.createElement("P");
    nw.innerHTML = inptscool[t];
    document.getElementById("resultTxt").appendChild(nw);
  };
  //results.innerHTML = inptscool;
  //making btn for after showing info

  document.getElementById("results").appendChild(ok);
  //alert("Your results are: "+inptscool);
};


function refreshLoad(){
  inptscool = [];
  //alert("hi");
  resultTxt.innerHTML = " ";
  ok.remove();
  w3.show('#zbtn');
};
