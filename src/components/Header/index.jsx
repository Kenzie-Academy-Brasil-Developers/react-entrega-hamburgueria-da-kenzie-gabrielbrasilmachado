import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";
import { StyledHeader } from "./style";

export const Header = ({ setFilteredProducts, products }) => {
  return (
    <StyledHeader>
      <div className="container">
        <Logo></Logo>
        <InputSearch
          setFilteredProducts={setFilteredProducts}
          products={products}
        ></InputSearch>
      </div>
    </StyledHeader>
  );
};
