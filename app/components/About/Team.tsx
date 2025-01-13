import React from "react";
import Image from "next/image";
import {
  team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  team7,
  team8,
} from "@/public/assets";

const teamMembers = [
  {
    name: "معاذباسودان",
    title: "عضو مجلس ادارة مستقل",
    description:
      "مهني مالي متمرس يتميز في تقديم الخدمات الاستشارية وتطوير المبادرات الاستراتيجية. من ضمن الخبرات العمل في اللجنة المالية للديوان الملكي السعودي والبنك السعودي البريطاني.",
    image: team1,
  },
  {
    name: "حسن مريم",
    title: "مدير المنتج",
    description: "رئيس الوزراء السابق لـ Linear وLambda School وOn Deck.",
    image: team2,
  },
  {
    name: "سليمان عبد المؤمن",
    title: "مدير الهندسة",
    description: "قيادة الفرق الهندسية في Figma وPitch وProtocol Labs.",
    image: team3,
  },
  {
    name: "منصور محلال",
    title: "المؤسس والرئيس التنفيذي",
    description:
      "المؤسس المشارك السابق لـ Opendoor. طاقم العمل المبكر في Spotify وClearbit.",
    image: team4,
  },
  {
    name: "ماركو كيلي",
    title: "نجاح العملاء",
    description:
      "قيادة تجربة العملاء في Wealthsimple. PagerDuty وSqreen السابقان.",
    image: team5,
  },
  {
    name: "زيد شوارتز",
    title: "باحث تجربة المستخدم",
    description: "قيادة بحث المستخدم لـ Slack. مقاول لـ Netflix وUdacity.",
    image: team6,
  },
  {
    name: "كايتلين كينج",
    title: "مصمم المنتج",
    description: "تأسيس فريق التصميم في Figma. Pleo وStripe وTile السابق.",
    image: team7,
  },
  {
    name: "زهرة كريستنسن",
    title: "مطور الواجهة الخلفية",
    description:
      "قيادة تطوير الواجهة الخلفية في Clearbit. Clearbit وLoom سابقًا.",
    image: team8,
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-white text-black">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          أعضاء مجلس الإدارة
        </h2>
        <h4 className="max-w-lg text-center mb-10">
          Tempus id convallis in quis diam risus tellus. معرف aliquet في
          pulvinar massa tristique. Bibendum congue arcu sed proin.
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-end px-16 text-right space-y-2"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-60 h-60 rounded-lg"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-[#326DB8]">{member.title}</p>
              <p className="text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
