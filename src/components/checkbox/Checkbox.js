/**@jsx jsx */
import { jsx, css } from "@emotion/react";
import { BG_IMAGE } from "../../common/constant";

// let color = {
//   primary: "#11998e",
//   secondary: "#38ef7d",
//   white: "#fff",
//   gray: "#9b9b9b",
//   black: "#000",
// };

function Checkbox(props) {
  const { value, ...rest } = props;
  const styles = {
    textareaContainer: css`
      [type="checkbox"],
      [type="radio"] {
        border: 0 !important;
        clip: rect(1px, 1px, 1px, 1px) !important;
        -webkit-clip-path: inset(50%) !important;
        clip-path: inset(50%) !important;
        height: 1px !important;
        overflow: hidden !important;
        padding: 0 !important;
        position: absolute !important;
        width: 1px !important;
        white-space: nowrap !important;
      }
      [type="checkbox"]:focus + label::before,
      [type="radio"]:focus + label::before {
        box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.4) !important;
      }
      [type="checkbox"]:hover + label::before,
      [type="radio"]:hover + label::before {
        border-color: #000;
      }
      [type="checkbox"]:active + label::before,
      [type="radio"]:active + label::before {
        -webkit-transition-duration: 0;
        transition-duration: 0;
      }
      [type="checkbox"] + label,
      [type="radio"] + label {
        position: relative;
        padding: 6px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      [type="checkbox"] + label::before,
      [type="radio"] + label::before {
        background-color: #fff;
        border: 1px solid #444;
        box-sizing: content-box;
        content: "";
        color: #444;
        margin-right: 6px;
        top: 50%;
        left: 0;
        width: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: middle;
      }
      [type="checkbox"] + label::after,
      [type="radio"] + label::after {
        box-sizing: content-box;
        content: "";
        background-color: #444;
        position: absolute;
        top: 50%;
        left: 12px;
        width: 14px;
        height: 14px;
        margin-top: -7px;
        -webkit-transform: scale(0);
        transform: scale(0);
        -webkit-transform-origin: 50%;
        transform-origin: 50%;
        -webkit-transition: -webkit-transform 200ms ease-out;
        transition: -webkit-transform 200ms ease-out;
        transition: transform 200ms ease-out;
        transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;
      }
      [type="checkbox"][disabled] + label::before,
      [type="radio"][disabled] + label::before {
        -webkit-animation: none;
        animation: none;
        box-shadow: none;
        border: 1px solid rgba(128, 128, 128, 0.5);
      }
      [type="checkbox"][disabled]:active + label::before,
      [type="checkbox"][disabled]:focus + label::before,
      [type="checkbox"][disabled]:hover + label::before,
      [type="radio"][disabled]:active + label::before,
      [type="radio"][disabled]:focus + label::before,
      [type="radio"][disabled]:hover + label::before {
        border-color: rgba(128, 128, 128, 0.5);
        -webkit-filter: none;
        filter: none;
        -webkit-transition: none;
        transition: none;
      }

      [type="checkbox"] + label::before,
      [type="checkbox"] + label::after {
        border-radius: 0;
      }
      [type="checkbox"] + label::after {
        background-color: transparent;
        top: 50%;
        left: calc(6px + 1px + 24px / 5);
        width: 12px;
        height: 4.8px;
        margin-top: calc(24px / -2 / 2 * 0.8);
        border-style: solid;
        border-color: #444;
        border-width: 0 0 3px 3px;
        border-radius: 0;
        -webkit-border-image: none;
        -o-border-image: none;
        border-image: none;
        -webkit-transform: rotate(-45deg) scale(0);
        transform: rotate(-45deg) scale(0);
        -webkit-transition: none;
        transition: none;
      }
      [type="checkbox"]:checked + label::after {
        content: "";
        -webkit-transform: rotate(-45deg) scale(1);
        transform: rotate(-45deg) scale(1);
        -webkit-transition: -webkit-transform 200ms ease-out;
        transition: -webkit-transform 200ms ease-out;
        transition: transform 200ms ease-out;
        transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;
      }

      [type="radio"] + label::before,
      [type="radio"] + label::after {
        border-radius: 50%;
      }
      [type="radio"]:checked:active + label::before,
      [type="radio"]:checked:focus + label::before {
        -webkit-animation: none;
        animation: none;
        -webkit-filter: none;
        filter: none;
        -webkit-transition: none;
        transition: none;
      }
      [type="radio"]:checked + label::before {
        -webkit-animation: none;
        animation: none;
        background-color: #fff;
      }
      [type="radio"]:checked + label::after {
        -webkit-transform: scale(1);
        transform: scale(1);
      }

      @-webkit-keyframes borderscale {
        50% {
          box-shadow: 0 0 0 2px #900;
        }
      }

      @keyframes borderscale {
        50% {
          box-shadow: 0 0 0 2px #900;
        }
      }
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #fff;
        background-image: url(${BG_IMAGE});
        background-repeat: no-repeat;
        background-position: 95% 50%;
        border: 1px solid grey;
        border-radius: 0;
        padding: 0.25em 0.4em;
        padding-right: 1.5em;
      }
      select:focus,
      select:hover {
        border-color: black;
        outline: none;
      }
      select:active {
        border-color: #900;
      }
      select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
      }

      /* IE 10/11+ - This hides native dropdown button arrow so it will have the custom appearance, IE 9 and earlier get a native select - targeting media query hack via http://browserhacks.com/#hack-28f493d247a12ab654f6c3637f6978d5 - looking for better ways to achieve this targeting */
      /* The second rule removes the odd blue bg color behind the text in the select button in IE 10/11 and sets the text color to match the focus style's - fix via http://stackoverflow.com/questions/17553300/change-ie-background-color-on-unopened-focused-select-box */
      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        select::-ms-expand {
          display: none;
        }

        select:focus::-ms-value {
          background: transparent;
          color: grey;
        }
      }
      .error-msg {
        display: block;
        color: red;
        max-height: 0;
        overflow: hidden;
        -webkit-transition: max-height 500ms ease-out;
        transition: max-height 500ms ease-out;
        will-change: max-height;
      }

      :required:not(:focus) ~ .error-msg,
      :invalid:required ~ .error-msg {
        max-height: 9em;
      }

      input:focus {
        border: 1px solid black;
      }

      input:not(:focus):invalid {
        border: 1px solid red;
        outline: none;
      }

      input:not(:focus):valid {
        border: 1px solid green;
      }

      * {
        box-sizing: border-box;
      }

      body {
        padding: 1em;
      }

      form ul {
        list-style: none;
      }

      label {
        cursor: pointer;
        display: inline-block;
      }
    `,
  };

  return (
    <div css={styles.textareaContainer}>
      <ul>
        <input
          id="checkbox2"
          name="checkbox"
          type="checkbox"
        //   value={value} 
          {...rest}
        />
        <label for="checkbox2">Choice A</label>
      </ul>
    </div>
  );
}

export default Checkbox;
