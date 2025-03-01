// const username = admin
// const password = admin123

const checkUser = (username , password) => {
    if(username == "" || password == "") {
        alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
} else if(username != "admin" || password != "admin123") {
    alert("ข้อมูลไม่ถูกต้อง");
} else{
    alert("เข้าสู่ระบบสําเร็จ");
}
};
const login = () => {
    const username_input = document.getElementById('username').value;
    const password_input = document.getElementById('password').value;
    console.log("Username"+username_input + password_input);
    console.log("Password"+ password_input);
    console.log("Welcome"+username_input);
    console.log(username_input);
    checkUser(username_input , password_input);
};


// const nahee = () => {
//     console.log("ikuy");
    
// }
// const hello2 = () => {
//     console.log("Hello" + document.getElementById('username').value);
// }

// document.getElementById('submit-btn').addEventListener('click', nahee);
