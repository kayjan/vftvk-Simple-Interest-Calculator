function compute()
{
    p = document.getElementById("principal").value;
	rate = document.getElementById("rate").value;
	year = document.getElementById("years").value;
	var year2 = new Date().getFullYear() + parseInt(year);
	var value = p * (1 + rate / 100 * year) - p;
	result = "If you deposit <mark>" + p + "</mark>,<br>at an interest rate of <mark>" + rate + "%</mark>.<br>You will receive an amount of <mark>" + value + "</mark>,<br>in the year <mark>" + year2 + "</mark>";
	document.getElementById("result").innerHTML = result;
}

function updateTextInput(value) {
	p = document.getElementById("textInput").value;
	p = value;
}