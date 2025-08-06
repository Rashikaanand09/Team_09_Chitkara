import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

// Dynamic ReviewsPage for a specific restaurant
import { useParams } from "react-router-dom";

const API_BASE = "http://localhost:3000/api/reviews";
const USER_ID = "user1"; // Replace with actual userId as needed

const ReviewsPage = () => {
  const { id } = useParams();
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    if (!id) return;
    fetch(`${API_BASE}/business/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Failed to fetch reviews:", err));
  }, [id]);

  const handleReviewSubmit = ({ reviewText, rating }) => {
    fetch(`${API_BASE}/business`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: USER_ID,
        businessId: id,
        reviewText,
        rating,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.review) {
          setReviews((prev) => [...prev, data.review]);
        }
      })
      .catch(() => alert("Failed to submit review"));
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>Reviews for Business ID: {id}</h1>
      <ReviewForm onSubmit={handleReviewSubmit} />
      <ReviewList reviews={reviews} />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reviews/business/:id" element={<ReviewsPage />} />
    </Routes>
  </Router>
);

export default App;