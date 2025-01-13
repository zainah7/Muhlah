"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const countries = [
    { code: "SA", name: "المملكة العربية السعودية" },
    { code: "AE", name: "الإمارات العربية المتحدة" },
    { code: "EG", name: "مصر" },
    { code: "KW", name: "الكويت" },
  ];

  const phoneNumberPatterns: Record<string, RegExp> = {
    SA: /^05\d{8}$/,
    AE: /^05[0-9]{7}$/,
    EG: /^01[0-2,5]{1}[0-9]{8}$/,
    KW: /^[569]\d{7}$/,
  };

  const [selectedCountry, setSelectedCountry] = useState("SA");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const validatePhoneNumber = (phone: string): boolean => {
    const pattern = phoneNumberPatterns[selectedCountry];
    return pattern ? pattern.test(phone) : false;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhone = e.target.value;
    setPhone(inputPhone);
    if (!validatePhoneNumber(inputPhone)) {
      setPhoneError("رقم الجوال غير صحيح.");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !reason || !message) {
      alert("يرجى ملء جميع الحقول.");
      return;
    }
    if (phoneError) {
      alert("يرجى التحقق من صحة رقم الجوال.");
      return;
    }
    alert("تم إرسال النموذج بنجاح!");
    // Clear the form
    setName("");
    setEmail("");
    setPhone("");
    setReason("");
    setMessage("");
    setSelectedCountry("SA");
  };

  return (
    <section id="contact" className="bg-white font-sans">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#1A2B61]">تواصل معنا</h2>

        <form
          className=" space-y-12 max-w-md mx-auto text-black "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-7">
            <div className="text-right">
              <label htmlFor="phone">الجوال</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="(555) 000-0000"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
              />
              {phoneError && (
                <p className="text-red-500 text-sm">{phoneError}</p>
              )}
            </div>
            <div className="text-right">
              <label htmlFor="name">الاسم</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="الاسم"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-7">
            <div className="text-right">
              <label htmlFor="reason">سبب التواصل</label>
              <select
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
              >
                <option value="" disabled>
                  اختر سبب التواصل
                </option>
                <option value="استفسار">استفسار</option>
                <option value="شكوى">شكوى</option>
                <option value="اقتراح">اقتراح</option>
                <option value="إعادة فتح التذكرة">إعادة فتح التذكرة</option>
              </select>
            </div>
            <div className="text-right">
              <label htmlFor="email">البريد الإلكتروني</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@muhlah.sa"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
              />
            </div>
          </div>

          <div className="text-right">
            <label htmlFor="message">الرسالة</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب رسالتك هنا"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#326CB6] text-white px-4 py-2  rounded-lg hover:bg-blue-400"
          >
            إرسال
          </button>
        </form>
      </div>

      <div className="py-5"></div>
    </section>
  );
};

export default ContactForm;
