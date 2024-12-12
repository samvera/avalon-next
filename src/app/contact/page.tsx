import BgLayer from "@/components/layout/bg-layer";
import ContactCard from "@/components/contact/card";
import Container from "@/components/layout/container";
import MainWrapper from "@/components/layout/main-wrapper";
import { Metadata } from "next";

const contactCards = [
  {
    description:
      "Email us with questions, requests for demos, and other communications.",
    email: "avalon@iu.edu",
    title: "Email",
  },
  {
    description:
      "Request to join Samvera's slack workspace and join the public #avalon channel. Questions welcome!",
    email: "",
    label: "Sign Up for Samvera Slack",
    title: "Samvera Slack",
    url: "https://forms.gle/oeLBwbQw9QoCZWTL6",
  },
  {
    description:
      "A community group that meets monthly to talk Avalon and all things AV in the world of libraries and archives. Agenda topics are sourced from the community and all potential and current Avalon users are invited to attend.",
    label: "Call Info and Meeting Notes",
    title: "Avalon User Roundtable",
    url: "https://samvera.atlassian.net/wiki/spaces/AVALON/pages/1957954091/Avalon+User+Roundtable",
  },
  {
    description:
      "All Avalon code is open source and development is tracked in Github.",
    title: "Developers",
    label: "Avalon on Github",
    url: "https://github.com/avalonmediasystem/avalon",
  },
  {
    description: "The mailing list for project announcements and discussion.",
    email: "avalon-discuss-l@list.indiana.edu",
    title: "Mailing List",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Avalon team",
};

export default function ContactPage() {
  return (
    <div className="">
      <MainWrapper>
        <BgLayer>
          <Container>
            <div className=" py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 dark:divide-gray-900 lg:mx-0 lg:max-w-none">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight">
                        Get in touch
                      </h2>
                      <p className="mt-4 leading-7 text-foreground-muted">
                        primary mailing list for announcements about upcoming
                        developments, new releases, meeting and other important
                        milestones during the development of Avalon Media
                        System.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                      {contactCards.map((card, index) => (
                        <ContactCard key={index} {...card} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </BgLayer>
      </MainWrapper>
    </div>
  );
}
