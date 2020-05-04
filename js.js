const sliderKnob = document.getElementById('slider-knob');




sliderKnob.addEventListener('mousedown', function () {
  let userX = event.clientX;
  console.log(userX);
  sliderKnob.addEventListener('mousemove', function () {
    let newUserX = event.clientX;
    console.log(newUserX);
    let distance = (newUserX - userX);
    console.log(distance)

    sliderKnob.style.transform = `translateX(${distance}px)`;
  });
});


