//Create the database
var db = {
  id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  recipe: [
    "http://allrecipes.com/recipe/10813/best-chocolate-chip-cookies/",
    "http://www.food.com/recipe/basic-cheese-pizza-194593",
    "http://www.seriouseats.com/recipes/2016/02/easy-vegetable-fried-rice-recipe.html",
    ,
    "http://www.foodnetwork.com/recipes/ree-drummond/beef-and-bean-burritos-recipe.html",
    "http://www.foodnetwork.com/recipes/tyler-florence/the-ultimate-cheesecake-recipe.html",
    "http://www.chowhound.com/recipes/slow-cooker-pork-ramen-31178",
    "http://allrecipes.com/recipe/228052/chinese-pork-dumplings/",
    "http://allrecipes.com/recipe/166678/easy-curry-rice/",
    "http://www.myrecipes.com/recipe/quick-parmesan-couscous",
    "http://allrecipes.com/recipe/189058/super-simple-salmon/",
    "http://allrecipes.com/recipe/220274/easy-chicken-gyro/",
    "http://allrecipes.com/recipe/25473/the-perfect-basic-burger/",
    "http://allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/",
    "http://www.epicurious.com/recipes/food/views/apple-celery-and-walnut-salad-351449",
    "http://allrecipes.com/recipe/23600/worlds-best-lasagna/",
    "http://allrecipes.com/recipe/8314/vanilla-ice-cream/"
  ],
  food: [
    "Chocolate Chip Cookie",
    "Cheese Pizza",
    "Fried Rice",
    "Beef Burrito",
    "Cheesecake",
    "Ramen Noodles",
    "Dumplings",
    "Curry Rice",
    "Couscous",
    "Salmon",
    "Gyro",
    "Hamburger",
    "Spaghetti",
    "Apple Salad",
    "Lasagna",
    "Vanilla Ice Cream"
  ],
  taste: [
    "Sweet",
    "Savory",
    "Savory",
    "Savory",
    "Sweet",
    "Savory",
    "Savory",
    "Savory",
    "Savory",
    "Savory",
    "Savory",
    "Savory",
    "Savory",
    "Sweet",
    "Savory",
    "Sweet"
  ],
  restrictions: [
    "Gluten",
    "Gluten",
    "Optional Meat",
    "Meat",
    "Lactose",
    "Gluten",
    "Gluten, Meat",
    "Optional Meat",
    "Gluten",
    "Seafood",
    "Meat",
    "Gluten, Meat",
    "Gluten, Meat",
    "none",
    "Meat",
    "Dairy"
  ],
  "meal type": [
    "Dessert",
    "Lunch/Dinner",
    "Lunch/Dinner",
    "Lunch/Dinner",
    "Dessert",
    "Lunch/Dinner",
    "Lunch/Dinner",
    "Lunch/Dinner",
    "Lunch/Dinner",
    "Lunch/Dinner",
    "Lunch/Dinner",
    "Lunch, Dinner",
    "Lunch, Dinner",
    "Anything",
    "Dinner",
    "Dessert"
  ],
  cuisine: [
    "American",
    "American",
    "Chinese",
    "Mexican",
    "American",
    "Japanese",
    "Chinese",
    "Thai/Indian",
    "African",
    "International",
    "Greek",
    "American",
    "Italian",
    "American",
    "Italian",
    "Italian"
  ],
  difficulty: [
    "Medium",
    "Easy",
    "Easy",
    "Medium",
    "Hard",
    "Easy",
    "Medium",
    "Hard",
    "Easy",
    "Easy",
    "Medium",
    "Easy",
    "Easy",
    "Easy",
    "Medium",
    "Medium"
  ]
};

var headers = [
  "id",
  "recipe",
  "food",
  "taste",
  "restrictions",
  "meal type",
  "cuisine",
  "difficulty"
];
var inptscool = [];
//btn for after results show, only make once so no error and keep reusing - appending and removing
var ok = document.createElement("BUTTON");
ok.setAttribute("type", "button");
ok.setAttribute("name", "button");
var mesg = document.createTextNode("OK");
ok.appendChild(mesg);
ok.setAttribute("onclick", "refreshLoad()");

function formLoad() {
  for (i = 2; i < headers.length; i++) {
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("id", "inp" + headers[i]);
    y.setAttribute("placeholder", "Search " + headers[i]);
    document.getElementById("myForm").appendChild(y);
  }
  var z = document.createElement("BUTTON");
  z.setAttribute("type", "button");
  z.setAttribute("name", "Submit");
  z.setAttribute("id", "zbtn");
  z.setAttribute("onclick", "formSub()");
  var mess = document.createTextNode("Submit");
  z.appendChild(mess);
  var br = document.createElement("BR");
  document.getElementById("myForm").appendChild(br);
  var br1 = document.createElement("BR");
  document.getElementById("myForm").appendChild(br1);
  document.getElementById("myForm").appendChild(z);
}

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
