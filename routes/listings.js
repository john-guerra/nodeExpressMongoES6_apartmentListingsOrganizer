import express from "express";

const listings = [
  {
    title: "Cozy Apartment in Downtown",
    address: "123 Main St, Cityville",
    price: 1200,
    bedrooms: 2,
    notes: "",
    photos: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    title: "Spacious Loft with City View",
    address: "456 Elm St, Metropolis",
    price: 2000,
    bedrooms: 3,
    notes: "",
    photos: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
];
const router = express.Router();

router.get("/listings", (req, res) => {
  console.log("🏡 Received request for /api/listings");
  res.json({
    listings,
  });
});

export default router;
