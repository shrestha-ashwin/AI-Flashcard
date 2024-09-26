export default function NavBar() {
  return (
    <nav className="mb-14 sticky top-0">
      <div className="h-14 w-full  text-black bg-white flex justify-around px-3 items-center py-2 ">
        <div className="justify-self-center font-medium  sm:max-lg:mr-[45%] lg:mr-[50%]">
          AI FlashCard
        </div>
        <button className="justify-self-center text-lightGrey bg-black px-5 py-[6.5px] rounded-2xl text-sm">
          Get Started
        </button>
      </div>
      <div className="border-[0.5px] border-borderGrey"></div>
    </nav>
  );
}
