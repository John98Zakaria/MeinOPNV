import { type NodeOptions } from '@sentry/node';
import { Integrations as TracingIntegrations } from '@sentry/tracing';
import { prisma } from './external-clients.js';
import { RewriteFrames } from '@sentry/integrations';


export const sentrySettings: NodeOptions = {
    profilesSampleRate: 1,
    tracesSampleRate: 1,
    integrations: [new RewriteFrames({ root: process.cwd() }),
        new TracingIntegrations.Prisma({ client: prisma })],
    debug: true,
    dsn: process.env.SENTRY_DSN,
};

