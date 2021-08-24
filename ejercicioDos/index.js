// 2. Hacer una funcion "revertirOrden" que reciba un array y retorne sus elementos en orden inverso.

const frozen = ["Elsa", "Hans", "Olaf", "Ana", "Kristoff"];
const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"];

const revertirOrden = (array) => {
	return array.reverse();
};

console.log(revertirOrden(moana));
console.log(revertirOrden(frozen));
