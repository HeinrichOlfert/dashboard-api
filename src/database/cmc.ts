import express from "express";
import db from "./db";

const app = express();

// create database table cmc
app.get("/create/table/cmc", async (req, res) => {
  try {
    const client = await db.connect();
    await client.query("CREATE SCHEMA IF NOT EXISTS dashbaord");
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashbaord.cmc (
        id SERIAL PRIMARY KEY,
        followMembers INTEGER NOT NULL,
        postNumbers INTEGER NOT NULL,
        tokenPrice INTEGER NOT NULL,
        tokenVolume INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);
  } catch (err) {
    console.log(err);
  }
});
