interface AuthViewHeaderProps {
  title: string;
  subtitle: string;
}

const AuthViewHeader = ({ title, subtitle }: AuthViewHeaderProps) => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://assets.faasos.io/eatsure/production/6375cc02a15257acf945/images/backgroundLoginNew.svg)",
      }}
    >
      <div className="aspect-9/3 border-b border-gray-100 bg-linear-to-tr from-uiWhite/90 bg-blend-overlay relative">
        <div className="px-6 absolute bottom-4">
          <h3 className="text-2xl font-medium">{title}</h3>
          <p className="text-uiBlack-light text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthViewHeader;
