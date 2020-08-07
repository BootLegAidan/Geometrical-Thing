function draw() {
	ctx.clearRect(0, 0, size, size);
	for (i = 0; i < (num); i++) {
		for (j = i; j < (num); j++) {
			var start = ((Math.PI * 2) / (num)) * i;
			var end = ((Math.PI * 2) / (num)) * j;
			ctx.beginPath();
			ctx.moveTo(
				Math.sin(start) * mult + size / 2,
				Math.cos(start) * mult + size / 2
			);
			ctx.lineTo(Math.sin(end) * mult + size / 2, Math.cos(end) * mult + size / 2);
			if (colorToggleEl.checked) {
				ctx.strokeStyle = `hsl(${(360 / num) * j}, 100%, 50%)`;
			} else {
        if (nightModeToggleEl.checked) {
              ctx.strokeStyle = 'white'
        } else {
				      ctx.strokeStyle = "black";
        }
			}
			ctx.stroke();
		}
	}
	points.innerHTML = j + " Points";
  if (nightModeToggleEl.checked){
    bodyEl.style.background = "black"
    points.style.color = 'white'
    reset.style.color = "white"
    reset.style.border = "white 1px solid"
    for (i = 0; i < labels.length; i++){
      labels[i].style.color = 'white'
    }
    root.style.setProperty('--checkbox-main-bg', 'white')
    root.style.setProperty('--checkbox-second-bg', 'black')
  } else {
    bodyEl.style.background = "white"
    points.style.color = "black"
    reset.style.color = "black"
    reset.style.border = "black 1px solid"
    for (i = 0; i < labels.length; i++){
      labels[i].style.color = 'black'
    }
    root.style.setProperty('--checkbox-main-bg', 'black')
    root.style.setProperty('--checkbox-second-bg', 'white')
  }
}
