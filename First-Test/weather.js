document.getElementsByClassName('aqi')[0].addEventListener("click", function() {
    alert('点击');
    // document.getElementsByClassName('aqi-box')[0].style.display = 'block';
    // if (e.target.className != 'aqi-box' && document.getElementsByClassName('aqi-box')[0].style.display == 'block') {
    //     document.getElementsByClassName('aqi-box')[0].style.display = 'none';
    // }
})

document.getElementsByClassName('text')[0].addEventListener("click", function() {
    document.getElementById('sec-location').style.visibility = 'visialbe';
})