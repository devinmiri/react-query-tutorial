import { useState } from "react";

import { useCreateTask } from "../hooks/customReactQueryHooks";
import { useRef } from "react";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");
  const { createTask, isPending } = useCreateTask({});
  const focusedInput = useRef()


  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName);
    setNewItemName("");
    focusedInput.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4 className="text-2xl">task bud</h4>
      <div className=" form-control">
        <input
          ref={focusedInput}
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn " disabled={isPending}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
