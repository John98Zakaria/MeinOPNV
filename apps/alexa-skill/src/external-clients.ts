import { PrismaClient } from '@prisma/client';
import { createClient } from 'hafas-client';
import { profile } from 'hafas-client/p/db/index.js';
import { type BahnHafas } from './core/types.js';


export const bahnClient = createClient(profile, 'aws-lambda-bahn') as BahnHafas;
export const prisma = new PrismaClient();

