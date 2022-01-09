import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  // const handleAdd = () => {
  //     setCategories([...categories, "Demon Slayer"]);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
              {
                  categories.map((category) => (
            <GifGrid
                key={category}
                category={category} />
             ))
              }
      </ol>
    </>
  );
};
