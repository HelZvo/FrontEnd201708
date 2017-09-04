"use strict";
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('AppComponent', function () {
    var de;
    //let di: DebugElement; // variable to help me understand and test Karma
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [app_component_1.AppComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        //di = fixture.debugElement.query(By.css('h2'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have expected <h1> text', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/angular/i, '<h1> should say something about "Angular"');
    });
    it('Sättesta korrektne alapealkiri!', function () {
        fixture.detectChanges();
        var h2 = fixture.debugElement.query(platform_browser_1.By.css('h2')).nativeElement;
        expect(h2.innerText).toMatch(/Alapealkiri/i, '<h2> peaks sisaldama stringi: Alapealkiri!');
    });
});
//# sourceMappingURL=app.component.spec.js.map