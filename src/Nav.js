let Nav = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 p-0 ">
        <nav className=" bg-fuchsia-800 rounded-md">
          <h1 className="px-2 py-1 text-white "> Personal details</h1>
          <p className="px-2 text-xs text-white lg:text-sm ">
            Update your information and find out how its used
          </p>

          <label
            htmlFor="profile-photo-input"
            class="block text-xs p-2 text-white text-end lg:text-sm my-5 md:my-7 "
          >
            Upload Cover Photo
          </label>
          <input
            className="hidden"
            id="profile-photo-input"
            type="file"
            name="profile-photo"
            accept="image/*"
            
          ></input>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
