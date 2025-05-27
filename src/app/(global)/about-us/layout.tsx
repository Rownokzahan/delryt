interface AboutUsLayoutProps {
  children: React.ReactNode;
}

const AboutUsLayout = ({ children }: AboutUsLayoutProps) => {
  return (
    <div className="bg-primary/10 text-primary text-pretty text-sm sm:text-base">
      <div className="sm:ui-container py-12">{children}</div>
    </div>
  );
};

export default AboutUsLayout;
