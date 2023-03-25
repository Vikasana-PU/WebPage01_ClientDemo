function fetchData() {
    fetch('../src/data/testimonialsData.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      appendData(data);
      })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('jsonStats').innerHTML = 'Error Loading Data'
    })
}

function appendData(data) {
  console.log(data.Success.length);
  var dataToP = ""
  for (var i = 0; i < data.Success.length; i++) {
    dataToP += '<div class=\"col\">'
    dataToP += '<div class=\"testimonial\">'
    dataToP += '<img src=' + data.Success[i].avatar + ' alt="Avatar" >'
    dataToP += '<div class=\"name\">' + data.Success[i].name + '</div>'
    dataToP += '<div class=\"stars\">'
    dataToP += '<i class=\"fas fa-star\"></i>'.repeat(data.Success[i].stars)
    dataToP += '</div>'
    dataToP += '<p>' + data.Success[i].info + '</p>'
    dataToP += '</div></div>'
  }
  document.getElementById("send_data").innerHTML += dataToP;
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        } 
    });
});

window.onload = function(){ 
    fetchData();
    const hiddenElement = document.querySelectorAll('.hidden');
    hiddenElement.forEach((el)=>observer.observe(el));
}
