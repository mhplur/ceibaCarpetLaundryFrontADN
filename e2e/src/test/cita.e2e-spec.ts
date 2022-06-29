import { AppPage } from '../app.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { CitaPage } from '../page/producto/cita.po';

describe('workspace-project Cita', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let cita: CitaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        cita = new CitaPage();
    });

    it('Deberia crear producto', () => {
        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonCrearCitas
    });

    it('Deberia listar productos', () => {
        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonListarCitas();

        expect(cita.contarCitas()).toBe(3);
    });
});
