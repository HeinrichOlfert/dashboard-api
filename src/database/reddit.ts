import express from "express";
import db from "./db";

const app = express();

// create database table reddit
app.get("/create/table/reddit", async (req, res) => {
  try {
    const client = await db.connect();
    await client.query("CREATE SCHEMA IF NOT EXISTS dashbaord");
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashbaord.reddit (
        id SERIAL PRIMARY KEY,
        followMembers INTEGER NOT NULL,
        postNmbers INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);
  } catch (err) {
    console.log(err);
  }
});