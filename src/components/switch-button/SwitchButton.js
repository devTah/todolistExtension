/**@jsx jsx */
import { jsx, css } from "@emotion/react";
/**
 *
 * @param {String} props.type
 */
function SwitchButton(props) {
  const {
    type = "round",
    color = "#A5A2A2",
    buttonColor = "white",
    setToggled,
    isToggled,
  } = props;
  const style = {
    container: css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100vh;
      background-repeat: no-repeat;
      background-size: cover;
    `,

    slider: css`
      .switch {
        position: relative;
        display: inline-block;
        width: 100px;
        height: 50px;
        margin: 15px 0;
        input {
          display: none;
        }
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${color};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        :before {
          position: absolute;
          content: "";
          height: 43px;
          width: 43px;
          left: 4px;
          bottom: 3px;
          background-color: ${buttonColor};
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }
      }

      input {
        :checked + .slider {
          background-color: green;
        }
      }

      input {
        :focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }
      }

      input {
        :checked + .slider:before {
          -webkit-transform: translateX(50px);
          -ms-transform: translateX(50px);
          transform: translateX(50px);
        }
      }
      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }

      .slider.round {
        :before {
          border-radius: 50%;
        }
      }

      /* Strip */
      .switch.strip {
        height: 25px;
      }

      .slider.strip {
        border-radius: 15px;
      }

      .slider.strip {
        :before {
          background: #fff;
          box-shadow: 0 0 10px 3px #ccc;
          border-radius: 50%;
          bottom: -9px;
        }
      }
    `,
  };
  const onToggle = () => {
    if (setToggled) setToggled();
  };
  return (
    <div css={style.container}>
      <div css={style.slider}>
        <label className={"switch " + type}>
          <input type="checkbox" checked={isToggled} onChange={onToggle} />
          <span className={"slider " + type} />
        </label>
      </div>
    </div>
  );
}

export default SwitchButton;
