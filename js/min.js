// Mô hình 3 khối
// input: lương nhân viên 100.000/ ngày. nhập số ngày làm. công thức: lương ngày* số ngày
// Nơi xử lý
function tinhLuongNhan(){
var tienLuong = document.getElementById ("tienLuongNgay").value * 1;
var soNgay  = document.getElementById ("soNgayLam").value * 1
console.log(tienLuong, soNgay)
var tinhLuong = 0
tinhLuong = tienLuong * soNgay
console.log(tinhLuong)
document.getElementById ("tienThucNhan").innerHTML = "Số Tiền:" + " " + tinhLuong + " " + "VNĐ";
// var quyDoiNgoaiTe =soTien.toLocaleString("vi-VN", {
        
// });
document.getElementById("tienThucNhan").innerHTML = new Intl.NumberFormat('vi-VN', { maximumSignificantDigits: 3 }).format(tinhLuong) + " " + "VNĐ"


}
// output thể hiện số tiền nhân viên nhận được là
document.getElementById("tinhTien").onclick = tinhLuongNhan;
//  BÀI TẬP 2
// INPUT: cho 5 số thực. công thức: sum 5 số chia cho 5
// +Bước xử lý
function ketQuaTB(){
    var so1 = document.getElementById ("so1").value * 1;
    var so2 = document.getElementById ("so2").value * 1;
    var so3 = document.getElementById ("so3").value * 1;
    var so4 = document.getElementById ("so4").value * 1;
    var so5 = document.getElementById ("so5").value * 1;
    var tinhTB = 0 
    tinhTB = (so1 + so2 + so3 + so4 + so5)/5;
    document.getElementById ("ketQua").innerHTML = tinhTB;
}
//  output kết quả trung bình các số sau khi xủ lý
document.getElementById ("tinhTrungBinh").onclick = ketQuaTB;
// ========bài 3=========
// input: giá usd =23.500 vnđ. viết chương trình để đổi tiền usd sang vnđ
// + Các bước Xử lý

function doiNgoaiTe () {
    // gọi tới số tiền cần đổi
    var tienUSD = document.getElementById ("tienUSD").value * 1;
    // công thức đổi tiền usd sang vnd
    var quyDoi = 0
    quyDoi = tienUSD * 23500;
    console.log(quyDoi);
    document.getElementById ("VND").innerHTML = quyDoi + " " + "VNĐ";
// hiển thị ra số tiền và quy number về tiền tệ
document.getElementById("VND").innerHTML = new Intl.NumberFormat('vi-VN', { maximumSignificantDigits: 3 }).format(quyDoi) + " " + "VNĐ"

}
// output đổi ra số tiền cần từ usd sang vnđ
document.getElementById("tinhTienVND").onclick = doiNgoaiTe;

// ========Bài 4=======
// input : là hình chữ nhật. tự cho chiều dài và chiều rộng. công thức tính dt và chu vi 
// các bước xử lý:
function dienTichChuVi (){
    // lấy chiều dài
    var chieuDai = document.getElementById ("chieuDai").value * 1;
    // lấy chiều rộng
    var chieuRong = document.getElementById ("chieuRong").value * 1;
    // công thức tính diên tích
    var tinhDienTich = 0
    tinhDienTich = chieuDai * chieuRong;
    // công thưc tính chu vi
    var tinhChuVi = (chieuDai + chieuRong) * 2;
    // tính diện tích
    document.getElementById ("dienTich").innerHTML = tinhDienTich + "  " + "m2";
    // tính chu vi 
    document.getElementById("chuVi").innerHTML = tinhChuVi + " " + "m";
}
// Output: xuất ra diện tích và chu vi cần tính khi nhập chiều dài và chiều rộng ở 2 ô.
document.getElementById("tinhDienTich").onclick = dienTichChuVi;

// =======BÀI 5 bắt đầu==========
// input: cho 2 số có 2 chữ số: tính tổng 2 chữ số đó.
// Các bước xử lý

function tinhTong (){
var soNguyen = document.getElementById("kySo").value * 1;
// 1 lấy số hàng chục
var hangChuc = Math.floor (soNguyen/10);
console.log(hangChuc);
// lấy số đơn vị
var donVi = soNguyen%10;
// tính tổng số 2 số
var tinhTongSo = 0
tinhTongSo = hangChuc + donVi;
document.getElementById("hienThiTong").innerHTML = tinhTongSo;
}

document.getElementById("tinhTongSo").onclick = tinhTong;