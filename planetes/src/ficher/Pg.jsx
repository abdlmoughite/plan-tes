    import React, { useState } from "react";
    import "../style1.css";
    import S from "./solaire.png";
    import M from "./Mercure.png";
    import V from "./Venus In Pisces Is Great News For Your Love Life.png";
    import T from "./Terre Globe Planète - Photo gratuite sur Pixabay.png";
    import MA from "./Mars Is In Leo, So Go Ahead & Send That Text.png";
    import P from "./Planet Jupiter Isolated Elements of this Image Furnished by NASA Stock Illustration - Illustration of background, universe_ 108865271.png";
    import SA from "./Saturn.png";
    import TT from "./téléchargement.png";
    import N from "./Neptune _ Planet Series 2018 by Patricia Tokarz _ Redbubble.png";

    const Pg = () => {
    const info = [
        {
        id: 1,
        img : M,
        name: "Mercure",
        Vitesse_orbitale_moyenne :'nviron 47.87 km/s',
        Masse: "3.3011×10^23 kg",
        Diamètre: "4,880 km",
        Rayon: "2,440 km",
        Distance_moyenne_du_Soleil: "57.91 millions de km",
        Période_orbitale: "88 jours terrestres",
        Température_de_surface: "-173 °C à 427 °C",
        Nombre_de_lunes: "0",
        },
        {
        id: 2,
        img : V,
        name: "Vénus",
        Vitesse_orbitale_moyenne :'environ 35.02 km/s',
        Masse: "4.8675×10^24 kg",
        Diamètre: "12,104 km",
        Rayon: "6,052 km",
        Distance_moyenne_du_Soleil: "108.21 millions de km",
        Période_orbitale: "225 jours terrestres",
        Température_de_surface: "464 °C",
        Nombre_de_lunes: "0",
        },
        {
        id: 3,
        img : T,
        name: "Terre",
        Vitesse_orbitale_moyenne :'environ 29.78 km/s',
        Masse: "5.9723×10^24 kg",
        Diamètre: "12,742 km",
        Rayon: "6,371 km",
        Distance_moyenne_du_Soleil: "149.60 millions de km",
        Période_orbitale: "365.25 jours terrestres",
        Température_de_surface: "-88 °C à 58 °C",
        Nombre_de_lunes: "1",
        },
        {
        id: 4,
        img : MA,
        name: "Mars",
        Vitesse_orbitale_moyenne :'environ 24.07 km/s',
        Masse: "6.4171×10^23 kg",
        Diamètre: "6,779 km",
        Rayon: "3,390 km",
        Distance_moyenne_du_Soleil: "227.94 millions de km",
        Période_orbitale: "687 jours terrestres",
        Température_de_surface: "-125 °C à 20 °C",
        Nombre_de_lunes: "2",
        },
        {
        id: 5,
        img : P,
        name: "Jupiter",
        Vitesse_orbitale_moyenne :'environ 13.07 km/s',
        Masse: "1.8982×10^27 kg",
        Diamètre: "139,820 km",
        Rayon: "69,911 km",
        Distance_moyenne_du_Soleil: "778.34 millions de km",
        Période_orbitale: "11.86 ans terrestres",
        Température_de_surface: "-145 °C",
        Nombre_de_lunes: "79",
        },
        {
        id: 6,
        img : SA,
        name: "Saturne",
        Vitesse_orbitale_moyenne :'environ 9.69 km/s',
        Masse: "5.6834×10^26 kg",
        Diamètre: "116,460 km",
        Rayon: "58,232 km",
        Distance_moyenne_du_Soleil: "1.43 milliards de km",
        Période_orbitale: "29.45 ans terrestres",
        Température_de_surface: "-178 °C",
        Nombre_de_lunes: "83",
        },
        {
        id: 7,
        img : TT,
        name: "Uranus",
        Vitesse_orbitale_moyenne :'environ 6.81 km/s',
        Masse: "8.6810×10^25 kg",
        Diamètre: "50,724 km",
        Rayon: "25,362 km",
        Distance_moyenne_du_Soleil: "2.87 milliards de km",
        Période_orbitale: "84 ans terrestres",
        Température_de_surface: "-224 °C",
        Nombre_de_lunes: "27",
        },
        {
        id: 8,
        img :N,
        name: "Neptune",
        Vitesse_orbitale_moyenne :'environ 5.43 km/s',
        Masse: "1.02413×10^26 kg",
        Diamètre: "49,244 km",
        Rayon: "24,622 km",
        Distance_moyenne_du_Soleil: "4.50 milliards de km",
        Période_orbitale: "164.8 ans terrestres",
        Température_de_surface: "-214 °C",
        Nombre_de_lunes: "14",
        },
    ];

    const test = (a) => {
        setnum(a);
    };
    const [num, setnum] = useState(0);

    return (
        <>
        <img onClick={() => test(8)} className="N Tail" src={N} alt="" />
        <br />
        <img onClick={() => test(7)} className="TT Tail" src={TT} alt="" />
        <br />
        <img onClick={() => test(6)} className="SA Tail" src={SA} alt="" />
        <br />
        <img onClick={() => test(5)} className="P Tail" src={P} alt="" />
        <br />
        <img onClick={() => test(4)} className="MA Tail" src={MA} alt="" />
        <br />
        <img onClick={() => test(3)} className="T Tail" src={T} alt="" />
        <br />
        <img onClick={() => test(2)} className="V Tail" src={V} alt="" />
        <br />
        <img onClick={() => test(1)} className="M Tail" src={M} alt="" />
        <br />
        <img  className="S " src={S} alt="" />
        <br />

        {num != 0 && (
            <div className="info">
            <button onClick={() => setnum(0)}>X</button>
            <div className="tous">
                <div className="content">
                <h2>{info[num-1].name}</h2>
                <p>
                    <strong>Vitesse orbitale moyenne:</strong> {info[num-1].Vitesse_orbitale_moyenne}
                </p>
                <p>
                    <strong>Distance moyenne du Soleil:</strong>  {info[num-1].Distance_moyenne_du_Soleil}
                    km
                </p>
                <p>
                    <strong>Masse:</strong> {info[num-1].Masse}
                </p>
                <p>
                    <strong>Diamètre:</strong> {info[num-1].Diamètre}
                </p>
                <p>
                    <strong>Rayon:</strong> {info[num-1].Rayon}
                </p>
                <p>
                    <strong>Période orbitale:</strong> {info[num-1].Période_orbitale}
                </p>
                <p>
                    <strong>Température de surface:</strong> {info[num-1].Température_de_surface}
                </p>
                <p>
                    <strong>Nombre de lunes:</strong> {info[num-1].Nombre_de_lunes}
                </p>
                </div>
                <img className="image" src={info[num-1].img} alt="" />
            </div>
            </div>
        )}
        </>
    );
    };

    export default Pg;
