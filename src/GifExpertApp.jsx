import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //   // const cobraKai = "Cobra Kai";
  //   // setCategories([cobraKai, ...categories]);
  //   setCategories(cats => [...cats, 'Cobra Kai'])
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
