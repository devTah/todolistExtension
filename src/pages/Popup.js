/**@jsx jsx */
import { jsx, css } from "@emotion/react";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { formatDate } from "../common/format";
import { useDebounce, useDebouncedCallback } from "../common/useHooks";
import Checkbox from "../components/checkbox/Checkbox";
import NoteArea from "../components/note-area/NoteArea";
import { PlusIcons, TrashIcon } from "../assets/icons/index";
import IconButton from "../components/IconButton";
import Pagination from "../components/Pagination";


function Popup() {
  const newNote = { data: "", id: Date.now(), created: formatDate(Date.now()), checkList: [] };
  const [loading, setloading] = useState(false);
  const [note, setNote] = useState(() => {
    const data = localStorage.getItem("todolist");
    if (data) return JSON.parse(data);
    return [newNote];
  });

  const [currentNote, setCurrentNote] = useState(() => {
    const data = JSON.parse(localStorage.getItem("todolist"));
    if (data) return data[0];
    return note[0];
  });
  const [checkBoxData, setCheckBox] = useState({ data: [], checkList: [] });


  const prevStateRef = useRef(currentNote);
  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setNote(value);
  // };
  const handleChange = useDebouncedCallback((event) => {
    setloading(true);
    console.log(event.target.value);
    setCurrentNote((prevState) => ({ ...prevState, data: event.target.value }));
  }, 1000);


  useEffect(() => {
    const data = currentNote?.data.split(".\n");
    const checkList = currentNote?.checkList ?? [];
    setCheckBox({ checkList, data });
  }, [currentNote]);

  // useEffect(() => {
  //   const checkList = currentNote?.checkList ?? [];
  //   setCurrentNote((prev) => ({ ...prev, checkList }))
  // }, [checkBoxData])

  useEffect(() => {
    const findNote = note.map((item) => {
      if (currentNote.id === item.id) return currentNote;
      return item;
    });
    setNote(findNote);
  }, [currentNote]);

  const deboucing = useDebounce(loading, 1000);

  const onSave = (e, cb) => {
    localStorage.setItem("todolist", JSON.stringify(e));
    if (cb) cb();
  };
  useEffect(
    () => {
      console.log({ note, prevStateRef });
      if ((currentNote && currentNote.data) !== prevStateRef.current.data) {
        onSave(note, () => {
          setloading(false);
        });
      } else {
        setloading(false);
      }
    },
    [deboucing] // Only call effect if debounced search term changes
  );

  const onAddNote = useCallback(() => {
    if (note && note?.length > 4) {
      alert("Still in development, doesn't support more than 5 pages.")
      return false;
    }
    setNote((prevNote) => [...prevNote, newNote]);
  }, [note, setNote]);

  const onDelete = useCallback(() => {
    if (note && note?.length < 2) {
      alert("Minimun is 1 pages")
      return false;
    }
    const deletedNote = (note ?? []).filter(item => item.id !== currentNote?.id);
    localStorage.setItem("todolist", JSON.stringify(deletedNote));
    setNote(deletedNote);
    setCurrentNote(deletedNote[0]);
  }, [note, setNote]);


  const _onChange = useCallback((val) => {
    setCurrentNote(val);
  }, [currentNote, setCurrentNote]);

  return (
    <div css={style.container}>
      <div css={style.backgroundContainer}>
        <h4>Your note</h4>
        {loading && <strong>Is saving ...</strong>}
        <div style={{ marginTop: "10px" }}>
          <strong>{currentNote?.created}</strong>
        </div>
        <div css={style.iconButton}>
          <IconButton onClick={onAddNote}>
            <PlusIcons />
          </IconButton>
          <IconButton onClick={onDelete}>
            <TrashIcon />
          </IconButton>
        </div>
        <div css={style.box}>
          {/* <div css={style.flex_wrap}>
            <Checkbox checkBoxData={checkBoxData} onCheck={(val) => {
              setCheckBox((prev) => ({ ...prev, checkList:  }));
              setCurrentNote((prev) => ({ ...prev, checkList: prev.checkList.push(val) }))
            }} />
          </div> */}
          <NoteArea handleChange={handleChange} defaultValue={currentNote.data ?? ""} checkList={checkBoxData?.checkList ?? []} />
        </div>
        <Pagination paging={note} currentNote={currentNote} onChange={_onChange} />
        <footer>
          @
          <a href="mailto:devtahuy@gmail.com" target="_blank">
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
  iconButton: css`
  width: 90%;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  `,
  flex_wrap: css`
    flex-wrap: wrap;
    width: 8%;
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
      line-height: 0;
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
    display: flex;
    flex-direction: row;
  `,
};
