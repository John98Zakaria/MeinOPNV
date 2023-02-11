import Prisma from '@prisma/client';
import {createClient} from 'hafas-client';
import {profile} from 'hafas-client/p/db/index.js';

const {PrismaClient} = Prisma;

export const bahnClient = createClient(profile, 'aws-lambda-bahn');
export const prisma = new PrismaClient();

