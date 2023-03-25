function fetchData() {
    fetch('../src/data/testimonialsData.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      appendData(data);
      })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
    })
}

function appendData(data) {
  console.log(data.Data.length);
  var dataToP = ""
  var count = 0
  for (var i = 0; i < data.Data.length; i++) {
    if(count == 3){
      count = 1;
    }
    else{
      count++;
    }
    dataToP += '<div class=\"col\">'
    dataToP += '<div class=\"testimonial delay-0'+ count +'\">'
    dataToP += '<img src=' + data.Data[i].avatar + ' alt="Avatar" >'
    dataToP += '<div class=\"name\">' + data.Data[i].name + '</div>'
    dataToP += '<div class=\"stars\">'
    dataToP += '<i class=\"fas fa-star\"></i>'.repeat(data.Data[i].stars)
    dataToP += '</div>'
    dataToP += '<p>' + data.Data[i].info + '</p>'
    dataToP += '</div></div>'
  }
  document.getElementById("send_data").innerHTML += dataToP;
}

window.onload = function(){
    fetchData();
}

