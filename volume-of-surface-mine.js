function wypisz()
		{
			var wysSkarpy = Number(document.getElementById("wysSkarpy").value);
			var szerSkarpy = Number(document.getElementById("szerSkarpy").value);
			var ddkn = Number(document.getElementById("ddkn").value);
			var sdkn = Number(document.getElementById("sdkn").value);
			
			var objPomar;
			var objNieb;
			var ObjZiel;
			var ObjCzer;
			var objC;
			
			objPomar = ddkn * sdkn * wysSkarpy;
			
			objNieb = ((0.5 * wysSkarpy * szerSkarpy) * ddkn) * 2;
			
			objZiel = ((0.5 * wysSkarpy * szerSkarpy) * sdkn) * 2;
			
			objCzer = (szerSkarpy * szerSkarpy) * wysSkarpy * (1/3) * 4;
			
			objC = objPomar + objNieb + objZiel + objCzer;

			document.getElementById('objC').innerHTML = "Objetość wyrobiska jest równa : " + objC + " m<sup>3</sup>.";
		}
