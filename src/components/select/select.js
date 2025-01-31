import Component from "../../abstract/component.js";

class Select extends Component {
  static render(type, placeholder, required) {
    if (!this.styleIsLoaded) {
      this.load("src/components/select/select.css");
      this.styleIsLoaded = true;
    }

    const selectTag = document.createElement("select");

    const container = document.querySelector("#container");
    container.append(selectTag);
  }
}

export default Select;
