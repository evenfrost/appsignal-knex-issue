import 'reflect-metadata';

import { initialize as initializeDatabase } from './db';
import { Appsignal } from "@appsignal/nodejs";

async function startServer() {
  await initializeDatabase();


  // const meter = Appsignal.client.metrics();
  // console.log('meter', meter);
  // meter.incrementCounter("slow_queries", 1);
}

void startServer();
