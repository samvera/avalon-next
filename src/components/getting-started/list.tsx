import {
  ChatBubbleBottomCenterIcon,
  CodeBracketSquareIcon,
  DocumentTextIcon,
  HomeModernIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Avalon User Documentation",
    description:
      "The Avalon user documentation explains more about using Avalon for patrons and staff users.",
    href: "https://samvera.atlassian.net/wiki/spaces/avalon/overview",
    icon: DocumentTextIcon,
  },
  {
    name: "Avalon Developers",
    description:
      "As an open source software solution, Avalon's code is freely available on Github. The ReadMe includes information on setting up your environment, deploying the application, and running the stack.",
    href: "https://github.com/samvera/hyku?tab=readme-ov-file#readme",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Current Releases and Features",
    description:
      "Details on new features, bug fixes, and component updates are available on the Releases page in Github.",
    href: "https://github.com/avalonmediasystem/avalon/releases",
    icon: RocketLaunchIcon,
  },
  {
    name: "Samvera",
    description:
      "Avalon is a solution of the Samvera Community. Learn more about Samvera at samvera.org.",
    href: "https://samvera.org",
    icon: HomeModernIcon,
  },
];

export default function GettingStartedList() {
  return (
    <div className="mx-auto max-w-2xl  lg:max-w-none">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="flex flex-col">
            <dt className="text-base font-semibold leading-7 text-foreground">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <feature.icon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {feature.name}
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-foreground-muted">
              <p className="flex-auto">{feature.description}</p>
              <p className="mt-6">
                <a
                  href={feature.href}
                  className="text-sm font-semibold leading-6 text-primary no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
