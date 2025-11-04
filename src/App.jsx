import React, { useCallback, useState, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let charUse = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) charUse += "0123456789";
    if (characterAllowed) charUse += "₹~`!@#$%^&*()_-+={}[]|";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charUse.length);
      pass += charUse.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    if (!password) return;
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    navigator.clipboard.writeText(password);

    // Subtle copy feedback
    const btn = document.getElementById("copy-btn");
    btn.innerText = "Copied!";
    btn.classList.add("bg-green-500");
    setTimeout(() => {
      btn.innerText = "Copy";
      btn.classList.remove("bg-green-500");
    }, 1200);
  }, [length, password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="bg-black text-orange-500 min-h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-4xl font-bold">Password Generator</h1>

      <div className="flex bg-amber-50 shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          readOnly
          className="outline-none w-80 py-2 px-3 text-black"
          placeholder="password"
          ref={passwordRef}
        />

        <button
          id="copy-btn"
          onClick={copyPasswordToClipboard}
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 transition-all duration-200 border-l border-gray-700 rounded-none"
        >
          Copy
        </button>
      </div>

      <button
        onClick={passwordGenerator}
        className="bg-orange-500 text-white w-80 px-4 py-2 rounded-lg 
             hover:bg-orange-600 active:bg-orange-700 
             transition duration-200"
      >
        Generate
      </button>

      <div className="flex gap-4 items-center text-lg">
        <div>
          <label>Length: {length}</label>
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            className="ml-2 cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          Numbers
        </label>

        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={characterAllowed}
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          Symbols
        </label>

      </div>
    </div>
  );
};

export default App;
