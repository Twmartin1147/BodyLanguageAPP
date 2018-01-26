use bodylangapp_db;

insert into bodylang_users  (first_name,last_name,email,user_name,user_password)
values
("TestTwo","LastNameTwo","tester2@bodylang.net","testuser","testpasswrd2"),
("TestThree","LastNameThree","tester3@bodylang.net","testuser","testpasswrd3"),
("TestFour","LastNameFour","tester4@bodylang.net","testuser","testpasswrd4"),
("TestFive","LastNameFive","tester6@bodylang.net","testuser","testpasswrd5");


insert into users_input (uaid,users_input_data,bodylang_user_id)
values
(1,"Testers input data for one",1),
(1,"Testers input two data for one",1),
(2,"Testers input data for two",2),
(3,"Testers input data for three",3);

insert into pool_emotions (emotions, emotion_font,emotion_color,emotion_background_color)
Values
("Anger","Arial","#008000","#EAEDED"),
("Sadness","Helvetica","#00FFFF","#FCF3CF"),
("Joy","Times New Roman","#008080","#F5EEF8"),
("Disgust","Courier New","#0000FF","#FADBD8"),
("Surprise","Verdana","#2471A3","#D6EAF8");