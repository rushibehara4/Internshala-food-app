import { Link } from "react-router-dom";

import "./index.css"

const MenuPage = () => (
  <div className="menu-container">
    <h1 className="menu-heading">View Menu</h1>
    <div className="menu-content">
      <div className="menu-item" id="breakfast">
        <img src="https://media.istockphoto.com/id/1292563627/photo/assorted-south-indian-breakfast-foods-on-wooden-background-ghee-dosa-uttappam-medhu-vada.jpg?s=612x612&w=0&k=20&c=HvuYT3RiWj5YsvP2_pJrSWIcZUXhnTKqjKhdN3j_SgY=" alt="breakfast-img" className="menu-main-image"/>
        <h1 className="menu-title">Breakfast</h1>
        <Link to="/menubreakfast"><button className="menu-explore-button" >Explore More</button></Link>
      </div>
      <div className="menu-item" id="breakfast">
        <img src="https://www.vidhyashomecooking.com/wp-content/uploads/2020/08/SundayLunchMenu.jpg" alt="lunch-img" className="menu-main-image"/>
        <h1 className="menu-title">Lunch</h1>
        <Link to="/menulunch">
          <button className="menu-explore-button">Explore More</button>
        </Link>
      </div>
      <div className="menu-item" id="breakfast">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKad-kaADxGw0pvkT_Syh9fsB1apke1GC-vg&usqp=CAU" alt="snacks-img" className="menu-main-image"/>
        <h1 className="menu-title">Snacks</h1>
        <Link to="/menusnack">
          <button className="menu-explore-button">Explore More</button>
        </Link>
      </div>
      <div className="menu-item" id="breakfast">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-ECOGCR4Mf0LL9mqvaNQKqw4lokZTerMzw&usqp=CAU" alt="dinner-img" className="menu-main-image"/>
        <h1 className="menu-title">Dinner</h1>
        <Link to="/menudinner">
          <button className="menu-explore-button">Explore More</button>
        </Link>
      </div>
      <div className="menu-item" id="breakfast">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbYPYzhvWiQ-y9uz-FncH0NsHuP9nxorkPg&usqp=CAU" alt="drinks-img" className="menu-main-image"/>
        <h1 className="menu-title">Mocktails & Drinks</h1>
        <Link to="/menumoctails">
          <button className="menu-explore-button">Explore More</button>
        </Link>
      </div>
    </div>
  </div>
);

export default MenuPage;
