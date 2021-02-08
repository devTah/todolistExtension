/**@jsx jsx */
import { jsx, css } from "@emotion/react";
import { memo, useEffect, useRef, useState } from "react";
import { formatDate } from "../common/format";
import { useDebounce, useDebouncedCallback } from "../common/useHooks";
import Checkbox from "../components/checkbox/Checkbox";
import NoteArea from "../components/note-area/NoteArea";
import { PlusIcons } from "../assets/icons/index";
function Popup() {

  const [loading, setloading] = useState(false);
  const [note, setNote] = useState(() => {
    const data = localStorage.getItem("todolist");
    console.log({ data });
    if (data) return JSON.parse(data);
    return [{ data: "", id: Date.now(), created: formatDate(Date.now()) }];
  });

  const [currentNote, setCurrentNote] = useState(() => {
    const data = localStorage.getItem("todolist");
    if (data) return JSON.parse(data[0]);
    return note[0];
  });
  console.log(currentNote);
  const prevStateRef = useRef(note);
  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setNote(value);
  // };
  const handleChange = useDebouncedCallback((event) => {
    setloading(true);
    console.log(event.target.value);
    setNote((prevState) => ({ ...prevState, data: event.target.value }));
  }, 1000);
  const deboucing = useDebounce(note, 1000);

  const onSave = (e, cb) => {
    localStorage.setItem("todolist", JSON.stringify(e));
    if (cb) cb();
  };
  useEffect(
    () => {
      console.log({ note, deboucing, prevStateRef });
      if ((note && note.data) !== prevStateRef.current.data) {
        onSave(deboucing, () => {
          setloading(false);
        });
      } else {
        setloading(false);
      }
    },
    [deboucing] // Only call effect if debounced search term changes
  );
  return (
    <div css={style.container}>
      <div css={style.backgroundContainer}>
        <h4>Your note</h4>
        {loading && <strong>Is saving ...</strong>}
        <PlusIcons />
        <div css={style.box}>
          {/* <NoteArea handleChange={handleChange} defaultValue={[note].data || ""} /> */}
        </div>
        <footer>
          @
          <a href="#" target="_blank">
            devTah
          </a>
        </footer>
      </div>
    </div>
  );
}
export default memo(Popup);

const style = {
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  `,
  backgroundContainer: css`
    width: 100%;
    height: 100%;

    max-height: 768px;
    max-width: 600px;
    left: 50%;
    top: 0px;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* For mobile phones: */
    [class*="col-"] {
      width: 100%;
    }
    h4 {
      color: #cd0000;
      font-size: 42px;
      letter-spacing: -2px;
      text-align: left;
    }
    @media only screen and (min-width: 768px) {
      /* For desktop: */
      .col-1 {
        width: 8.33%;
      }
      .col-2 {
        width: 16.66%;
      }
      .col-3 {
        width: 25%;
      }
      .col-4 {
        width: 33.33%;
      }
      .col-5 {
        width: 41.66%;
      }
      .col-6 {
        width: 50%;
      }
      .col-7 {
        width: 58.33%;
      }
      .col-8 {
        width: 66.66%;
      }
      .col-9 {
        width: 75%;
      }
      .col-10 {
        width: 83.33%;
      }
      .col-11 {
        width: 91.66%;
      }
      .col-12 {
        width: 100%;
      }
    }

    footer {
      margin-top: 30px;
      font-weight: bold;
      white-space: 2px;
      text-align: center;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
    }
    footer a {
      color: #91d1d3;
    }
  `,
  box: css`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
  `,
};
