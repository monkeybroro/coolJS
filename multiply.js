// str1 and str2 are strings, return the multiply of the two
// multiply('200', '5') = '1000'

var multiply = function(str1, str2) {
	if (typeof(str1)!='string' || typeof(str2)!='string') return '0';
	if (str1 === '' || str2 === '') return '0';
	var arr = str1.split('').map(item => parseFloat(item));
	var res = '';
	var carry = 0;
	for(let i = arr.length - 1; i >= 0; i--) {
		var temp = arr[i] * parseFloat(str2);
		if (i != 0) {
			var one = temp % 10;
			res = (one + carry) + res;
			carry = (temp >= 10) ? temp / 10 : 0;
		}
		else res = (temp + carry) + res;
		
	}
	return res;
}