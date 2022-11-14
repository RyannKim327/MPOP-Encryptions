const BINARY = "0x0"
const OCTAL = "0x1"
const DECIMAL = "0x2"
const HEX = "0x3"
const BASE64 = "0x4"
const MORSECODE = "0x5"

const _2x0 = (_0x0) => {
	_0x0 = _0x0.toLowerCase()
	const _0x1 = [
		".-", "-...", "-.-.", "-..", ".",
		"..-.", "--.", "....", "..", ".---",
		"-.-", ".-..", "--", "-.", "---",
		".--.", "--.-", ".-.", "...", "-",
		"..-", "...-", ".--", "-..-", "-.--", "--..", "/",
		"-----", ".----", "..---", "...--", "....-",
		".....", "-....", "--...", "---..", "----."
	]
	const _0x2 = [
		'a', 'b', 'c', 'd', 'e',
		'f', 'g', 'h', 'i', 'j',
		'k', 'l', 'm', 'n', 'o',
		'p', 'q', 'r', 's', 't',
		'u', 'v', 'w', 'x', 'y', 'z', ' ',
		'0', '1', '2', '3', '4',
		'5', '6', '7', '8', '9'
	]
	let _0x3 = ""
	for(let _0x4 = 0; _0x4 < _0x0.length; _0x4++){
		for(let _0x5 = 0; _0x5 < _0x2.length; _0x5++){
			if(_0x2[_0x5] == _0x0[_0x4]){
				_0x3 += _0x1[_0x5] + " "
				break
			}
		}
	}
	return _0x3
}

const _2x1 = (_0x0) => {
	const _0x1 = [
		".-", "-...", "-.-.", "-..", ".",
		"..-.", "--.", "....", "..", ".---",
		"-.-", ".-..", "--", "-.", "---",
		".--.", "--.-", ".-.", "...", "-",
		"..-", "...-", ".--", "-..-", "-.--", "--..", "/",
		"-----", ".----", "..---", "...--", "....-",
		".....", "-....", "--...", "---..", "----."
	]
	const _0x2 = [
		'a', 'b', 'c', 'd', 'e',
		'f', 'g', 'h', 'i', 'j',
		'k', 'l', 'm', 'n', 'o',
		'p', 'q', 'r', 's', 't',
		'u', 'v', 'w', 'x', 'y', 'z', ' ',
		'0', '1', '2', '3', '4',
		'5', '6', '7', '8', '9'
	]
	let _0x3 = ""
	let _0x4 = _0x0.split(" ")
	for(let _0x5 = 0; _0x5 < _0x4.length; _0x5++){
		for(let _0x6 = 0; _0x6 < _0x1.length; _0x6++){
			if(_0x1[_0x6] == _0x4[_0x5]){
				_0x3 += _0x2[_0x6]
				break
			}
		}
	}
	return _0x3
}

const encrypt = (_0x0, _0x1) => {
	let _1x0 = ""
	switch(_0x1){
		case BINARY:
			for(let _1x1 = 0; _1x1 < _0x0.length; _1x1++){
				_1x0 += "0" + _0x0.charCodeAt(_1x1).toString(2) + " "
			}
		break
		case OCTAL:
			for(let _1x1 = 0; _1x1 < _0x0.length; _1x1++){
				_1x0 += _0x0.charCodeAt(_1x1).toString(8) + " "
			}
		break
		case DECIMAL:
			for(let _1x1 = 0; _1x1 < _0x0.length; _1x1++){
				_1x0 += _0x0.charCodeAt(_1x1).toString(10) + " "
			}
		break
		case HEX:
			for(let _1x1 = 0; _1x1 < _0x0.length; _1x1++){
				_1x0 += _0x0.charCodeAt(_1x1).toString(16) + " "
			}
		break
		case BASE64:
			_1x0 = btoa(_0x0)
		break
		case MORSECODE:
			_1x0 = _2x0(_0x0)
		break
		default:
			_1x0 = "Undefined encryption"
	}
	return {
		data: _1x0
	}
}

const decrypt = (_0x0, _0x1) => {
	let _1x0 = ""
	let _1x1 = _0x0.split(" ")
	switch(_0x1){
		case BINARY:
			for(let _1x2 = 0; _1x2 < _1x1.length; _1x2++){
				_1x0 += String.fromCharCode(parseInt(_1x1[_1x2], 2))
			}
		break
		case OCTAL:
			for(let _1x2 = 0; _1x2 < _1x1.length; _1x2++){
				_1x0 += String.fromCharCode(parseInt(_1x1[_1x2], 8))
			}
		break
		case DECIMAL:
			for(let _1x2 = 0; _1x2 < _1x1.length; _1x2++){
				_1x0 += String.fromCharCode(parseInt(_1x1[_1x2], 10))
			}
		break
		case HEX:
			for(let _1x2 = 0; _1x2 < _1x1.length; _1x2++){
				_1x0 += String.fromCharCode(parseInt(_1x1[_1x2], 16))
			}
		break
		case BASE64:
			_1x0 = atob(_0x0)
		break
		case MORSECODE:
			_1x0 = _2x1(_0x0)
		break
		default:
			_1x0 = "Undefined encryption"
	}
	return {
		data: _1x0
	}
}

module.exports = {
	BINARY,
	OCTAL,
	DECIMAL,
	HEX,
	BASE64,
	MORSECODE,
	encrypt,
	decrypt
}