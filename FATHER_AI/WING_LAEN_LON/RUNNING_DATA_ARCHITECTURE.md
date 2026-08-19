# WING LAEN LON THAILAND
# RUNNING DATA ARCHITECTURE
## มาตรฐานข้อมูลกลางของ Running Platform

Version: 1.0.0
Status: DESIGN

---

## 1. PURPOSE

Running Platform เป็น Independent Module
ที่ทำงานแยกจาก Core Platform แต่เชื่อมกับ Athlete Identity
และ Athlete Passport ผ่าน Contract ที่กำหนดไว้

---

## 2. CORE RELATION

Athlete
↓
Running Activity
↓
Statistics
↓
XP Ledger
↓
Level
↓
Achievement / Challenge
↓
Athlete Passport

---

## 3. ATHLETE

Athlete ID จากระบบหลักคือ Identity เดียว

Running Platform ห้ามสร้าง Athlete Identity ซ้ำ

---

## 4. RUNNING ACTIVITY

Running Activity คือ Source of Truth ของการวิ่ง

ข้อมูลหลัก:

- Activity ID
- Athlete ID
- Sport
- Activity Date
- Distance
- Duration
- Pace
- Average Speed
- Elevation Gain
- GPS Route
- Source
- Verification Status
- External Provider
- External Activity ID
- Metadata
- Created At
- Updated At

---

## 5. STATISTICS

Statistics เป็น Derived Data

คำนวณจาก Running Activity เช่น:

- Total Distance
- Total Runs
- Total Time
- Average Pace
- Best Pace
- Longest Run
- Elevation Gain
- Current Streak
- Longest Streak
- Monthly Statistics
- Yearly Statistics

ห้ามใช้ Statistics เป็น Source of Truth แทน Activity

---

## 6. XP LEDGER

XP ต้องมีประวัติที่ตรวจสอบย้อนกลับได้

ตัวอย่าง Source:

- RUNNING_ACTIVITY
- ACHIEVEMENT
- CHALLENGE
- EVENT
- BONUS
- ADMIN_ADJUSTMENT

ทุก XP ต้องระบุ:

- Athlete ID
- XP Amount
- Source
- Reference ID
- Created At

XP Total = ผลรวมจาก XP Ledger ตามกฎระบบ

---

## 7. LEVEL

Level เป็น Derived Data จาก XP

XP
↓
Level Rules
↓
Current Level

ผู้ใช้ไม่สามารถกำหนด Level เอง

---

## 8. PASSPORT OUTPUT

Running Platform ส่งผลลัพธ์ที่จำเป็นให้ Athlete Passport:

- Total Distance
- Total Runs
- Total Time
- Best Pace
- Longest Run
- Current Streak
- XP
- Level
- Achievements
- Badges
- Challenge Progress

Passport เป็น Unified Athlete View
ไม่ใช่เจ้าของ Running Logic

---

## 9. SOURCE OF TRUTH

Athlete = Athlete Identity

Running Activity = Running History

XP Ledger = Experience History

Rules = Calculation Rules

Passport = Presentation / Unified View

---

## 10. DATA FLOW

External / Manual / GPS
↓
Running Activity
↓
Validation
↓
Verification
↓
Statistics
↓
XP Ledger
↓
Level
↓
Achievement / Challenge
↓
Passport

---

## 11. ISOLATION RULE

Running Platform ต้องแยก:

- Database Models
- Business Logic
- Services
- API
- Validation
- Calculation Engine

ออกจาก Core Logic

การเชื่อมกับ Core ต้องผ่าน Contract ที่กำหนด

---

## 12. FINAL RULE

> ONE ATHLETE
> ONE ACTIVITY STANDARD
> ONE SOURCE OF TRUTH
> ONE XP LEDGER
> ONE PASSPORT VIEW

---

## CURRENT TARGET

STEP 2 — RUNNING DATABASE

หลังเอกสารนี้ได้รับการตรวจสอบแล้ว
จึงเริ่มสร้าง Prisma Models

END