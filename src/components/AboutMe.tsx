import React from "react";

interface AboutMeTextProps {}

export function AboutMe({}: AboutMeTextProps): JSX.Element {
  return (
    <>
      <h3
        style={{
          fontSize: 29,
          textAlign: 'center',
        }}
      >
        על עצמי
      </h3>
      <p className="about_me_text_p">
        שמי תומר כהן, מהנדס תוכנה ואומן. אני מתמקד בהפיכת מקומות ליפים ושמחים יותר, תוך שילוב דיוק הנדסי עם יצירתיות אומנותית. אני מאמין בכוחם של צבעים ויצירות אומנות לשנות את האווירה והתחושה במקומות בהם אנו חיים ועובדים.
      </p>
    </>
  );
}

export default AboutMe;
