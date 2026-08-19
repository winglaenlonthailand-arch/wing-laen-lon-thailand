# WING LAEN LON THAILAND
# RUNNING VERIFICATION / RANKING / EVENT

Version: 1.0.0
Status: DESIGN

---

## 1. PURPOSE

กำหนดมาตรฐานการตรวจสอบ Activity
และการนำข้อมูลไปใช้กับ Ranking และ Event

หลัก:

ACTIVITY
↓
VALIDATION
↓
VERIFICATION
↓
OFFICIAL DATA
↓
RANKING / EVENT
↓
PASSPORT

---

## 2. ACTIVITY STATUS

Activity ต้องมีสถานะ:

- PENDING
- VALID
- VERIFIED
- REJECTED
- INVALIDATED

---

## 3. VALIDATION

Validation ตรวจความถูกต้องทางเทคนิค:

- Athlete Ownership
- Distance
- Duration
- Date
- Sport
- Duplicate
- Required Fields
- Data Format

Validation ไม่เท่ากับ Official Verification

---

## 4. VERIFICATION LEVEL

รองรับ:

### LEVEL 0 — SELF REPORTED

ผู้ใช้บันทึกเอง

ใช้สำหรับ:

- Personal Statistics
- Training History
- XP ตาม Policy

---

### LEVEL 1 — DEVICE / GPS

ข้อมูลมาจาก:

- GPS
- Running Watch
- Fitness Device
- External Platform

ต้องเก็บ Source และ External Activity ID

---

### LEVEL 2 — EVENT VERIFIED

Activity หรือ Result
ได้รับการยืนยันจาก Event Organizer

ใช้สำหรับ:

- Official Result
- Event Ranking
- Event Achievement

---

### LEVEL 3 — OFFICIAL

ข้อมูลผ่านการตรวจสอบตามมาตรฐาน Platform

ใช้สำหรับข้อมูลที่ต้องการความน่าเชื่อถือสูงสุด

---

## 5. VERIFICATION RECORD

ต้องสามารถเก็บ:

- Verification ID
- Activity ID
- Verifier
- Verification Level
- Verification Method
- Status
- Verified At
- Metadata

---

## 6. RANKING

Ranking ต้องคำนวณจากข้อมูลที่กำหนด
โดยมี Rule ชัดเจน

ตัวอย่าง:

```text
Distance
Time
Pace
Age Group
Gender Category
Province
Event
Season