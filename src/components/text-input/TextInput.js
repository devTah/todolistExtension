/**@jsx jsx */
import { jsx, css } from "@emotion/react";
import { useRef, useState } from "react";
import { useDebounce } from "../../common/useDebouce";

let color = {
  primary: "#11998e",
  secondary: "#38ef7d",
  white: "#fff",
  gray: "#9b9b9b",
  black: "#000",
};

function TextInput(props) {
  const {
    id = 1,
    active = (props.locked && props.active) || false,
    value = "",
    error = "",
    label,
    borderColor = "gray",
    textColor = "black",
    maxLength = 50,
  } = props;
  // const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const inputRef = useRef(null);
  const changeValue = (event) => {
    const value = event.target.value;
    console.log(value);
    // setState((prev) => ({ ...prev, value, error: "", }));
  };

  const handleKeyPress = (event) => {
    if (event.which === 13) {
      // setState({ value: props.predicted });
    }
  };

  const styles = {
    formField: css`
      position: relative;
      padding: 15px 0 0;
      margin-top: 10px;
      width: 50%;

      .form__field {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid ${color[borderColor]};
        outline: 0;
        font-size: 1.3rem;
        color: ${color[textColor]};
        padding: 7px 0;
        background: transparent;
        position: relative;
        transition: border-color 0.2s;
        max-width: 600px;
        min-width: 500px;
        ${"" /* display: block; */}
        ::placeholder {
          color: transparent;
        }

        :placeholder-shown ~ .form__label {
          font-size: 1.3rem;
          cursor: text;
          top: 20px;
        }
      }

      .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: ${color[borderColor]};
        user-select: none;
      }

      .form__field:focus {
        .form__label {
          position: absolute;
          top: 0;
          display: block;
          transition: 0.2s;
          font-size: 1rem;
          color: ${color["primary"]};
          font-weight: 700;
        }
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(
          to right,
          ${color["primary"]},
          ${color["secondary"]}
        );
        border-image-slice: 1;
      }
      /* reset input */
      .form__field {
        :required,
        :invalid {
          box-shadow: none;
        }
      }
    `,
  };
  return (
    <div css={styles.formField}>
      {/* {active &&
                    value &&
                    predicted &&
                    predicted.includes(value) && <p className="predicted">{predicted}</p>} */}

      <div
        id={id}
        className="form__field"
        contentEditable={true}
        type="input"
        ref={inputRef}
        placeholder={label}
        onChange={changeValue}
        onKeyPress={handleKeyPress}
        maxLength={maxLength}
        // onFocus={() => !locked && setState({ active: true })}
        // onBlur={() => !locked && setState({ active: false })}
      />
      {!!label && (
        <label for="span" className="form__label">
          {label}
        </label>
      )}
      {/* <label htmlFor={1} className={error && "error"}>
                    {error || label}
                </label> */}
    </div>
  );
}

export default TextInput;
// ::before {
//   content: "\\00a0";
//   top: 0;
//   right: 0;
//   left: 0;
//   bottom: 0;
//   pointer-events: none;
//   user-select: none;
//   position: absolute;
//   border-bottom: 2px solid ${color[borderColor]};
// }
