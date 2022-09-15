'use strict'
let login = 'admin';
let password = 'TheMaster';
if (login == 'admin') {
	console.log('Admin is here. Checking password');
	if (password == 'TheMaster') {
		console.log('Successful!');
	} else {
		console.log('Wrong password');
	}
} else {
	console.log('I dont know');
}
console.log('\n');

switch(login) {
	case 'admin': {
		console.log('Admin is here. Checking password');
		switch(password) {
			case 'TheMaster': {
				console.log('Successful!'); break;
			}
			default: {
				console.log('Wrong password');
			}
		}
		break;
	}
	default: {
		console.log('I dont know');
	}
}