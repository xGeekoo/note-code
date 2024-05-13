import { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import DropdownMenu from './DropdownMenu';
import ShareButton from './ShareButton';

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
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('html');

  const editorRef = useRef(null);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  function showValue() {
    console.log(editorRef.current.getValue());
  }

  const backgroundColor =
    theme === 'vs-dark' ? 'bg-clr-editor-black' : 'bg-clr-editor-white';

  return (
    <div className={`${backgroundColor} rounded-xl pt-5 shadow-xl`}>
      <div className="text-5xl text-clr-gray-light">
        <Editor
          height="50rem"
          theme={theme}
          language={language}
          defaultValue={DEFAULT_VALUE}
          onMount={handleEditorDidMount}
        />
      </div>
      <div className="flex items-center gap-2 rounded-full px-4 py-7">
        <DropdownMenu
          value={language}
          onChange={e => setLanguage(e.target.value)}
        >
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
        </DropdownMenu>
        <DropdownMenu value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="vs-dark">VS Dark</option>
        </DropdownMenu>
        <ShareButton />
      </div>
    </div>
  );
}

export default CodeEditor;
