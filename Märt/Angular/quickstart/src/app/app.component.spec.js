"use strict";
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [app_component_1.AppComponent]
        })
            .compileComponents().then();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () {
        expect(comp).toBeDefined();
    });
    it('should have expected <h1> text', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/angular/i, '<h1> should say something about "Angular"');
    });
    it('Sätesta korrektne alapealkiri!', function () {
        fixture.detectChanges();
        var h2 = fixture.debugElement.query(platform_browser_1.By.css('h2')).nativeElement;
        expect(h2.innerText).toMatch('Alapealkiri');
    });
});
//# sourceMappingURL=app.component.spec.js.map