'use strict';

var chunk7YF2S5JY_cjs = require('./chunk-7YF2S5JY.cjs');
var p = require('bcrypt');
var postgresJs = require('drizzle-orm/postgres-js');
var d = require('postgres');
var drizzleOrm = require('drizzle-orm');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var p__default = /*#__PURE__*/_interopDefault(p);
var d__default = /*#__PURE__*/_interopDefault(d);

async function h(t){let s=await p__default.default.hash("password",10);for(let e=0;e<10;e++)try{await t.insert(chunk7YF2S5JY_cjs.k).values({nim:`1352100${e}`,password:s,role:"Peserta",updatedAt:new Date});}catch(a){console.error(`Error:${a}`);break}for(let e=0;e<5;e++){let a=e%2===0?"Mamet":"Mentor";try{await t.insert(chunk7YF2S5JY_cjs.k).values({nim:`1352200${e}`,password:s,role:a,updatedAt:new Date});}catch(o){console.error(`Error:${o}`);break}}}async function f(t){let s=await t.select().from(chunk7YF2S5JY_cjs.k).where(drizzleOrm.eq(chunk7YF2S5JY_cjs.k.role,"Peserta"));if(s)for(let e=0;e<s.length-1;e++){let a=s[e];if(!a)return;try{await t.insert(chunk7YF2S5JY_cjs.m).values({name:`User ${a.id}`,userId:a.id,faculty:"STEI",gender:e%2===0?"male":"female",campus:e%3===0?"Ganesha":"Jatinangor",profileImage:"",point:0,groupNumber:1,updatedAt:new Date});}catch(o){console.error(`Error seeding profile ${o}`);return}}}async function w(t){let s=25;for(let a=0;a<4;a++)await t.insert(chunk7YF2S5JY_cjs.s).values({title:`Assignment ${a}`,description:`Description buat assignment ke ${a}`,startTime:new Date(`2023-07-${s}T00:00:00Z`),deadline:new Date(Date.now()+7*24*60*60*1e3),assignmentType:"Daily",point:10,updatedAt:new Date}),s+=1;}async function D(t){for(let s=0;s<4;s++)try{await t.insert(chunk7YF2S5JY_cjs.v).values({name:`Character ${s}`,characterImage:""});}catch(e){console.error(`Error ${e}`);}}async function y(t){let s=await t.query.characters.findMany();s[0]&&(await t.insert(chunk7YF2S5JY_cjs.w).values({day:"Day 1",eventDate:new Date("2023-07-25T00:00:00Z"),openingOpenPresenceTime:"09:00:00",openingClosePresenceTime:"10:00:00",closingOpenPresenceTime:"17:00:00",closingClosePresenceTime:"18:00:00",updatedAt:new Date,lore:"https://google.com",characterName:s[0]?.name}),await t.insert(chunk7YF2S5JY_cjs.w).values({day:"Day 2",eventDate:new Date("2023-07-28T00:00:00Z"),openingOpenPresenceTime:"09:00:00",openingClosePresenceTime:"10:00:00",closingOpenPresenceTime:"17:00:00",closingClosePresenceTime:"18:00:00",updatedAt:new Date,lore:"https://google.com",characterName:s[0]?.name}));}async function P(t){let s=d__default.default(t,{max:1}),e=postgresJs.drizzle(s,{schema:chunk7YF2S5JY_cjs.D});await h(e),console.log("DOne seeding user"),await f(e),console.log("Done seeding profile"),await D(e),console.log("Done seeding character"),await y(e),console.log("Done seeding event"),await w(e),console.log("Done seeding assignment"),s.end();}var T="postgres://postgres:postgres@localhost:5432/coba";P(T).catch(t=>{console.log(t);}).then(()=>console.log("Done seeding data!"));

exports.seed = P;
exports.seedAssignment = w;
exports.seedCharacter = D;
exports.seedEvent = y;
exports.seedProfile = f;
exports.seedUser = h;
