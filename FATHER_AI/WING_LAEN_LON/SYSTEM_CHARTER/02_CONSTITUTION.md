# WING LAEN LON THAILAND
# SYSTEM CONSTITUTION
## รัฐธรรมนูญสูงสุดของระบบ

Version: 1.0.0
Status: ACTIVE
Purpose: ป้องกันการหลุดเป้าหมาย การรื้อระบบ และการลดทอนความสามารถของระบบ

---

## ARTICLE 01 — MISSION

WING LAEN LON THAILAND มีเป้าหมายในการสร้างโครงสร้างพื้นฐานดิจิทัลสำหรับนักกีฬา
และการวิ่งของประเทศไทย เพื่อให้บุคคลสามารถสร้างตัวตนนักกีฬา บันทึกกิจกรรม
พัฒนาความสามารถ สะสมประสบการณ์ และเชื่อมโยงกับชุมชน งานกีฬา และระบบระดับประเทศได้

ระบบต้องมุ่งสร้างประโยชน์ต่อ:
- นักกีฬา
- ครอบครัว
- ชุมชน
- ประเทศไทย
- สุขภาพ
- สิ่งแวดล้อม

---

## ARTICLE 02 — SYSTEM INTEGRITY

ระบบที่ทำงานอยู่แล้วต้องได้รับการปกป้อง

ห้าม:
- รื้อระบบเดิมโดยไม่มีเหตุผล
- ลดฟังก์ชันเดิม
- ลบข้อมูลเดิม
- เปลี่ยน Logic สำคัญโดยไม่ตรวจผลกระทบ
- ทำให้ Production เสีย
- เปลี่ยนโครงสร้างเพื่อความสะดวกของผู้พัฒนาเพียงฝ่ายเดียว

หลักการ:

> BUILD FORWARD — ไม่ทำลายสิ่งที่สร้างสำเร็จแล้ว

---

## ARTICLE 03 — ATHLETE IDENTITY

นักกีฬาแต่ละคนต้องมี Identity เดียวในระบบ

Athlete ID เป็นตัวเชื่อมกลางของ:
- Athlete Passport
- Running Activity
- Statistics
- XP
- Level
- Achievement
- Badge
- Challenge
- Event
- Ranking
- AI

ห้ามสร้างตัวตนนักกีฬาซ้ำโดยไม่มีกลไกที่ชัดเจน

---

## ARTICLE 04 — RUNNING ACTIVITY

การวิ่งแต่ละครั้งถือเป็น Activity หนึ่งรายการ

Running Activity เป็นข้อมูลต้นทางของระบบการวิ่ง

Activity สามารถมาจาก:
- Manual
- GPS
- Device
- External Platform
- Event
- Admin

แต่ทุกแหล่งข้อมูลต้องถูกแปลงเข้าสู่มาตรฐาน Running Activity ของ WING LAEN LON

---

## ARTICLE 05 — SOURCE OF TRUTH

Running Activity คือ Source of Truth ของสถิติการวิ่ง

Statistics ต้องคำนวณจาก Activity

ห้ามให้ผู้ใช้กรอกยอดสะสมโดยตรงเพื่อแทนข้อมูล Activity

ตัวอย่าง:
- Total Distance
- Total Runs
- Total Time
- Best Pace
- Longest Run
- Elevation
- Running Streak

ต้องสามารถตรวจสอบย้อนกลับไปยัง Activity ได้

---

## ARTICLE 06 — XP

XP ต้องถูกคำนวณโดยระบบ

ผู้ใช้ไม่สามารถกำหนด XP ให้ตัวเองโดยตรง

XP มาจาก:
- Running Activity
- Achievement
- Challenge
- Event
- Bonus Rules

กฎ XP ต้องแยกออกจากข้อมูล Activity
เพื่อให้สามารถเปลี่ยนสูตรในอนาคตโดยไม่ทำลายประวัติการวิ่ง

---

## ARTICLE 07 — LEVEL

Level ต้องคำนวณจาก XP

ห้ามใช้ Level เป็นข้อมูลที่ผู้ใช้แก้ไขเอง

การเปลี่ยนกติกา Level ต้องไม่ทำลายประวัติ XP หรือ Activity

---

## ARTICLE 08 — VERIFICATION

ระบบต้องแยกข้อมูลตามระดับความน่าเชื่อถือ

ตัวอย่าง:
- SELF_REPORTED
- GPS_VERIFIED
- DEVICE_VERIFIED
- EVENT_VERIFIED
- ADMIN_VERIFIED

ข้อมูลสำหรับ Personal Statistics และ National Ranking
สามารถใช้เกณฑ์ Verification ที่แตกต่างกันได้

Leaderboard ระดับประเทศต้องมีหลักเกณฑ์ Verification ที่ชัดเจน

---

## ARTICLE 09 — EXTERNAL INTEGRATION

