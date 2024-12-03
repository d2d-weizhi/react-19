interface Square {
	kind: 'square';
	size: Number;
}

interface Rectangle {
	kind: 'rectangle';
	width: Number;
	height: Number;
}

interface Circle {
	kind: 'circle';
	radius: Number;
}

function area (s: Square | Rectangle | Circle): Number {
	switch (s.kind) {
		case 'square': return s.size * s.size;
		case 'rectangle': return s.height * s.width;
		case 'circle': return Math.PI * s.radius ** 2;
	}
}