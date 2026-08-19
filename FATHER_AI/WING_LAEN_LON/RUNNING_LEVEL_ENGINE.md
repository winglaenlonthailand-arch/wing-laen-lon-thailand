# WING LAEN LON THAILAND
# RUNNING LEVEL ENGINE

Version: 1.0.0
Status: DESIGN

---

## 1. PURPOSE

Level Engine แปลง Total Valid XP
ให้เป็นระดับของ Athlete

XP
↓
LEVEL RULE
↓
CURRENT LEVEL
↓
PASSPORT

---

## 2. SOURCE OF TRUTH

XP Ledger คือแหล่งข้อมูลต้นทางของ XP

Level เป็น Derived Data

ห้ามผู้ใช้กำหนด Level เอง

---

## 3. LEVEL TABLE

มาตรฐานเริ่มต้น:

| Level | Required XP |
|---:|---:|
| 1 | 0 |
| 2 | 100 |
| 3 | 250 |
| 4 | 500 |
| 5 | 1,000 |
| 6 | 2,000 |
| 7 | 3,500 |
| 8 | 5,000 |
| 9 | 7,500 |
| 10 | 10,000 |

ตารางนี้เป็น Version 1
และสามารถปรับได้ในอนาคตโดยไม่ทำลาย XP History

---

## 4. LEVEL CALCULATION

หลัก:

```text
Total Valid XP
↓
Find highest Required XP
≤ Total XP
↓
Current Level