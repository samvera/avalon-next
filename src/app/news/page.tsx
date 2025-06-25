import Container from "@/components/layout/container";
import MainWrapper from "@/components/layout/main-wrapper";
import { Metadata } from "next";
import NewsList from "@/components/news/list";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "News and Events",
  description: "Keep up with the latest news and events in the Hyku ecosystem",
};

export default function Homepage() {
  return (
    <div className="">
      <MainWrapper>
        <PageHeader
          title="News and Events"
          description="Keep up with the latest Avalon news and events"
        />
        <Container>
          <NewsList />
        </Container>
      </MainWrapper>
    </div>
  );
}
