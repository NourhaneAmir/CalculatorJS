import Component from "../../abstract/component.js";

class Footer extends Component {
  static render() {
    if (!this.styleIsLoaded) {
      this.load("src/components/footer/footer.css");
      this.styleIsLoaded = true;
    }
    const footerTag = document.createElement("footer");
    footerTag.innerHTML = `
    <p>
        calculator lab using oop
    </p>
    
    `;

    document.body.append(footerTag);
  }
}
export default Footer;
