/**@jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { useCallback, useMemo, useState } from "react";

export default function Pagination({ paging, onChange, currentNote }) {
  const styles = {
    container: css`
      width: 100%;
      margin-top: 10px;
      .toggle {
        justify-content: space-evenly;
        flex-direction: row;
        display: flex;
      }
      @media screen and (max-width: 700px) {
        .toggle {
          flex-direction: row;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
      }
      .toggle input {
        display: none;
      }
      
      .toggle input:checked + .label-1 {
        width: 120px;
        background: rgb(255, 64, 129);
      }
      @media screen and (max-width: 700px) {
        .toggle input:checked + .label-1 {
          height: 16px;
          width: auto;
          background: rgb(255, 64, 129)
        }
      }
      .toggle label {
        width: 80px;
        height: 25px;
        margin: 0 20px;
        border-radius: 999px;
        background: rgb(252, 116, 161);
        cursor: pointer;
        box-shadow: 0 5px 5px -5px rgba(255, 64, 129, 0.15), 0 10px 10px -5px rgba(255, 64, 129, 0.15),
          0 15px 15px -5px rgba(255, 64, 129, 0.15), 0 20px 20px -5px rgba(255, 64, 129, 0.15);
        transition: 0.25s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        padding: 10px;
      }
      @media screen and (max-width: 700px) {
        .toggle label {
          width: auto;
          height: 16px;
          margin: 20px 0;
        }
      }
    `,
  };
  const handleChange = (event) => {
    const value = (paging ?? []).find(item => item.id === Number(event.target.value));
    if (onChange) onChange(value);
  };
  const renderPaging = useMemo(() => {
    return (paging ?? []).map((item, idx) => {
      const checkItem = Object.entries(item).toString();
      const checkCurrentNote = Object.entries(currentNote).toString();
      return (
        <React.Fragment key={`paging ${idx}`}>
          <input
            type="radio"
            className={"paging"}
            name={"toggle" + idx}
            id={"toggle" + idx}
            onChange={handleChange}
            value={item.id}
            checked={checkItem === checkCurrentNote}
          />
          <label className="label-1" htmlFor={"toggle" + idx}>
            {idx + 1}
          </label>
        </React.Fragment>
      );
    });
  }, [paging, handleChange, currentNote]);

  return (
    <div css={styles.container}>
      <div className="toggle">{renderPaging}</div>
    </div>
  );
}
