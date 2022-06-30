import { by, element } from 'protractor';

export class CitaPage{
    private linkCrearCita = element(by.id('linkCitaListar'));
    private linkListarCita = element(by.id('linkCitaCrear'));

    async clickBotonCrearProductos() {
        await this.linkCrearCita.click();
    }

    async clickBotonListarProductos() {
        await this.linkListarCita.click();
    }

}