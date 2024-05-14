import CodeEditor from '../components/CodeEditor';

function Main() {
  return (
    <div className="mx-auto max-w-[56.25rem] px-4 py-9">
      <header className="mb-9">
        <h2 className="mb-9">
          <a className="mx-auto block w-max" href="/">
            <img
              className="h-6"
              src="/src/assets/NoteCodeLogo.svg"
              alt="NoteCode logo"
            />
          </a>
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

export default Main;
