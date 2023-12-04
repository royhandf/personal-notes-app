import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Action from "./Action";

const HomeAction = () => {
  const navigate = useNavigate();

  return (
    <Action page="homepage">
      <button
        className="action"
        type="button"
        onClick={() => navigate("notes/new")}
      >
        <HiPlus />
      </button>
    </Action>
  );
};

export default HomeAction;
