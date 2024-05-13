function DropdownMenu({ children, value, onChange }) {
  return (
    <div className="relative inline-block">
      <select
        className="h-auto cursor-pointer appearance-none rounded-full bg-clr-gray-light py-2 pl-4 pr-10 text-sm text-clr-gray-dark"
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
      <img
        className="pointer-events-none absolute right-2 top-2/4 w-6 -translate-y-2/4"
        src="/src/assets/down-arrow.svg"
        alt="Down Arrow"
      />
    </div>
  );
}

export default DropdownMenu;
