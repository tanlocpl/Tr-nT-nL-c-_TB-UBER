
var danhSachHoaDon = [];

function layLoaiXe() {
    var ketqua;
    var uberX = document.getElementById('uberX').checked;
    var uberSUV = document.getElementById('uberSUV').checked;
    var uberBlack = document.getElementById('uberBlack').checked;
    if (uberX === true) {
        ketqua = "uberX";

    } else if (uberSUV === true) {
        ketqua = "uberSUV";

    } else if (uberBlack === true) {
        ketqua = "uberBlack";
    } else {
        ketqua = 0;
    }
    return ketqua;

}


document.getElementById('btnTinhtien').addEventListener('click', function () {
    
    
    var loaiXe = layLoaiXe();
    var laySoKm = document.getElementById('soKm').value;
    var layThoiGianCho = document.getElementById('thoiGianCho').value;
    if (loaiXe == 0) {
        alert("Vui Lòng Chọn loại xe")
    } else if (laySoKm === "") {
        alert("vui long điền Số KM")
    } else if (layThoiGianCho === "") {
        alert(" Vui Lòng Điền Thời Gian Chờ")
    }else{
        layThoiGianCho = parseFloat(layThoiGianCho);
    laySoKm = parseFloat(laySoKm);

    var hoaDon = new HoaDon(laySoKm, layThoiGianCho, loaiXe)

    danhSachHoaDon.push(hoaDon)

    var divThanhTien = document.getElementById('divThanhTien');
    divThanhTien.style.display = 'block';

    var spanXuatTien = document.getElementById('xuatTien');


    for (var i = 0; i < danhSachHoaDon.length; i++) {
        spanXuatTien.innerHTML = danhSachHoaDon[i].ThanhTien() + (danhSachHoaDon[i].layThoiGianCho * danhSachHoaDon[i].DonGiaThoiGianCho());
    }


    console.log(danhSachHoaDon);

    taobanguberX();
    // taoBang();

    }

})

