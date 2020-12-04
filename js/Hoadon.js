

function HoaDon(_laySoKm, _layThoiGianCho, _loaiXe) {
  this.laySoKm = _laySoKm;
  this.layThoiGianCho = _layThoiGianCho;
  this.loaiXe = _loaiXe;

  this.ThanhTien = function () {
    switch (this.loaiXe) {
      case "uberX":
        if (this.laySoKm <= 1) {
          var ThanhTien = this.laySoKm * 8000;

        } else if (this.laySoKm > 1 && this.laySoKm <= 20) {
          var ThanhTien = this.laySoKm * 12000;

        } else if (this.laySoKm > 20) {
          var ThanhTien = this.laySoKm * 10000;

        }
        break;
      case "uberSUV":
        if (this.laySoKm <= 1) {
          var ThanhTien = this.laySoKm * 9000;

        } else if (this.laySoKm > 1 && this.laySoKm <= 20) {
          var ThanhTien = this.laySoKm * 14000;

        } else if (this.laySoKm > 20) {
          var ThanhTien = this.laySoKm * 12000;

        }
        break;
      case "uberBlack":
        if (this.laySoKm <= 1) {
          var ThanhTien = this.laySoKm * 10000;

        } else if (this.laySoKm > 1 && this.laySoKm <= 20) {
          var ThanhTien = this.laySoKm * 16000;

        } else if (this.laySoKm > 20) {
          var ThanhTien = this.laySoKm * 14000;

        }
        break;

    }
    return ThanhTien;

  }

  this.ThanhTienThoiGianCho = function () {
    switch (this.loaiXe) {
      case "uberX":

        var ThanhTienThoiGianCho =this.layThoiGianCho * 2000 ;
        break;
      case "uberSUV":

        var ThanhTienThoiGianCho =this.layThoiGianCho * 3000;

        break;
      case "uberBlack":

        var ThanhTienThoiGianCho =this.layThoiGianCho * 4000;
        break;

    }
    return ThanhTienThoiGianCho;

  }

  this.DonGiaThoiGianCho = function () {
    switch (this.loaiXe) {
      case "uberX":

        var DonGiaThoiGianCho = 2000;
        break;
      case "uberSUV":

        var DonGiaThoiGianCho = 3000;

        break;
      case "uberBlack":

        var DonGiaThoiGianCho = 4000;
        break;

    }
    return DonGiaThoiGianCho;

  }



  this.DonGia = function () {
    switch (this.loaiXe) {
      case "uberX":
        if (this.laySoKm <= 1) {
          var DonGia = 8000;

        } else if (this.laySoKm > 1 && this.laySoKm <= 20) {
          var DonGia = 12000;

        } else if (this.laySoKm > 20) {
          var DonGia = 10000;

        }
        break;
      case "uberSUV":
        if (this.laySoKm <= 1) {
          var DonGia = 9000;

        } else if (this.laySoKm > 1 && this.laySoKm <= 20) {
          var DonGia = 14000;

        } else if (this.laySoKm > 20) {
          var DonGia = 12000;

        }
        break;
      case "uberBlack":
        if (this.laySoKm <= 1) {
          var DonGia = 10000;

        } else if (this.laySoKm > 1 && this.laySoKm <= 20) {
          var DonGia = 16000;

        } else if (this.laySoKm > 20) {
          var DonGia = 14000;

        }
        break;

    }
    return DonGia;

  }


}