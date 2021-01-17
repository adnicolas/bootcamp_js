var lastName = document.getElementById("lastName");

document.getElementById("name").value = "Mi nombre";
lastName.value = "Mi apellido";
document.getElementById("avatar").src = "img/undraw_male_avatar_323b.png";

function logLastName() {
    console.log("Last name: " + lastName.value);
}
