function update() {
	if (directionToggleEl.checked){
		dirMod=-1
		if(num<=0){
			dirMod=0
		}
	} else {
		dirMod=1
	}
	if (window.innerHeight > window.innerWidth) {
		size = window.innerWidth;
	} else {
		size = window.innerHeight;
	}
	mult = size * 0.45;
	c.width = size;
	c.height = size;

	draw();
	if (morphToggleEl.checked){
		if (pauseToggleEl.checked) {
			if (Math.floor(num * 100)/100 == Math.floor(num) && pause < 50) {
				pause += 1;
			} else {
				pause = 0;
				fakeNum ++
				num += 0.01*dirMod;
			}
		} else {
			num += 0.01*dirMod;
			fakeNum ++
		}
	}
	if (shapeToggleEl.checked){
		sinMult += 0.01
	}
	requestAnimationFrame(update);
}
