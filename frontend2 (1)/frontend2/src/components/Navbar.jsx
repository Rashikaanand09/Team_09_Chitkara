import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";

const restaurants = [
  { id: 1, name: "Pizza Paradise", description: "Best pizza in town!" },
  { id: 2, name: "Burger Haven", description: "Juicy burgers and crispy fries." },
  { id: 3, name: "Sushi World", description: "Authentic sushi experience with fresh ingredients." },
  { id: 4, name: "Taco Town", description: "Delicious tacos with a spicy kick." },
  { id: 5, name: "Pasta Place", description: "Homemade pasta like Nonna used to make." },
  { id: 6, name: "Curry Corner", description: "Rich and flavorful Indian curries." },
  { id: 7, name: "Veggie Delight", description: "Plant-based meals packed with nutrients." },
  { id: 8, name: "BBQ Barn", description: "Smoked meats and tangy sauces." },
];

const Home = () => {
  const [filter, setFilter] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🍽️ Discover Local Restaurants</h1>

      <div style={styles.filterContainer}>
        <input
          type="text"
          placeholder="Search restaurants by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={styles.filterInput}
        />
      </div>

      <div style={styles.cardList}>
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <p style={styles.noResults}>No restaurants match your search.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f7f9fc",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #ff6a00, #ee0979)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "40px",
  },
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  filterInput: {
    width: "60%",
    padding: "14px 18px",
    fontSize: "16px",
    border: "2px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease-in-out",
    outline: "none",
  },
  cardList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  noResults: {
    textAlign: "center",
    color: "#888",
    fontStyle: "italic",
    fontSize: "18px",
  },
};

export default Home;
