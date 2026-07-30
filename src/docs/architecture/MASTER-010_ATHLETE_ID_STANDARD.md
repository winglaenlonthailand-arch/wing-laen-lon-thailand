# MASTER-010_ATHLETE_ID_STANDARD

VERSION: 1.0

STATUS:
FOUNDATION STANDARD

SYSTEM:
WING LAEN LON THAILAND
Digital Athlete Passport Platform

==================================================

PURPOSE

กำหนดมาตรฐาน Athlete ID

เพื่อให้

นักกีฬาทุกคน

มีรหัสประจำตัว

ที่ไม่ซ้ำกัน

ตลอดอายุการใช้งานของระบบ

==================================================

DESIGN PRINCIPLE

One Athlete

One Athlete ID

Lifetime Identity

Never Duplicate

Never Reuse

==================================================

ATHLETE ID FORMAT

ATH-TH-CNX-50000-000001

==================================================

ID STRUCTURE

ATH

Athlete

----------------------------

TH

Country Code

ISO 3166-1 Alpha-2

ตัวอย่าง

TH

JP

US

SG

AU

GB

==================================================

PROVINCE CODE

ใช้รหัสมาตรฐาน

3 ตัวอักษร

ตัวอย่าง

BKK

CNX

NAN

PKT

KKC

KBI

CBI

SKA

SUR

UBN

ทุกจังหวัด

ต้องมี Province Code

เพียงหนึ่งเดียว

==================================================

POSTCODE

ใช้รหัสไปรษณีย์

5 หลัก

ตัวอย่าง

10200

50000

55000

83000

==================================================

RUNNING NUMBER

เลข Running

6 หลัก

เริ่มต้น

000001

000002

000003

...

999999

เมื่อเต็ม

สามารถขยาย

Version ใหม่ได้

==================================================

FULL EXAMPLE

ATH-TH-CNX-50000-000001

ATH-TH-NAN-55000-000001

ATH-TH-BKK-10200-000001

==================================================

INTERNATIONAL EXAMPLE

ATH-JP-TKY-100000-000001

ATH-US-NYC-100001-000001

ATH-SG-SIN-018989-000001

==================================================

ID RULE

Athlete ID

ห้ามเปลี่ยน

ห้ามใช้ซ้ำ

ห้ามโอนให้ผู้อื่น

หนึ่งคน

หนึ่งรหัส

ตลอดชีวิต

==================================================

QR CODE

QR Code

อ้างอิง Athlete ID

โดยตรง

ตัวอย่าง

ATH-TH-CNX-50000-000001

==================================================

DATABASE

Athlete ID

เป็น

Primary Key

ของระบบ

ใช้เชื่อมโยง

Runner

Activity

Challenge

Partner

Achievement

History

AI

==================================================

FUTURE SUPPORT

รองรับ

ประเทศไทย

อาเซียน

นานาชาติ

Multi Country

Multi Language

Cloud Platform

AI Platform

==================================================

REFERENCE

MASTER-008
National Athlete Constitution

MASTER-009
Athlete Passport Standard

MASTER-011
Smart Athlete Card Standard

==================================================

END OF MASTER-010