import Image from "next/image";
import Link from "next/link";
import MainWrapper from "@/components/layout/main-wrapper";
import appScreenshot from "../../public/umd-avalon-screenshot.jpg";

export default async function Homepage() {
  return (
    <div className="">
      <MainWrapper>
        <div className="pb-24 sm:py-16 lg:pb-40 animate-fade-in">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground  sm:text-6xl">
                Avalon Media System
              </h1>
              <p className="mt-6 text-lg leading-8 text-foreground-muted">
                Avalon Media System is an open source platform for managing and
                providing access to large collections of digital audio and
                moving image content. The project is led by the libraries of
                Indiana University Bloomington.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/getting-started" className="button-primary">
                  Get started
                </Link>
                <a
                  href="https://samvera.atlassian.net/wiki/spaces/avalon/overview"
                  className="text-sm font-semibold leading-6 text-foreground no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src={appScreenshot}
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-foreground/10"
                />
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </div>
  );
}
