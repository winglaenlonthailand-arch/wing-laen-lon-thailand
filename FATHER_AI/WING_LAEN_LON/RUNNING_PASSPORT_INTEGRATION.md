# WING LAEN LON THAILAND
# RUNNING → ATHLETE PASSPORT INTEGRATION

Version: 1.0.0
Status: DESIGN

---

## 1. PURPOSE

เชื่อม Running Platform เข้ากับ Athlete Passport
โดยไม่ย้าย Running Logic เข้าไปใน Passport

Passport ทำหน้าที่เป็น Unified Athlete View

---

## 2. ARCHITECTURE

```text
ATHLETE IDENTITY
       │
       ▼
RUNNING PLATFORM
       │
       ├── Activity
       ├── Statistics
       ├── XP
       ├── Level
       ├── Achievement
       └── Challenge
       │
       ▼
RUNNING SERVICE / API
       │
       ▼
ATHLETE PASSPORT