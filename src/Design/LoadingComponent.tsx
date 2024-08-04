const LoadingComponent = () => {
  return (
    <div className="text-center pt-4">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
      <h2 className="text-zinc-900 dark:text-zinc-700 mt-4 font-semibold">
        Loading...
      </h2>
      <p className="text-zinc-600 dark:text-zinc-700 font-semibold">
        Your adventure is about to begin
      </p>
    </div>
  );
};

export default LoadingComponent;
