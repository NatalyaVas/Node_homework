'use strict';

// const colors = require('colors');
import colors from 'colors'; //для использования es6 module сделать запись в package.json

const leftNum = +(process.argv[2]);
const rightNum = +(process.argv[3]);

function noSimpleNum () {
	if(isNaN(leftNum) || isNaN(rightNum)){
		console.log(colors.red('Введенные данные не являются числом'));
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

function createColors(numbers) {
	if (noSimpleNum())
		return false;
	let color = 'green';
	numbers.forEach(number => {
		switch (color) {
			case 'green':
				console.log(colors.green(number));
				color = 'yellow';
				break;
			case 'yellow':
				console.log(colors.yellow(number));
				color = 'red';
				break;
			case 'red':
				console.log(colors.red(number));
				color = 'green';
				break;
		}
	});
}
createColors(leftNum, rightNum)