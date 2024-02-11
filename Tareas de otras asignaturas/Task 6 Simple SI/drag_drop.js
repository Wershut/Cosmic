	//Flag que indica si estamos o no en proceso de arrastrar el ratón
	var estoyArrastrando = false;
	//Variable para almacenar un puntero al objeto que estamos moviendo
	var dobj;
	//Posición del ratón desde donde se ha hecho clic arrastrando
	var desplazaX=-1;
	var desplazaY=-1;

	function arrastrarRaton(e){
		if (estoyArrastrando) {
			dobj.style.left = e.clientX - desplazaX+"px";
			dobj.style.top = e.clientY - desplazaY+"px";
			return false;
		}
	}



function soltarBoton(e) {	
 estoyArrastrando = false;			
//Efecto imán
 var a,b;
 for (i=0;i<sitio.length;i++) //Recorrido por las capas
 {	
   a=sitio[i][0]+parseInt(fondo.style.left)-parseInt(dobj.style.left);
   b=sitio[i][1]+parseInt(fondo.style.top)-parseInt(dobj.style.top);
   if (distancia(a,b)<80) //Margen de error para efecto imán
	{
	 dobj.style.left=sitio[i][0]+parseInt(fondo.style.left)+"px";
	 dobj.style.top=sitio[i][1]+parseInt(fondo.style.top)+"px";
	}
 }
}

	function presionarBoton(e) {
		//Obtenemos el elemento sobre el que se ha presionado el botón del ratón
		var fobj = e.target;
		// Si hemos obtenido un objeto movible...			
		if (fobj.className == "objMovible") {
			// Activamos el flag para indicar que se empieza a arrastrar
			estoyArrastrando = true;
			desplazaX=e.clientX-parseInt(fobj.style.left);
			desplazaY=e.clientY-parseInt(fobj.style.top);
			// Guardamos un puntero al objeto que se está moviendo en la variable global
			dobj = fobj;
			// Devolvemos false para no realizar ninguna acción posterior
			return false;
		}
	}
		
	document.onmousedown = presionarBoton;
	document.onmouseup = soltarBoton;
	document.onmousemove = arrastrarRaton;
	//Desactivamos el botón derecho del ratón
	//document.oncontextmenu=new Function("return false");		

var sitio=new Array();

function distancia(a,b)
{
 return Math.sqrt(a*a+b*b);	
}

function comprueba()
{
 var bien=0;
 var mal=0;
 var a,b;
 for (i=0;i<sitio.length;i++) //Recorrido por las capas
 {	
   a=sitio[i][0]+parseInt(fondo.style.left)-parseInt(document.getElementById("c"+i).style.left);
   b=sitio[i][1]+parseInt(fondo.style.top)-parseInt(document.getElementById("c"+i).style.top);
   if (distancia(a,b)<30) {//Margen de error
    bien++;
    document.getElementById("c"+i).style.backgroundColor="green";
   } 
   else {
   	mal++;
    document.getElementById("c"+i).style.backgroundColor="red";
   }
 }
//alert("Has acertado bien: "+bien+" y mal:"+mal);

}
