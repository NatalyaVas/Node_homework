// const colors = require('colors');
import colors from 'colors'; //для использования es6 module сделать запись в package.json

const leftNum = +(process.argv[2]);
const rightNum = +(process.argv[3]);

// if(isNan(leftNum) || isNan(rightNum)){
//     console.log(colors.red('Введены некорректные параметры'));
// }

for (let i = leftNum; i <= rightNum; i++) {
	if (leftNum % i === 0 && rightNum % i === 0) {
		// break;
		console.log('Ошибка. Введите числа от 2');
	} else {
		console.log(colors.red(i));
		console.log(colors.green(i));
		console.log(colors.yellow(i));
	}
}