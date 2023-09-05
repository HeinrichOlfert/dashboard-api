import express from "express";
import db from "./db";

const app = express();

app.get("/", async (req, res) => {
  try {
    const client = await db.connect();
    await client.query("CREATE SCHEMA IF NOT EXISTS dashbaord");
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashbaord.twitter (
        id SERIAL PRIMARY KEY,
        followMembers INTEGER NOT NULL,
        collageMembers INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashbaord.youtube (
        id SERIAL PRIMARY KEY,
        followMembers INTEGER NOT NULL,
        videosNumber INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashbaord.reddit (
        id SERIAL PRIMARY KEY,
        followMembers INTEGER NOT NULL,
        postNmbers INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);
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
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashbaord.debank (
        id SERIAL PRIMARY KEY,
        followMembers INTEGER NOT NULL,
        postNumbers INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashbaord.telegram (
        id SERIAL PRIMARY KEY,
        usersMembers INTEGER NOT NULL,
        messageNumbers INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashbaord.discord (
        id SERIAL PRIMARY KEY,
        usersMembers INTEGER NOT NULL,
        messageNumbers INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashbaord.github (
        id SERIAL PRIMARY KEY,
        contributorsNumber INTEGER NOT NULL,
        commitNumbers INTEGER NOT NULL,
        releaseNumbers INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashbaord.tokenInfo (
        id SERIAL PRIMARY KEY,
        circulatinSupply INTEGER NOT NULL,
        totalSupply INTEGER NOT NULL,
        totalMinting INTEGER NOT NULL,
        rewardMinting INTEGER NOT NULL,
        spendProposalMinting INTEGER NOT NULL,
        validatorPayoutMinting INTEGER NOT NULL,
        creatorPayoutMinting INTEGER NOT NULL,
        stakeTokens INTEGER NOT NULL,
        stakingAPR INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashbaord.traction (
        id SERIAL PRIMARY KEY,
        channelNumber INTEGER NOT NULL,
        video INTEGER NOT NULL,
        comment INTEGER NOT NULL,
        reaction INTEGER NOT NULL,
        videoNFT INTEGER NOT NULL,
        videoNFTsales INTEGER NOT NULL,
        videoNFTTotalPrice INTEGER NOT NULL,
        YYPPayout INTEGER NOT NULL,
        block INTEGER NOT NULL,
        transactions INTEGER NOT NULL,
        extrinsics INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashbaord.team (
        id SERIAL PRIMARY KEY,
        councilmembers VARCHAR(50) NOT NULL,
        leads VARCHAR(50) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);
  } catch (err) {
    console.log(err);
  }
});