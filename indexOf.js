var indexOf = function(source, target) {
	if(source === '') return -1;
	if(target === '') return 0;

	for(let i = 0; i <= source.length - target.length; i++) {
		var k = i;
		for(var j = 0; j < target.length; j++) {
			if (source[k]===target[j]) {
				k++;
			}
			else break;
		}
		if (j === target.length) return i;
	}
	return -1;
}