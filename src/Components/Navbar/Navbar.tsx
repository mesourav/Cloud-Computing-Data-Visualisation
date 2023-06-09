interface INavbarProps {
  section: number;
  setSection: (number: number) => void;
}

function Navbar(props: INavbarProps) {
  const { section, setSection } = props;
  return (
    <div className="leftBar">
      <div className="leftBarContent">
        <p onClick={() => setSection(0)} className={`${section === 0 ? "active" : ""}`}>
          Raw Data Analysis
        </p>
        <p className={`${section === 1 ? "active" : ""}`} onClick={() => setSection(1)}>
          Applications
        </p>
        <p className={`${section === 2 ? "active" : ""}`} onClick={() => setSection(2)}>
          Resources
        </p>
      </div>
    </div>
  );
}

export default Navbar;
