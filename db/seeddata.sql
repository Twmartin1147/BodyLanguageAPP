use bodylangapp_db;

insert into bodylang_users  (first_name,last_name,email,user_name,user_password)
values
("TestTwo","LastNameTwo","tester2@bodylang.net","testuser","testpasswrd2"),
("TestThree","LastNameThree","tester3@bodylang.net","testuser","testpasswrd3"),
("TestFour","LastNameFour","tester4@bodylang.net","testuser","testpasswrd4"),
("TestFive","LastNameFive","tester6@bodylang.net","testuser","testpasswrd5");


insert into `users_input` 
values(1,"Testers input data for one",1),
values(1,"Testers input two data for one",1),
values(2,"Testers input data for two",2),
values(3,"Testers input data for three",3);

insert into pool_emotions (emotions, emotion_description)
Values
("Anger","Feeling angry"),
("Sadness","Feeling sad"),
("Joy","Feeling happy"),
("Disgust","Feeling something is wrong or nasty"),
("Surprise","Being uprepared");