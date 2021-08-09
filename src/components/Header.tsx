export function Header() {
  return (
    <header className="py-4 shadow-lg flex justify-center">
      <nav className="flex">
        <div className="ml-4 cursor-pointer">Home</div>
        <div className="ml-4 cursor-pointer">Tags</div>
        <div className="ml-4 cursor-pointer">About</div>
      </nav>
    </header>
  );
}
