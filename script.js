const PINS = {
    owner: "123456",
    teacher: "111111", 
    student: "000000"
};

function login() {
    const userType = document.getElementById('userType').value;
    const pin = document.getElementById('pinInput').value.trim();
    
    if (PINS[userType] === pin) {
        alert('تم تسجيل الدخول بنجاح!');
        // Redirect atau tampilkan dashboard sesuai user type
    } else {
        alert('الرقم السري غير صحيح');
    }
}

function logout() {
    alert('تم تسجيل الخروج');
    // Kembali ke login
}