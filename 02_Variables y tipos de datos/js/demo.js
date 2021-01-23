var hotelReviews = {
    Reconquista: {
        name: 'Hotel Reconquista',
        location: 'Oviedo',
        imageUrl: 'https://static1.elcomercio.es/www/multimedia/201806/06/media/cortadas/hotel-reconquista-oviedo-U4023545416TC--624x385@El%20Comercio-ElComercio.jpg',
        rating: 0,
        anonymous: true
    },
    Zoreda: {
        name: 'Hotel Castillo del Bosque de la Zoreda',
        location: 'Oviedo',
        imageUrl: 'https://content.r9cdn.net/rimg/himg/27/e8/c8/sembo-118262980-600a72ee_z.jpg_resizeMode=FitInside_formatSettings=jpeg(quality-90)-430175.jpg?crop=true&width=500&height=350',
        rating: 0,
        anonymous: true 
    }
}

var selectedHotel = prompt("Indique el hotel que desee reseñar (Reconquista o Zoreda");
var selectedHotelData = hotelReviews[selectedHotel];
selectedHotelData.rating = prompt("Introduzca el nº de estrellas del hotel (de 1 a 5)");
selectedHotelData.anonymous = confirm("¿Desea que la reseña sea anónima?");

var htmlStars = {
    "1": "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    "2": "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    "3": "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    "4": "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    "5": "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>"
}

document.getElementById("name-hotel").innerHTML = selectedHotelData.name;
document.getElementById("location-hotel").innerHTML = selectedHotelData.location;
document.getElementById("img-hotel").src = selectedHotelData.imageUrl;
document.getElementById("rating").innerHTML = htmlStars[selectedHotelData.rating];
document.getElementById("anonymous").checked = selectedHotelData.anonymous;