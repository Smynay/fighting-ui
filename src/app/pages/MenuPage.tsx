import { Link } from "react-router-dom";

export const MenuPage = () => {
  return (
    <div>
      <Link to={"fighting"}>Fighting</Link>
      <br />
      <Link to={"legacy"}>Fighting (legacy)</Link>
    </div>
  );
};
