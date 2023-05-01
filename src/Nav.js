let Nav = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 p-0 ">
        <nav className=" bg-fuchsia-800 rounded-md">
          <h1 className="px-2 py-1 text-white "> Personal details</h1>
          <p className="px-2 text-xs text-white lg:text-sm ">
            Update your information and find out how its used
          </p>
          <p className=" text-xs px-2 text-white text-end lg:text-sm my-5 md:my-7 ">
            Upload Cover Photo
          </p>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
