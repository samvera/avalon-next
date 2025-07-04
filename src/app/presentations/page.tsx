import Container from "@/components/layout/container";
import MainWrapper from "@/components/layout/main-wrapper";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import PresentationsList from "@/components/presentations/list";

export const metadata: Metadata = {
  title: "Presentations and Demos",
  description:
    "View presentations about Avalon Media System and access the demo site.",
};

export default function PresentationsPage() {
  return (
    <div className="">
      <MainWrapper>
        <PageHeader
          title="Presentations and Demos"
          description="Try out Avalon Media System on our demo site or view an archived presentation."
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
          <p>
            {" "}
            The demo site is open for anyone to search and browse previously
            uploaded content. To upload and edit your own content, first
            <a href="https://demo.avalonmediasystem.org/users/sign_up">
              create an account
            </a>
            . Then <a href="mailto:avalon@iu.edu">contact the Avalon team</a> to
            request your account be given rights to edit content.
          </p>
        </PageHeader>
        <Container>
          <PresentationsList />
        </Container>
      </MainWrapper>
    </div>
  );
}