function taobanguberX() {

    var TongThoiGianChouberX = 0;
    var TongThoiGianChouberSUV = 0;
    var TongThoiGianChouberBlack = 0;

    document.getElementById("tbodyHoaDonuberX").innerHTML = "";
    document.getElementById("tbodyHoaDonuberSUV").innerHTML = "";
    document.getElementById("tbodyHoaDonuberBlack").innerHTML = "";
    for (var i = 0; i < danhSachHoaDon.length; i++) {

        if (danhSachHoaDon[i].loaiXe == "uberX") {

            TongThoiGianChouberX = TongThoiGianChouberX + danhSachHoaDon[i].layThoiGianCho;
            var tagTRuberX = document.createElement("tr")

            //tao cot
            var tagTDuberX_ChiTiet = document.createElement("td")
            var tagTDuberX_SoKM = document.createElement("td")
            var tagTDuberX_DonGia = document.createElement("td")
            var tagTDuberX_ThanhTien = document.createElement("td")
            // gan noi dung cot

            tagTDuberX_ChiTiet.innerHTML = danhSachHoaDon[i].loaiXe;
            tagTDuberX_SoKM.innerHTML = danhSachHoaDon[i].laySoKm + " km";
            tagTDuberX_DonGia.innerHTML = danhSachHoaDon[i].DonGia();
            tagTDuberX_ThanhTien.innerHTML = danhSachHoaDon[i].ThanhTien();

            // append cot vao dong
            tagTRuberX.appendChild(tagTDuberX_ChiTiet);
            tagTRuberX.appendChild(tagTDuberX_SoKM);
            tagTRuberX.appendChild(tagTDuberX_DonGia);
            tagTRuberX.appendChild(tagTDuberX_ThanhTien);

            //append dong vao tbody
            document.getElementById("tbodyHoaDonuberX").appendChild(tagTRuberX);

            document.getElementById("tbodyHoaDonuberX2").innerHTML = "";
            var tagTR2uberX = document.createElement("tr")

            var tagTDuberX_ThongTin = document.createElement("td")
            var tagTDuberX_ThoiGianCho = document.createElement("td")
            var tagTDuberX_DonGiaThoiGianCho = document.createElement("td")
            var tagTDuberX_ThanhTienThoiGianCho = document.createElement("td")

            tagTDuberX_ThongTin.innerHTML = "Thời Gian Chờ";

            tagTDuberX_ThoiGianCho.innerHTML = TongThoiGianChouberX + " Phút";

            tagTDuberX_DonGiaThoiGianCho.innerHTML = danhSachHoaDon[i].DonGiaThoiGianCho();

            tagTDuberX_ThanhTienThoiGianCho.innerHTML = TongThoiGianChouberX * danhSachHoaDon[i].DonGiaThoiGianCho();

            tagTR2uberX.appendChild(tagTDuberX_ThongTin);
            tagTR2uberX.appendChild(tagTDuberX_ThoiGianCho);
            tagTR2uberX.appendChild(tagTDuberX_DonGiaThoiGianCho);
            tagTR2uberX.appendChild(tagTDuberX_ThanhTienThoiGianCho);

            document.getElementById("tbodyHoaDonuberX2").appendChild(tagTR2uberX);
        }

        if (danhSachHoaDon[i].loaiXe == "uberSUV") {

            TongThoiGianChouberSUV = TongThoiGianChouberSUV + danhSachHoaDon[i].layThoiGianCho;
            var tagTRuberX = document.createElement("tr")

            //tao cot
            var tagTDuberX_ChiTiet = document.createElement("td")
            var tagTDuberX_SoKM = document.createElement("td")
            var tagTDuberX_DonGia = document.createElement("td")
            var tagTDuberX_ThanhTien = document.createElement("td")
            // gan noi dung cot

            tagTDuberX_ChiTiet.innerHTML = danhSachHoaDon[i].loaiXe;
            tagTDuberX_SoKM.innerHTML = danhSachHoaDon[i].laySoKm + " km";
            tagTDuberX_DonGia.innerHTML = danhSachHoaDon[i].DonGia();
            tagTDuberX_ThanhTien.innerHTML = danhSachHoaDon[i].ThanhTien();

            // append cot vao dong
            tagTRuberX.appendChild(tagTDuberX_ChiTiet);
            tagTRuberX.appendChild(tagTDuberX_SoKM);
            tagTRuberX.appendChild(tagTDuberX_DonGia);
            tagTRuberX.appendChild(tagTDuberX_ThanhTien);

            //append dong vao tbody
            document.getElementById("tbodyHoaDonuberSUV").appendChild(tagTRuberX);

            document.getElementById("tbodyHoaDonuberSUV2").innerHTML = "";
            var tagTR2uberX = document.createElement("tr")

            var tagTDuberX_ThongTin = document.createElement("td")
            var tagTDuberX_ThoiGianCho = document.createElement("td")
            var tagTDuberX_DonGiaThoiGianCho = document.createElement("td")
            var tagTDuberX_ThanhTienThoiGianCho = document.createElement("td")

            tagTDuberX_ThongTin.innerHTML = "Thời Gian Chờ";

            tagTDuberX_ThoiGianCho.innerHTML = TongThoiGianChouberSUV + " Phút";

            tagTDuberX_DonGiaThoiGianCho.innerHTML = danhSachHoaDon[i].DonGiaThoiGianCho();

            tagTDuberX_ThanhTienThoiGianCho.innerHTML = TongThoiGianChouberSUV * danhSachHoaDon[i].DonGiaThoiGianCho();

            tagTR2uberX.appendChild(tagTDuberX_ThongTin);
            tagTR2uberX.appendChild(tagTDuberX_ThoiGianCho);
            tagTR2uberX.appendChild(tagTDuberX_DonGiaThoiGianCho);
            tagTR2uberX.appendChild(tagTDuberX_ThanhTienThoiGianCho);

            document.getElementById("tbodyHoaDonuberSUV2").appendChild(tagTR2uberX);
        }

        if (danhSachHoaDon[i].loaiXe == "uberBlack") {

            TongThoiGianChouberBlack = TongThoiGianChouberBlack + danhSachHoaDon[i].layThoiGianCho;
            var tagTRuberX = document.createElement("tr")

            //tao cot
            var tagTDuberX_ChiTiet = document.createElement("td")
            var tagTDuberX_SoKM = document.createElement("td")
            var tagTDuberX_DonGia = document.createElement("td")
            var tagTDuberX_ThanhTien = document.createElement("td")
            // gan noi dung cot

            tagTDuberX_ChiTiet.innerHTML = danhSachHoaDon[i].loaiXe;
            tagTDuberX_SoKM.innerHTML = danhSachHoaDon[i].laySoKm + " km";
            tagTDuberX_DonGia.innerHTML = danhSachHoaDon[i].DonGia();
            tagTDuberX_ThanhTien.innerHTML = danhSachHoaDon[i].ThanhTien();

            // append cot vao dong
            tagTRuberX.appendChild(tagTDuberX_ChiTiet);
            tagTRuberX.appendChild(tagTDuberX_SoKM);
            tagTRuberX.appendChild(tagTDuberX_DonGia);
            tagTRuberX.appendChild(tagTDuberX_ThanhTien);

            //append dong vao tbody
            document.getElementById("tbodyHoaDonuberBlack").appendChild(tagTRuberX);

            document.getElementById("tbodyHoaDonuberBlack2").innerHTML = "";
            var tagTR2uberX = document.createElement("tr")

            var tagTDuberX_ThongTin = document.createElement("td")
            var tagTDuberX_ThoiGianCho = document.createElement("td")
            var tagTDuberX_DonGiaThoiGianCho = document.createElement("td")
            var tagTDuberX_ThanhTienThoiGianCho = document.createElement("td")

            tagTDuberX_ThongTin.innerHTML = "Thời Gian Chờ";

            tagTDuberX_ThoiGianCho.innerHTML = TongThoiGianChouberBlack + " Phút";

            tagTDuberX_DonGiaThoiGianCho.innerHTML = danhSachHoaDon[i].DonGiaThoiGianCho();

            tagTDuberX_ThanhTienThoiGianCho.innerHTML = TongThoiGianChouberBlack * danhSachHoaDon[i].DonGiaThoiGianCho();

            tagTR2uberX.appendChild(tagTDuberX_ThongTin);
            tagTR2uberX.appendChild(tagTDuberX_ThoiGianCho);
            tagTR2uberX.appendChild(tagTDuberX_DonGiaThoiGianCho);
            tagTR2uberX.appendChild(tagTDuberX_ThanhTienThoiGianCho);

            document.getElementById("tbodyHoaDonuberBlack2").appendChild(tagTR2uberX);
        }

    }

    document.getElementById("TongTien").innerHTML = TongTien();

}

