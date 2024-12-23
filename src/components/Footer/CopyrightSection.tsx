const CopyrightSection = () => {
  return (
    <div className="bg-primary/90 py-5">
      <div className="ui-container">
        {/* Copyright and Terms */}
        <p className="text-center">
          Copyright © {new Date().getFullYear()}. Delryt - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default CopyrightSection;
