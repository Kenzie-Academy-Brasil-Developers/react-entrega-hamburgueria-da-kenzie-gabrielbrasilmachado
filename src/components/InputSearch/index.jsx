import { useEffect, useState } from "react";
import { StyledInputForm } from "./style";

export const InputSearch = ({ setFilteredProducts, products }) => {
  const [search, setSearch] = useState("");

  const handleSearchForm = (event) => {
    event.preventDefault();
    search === ""
      ? setFilteredProducts([])
      : setFilteredProducts(
          products.filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.category.toLowerCase().includes(search.toLowerCase())
          )
        );
  };
  const handleSearch = () => {
    search === ""
      ? setFilteredProducts([])
      : setFilteredProducts(
          products.filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.category.toLowerCase().includes(search.toLowerCase())
          )
        );
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <StyledInputForm
      onSubmit={(event) => {
        handleSearchForm(event);
      }}
    >
      <input
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        value={search}
        type="text"
        placeholder="Digitar Pesquisa"
      />
      <button>Pesquisar</button>
    </StyledInputForm>
  );
};
