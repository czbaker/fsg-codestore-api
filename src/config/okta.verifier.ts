import OktaJwtVerifier from "@okta/jwt-verifier";

export const oktaJwtVerifier  = new OktaJwtVerifier({
    issuer: process.env.OKTA_ISSUER
})