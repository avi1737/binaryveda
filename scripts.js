

var fromValue = document.getElementById('fromVal'); //from input value
fromValue.addEventListener('input',convertTemp);   // onchange event listener

var toValue = document.getElementById('toVal'); // to input value


// handle change select option from 
var from = document.getElementById('from');
var From = from.value;
from.addEventListener('change', () => From = from.value);

// handle change select option to
var to = document.getElementById('to');
var To = to.value;
to.addEventListener('change', () => {To = to.value; convertTemp()});

// for showing formula 
var formula = document.getElementById('formula');



// main function for converting temp from one unit to another

function convertTemp(){

	if( From == To ){
		alert('No Need to Convert Into Same unit');
	}

	// from F to any unit
	if(From == 'Fahrenheit' && To == 'Celsius'){
		let val = parseFloat(fromValue.value);
		let ans = (val - 32) / 1.8;
		toValue.value = ans ? ans : '';
		formula.innerHTML = 'Formula : (F - 32) / 1.8';
	}

	if(From == 'Fahrenheit' &&  To == 'Kelvin'){
		let val = parseFloat(fromValue.value);
		let ans = (val - 32)/1.8+273.15;
		toValue.value = ans ? ans : '';
		formula.innerHTML = 'Formula : (F - 32) / 1.8 + 273.15';
	}

	// from c to any unit
	if(From == 'Celsius' &&  To == 'Fahrenheit'){
		let val = parseFloat(fromValue.value);
		let ans = (val * 1.8) + 32;
		toValue.value = ans ? ans : '';
		formula.innerHTML = 'Formula : (C * 1.8) + 32';
	}

    if(From == 'Celsius' &&  To == 'Kelvin'){
		let val = parseFloat(fromValue.value);
		ans = val + 273.15;
		toValue.value = ans ? ans : '';
		formula.innerHTML = 'Formula : C + 273.15';
	}

	//from K to any unit

	if(From == 'Kelvin' &&  To == 'Fahrenheit'){
		let val = parseFloat(fromValue.value);
		ans = (val -273.15)*1.8 + 32;
		toValue.value = ans ? ans : '';
		formula.innerHTML = 'Formula : (K - 273.15) * 1.8 + 32';
	}

    if(From == 'Kelvin' &&  To == 'Celsius'){
		let val = parseFloat(fromValue.value);
		ans = val - 273.15;
		toValue.value = ans ? ans : '';
		formula.innerHTML = 'Formula : (K - 273.15) * 1.8 + 32';
	}

	
}











