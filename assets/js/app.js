const navElement = document.querySelector("nav");
const footerElement = document.querySelector("footer");

const navContent = `
<a href="./index.html" ><img src="./assets/img/LOGO.svg" alt="Sejr og Davidsens logo"></a>
        <div class="navPoints">
            <a href="./dyrepension">Dyrepension <i class="fa-solid fa-chevron-down" style="color: #129ca6;"></i></a>
            <a href="./adoption">Adoption <i class="fa-solid fa-chevron-down" style="color: #129ca6;"></i></a>
            <a href="./traening">Træning <i class="fa-solid fa-chevron-down" style="color: #129ca6;"></i></a>
            <a href="./omOs">Sejr og Davidsen <i class="fa-solid fa-chevron-down" style="color: #129ca6;"></i></a>
            <a href="./kontakt">Kontakt</a>
            <a href="#" class="btnYellow">Donér</a>
        </div>
`;
// set innerHTML to navContent
navElement.innerHTML = navContent;

const footerContent = `
<div class="container flexClm">
            <a href="./index.html" ><img src="./assets/img/LOGO.svg" alt="Sejr og Davidsens logo" class="logo"></a>
            <div class="soMe">
                <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </div>
            <a href="#" class="btnYellow">Støt dyrene og donér</a>
        </div>
        <div class="container">
            <div class="containerDetails flexClm">
                <a href="#" class="btnBlack"><i class="fa-solid fa-location-dot"></i> Gadevej 123</a>
                <a href="#" class="btnBlack"><i class="fa-solid fa-envelope"></i> email@email.com</a>
                <a href="#" class="btnBlack"><i class="fa-solid fa-phone"></i> +45 20 20 20 20</a>
            </div>
        </div>
        <div class="container">
            <ul>
                <a href="./omOs.html"><li>Om os</li></a>
                <a href="#"><li>Kontakt</li></a>
                <a href="#"><li>FAQ</li></a>
            </ul>
            <ul>
                <a href="#"><li>Ledige stillinger</li></a>
                <a href="#"><li>Bliv frivillig</li></a>
                <a href="#"><li>Praktik</li></a>
            </ul>
            <ul>
                <a href="#"><li>Ledelse & bestyrelse</li></a>
                <a href="#"><li>Værdigrundlag</li></a>
                <a href="#"><li>Vedtægter</li></a>
                <a href="#"><li>Cookiepolitik</li></a>
                <a href="#"><li>Privatlivspolitik</li></a>
            </ul>
        </div>
        <div class="container">
            <div class="flexContainer">
                <h2>Hold dig opdateret</h2>
                <p>Tilmed dig vores nyhedsbrev, og få opdateringer omkring nye dyr, succeshistorier og events.</p>
                <a href="#" class="btnYellow">Tilmeld nyhedsbrev</a>
            </div>
        </div>
`;
footerElement.innerHTML = footerContent;