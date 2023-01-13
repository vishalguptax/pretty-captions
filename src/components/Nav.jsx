import logo from "../assets/logo3.png";
const nav = () => {
  return (
    <nav className="py-6 sm:py-4">
      <img
        src={logo}
        alt="Pretty Caption"
        className="logo w-52 sm:w-64 lg:w-72"
      />
    </nav>
  );
}

export default nav