var compressString = function(str) {
	var res = '';
	var length = str.length;
	if (length === 0) return '';
	if (length === 1) return (str + 1);
	res += str[0];
	var currentCount = 1;
	for (var i = 1; i < length; i++) {
		if (str[i] === str[i-1]) currentCount++;
		else {
			res += currentCount;
			res += str[i];
			currentCount = 1;
		}
	}
	res += currentCount;

	return res;
}

compressString('aabcccccaaa');