function fetchData() {
    fetch('../src/img/galleryData.json')
    .then((res) => res.json())
    .then((data) => {
      appendData(data);
      })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('jsonStats').innerHTML = 'Error Loading Data'
    })
}

function appendData(data) {
    console.log(data.Data);
    var dataToP = ""
    var count = 0
    for (let i = 0; i < data.Data.length; i++) {
      if(count == 3){
        count = 1;
      }
      else{
        count++;
      }
        dataToP += '<div class=\"gal_img delay-0'+ count +'\"><img src=\"https://vikasana-pu.github.io/WebPage01_ClientDemo/src/img/gallery_img/' + data.Data[i] + '\" alt=\"galleryIMG\"></div>'
    }
    document.getElementById("all_pic").innerHTML += dataToP;
}

window.onload = function(){
    fetchData();
}

