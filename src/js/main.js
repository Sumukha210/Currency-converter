import Util from "./util";

class Main extends Util {
  constructor() {
    super();
    this.cardResult = document.getElementById("cardResult");
    this.form1 = document.getElementById("form1");
    this.form2 = document.getElementById("form2");
    this.formControl1 = document.getElementById("form-control1");
    this.convertBtn = document.getElementById("convertBtn");
    this.convertBtn.addEventListener("click", this.convertFun);
    this.formControl1.addEventListener("input", this.formControlFun);
    this.cardResult.style.display = "none";
    this.createOption();
    this.formControl1.value === 0;
  }
  formControlFun = () => {
    this.cardResult.style.display = "none";
  };

  convertFun = async () => {
    this.cardResult.style.display = "none";

    if (this.formControl1.value <= 0 || this.formControl1.value === "") {
      this.alertPopUp(`alert alert-danger`, `Amount should not be null(blank)`);
    } else {
      const res = await this.fetchCurrency(form1.value);
      this.total =
        parseFloat(res[this.form2.value]) * parseFloat(this.formControl1.value);
      this.cardResult.style.display = "block";
      this.cardResultShow(
        this.cardResult,
        this.formControl1,
        this.total,
        this.form1,
        this.form2
      );
      this.formControl1.value === "";
    }
  };
}

const main = new Main();
