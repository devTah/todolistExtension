/**@jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect } from "react";

let color = {
  primary: "#11998e",
  secondary: "#38ef7d",
  white: "#fff",
  gray: "#9b9b9b",
  black: "#000",
};

function NoteArea({
  id = 1,
  disabled = false,
  value,
  defaultValue,
  borderColor = "#91d1d3",
  textColor = "mediumblue",
  maxLength = 500,
  handleChange,
  handleKeyPress,
  checkList,
  ...props
}) {
  const styles = {
    textareaContainer: css`
      position: relative;
      width: 90%;
      max-width: 800px;
      min-width: 400px;
      height: 480px;
      margin: 0 auto;
      background: #fafafa;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      ::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 60px;
        background: radial-gradient(#575450 6px, transparent 7px) repeat-y;
        background-size: 30px 30px;
        border-right: 3px solid #d44147;
        box-sizing: border-box;
      }

      .paper-content {
        position: absolute;
        top: 30px;
        right: 0;
        bottom: 30px;
        left: 60px;
        background: linear-gradient(
          transparent,
          transparent 28px,
          ${borderColor} 28px
        );
        background-size: 30px 30px;
      }

      .paper-content textarea {
        min-width: 100%;
        min-height: 100%;
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        line-height: 30px;
        padding: 0 10px;
        border: 0;
        outline: 0;
        background: transparent;
        color: ${textColor};
        font-family: "Handlee", cursive;
        font-weight: bold;
        font-size: 18px;
        box-sizing: border-box;
        z-index: 1;
      }
    `,
  };

  const onChange = (event) => {
    if (handleChange) handleChange(event);
  };

  const onKeyPress = (event) => {
    if (handleKeyPress) handleKeyPress(event);
  };

  useEffect(() => {
    console.log(checkList);
  }, [checkList])

  return (
    <div css={styles.textareaContainer}>
      <div className="paper-content" key={defaultValue}>
        <textarea
          autoFocus
          id={id}
          value={value}
          defaultValue={defaultValue}
          onKeyPress={onKeyPress}
          onChange={onChange}
          maxLength={maxLength}
          disabled={disabled}
          onFocus={function (e) {
            var val = e.target.value;
            e.target.value = '';
            e.target.value = val;
          }}
          wrap="hard"
          {...props}
        />
      </div>
    </div>
  );
}

export default NoteArea;
