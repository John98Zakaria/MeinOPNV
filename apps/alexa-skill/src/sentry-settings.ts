import {NodeOptions} from "@sentry/node";
import {Integrations as TracingIntegrations} from "@sentry/tracing";
import {prisma} from "./external-clients.js";
import {RewriteFrames} from "@sentry/integrations";

const rootDir = process.cwd();

// This allows TypeScript to detect our global value


export const sentrySettings: NodeOptions = {
    profilesSampleRate: 1,
    tracesSampleRate: 1,
    integrations: [new RewriteFrames({root: rootDir}), new TracingIntegrations.Prisma({client: prisma})],
    debug: true,
    dsn: process.env.SENTRY_DSN
}

