function Node(value) {
	this.value = value;
	this.next = null;
}

function LinkedList() {
	this.head = null;
	
	this.add = function(value) {
		var node = new Node(value);
		node.next = this.head;
		this.head = node;
	}

	this.print = function() {
		var current = this.head;
		var res = '';
		while (current) {
			res += current.value;
			if (current.next) res += '->';
			current = current.next;
		}
		console.log(res);
	}
}