// function taoBang() {

//     //rest lai tbody
//     document.getElementById("tbodyHoaDon").innerHTML = "";
//     for (var i = 0; i < danhSachHoaDon.length; i++) {

//         // tao dong
//         var tagTR = document.createElement("tr")

//         //tao cot
//         var tagTD_ChiTiet = document.createElement("td")
//         var tagTD_SoKM = document.createElement("td")
//         var tagTD_DonGia = document.createElement("td")
//         var tagTD_ThanhTien = document.createElement("td")
//         // gan noi dung cot

//         tagTD_ChiTiet.innerHTML = danhSachHoaDon[i].loaiXe;
//         tagTD_SoKM.innerHTML = danhSachHoaDon[i].laySoKm + " km";
//         tagTD_DonGia.innerHTML = danhSachHoaDon[i].DonGia();
//         tagTD_ThanhTien.innerHTML = danhSachHoaDon[i].ThanhTien();

//         // append cot vao dong
//         tagTR.appendChild(tagTD_ChiTiet);
//         tagTR.appendChild(tagTD_SoKM);
//         tagTR.appendChild(tagTD_DonGia);
//         tagTR.appendChild(tagTD_ThanhTien);

//         //append dong vao tbody
//         document.getElementById("tbodyHoaDon").appendChild(tagTR);

//         // tao dong
//         var tagTR2 = document.createElement("tr")

//         //tao cot
//         var tagTD_ThongTin = document.createElement("td")
//         var tagTD_ThoiGianCho = document.createElement("td")
//         var tagTD_DonGiaThoiGianCho = document.createElement("td")
//         var tagTD_ThanhTienThoiGianCho = document.createElement("td")
//         // gan noi dung cot

//         tagTD_ThongTin.innerHTML = "Thời Gian Chờ";
//         tagTD_ThoiGianCho.innerHTML = danhSachHoaDon[i].layThoiGianCho + " Phút";
//         tagTD_DonGiaThoiGianCho.innerHTML = danhSachHoaDon[i].DonGiaThoiGianCho();
//         tagTD_ThanhTienThoiGianCho.innerHTML = danhSachHoaDon[i].ThanhTienThoiGianCho();

//         // append cot vao dong
//         tagTR2.appendChild(tagTD_ThongTin);
//         tagTR2.appendChild(tagTD_ThoiGianCho);
//         tagTR2.appendChild(tagTD_DonGiaThoiGianCho);
//         tagTR2.appendChild(tagTD_ThanhTienThoiGianCho);

//         //append dong vao tbody
//         document.getElementById("tbodyHoaDon").appendChild(tagTR2);

//     }


//     document.getElementById("TongTien").innerHTML = TongTien();
// }

function TongTien() {
    var tongtien = 0;
    for (var i = 0; i < danhSachHoaDon.length; i++) {
        tongtien = tongtien + danhSachHoaDon[i].ThanhTien() + (danhSachHoaDon[i].layThoiGianCho * danhSachHoaDon[i].DonGiaThoiGianCho())
    }
    return tongtien;
}



