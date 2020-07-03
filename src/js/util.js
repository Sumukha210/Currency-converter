import axios from "axios";

export default class Util {
  constructor() {
    this.countries = [
      "AUD",
      "BGN",
      "BRL",
      "CAD",
      "CHF",
      "CNY",
      "CZK",
      "DKK",
      "EUR",
      "GBP",
      "HKD",
      "HRK",
      "HUF",
      "IDR",
      "ILS",
      "INR",
      "ISK",
      "JPY",
      "KRW",
      "MXN",
      "MYR",
      "NOK",
      "NZD",
      "PHP",
      "PLN",
      "RON",
      "RUB",
      "SEK",
      "SGD",
      "THB",
      "TRY",
      "USD",
      "ZAR",
    ];
    this.forms = document.querySelectorAll(".form-select");
  }

  createOption() {
    this.countries.map((coun) => {
      this.forms[0].innerHTML += ` <option value="${coun}">${coun}</option>`;
      this.forms[1].innerHTML += ` <option value="${coun}">${coun}</option>`;
    });
  }

  async fetchCurrency(country) {
    const data = await axios.get(
      ` https://api.exchangeratesapi.io/latest?base=${country}`
    );
    return data.data.rates;
  }

  cardResultShow(cardResult, formControl1, total, form1, form2) {
    cardResult.innerHTML = ` <div class="card-header text-center text-capitalize bg-info text-light display-6">converted result</div>
  <div class="card-body">
      <div class="card-text text-capitalize text-center"> ${formControl1.value} ${form1.value} = ${total} ${form2.value} </div>
  </div>`;
  }

  alertPopUp(alert, msg) {
    const div = document.createElement("div");
    div.className = alert;
    const parentCard = document.getElementById("parentCard");
    div.innerHTML = msg;
    parentCard.insertBefore(div, parentCard.childNodes[0]);
    setTimeout(() => {
      parentCard.removeChild(div);
    }, 3000);
  }
}
