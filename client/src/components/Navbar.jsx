function Navbar() {
  return (
    <div className="bg-zinc-700 flex justify-between px-20 py-2">
      <a href={"/"} className="text-white text-xl font-bold">
        <h1> MySQL</h1>
      </a>
      <nav>
        <ul className="flex gap-5">
          <li>
            <a href={"/"}>Home</a>
          </li>
          <li>
            <a href={`/new`}>Create Task</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
