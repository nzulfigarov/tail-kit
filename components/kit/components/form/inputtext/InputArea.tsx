import React from "react";

const InputArea = () => {
  return (
    <label className="text-gray-700" htmlFor="name">
      Comment
      <textarea
        className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        id="comment"
        placeholder="Enter yout comment"
        name="comment"
        rows={5}
        cols={40}
      />
    </label>
  );
};

export default InputArea;
