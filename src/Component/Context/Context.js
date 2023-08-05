import React, { createContext, useState } from 'react';
import Card1 from "../Pages/Home/Assets/Card1.png";
import Card2 from "../Pages/Home/Assets/Card2.png";
import Card3 from "../Pages/Home/Assets/Card3.png";
import Card4 from "../Pages/Home/Assets/Card4.png";
import Card5 from "../Pages/Home/Assets/Card5.png";
import Card6 from "../Pages/Home/Assets/Card6.png";
import Card7 from "../Pages/Home/Assets/Card7.png";
import Card8 from "../Pages/Home/Assets/Card8.png";
export const ContextAbdulazizbek = createContext();
function Context({ children }) {
    const [cardData, setCardData] = useState([
        {
            id: 1,
            name1: "Syltherine",
            name2: "Stylish cafe chair",
            name3: "Rp 2.500.000",
            name4: "Rp 3.500.000",
            img: Card1,
            like: false
        },
        {
            id: 2,
            name1: "Liviosa",
            name2: "Stylish cafe chair",
            name3: "Rp 2.500.000",
            img: Card7,
            like: false
        },
        {
            id: 3,
            name1: "Lolito",
            name2: "Luxury big sofa",
            name3: "Rp 7.000.000",
            name4: "Rp 14.000.000",
            img: Card2,
            like: false
        },
        {
            id: 4,
            name1: "Respira",
            name2: "Outdoor bar table and stool",
            name3: "Rp 500.000",
            img: Card3,
            like: false
        },
        {
            id: 5,
            name1: "Grifo",
            name2: "Night lamp",
            name3: "Rp 1.500.000",
            img: Card4,
            like: false
        },
        {
            id: 6,
            name1: "Muggo",
            name2: "Small mug",
            name3: "Rp 150.000",
            img: Card5,
            like: false
        },
        {
            id: 7,
            name1: "Pingky",
            name2: "Cute bed set",
            name3: "Rp 7.000.000",
            name4: "Rp 14.000.000",
            img: Card6,
            like: false
        },
        {
            id: 8,
            name1: "Potty",
            name2: "Minimalist flower pot",
            name3: "Rp 500.000",
            img: Card8,
            like: false
        },
    ])
    const handleLike = (id) => {
        setCardData(
            cardData.map((item) =>
                item.id === id ? { ...item, like: !item.like } : item
            )
        );
    };
    const handleCart = (argument) => {
        if (cardData.filter((item) => item.id === argument.id).length === 0) {
          setCardData([...cardData, argument]);
        } else {
          alert("bu mahsulot qo'shilgan");
        }
      };
    return (
        <ContextAbdulazizbek.Provider value={{ cardData, setCardData, handleLike, handleCart,  }}>
            {children}
        </ContextAbdulazizbek.Provider>
    )
}
export default Context;