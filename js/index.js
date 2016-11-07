function calcular(){
	var valor1 = parseFloat(document.getElementById('soma').value, 10);
	var valor2 = parseFloat(document.getElementById('razao').value, 10);
	var valor3 = parseFloat(document.getElementById('taxa').value, 10);
	var valor4 = parseFloat(document.getElementById('tempo').value, 10);
	
	document.getElementById('msg').value = (Math.pow((1 + valor3), valor4)-1)
	
	document.getElementById('resultadoFinal').value = (valor2 * ((Math.pow((1 + valor3), valor4)-1) / ((Math.pow((1 + valor3), valor4)* valor3))));
	}