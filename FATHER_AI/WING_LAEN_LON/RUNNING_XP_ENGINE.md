# WING LAEN LON THAILAND
# RUNNING XP LEDGER + XP ENGINE

Version: 1.0.0
Status: DESIGN

---

## 1. PURPOSE

สร้างระบบ Experience Point (XP) ที่ตรวจสอบย้อนหลังได้
และเชื่อม Running Activity → Statistics → XP → Level → Passport

---

## 2. CORE FLOW

RUNNING ACTIVITY
↓
VALIDATION
↓
STATISTICS
↓
XP RULE
↓
XP LEDGER
↓
TOTAL XP
↓
LEVEL ENGINE
↓
ATHLETE PASSPORT

---

## 3. XP LEDGER

XP Ledger คือ Source of Truth ของประวัติ XP

ทุกการเพิ่มหรือลด XP ต้องสร้าง Ledger Entry

ข้อมูล:

- Ledger ID
- Athlete ID
- Amount
- Source
- Reference ID
- Rule ID
- Description
- Created At

---

## 4. XP SOURCE

รองรับ:

```text
RUNNING_ACTIVITY
ACHIEVEMENT
CHALLENGE
EVENT
BONUS
ADMIN_ADJUSTMENT