import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const DrinkMenu = () => {
  const menuItems = [
    {
      name: "Mango Lassi",
      description:
        "A creamy and refreshing yogurt-based drink blended with ripe mango pulp, sugar, and sometimes flavored with cardamom.",
      price: "60 RS",
      image: "https://img.freepik.com/premium-photo/fresh-smoothie-mango-lassi-with-mango-fruit-studio-background-restaurant-with-garden_741910-7268.jpg",
    },
    {
      name: "Virgin Mojito",
      description:
        "A non-alcoholic version of the classic mojito, made with fresh lime juice, mint leaves, sugar, and soda water, served over ice.",
      price: "90 RS",
      image: "https://img.freepik.com/premium-photo/photo-glass-cold-virgin-mojito_162944-1175.jpg",
    },
    {
      name: "Watermelon Cooler",
      description:
        "A hydrating drink made with fresh watermelon juice, lime juice, sugar syrup, and a splash of soda water, garnished with mint leaves.",
      price: "60 RS",
      image: "https://img.freepik.com/premium-photo/photo-coconut-watermelon-cooler-hydrating-fruity-cooler-with-front-view-clean-bg_655090-971853.jpg",
    },
    {
      name: "Berry Blast Mocktail",
      description:
        "A fruity and vibrant mocktail made with mixed berries (such as strawberries, blueberries, and raspberries), lemon juice, sugar syrup, and soda water.",
      price: "80 Rs",
      image: "https://img.freepik.com/premium-photo/berry-citrus-detox-blast_98908-2271.jpg",
    },
    {
      name: "Iced Green Tea with Honey and Lemon",
      description:
        "Chilled green tea infused with honey and lemon, a refreshing and antioxidant-rich beverage.",
      price: "120 RS",
      image: "https://img.freepik.com/premium-photo/green-tea-with-lemon-honey-immunity-boosting-cold-remedies_266870-12712.jpg",
    },
    {
      name: "Cucumber Mint Cooler",
      description:
        "A cooling mocktail made with fresh cucumber juice, mint leaves, lime juice, sugar syrup, and soda water, served over ice.",
      price: "50 RS",
      image: "https://i.ytimg.com/vi/XsG5h70rSSI/maxresdefault.jpg",
    },
    {
      name: "Peach Iced Tea",
      description:
        "Chilled black tea infused with peach syrup or puree, served over ice with a slice of fresh peach and a sprig of mint.",
      price: "110 RS",
      image: "https://img.freepik.com/premium-photo/glass-peach-tea-with-ice-cubes_123827-21451.jpg",
    },
    {
      name: "Blue Lagoon Mocktail",
      description:
        "A visually stunning mocktail made with blue curaçao syrup, lemonade, and soda water, served over ice with a maraschino cherry.",
      price: "150 RS",
      image: "https://img.freepik.com/free-photo/close-up-tall-glass-delicious-cocktail_140725-73444.jpg",
    },
    {
      name: "Pina Colada Mocktail",
      description:
        "A tropical mocktail made with coconut milk, pineapple juice, and cream of coconut, blended with ice and served garnished with a pineapple wedge.",
      price: "90 RS",
      image: "https://img.freepik.com/free-photo/delicious-pina-colada-cocktail_23-2150143233.jpg",
    },
    {
      name: "Ginger Beer Mocktail",
      description:
        "A spicy and tangy mocktail made with ginger beer, lime juice, and a dash of bitters, served over ice with a lime wedge.",
      price: "300 RS",
      image: "https://img.freepik.com/premium-photo/ginger-beer-with-fresh-mint-lemon-wedges-generative-ai_864588-2960.jpg",
    },
    {
      name: "Cranberry Spritzer",
      description:
        "A fizzy mocktail made with cranberry juice, sparkling water, lime juice, and a touch of honey or simple syrup, served over ice.",
      price: "210 RS",
      image: "https://img.freepik.com/free-photo/front-view-glasses-cranberry-vodka-with-ice_23-2148673747.jpg",
    },
    {
      name: "Virgin Mary",
      description:
        "A non-alcoholic version of the classic Bloody Mary, made with tomato juice, lemon juice, Worcestershire sauce, Tabasco, and garnished with celery and olives.",
      price: "220 RS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73JObyP6HNdfOHGW9QDTFsDN7qbqnqxiSgQ&usqp=CAU",
    },
    {
      name: "Minty Pineapple Punch",
      description:
        "A refreshing mocktail made with fresh pineapple juice, mint leaves, lime juice, sugar syrup, and soda water, served over ice.",
      price: "180 RS",
      image: "https://img.freepik.com/free-photo/fresh-pineapple-cocktail-with-mint-leaf-healthy-summer-refreshment-generated-by-artificial-intelligence_188544-129040.jpg?t=st=1704170651~exp=1704174251~hmac=1dc97c291e21463af5f2af5ca986b1aa7f1e77b81be193d3b8894970411a9b93",
    },
    {
      name: "Citrus Sunshine Cooler",
      description:
        "A citrusy mocktail made with orange juice, lemon juice, lime juice, sugar syrup, and soda water, served with a slice of orange.",
      price: "240 RS",
      image: "https://img.freepik.com/free-photo/aperol-spritz-delicious-summer-cocktail-space-text_185193-108786.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais",
    },
    {
      name: "Strawberry Basil Lemonade",
      description:
        "A fruity and herbaceous mocktail made with fresh strawberry puree, basil leaves, lemon juice, sugar syrup, and soda water, served over ice.",
      price: "350 RS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCI1tuURc1qfwQ0z5hnHAiDQasiMrgF1s1Q&usqp=CAU",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="drink-menu-container">
      <div className="menu-header">
        <h2>Drink Menu</h2>
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
      <div className="drinks-menu-items">
        {filteredMenuItems.map((item, index) => (
          <div className="drinks-menu-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="drinks-menu-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="drinks-menu-item-actions">
                <p>{item.price}</p>
                <button className="drinks-order-button">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkMenu;
