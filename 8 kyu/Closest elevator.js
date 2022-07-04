const elevator = (left, right, call) =>
	left === right
		? 'right'
		: Math.abs(call - left) < Math.abs(call - right)
		? 'left'
		: 'right'
