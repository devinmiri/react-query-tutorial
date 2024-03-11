const Loader = () => {
  return (
    <div className="  text-stone-800 p-4 mt-4  rounded-md">
      <span className="text-3xl animate-ping-slow ">.</span>
      <span className="text-3xl animate-ping-middle">.</span>
      <span className="text-3xl animate-ping-fast">.</span> Loading
    </div>
  );
};
export default Loader;
