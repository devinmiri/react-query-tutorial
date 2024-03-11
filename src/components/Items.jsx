import SingleItem from "./SingleItem";
import { useCustomFetch } from "../hooks/customReactQueryHooks";
import Loader from "./loader";
import { toast } from "react-toastify";

const Items = () => {
  const { data: tasks, isError, isPending } = useCustomFetch();

  console.log(tasks, isError, isPending);

  if (isPending) return <Loader />;

  if (isError)
    return toast("There was an error", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  if (tasks.length == 0)
    return <p className="p-8 text-center font-semibold text-lg">No tasks</p>;

  return (
    <div className="items">
      {tasks?.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
