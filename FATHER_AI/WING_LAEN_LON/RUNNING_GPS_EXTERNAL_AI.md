# WING LAEN LON THAILAND
# RUNNING GPS / EXTERNAL PLATFORM / AI

Version: 1.0.0
Status: DESIGN

---

## 1. PURPOSE

กำหนดมาตรฐานการรับข้อมูลจาก GPS,
Running Watch, External Platform และ AI

โดยไม่ทำลาย Source of Truth
และไม่ทำลาย Core Platform เดิม

---

## 2. DATA SOURCES

รองรับ:

- Manual Entry
- GPS
- Running Watch
- Fitness Device
- External Running Platform
- Event Timing System
- Organizer System
- Future APIs

---

## 3. SOURCE PRINCIPLE

ทุก Activity ต้องรู้ว่า
ข้อมูลมาจากไหน

ตัวอย่าง:

```text
source = MANUAL
source = GPS
source = GARMIN
source = STRAVA
source = COROS
source = EVENT_TIMING