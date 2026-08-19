# WING LAEN LON THAILAND
# RUNNING DATABASE SPECIFICATION

Version: 1.0.0
Status: DESIGN

---

## 1. PURPOSE

กำหนด Database สำหรับ Running Platform
โดยไม่สร้าง Athlete ซ้ำ และไม่ทำลาย Database เดิม

Running ใช้ Athlete ID จากระบบหลักเป็นตัวเชื่อม

---

## 2. DATABASE STRUCTURE

```text
ATHLETE
   │
   ├── RUNNING_ACTIVITY
   │
   ├── XP_LEDGER
   │
   ├── ACHIEVEMENT
   │
   └── CHALLENGE_PROGRESS