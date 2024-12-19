import BgLayer from "@/components/layout/bg-layer";
import Container from "@/components/layout/container";
import MainWrapper from "@/components/layout/main-wrapper";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import PresentationsList from "@/components/presentations/list";

export const metadata: Metadata = {
  title: "Presentations and Demos",
  description: "View presentations and demos about Hyku and its ecosystem.",
};

export default function PresentationsPage() {
  return (
    <div className="">
      <MainWrapper>
        <BgLayer>
          <PageHeader
            title="Presentations and Demos"
            description="Try Avalon Media System out on our demo site or check out a presentation on Avalon. More info here about signing up for an account on demo."
          >
            <div className="mt-8 flex-row space-x-4">
              <a
                href="https://demo.avalonmediasystem.org/"
                target="_blank"
                rel="noreferrer noopener"
                className="button-primary"
              >
                Demo Site
              </a>
            </div>
          </PageHeader>
          <Container>
            <PresentationsList />
          </Container>
        </BgLayer>
      </MainWrapper>
    </div>
  );
}
