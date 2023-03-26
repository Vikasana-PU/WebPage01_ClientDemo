function latest() {
    fetch('./src/script/other_data.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      appendData(data);
      })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
    })
}

function fetchBanner() {
  fetch('./src/script/otherIMG.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    appendBanner(data);
    })
  .catch((error) => {
    console.log(`Error Fetching data : ${error}`)
  })
}

function appendData(data) {
  var dataToP = ""
  dataToP += '<h3>' + data.notice + '</h3>'
  document.getElementById("txtscroll").innerHTML += dataToP;
}

function appendBanner(data) {
  console.log(data.banner.length);
  var dataToP = ""
  for (var i = 0; i < data.banner.length; i++) {
    dataToP += '<div class="mySlides fade"><img src=\"./src/img/' + data.banner[i] + '\" style="width:100%"></div>'
  }
  document.getElementById("banner").innerHTML += dataToP;
}

function animate(obj, initVal, lastVal, duration) {
  let startTime = null;
  let currentTime = Date.now();
  const step = (currentTime ) => {
      if (!startTime) {
          startTime = currentTime ;
      }
      const progress = Math.min((currentTime - startTime)/ duration, 1);
      obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
      if (progress < 1) {
          window.requestAnimationFrame(step);
      } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
  };
  //start animating
  window.requestAnimationFrame(step);
}

window.onload = function(){
  fetchBanner();
  latest();
  let text1 = document.getElementById('0101');
    let text2 = document.getElementById('0102');
    let text3 = document.getElementById('0103');
    let text4 = document.getElementById('0104');
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            console.log(entry)
            if(entry.isIntersecting){
                animate(text1, 0, 240, 500);
                animate(text2, 0, 12, 500);
                animate(text3, 0, 225, 500);
                animate(text4, 0, 8, 500);
            }
        });
    });
    const hiddenElement = document.querySelectorAll('.col-sm');
    hiddenElement.forEach((el)=>observer.observe(el));
}