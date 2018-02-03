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

insert into useremotions (emotions, font-family,color,background-color)
Values
("Anger","Arial","#ed2828","#EAEDED"),
("Sadness","Helvetica","#1d73e2","#FCF3CF"),
("Joy","Times New Roman","#ecf720","#F5EEF8"),
("Disgust","Courier New","#a145ad","#FADBD8"),
("Surprise","Times","#ffd000","#D6EAF8"),
("Fear","Courier","#660000","#121856"),
("Excited","Arial Black","#15f25f","#561253"),
("Scared","Gerogia","#bdc400","#281256"),
("Sad","Verdana","#317aaa","#123456"),
("Happy","Tahoma","#26ff00","#12564a");