class tooltip {
  constructor (element) {
    this.element = element;
  }

  init() {
    this.element.forEach(ele => {

      ele.addEventListener('change', this.updateVariable);
      ele.addEventListener('mouseover', this.updateVariable);
    });
  }

  updateVariable() {
    const suffix = this.dataset.sizing || '';
    console.log(this);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

  }
}

export { tooltip as default };