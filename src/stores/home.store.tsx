import { action, observable } from 'mobx';

export default class HomeStore {
  @observable etanol: number = 0;
  @observable gasolina: number = 0;
  @observable resultado: string = '?';

  @action calculate = () => {
    this.etanol = Number(this.etanol.toString().replace(',', '.'))
    this.gasolina = Number(this.gasolina.toString().replace(',', '.'))

    if (isNaN(Number(this.etanol))) {
      this.etanol = 0;
    }

    if (isNaN(Number(this.gasolina))) {
      this.gasolina = 0;
    }

    if (Number(this.etanol) <= 0 || Number(this.gasolina) <= 0) {
      this.resultado = 'Os valores devem ser maior do que zero';
      return;
    }

    const value = Number(this.etanol) / Number(this.gasolina);

    if (value > 0.70) {
      this.resultado = 'A gasolina vale mais a pena';
    } else if (value < 0.70) {
      this.resultado = 'O etanol vale mais a pena';
    } else {
      this.resultado = 'Ambos são equivalentes';
    }
  }

  @action handleForm = (input) => {
    const key = Object.keys(input)[0];
    const value = input[key];
    this[key] = value;
  }
}

const homeStore = new HomeStore();

export { homeStore };
