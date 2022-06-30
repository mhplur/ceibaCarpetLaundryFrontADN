import { AppPage } from '../app.po';
import { CitaPage } from '../page/cita/cita.po';
import { NavbarPage } from '../page/navbar/navbar.po';

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
        navBar.clickBotonProductos();
        cita.clickBotonCrearProductos();
    });

    it('Deberia listar productos', () => {
        page.navigateTo();
        navBar.clickBotonCitas
        cita.clickBotonCrearProductos();
    });
});
