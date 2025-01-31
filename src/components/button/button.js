import Component from "../../abstract/component.js";

class Button extends Component {
  static render(value, type) {
    if (!this.styleIsLoaded) {
      this.load("src/components/button/button.css");
      this.styleIsLoaded = true;
    }

    const buttonTag = document.createElement("button");
    buttonTag.innerHTML = value;
    buttonTag.type = type;

    const container = document.querySelector("#container");
    container.append(buttonTag);
  }
}

export default Button;
