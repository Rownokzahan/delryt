import GiveSureDesktop from "./GiveSureDesktop";
import GiveSureMobile from "./GiveSureMobile";

const GiveSure = () => {
  return (
    <section className="bg-dark text-white">
      <div className="ui-container sm:hidden">
        <GiveSureMobile />
      </div>

      <div className="ui-container hidden sm:block">
        <GiveSureDesktop />
      </div>
    </section>
  );
};

export default GiveSure;
