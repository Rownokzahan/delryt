import Logo from "@/components/Logo";

const Banner = () => {
  return (
    <div className="ui-container mb-8">
      <div
        className="py-16 rounded-md bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://product-assets.faasos.io/eatsure/production/desktopHomeCardTexturePhase4.svg')",
        }}
      >
        <Logo color="white" size="large" className="mx-auto" />
      </div>
    </div>
  );
};

export default Banner;
