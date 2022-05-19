'use strict';

// const colors = require('colors');
import colors from 'colors'; //для использования es6 module сделать запись в package.json

const leftNum = +(process.argv[2]);
const rightNum = +(process.argv[3]);

function noSimpleNum () {
	if(isNaN(leftNum) || isNaN(rightNum)){
		console.log(colors.red('Введенные данные должны быть вида: 0 100'));
		return true;
	}
	if(leftNum > rightNum) {
		console.log(colors.red('Ошибка. Первое число должно быть меньше второго.'));
		return true;
	}
	if(!leftNum || 0 === leftNum.length || !rightNum || 0 === rightNum.length) {
		console.log(colors.red('Данные отсутствуют. Введите два числа.'));
		return true;
	}
	return false;
}

function createColors(leftNum,rightNum) {
	if (noSimpleNum())
		return false;
	let color = 'green';
	for(let i = leftNum; i <= rightNum; i++) {
		if (i < 2) {
			continue;
		}
		switch (color) {
			case 'green':
				console.log(colors.green(i));
				color = 'yellow';
				break;
			case 'yellow':
				console.log(colors.yellow(i));
				color = 'red';
				break;
			case 'red':
				console.log(colors.red(i));
				color = 'green';
				break;
		
		}
	}
}
// for(let i = leftNum; i <= rightNum; i++) {
// 		if (leftNum < 2) {
// 			i = 2;
// 		}
// 		switch (color) {
// 			case 'green':
// 				console.log(colors.green(i));
// 				color = 'yellow';
// 				break;
// 			case 'yellow':
// 				console.log(colors.yellow(i));
// 				color = 'red';
// 				break;
// 			case 'red':
// 				console.log(colors.red(i));
// 				color = 'green';
// 				break;
// 		}
// 	};
// }

createColors(leftNum, rightNum);