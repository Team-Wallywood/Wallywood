import { CategoryNavStyled } from "./CategoryNav.Styled";

import supabase from "../../Utils/SupabaseClient";

import { NavLink } from "react-router-dom";

import { useState, useEffect } from "react";

export const CategoryNav = () => {
  const [category, setCategory] = useState([]);

  const getCategorys = async () => {
    if (supabase) {
      const { data, error } = await supabase.from("genres").select("*");
      if (error) {
        console.error("Error fetching category", error);
      } else {
        setCategory(data);
      }
    }
  };

  useEffect(() => {
    getCategorys();
  }, [setCategory, supabase]);

  console.log(category);
  const sortCategory = category.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  return (
    <CategoryNavStyled>
      <h3>Filtre</h3>
      <div>
        <ul>
          <li>Genre</li>
          {sortCategory &&
            sortCategory.map((category, index) => {
              return (
                <li key={index}>
                  <NavLink to={`/PlakaterPage/${category.id}`}>
                    {category.title}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    </CategoryNavStyled>
  );
};
