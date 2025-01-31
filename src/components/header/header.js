import Component from "../../abstract/component.js";

class Header extends Component {
  static render() {
    if (!this.styleIsLoaded) {
      this.load("src/components/header/header.css");
      this.styleIsLoaded = true;
    }
    const headerTag = document.createElement("header");
    headerTag.innerHTML = `<nav>
            <h1>Calculator</h1>
        </nav>`;

    document.body.prepend(headerTag);
  }
}
export default Header;
