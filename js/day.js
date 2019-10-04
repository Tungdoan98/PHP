function loadform() {
	for(var i=1;i<=31;i++){
		document.getElementById('day').innerHTML +="<option value='"+i+"'>"+i+"</option>";
	}
	for(var i=1;i<=12;i++){
		document.getElementById('month').innerHTML +="<option value='month"+i+"'>"+"Tháng "+i+"</option>";
	}
	for(var i=1900;i<=2019;i++){
		document.getElementById('year').innerHTML +="<option value='year"+i+"'>"+i+"</option>";
	}		
}

function loadDay(){
	var x= document.getElementById("month"); 
	var y= document.getElementById("year").value;
	if(x.value == "month1" || x.value =="month3" || x.value == "month5" || x.value =="month7" || x.value == "month8" || x.value =="month10" || x.value =="month12"){
		document.getElementById("day").innerHTML="";
		for (var i = 1; i <= 31; i++) {
			document.getElementById("day").innerHTML+="<option>"+i+"</option>";
		}
	}
	if(x.value == "month4" || x.value =="month6" || x.value == "month9" || x.value =="month11" ){
		document.getElementById("day").innerHTML="";
		for (var i = 1; i <= 30; i++) {
			document.getElementById("day").innerHTML+="<option>"+i+"</option>";
		}
	}
	if(x.value == "month2"){
		var days;
		document.getElementById("day").innerHTML="";
		if(y%400==0 || (y%4==0 && y%100!=0))
			days=29;
		else
			days=28;
		for (var i = 1; i <= days; i++) {
			document.getElementById("day").innerHTML+="<option>"+i+"</option>";
		}
	}
}