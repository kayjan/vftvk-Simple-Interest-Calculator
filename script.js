for (var i = 1; i <= 15; i++) {
    var el = document.createElement("option");
    el.value = i;
    el.innerHTML = i;
    document.getElementById("years").appendChild(el);
}
document.getElementById("years").value = "3"

function compute()
{
    p = document.getElementById("principal").value;
	if (p <= 0) {
		alert("Please input a positive number");
		document.getElementById("principal").focus();
	}
	rate = document.getElementById("rate").value;
	year = document.getElementById("years").value;
	var year2 = new Date().getFullYear() + parseInt(year);
	var value = p * (1 + rate / 100 * year) - p;
	var total = value + parseInt(p);
	result = "If you deposit <mark>" + p + "</mark>, at an interest rate of <mark>" + rate + "%</mark>.<br>You will receive an amount of <mark>" + value + "</mark>, in the year <mark>" + year2 + "</mark>.<br>This makes the total sum <mark>" + total + "</mark>.";
	document.getElementById("result").innerHTML = result;
}
