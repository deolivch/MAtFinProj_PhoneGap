function calcular(){
	var valor1 = parseFloat(document.getElementById('soma').value);
	var valor2 = parseFloat(document.getElementById('razao').value);
	var valor3 = parseFloat(document.getElementById('taxa').value);
	var valor4 = parseFloat(document.getElementById('tempo').value);
	
	
	//document.getElementById('msg').value = (Math.pow((1 + valor3), valor4)-1)
	
		if(document.getElementById('rad_1').checked != false){
			document.getElementById('resultadoFinal').value = (valor2 * ((Math.pow((1 + valor3), valor4)-1) / (valor3)));
		}
		if(document.getElementById('rad_2').value == 0 ){							
				document.getElementById('resultadoFinal').value = (valor1 * ((valor3)/((Math.pow((1 + valor3), valor4)-1))));
			}
		if(document.getElementById('rad_3').checked != false )	{
			//document.getElementById('resultadoFinal').value = (valor2 * ((Math.pow((1 + valor3), valor4)-1) / ((Math.pow((1 + valor3), valor4)* valor3))));
		}
	}
	
	
	function limpar()
	{
		if( document.getElementById("rad_3").checked != true) {
		document.getElementById("rad_3").checked = true;
		}
		else if (document.getElementById("rad_3").checked != false){
			document.getElementById("rad_3").checked = false;
		}
	}