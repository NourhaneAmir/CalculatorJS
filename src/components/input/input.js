import Component from "../../abstract/component.js";

class Input extends Component {
  static render(id, type, placeholder, required) {
    if (!this.styleIsLoaded) {
      this.load("src/components/input/input.css");
      this.styleIsLoaded = true;
    }

    const inputTag = document.createElement("input");
    inputTag.id = id;
    // inputTag.type = type;
    inputTag.placeholder = placeholder;
    inputTag.required = required;

    const Container = document.querySelector("#container");
    Container.append(inputTag);
  }
}
export default Input;
