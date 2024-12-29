// import React from "react";

interface AboutMeTextProps {}

export function AboutMe({}: AboutMeTextProps): JSX.Element {
  return (
    <>
      <h3
        className="rubikBold pb-2"
        style={{
          fontSize: 29,
          textAlign: 'center',
        }}
      >
        Welcome To My World
      </h3>
      <p dir="rtl" className="about_me_text_p m-1 px-3 pb-4 rubikRegular">
        אני תומר כהן, צייר ישראלי. אני מתמקד בהפיכת מקומות ליפים ושמחים יותר, תוך שילוב דיוק הנדסי עם יצירתיות אומנותית. אני מאמין בכוחם של צבעים ויצירות אומנות לשנות את האווירה והתחושה במקומות בהם אנו חיים ועובדים.
      </p>
    </>
  );
}

export default AboutMe;
