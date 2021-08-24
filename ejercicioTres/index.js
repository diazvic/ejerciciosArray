const frozen = ["Elsa", "Hans", "Olaf", "Ana", "Kristoff"];
const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"];

// 3. Hacer una funcion "incluyeNombre" que reciba un array y un string y retorne true si el array incluye al string, o false en caso contrario.

const incluyeNombre = (array, nombre) => {
	if (array.includes(nombre)) {
		return true;
	} else {
		return false;
	}
};

console.log(incluyeNombre(moana, "Ana"));
console.log(incluyeNombre(frozen, "Ana"));
