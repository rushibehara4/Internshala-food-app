import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const DinnerMenu = () => {
  const menuItems = [
    {
      name: "Butter Chicken (Murgh Makhani)",
      description:
        "Tender chicken cooked in a rich and creamy tomato-based sauce, flavored with butter, cream, and aromatic spices.",
      price: "280 RS",
      image: "https://img.freepik.com/premium-photo/murgh-makhani-butter-chicken-tikka-masala-served-with-roti-paratha-plain-rice-along-with-oni_1046390-14795.jpg",
    },
    {
      name: "Rogan Josh",
      description:
        "A flavorful Kashmiri dish of tender lamb or goat cooked in a spicy gravy with yogurt, tomatoes, and a blend of traditional spices.",
      price: "350 RS",
      image: "https://img.freepik.com/premium-photo/indian-style-meat-dish-mutton-gosht-masala-lamb-rogan-josh-served-bowl-selective-focus_466689-53415.jpg",
    },
    {
      name: "Palak Paneer",
      description:
        "Cubes of paneer (Indian cottage cheese) simmered in a creamy spinach gravy flavored with garlic, ginger, and garam masala.",
      price: "170 RS",
      image: "https://img.freepik.com/premium-photo/palak-paneer_662214-4174.jpg",
    },
    {
      name: "Chicken Biryani",
      description:
        "Fragrant basmati rice cooked with marinated chicken pieces, aromatic spices, and saffron, layered and steamed to perfection.",
      price: "180 RS",
      image: "https://img.freepik.com/free-photo/plate-food-with-lemon-lemon_505751-3815.jpg",
    },
    {
      name: "Dum Aloo",
      description:
        "Baby potatoes cooked in a spicy and tangy gravy made with yogurt, tomatoes, and a blend of spices, typically served with naan or rice.",
      price: "110 RS",
      image: "https://img.freepik.com/premium-photo/chatpate-masala-aloo-sabzi-fry-bombay-potatoes-served-bowl-selective-focus_466689-55899.jpg",
    },
    {
      name: "Malai Kofta",
      description:
        "Deep-fried vegetable and paneer (Indian cottage cheese) dumplings served in a creamy tomato-based gravy, flavored with cashews and cream.",
      price: "220 RS",
      image: "https://img.freepik.com/premium-photo/malai-kofta-curry-classic-north-indian-dish-vegetarian-alternative-meatballs-served-with-tandoori-roti-indian-bread-green-salad-selective-focus_466689-63532.jpg",
    },
    {
      name: "Chicken Tikka Masala",
      description:
        "Grilled marinated chicken pieces simmered in a creamy and flavorful tomato-based sauce, often served with naan or rice.",
      price: "260 RS",
      image: "https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine-top-view_2829-6240.jpg",
    },
    {
      name: "Fish Curry",
      description:
        "Fish fillets cooked in a tangy and spicy gravy made with coconut milk, tomatoes, and a blend of South Indian spices.",
      price: "320 RS",
      image: "https://img.freepik.com/free-photo/top-view-delicious-fish-meal_23-2148734691.jpg?size=626&ext=jpg&ga=GA1.1.1707466627.1711584000&semt=ais",
    },
    {
      name: "Mutton Curry",
      description:
        "Tender pieces of mutton (goat or lamb) cooked in a rich and flavorful gravy with onions, tomatoes, and aromatic spices.",
      price: "420 RS",
      image: "https://img.freepik.com/premium-photo/beef-pork-goulash-pan-bowl-dumplings-viewed-from-top_341862-1780.jpg",
    },
    {
      name: "Paneer Butter Masala",
      description:
        "Cubes of paneer cooked in a creamy tomato-based sauce with butter, cream, and a blend of spices, perfect with naan or rice.",
      price: "190 RS",
      image: "https://img.freepik.com/premium-photo/delicious-paneer-butter-masala-photography_928503-851.jpg",
    },
    {
      name: "Kadai Chicken",
      description:
        "Chicken cooked with onions, tomatoes, bell peppers, and a blend of spices in a thick and flavorful gravy, typically served in a kadai (wok).",
      price: "220 RS",
      image: "https://img.freepik.com/free-photo/chicken-fried-hot-pot-with-spicy-sauce-korean-style_1150-42868.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1711411200&semt=ais",
    },
    {
      name: "Chana Masala",
      description:
        "Spicy and tangy chickpea curry cooked with onions, tomatoes, ginger, garlic, and aromatic spices, often served with bhatura or rice.",
      price: "110 RS",
      image: "https://img.freepik.com/premium-photo/spicy-chickpea-curry-chana-masala-choley-bowl-with-chapati-salad-traditional-north-indian-dish_466689-6390.jpg",
    },
    {
      name: "Hyderabadi Biryani",
      description:
        "A fragrant rice dish layered with marinated chicken or mutton, caramelized onions, mint, and saffron, slow-cooked to perfection.",
      price: "250 RS",
      image: "https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52403.jpg",
    },
    {
      name: "Dal Makhani",
      description:
        "Creamy and flavorful lentil curry made with black lentils (urad dal) and kidney beans (rajma), simmered with butter, cream, and spices.",
      price: "170 RS",
      image: "https://img.freepik.com/premium-photo/dal-makhani-dal-makhni-is-north-indian-recipe-served-bowl-selective-focus_466689-79082.jpg",
    },
    {
      name: "Aloo Gobi",
      description:
        "Potatoes and cauliflower cooked with onions, tomatoes, ginger, garlic, and spices, a delicious vegetarian option often served with roti or rice.",
      price: "90 RS",
      image: "https://img.freepik.com/premium-photo/aloo-gobi-masala-curry-with-chapati-paratha_466689-76451.jpg",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dinner-menu-container">
      <div className="menu-header">
        <h2>Dinner Menu</h2>
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
      <div className="dinner-menu-items">
        {filteredMenuItems.map((item, index) => (
          <div className="dinner-menu-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="dinner-menu-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="dinner-menu-item-actions">
                <p>{item.price}</p>
                <button className="dinner-order-button">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DinnerMenu;
