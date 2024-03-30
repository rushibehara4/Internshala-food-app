import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const InitialBreakfastMenu = () => {
  const menuItems = [
    {
      name: "Paratha",
      description:
        "Flaky, layered flatbread usually stuffed with vegetables (such as potatoes, cauliflower, or paneer) or served plain with butter or ghee.",
      price: "2 pices - 40 RS",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKpjKYYd6eemyXfbT4toJNlsHFD3aZfc1pmhAqj0YDXIQC6aeOv3UifGzazNac1UvERg&usqp=CAU",
    },
    {
      name: "Dosa",
      description:
        "Thin, crispy crepe made from fermented rice and lentil batter, often served with sambar (a lentil-based vegetable stew) and coconut chutney.",
      price: "2 pices - 60 RS",
      image:
        "https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22925.jpg",
    },
    {
      name: "Idli",
      description:
        "Soft, fluffy steamed rice cakes made from fermented rice and lentil batter, typically served with sambar and coconut chutney.",
      price: "3 piece - 20 RS",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9E1UVK5yXtrjHQPXdIqHexLGl70Ha1gRdA&usqp=CAU",
    },
    {
      name: "Upma",
      description:
        "Savory porridge made from semolina (cream of wheat) cooked with spices, vegetables, and sometimes peanuts or cashews.",
      price: "40 Rs",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-K3J2SFfkAm4HsDeNi_spcFkGB3u49Dn7A&usqp=CAU",
    },
    {
      name: "Poha",
      description:
        "Flattened rice flakes cooked with onions, potatoes, peanuts, and spices, often garnished with fresh cilantro and served with lemon wedges.",
      price: "40 Rs",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5YoBGPNgd9fSniYfxOGsxL0u4kNV_QVMNQ&usqp=CAU",
    },
    {
      name: "Chole Bhature",
      description:
        "Spicy chickpea curry (chole) served with deep-fried bread (bhature), usually accompanied by pickles or onions.",
      price: "30 RS",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThDn1KrrYA06w-2QG8-sV6zDOOpZ8-xCrMHA&usqp=CAU",
    },
    {
      name: "Poori",
      description:
        "Deep-fried puffed bread made from whole wheat flour, typically served with potato curry (aloo sabzi) or chickpea curry (chole).",
      price: "2-piece - 30 RS",
      image:
        "https://img.freepik.com/premium-photo/poori-masala-curry-aloo-sabzi-puri_466689-77529.jpg",
    },
    {
      name: "Medu Vada",
      description:
        "Savory, crispy deep-fried lentil fritters, often served with sambar and coconut chutney.",
      price: "3 - 30RS",
      image:
        "https://img.freepik.com/premium-photo/sambar-vada-medu-vada-popular-south-indian-food-served-with-green-red-coconut-chutney-moody-background-selective-focus_466689-59647.jpg",
    },
    {
      name: "Masala Omelette",
      description:
        "Omelette cooked with onions, tomatoes, green chilies, and spices, served with toast or pav (bread rolls).",
      price: "1 - 25RS",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVEDft1JYZEGFOjUkHycd7FTz237E2JY9mQ&usqp=CAU",
    },
    {
      name: "Uttapam",
      description:
        "Thick, savory pancake made from fermented rice and lentil batter, topped with onions, tomatoes, green chilies, and cilantro.",
      price: "2 - 40RS",
      image:
        "https://img.freepik.com/premium-photo/south-indian-food-uttapam-ooththappam-uthappa-is-dosa-like-dish-made-by-cooking-ingredients-batter-served-with-coconut-chutney-green-chutney-sambar_466689-64029.jpg",
    },
    {
      name: "Methi Thepla",
      description:
        "Gujarati flatbread made from whole wheat flour, fenugreek leaves (methi), and spices, usually served with yogurt or pickles.",
      price: "2 - 30RS",
      image:
        "https://img.freepik.com/premium-photo/whole-wheat-flour-oil-spices-go-into-making-methi-thepla-gujarati-flatbread-similar-paratha_1043470-7540.jpg",
    },
    {
      name: "Rava Upma",
      description:
        "Similar to regular upma but made with semolina (cream of wheat) instead of coarse semolina, offering a smoother texture.",
      price: "40RS",
      image:
        "https://img.freepik.com/premium-photo/rava-upma-uppuma-south-indian-breakfast-served-bowl-selective-focus_466689-54238.jpg",
    },
    {
      name: "Aloo Paratha",
      description:
        "Paratha stuffed with spiced mashed potatoes, served with yogurt, pickle, or butter.",
      price: "2 - 60 RS",
      image:
        "https://img.freepik.com/free-photo/delicious-assortment-traditional-roti_23-2149033985.jpg",
    },
    {
      name: "Mung Bean Dosa (Pesarattu)",
      description:
        "Crepe made from ground mung beans and rice batter, typically served with ginger chutney or coconut chutney.",
      price: "2 - 60RS",
      image:
        "https://www.jeyashriskitchen.com/wp-content/uploads/2012/12/pesarattu-recipe.jpg",
    },
    {
      name: "Samosa",
      description:
        "Triangular pastry filled with spiced potatoes, peas, and sometimes lentils, usually served with chutney.",
      price: "30RS",
      image:
        "https://img.freepik.com/premium-photo/vegetarian-traditional-street-food-india_57665-7879.jpg",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="initial-breakfast-menu">
      <div className="breakfast-search-continaer">
        <h2>Breakfast Menu</h2>
        <div className="menu-links">
        <Link className="links-header" to="/menubreakfast">Breakfast</Link>
          <Link className="links-header" to="/menulunch">Lunch</Link>
          <Link className="links-header" to="/menusnack">Snacks</Link>
          <Link className="links-header" to="/menudinner">Dinner</Link>
          <Link className="links-header" to="/menumoctails">Moctails</Link>
          <Link className="links-header" to="/">Home</Link>
        </div>
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="breakfast-search-input"
        />
      </div>
      <div className="initial-breakfast-items">
        {filteredMenuItems.map((item, index) => (
          <div className="initial-breakfast-item" key={index}>
            <img src={item.image} alt={item.name} width={200} />
            <div className="initial-breakfast-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="breakfast-button-container">
                <p>{item.price}</p>
                <button className="breakfast-button">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitialBreakfastMenu;
