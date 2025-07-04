import Container from "@/components/layout/container";
import FaqList from "@/components/faq";
import GettingStartedList from "@/components/getting-started/list";
import HostedSolutions from "@/components/hosted-solutions";
import MainWrapper from "@/components/layout/main-wrapper";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "Getting Started",
};

export default function GettingStartedPage() {
  return (
    <div className="">
      <MainWrapper>
        <PageHeader
          title="Getting Started"
          description="There are many resources for those interesting in learning more about Avalon."
        />
        <Container>
          <div className="space-y-16">
            <GettingStartedList />
            <section className="mt-16 sm:mt-20 lg:mt-24">
              <h2>F.A.Q. Frequently Asked Questions</h2>
              <FaqList />
            </section>
          </div>
        </Container>
      </MainWrapper>
    </div>
  );
}
