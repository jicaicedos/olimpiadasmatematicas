function desactivar() {
    if(window.event && window.event.keyCode == 505){
    	return false;
    }

	document.onkeydown = function(e){
		var tecla = (e.keyCode ? e.keyCode : e.which)
		if (tecla == 116) {
			return false
		}
	}

}
