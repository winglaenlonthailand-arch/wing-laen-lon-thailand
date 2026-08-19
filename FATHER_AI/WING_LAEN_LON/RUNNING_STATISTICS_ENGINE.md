# WING LAEN LON THAILAND
# RUNNING STATISTICS ENGINE
## ระบบคำนวณสถิติการวิ่ง

Version: 1.0.0
Status: DESIGN

---

## 1. PURPOSE

Statistics Engine มีหน้าที่แปลง Running Activity
ให้เป็นข้อมูลสถิติที่เข้าใจง่ายและนำไปใช้ต่อได้

หลัก:

RUNNING ACTIVITY
↓
STATISTICS ENGINE
↓
ATHLETE STATISTICS
↓
ATHLETE PASSPORT

---

## 2. SOURCE OF TRUTH

Running Activity คือข้อมูลต้นทาง

Statistics เป็น Derived Data

ห้ามให้ผู้ใช้แก้ Statistics โดยตรง

---

## 3. CORE STATISTICS

ระบบต้องคำนวณ:

- Total Runs
- Total Distance
- Total Duration
- Average Distance
- Average Pace
- Best Pace
- Longest Run
- Average Speed
- Total Elevation Gain
- Current Streak
- Longest Streak

---

## 4. TOTAL RUNS

สูตร:

```text
Total Runs = COUNT(Valid Running Activities)