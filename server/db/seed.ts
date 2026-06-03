import 'dotenv/config'
import { db } from "./index";
import { events } from "./schema";

async function seed() {
  console.log("เริ่ม seed ข้อมูล...");

  await db.delete(events);

  await db.insert(events).values([
    {
      name: "Overflow [LiveCoding and AudioVisual Performance]",
      description: `two signals leave at the same time. they don't arrive at the same time. one is aimed at something that isn't there anymore.

sound fills the room before the visuals do. light arrives on its own schedule. bodies adjust. the code is written in front of you, live, in the dark, and the gesture of a hand becomes the texture of the sound becomes the color on the wall. nothing is pre-recorded. it keeps going anyway.

overflow is an evening of experimental music, visuals and light pushed past where they were meant to sit. a few hours where the spill is the music, the room is the instrument, and whatever comes out the other side is the point. you should come.`,
      location: "Goethe-Institut Thailand, Goethe Saal",
      maxParticipants: null,
      registeredCount: 0,
      imageUrl: "https://p-u.popcdn.net/event_details/posters/000/151/299/large/49abf05b5337a0b79f075aac1a21ce236d0cf640.png?1778654980",
      date: new Date("2026-05-23T22:40:24.142Z"),
    },
    {
      name: "Yuika 2nd Asia Tour in Bangkok",
      description: null,
      location: "SiamPic Hall ชั้น 7, สยามสแควร์วัน",
      maxParticipants: null,
      registeredCount: 1,
      imageUrl: "https://www.thaiticketmajor.com/img_poster/prefix_1/0650/6650/yuika-2nd-asia-tour-in-bangkok-69bcc3a8e694c-l.png",
      date: new Date("2026-06-07T12:00:00"),
    },
    {
      name: "THE TITANS CONCERT",
      description: `THE TITANS CONCERT 🏛️🪐\n\nFor the very first time, four icons unite on a single stage: BAMBAM, JEFF SATUR, PP KRIT and TIMETHAI.\n\n✦ Saturday, 20 June 2026 — Doors open 04:00 PM | Show starts 06:00 PM\n✦ Sunday, 21 June 2026 — Doors open 01:00 PM | Show starts 03:00 PM\n📍Queen Sirikit National Convention Center (QSNCC), Hall 1-3, G Floor`,
      location: "Queen Sirikit National Convention Center (QSNCC), Hall 1-3, G Floor",
      maxParticipants: 600,
      registeredCount: 91,
      imageUrl: "https://images.prismic.io/qsncc/ag7C3aYofJOwHeW-_681759248_122111078487284349_4893625500671729546_n.jpg?auto=format,compress?auto=compress,format",
      date: new Date("2026-06-20T11:00:00"),
    },
    {
      name: "TUTV AWARDS 2025",
      description: null,
      location: "ศูนย์การฝึกทักษะทางการแพทย์ ธรรมศาสตร์ (TMEd) ปทุมธานี",
      maxParticipants: 300,
      registeredCount: 239,
      imageUrl: "https://p-u.popcdn.net/event_details/posters/000/085/384/large/ba2a0e9383016f502d508d5e1d47a9eb7ee91ce0.jpeg?1745589831",
      date: new Date("2025-04-30T09:40:00"),
    },
    {
      name: "Additional Show | SUNSU PRESENTS 4EVE UNCHAINED CONCERT LIVE AT IMPACT ARENA",
      description: null,
      location: "IMPACT ARENA, MUANG THONG THANI",
      maxParticipants: 1600,
      registeredCount: 1560,
      imageUrl: "https://p-u.popcdn.net/event_details/posters/000/149/112/large/7ae9c009c7e6a0e86cf73433fddc7a664451ac60.jpg?1777640142",
      date: new Date("2026-06-06T10:40:00"),
    },
    {
      name: "2026 KISS OF LIFE ASIA FANMEETING TOUR < DEJA VU > IN BANGKOK",
      description: null,
      location: "BCC HALL, เซ็นทรัลพลาซ่า ลาดพร้าว ชั้น 5",
      maxParticipants: null,
      registeredCount: 13,
      imageUrl: "https://www.thaiticketmajor.com/img_poster/prefix_1/0613/6613/2026-kiss-of-life-asia-fanmeeting-tour-dejavu-in-bangkok-6993d4cb72381-l.jpeg",
      date: new Date("2026-06-06T11:00:00"),
    },
    {
      name: "natori ONE-MAN LIVE TOUR 'Koshin (March)' in Bangkok",
      description: "natori ONE-MAN LIVE TOUR 'Koshin (March)' in Bangkok — ถ้าคุณฟังเพลงของเค้า...คุณต้องได้เห็นเค้า!",
      location: "UOB Live",
      maxParticipants: 1500,
      registeredCount: 1379,
      imageUrl: "https://www.thaiticketmajor.com/img_poster/prefix_1/0678/6678/natori-one-man-live-tour-koshin-march-in-bangkok-69d4e3ab3b8ca-l.png",
      date: new Date("2026-07-28T12:00:00"),
    },
    {
      name: "Millions of CATS and ONE CAT แมวล้านตัวกับแมวหนึ่งตัว",
      description: "นิทรรศการแสดงเดี่ยว โดยศิลปิน เนียม มะวรคนอง — สำรวจความสัมพันธ์ระหว่าง 'ภาพ' 'ระบบ' และ 'ตัวตน' ในยุคของข้อมูลล้นเกิน",
      location: "Paragon Department Store",
      maxParticipants: null,
      registeredCount: 1,
      imageUrl: "https://p-u.popcdn.net/event_details/posters/000/147/619/large/fbea4c435872109d6a2efae37ee94f952253802a.png?1776843739",
      date: new Date("2026-05-01T02:00:00"),
    },
    {
      name: "2022 AB6IX FAN CONCERT in BANGKOK [AB_NEW AREA]",
      description: null,
      location: "ธันเดอร์โดม เมืองทองธานี",
      maxParticipants: null,
      registeredCount: 0,
      imageUrl: "https://www.thaiticketmajor.com/img_poster/prefix_1/2320/5320/2022-ab6ix-fan-concert-in-bangkok-ab-new-area-62c2d4502d2a0-l.png",
      date: new Date("2022-08-27T11:00:00"),
    },
    {
      name: "PERTH SANTA DEVIL'S KISS CONCERT",
      description: null,
      location: "พารากอน ฮอลล์",
      maxParticipants: 1500,
      registeredCount: 1005,
      imageUrl: "https://www.thaiticketmajor.com/img_poster/prefix_1/0711/6711/perth-santa-devils-kiss-concert-69fbe538445e2-l.jpg",
      date: new Date("2026-07-18T11:00:00"),
    },
    {
      name: "'IDOL1ST KENTY' ASIA TOUR 2026 in BANGKOK",
      description: "โซโล่เอเชียทัวร์ครั้งแรกของหนุ่ม KENTY\n📅 วันแสดง: วันเสาร์ที่ 5 และวันอาทิตย์ที่ 6 กันยายน 2026\n🏟️ สถานที่: SiamPic Hall\n🎫 บัตรราคา: 5,500 / 4,500 / 3,800 / 2,500 บาท",
      location: "SiamPic Hall ชั้น 7, สยามสแควร์วัน",
      maxParticipants: 2000,
      registeredCount: 2000,
      imageUrl: "https://www.thaiticketmajor.com/img_poster/prefix_1/0714/6714/idol1st-kenty-asia-tour-2026-in-bangkok-69fbea3b7ba7a-l.jpg",
      date: new Date("2026-09-05T11:00:00"),
    },
    {
      name: "Knight A [ U N I T E ]",
      description: "Knight A (Knight A - 騎士A -) is an utaite group that debuted on August 2, 2020.",
      location: "Tokyo",
      maxParticipants: 300,
      registeredCount: 280,
      imageUrl: "https://m.media-amazon.com/images/I/71H1TW2bPiL._AC_UF1000,1000_QL80_.jpg",
      date: new Date("2022-02-14T09:00:00"),
    },
  ]);

  console.log("Seed สำเร็จ!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed ล้มเหลว:", err);
  process.exit(1);
});