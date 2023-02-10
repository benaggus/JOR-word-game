import React from 'react';

function InputBox({ setGuessData, disableInput }) {
  const [inputBox, setInputBox] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (inputBox.length === 5) {
          setGuessData(inputBox);
          setInputBox('');
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required={true}
        value={inputBox}
        maxLength={5}
        disabled={disableInput}
        onChange={(event) => setInputBox(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default InputBox;
