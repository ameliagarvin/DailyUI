
// fetch("https://opendata.vancouver.ca/api/records/1.0/search/?dataset=business-licences&facet=folderyear&facet=licencerevisionnumber&facet=status&facet=issueddate&facet=businesstype&facet=businesssubtype&facet=city&facet=province&facet=localarea")
// .then(function (response){
// return response.json();
// }).then(function (data){

  
//   var business = data.facet_groups[7];
// //console.log(business.facets);
// // for loop goes here
// for(i=0; i< business.facets.length; i++)
// {
//     console.table(business.facets[i].name);
// }

// }).catch(function (error){
//   console.log(error);
// });

// var movies, people;

// fetch('https://ghibliapi.herokuapp.com/films')
// .then(function (response) {
//   return response.json();
// }).then(function (data) {
//   console.log(data);

//   movies = data;
//   return fetch('https://ghibliapi.herokuapp.com/people/');
// }).then(function (reponse) {
//   return reponse.json();
// }).then(function (data){
//   console.log(data);

//   people = data;

//   data.forEach(people => {
// console.log(people.name)
// // how to loop through array inside object
//   });

// }).catch(function (error){
 
// });




var request = new XMLHttpRequest();
var app = document.getElementById('root');
var container = document.createElement('container')
container.setAttribute('class','container')
app.appendChild(container)



request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {

  var data = JSON.parse(this.response)

  // error code
  
  if(request.status >= 200 && request.status < 400){

    var newArray = [];
    //console.log(data);
    
    data.forEach(movie => {
       // Create a div with a card class
      newArray.push(movie.rt_score);
      // console.log(newArray);
      
       

       const card = document.createElement('div')
       card.setAttribute('class', 'card')

       const h1 = document.createElement('h1');
       h1.textContent = movie.title

       //append rotten tomator rating
       let rottenTomato = document.createElement('span')
       rottenTomato.textContent = movie.rt_score
       //console.log(rottenTomato)
    

       container.appendChild(card)
       card.appendChild(h1)
       card.appendChild(rottenTomato)


    
      // console.log(movie.rt_score);
    })
  } else {
    console.log('error')
  }
   //d3 pie chart
   
  console.log(newArray);
 

var svg = d3.select("svg"),
width   = svg.attr("width"),
height  = svg.attr("height"),
radius  = Math.min(width, height)/2,
g       = svg.append("g").attr("transform","translate(" + width / 2 + "," + height / 2 + ")");
//how to generate a color based on number of array elements
var color = d3.scaleOrdinal(['#dedede']);

var pie = d3.pie();

var arc = d3.arc()
                .innerRadius(0)
                .outerRadius(radius);

var arcs = g.selectAll("arc")
                .data(pie(newArray))
                .enter()
                .append("g")
                .attr("class", "arc")

                arcs.append("path")
                .attr("fill", function(d, i) {
                    return color(i);
                })
                .attr("d", arc);

}

request.send()