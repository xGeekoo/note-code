import CodeEditor from './components/CodeEditor';

function App() {
  return (
    <div className="mx-auto max-w-[56.25rem] px-4 py-9">
      <header className="mb-9">
        <h2 className="mb-9">
          <img
            className="mx-auto h-6"
            src="/src/assets/NoteCodeLogo.svg"
            alt="NoteCode logo"
          />
        </h2>
        <h1 className="text-center text-[2rem]">
          Create & Share
          <br />
          <span className="text-[2.5rem]">Your Code easily</span>
        </h1>
      </header>
      <main>
        <CodeEditor />
      </main>
    </div>
  );
}

export default App;
