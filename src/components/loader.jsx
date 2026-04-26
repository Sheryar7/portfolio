const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
    </div>
  );
};

export default Loader;