const fs = require('fs');
const mysql = require('mysql');
let info = fs.readFileSync('../mysql.json', 'utf8');
let config = JSON.parse(info);

function getConnection() {
    let conn = mysql.createConnection({
        host:   config.host,
        user:   config.user,
        password:   config.password,
        database:   config.database,
        port:   config.port
    });
    conn.connect(function(error) {
        if (error) 
            console.log('mysql connection error :' + err);
    });
    return conn;
}
/* let users = [
    ['admin', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '관리자', '010-2345-6789', 'admin@hoseo.com', '긔요미','요크셔','2015-02-03','neutral'],
    ['bj', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '브랜든조', '010-9876-5432', 'eskim@hoseo.com', '코코','푸들','2013-07-28','neutral'],
    ['dhlee', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '이동화', '010-3456-7890', 'wjlee@hoseo.com', '코코','말티즈','1980-12-24','female'],
    ['emrye', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '유은미', '010-2323-7878', 'djy@korea.com', '린짱','시츄','2014-02-15','female'],
    ['mjkim', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '김미정', '010-9898-4567', 'gdhong@korea.com', '행운이','시바','2013-11-13','male']
];
let sqlRegister = `insert into users(uid, pwd, uname, tel, email, puppyName,species,birthday,gender) values(?,?,?,?,?,?,?,?,?);`;
let conn = getConnection();
for (let params of users) {
    conn.query(sqlRegister, params, function(error, fields) {
        if (error)
            console.log(error);
    });
}
conn.end(); */

/* let sqlUsers = `
    create table if not exists users (
        uid varchar(20) not null primary key,
        pwd char(44) not null,
        uname varchar(20) not null,
        tel varchar(20),
        email varchar(40),
        regDate datetime default current_timestamp,
        isDeleted int default 0,
        photo varchar(80)
    );
`;
let conn = getConnection();
conn.query(sqlUsers, function(error, fields) {
    if (error)
        console.log(error);
});
conn.end(); */

/* let users = [
    ['admin', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '관리자', '010-2345-6789', 'admin@hoseo.com', '/upload/blank.png'],
    ['eskim', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '김은숙', '010-9876-5432', 'eskim@hoseo.com', '/upload/blank.png'],
    ['wjlee', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '이우정', '010-3456-7890', 'wjlee@hoseo.com', '/upload/blank.png'],
    ['djy', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '대조영', '010-2323-7878', 'djy@korea.com', '/upload/blank.png'],
    ['gdhong', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=', '홍길동', '010-9898-4567', 'gdhong@korea.com', '/upload/blank.png']
];
let sqlRegister = `insert into users(uid, pwd, uname, tel, email, photo) values(?,?,?,?,?,?);`;
let conn = getConnection();
for (let params of users) {
    conn.query(sqlRegister, params, function(error, fields) {
        if (error)
            console.log(error);
    });
}
conn.end(); */

