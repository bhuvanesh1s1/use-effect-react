function Loader() {
  return (
    <div className=" rounded-lg p-2 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex gap-4 items-center ">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 items-center">
            <div className="rounded-md bg-slate-500 h-[100px] w-[100px]"></div>
            <div className="h-6 w-20 bg-slate-500 rounded"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-6 w-24 bg-slate-500 rounded"></div>
            <div className="h-6 w-20 bg-slate-500 rounded"></div>
            <div className="h-6 w-20 bg-slate-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
