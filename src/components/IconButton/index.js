/**@jsx jsx */
import { jsx, css } from "@emotion/react";

function IconButton({ key, className = "vertical", style, ...props }) {
  const styles = {
    vertical: css`
      color: rgba(255, 255, 255, 1);
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
      border: 1px solid rgba(255, 255, 249, 0.5);
      position: relative;
      cursor: pointer;
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        background-color: rgba(255, 255, 249, 0.5);
        -webkit-transition: all 0.4s;
        -moz-transition: all 0.4s;
        -o-transition: all 0.4s;
        transition: all 0.4s;
        -webkit-transform: scale(0.5, 1);
        transform: scale(0.5, 1);
      }
      :hover::before {
        opacity: 1;
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1);
      }
    `,
    horizontal: css`
      color: rgba(255, 255, 255, 1);
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
      border: 1px solid rgba(255, 255, 249, 0.5);
      position: relative;
      cursor: pointer;
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        background-color: rgba(255, 255, 249, 0.5);
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
      }
    `,
    leftToRight: css`
      color: rgba(255, 255, 255, 1);
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
      border: 1px solid rgba(255, 255, 249, 0.5);
      position: relative;
      cursor: pointer;
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        background-color: rgba(255, 255, 249, 0.5);
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
      }
    `,
    container: css`
      .circle {
        display: inline-block;
        border-radius: 50%;
        min-width: 20px;
        min-height: 20px;
        padding: 5px;
        color: white;
        text-align: center;
        line-height: 1;
        box-sizing: content-box;
        white-space: nowrap;
      }
      .circle:before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        padding-top: 100%;
        height: 0;
      }

      .circle span {
        display: inline-block;
        vertical-align: middle;
      }
    `,
  };
  return (
    <div css={styles.container}>
      <div css={styles[className]} className={"circle"} style={style} {...props}>
        {props.children}
      </div>
    </div>
  );
}

export default IconButton;
