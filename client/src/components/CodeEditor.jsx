import { useEffect, useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import toast from 'react-hot-toast';
import DropdownMenu from './DropdownMenu';
import ShareButton from './ShareButton';
import { getNote } from '../services/apiNote';
import { useNavigate, useParams } from 'react-router-dom';

const DEFAULT_VALUE = `
<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallengs.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>
`.trim();

function CodeEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const note = useRef(null);
  const isError = useRef(false);
  const manualChange = useRef(false);
  const [isShared, setIsShared] = useState(false);
  const [isLoaded, setIsLoaded] = useState(() => {
    return { editor: false, data: false };
  });
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('html');

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
    setIsLoaded(obj => {
      return { ...obj, editor: true };
    });

    if (!id) return;

    if (note.current && !isError.current) {
      manualChange.current = true;
      editorRef.current.setValue(note.current.message);
    }
  }

  function showValue() {
    return editorRef.current.getValue();
  }

  function handleChange() {
    manualChange.current ? (manualChange.current = false) : setIsShared(false);
  }

  const backgroundColor =
    theme === 'vs-dark' ? 'bg-clr-editor-black' : 'bg-clr-editor-white';

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    let isAborted;

    async function main() {
      try {
        if (!id) return;
        const { note: newNote } = await getNote(id, signal);
        note.current = newNote;
        setLanguage(newNote.code);
        setTheme(newNote.theme);
        setIsShared(true);
        if (editorRef.current) {
          manualChange.current = true;
          editorRef.current.setValue(newNote.message);
        }
      } catch (err) {
        if (err.name === 'AbortError') return (isAborted = true);
        isError.current = true;
        console.error(err);
        toast.error(err.message);
        navigate('/', { replace: true });
      } finally {
        if (!isAborted) {
          setIsLoaded(obj => {
            return { ...obj, data: true };
          });
        }
      }
    }

    main();

    return () => controller.abort();
  }, []);

  // console.log(isLoaded.editor, isLoaded.data);

  return (
    <div
      className={`${backgroundColor} rounded-xl pt-5 shadow-xl ${!isLoaded.editor || !isLoaded.data ? 'pointer-events-none' : ''}`}
    >
      <div className="relative text-5xl text-clr-gray-light">
        <Editor
          height="43.75rem"
          theme={theme}
          language={language}
          defaultValue={id ? '' : DEFAULT_VALUE}
          onMount={handleEditorDidMount}
          loading=""
          onChange={handleChange}
        />
        {(!isLoaded.editor || !isLoaded.data) && <div className="loader"></div>}
      </div>
      <div className="flex flex-col gap-y-6 rounded-full px-5 py-6 md:flex-row md:items-center md:justify-between md:py-4">
        <div className="flex justify-center gap-3 md:justify-start">
          <DropdownMenu
            value={language}
            onChange={e => {
              setLanguage(e.target.value);
              setIsShared(false);
            }}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
          </DropdownMenu>
          <DropdownMenu
            value={theme}
            onChange={e => {
              setTheme(e.target.value);
              setIsShared(false);
            }}
          >
            <option value="light">Light</option>
            <option value="vs-dark">VS Dark</option>
          </DropdownMenu>
        </div>
        <ShareButton
          isShared={isShared}
          setIsShared={setIsShared}
          showValue={showValue}
          language={language}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default CodeEditor;
