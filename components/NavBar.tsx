export default function NavBar() {
  return (
    <nav className="h-14 w-full  text-black bg-white grid grid-cols-2 px-3 items-center py-2 mb-2">
      <div className="justify-self-start font-semibold text-lg  ">
        AI FlashCard
      </div>
      <button className="justify-self-center text-white bg-black px-4 py-[5.5px] rounded-2xl">
        Sign In
      </button>
    </nav>
  );
}
