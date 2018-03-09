function desactivarF5() {
	document.onkeydown = function(e){
		var tecla = (e.keyCode ? e.keyCode : e.which)
		if (tecla == 116) {
			return false
		}
	}
}
