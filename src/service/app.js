import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import Form from "../components/form/form.js";
import Input from "../components/input/input.js";
import Select from "../components/select/select.js";
import Option from "../components/option/option.js";
import { Operator } from "../../src/const/operator.js";
import Button from "../components/button/button.js";
class AppService {
  static build() {
    Header.render();
    Form.render();
    Input.render("firstVal", "number", "First Value", true);
    Select.render();
    Operator.forEach((Operator) => {
      Option.render(Operator);
    });
    Input.render("secondVal", "number", "Second Value", true);
    Button.render("Calculate", "submit");
    Footer.render();
  }
}
export default AppService;
