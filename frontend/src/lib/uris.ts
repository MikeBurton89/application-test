
const defaultUrl: string = process.env.NEXT_PUBLIC_DEFAULT_URL ?? "";
const graphqlUrl: string =  process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "";
const dockerGraphqlUrl: string = process.env.NEXT_PUBLIC_GRAPHQL_SSC_URL ?? "";

export {
    defaultUrl,
    dockerGraphqlUrl,
    graphqlUrl,
}