/* let sqlBbs = `
    create table if not exists bbs (
        bid int not null primary key auto_increment,
        uid varchar(20) not null,
        title varchar(100) not null,
        content varchar(1000),
        modTime datetime default current_timestamp,
        viewCount int default 0,
        isDeleted int default 0,
        replyCount int default 0,
        foreign key(uid) references users(uid)
    ) auto_increment=1001;
`;
let conn = getConnection();
conn.query(sqlBbs, function(error, fields) {
    if (error)
        console.log(error);
});
conn.end(); */

   let bbsArray = [
    ['admin', '휴뮤 관련 안내', `안녕하세요, 고객님!

    항상 저희를 아끼고 사랑해주시는 고객님께 깊은 감사의 말씀을 올립니다.
    
    2020년 10월30일 (금)에 열리는 이번 케이펫에 참가하게 되어, 휴무로 인한 택배 발송이 지연되어 안내드립니다.
    
    <홈페이지 제품 주문건 및 샘플 배송 안내>
    11월 03일(화) 부터 주문건에 한하여 순차배송 예정입니다.
    
    고객님께 불편을 드리게 되어 진심으로 죄송한 말씀을 드립니다.
    장마철에 건강 관리에 유의 하시기 바라며, 즐거운 마지막 연휴 보내시기 바랍니다.`],
    ['dhlee', '배송도 빠르고 맘에 들어요', `잘 먹고 괜찮아요..언제 또 안먹을지..ㅋ 입 짧은 아이들 사료 선택 어렵네요..`],
    ['bj', '유통기한', `프로덴 플라그오프 덴탈케어본 혼합야채 482g 입고가 되었나요? 유통기한은 언제까지인지 문의 드려요`],
    ['mjkim', '주문', `비회원으로도 주문이 가능한지 여쭤봅니다. 상품주문 확인은 어디서 어떻게 확인이 가능할까요? 그리고 신용카드 결제 후 할부개월 변경이 가능한가요?`],
    ['bj', '비밀번호', `비밀번호가 기억이 나질 않습니다. 어떻게 해야될까요? `],
    ['admin', '공식 쇼핑몰 신규오픈! ', `공식 쇼핑몰이 오픈하였습니다. 아직은 많이 부족하지만 꾸준한 업데이트를 통해 더 나은 서비스를 제공할수 있도록 노력하겠습니다. 이용하시다가 불편하시거나 건의할 부분있으시면 말씀주세요. 그럼, 즐거운 쇼핑 되세요! :-)`]
];
let sqlInsert = `insert into bbs(uid, title, content) values(?,?,?);`;
let conn = getConnection();
for (let params of bbsArray) {
    conn.query(sqlInsert, params, function(error, fields) {
        if (error)
            console.log(error);
    });
}
conn.end();   

/* let replyBbs = `
    create table if not exists reply (
        rid int not null primary key auto_increment,
        bid int not null,
        uid varchar(20) not null,
        content varchar(100),
        regTime datetime default current_timestamp,
        isMine int default 0,
        foreign key(bid) references bbs(bid),
        foreign key(uid) references users(uid)
    );
`;
let conn = getConnection();
conn.query(replyBbs, function(error, fields) {
    if (error)
        console.log(error);
});
conn.end(); */

/*  let replyArray = [
    [1003, 'admin', '아이가 입이 짧다면 사료에 영양파우더를 섞어서 급여를 해주시면  부족한 영양까지 한번에 관리를 해주어 좋은 방법이라 추천드립니다'],
    [1005, 'admin', '고객님~ 죄송하게도 현재는 비회원 주문이 불가합니다.'],
    [1004, 'bj', '너무 좋은 추천 감사합니다~']
];
let sqlInsertReply = `insert into reply(bid, uid, content) values(?,?,?);`;
let conn = getConnection();
for (let params of replyArray) {
    conn.query(sqlInsertReply, params, function(error, fields) {
        if (error)
            console.log(error);
    });
}
conn.end();  */

/* let coninfoArray = [
    ['유은미', 'def@google.com', '힐스 사료 입고가 되었나요? 그리고 비회원으로 주문하고 싶은데 가능한지 여쭤봅니다.'],
    ['연정훈', 'jh@naver.com', '유모차 종류가 어떤게 있나요? 방문 가능할까요?'],
    ['이유리', 'erty@naver.com', '관절에 좋은 영양제와 사료는 어떤것들이 있나요?']
];
let sqlInsertReply = `insert into reply(cname,cemail, cmessage) values(?,?,?);`;
let conn = getConnection();
for (let params of coninfoArray) {
    conn.query(sqlInsertReply, params, function(error, fields) {
        if (error)
            console.log(error);
    });
}
conn.end(); */

/* let bbsReply = [
    [1, 1, 1012], [2, 2, 1010], [1, 1, 1006], [2, 2, 1005]
];
let replyUpdate = `update bbs set viewCount=?, replyCount=? where bid=?;`;

let conn = getConnection();
for (let params of bbsReply) {
    conn.query(replyUpdate, params, function(error, fields) {
        if (error)
            console.log(error);
    });
}
conn.end(); */
