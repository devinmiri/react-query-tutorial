import { useDeleteTask, useUpdateTask } from "../hooks/customReactQueryHooks";

// eslint-disable-next-line react/prop-types
const SingleItem = ({ item: { id, isDone, title } }) => {
  const { updateTask } = useUpdateTask();
  const { deleteTask, deleteTaskLoading } = useDeleteTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => updateTask({ id, isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isDone && "line-through",
        }}
      >
        {title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled={deleteTaskLoading}
        onClick={() => deleteTask(id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