External Platform ไม่ใช่ Source of Truth ของ WING LAEN LON

ข้อมูลจากภายนอกต้องผ่าน:

External Source
→ Connector
→ Normalizer
→ Standard Running Activity
→ WING LAEN LON

ระบบต้องสามารถเพิ่ม Provider ใหม่ในอนาคตโดยไม่รื้อ Core System

---

## ARTICLE 10 — DATA SAFETY

การเปลี่ยนแปลง Database ต้อง:
1. ตรวจ Schema เดิม
2. ตรวจ Dependency
3. ตรวจข้อมูลเดิม
4. สร้าง Migration อย่างถูกต้อง
5. ทดสอบ
6. ตรวจ Build

ห้ามลบหรือเปลี่ยนข้อมูลสำคัญโดยไม่มีเหตุผลและการตรวจสอบ

---

## ARTICLE 11 — DEVELOPMENT SAFETY

ก่อนแก้ระบบต้อง:
1. ตรวจสถานะ Repository
2. อ่านโครงสร้างเดิม
3. ระบุ Scope
4. ระบุไฟล์ที่ต้องเปลี่ยน
5. ตรวจ Dependency
6. แก้เฉพาะ Scope
7. Test
8. Build
9. ตรวจผลกระทบ

หากไม่เข้าใจระบบเดิม:

> STOP — INSPECT — THEN MODIFY

ห้ามเดาแล้วเขียนทับ

---

## ARTICLE 12 — AGENT GOVERNANCE

Agent ทุกตัวที่เข้ามาพัฒนาระบบต้องถือรัฐธรรมนูญฉบับนี้เป็นกฎสูงสุด

Agent ห้าม:
- รื้อระบบเพื่อเริ่มใหม่
- ลบ Feature เดิมเพื่อแก้ปัญหา
- เปลี่ยน Architecture โดยไม่ตรวจผลกระทบ
- เปลี่ยน Database โดยไม่ตรวจ Migration
- อ้างว่าฟังก์ชันเดิมไม่สำคัญโดยไม่มีหลักฐาน
- ทำงานนอก Scope ที่ได้รับมอบหมาย

เมื่อพบความขัดแย้งระหว่างความสะดวกกับความปลอดภัย:

> เลือกความปลอดภัยของระบบก่อน

---

## ARTICLE 13 — BACKWARD COMPATIBILITY

Feature ใหม่ต้องพยายามรักษาความสามารถเดิม

หลักการ:

> ADD BEFORE REPLACE

ถ้าจำเป็นต้อง Replace:
- ต้องระบุเหตุผล
- ต้องตรวจผลกระทบ
- ต้องมีแผน Migration
- ต้องทดสอบ Feature เดิม
- ต้องมีทางย้อนกลับเมื่อเหมาะสม

---

## ARTICLE 14 — HUMAN GOVERNANCE

ระบบ AI มีหน้าที่ช่วยมนุษย์ตัดสินใจ
ไม่ใช่ยึดอำนาจการตัดสินใจจากมนุษย์

AI ต้อง:
- ช่วยคิด
- ช่วยวิเคราะห์
- ช่วยตรวจสอบ
- ช่วยเสนอทางเลือก
- ช่วยลดความผิดพลาด

การตัดสินใจสำคัญของระบบต้องสามารถอยู่ภายใต้ Human Governance

---

## ARTICLE 15 — CHANGE CONTROL

การเปลี่ยนแปลงสำคัญต้องสามารถตรวจสอบย้อนหลังได้

ทุกการเปลี่ยนแปลงสำคัญควรบันทึก:
- วันที่
- Version
- สิ่งที่เปลี่ยน
- เหตุผล
- Files
- Database Migration
- Test Result
- ผลกระทบ

---

## ARTICLE 16 — NORTH STAR TEST

ก่อนสร้าง Feature ใหม่ ต้องตอบคำถาม:

1. Feature นี้ช่วยนักกีฬาหรือไม่?
2. Feature นี้สอดคล้องกับ Mission หรือไม่?
3. Feature นี้ใช้ข้อมูลมาตรฐานกลางหรือไม่?
4. Feature นี้ทำลายของเดิมหรือไม่?
5. Feature นี้ทำให้ระบบขยายต่อได้หรือไม่?

ถ้าคำตอบสำคัญเป็น "ไม่":

> STOP AND REVIEW

---

## ARTICLE 17 — FINAL PRINCIPLE

WING LAEN LON THAILAND ต้องเติบโตแบบระบบที่มีรากฐาน

ไม่ใช่เติบโตด้วยการรื้อแล้วสร้างใหม่ทุกครั้ง

หลักสูงสุด:

> PROTECT THE FOUNDATION  
> BUILD FORWARD  
> VERIFY THE DATA  
> SERVE THE ATHLETE  
> BUILD FOR THAILAND

---

END OF CONSTITUTION
Version 1.0.0