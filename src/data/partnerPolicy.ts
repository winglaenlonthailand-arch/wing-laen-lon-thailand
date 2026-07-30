export const partnerPolicy = {
  systemName: "WING LAEN LON THAILAND Partner Ecosystem",

  description:
    "มาตรฐานสำหรับพันธมิตรที่ต้องการร่วมพัฒนาระบบนักวิ่งประเทศไทย",

  allowedCategories: [
    {
      name: "Sports Partner",
      items: [
        "รองเท้าวิ่ง",
        "เสื้อผ้านักกีฬา",
        "อุปกรณ์กีฬา",
        "อุปกรณ์ออกกำลังกาย",
      ],
    },

    {
      name: "Health Partner",
      items: [
        "เครื่องดื่มสุขภาพ",
        "อาหารโภชนาการ",
        "ผลิตภัณฑ์สำหรับนักกีฬา",
        "บริการสุขภาพ",
      ],
    },

    {
      name: "Community Partner",
      items: [
        "ธุรกิจท้องถิ่น",
        "การท่องเที่ยวเชิงกีฬา",
        "กิจกรรมชุมชน",
        "พื้นที่ส่งเสริมสุขภาพ",
      ],
    },
  ],


  prohibitedCategories: [
    "การพนัน",
    "เว็บพนัน",
    "บุหรี่",
    "สินค้าผิดกฎหมาย",
    "เนื้อหาที่ไม่เหมาะสม",
    "โฆษณาที่ขัดต่อสุขภาพนักกีฬา",
  ],


  applicationStatus: [
    "Pending",
    "Review",
    "Approved",
    "Rejected",
    "Expired",
  ],


  campaignDuration: [
    {
      days: 15,
      name: "Short Campaign",
    },

    {
      days: 30,
      name: "Standard Campaign",
    },

    {
      days: 60,
      name: "Extended Campaign",
    },

    {
      days: 90,
      name: "Premium Campaign",
    },
  ],


  advertisementPositions: [
    "Homepage Banner",
    "Partner Carousel",
    "Event Sponsor",
    "Runner Passport Sponsor",
    "AI Platform Sponsor",
  ],


  approvalRules: [
    "ตรวจสอบประเภทสินค้าและบริการ",
    "ตรวจสอบความเหมาะสมกับนักวิ่ง",
    "ตรวจสอบมาตรฐานและจริยธรรม",
    "อนุมัติก่อนเผยแพร่ทุก Campaign",
  ],
};