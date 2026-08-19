# WING LAEN LON THAILAND
# RUNNING MASTER PLAN

Version: 1.0.0
Status: MASTER

## ARCHITECTURE CHAIN

01 RUNNING DATA ARCHITECTURE
↓
กำหนดโครงสร้างข้อมูล
↓
02 RUNNING DATABASE
↓
รองรับข้อมูลจริง
↓
03 RUNNING API
↓
เปิดทางให้ระบบต่าง ๆ ติดต่อกัน
↓
04 STATISTICS ENGINE
↓
คำนวณผลจาก Activity
↓
05 XP LEDGER + XP ENGINE
↓
เปลี่ยนความสำเร็จเป็น XP
↓
06 LEVEL ENGINE
↓
เปลี่ยน XP เป็น Level
↓
07 PASSPORT INTEGRATION
↓
นำผลลัพธ์เข้าสู่ Athlete Passport
↓
08 ACHIEVEMENT / BADGE / CHALLENGE
↓
สร้างความสำเร็จและภารกิจ
↓
09 VERIFICATION / RANKING / EVENT
↓
สร้างข้อมูลที่ตรวจสอบและจัดอันดับได้
↓
10 GPS / EXTERNAL / AI
↓
เชื่อมโลกภายนอกและ Intelligence
↓
PRODUCTION IMPLEMENTATION

## MASTER RULE

ทุก STEP ต้องสอดคล้องกับ STEP ก่อนหน้า

ห้ามข้าม Dependency

ห้ามสร้าง Logic ซ้ำ

ห้ามย้าย Running Logic เข้า Core โดยไม่จำเป็น

ห้ามรื้อระบบเดิม

ห้ามลด Feature เดิม

ห้ามแก้ Production โดยไม่มีการตรวจสอบ

## SYSTEM BOUNDARY

RUNNING PLATFORM
= Independent Module

CORE PLATFORM
= Protected

ATHLETE PASSPORT
= Unified Athlete View

DATABASE
= Source of Truth

API / SERVICE
= Integration Boundary

## IMPLEMENTATION ORDER

DESIGN
↓
DATABASE
↓
SERVICE
↓
API
↓
ENGINE
↓
PASSPORT
↓
TEST
↓
PRODUCTION

## FINAL PRINCIPLE

ADD — DON'T DESTROY

ONE ATHLETE
ONE IDENTITY
ONE SOURCE OF TRUTH
ONE CONNECTED ECOSYSTEM