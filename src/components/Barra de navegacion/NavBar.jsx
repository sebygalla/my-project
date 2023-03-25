
function NavBar() {

  return (
    <header className="fixed w-full top-0 left-0 bg-black/50">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="ml-2">
          <img src="./src/assets/image/logoCruz.png" width={'80em'}/>
        </div>

        {/* Items navegacion */}
        <nav className="sm:hidden md:mr-6 md:flex">
        
          <div className="text-white text-center uppercase">
            <a className="m-2" href="#">inicio</a>
            <span>|</span>
            <a className="m-2" href="#">nosotros</a>
            <span>|</span>
            <a className="m-2" href="#">productos</a>
            <span>|</span>
            <a className="m-2" href="#">contacto</a>
          </div>

        </nav>

        {/* Menu hamburguesa */}
        <div className="text-white sm:m-6 md:hidden">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </div>

      </div>

    </header>
  )
};
export default NavBar;

