import Editor from '@monaco-editor/react';
import { useRef, useState } from 'react';

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

function App() {
  return (
    <>
      <header>
        <h2>
          <img src="/src/assets/NoteCodeLogo.svg" alt="NoteCode logo" />
        </h2>
        <h1>
          Create & Share
          <br />
          <span>Your Code easily</span>
        </h1>
      </header>
      <CodeEditor />
    </>
  );
}

function CodeEditor() {
  const [theme, setTheme] = useState('vs-dark');
  const [language, setLanguage] = useState('html');

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    console.log(editorRef.current.getValue());
  }

  return (
    <main>
      <div>
        <Editor
          theme={theme}
          language={language}
          defaultValue={DEFAULT_VALUE}
          onMount={handleEditorDidMount}
        />
      </div>
      <div>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
        </select>
        <img src="/src/assets/down-arrow.svg" alt="Down Arrow" />
      </div>
      <div>
        <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="vs-dark">VS Dark</option>
          <option value="light">Light</option>
        </select>
        <img src="/src/assets/down-arrow.svg" alt="Down Arrow" />
      </div>
    </main>
  );
}

export default App;
