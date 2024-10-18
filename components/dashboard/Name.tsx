import { useEffect, useRef, useState } from "react";

export default function Name({
  hideTextBox,

  changeMessage,
}: {
  hideTextBox: () => void;

  changeMessage: (message: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("submit", handleSubmit);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      hideTextBox();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
    hideTextBox();
  };

  const sendRequest = () => {
    changeMessage(inputValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full h-[100vh] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0">
      <div
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-white px-5 py-6 rounded-xl max-w-[600px]"
        ref={modalRef}
      >
        <h2 className="font-medium text-lg mb-1">Create Flashcard</h2>
        <h3 className="text-lightText mb-5 text-[15px]">
          Type the topic for which flashcards are to be generated
        </h3>
        <form className="flex flex-col mb-11" onSubmit={sendRequest}>
          <label className="font-medium mb-[6px] text-[15px]">Topic</label>
          <input
            type="text"
            placeholder="type your topic"
            className="ml-[1px] border-[1px] border-borderGrey px-2 py-1"
            onChange={handleInputChange}
          />
        </form>
        <div className="flex gap-2 justify-end">
          <button
            className="border-[1.4px] border-borderGrey px-4 py-[6px] rounded-md"
            onClick={hideTextBox}
          >
            Cancel
          </button>
          <button
            className="text-lightGrey bg-black px-4 py-[6px] rounded-md"
            onClick={sendRequest}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
