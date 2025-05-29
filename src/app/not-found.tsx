import GlobalNavbar from "@/components/GlobalNavbar";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <GlobalNavbar />

      <main className="h-[calc(100dvh-72px)] grid place-items-center">
        <div className="ui-container text-center">
          <h1 className="text-5xl sm:text-7xl font-bold">404</h1>

          <p className="mt-2 sm:text-lg font-medium text-uiBlack-light">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>

          <Button href="/" className="mt-6 w-44 mx-auto">
            Go Home
          </Button>
        </div>
      </main>
    </>
  );
}
