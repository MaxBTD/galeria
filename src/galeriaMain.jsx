import "./galeriaMain.css"
import ObrazCell from "./obrazCell";
import s1 from "./img/silly1.webp";
import s2 from "./img/silly2.jfif";
import s3 from "./img/silly3.webp";
import s4 from "./img/silly4.webp";
import s5 from "./img/silly5.gif";
import s6 from "./img/silly6.png";
import s7 from "./img/silly7.jpg";
import s8 from "./img/silly8.webp";

const obrazy = [{nr:1, graf:s1, nazwa:"The Guardian Of Sacred The Fruit", opis:"A Feline protecting his dinner",cena: 150.00},
                {nr:2, graf:s2, nazwa:"The Tongue Abomination", opis:"Smug Feline taunting his next meal",cena: 250.00},
                {nr:3, graf:s3, nazwa:"9 Life Stare", opis:"Shy Feline considering his next move",cena: 100.00},
                {nr:4, graf:s4, nazwa:"Distraught at Sight", opis:"Terrified Feline observing his imminent fate",cena: 500.00},
                {nr:5, graf:s5, nazwa:":|", opis:":|",cena: 1595.00},
                {nr:6, graf:s6, nazwa:"Catta Lisa", opis:"Beautiful ultra realistic painting of Catta Lisa",cena: 1.0},
                {nr:7, graf:s7, nazwa:"Day Of The Hunt", opis:"A hopeless Feline realising its fate",cena: 125.00},
                {nr:8, graf:s8, nazwa:"Beauty Of The World", opis:"A happy Feline enjoying all the good in the wrold",cena: 600.00}
            ];

function GaleriaMain(){
    return(
        <div id="galeriaMain">
                {obrazy.map((o) => <ObrazCell obraz={o}/>)}
        </div>
    );
}

export default GaleriaMain;