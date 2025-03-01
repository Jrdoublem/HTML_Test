// const username = admin
// const password = admin123

const checkUser = (username , password) => {
    const popup = document.getElementById('pop-up');
    const popuptitle = document.getElementById('popup-title');
    const popupDetail = document.getElementById('popup-detail');
    const overlay = document.getElementById("overlay");

    if(username == "" || password == "") {
        popuptitle.innerText = "ERROR";
        popuptitle.style.color = "red";
        popupDetail.innerText = "กรุณากรอกชื่อผู้ใช้และรหัสผ่าน";
        popup.style.display = "block";
        overlay.style.display = "block";
        // alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
} else if(username != "admin" || password != "admin123") {
    popuptitle.innerText = "ERROR";
    popuptitle.style.color = "red";
    popupDetail.innerText = "ข้อมูลไม่ถูกต้อง";
    popup.style.display = "block";
    overlay.style.display = "block";
    // alert("ข้อมูลไม่ถูกต้อง");
} else{
    popuptitle.innerText = "SUCCRESS";
    popuptitle.style.color = "green";
    popupDetail.innerText = "เข้าสู่ระบบสำเร็จ";
    popup.style.display = "block";
    overlay.style.display = "block";
    // alert("เข้าสู่ระบบสําเร็จ");
}
};

const closePopup = () => {
    const popup = document.getElementById('pop-up');
    popup.style.display = "none";
    overlay.style.display = "none";
}
const login = () => {
    const username_input = document.getElementById('username').value;
    const password_input = document.getElementById('password').value;
    console.log("Username :" + " " + username_input + password_input);
    console.log("Password :" + " " + password_input);
    // console.log("Welcome"+username_input);
    // console.log(username_input);
    checkUser(username_input , password_input);
};


// const nahee = () => {
//     console.log("ikuy");
    
// }
// const hello2 = () => {
//     console.log("Hello" + document.getElementById('username').value);
// }

// document.getElementById('submit-btn').addEventListener('click', nahee);
