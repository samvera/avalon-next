import { createClient, type ContentfulClientApi } from "contentful";
import {
  createClient as createManagementClient,
  type PlainClientAPI,
} from "contentful-management";

let client: ContentfulClientApi<undefined>;
let managementClient: PlainClientAPI;

function getContentful() {
  if (!client) {
    client = createClient({
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
      environment: "avalon" as string,
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    });
  }

  return client;
}

function getContentfulManagement() {
  if (!managementClient) {
    managementClient = createManagementClient(
      {
        accessToken: process.env.CONTENTFUL_CMA_TOKEN as string,
      },

      {
        type: "plain",
        defaults: {
          spaceId: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
          // We are only managing the "avalon" environment with this client
          environmentId: "avalon",
        },
      },
    );
  }

  return managementClient;
}

export default getContentful;
export { getContentfulManagement };
