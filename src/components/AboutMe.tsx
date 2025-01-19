// import React from "react";

interface AboutMeTextProps {}

export function AboutMe({}: AboutMeTextProps): JSX.Element {
  return (
    <div className="position-relative">
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
      אני תומר כהן, אמן מישראל , אני מתמקד בהפיכת מקומות ליפים ושמחים יותר, הכוח של הצבעים הוא לשנות את האווירה והתחושה בחלל , וההנאה שלי היא לשחק עם התחושות , אני משקיע הרבה מחשבה והשקעה בכל יצירה שלי , ודואג שכל מה שיצא מהסטודיו שלי יהיה התכשיט המושלם לקיר שלכם.
      </p>
    </div>
  );
}

export default AboutMe;
