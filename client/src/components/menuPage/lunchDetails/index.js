import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const InitialBreakfastMenu = () => {
  const menuItems = [
    {
      name: "Rice and Curry",
      description:
        "A staple meal in many cultures, consisting of cooked rice served with various curries such as chicken curry, vegetable curry, lentil curry (dal), or fish curry.",
      price: "90 RS",
      image: "https://img.freepik.com/premium-photo/japanese-curry-rice-with-sliced-pork-carrot-onions_1339-96477.jpg?w=2000",
    },
    {
      name: "Roti or Chapati with Sabzi",
      description:
        "Whole wheat flatbread (roti or chapati) served with a variety of vegetable dishes (sabzi) such as aloo gobi (potato and cauliflower), bhindi masala (okra), or baingan bharta (smoky eggplant).",
      price: "80 RS",
      image: "https://img.freepik.com/premium-photo/indian-mixed-veg-containing-potato-beans-with-traditional-masala-curry-served-with-chapati-roti-indian-flat-bread_466689-48430.jpg",
    },
    {
      name: "Biryani",
      description:
        "Fragrant rice dish cooked with spices, meat (such as chicken, lamb, or goat), and sometimes vegetables. It's often served with raita (yogurt sauce) and salad.",
      price: "280 RS",
      image: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg",
    },
    {
      name: "Thali",
      description:
        "A platter-style meal that includes a variety of dishes such as rice, roti, dal (lentils), vegetables, yogurt, pickles, and sometimes dessert. Thalis vary by region and can feature different combinations of dishes.",
      price: "Price varies",
      image: "https://img.freepik.com/free-photo/gourmet-bowl-with-healthy-rice-meat-vegetables-generated-by-ai_188544-14076.jpg",
    },
    {
      name: "Dal and Rice",
      description:
        "A simple yet nutritious meal consisting of lentil soup (dal) served with rice. It's often accompanied by a side of vegetables, salad, or pickles.",
      price: "130 RS",
      image: "https://img.freepik.com/premium-photo/restaurant-style-dal-tadka-tempered-with-ghee-spices-this-recipe-makes-great-meal-with-boiled-rice_466689-76412.jpg",
    },
    {
      name: "Pasta",
      description:
        "Italian-style pasta dishes such as spaghetti, penne, or fettuccine served with various sauces like marinara, alfredo, or pesto. It can be topped with vegetables, chicken, seafood, or cheese.",
      price: "120 RS",
      image: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19738.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais",
    },
    {
      name: "Sandwiches",
      description:
        "A quick and versatile option, sandwiches can be made with various fillings such as grilled chicken, tuna salad, veggies, cheese, or deli meats. They're often served with chips or a side salad.",
      price: "70 RS",
      image: "https://img.freepik.com/free-photo/club-sandwich-with-side-french-fries_140725-1744.jpg",
    },
    {
      name: "Salads",
      description:
        "Fresh salads made with a variety of greens, vegetables, fruits, nuts, seeds, and protein sources such as grilled chicken, shrimp, tofu, or beans. They can be dressed with vinaigrettes, creamy dressings, or olive oil and lemon juice.",
      price: "40-120 RS",
      image: "https://img.freepik.com/free-photo/fresh-salad-with-vegetables-tomatoes-red-onions-lettuce-quail-eggs-healthy-food-diet-concept-vegetarian-food_2829-20246.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1711497600&semt=ais",
    },
    {
      name: "Stir-Fry",
      description:
        "A quick and healthy option, stir-fries typically include a mix of vegetables, protein (such as chicken, beef, shrimp, or tofu), and sauce, served over rice or noodles.",
      price: "170 RS above",
      image: "https://img.freepik.com/free-photo/chicken-stir-fry-vegetables_123827-21544.jpg",
    },
    {
      name: "Soup and Sandwich Combo",
      description:
        "A comforting meal combo consisting of a warm bowl of soup (such as tomato, chicken noodle, or minestrone) served with a sandwich (grilled cheese, turkey club, or BLT).",
      price: "40 RS above",
      image: "https://img.freepik.com/free-photo/carrot-soup-with-cream-parsley-wooden-table_123827-22531.jpg",
    },
    {
      name: "Chole Bhature",
      description:
        "Spicy chickpea curry (chole) served with deep-fried bread (bhature), usually accompanied by pickles or onions.",
      price: "50 RS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHCEVbm_-ruECo4cwS9shcA_rQ5NSLZhoow&usqp=CAU",
    },
    {
      name: "Masoor Dal",
      description:
        "Red lentil soup seasoned with spices like cumin, turmeric, and garlic, served with rice or roti. It's a nutritious and comforting dish.",
      price: "110 RS",
      image: "https://img.freepik.com/free-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18712.jpg",
    },
    {
      name: "Paneer Tikka",
      description:
        "Cubes of paneer (Indian cottage cheese) marinated in yogurt and spices, skewered and grilled until charred, often served with mint chutney and naan bread.",
      price: "250 RS",
      image: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais",
    },
    {
      name: "Rajma Chawal",
      description:
        "Kidney bean curry (rajma) cooked in a tomato-based sauce, served with steamed rice. It's a popular comfort food in North India.",
      price: "120 RS",
      image: "https://img.freepik.com/premium-photo/rajma-chawal-plate-against-white-background_894067-17365.jpg",
    },
    {
      name: "Bhindi Masala",
      description:
        "Okra sautéed with onions, tomatoes, and spices like cumin, coriander, and chili powder, served with roti or rice. It's a flavorful vegetarian dish.",
      price: "70 RS",
      image: "https://img.freepik.com/premium-photo/indian-style-masala-sabji-sabzi-fried-bhindi-okra-also-known-as-ladyfinger-served-bowl-moody-background-selective-focus_466689-57904.jpg",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="initial-lunch-menu">
      <div className="breakfast-search-continaer">
        <h2>Lunch Menu</h2>
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
      <div className="initial-lunch-items">
        {filteredMenuItems.map((item, index) => (
          <div className="initial-lunch-item" key={index}>
            <img src={item.image} alt={item.name} width={250} height={200} />
            <div className="initial-lunch-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="lunch-button-container">
                <p>{item.price}</p>
                <button className="lunch-button">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitialBreakfastMenu;
