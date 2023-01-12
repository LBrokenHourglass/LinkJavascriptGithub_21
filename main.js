document.getElementById("calculator+").addEventListener("click",function() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : "+sum;
    myalert(sum);
});
document.getElementById("calculator-").addEventListener("click",function() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลลบ : "+sum;
    myalert(sum);
});
document.getElementById("calculator*").addEventListener("click",function() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลคูณ : "+sum;
    myalert(sum);
});
document.getElementById("calculator/").addEventListener("click",function() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลหาร : "+sum;
    myalert(sum);
});

function myalert(sum) {    
    alert("แสดงผล"+sum)
}

document.getElementById("CalculateBMI").addEventListener("click",function() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) / (parseInt(num2)/100 * parseInt(num2)/100);
    document.getElementById("result").innerHTML = "แสดงผล BMI : "+sum.toFixed(2);
    myalertBMI(sum);
});

function myalertBMI(sum) {
    alert("ค่า BMI ของคุณคือ :"+sum.toFixed(2));
    if (sum<=18.50) {
        alert("BMI kg/m2 : น้อยกว่า 18.50 อยู่ในเกณท์ : น้ำหนักน้อย / ผอม ภาวะเสี่ยงต่อโรค : มากกว่าคนปกติ");
    } else if(sum<=22.90){
        alert("BMI kg/m2 : ระหว่าง 18.50 - 22.90 อยู่ในเกณท์ : ปกติ (สุขภาพดี) ภาวะเสี่ยงต่อโรค : เท่าคนปกติ");
    }else if(sum<=24.90){
        alert("BMI kg/m2 : ระหว่าง 23 - 24.90 อยู่ในเกณท์ : ท้วม / โรคอ้วนระดับ 1 ภาวะเสี่ยงต่อโรค : อันตรายระดับ 1");
    }else if(sum<=29.90){
        alert("BMI kg/m2 : ระหว่าง 25 - 29.90 อยู่ในเกณท์ : อ้วน / โรคอ้วนระดับ 2 ภาวะเสี่ยงต่อโรค : อันตรายระดับ 2");
    }else if(sum>=30){
        alert("BMI kg/m2 : มากกว่า 30 อยู่ในเกณท์ : อ้วนมาก / โรคอ้วนระดับ 3 ภาวะเสี่ยงต่อโรค : อันตรายระดับ 3");
    }
}

const img = document.createElement("img")

img.src = "img/pic.png";
img.style.width = "200px";

document.getElementById("mydiv").appendChild(img);