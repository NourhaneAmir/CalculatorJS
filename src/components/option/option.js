import Component from "../../abstract/component.js";

class Option extends Component {
  static render(value) {
    if (!this.styleIsLoaded) {
      this.load("src/components/option/option.css");
      this.styleIsLoaded = true;
    }

    const optionTag = document.createElement("option");
    optionTag.value = value;
    optionTag.innerHTML = value;

    const selectTag = document.querySelector("select");
    selectTag.append(optionTag);
  }
}

export default Option;
