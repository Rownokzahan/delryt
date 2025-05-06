import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Image
        width={150}
        height={150}
        unoptimized
        priority
        src={"/images/page-loading.webp"}
        alt={"Loading Image"}
      />
    </div>
  );
};

export default LoadingPage;
