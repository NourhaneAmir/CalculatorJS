import Component from "../../abstract/component.js";
import CalculateService from "../../service/calculate.js";
import AlertService from "../../service/alert.js";
class Form extends Component {
  static render() {
    if (!this.styleIsLoaded) {
      this.load("src/components/form/form.css");
      this.styleIsLoaded = true;
    }

    const formTag = document.createElement("form");

    formTag.innerHTML = `
            <div id="container">
                <h2>Form</h2>
            </div>
          `;

    formTag.onsubmit = this.submit;

    const headerTag = document.querySelector("header");
    headerTag.insertAdjacentElement("afterend", formTag);
  }

  static submit(event) {
    event.preventDefault();

    const firstVal = +document.querySelector("#firstVal").value;
    const secondVal = +document.querySelector("#secondVal").value;
    const operator = document.querySelector("select").value;
    const result = CalculateService.calculate(firstVal, secondVal, operator);
    AlertService.popUp(`${firstVal} ${operator} ${secondVal} = ${result}`);
  }
}
export default Form;
