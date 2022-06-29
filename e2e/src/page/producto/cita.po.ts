import { by, element } from 'protractor';

export class CitaPage{
    private linkCitaCrear = element(by.id('linkCrearProducto'));
    private linkCitaListar = element(by.id('linkCitaListar'));
    private listaCitas = element.all(by.css('ul.citas li'));

    async clickBotonCrearCitas() {
        await this.linkCitaCrear.click();
    }

    async clickBotonListarCitas() {
        await this.linkCitaListar.click();
    }

    async contarCitas() {
        return this.listaCitas.count();
    }
}