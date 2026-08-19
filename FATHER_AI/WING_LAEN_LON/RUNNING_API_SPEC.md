# WING LAEN LON THAILAND
# RUNNING API SPECIFICATION

Version: 1.0.0
Status: DESIGN

---

## 1. PURPOSE

Running API เป็น Gateway ระหว่าง:

Running UI
↓
Running Service
↓
Running Database
↓
Athlete Passport

API ต้องไม่ให้ UI เข้าถึง Database โดยตรง

---

## 2. API STRUCTURE

```text
/api/running
├── activities
├── activities/[id]
├── statistics
├── xp
├── level
├── achievements
└── challenges