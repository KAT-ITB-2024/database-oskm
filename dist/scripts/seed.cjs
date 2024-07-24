'use strict';

var chunkWPAOBPOK_cjs = require('../chunk-WPAOBPOK.cjs');
var p = require('bcrypt');
var postgresJs = require('drizzle-orm/postgres-js');
var d = require('postgres');
var drizzleOrm = require('drizzle-orm');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var p__default = /*#__PURE__*/_interopDefault(p);
var d__default = /*#__PURE__*/_interopDefault(d);

async function u(r){let t=await p__default.default.hash("password",10);for(let e=0;e<10;e++)try{await r.insert(chunkWPAOBPOK_cjs.k).values({nim:`1352100${e}`,password:t,role:"Peserta",updatedAt:new Date});}catch(s){console.error(`Error:${s}`);break}for(let e=0;e<5;e++){let s=e%2===0?"Mamet":"Mentor";try{await r.insert(chunkWPAOBPOK_cjs.k).values({nim:`1352200${e}`,password:t,role:s,updatedAt:new Date});}catch(o){console.error(`Error:${o}`);break}}}async function h(r){let t=await r.select().from(chunkWPAOBPOK_cjs.k).where(drizzleOrm.eq(chunkWPAOBPOK_cjs.k.role,"Peserta"));if(t)for(let e=0;e<t.length-1;e++){let s=t[e];if(!s)return;try{await r.insert(chunkWPAOBPOK_cjs.m).values({name:`User ${s.id}`,userId:s.id,faculty:"STEI",gender:e%2===0?"male":"female",campus:e%3===0?"Ganesha":"Jatinangor",profileImage:"",point:0,groupNumber:1});}catch(o){console.error(`Error seeding profile ${o}`);return}}}async function w(r){let t=25;for(let s=0;s<4;s++)await r.insert(chunkWPAOBPOK_cjs.s).values({title:`Assignment ${s}`,description:`Description buat assignment ke ${s}`,startTime:new Date(`2023-07-${t}T00:00:00Z`),deadline:new Date(Date.now()+7*24*60*60*1e3),assignmentType:"Daily",point:10,updatedAt:new Date}),t+=1;}async function D(r){for(let t=0;t<4;t++)try{await r.insert(chunkWPAOBPOK_cjs.v).values({name:`Character ${t}`,characterImage:""});}catch(e){console.error(`Error ${e}`);}}async function y(r){let t=await r.query.characters.findMany();t[0]&&(await r.insert(chunkWPAOBPOK_cjs.w).values({day:"Day 1",eventDate:new Date("2023-07-25T00:00:00Z"),openingOpenPresenceTime:"09:00:00",openingClosePresenceTime:"10:00:00",closingOpenPresenceTime:"17:00:00",closingClosePresenceTime:"18:00:00",updatedAt:new Date,lore:"https://google.com",characterName:t[0]?.name}),await r.insert(chunkWPAOBPOK_cjs.w).values({day:"Day 2",eventDate:new Date("2023-07-28T00:00:00Z"),openingOpenPresenceTime:"09:00:00",openingClosePresenceTime:"10:00:00",closingOpenPresenceTime:"17:00:00",closingClosePresenceTime:"18:00:00",updatedAt:new Date,lore:"https://google.com",characterName:t[0]?.name}));}async function P(r){let t=d__default.default("postgres://postgres:postgres@localhost:5432/coba",{max:1}),e=postgresJs.drizzle(t,{schema:chunkWPAOBPOK_cjs.D});await u(e),console.log("DOne seeding user"),await h(e),console.log("Done seeding profile"),await D(e),console.log("Done seeding character"),await y(e),console.log("Done seeding event"),await w(e),console.log("Done seeding assignment"),t.end();}P().catch(r=>{console.log(r);}).then(()=>console.log("Done seeding data!"));

exports.seed = P;
exports.seedAssignment = w;
exports.seedCharacter = D;
exports.seedEvent = y;
exports.seedProfile = h;
exports.seedUser = u;
