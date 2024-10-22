import { useEffect, useRef, useState } from "react";

export default function Name({
  hideTextBox,

  changeMessage,
}: {
  hideTextBox: () => void;

  changeMessage: (message: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        hideTextBox();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      hideTextBox();
      sendRequest();
    } else {
      setInvalidInput(true);
    }
  };

  const sendRequest = () => {
    if (inputValue.trim()) {
      changeMessage(inputValue);
    } else {
      setInvalidInput(true);
    }
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
        <form className="flex flex-col mb-11" onSubmit={handleSubmit}>
          <label className="font-medium mb-[6px] text-[15px]">Topic</label>
          <input
            type="text"
            placeholder="type your topic"
            className="ml-[1px] border-[1px] border-borderGrey px-2 py-1"
            onChange={handleInputChange}
            onFocus={(e) => setInvalidInput(false)}
          />
          {invalidInput ? (
            <p className="text-sm mt-1 ml-[5px] text-red-400">
              Cannot be blank
            </p>
          ) : (
            ""
          )}
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
