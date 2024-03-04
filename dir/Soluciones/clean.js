import { ovejas } from "../data.js";
const toLowerCase = (text) => text.toLowerCase();
const filtrar = (array, callback) => array.filter(item => callback(item));
const isAllConditionsValid = (...conditions) => {
    return (text) => conditions.every((condition) => condition(text));
};
const validColor = 'rojo';
const hasLetters = ['a', 'n'];
const isValidColor = ({ color }) => color === validColor;
const hasAllLetters = (letters) => ({ name }) => letters.every(letter => toLowerCase(name).includes(letter));
const ovejasValidas = filtrar(ovejas, isAllConditionsValid(isValidColor, hasAllLetters(hasLetters)));
console.log(ovejasValidas);
