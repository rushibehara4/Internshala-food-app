import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const SnackMenu = () => {
  const menuItems = [
    {
      name: "Samosa",
      description:
        "Triangular pastry filled with spiced potatoes, peas, and sometimes lentils, usually served with chutney.",
      price: "30 RS",
      image: "https://img.freepik.com/premium-photo/veg-samosa-is-crispy-spicy-indian-triangle-shape-snack-which-has-crisp-outer-layer-maida-filling-mashed-potato-peas-spices_466689-72924.jpg",
    },
    {
      name: "Pakora",
      description:
        "Deep-fried fritters made from chickpea flour batter mixed with vegetables like onions, potatoes, or spinach.",
      price: "30 RS",
      image: "https://img.freepik.com/premium-photo/fried-onion-pakora-pyaj-pakoda-also-known-as-crispy-kanda-bhaji-bhajji-bajji-favourite-indian-tea-time-snack-rainy-season-served-with-tomato-ketchup_466689-2255.jpg",
    },
    {
      name: "Bhel Puri",
      description:
        "A savory snack made from puffed rice, chopped vegetables (such as tomatoes, onions, and potatoes), sev (crispy chickpea noodles), and tangy chutneys.",
      price: "50 RS",
      image: "https://img.freepik.com/premium-photo/bhel-puri_57665-3219.jpg",
    },
    {
      name: "Pani Puri/Golgappa",
      description:
        "Hollow crispy puris filled with a mixture of spicy and tangy flavored water (pani), tamarind chutney, chickpeas, potatoes, and spices.",
      price: "40 RS",
      image: "https://img.freepik.com/premium-photo/pani-puri-golgappa-is-popular-indian-chat-menu-selective-focus_466689-25129.jpg",
    },
    {
      name: "Dahi Vada",
      description:
        "Lentil dumplings soaked in creamy yogurt and topped with tamarind chutney, mint chutney, and spices.",
      price: "70 RS",
      image: "https://img.freepik.com/premium-photo/dahi-vada-bhalla-is-type-chaat-originating-from-indian-popular-south-asia_466689-1379.jpg",
    },
    {
      name: "Aloo Tikki",
      description:
        "Spiced potato patties shallow-fried until crispy, often served with chutneys or as a chaat (snack) with chickpeas and yogurt.",
      price: "60 RS",
      image: "https://img.freepik.com/premium-photo/aloo-tikki-tasty-fast-food-street-food-take-away-yellow-background_962764-116115.jpg",
    },
    {
      name: "Chaat",
      description:
        "A broad category of savory snacks typically featuring a combination of crispy fried dough, boiled potatoes, chickpeas, yogurt, chutneys, and spices.",
      price: "20 RS",
      image: "https://img.freepik.com/premium-photo/picture-papdi-chaat_871710-19959.jpg",
    },
    {
      name: "Paneer Tikka",
      description:
        "Marinated and grilled cubes of paneer (Indian cottage cheese) served with mint chutney.",
      price: "120 RS",
      image: "https://img.freepik.com/premium-photo/paneer-tikka-is-indian-dish-made-from-chunks-cottage-cheese-marinated-spices-grilled-tandoor_466689-76829.jpg",
    },
    {
      name: "Dhokla",
      description:
        "Steamed savory cakes made from fermented rice and chickpea flour, typically served with green chutney and tempered mustard seeds.",
      price: "60 RS",
      image: "https://img.freepik.com/premium-photo/gujrati-food-khaman-dhokla_57665-5415.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711238400&semt=sph",
    },
    {
      name: "Samosa Chaat",
      description:
        "Crushed samosas topped with yogurt, chutneys, chopped onions, tomatoes, and sev.",
      price: "90 RS",
      image: "https://img.freepik.com/premium-photo/samosa-chaat-graphy-ar-c_839793-36768.jpg",
    },
    {
      name: "Masala Vada",
      description:
        "Spiced and deep-fried lentil fritters, crispy on the outside and soft on the inside.",
      price: "50 RS",
      image: "https://img.freepik.com/premium-photo/masala-chana-dal-vada-parippu-paruppu-vadai-is-tea-time-fried-snacks-recipe-from-maharashtrian-kerala-served-plate_466689-767.jpg",
    },
    {
      name: "Chivda",
      description:
        "Crunchy mixture made from flattened rice (poha), peanuts, fried lentils, and spices.",
      price: "20 RS",
      image: "https://img.freepik.com/premium-photo/navratan-chivda-is-great-munching-recipe-during-fasting-days_1093310-108.jpg",
    },
    {
      name: "Kachori",
      description:
        "Deep-fried pastry filled with a savory mixture of spiced lentils or peas, often served with chutneys.",
      price: "140 RS",
      image: "https://img.freepik.com/free-photo/platter-food-including-mushroom-cream-sauce_24640-80490.jpg",
    },
    {
      name: "Murukku",
      description:
        "Crunchy South Indian snack made from rice flour and flavored with cumin, sesame seeds, or spices, typically served during festivals.",
      price: "50 RS",
      image: "https://img.freepik.com/premium-photo/traditional-indian-snack-chakli-chakali-murukku_1116237-8.jpg",
    },
    {
      name: "Pav Bhaji",
      description:
        "A Mumbai street food classic consisting of spiced mashed vegetables (bhaji) served with buttered and toasted bread rolls (pav), garnished with chopped onions and lemon wedges.",
      price: "90 RS",
      image: "https://img.freepik.com/premium-photo/mumbai-style-pav-bhaji-is-fast-food-dish-from-india-consists-thick-vegetable-curry-served-with-soft-bread-roll-served-plate_466689-2267.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=sph",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="snack-menu-container">
      <div className="menu-header">
        <h2>Snack Menu</h2>
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
          className="menu-search-input"
        />
      </div>
      <div className="snack-menu-items">
        {filteredMenuItems.map((item, index) => (
          <div className="snack-menu-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="snack-menu-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="snack-menu-item-actions">
                <p>{item.price}</p>
                <button className="snack-order-button">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnackMenu;
