import BgLayer from "@/components/layout/bg-layer";
import Container from "@/components/layout/container";
import FeatureList from "@/components/features/list";
import Implementations from "@/components/features/implementations";
import MainWrapper from "@/components/layout/main-wrapper";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "Features and Implementations",
};

export default async function FeaturesPage() {
  return (
    <div className="">
      <MainWrapper>
        <BgLayer>
          <PageHeader
            title="Features and Implementations"
            description="Avalon offers an easy-to-install, easy-to-configure, feature-rich application for presenting and managing AV resources."
          />
          <Container>
            <h2>Features</h2>
            <p>
              Avalon has a long list of features and distinctions, including:
            </p>
            <FeatureList />
            <section className="space-y-6">
              <div>
                <h3>Easy Transcoding</h3>
                <p>
                  Avalon takes the guesswork out of processing media for the
                  web.
                </p>
              </div>
              <div>
                <h3>Powerful Access Control</h3>
                <p>
                  Avalon integrates with your authentication platform and
                  provides the ability to manage access for staff and patrons.
                </p>
              </div>
              <div>
                <h3>User Management</h3>
                <p>
                  Create local users or system groups, manage access using
                  directory group membership, and more.
                </p>
              </div>
              <div>
                <h3>Collections Management</h3>
                <p>Avalon provides many ways to update and evaluate items.</p>
              </div>
              <p>Visit the Avalon wiki for more information.</p>
            </section>

            <section className="pt-20">
              <h2 className="mb-10">Implementations</h2>
              <p>
                The insitutions listed below are active Avalon users and links
                to their institutional instances are provided when available.
                Please contact us if your institution is using Avalon and would
                like to be listed here.
              </p>
              <ul dir="ltr">
                <li>
                  <a href="https://avalon.bgsu.edu/">
                    Bowling Green State University
                  </a>
                </li>
                <li>
                  <a href="https://avreserves.libraries.emory.edu/">
                    Emory University
                  </a>
                </li>
                <li>
                  Fenway Libraries Online (for New England Conservatory of
                  Music)
                </li>
                <li>
                  <a href="https://media.dlib.indiana.edu/">
                    Indiana University
                  </a>
                </li>
                <li>Musician's Institute, LA</li>
                <li>
                  <a href="http://media.northwestern.edu">
                    Northwestern University
                  </a>
                </li>
                <li>Oberlin College</li>
                <li>
                  <a href="https://avalon.library.tamu.edu/">
                    Texas A&amp;M University
                  </a>
                </li>
                <li>
                  <a href="https://avalon-streaming.library.ucla.edu/">UCLA</a>
                </li>
                <li>
                  <a href="https://av.lib.uh.edu">University of Houston</a>
                </li>
                <li>University of Louisville</li>
                <li>
                  <a href="https://av.lib.umd.edu/">University of Maryland</a>
                </li>
                <li>
                  <a href="https://avalon.lib.virginia.edu/">
                    University of Virginia
                  </a>
                </li>
                <li>GBH</li>
              </ul>
              {/* <Implementations /> */}
            </section>
          </Container>
        </BgLayer>
      </MainWrapper>
    </div>
  );
}
