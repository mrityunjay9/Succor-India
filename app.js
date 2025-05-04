const express = require("express");
const path = require("path");
const app = express();
const expressLayouts = require("express-ejs-layouts");

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);
app.set("layout", "layout"); // layout.ejs in views folder

app.get("/", (req, res) => {
  const categories = [
    {
      title: "Home Interiors",
      slug: "home-interiors",
      description: "Stylish, functional interiors that reflect your taste.",
      image: "/images/interiors.jpg",
    },
    {
      title: "Roof Transformations",
      slug: "roof-transformations",
      description: "Give your home a new look with modern roof designs.",
      image: "/images/roof.jpg",
    },
    {
      title: "Fiber Reinforce Plastic (FRP) Projects",
      slug: "frp-projects",
      description: "Durable, elegant structures built with expertise.",
      image: "/images/frp.jpg",
    },
  ];

  res.render("index", {
    title: "Home - My Project Portfolio",
    categories,
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
