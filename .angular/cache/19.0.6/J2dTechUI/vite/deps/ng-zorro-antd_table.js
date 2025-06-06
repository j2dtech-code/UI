import {
  NzEmbedEmptyComponent,
  NzEmptyModule,
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-BESLJ2EX.js";
import {
  NzI18nService
} from "./chunk-M463B4WK.js";
import {
  NzDropDownDirective,
  NzDropDownModule,
  NzDropdownMenuComponent
} from "./chunk-WJI2N5PT.js";
import {
  NzMenuDirective,
  NzMenuItemComponent
} from "./chunk-WELII7ZK.js";
import "./chunk-FZEE6OUW.js";
import "./chunk-VNQNHMZ7.js";
import "./chunk-KBHNQWIN.js";
import {
  NzButtonComponent,
  NzButtonModule
} from "./chunk-6JCA2WVF.js";
import "./chunk-4PA35YAV.js";
import {
  NzResizeObserver
} from "./chunk-TCSKPLGE.js";
import {
  NzBreakpointEnum,
  NzBreakpointService,
  NzDestroyService,
  NzResizeService,
  gridResponsiveMap
} from "./chunk-N7YX6HHZ.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-H4I3G7SG.js";
import {
  NzTransitionPatchDirective
} from "./chunk-MS36PNBJ.js";
import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-K2NG2HIB.js";
import {
  NzFormStatusService
} from "./chunk-HB7CT22V.js";
import "./chunk-FZMRMYX4.js";
import {
  NzWaveDirective
} from "./chunk-AEDVAEOE.js";
import "./chunk-JQOYOVVC.js";
import "./chunk-BPH5AYQH.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-TJVAGKAL.js";
import "./chunk-BQ76GOFF.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-BAH5O3YW.js";
import {
  arraysEqual,
  fromEventOutsideAngular,
  isNil,
  measureScrollbar,
  toNumber
} from "./chunk-6VPQKPFL.js";
import "./chunk-2G5IUPZ4.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollingModule
} from "./chunk-QKGZFMCA.js";
import "./chunk-VIME6GNZ.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-CHIXNQ6J.js";
import "./chunk-3C5G6VPP.js";
import "./chunk-HQ2N2RD7.js";
import {
  FocusMonitor
} from "./chunk-GO47A54L.js";
import "./chunk-3YLFXDIK.js";
import "./chunk-KPZPXKRC.js";
import {
  Directionality
} from "./chunk-N5T7GSWS.js";
import "./chunk-NHR3UVPM.js";
import {
  Platform
} from "./chunk-APFH5D7K.js";
import {
  AsyncPipe,
  NgTemplateOutlet
} from "./chunk-3KQDH2QS.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7NQXZB3Q.js";
import {
  BehaviorSubject,
  EMPTY,
  ReplaySubject,
  Subject,
  __esDecorate,
  __runInitializers,
  __spreadProps,
  __spreadValues,
  combineLatest,
  debounce,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  map,
  merge,
  mergeMap,
  of,
  skip,
  startWith,
  switchMap,
  takeUntil,
  timer
} from "./chunk-OUAVWW6Y.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-radio.mjs
var _c0 = ["*"];
var _c1 = ["inputElement"];
var _c2 = ["nz-radio", ""];
var NzRadioService = class _NzRadioService {
  constructor() {
    this.selected$ = new ReplaySubject(1);
    this.touched$ = new Subject();
    this.disabled$ = new ReplaySubject(1);
    this.name$ = new ReplaySubject(1);
  }
  touch() {
    this.touched$.next();
  }
  select(value) {
    this.selected$.next(value);
  }
  setDisabled(value) {
    this.disabled$.next(value);
  }
  setName(value) {
    this.name$.next(value);
  }
  static {
    this.ɵfac = function NzRadioService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzRadioService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NzRadioService,
      factory: _NzRadioService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRadioService, [{
    type: Injectable
  }], null, null);
})();
var NzRadioGroupComponent = class _NzRadioGroupComponent {
  constructor(cdr, nzRadioService, directionality) {
    this.cdr = cdr;
    this.nzRadioService = nzRadioService;
    this.directionality = directionality;
    this.value = null;
    this.destroy$ = new Subject();
    this.isNzDisableFirstChange = true;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.nzDisabled = false;
    this.nzButtonStyle = "outline";
    this.nzSize = "default";
    this.nzName = null;
    this.dir = "ltr";
  }
  ngOnInit() {
    this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      if (this.value !== value) {
        this.value = value;
        this.onChange(this.value);
      }
    });
    this.nzRadioService.touched$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      Promise.resolve().then(() => this.onTouched());
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzDisabled,
      nzName
    } = changes;
    if (nzDisabled) {
      this.nzRadioService.setDisabled(this.nzDisabled);
    }
    if (nzName) {
      this.nzRadioService.setName(this.nzName);
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  writeValue(value) {
    this.value = value;
    this.nzRadioService.select(value);
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.isNzDisableFirstChange = false;
    this.nzRadioService.setDisabled(this.nzDisabled);
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function NzRadioGroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzRadioGroupComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzRadioService), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzRadioGroupComponent,
      selectors: [["nz-radio-group"]],
      hostAttrs: [1, "ant-radio-group"],
      hostVars: 8,
      hostBindings: function NzRadioGroupComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-radio-group-large", ctx.nzSize === "large")("ant-radio-group-small", ctx.nzSize === "small")("ant-radio-group-solid", ctx.nzButtonStyle === "solid")("ant-radio-group-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzButtonStyle: "nzButtonStyle",
        nzSize: "nzSize",
        nzName: "nzName"
      },
      exportAs: ["nzRadioGroup"],
      features: [ɵɵProvidersFeature([NzRadioService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NzRadioGroupComponent),
        multi: true
      }]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzRadioGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRadioGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-radio-group",
      exportAs: "nzRadioGroup",
      preserveWhitespaces: false,
      template: ` <ng-content></ng-content> `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NzRadioService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzRadioGroupComponent),
        multi: true
      }],
      host: {
        class: "ant-radio-group",
        "[class.ant-radio-group-large]": `nzSize === 'large'`,
        "[class.ant-radio-group-small]": `nzSize === 'small'`,
        "[class.ant-radio-group-solid]": `nzButtonStyle === 'solid'`,
        "[class.ant-radio-group-rtl]": `dir === 'rtl'`
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzRadioService
  }, {
    type: Directionality
  }], {
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzButtonStyle: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzName: [{
      type: Input
    }]
  });
})();
var NzRadioComponent = class _NzRadioComponent {
  focus() {
    this.focusMonitor.focusVia(this.inputElement, "keyboard");
  }
  blur() {
    this.inputElement.nativeElement.blur();
  }
  constructor(ngZone, elementRef, cdr, focusMonitor) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.focusMonitor = focusMonitor;
    this.isNgModel = false;
    this.destroy$ = new Subject();
    this.isNzDisableFirstChange = true;
    this.directionality = inject(Directionality);
    this.nzRadioService = inject(NzRadioService, {
      optional: true
    });
    this.nzFormStatusService = inject(NzFormStatusService, {
      optional: true
    });
    this.isChecked = false;
    this.name = null;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.nzValue = null;
    this.nzDisabled = false;
    this.nzAutoFocus = false;
    this.isRadioButton = false;
    this.dir = "ltr";
  }
  setDisabledState(disabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
    this.isNzDisableFirstChange = false;
    this.cdr.markForCheck();
  }
  writeValue(value) {
    this.isChecked = value;
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.isNgModel = true;
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  ngOnInit() {
    if (this.nzRadioService) {
      this.nzRadioService.name$.pipe(takeUntil(this.destroy$)).subscribe((name) => {
        this.name = name;
        this.cdr.markForCheck();
      });
      this.nzRadioService.disabled$.pipe(takeUntil(this.destroy$)).subscribe((disabled) => {
        this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
        this.isNzDisableFirstChange = false;
        this.cdr.markForCheck();
      });
      this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe((value) => {
        const isChecked = this.isChecked;
        this.isChecked = this.nzValue === value;
        if (this.isNgModel && isChecked !== this.isChecked && // We're only intereted if `isChecked` has been changed to `false` value to emit `false` to the ascendant form,
        // since we already emit `true` within the `setupClickListener`.
        this.isChecked === false) {
          this.onChange(false);
        }
        this.cdr.markForCheck();
      });
    }
    this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
        if (this.nzRadioService) {
          this.nzRadioService.touch();
        }
      }
    });
    this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.setupClickListener();
  }
  ngAfterViewInit() {
    if (this.nzAutoFocus) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
  setupClickListener() {
    fromEventOutsideAngular(this.elementRef.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => {
      event.stopPropagation();
      event.preventDefault();
      if (this.nzDisabled || this.isChecked) {
        return;
      }
      this.ngZone.run(() => {
        this.focus();
        this.nzRadioService?.select(this.nzValue);
        if (this.isNgModel) {
          this.isChecked = true;
          this.onChange(true);
        }
        this.cdr.markForCheck();
      });
    });
  }
  static {
    this.ɵfac = function NzRadioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzRadioComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzRadioComponent,
      selectors: [["", "nz-radio", ""], ["", "nz-radio-button", ""]],
      viewQuery: function NzRadioComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c1, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        }
      },
      hostVars: 18,
      hostBindings: function NzRadioComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-radio-wrapper-in-form-item", !!ctx.nzFormStatusService)("ant-radio-wrapper", !ctx.isRadioButton)("ant-radio-button-wrapper", ctx.isRadioButton)("ant-radio-wrapper-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-button-wrapper-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-wrapper-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button-wrapper-disabled", ctx.nzDisabled && ctx.isRadioButton)("ant-radio-wrapper-rtl", !ctx.isRadioButton && ctx.dir === "rtl")("ant-radio-button-wrapper-rtl", ctx.isRadioButton && ctx.dir === "rtl");
        }
      },
      inputs: {
        nzValue: "nzValue",
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzAutoFocus: [2, "nzAutoFocus", "nzAutoFocus", booleanAttribute],
        isRadioButton: [2, "nz-radio-button", "isRadioButton", booleanAttribute]
      },
      exportAs: ["nzRadio"],
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NzRadioComponent),
        multi: true
      }]), ɵɵInputTransformsFeature],
      attrs: _c2,
      ngContentSelectors: _c0,
      decls: 6,
      vars: 24,
      consts: [["inputElement", ""], ["type", "radio", 3, "disabled", "checked"]],
      template: function NzRadioComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "span");
          ɵɵelement(1, "input", 1, 0)(3, "span");
          ɵɵelementEnd();
          ɵɵelementStart(4, "span");
          ɵɵprojection(5);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassProp("ant-radio", !ctx.isRadioButton)("ant-radio-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button", ctx.isRadioButton)("ant-radio-button-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-button-disabled", ctx.nzDisabled && ctx.isRadioButton);
          ɵɵadvance();
          ɵɵclassProp("ant-radio-input", !ctx.isRadioButton)("ant-radio-button-input", ctx.isRadioButton);
          ɵɵproperty("disabled", ctx.nzDisabled)("checked", ctx.isChecked);
          ɵɵattribute("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("name", ctx.name);
          ɵɵadvance(2);
          ɵɵclassProp("ant-radio-inner", !ctx.isRadioButton)("ant-radio-button-inner", ctx.isRadioButton);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRadioComponent, [{
    type: Component,
    args: [{
      selector: "[nz-radio],[nz-radio-button]",
      exportAs: "nzRadio",
      preserveWhitespaces: false,
      template: `
    <span
      [class.ant-radio]="!isRadioButton"
      [class.ant-radio-checked]="isChecked && !isRadioButton"
      [class.ant-radio-disabled]="nzDisabled && !isRadioButton"
      [class.ant-radio-button]="isRadioButton"
      [class.ant-radio-button-checked]="isChecked && isRadioButton"
      [class.ant-radio-button-disabled]="nzDisabled && isRadioButton"
    >
      <input
        #inputElement
        type="radio"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [class.ant-radio-input]="!isRadioButton"
        [class.ant-radio-button-input]="isRadioButton"
        [disabled]="nzDisabled"
        [checked]="isChecked"
        [attr.name]="name"
      />
      <span [class.ant-radio-inner]="!isRadioButton" [class.ant-radio-button-inner]="isRadioButton"></span>
    </span>
    <span><ng-content></ng-content></span>
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzRadioComponent),
        multi: true
      }],
      host: {
        "[class.ant-radio-wrapper-in-form-item]": "!!nzFormStatusService",
        "[class.ant-radio-wrapper]": "!isRadioButton",
        "[class.ant-radio-button-wrapper]": "isRadioButton",
        "[class.ant-radio-wrapper-checked]": "isChecked && !isRadioButton",
        "[class.ant-radio-button-wrapper-checked]": "isChecked && isRadioButton",
        "[class.ant-radio-wrapper-disabled]": "nzDisabled && !isRadioButton",
        "[class.ant-radio-button-wrapper-disabled]": "nzDisabled && isRadioButton",
        "[class.ant-radio-wrapper-rtl]": `!isRadioButton && dir === 'rtl'`,
        "[class.ant-radio-button-wrapper-rtl]": `isRadioButton && dir === 'rtl'`
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusMonitor
  }], {
    inputElement: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    nzValue: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isRadioButton: [{
      type: Input,
      args: [{
        alias: "nz-radio-button",
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzRadioModule = class _NzRadioModule {
  static {
    this.ɵfac = function NzRadioModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzRadioModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzRadioModule,
      imports: [NzRadioComponent, NzRadioGroupComponent],
      exports: [NzRadioComponent, NzRadioGroupComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRadioModule, [{
    type: NgModule,
    args: [{
      imports: [NzRadioComponent, NzRadioGroupComponent],
      exports: [NzRadioComponent, NzRadioGroupComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-pagination.mjs
var _c02 = ["nz-pagination-item", ""];
var _c12 = (a0, a1) => ({
  $implicit: a0,
  page: a1
});
function NzPaginationItemComponent_ng_template_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r1 = ɵɵnextContext().page;
    ɵɵadvance();
    ɵɵtextInterpolate(page_r1);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 4);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 5);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 2);
    ɵɵtemplate(1, NzPaginationItemComponent_ng_template_0_Case_1_Conditional_1_Template, 1, 0, "nz-icon", 4)(2, NzPaginationItemComponent_ng_template_0_Case_1_Conditional_2_Template, 1, 0, "nz-icon", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.disabled);
    ɵɵattribute("title", ctx_r1.locale.prev_page);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.direction === "rtl" ? 1 : 2);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 5);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 4);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 2);
    ɵɵtemplate(1, NzPaginationItemComponent_ng_template_0_Case_2_Conditional_1_Template, 1, 0, "nz-icon", 5)(2, NzPaginationItemComponent_ng_template_0_Case_2_Conditional_2_Template, 1, 0, "nz-icon", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.disabled);
    ɵɵattribute("title", ctx_r1.locale.next_page);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.direction === "rtl" ? 1 : 2);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 9);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_0_Template, 1, 0, "span", 8)(1, NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_1_Template, 1, 0, "nz-icon", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(ctx_r1.direction === "rtl" ? 0 : 1);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 10);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 11);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_0_Template, 1, 0, "span", 10)(1, NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_1_Template, 1, 0, "nz-icon", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(ctx_r1.direction === "rtl" ? 0 : 1);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 3)(1, "div", 6);
    ɵɵtemplate(2, NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Template, 2, 1)(3, NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Template, 2, 1);
    ɵɵelementStart(4, "span", 7);
    ɵɵtext(5, "•••");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const type_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵconditional((tmp_5_0 = type_r3) === "prev_5" ? 2 : tmp_5_0 === "next_5" ? 3 : -1);
  }
}
function NzPaginationItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationItemComponent_ng_template_0_Case_0_Template, 2, 1, "a")(1, NzPaginationItemComponent_ng_template_0_Case_1_Template, 3, 3, "button", 2)(2, NzPaginationItemComponent_ng_template_0_Case_2_Template, 3, 3, "button", 2)(3, NzPaginationItemComponent_ng_template_0_Case_3_Template, 6, 1, "a", 3);
  }
  if (rf & 2) {
    let tmp_4_0;
    const type_r3 = ctx.$implicit;
    ɵɵconditional((tmp_4_0 = type_r3) === "page" ? 0 : tmp_4_0 === "prev" ? 1 : tmp_4_0 === "next" ? 2 : 3);
  }
}
function NzPaginationItemComponent_ng_template_2_Template(rf, ctx) {
}
var _c22 = ["nz-pagination-options", ""];
var _forTrack0 = ($index, $item) => $item.value;
function NzPaginationOptionsComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-option", 3);
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    ɵɵproperty("nzLabel", option_r3.label)("nzValue", option_r3.value);
  }
}
function NzPaginationOptionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select", 2);
    ɵɵlistener("ngModelChange", function NzPaginationOptionsComponent_Conditional_0_Template_nz_select_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPageSizeChange($event));
    });
    ɵɵrepeaterCreate(1, NzPaginationOptionsComponent_Conditional_0_For_2_Template, 1, 2, "nz-option", 3, _forTrack0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzDisabled", ctx_r1.disabled)("nzSize", ctx_r1.nzSize)("ngModel", ctx_r1.pageSize);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.listOfPageSizeOption);
  }
}
function NzPaginationOptionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵtext(1);
    ɵɵelementStart(2, "input", 4);
    ɵɵlistener("keydown.enter", function NzPaginationOptionsComponent_Conditional_1_Template_input_keydown_enter_2_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.jumpToPageViaInput($event));
    });
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.locale.jump_to, " ");
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.disabled);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.locale.page, " ");
  }
}
var _c3 = ["containerTemplate"];
var _c4 = (a0, a1) => ({
  $implicit: a0,
  range: a1
});
function NzPaginationDefaultComponent_ng_template_0_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NzPaginationDefaultComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 1);
    ɵɵtemplate(1, NzPaginationDefaultComponent_ng_template_0_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.showTotal)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c4, ctx_r0.total, ctx_r0.ranges));
  }
}
function NzPaginationDefaultComponent_ng_template_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 5);
    ɵɵlistener("gotoIndex", function NzPaginationDefaultComponent_ng_template_0_For_3_Template_li_gotoIndex_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.jumpPage($event));
    })("diffIndex", function NzPaginationDefaultComponent_ng_template_0_For_3_Template_li_diffIndex_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.jumpDiff($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("locale", ctx_r0.locale)("type", page_r3.type)("index", page_r3.index)("disabled", !!page_r3.disabled)("itemRender", ctx_r0.itemRender)("active", ctx_r0.pageIndex === page_r3.index)("direction", ctx_r0.dir);
  }
}
function NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 6);
    ɵɵlistener("pageIndexChange", function NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template_li_pageIndexChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onPageIndexChange($event));
    })("pageSizeChange", function NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template_li_pageSizeChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onPageSizeChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("total", ctx_r0.total)("locale", ctx_r0.locale)("disabled", ctx_r0.disabled)("nzSize", ctx_r0.nzSize)("showSizeChanger", ctx_r0.showSizeChanger)("showQuickJumper", ctx_r0.showQuickJumper)("pageIndex", ctx_r0.pageIndex)("pageSize", ctx_r0.pageSize)("pageSizeOptions", ctx_r0.pageSizeOptions);
  }
}
function NzPaginationDefaultComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul");
    ɵɵtemplate(1, NzPaginationDefaultComponent_ng_template_0_Conditional_1_Template, 2, 5, "li", 1);
    ɵɵrepeaterCreate(2, NzPaginationDefaultComponent_ng_template_0_For_3_Template, 1, 7, "li", 2, ɵɵcomponentInstance().trackByPageItem, true);
    ɵɵtemplate(4, NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template, 1, 9, "li", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.showTotal ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.listOfPageItem);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.showQuickJumper || ctx_r0.showSizeChanger ? 4 : -1);
  }
}
function NzPaginationSimpleComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul")(1, "li", 1);
    ɵɵlistener("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.prePage());
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "li", 2)(3, "input", 3);
    ɵɵlistener("keydown.enter", function NzPaginationSimpleComponent_ng_template_0_Template_input_keydown_enter_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.jumpToPageViaInput($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 4);
    ɵɵtext(5, "/");
    ɵɵelementEnd();
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "li", 5);
    ɵɵlistener("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_7_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nextPage());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("locale", ctx_r1.locale)("disabled", ctx_r1.isFirstIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);
    ɵɵattribute("title", ctx_r1.locale.prev_page);
    ɵɵadvance();
    ɵɵattribute("title", ctx_r1.pageIndex + "/" + ctx_r1.lastIndex);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.disabled)("value", ctx_r1.pageIndex);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.lastIndex, " ");
    ɵɵadvance();
    ɵɵproperty("locale", ctx_r1.locale)("disabled", ctx_r1.isLastIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);
    ɵɵattribute("title", ctx_r1.locale == null ? null : ctx_r1.locale.next_page);
  }
}
function NzPaginationComponent_Conditional_0_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzPaginationComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationComponent_Conditional_0_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const simplePagination_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", simplePagination_r2.template);
  }
}
function NzPaginationComponent_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzPaginationComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationComponent_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const defaultPagination_r3 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", defaultPagination_r3.template);
  }
}
function NzPaginationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationComponent_Conditional_0_Conditional_0_Template, 1, 1, null, 4)(1, NzPaginationComponent_Conditional_0_Conditional_1_Template, 1, 1, null, 4);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵconditional(ctx_r3.nzSimple ? 0 : 1);
  }
}
var NzPaginationItemComponent = class _NzPaginationItemComponent {
  constructor() {
    this.active = false;
    this.index = null;
    this.disabled = false;
    this.direction = "ltr";
    this.type = null;
    this.itemRender = null;
    this.diffIndex = new EventEmitter();
    this.gotoIndex = new EventEmitter();
    this.title = null;
  }
  clickItem() {
    if (!this.disabled) {
      if (this.type === "page") {
        this.gotoIndex.emit(this.index);
      } else {
        this.diffIndex.emit({
          next: 1,
          prev: -1,
          prev_5: -5,
          next_5: 5
        }[this.type]);
      }
    }
  }
  ngOnChanges(changes) {
    const {
      locale,
      index,
      type
    } = changes;
    if (locale || index || type) {
      this.title = {
        page: `${this.index}`,
        next: this.locale?.next_page,
        prev: this.locale?.prev_page,
        prev_5: this.locale?.prev_5,
        next_5: this.locale?.next_5
      }[this.type];
    }
  }
  static {
    this.ɵfac = function NzPaginationItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzPaginationItemComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzPaginationItemComponent,
      selectors: [["li", "nz-pagination-item", ""]],
      hostVars: 19,
      hostBindings: function NzPaginationItemComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NzPaginationItemComponent_click_HostBindingHandler() {
            return ctx.clickItem();
          });
        }
        if (rf & 2) {
          ɵɵattribute("title", ctx.title);
          ɵɵclassProp("ant-pagination-prev", ctx.type === "prev")("ant-pagination-next", ctx.type === "next")("ant-pagination-item", ctx.type === "page")("ant-pagination-jump-prev", ctx.type === "prev_5")("ant-pagination-jump-prev-custom-icon", ctx.type === "prev_5")("ant-pagination-jump-next", ctx.type === "next_5")("ant-pagination-jump-next-custom-icon", ctx.type === "next_5")("ant-pagination-disabled", ctx.disabled)("ant-pagination-item-active", ctx.active);
        }
      },
      inputs: {
        active: "active",
        locale: "locale",
        index: "index",
        disabled: "disabled",
        direction: "direction",
        type: "type",
        itemRender: "itemRender"
      },
      outputs: {
        diffIndex: "diffIndex",
        gotoIndex: "gotoIndex"
      },
      features: [ɵɵNgOnChangesFeature],
      attrs: _c02,
      decls: 3,
      vars: 5,
      consts: [["renderItemTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 1, "ant-pagination-item-link", 3, "disabled"], [1, "ant-pagination-item-link"], ["nzType", "right"], ["nzType", "left"], [1, "ant-pagination-item-container"], [1, "ant-pagination-item-ellipsis"], ["nz-icon", "", "nzType", "double-right", 1, "ant-pagination-item-link-icon"], ["nzType", "double-left", 1, "ant-pagination-item-link-icon"], ["nz-icon", "", "nzType", "double-left", 1, "ant-pagination-item-link-icon"], ["nzType", "double-right", 1, "ant-pagination-item-link-icon"]],
      template: function NzPaginationItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzPaginationItemComponent_ng_template_0_Template, 4, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzPaginationItemComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }
        if (rf & 2) {
          const renderItemTemplate_r4 = ɵɵreference(1);
          ɵɵadvance(2);
          ɵɵproperty("ngTemplateOutlet", ctx.itemRender || renderItemTemplate_r4)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c12, ctx.type, ctx.index));
        }
      },
      dependencies: [NzIconModule, NzIconDirective, NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationItemComponent, [{
    type: Component,
    args: [{
      selector: "li[nz-pagination-item]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #renderItemTemplate let-type let-page="page">
      @switch (type) {
        @case ('page') {
          <a>{{ page }}</a>
        }
        @case ('prev') {
          <button type="button" [disabled]="disabled" [attr.title]="locale.prev_page" class="ant-pagination-item-link">
            @if (direction === 'rtl') {
              <nz-icon nzType="right" />
            } @else {
              <nz-icon nzType="left" />
            }
          </button>
        }
        @case ('next') {
          <button type="button" [disabled]="disabled" [attr.title]="locale.next_page" class="ant-pagination-item-link">
            @if (direction === 'rtl') {
              <nz-icon nzType="left" />
            } @else {
              <nz-icon nzType="right" />
            }
          </button>
        }
        @default {
          <a class="ant-pagination-item-link">
            <div class="ant-pagination-item-container">
              @switch (type) {
                @case ('prev_5') {
                  @if (direction === 'rtl') {
                    <span
                      nz-icon
                      nzType="double-right"
                      class="ant-pagination-item-link-icon"
                    ></span>
                  } @else {
                    <nz-icon nzType="double-left" class="ant-pagination-item-link-icon" />
                  }
                }
                @case ('next_5') {
                  @if (direction === 'rtl') {
                    <span nz-icon nzType="double-left"
                          class="ant-pagination-item-link-icon"></span>
                  } @else {
                    <nz-icon nzType="double-right" class="ant-pagination-item-link-icon" />
                  }
                }
              }
              <span class="ant-pagination-item-ellipsis">•••</span>
            </div>
          </a>
        }
      }
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="itemRender || renderItemTemplate"
      [ngTemplateOutletContext]="{ $implicit: type, page: index }"
    />
  `,
      host: {
        "[class.ant-pagination-prev]": `type === 'prev'`,
        "[class.ant-pagination-next]": `type === 'next'`,
        "[class.ant-pagination-item]": `type === 'page'`,
        "[class.ant-pagination-jump-prev]": `type === 'prev_5'`,
        "[class.ant-pagination-jump-prev-custom-icon]": `type === 'prev_5'`,
        "[class.ant-pagination-jump-next]": `type === 'next_5'`,
        "[class.ant-pagination-jump-next-custom-icon]": `type === 'next_5'`,
        "[class.ant-pagination-disabled]": "disabled",
        "[class.ant-pagination-item-active]": "active",
        "[attr.title]": "title",
        "(click)": "clickItem()"
      },
      imports: [NzIconModule, NgTemplateOutlet]
    }]
  }], null, {
    active: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    itemRender: [{
      type: Input
    }],
    diffIndex: [{
      type: Output
    }],
    gotoIndex: [{
      type: Output
    }]
  });
})();
var NzPaginationOptionsComponent = class _NzPaginationOptionsComponent {
  constructor() {
    this.nzSize = "default";
    this.disabled = false;
    this.showSizeChanger = false;
    this.showQuickJumper = false;
    this.total = 0;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [];
    this.pageIndexChange = new EventEmitter();
    this.pageSizeChange = new EventEmitter();
    this.listOfPageSizeOption = [];
  }
  onPageSizeChange(size) {
    if (this.pageSize !== size) {
      this.pageSizeChange.next(size);
    }
  }
  jumpToPageViaInput($event) {
    const target = $event.target;
    const index = Math.floor(toNumber(target.value, this.pageIndex));
    this.pageIndexChange.next(index);
    target.value = "";
  }
  ngOnChanges(changes) {
    const {
      pageSize,
      pageSizeOptions,
      locale
    } = changes;
    if (pageSize || pageSizeOptions || locale) {
      this.listOfPageSizeOption = [.../* @__PURE__ */ new Set([...this.pageSizeOptions, this.pageSize])].map((item) => ({
        value: item,
        label: `${item} ${this.locale.items_per_page}`
      }));
    }
  }
  static {
    this.ɵfac = function NzPaginationOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzPaginationOptionsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzPaginationOptionsComponent,
      selectors: [["li", "nz-pagination-options", ""]],
      hostAttrs: [1, "ant-pagination-options"],
      inputs: {
        nzSize: "nzSize",
        disabled: "disabled",
        showSizeChanger: "showSizeChanger",
        showQuickJumper: "showQuickJumper",
        locale: "locale",
        total: "total",
        pageIndex: "pageIndex",
        pageSize: "pageSize",
        pageSizeOptions: "pageSizeOptions"
      },
      outputs: {
        pageIndexChange: "pageIndexChange",
        pageSizeChange: "pageSizeChange"
      },
      features: [ɵɵNgOnChangesFeature],
      attrs: _c22,
      decls: 2,
      vars: 2,
      consts: [[1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel"], [1, "ant-pagination-options-quick-jumper"], [1, "ant-pagination-options-size-changer", 3, "ngModelChange", "nzDisabled", "nzSize", "ngModel"], [3, "nzLabel", "nzValue"], [3, "keydown.enter", "disabled"]],
      template: function NzPaginationOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzPaginationOptionsComponent_Conditional_0_Template, 3, 3, "nz-select", 0)(1, NzPaginationOptionsComponent_Conditional_1_Template, 4, 3, "div", 1);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.showSizeChanger ? 0 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showQuickJumper ? 1 : -1);
        }
      },
      dependencies: [NzSelectModule, NzOptionComponent, NzSelectComponent, FormsModule, NgControlStatus, NgModel],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationOptionsComponent, [{
    type: Component,
    args: [{
      selector: "li[nz-pagination-options]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (showSizeChanger) {
      <nz-select
        class="ant-pagination-options-size-changer"
        [nzDisabled]="disabled"
        [nzSize]="nzSize"
        [ngModel]="pageSize"
        (ngModelChange)="onPageSizeChange($event)"
      >
        @for (option of listOfPageSizeOption; track option.value) {
          <nz-option [nzLabel]="option.label" [nzValue]="option.value" />
        }
      </nz-select>
    }

    @if (showQuickJumper) {
      <div class="ant-pagination-options-quick-jumper">
        {{ locale.jump_to }}
        <input [disabled]="disabled" (keydown.enter)="jumpToPageViaInput($event)" />
        {{ locale.page }}
      </div>
    }
  `,
      host: {
        class: "ant-pagination-options"
      },
      imports: [NzSelectModule, FormsModule]
    }]
  }], null, {
    nzSize: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    showSizeChanger: [{
      type: Input
    }],
    showQuickJumper: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    pageIndex: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageSizeOptions: [{
      type: Input
    }],
    pageIndexChange: [{
      type: Output
    }],
    pageSizeChange: [{
      type: Output
    }]
  });
})();
var NzPaginationDefaultComponent = class _NzPaginationDefaultComponent {
  constructor(cdr, renderer, elementRef, directionality) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.nzSize = "default";
    this.itemRender = null;
    this.showTotal = null;
    this.disabled = false;
    this.showSizeChanger = false;
    this.showQuickJumper = false;
    this.total = 0;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [10, 20, 30, 40];
    this.pageIndexChange = new EventEmitter();
    this.pageSizeChange = new EventEmitter();
    this.ranges = [0, 0];
    this.listOfPageItem = [];
    this.dir = "ltr";
    this.destroy$ = new Subject();
    renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.updateRtlStyle();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.updateRtlStyle();
  }
  updateRtlStyle() {
    if (this.dir === "rtl") {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-pagination-rtl");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-pagination-rtl");
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  jumpPage(index) {
    this.onPageIndexChange(index);
  }
  jumpDiff(diff) {
    this.jumpPage(this.pageIndex + diff);
  }
  trackByPageItem(_, value) {
    return `${value.type}-${value.index}`;
  }
  onPageIndexChange(index) {
    this.pageIndexChange.next(index);
  }
  onPageSizeChange(size) {
    this.pageSizeChange.next(size);
  }
  getLastIndex(total, pageSize) {
    return Math.ceil(total / pageSize);
  }
  buildIndexes() {
    const lastIndex = this.getLastIndex(this.total, this.pageSize);
    this.listOfPageItem = this.getListOfPageItem(this.pageIndex, lastIndex);
  }
  getListOfPageItem(pageIndex, lastIndex) {
    const concatWithPrevNext = (listOfPage) => {
      const prevItem = {
        type: "prev",
        disabled: pageIndex === 1
      };
      const nextItem = {
        type: "next",
        disabled: pageIndex === lastIndex
      };
      return [prevItem, ...listOfPage, nextItem];
    };
    const generatePage = (start, end) => {
      const list = [];
      for (let i = start; i <= end; i++) {
        list.push({
          index: i,
          type: "page"
        });
      }
      return list;
    };
    if (lastIndex <= 9) {
      return concatWithPrevNext(generatePage(1, lastIndex));
    } else {
      const generateRangeItem = (selected, last) => {
        let listOfRange = [];
        const prevFiveItem = {
          type: "prev_5"
        };
        const nextFiveItem = {
          type: "next_5"
        };
        const firstPageItem = generatePage(1, 1);
        const lastPageItem = generatePage(lastIndex, lastIndex);
        if (selected < 5) {
          const maxLeft = selected === 4 ? 6 : 5;
          listOfRange = [...generatePage(2, maxLeft), nextFiveItem];
        } else if (selected < last - 3) {
          listOfRange = [prevFiveItem, ...generatePage(selected - 2, selected + 2), nextFiveItem];
        } else {
          const minRight = selected === last - 3 ? last - 5 : last - 4;
          listOfRange = [prevFiveItem, ...generatePage(minRight, last - 1)];
        }
        return [...firstPageItem, ...listOfRange, ...lastPageItem];
      };
      return concatWithPrevNext(generateRangeItem(pageIndex, lastIndex));
    }
  }
  ngOnChanges(changes) {
    const {
      pageIndex,
      pageSize,
      total
    } = changes;
    if (pageIndex || pageSize || total) {
      this.ranges = [(this.pageIndex - 1) * this.pageSize + 1, Math.min(this.pageIndex * this.pageSize, this.total)];
      this.buildIndexes();
    }
  }
  static {
    this.ɵfac = function NzPaginationDefaultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzPaginationDefaultComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzPaginationDefaultComponent,
      selectors: [["nz-pagination-default"]],
      viewQuery: function NzPaginationDefaultComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        }
      },
      inputs: {
        nzSize: "nzSize",
        itemRender: "itemRender",
        showTotal: "showTotal",
        disabled: "disabled",
        locale: "locale",
        showSizeChanger: "showSizeChanger",
        showQuickJumper: "showQuickJumper",
        total: "total",
        pageIndex: "pageIndex",
        pageSize: "pageSize",
        pageSizeOptions: "pageSizeOptions"
      },
      outputs: {
        pageIndexChange: "pageIndexChange",
        pageSizeChange: "pageSizeChange"
      },
      features: [ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 0,
      consts: [["containerTemplate", ""], [1, "ant-pagination-total-text"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "direction"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-pagination-item", "", 3, "gotoIndex", "diffIndex", "locale", "type", "index", "disabled", "itemRender", "active", "direction"], ["nz-pagination-options", "", 3, "pageIndexChange", "pageSizeChange", "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions"]],
      template: function NzPaginationDefaultComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzPaginationDefaultComponent_ng_template_0_Template, 5, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
      },
      dependencies: [NgTemplateOutlet, NzPaginationItemComponent, NzPaginationOptionsComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationDefaultComponent, [{
    type: Component,
    args: [{
      selector: "nz-pagination-default",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #containerTemplate>
      <ul>
        @if (showTotal) {
          <li class="ant-pagination-total-text">
            <ng-template
              [ngTemplateOutlet]="showTotal"
              [ngTemplateOutletContext]="{ $implicit: total, range: ranges }"
            />
          </li>
        }

        @for (page of listOfPageItem; track trackByPageItem($index, page)) {
          <li
            nz-pagination-item
            [locale]="locale"
            [type]="page.type"
            [index]="page.index"
            [disabled]="!!page.disabled"
            [itemRender]="itemRender"
            [active]="pageIndex === page.index"
            (gotoIndex)="jumpPage($event)"
            (diffIndex)="jumpDiff($event)"
            [direction]="dir"
          ></li>
        }

        @if (showQuickJumper || showSizeChanger) {
          <li
            nz-pagination-options
            [total]="total"
            [locale]="locale"
            [disabled]="disabled"
            [nzSize]="nzSize"
            [showSizeChanger]="showSizeChanger"
            [showQuickJumper]="showQuickJumper"
            [pageIndex]="pageIndex"
            [pageSize]="pageSize"
            [pageSizeOptions]="pageSizeOptions"
            (pageIndexChange)="onPageIndexChange($event)"
            (pageSizeChange)="onPageSizeChange($event)"
          ></li>
        }
      </ul>
    </ng-template>
  `,
      imports: [NgTemplateOutlet, NzPaginationItemComponent, NzPaginationOptionsComponent]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: Directionality
  }], {
    template: [{
      type: ViewChild,
      args: ["containerTemplate", {
        static: true
      }]
    }],
    nzSize: [{
      type: Input
    }],
    itemRender: [{
      type: Input
    }],
    showTotal: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    showSizeChanger: [{
      type: Input
    }],
    showQuickJumper: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    pageIndex: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageSizeOptions: [{
      type: Input
    }],
    pageIndexChange: [{
      type: Output
    }],
    pageSizeChange: [{
      type: Output
    }]
  });
})();
var NzPaginationSimpleComponent = class _NzPaginationSimpleComponent {
  constructor(cdr, renderer, elementRef, directionality) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.itemRender = null;
    this.disabled = false;
    this.total = 0;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.pageIndexChange = new EventEmitter();
    this.lastIndex = 0;
    this.isFirstIndex = false;
    this.isLastIndex = false;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.updateRtlStyle();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.updateRtlStyle();
  }
  updateRtlStyle() {
    if (this.dir === "rtl") {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-pagination-rtl");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-pagination-rtl");
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  jumpToPageViaInput($event) {
    const target = $event.target;
    const index = toNumber(target.value, this.pageIndex);
    this.onPageIndexChange(index);
    target.value = `${this.pageIndex}`;
  }
  prePage() {
    this.onPageIndexChange(this.pageIndex - 1);
  }
  nextPage() {
    this.onPageIndexChange(this.pageIndex + 1);
  }
  onPageIndexChange(index) {
    this.pageIndexChange.next(index);
  }
  updateBindingValue() {
    this.lastIndex = Math.ceil(this.total / this.pageSize);
    this.isFirstIndex = this.pageIndex === 1;
    this.isLastIndex = this.pageIndex === this.lastIndex;
  }
  ngOnChanges(changes) {
    const {
      pageIndex,
      total,
      pageSize
    } = changes;
    if (pageIndex || total || pageSize) {
      this.updateBindingValue();
    }
  }
  static {
    this.ɵfac = function NzPaginationSimpleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzPaginationSimpleComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzPaginationSimpleComponent,
      selectors: [["nz-pagination-simple"]],
      viewQuery: function NzPaginationSimpleComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        }
      },
      inputs: {
        itemRender: "itemRender",
        disabled: "disabled",
        locale: "locale",
        total: "total",
        pageIndex: "pageIndex",
        pageSize: "pageSize"
      },
      outputs: {
        pageIndexChange: "pageIndexChange"
      },
      features: [ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 0,
      consts: [["containerTemplate", ""], ["nz-pagination-item", "", "type", "prev", 3, "click", "locale", "disabled", "direction", "itemRender"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "keydown.enter", "disabled", "value"], [1, "ant-pagination-slash"], ["nz-pagination-item", "", "type", "next", 3, "click", "locale", "disabled", "direction", "itemRender"]],
      template: function NzPaginationSimpleComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzPaginationSimpleComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
      },
      dependencies: [NzPaginationItemComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationSimpleComponent, [{
    type: Component,
    args: [{
      selector: "nz-pagination-simple",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #containerTemplate>
      <ul>
        <li
          nz-pagination-item
          [locale]="locale"
          [attr.title]="locale.prev_page"
          [disabled]="isFirstIndex"
          [direction]="dir"
          (click)="prePage()"
          type="prev"
          [itemRender]="itemRender"
        ></li>
        <li [attr.title]="pageIndex + '/' + lastIndex" class="ant-pagination-simple-pager">
          <input [disabled]="disabled" [value]="pageIndex" (keydown.enter)="jumpToPageViaInput($event)" size="3" />
          <span class="ant-pagination-slash">/</span>
          {{ lastIndex }}
        </li>
        <li
          nz-pagination-item
          [locale]="locale"
          [attr.title]="locale?.next_page"
          [disabled]="isLastIndex"
          [direction]="dir"
          (click)="nextPage()"
          type="next"
          [itemRender]="itemRender"
        ></li>
      </ul>
    </ng-template>
  `,
      imports: [NzPaginationItemComponent]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: Directionality
  }], {
    template: [{
      type: ViewChild,
      args: ["containerTemplate", {
        static: true
      }]
    }],
    itemRender: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    pageIndex: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageIndexChange: [{
      type: Output
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "pagination";
var NzPaginationComponent = (() => {
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  let _nzPageSizeOptions_decorators;
  let _nzPageSizeOptions_initializers = [];
  let _nzPageSizeOptions_extraInitializers = [];
  let _nzShowSizeChanger_decorators;
  let _nzShowSizeChanger_initializers = [];
  let _nzShowSizeChanger_extraInitializers = [];
  let _nzShowQuickJumper_decorators;
  let _nzShowQuickJumper_initializers = [];
  let _nzShowQuickJumper_extraInitializers = [];
  let _nzSimple_decorators;
  let _nzSimple_initializers = [];
  let _nzSimple_extraInitializers = [];
  return class NzPaginationComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzSize_decorators = [WithConfig()];
      _nzPageSizeOptions_decorators = [WithConfig()];
      _nzShowSizeChanger_decorators = [WithConfig()];
      _nzShowQuickJumper_decorators = [WithConfig()];
      _nzSimple_decorators = [WithConfig()];
      __esDecorate(null, null, _nzSize_decorators, {
        kind: "field",
        name: "nzSize",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSize" in obj,
          get: (obj) => obj.nzSize,
          set: (obj, value) => {
            obj.nzSize = value;
          }
        },
        metadata: _metadata
      }, _nzSize_initializers, _nzSize_extraInitializers);
      __esDecorate(null, null, _nzPageSizeOptions_decorators, {
        kind: "field",
        name: "nzPageSizeOptions",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzPageSizeOptions" in obj,
          get: (obj) => obj.nzPageSizeOptions,
          set: (obj, value) => {
            obj.nzPageSizeOptions = value;
          }
        },
        metadata: _metadata
      }, _nzPageSizeOptions_initializers, _nzPageSizeOptions_extraInitializers);
      __esDecorate(null, null, _nzShowSizeChanger_decorators, {
        kind: "field",
        name: "nzShowSizeChanger",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowSizeChanger" in obj,
          get: (obj) => obj.nzShowSizeChanger,
          set: (obj, value) => {
            obj.nzShowSizeChanger = value;
          }
        },
        metadata: _metadata
      }, _nzShowSizeChanger_initializers, _nzShowSizeChanger_extraInitializers);
      __esDecorate(null, null, _nzShowQuickJumper_decorators, {
        kind: "field",
        name: "nzShowQuickJumper",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowQuickJumper" in obj,
          get: (obj) => obj.nzShowQuickJumper,
          set: (obj, value) => {
            obj.nzShowQuickJumper = value;
          }
        },
        metadata: _metadata
      }, _nzShowQuickJumper_initializers, _nzShowQuickJumper_extraInitializers);
      __esDecorate(null, null, _nzSimple_decorators, {
        kind: "field",
        name: "nzSimple",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSimple" in obj,
          get: (obj) => obj.nzSimple,
          set: (obj, value) => {
            obj.nzSimple = value;
          }
        },
        metadata: _metadata
      }, _nzSimple_initializers, _nzSimple_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    validatePageIndex(value, lastIndex) {
      if (value > lastIndex) {
        return lastIndex;
      } else if (value < 1) {
        return 1;
      } else {
        return value;
      }
    }
    onPageIndexChange(index) {
      const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
      const validIndex = this.validatePageIndex(index, lastIndex);
      if (validIndex !== this.nzPageIndex && !this.nzDisabled) {
        this.nzPageIndex = validIndex;
        this.nzPageIndexChange.emit(this.nzPageIndex);
      }
    }
    onPageSizeChange(size) {
      this.nzPageSize = size;
      this.nzPageSizeChange.emit(size);
      const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
      if (this.nzPageIndex > lastIndex) {
        this.onPageIndexChange(lastIndex);
      }
    }
    onTotalChange(total) {
      const lastIndex = this.getLastIndex(total, this.nzPageSize);
      if (this.nzPageIndex > lastIndex) {
        Promise.resolve().then(() => {
          this.onPageIndexChange(lastIndex);
          this.cdr.markForCheck();
        });
      }
    }
    getLastIndex(total, pageSize) {
      return Math.ceil(total / pageSize);
    }
    constructor(i18n, cdr, breakpointService, nzConfigService, directionality) {
      this.i18n = i18n;
      this.cdr = cdr;
      this.breakpointService = breakpointService;
      this.nzConfigService = nzConfigService;
      this.directionality = directionality;
      this._nzModuleName = NZ_CONFIG_MODULE_NAME;
      this.nzPageSizeChange = new EventEmitter();
      this.nzPageIndexChange = new EventEmitter();
      this.nzShowTotal = null;
      this.nzItemRender = null;
      this.nzSize = __runInitializers(this, _nzSize_initializers, "default");
      this.nzPageSizeOptions = (__runInitializers(this, _nzSize_extraInitializers), __runInitializers(this, _nzPageSizeOptions_initializers, [10, 20, 30, 40]));
      this.nzShowSizeChanger = (__runInitializers(this, _nzPageSizeOptions_extraInitializers), __runInitializers(this, _nzShowSizeChanger_initializers, false));
      this.nzShowQuickJumper = (__runInitializers(this, _nzShowSizeChanger_extraInitializers), __runInitializers(this, _nzShowQuickJumper_initializers, false));
      this.nzSimple = (__runInitializers(this, _nzShowQuickJumper_extraInitializers), __runInitializers(this, _nzSimple_initializers, false));
      this.nzDisabled = (__runInitializers(this, _nzSimple_extraInitializers), false);
      this.nzResponsive = false;
      this.nzHideOnSinglePage = false;
      this.nzTotal = 0;
      this.nzPageIndex = 1;
      this.nzPageSize = 10;
      this.showPagination = true;
      this.size = "default";
      this.dir = "ltr";
      this.destroy$ = new Subject();
      this.total$ = new ReplaySubject(1);
    }
    ngOnInit() {
      this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.locale = this.i18n.getLocaleData("Pagination");
        this.cdr.markForCheck();
      });
      this.total$.pipe(takeUntil(this.destroy$)).subscribe((total) => {
        this.onTotalChange(total);
      });
      this.breakpointService.subscribe(gridResponsiveMap).pipe(takeUntil(this.destroy$)).subscribe((bp) => {
        if (this.nzResponsive) {
          this.size = bp === NzBreakpointEnum.xs ? "small" : "default";
          this.cdr.markForCheck();
        }
      });
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    ngOnChanges(changes) {
      const {
        nzHideOnSinglePage,
        nzTotal,
        nzPageSize,
        nzSize
      } = changes;
      if (nzTotal) {
        this.total$.next(this.nzTotal);
      }
      if (nzHideOnSinglePage || nzTotal || nzPageSize) {
        this.showPagination = this.nzHideOnSinglePage && this.nzTotal > this.nzPageSize || this.nzTotal > 0 && !this.nzHideOnSinglePage;
      }
      if (nzSize) {
        this.size = nzSize.currentValue;
      }
    }
    static {
      this.ɵfac = function NzPaginationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NzPaginationComponent2)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzBreakpointService), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Directionality));
      };
    }
    static {
      this.ɵcmp = ɵɵdefineComponent({
        type: NzPaginationComponent2,
        selectors: [["nz-pagination"]],
        hostAttrs: [1, "ant-pagination"],
        hostVars: 8,
        hostBindings: function NzPaginationComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            ɵɵclassProp("ant-pagination-simple", ctx.nzSimple)("ant-pagination-disabled", ctx.nzDisabled)("ant-pagination-mini", !ctx.nzSimple && ctx.size === "small")("ant-pagination-rtl", ctx.dir === "rtl");
          }
        },
        inputs: {
          nzShowTotal: "nzShowTotal",
          nzItemRender: "nzItemRender",
          nzSize: "nzSize",
          nzPageSizeOptions: "nzPageSizeOptions",
          nzShowSizeChanger: [2, "nzShowSizeChanger", "nzShowSizeChanger", booleanAttribute],
          nzShowQuickJumper: [2, "nzShowQuickJumper", "nzShowQuickJumper", booleanAttribute],
          nzSimple: [2, "nzSimple", "nzSimple", booleanAttribute],
          nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
          nzResponsive: [2, "nzResponsive", "nzResponsive", booleanAttribute],
          nzHideOnSinglePage: [2, "nzHideOnSinglePage", "nzHideOnSinglePage", booleanAttribute],
          nzTotal: [2, "nzTotal", "nzTotal", numberAttribute],
          nzPageIndex: [2, "nzPageIndex", "nzPageIndex", numberAttribute],
          nzPageSize: [2, "nzPageSize", "nzPageSize", numberAttribute]
        },
        outputs: {
          nzPageSizeChange: "nzPageSizeChange",
          nzPageIndexChange: "nzPageIndexChange"
        },
        exportAs: ["nzPagination"],
        features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
        decls: 5,
        vars: 18,
        consts: [["simplePagination", ""], ["defaultPagination", ""], [3, "pageIndexChange", "disabled", "itemRender", "locale", "pageSize", "total", "pageIndex"], [3, "pageIndexChange", "pageSizeChange", "nzSize", "itemRender", "showTotal", "disabled", "locale", "showSizeChanger", "showQuickJumper", "total", "pageIndex", "pageSize", "pageSizeOptions"], [3, "ngTemplateOutlet"]],
        template: function NzPaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = ɵɵgetCurrentView();
            ɵɵtemplate(0, NzPaginationComponent_Conditional_0_Template, 2, 1);
            ɵɵelementStart(1, "nz-pagination-simple", 2, 0);
            ɵɵlistener("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_simple_pageIndexChange_1_listener($event) {
              ɵɵrestoreView(_r1);
              return ɵɵresetView(ctx.onPageIndexChange($event));
            });
            ɵɵelementEnd();
            ɵɵelementStart(3, "nz-pagination-default", 3, 1);
            ɵɵlistener("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_default_pageIndexChange_3_listener($event) {
              ɵɵrestoreView(_r1);
              return ɵɵresetView(ctx.onPageIndexChange($event));
            })("pageSizeChange", function NzPaginationComponent_Template_nz_pagination_default_pageSizeChange_3_listener($event) {
              ɵɵrestoreView(_r1);
              return ɵɵresetView(ctx.onPageSizeChange($event));
            });
            ɵɵelementEnd();
          }
          if (rf & 2) {
            ɵɵconditional(ctx.showPagination ? 0 : -1);
            ɵɵadvance();
            ɵɵproperty("disabled", ctx.nzDisabled)("itemRender", ctx.nzItemRender)("locale", ctx.locale)("pageSize", ctx.nzPageSize)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex);
            ɵɵadvance(2);
            ɵɵproperty("nzSize", ctx.size)("itemRender", ctx.nzItemRender)("showTotal", ctx.nzShowTotal)("disabled", ctx.nzDisabled)("locale", ctx.locale)("showSizeChanger", ctx.nzShowSizeChanger)("showQuickJumper", ctx.nzShowQuickJumper)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex)("pageSize", ctx.nzPageSize)("pageSizeOptions", ctx.nzPageSizeOptions);
          }
        },
        dependencies: [NgTemplateOutlet, NzPaginationSimpleComponent, NzPaginationDefaultComponent],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationComponent, [{
    type: Component,
    args: [{
      selector: "nz-pagination",
      exportAs: "nzPagination",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (showPagination) {
      @if (nzSimple) {
        <ng-template [ngTemplateOutlet]="simplePagination.template" />
      } @else {
        <ng-template [ngTemplateOutlet]="defaultPagination.template" />
      }
    }

    <nz-pagination-simple
      #simplePagination
      [disabled]="nzDisabled"
      [itemRender]="nzItemRender"
      [locale]="locale"
      [pageSize]="nzPageSize"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      (pageIndexChange)="onPageIndexChange($event)"
    ></nz-pagination-simple>
    <nz-pagination-default
      #defaultPagination
      [nzSize]="size"
      [itemRender]="nzItemRender"
      [showTotal]="nzShowTotal"
      [disabled]="nzDisabled"
      [locale]="locale"
      [showSizeChanger]="nzShowSizeChanger"
      [showQuickJumper]="nzShowQuickJumper"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      [pageSize]="nzPageSize"
      [pageSizeOptions]="nzPageSizeOptions"
      (pageIndexChange)="onPageIndexChange($event)"
      (pageSizeChange)="onPageSizeChange($event)"
    ></nz-pagination-default>
  `,
      host: {
        class: "ant-pagination",
        "[class.ant-pagination-simple]": "nzSimple",
        "[class.ant-pagination-disabled]": "nzDisabled",
        "[class.ant-pagination-mini]": `!nzSimple && size === 'small'`,
        "[class.ant-pagination-rtl]": `dir === 'rtl'`
      },
      imports: [NgTemplateOutlet, NzPaginationSimpleComponent, NzPaginationDefaultComponent]
    }]
  }], () => [{
    type: NzI18nService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzBreakpointService
  }, {
    type: NzConfigService
  }, {
    type: Directionality
  }], {
    nzPageSizeChange: [{
      type: Output
    }],
    nzPageIndexChange: [{
      type: Output
    }],
    nzShowTotal: [{
      type: Input
    }],
    nzItemRender: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzPageSizeOptions: [{
      type: Input
    }],
    nzShowSizeChanger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowQuickJumper: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSimple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzResponsive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHideOnSinglePage: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTotal: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzPageIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzPageSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var NzPaginationModule = class _NzPaginationModule {
  static {
    this.ɵfac = function NzPaginationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzPaginationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzPaginationModule,
      imports: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent],
      exports: [NzPaginationComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationModule, [{
    type: NgModule,
    args: [{
      imports: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent],
      exports: [NzPaginationComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-spin.mjs
var _c03 = ["*"];
function NzSpinComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵelement(1, "i", 3)(2, "i", 3)(3, "i", 3)(4, "i", 3);
    ɵɵelementEnd();
  }
}
function NzSpinComponent_Conditional_2_ng_template_2_Template(rf, ctx) {
}
function NzSpinComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzTip);
  }
}
function NzSpinComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 4);
    ɵɵtemplate(2, NzSpinComponent_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 5)(3, NzSpinComponent_Conditional_2_Conditional_3_Template, 2, 1, "div", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const defaultTemplate_r2 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵclassProp("ant-spin-rtl", ctx_r0.dir === "rtl")("ant-spin-spinning", ctx_r0.isLoading)("ant-spin-lg", ctx_r0.nzSize === "large")("ant-spin-sm", ctx_r0.nzSize === "small")("ant-spin-show-text", ctx_r0.nzTip);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzIndicator || defaultTemplate_r2);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzTip ? 3 : -1);
  }
}
function NzSpinComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("ant-spin-blur", ctx_r0.isLoading);
  }
}
var NZ_CONFIG_MODULE_NAME2 = "spin";
var NzSpinComponent = (() => {
  let _nzIndicator_decorators;
  let _nzIndicator_initializers = [];
  let _nzIndicator_extraInitializers = [];
  return class NzSpinComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzIndicator_decorators = [WithConfig()];
      __esDecorate(null, null, _nzIndicator_decorators, {
        kind: "field",
        name: "nzIndicator",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzIndicator" in obj,
          get: (obj) => obj.nzIndicator,
          set: (obj, value) => {
            obj.nzIndicator = value;
          }
        },
        metadata: _metadata
      }, _nzIndicator_initializers, _nzIndicator_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    constructor(nzConfigService, cdr, directionality) {
      this.nzConfigService = nzConfigService;
      this.cdr = cdr;
      this.directionality = directionality;
      this._nzModuleName = NZ_CONFIG_MODULE_NAME2;
      this.nzIndicator = __runInitializers(this, _nzIndicator_initializers, null);
      this.nzSize = (__runInitializers(this, _nzIndicator_extraInitializers), "default");
      this.nzTip = null;
      this.nzDelay = 0;
      this.nzSimple = false;
      this.nzSpinning = true;
      this.destroy$ = new Subject();
      this.spinning$ = new BehaviorSubject(this.nzSpinning);
      this.delay$ = new ReplaySubject(1);
      this.isLoading = false;
      this.dir = "ltr";
    }
    ngOnInit() {
      const loading$ = this.delay$.pipe(startWith(this.nzDelay), distinctUntilChanged(), switchMap((delay2) => {
        if (delay2 === 0) {
          return this.spinning$;
        }
        return this.spinning$.pipe(debounce((spinning) => timer(spinning ? delay2 : 0)));
      }), takeUntil(this.destroy$));
      loading$.subscribe((loading) => {
        this.isLoading = loading;
        this.cdr.markForCheck();
      });
      this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME2).pipe(takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
      const {
        nzSpinning,
        nzDelay
      } = changes;
      if (nzSpinning) {
        this.spinning$.next(this.nzSpinning);
      }
      if (nzDelay) {
        this.delay$.next(this.nzDelay);
      }
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    static {
      this.ɵfac = function NzSpinComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NzSpinComponent2)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality));
      };
    }
    static {
      this.ɵcmp = ɵɵdefineComponent({
        type: NzSpinComponent2,
        selectors: [["nz-spin"]],
        hostVars: 2,
        hostBindings: function NzSpinComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            ɵɵclassProp("ant-spin-nested-loading", !ctx.nzSimple);
          }
        },
        inputs: {
          nzIndicator: "nzIndicator",
          nzSize: "nzSize",
          nzTip: "nzTip",
          nzDelay: [2, "nzDelay", "nzDelay", numberAttribute],
          nzSimple: [2, "nzSimple", "nzSimple", booleanAttribute],
          nzSpinning: [2, "nzSpinning", "nzSpinning", booleanAttribute]
        },
        exportAs: ["nzSpin"],
        features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
        ngContentSelectors: _c03,
        decls: 4,
        vars: 2,
        consts: [["defaultTemplate", ""], [1, "ant-spin-container", 3, "ant-spin-blur"], [1, "ant-spin-dot", "ant-spin-dot-spin"], [1, "ant-spin-dot-item"], [1, "ant-spin"], [3, "ngTemplateOutlet"], [1, "ant-spin-text"], [1, "ant-spin-container"]],
        template: function NzSpinComponent_Template(rf, ctx) {
          if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzSpinComponent_ng_template_0_Template, 5, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzSpinComponent_Conditional_2_Template, 4, 12, "div")(3, NzSpinComponent_Conditional_3_Template, 2, 2, "div", 1);
          }
          if (rf & 2) {
            ɵɵadvance(2);
            ɵɵconditional(ctx.isLoading ? 2 : -1);
            ɵɵadvance();
            ɵɵconditional(!ctx.nzSimple ? 3 : -1);
          }
        },
        dependencies: [NgTemplateOutlet],
        encapsulation: 2
      });
    }
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpinComponent, [{
    type: Component,
    args: [{
      selector: "nz-spin",
      exportAs: "nzSpin",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      template: `
    <ng-template #defaultTemplate>
      <span class="ant-spin-dot ant-spin-dot-spin">
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
      </span>
    </ng-template>
    @if (isLoading) {
      <div>
        <div
          class="ant-spin"
          [class.ant-spin-rtl]="dir === 'rtl'"
          [class.ant-spin-spinning]="isLoading"
          [class.ant-spin-lg]="nzSize === 'large'"
          [class.ant-spin-sm]="nzSize === 'small'"
          [class.ant-spin-show-text]="nzTip"
        >
          <ng-template [ngTemplateOutlet]="nzIndicator || defaultTemplate"></ng-template>
          @if (nzTip) {
            <div class="ant-spin-text">{{ nzTip }}</div>
          }
        </div>
      </div>
    }
    @if (!nzSimple) {
      <div class="ant-spin-container" [class.ant-spin-blur]="isLoading">
        <ng-content></ng-content>
      </div>
    }
  `,
      host: {
        "[class.ant-spin-nested-loading]": "!nzSimple"
      },
      imports: [NgTemplateOutlet]
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    nzIndicator: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzTip: [{
      type: Input
    }],
    nzDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzSimple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSpinning: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzSpinModule = class _NzSpinModule {
  static {
    this.ɵfac = function NzSpinModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSpinModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzSpinModule,
      imports: [NzSpinComponent],
      exports: [NzSpinComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpinModule, [{
    type: NgModule,
    args: [{
      imports: [NzSpinComponent],
      exports: [NzSpinComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-table.mjs
var _c04 = ["*"];
var _forTrack02 = ($index, $item) => $item.value;
function NzTableFilterComponent_ng_template_1_Template(rf, ctx) {
}
function NzTableFilterComponent_Conditional_2_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 14);
    ɵɵlistener("ngModelChange", function NzTableFilterComponent_Conditional_2_For_7_Conditional_1_Template_label_ngModelChange_0_listener() {
      ɵɵrestoreView(_r5);
      const f_r4 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.check(f_r4));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const f_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngModel", f_r4.checked);
  }
}
function NzTableFilterComponent_Conditional_2_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 15);
    ɵɵlistener("ngModelChange", function NzTableFilterComponent_Conditional_2_For_7_Conditional_2_Template_label_ngModelChange_0_listener() {
      ɵɵrestoreView(_r6);
      const f_r4 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.check(f_r4));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const f_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngModel", f_r4.checked);
  }
}
function NzTableFilterComponent_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 11);
    ɵɵlistener("click", function NzTableFilterComponent_Conditional_2_For_7_Template_li_click_0_listener() {
      const f_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.check(f_r4));
    });
    ɵɵtemplate(1, NzTableFilterComponent_Conditional_2_For_7_Conditional_1_Template, 1, 1, "label", 12)(2, NzTableFilterComponent_Conditional_2_For_7_Conditional_2_Template, 1, 1, "label", 13);
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("nzSelected", f_r4.checked);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.filterMultiple ? 1 : 2);
    ɵɵadvance(3);
    ɵɵtextInterpolate(f_r4.text);
  }
}
function NzTableFilterComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-filter-trigger", 3);
    ɵɵlistener("nzVisibleChange", function NzTableFilterComponent_Conditional_2_Template_nz_filter_trigger_nzVisibleChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onVisibleChange($event));
    });
    ɵɵelement(1, "nz-icon", 4);
    ɵɵelementEnd();
    ɵɵelementStart(2, "nz-dropdown-menu", null, 0)(4, "div", 5)(5, "ul", 6);
    ɵɵrepeaterCreate(6, NzTableFilterComponent_Conditional_2_For_7_Template, 5, 3, "li", 7, _forTrack02);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 8)(9, "button", 9);
    ɵɵlistener("click", function NzTableFilterComponent_Conditional_2_Template_button_click_9_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.reset());
    });
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 10);
    ɵɵlistener("click", function NzTableFilterComponent_Conditional_2_Template_button_click_11_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.confirm());
    });
    ɵɵtext(12);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const filterMenu_r7 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzVisible", ctx_r1.isVisible)("nzActive", ctx_r1.isChecked)("nzDropdownMenu", filterMenu_r7);
    ɵɵadvance(6);
    ɵɵrepeater(ctx_r1.listOfParsedFilter);
    ɵɵadvance(3);
    ɵɵproperty("disabled", !ctx_r1.isChecked);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.locale.filterReset, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.locale.filterConfirm);
  }
}
function NzTableFilterComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.extraTemplate);
  }
}
function NzTableSelectionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 3);
    ɵɵlistener("ngModelChange", function NzTableSelectionComponent_Conditional_0_Template_label_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onCheckedChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-table-selection-select-all-custom", ctx_r1.showRowSelection);
    ɵɵproperty("ngModel", ctx_r1.checked)("nzDisabled", ctx_r1.disabled)("nzIndeterminate", ctx_r1.indeterminate);
    ɵɵattribute("aria-label", ctx_r1.label);
  }
}
function NzTableSelectionComponent_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8);
    ɵɵlistener("click", function NzTableSelectionComponent_Conditional_1_For_7_Template_li_click_0_listener() {
      const selection_r4 = ɵɵrestoreView(_r3).$implicit;
      return ɵɵresetView(selection_r4.onSelect());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const selection_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", selection_r4.text, " ");
  }
}
function NzTableSelectionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "span", 4);
    ɵɵelement(2, "nz-icon", 5);
    ɵɵelementEnd();
    ɵɵelementStart(3, "nz-dropdown-menu", null, 0)(5, "ul", 6);
    ɵɵrepeaterCreate(6, NzTableSelectionComponent_Conditional_1_For_7_Template, 2, 1, "li", 7, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const selectionMenu_r5 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzDropdownMenu", selectionMenu_r5);
    ɵɵadvance(5);
    ɵɵrepeater(ctx_r1.listOfSelections);
  }
}
function NzTableSortersComponent_ng_template_1_Template(rf, ctx) {
}
function NzTableSortersComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r0.sortOrder === "ascend");
  }
}
function NzTableSortersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r0.sortOrder === "descend");
  }
}
var _c13 = ["nzChecked", ""];
function NzTdAddOnComponent_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzTdAddOnComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTdAddOnComponent_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzExpandIcon);
  }
}
function NzTdAddOnComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("expandChange", function NzTdAddOnComponent_Conditional_0_Conditional_2_Template_button_expandChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onExpandChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("expand", ctx_r0.nzExpand)("spaceMode", !ctx_r0.nzShowExpand);
  }
}
function NzTdAddOnComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-row-indent", 1);
    ɵɵtemplate(1, NzTdAddOnComponent_Conditional_0_Conditional_1_Template, 1, 1, null, 2)(2, NzTdAddOnComponent_Conditional_0_Conditional_2_Template, 1, 2, "button", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("indentSize", ctx_r0.nzIndentSize);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzExpandIcon ? 1 : 2);
  }
}
function NzTdAddOnComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 5);
    ɵɵlistener("ngModelChange", function NzTdAddOnComponent_Conditional_1_Template_label_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onCheckedChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzDisabled", ctx_r0.nzDisabled)("ngModel", ctx_r0.nzChecked)("nzIndeterminate", ctx_r0.nzIndeterminate);
    ɵɵattribute("aria-label", ctx_r0.nzLabel);
  }
}
var _c23 = ["nzColumnKey", ""];
var _c32 = [[["", "nz-th-extra", ""]], [["nz-filter-trigger"]], "*"];
var _c42 = ["[nz-th-extra]", "nz-filter-trigger", "*"];
function NzThAddOnComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-table-filter", 6);
    ɵɵlistener("filterChange", function NzThAddOnComponent_Conditional_0_Template_nz_table_filter_filterChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFilterValueChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const notFilterTemplate_r3 = ɵɵreference(3);
    const extraTemplate_r4 = ɵɵreference(5);
    ɵɵproperty("contentTemplate", notFilterTemplate_r3)("extraTemplate", extraTemplate_r4)("customFilter", ctx_r1.nzCustomFilter)("filterMultiple", ctx_r1.nzFilterMultiple)("listOfFilter", ctx_r1.nzFilters);
  }
}
function NzThAddOnComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 5);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const notFilterTemplate_r3 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", notFilterTemplate_r3);
  }
}
function NzThAddOnComponent_ng_template_2_ng_template_0_Template(rf, ctx) {
}
function NzThAddOnComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzThAddOnComponent_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const sortTemplate_r5 = ɵɵreference(7);
    const contentTemplate_r6 = ɵɵreference(9);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.nzShowSort ? sortTemplate_r5 : contentTemplate_r6);
  }
}
function NzThAddOnComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
    ɵɵprojection(1, 1);
  }
}
function NzThAddOnComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-table-sorters", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const contentTemplate_r6 = ɵɵreference(9);
    ɵɵproperty("sortOrder", ctx_r1.sortOrder)("sortDirections", ctx_r1.sortDirections)("contentTemplate", contentTemplate_r6);
  }
}
function NzThAddOnComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2);
  }
}
var _c5 = ["nzSelections", ""];
var _c6 = ["nz-table-content", ""];
function NzTableContentComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "col");
  }
  if (rf & 2) {
    const width_r1 = ctx.$implicit;
    ɵɵstyleProp("width", width_r1)("min-width", width_r1);
  }
}
function NzTableContentComponent_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function NzTableContentComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 1);
    ɵɵtemplate(1, NzTableContentComponent_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.theadTemplate);
  }
}
function NzTableContentComponent_ng_template_3_Template(rf, ctx) {
}
function NzTableContentComponent_Conditional_5_ng_template_1_Template(rf, ctx) {
}
function NzTableContentComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tfoot", 3);
    ɵɵtemplate(1, NzTableContentComponent_Conditional_5_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.tfootTemplate);
  }
}
var _c7 = ["tdElement"];
var _c8 = ["nz-table-fixed-row", ""];
function NzTableFixedRowComponent_Conditional_2_ng_template_2_Template(rf, ctx) {
}
function NzTableFixedRowComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵpipe(1, "async");
    ɵɵtemplate(2, NzTableFixedRowComponent_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const contentTemplate_r2 = ɵɵreference(6);
    ɵɵstyleProp("width", ɵɵpipeBind1(1, 3, ctx_r0.hostWidth$), "px");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", contentTemplate_r2);
  }
}
function NzTableFixedRowComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function NzTableFixedRowComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTableFixedRowComponent_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const contentTemplate_r2 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", contentTemplate_r2);
  }
}
function NzTableFixedRowComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c9 = ["nz-table-measure-row", ""];
function NzTrMeasureComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td", 1, 0);
  }
}
function NzTbodyComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 2);
    ɵɵlistener("listOfAutoWidth", function NzTbodyComponent_Conditional_0_Conditional_0_Template_tr_listOfAutoWidth_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onListOfAutoWidthChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const listOfMeasureColumn_r3 = ɵɵnextContext();
    ɵɵproperty("listOfMeasureColumn", listOfMeasureColumn_r3);
  }
}
function NzTbodyComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTbodyComponent_Conditional_0_Conditional_0_Template, 1, 1, "tr", 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.isInsideTable && ctx.length ? 0 : -1);
  }
}
function NzTbodyComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 0);
    ɵɵelement(1, "nz-embed-empty", 3);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("specificContent", ɵɵpipeBind1(2, 1, ctx_r1.noResult$));
  }
}
var _c10 = ["tableHeaderElement"];
var _c11 = ["tableBodyElement"];
var _c122 = ["tableFootElement"];
var _c132 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function NzTableInnerScrollComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9, 1);
    ɵɵelement(2, "table", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r0.bodyStyleMap);
    ɵɵadvance(2);
    ɵɵproperty("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("contentTemplate", ctx_r0.contentTemplate);
  }
}
function NzTableInnerScrollComponent_Conditional_0_Conditional_4_ng_container_4_ng_template_1_Template(rf, ctx) {
}
function NzTableInnerScrollComponent_Conditional_0_Conditional_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTableInnerScrollComponent_Conditional_0_Conditional_4_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.virtualTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c132, item_r2, i_r3));
  }
}
function NzTableInnerScrollComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 11, 1)(2, "table", 12)(3, "tbody");
    ɵɵtemplate(4, NzTableInnerScrollComponent_Conditional_0_Conditional_4_ng_container_4_Template, 2, 5, "ng-container", 13);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵstyleProp("height", ctx_r0.data.length ? ctx_r0.scrollY : ctx_r0.noDataVirtualHeight);
    ɵɵproperty("itemSize", ctx_r0.virtualItemSize)("maxBufferPx", ctx_r0.virtualMaxBufferPx)("minBufferPx", ctx_r0.virtualMinBufferPx);
    ɵɵadvance(2);
    ɵɵproperty("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth);
    ɵɵadvance(2);
    ɵɵproperty("cdkVirtualForOf", ctx_r0.data)("cdkVirtualForTrackBy", ctx_r0.virtualForTrackBy);
  }
}
function NzTableInnerScrollComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15, 2);
    ɵɵelement(2, "table", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r0.headerStyleMap);
    ɵɵadvance(2);
    ɵɵproperty("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("tfootTemplate", ctx_r0.tfootTemplate);
  }
}
function NzTableInnerScrollComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4, 0);
    ɵɵelement(2, "table", 5);
    ɵɵelementEnd();
    ɵɵtemplate(3, NzTableInnerScrollComponent_Conditional_0_Conditional_3_Template, 3, 5, "div", 6)(4, NzTableInnerScrollComponent_Conditional_0_Conditional_4_Template, 5, 9, "cdk-virtual-scroll-viewport", 7)(5, NzTableInnerScrollComponent_Conditional_0_Conditional_5_Template, 3, 5, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r0.headerStyleMap);
    ɵɵadvance(2);
    ɵɵproperty("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("theadTemplate", ctx_r0.theadTemplate)("tfootTemplate", ctx_r0.tfootFixed === "top" ? ctx_r0.tfootTemplate : null);
    ɵɵadvance();
    ɵɵconditional(!ctx_r0.virtualTemplate ? 3 : 4);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.tfootFixed === "bottom" ? 5 : -1);
  }
}
function NzTableInnerScrollComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17, 1);
    ɵɵelement(2, "table", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r0.bodyStyleMap);
    ɵɵadvance(2);
    ɵɵproperty("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("theadTemplate", ctx_r0.theadTemplate)("contentTemplate", ctx_r0.contentTemplate)("tfootTemplate", ctx_r0.tfootTemplate);
  }
}
function NzTableTitleFooterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function NzTableTitleFooterComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.footer);
  }
}
function NzTableComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTableComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const paginationTemplate_r1 = ɵɵreference(10);
    ɵɵproperty("ngTemplateOutlet", paginationTemplate_r1);
  }
}
function NzTableComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-table-title-footer", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ctx_r1.nzTitle);
  }
}
function NzTableComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-table-inner-scroll", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const tableMainElement_r3 = ɵɵreference(3);
    const contentTemplate_r4 = ɵɵreference(12);
    ɵɵproperty("data", ctx_r1.data)("scrollX", ctx_r1.scrollX)("scrollY", ctx_r1.scrollY)("contentTemplate", contentTemplate_r4)("listOfColWidth", ctx_r1.listOfAutoColWidth)("theadTemplate", ctx_r1.theadTemplate)("tfootTemplate", ctx_r1.tfootTemplate)("tfootFixed", ctx_r1.tfootFixed)("verticalScrollBarWidth", ctx_r1.verticalScrollBarWidth)("virtualTemplate", ctx_r1.nzVirtualScrollDirective ? ctx_r1.nzVirtualScrollDirective.templateRef : null)("virtualItemSize", ctx_r1.nzVirtualItemSize)("virtualMaxBufferPx", ctx_r1.nzVirtualMaxBufferPx)("virtualMinBufferPx", ctx_r1.nzVirtualMinBufferPx)("tableMainElement", tableMainElement_r3)("virtualForTrackBy", ctx_r1.nzVirtualForTrackBy)("noDataVirtualHeight", ctx_r1.noDataVirtualHeight);
  }
}
function NzTableComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-table-inner-default", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const contentTemplate_r4 = ɵɵreference(12);
    ɵɵproperty("tableLayout", ctx_r1.nzTableLayout)("listOfColWidth", ctx_r1.listOfManualColWidth)("theadTemplate", ctx_r1.theadTemplate)("contentTemplate", contentTemplate_r4)("tfootTemplate", ctx_r1.tfootTemplate);
  }
}
function NzTableComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-table-title-footer", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("footer", ctx_r1.nzFooter);
  }
}
function NzTableComponent_Conditional_8_ng_template_0_Template(rf, ctx) {
}
function NzTableComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTableComponent_Conditional_8_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const paginationTemplate_r1 = ɵɵreference(10);
    ɵɵproperty("ngTemplateOutlet", paginationTemplate_r1);
  }
}
function NzTableComponent_ng_template_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-pagination", 11);
    ɵɵlistener("nzPageSizeChange", function NzTableComponent_ng_template_9_Conditional_0_Template_nz_pagination_nzPageSizeChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onPageSizeChange($event));
    })("nzPageIndexChange", function NzTableComponent_ng_template_9_Conditional_0_Template_nz_pagination_nzPageIndexChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onPageIndexChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("hidden", !ctx_r1.showPagination)("nzShowSizeChanger", ctx_r1.nzShowSizeChanger)("nzPageSizeOptions", ctx_r1.nzPageSizeOptions)("nzItemRender", ctx_r1.nzItemRender)("nzShowQuickJumper", ctx_r1.nzShowQuickJumper)("nzHideOnSinglePage", ctx_r1.nzHideOnSinglePage)("nzShowTotal", ctx_r1.nzShowTotal)("nzSize", ctx_r1.nzPaginationType === "small" ? "small" : ctx_r1.nzSize === "default" ? "default" : "small")("nzPageSize", ctx_r1.nzPageSize)("nzTotal", ctx_r1.nzTotal)("nzSimple", ctx_r1.nzSimple)("nzPageIndex", ctx_r1.nzPageIndex);
  }
}
function NzTableComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTableComponent_ng_template_9_Conditional_0_Template, 1, 12, "nz-pagination", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.nzShowPagination && ctx_r1.data.length ? 0 : -1);
  }
}
function NzTableComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c14 = ["contentTemplate"];
var _c15 = ["nzSummary", ""];
function NzTfootSummaryComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzTfootSummaryComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzTfootSummaryComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTfootSummaryComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const contentTemplate_r1 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", contentTemplate_r1);
  }
}
function NzTheadComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzTheadComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzTheadComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTheadComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const contentTemplate_r1 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", contentTemplate_r1);
  }
}
var NZ_CONFIG_MODULE_NAME$2 = "filterTrigger";
var NzFilterTriggerComponent = (() => {
  let _nzBackdrop_decorators;
  let _nzBackdrop_initializers = [];
  let _nzBackdrop_extraInitializers = [];
  return class NzFilterTriggerComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzBackdrop_decorators = [WithConfig()];
      __esDecorate(null, null, _nzBackdrop_decorators, {
        kind: "field",
        name: "nzBackdrop",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzBackdrop" in obj,
          get: (obj) => obj.nzBackdrop,
          set: (obj, value) => {
            obj.nzBackdrop = value;
          }
        },
        metadata: _metadata
      }, _nzBackdrop_initializers, _nzBackdrop_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    onVisibleChange(visible) {
      this.nzVisible = visible;
      this.nzVisibleChange.next(visible);
    }
    hide() {
      this.nzVisible = false;
      this.cdr.markForCheck();
    }
    show() {
      this.nzVisible = true;
      this.cdr.markForCheck();
    }
    constructor(nzConfigService, cdr, destroy$) {
      this.nzConfigService = nzConfigService;
      this.cdr = cdr;
      this.destroy$ = destroy$;
      this._nzModuleName = NZ_CONFIG_MODULE_NAME$2;
      this.nzActive = false;
      this.nzVisible = false;
      this.nzBackdrop = __runInitializers(this, _nzBackdrop_initializers, false);
      this.nzVisibleChange = (__runInitializers(this, _nzBackdrop_extraInitializers), new EventEmitter());
    }
    ngOnInit() {
      fromEventOutsideAngular(this.nzDropdown.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        event.stopPropagation();
      });
    }
    static {
      this.ɵfac = function NzFilterTriggerComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NzFilterTriggerComponent2)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzDestroyService));
      };
    }
    static {
      this.ɵcmp = ɵɵdefineComponent({
        type: NzFilterTriggerComponent2,
        selectors: [["nz-filter-trigger"]],
        viewQuery: function NzFilterTriggerComponent_Query(rf, ctx) {
          if (rf & 1) {
            ɵɵviewQuery(NzDropDownDirective, 7, ElementRef);
          }
          if (rf & 2) {
            let _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzDropdown = _t.first);
          }
        },
        inputs: {
          nzActive: "nzActive",
          nzDropdownMenu: "nzDropdownMenu",
          nzVisible: "nzVisible",
          nzBackdrop: [2, "nzBackdrop", "nzBackdrop", booleanAttribute]
        },
        outputs: {
          nzVisibleChange: "nzVisibleChange"
        },
        exportAs: ["nzFilterTrigger"],
        features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵInputTransformsFeature],
        ngContentSelectors: _c04,
        decls: 2,
        vars: 8,
        consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "ant-table-filter-trigger", 3, "nzVisibleChange", "nzBackdrop", "nzClickHide", "nzDropdownMenu", "nzVisible"]],
        template: function NzFilterTriggerComponent_Template(rf, ctx) {
          if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "span", 0);
            ɵɵlistener("nzVisibleChange", function NzFilterTriggerComponent_Template_span_nzVisibleChange_0_listener($event) {
              return ctx.onVisibleChange($event);
            });
            ɵɵprojection(1);
            ɵɵelementEnd();
          }
          if (rf & 2) {
            ɵɵclassProp("active", ctx.nzActive)("ant-table-filter-open", ctx.nzVisible);
            ɵɵproperty("nzBackdrop", ctx.nzBackdrop)("nzClickHide", false)("nzDropdownMenu", ctx.nzDropdownMenu)("nzVisible", ctx.nzVisible);
          }
        },
        dependencies: [NzDropDownModule, NzDropDownDirective],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFilterTriggerComponent, [{
    type: Component,
    args: [{
      selector: "nz-filter-trigger",
      exportAs: `nzFilterTrigger`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      template: `
    <span
      nz-dropdown
      class="ant-table-filter-trigger"
      nzTrigger="click"
      nzPlacement="bottomRight"
      [nzBackdrop]="nzBackdrop"
      [nzClickHide]="false"
      [nzDropdownMenu]="nzDropdownMenu"
      [class.active]="nzActive"
      [class.ant-table-filter-open]="nzVisible"
      [nzVisible]="nzVisible"
      (nzVisibleChange)="onVisibleChange($event)"
    >
      <ng-content></ng-content>
    </span>
  `,
      providers: [NzDestroyService],
      imports: [NzDropDownModule]
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzDestroyService
  }], {
    nzActive: [{
      type: Input
    }],
    nzDropdownMenu: [{
      type: Input
    }],
    nzVisible: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzVisibleChange: [{
      type: Output
    }],
    nzDropdown: [{
      type: ViewChild,
      args: [NzDropDownDirective, {
        static: true,
        read: ElementRef
      }]
    }]
  });
})();
var NzTableFilterComponent = class _NzTableFilterComponent {
  check(filter2) {
    if (this.filterMultiple) {
      this.listOfParsedFilter = this.listOfParsedFilter.map((item) => {
        if (item === filter2) {
          return __spreadProps(__spreadValues({}, item), {
            checked: !filter2.checked
          });
        } else {
          return item;
        }
      });
      filter2.checked = !filter2.checked;
    } else {
      this.listOfParsedFilter = this.listOfParsedFilter.map((item) => __spreadProps(__spreadValues({}, item), {
        checked: item === filter2
      }));
    }
    this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
  }
  confirm() {
    this.isVisible = false;
    this.emitFilterData();
  }
  reset() {
    this.isVisible = false;
    this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter, true);
    this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
    this.emitFilterData();
  }
  onVisibleChange(value) {
    this.isVisible = value;
    if (!value) {
      this.emitFilterData();
    } else {
      this.listOfChecked = this.listOfParsedFilter.filter((item) => item.checked).map((item) => item.value);
    }
  }
  emitFilterData() {
    const listOfChecked = this.listOfParsedFilter.filter((item) => item.checked).map((item) => item.value);
    if (!arraysEqual(this.listOfChecked, listOfChecked)) {
      if (this.filterMultiple) {
        this.filterChange.emit(listOfChecked);
      } else {
        this.filterChange.emit(listOfChecked.length > 0 ? listOfChecked[0] : null);
      }
    }
  }
  parseListOfFilter(listOfFilter, reset) {
    return listOfFilter.map((item) => {
      const checked = reset ? false : !!item.byDefault;
      return {
        text: item.text,
        value: item.value,
        checked
      };
    });
  }
  getCheckedStatus(listOfParsedFilter) {
    return listOfParsedFilter.some((item) => item.checked);
  }
  constructor(cdr, i18n) {
    this.cdr = cdr;
    this.i18n = i18n;
    this.contentTemplate = null;
    this.customFilter = false;
    this.extraTemplate = null;
    this.filterMultiple = true;
    this.listOfFilter = [];
    this.filterChange = new EventEmitter();
    this.destroy$ = new Subject();
    this.isChecked = false;
    this.isVisible = false;
    this.listOfParsedFilter = [];
    this.listOfChecked = [];
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Table");
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      listOfFilter
    } = changes;
    if (listOfFilter && this.listOfFilter && this.listOfFilter.length) {
      this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter);
      this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzTableFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTableFilterComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTableFilterComponent,
      selectors: [["nz-table-filter"]],
      hostAttrs: [1, "ant-table-filter-column"],
      inputs: {
        contentTemplate: "contentTemplate",
        customFilter: "customFilter",
        extraTemplate: "extraTemplate",
        filterMultiple: "filterMultiple",
        listOfFilter: "listOfFilter"
      },
      outputs: {
        filterChange: "filterChange"
      },
      features: [ɵɵNgOnChangesFeature],
      decls: 4,
      vars: 2,
      consts: [["filterMenu", "nzDropdownMenu"], [1, "ant-table-column-title"], [3, "ngTemplateOutlet"], [3, "nzVisibleChange", "nzVisible", "nzActive", "nzDropdownMenu"], ["nzType", "filter", "nzTheme", "fill"], [1, "ant-table-filter-dropdown"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzSelected"], [1, "ant-table-filter-dropdown-btns"], ["nz-button", "", "nzType", "link", "nzSize", "small", 3, "click", "disabled"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], ["nz-menu-item", "", 3, "click", "nzSelected"], ["nz-radio", "", 3, "ngModel"], ["nz-checkbox", "", 3, "ngModel"], ["nz-radio", "", 3, "ngModelChange", "ngModel"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"]],
      template: function NzTableFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "span", 1);
          ɵɵtemplate(1, NzTableFilterComponent_ng_template_1_Template, 0, 0, "ng-template", 2);
          ɵɵelementEnd();
          ɵɵtemplate(2, NzTableFilterComponent_Conditional_2_Template, 13, 6)(3, NzTableFilterComponent_Conditional_3_Template, 1, 1, "ng-container", 2);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
          ɵɵadvance();
          ɵɵconditional(!ctx.customFilter ? 2 : 3);
        }
      },
      dependencies: [NgTemplateOutlet, NzFilterTriggerComponent, NzIconModule, NzIconDirective, NzDropDownModule, NzMenuDirective, NzMenuItemComponent, NzDropdownMenuComponent, NzRadioComponent, NzCheckboxModule, NzCheckboxComponent, FormsModule, NgControlStatus, NgModel, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableFilterComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-filter",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    <span class="ant-table-column-title">
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    </span>
    @if (!customFilter) {
      <nz-filter-trigger
        [nzVisible]="isVisible"
        [nzActive]="isChecked"
        [nzDropdownMenu]="filterMenu"
        (nzVisibleChange)="onVisibleChange($event)"
      >
        <nz-icon nzType="filter" nzTheme="fill" />
      </nz-filter-trigger>
      <nz-dropdown-menu #filterMenu="nzDropdownMenu">
        <div class="ant-table-filter-dropdown">
          <ul nz-menu>
            @for (f of listOfParsedFilter; track f.value) {
              <li nz-menu-item [nzSelected]="f.checked" (click)="check(f)">
                @if (!filterMultiple) {
                  <label nz-radio [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
                } @else {
                  <label nz-checkbox [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
                }
                <span>{{ f.text }}</span>
              </li>
            }
          </ul>
          <div class="ant-table-filter-dropdown-btns">
            <button nz-button nzType="link" nzSize="small" (click)="reset()" [disabled]="!isChecked">
              {{ locale.filterReset }}
            </button>
            <button nz-button nzType="primary" nzSize="small" (click)="confirm()">{{ locale.filterConfirm }}</button>
          </div>
        </div>
      </nz-dropdown-menu>
    } @else {
      <ng-container [ngTemplateOutlet]="extraTemplate"></ng-container>
    }
  `,
      host: {
        class: "ant-table-filter-column"
      },
      imports: [NgTemplateOutlet, NzFilterTriggerComponent, NzIconModule, NzDropDownModule, NzRadioComponent, NzCheckboxModule, FormsModule, NzButtonModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }], {
    contentTemplate: [{
      type: Input
    }],
    customFilter: [{
      type: Input
    }],
    extraTemplate: [{
      type: Input
    }],
    filterMultiple: [{
      type: Input
    }],
    listOfFilter: [{
      type: Input
    }],
    filterChange: [{
      type: Output
    }]
  });
})();
var NzRowExpandButtonDirective = class _NzRowExpandButtonDirective {
  constructor() {
    this.expand = false;
    this.spaceMode = false;
    this.expandChange = new EventEmitter();
  }
  onHostClick() {
    if (!this.spaceMode) {
      this.expand = !this.expand;
      this.expandChange.next(this.expand);
    }
  }
  static {
    this.ɵfac = function NzRowExpandButtonDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzRowExpandButtonDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzRowExpandButtonDirective,
      selectors: [["button", "nz-row-expand-button", ""]],
      hostAttrs: [1, "ant-table-row-expand-icon"],
      hostVars: 7,
      hostBindings: function NzRowExpandButtonDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NzRowExpandButtonDirective_click_HostBindingHandler() {
            return ctx.onHostClick();
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("type", "button");
          ɵɵclassProp("ant-table-row-expand-icon-expanded", !ctx.spaceMode && ctx.expand === true)("ant-table-row-expand-icon-collapsed", !ctx.spaceMode && ctx.expand === false)("ant-table-row-expand-icon-spaced", ctx.spaceMode);
        }
      },
      inputs: {
        expand: "expand",
        spaceMode: "spaceMode"
      },
      outputs: {
        expandChange: "expandChange"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRowExpandButtonDirective, [{
    type: Directive,
    args: [{
      selector: "button[nz-row-expand-button]",
      host: {
        class: "ant-table-row-expand-icon",
        "[type]": `'button'`,
        "[class.ant-table-row-expand-icon-expanded]": `!spaceMode && expand === true`,
        "[class.ant-table-row-expand-icon-collapsed]": `!spaceMode && expand === false`,
        "[class.ant-table-row-expand-icon-spaced]": "spaceMode",
        "(click)": "onHostClick()"
      }
    }]
  }], null, {
    expand: [{
      type: Input
    }],
    spaceMode: [{
      type: Input
    }],
    expandChange: [{
      type: Output
    }]
  });
})();
var NzRowIndentDirective = class _NzRowIndentDirective {
  constructor() {
    this.indentSize = 0;
  }
  static {
    this.ɵfac = function NzRowIndentDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzRowIndentDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzRowIndentDirective,
      selectors: [["nz-row-indent"]],
      hostAttrs: [1, "ant-table-row-indent"],
      hostVars: 2,
      hostBindings: function NzRowIndentDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("padding-left", ctx.indentSize, "px");
        }
      },
      inputs: {
        indentSize: "indentSize"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRowIndentDirective, [{
    type: Directive,
    args: [{
      selector: "nz-row-indent",
      host: {
        class: "ant-table-row-indent",
        "[style.padding-left.px]": "indentSize"
      }
    }]
  }], null, {
    indentSize: [{
      type: Input
    }]
  });
})();
var NzTableSelectionComponent = class _NzTableSelectionComponent {
  constructor() {
    this.listOfSelections = [];
    this.checked = false;
    this.disabled = false;
    this.indeterminate = false;
    this.label = null;
    this.showCheckbox = false;
    this.showRowSelection = false;
    this.checkedChange = new EventEmitter();
  }
  onCheckedChange(checked) {
    this.checked = checked;
    this.checkedChange.emit(checked);
  }
  static {
    this.ɵfac = function NzTableSelectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTableSelectionComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTableSelectionComponent,
      selectors: [["nz-table-selection"]],
      hostAttrs: [1, "ant-table-selection"],
      inputs: {
        listOfSelections: "listOfSelections",
        checked: "checked",
        disabled: "disabled",
        indeterminate: "indeterminate",
        label: "label",
        showCheckbox: "showCheckbox",
        showRowSelection: "showRowSelection"
      },
      outputs: {
        checkedChange: "checkedChange"
      },
      decls: 2,
      vars: 2,
      consts: [["selectionMenu", "nzDropdownMenu"], ["nz-checkbox", "", 3, "ant-table-selection-select-all-custom", "ngModel", "nzDisabled", "nzIndeterminate"], [1, "ant-table-selection-extra"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzDisabled", "nzIndeterminate"], ["nz-dropdown", "", "nzPlacement", "bottomLeft", 1, "ant-table-selection-down", 3, "nzDropdownMenu"], ["nzType", "down"], ["nz-menu", "", 1, "ant-table-selection-menu"], ["nz-menu-item", ""], ["nz-menu-item", "", 3, "click"]],
      template: function NzTableSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzTableSelectionComponent_Conditional_0_Template, 1, 6, "label", 1)(1, NzTableSelectionComponent_Conditional_1_Template, 8, 1, "div", 2);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.showCheckbox ? 0 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showRowSelection ? 1 : -1);
        }
      },
      dependencies: [FormsModule, NgControlStatus, NgModel, NzCheckboxModule, NzCheckboxComponent, NzDropDownModule, NzMenuDirective, NzMenuItemComponent, NzDropDownDirective, NzDropdownMenuComponent, NzIconModule, NzIconDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableSelectionComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-selection",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (showCheckbox) {
      <label
        nz-checkbox
        [class.ant-table-selection-select-all-custom]="showRowSelection"
        [ngModel]="checked"
        [nzDisabled]="disabled"
        [nzIndeterminate]="indeterminate"
        [attr.aria-label]="label"
        (ngModelChange)="onCheckedChange($event)"
      ></label>
    }
    @if (showRowSelection) {
      <div class="ant-table-selection-extra">
        <span nz-dropdown class="ant-table-selection-down" nzPlacement="bottomLeft" [nzDropdownMenu]="selectionMenu">
          <nz-icon nzType="down" />
        </span>
        <nz-dropdown-menu #selectionMenu="nzDropdownMenu">
          <ul nz-menu class="ant-table-selection-menu">
            @for (selection of listOfSelections; track selection) {
              <li nz-menu-item (click)="selection.onSelect()">
                {{ selection.text }}
              </li>
            }
          </ul>
        </nz-dropdown-menu>
      </div>
    }
  `,
      host: {
        class: "ant-table-selection"
      },
      imports: [FormsModule, NzCheckboxModule, NzDropDownModule, NzIconModule]
    }]
  }], null, {
    listOfSelections: [{
      type: Input
    }],
    checked: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    indeterminate: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    showCheckbox: [{
      type: Input
    }],
    showRowSelection: [{
      type: Input
    }],
    checkedChange: [{
      type: Output
    }]
  });
})();
var NzTableSortersComponent = class _NzTableSortersComponent {
  constructor() {
    this.sortDirections = ["ascend", "descend", null];
    this.sortOrder = null;
    this.contentTemplate = null;
    this.isUp = false;
    this.isDown = false;
  }
  ngOnChanges(changes) {
    const {
      sortDirections
    } = changes;
    if (sortDirections) {
      this.isUp = this.sortDirections.indexOf("ascend") !== -1;
      this.isDown = this.sortDirections.indexOf("descend") !== -1;
    }
  }
  static {
    this.ɵfac = function NzTableSortersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTableSortersComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTableSortersComponent,
      selectors: [["nz-table-sorters"]],
      hostAttrs: [1, "ant-table-column-sorters"],
      inputs: {
        sortDirections: "sortDirections",
        sortOrder: "sortOrder",
        contentTemplate: "contentTemplate"
      },
      features: [ɵɵNgOnChangesFeature],
      decls: 6,
      vars: 5,
      consts: [[1, "ant-table-column-title"], [3, "ngTemplateOutlet"], [1, "ant-table-column-sorter"], [1, "ant-table-column-sorter-inner"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-table-column-sorter-up", 3, "active"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-table-column-sorter-down", 3, "active"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-table-column-sorter-up"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-table-column-sorter-down"]],
      template: function NzTableSortersComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "span", 0);
          ɵɵtemplate(1, NzTableSortersComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
          ɵɵelementEnd();
          ɵɵelementStart(2, "span", 2)(3, "span", 3);
          ɵɵtemplate(4, NzTableSortersComponent_Conditional_4_Template, 1, 2, "span", 4)(5, NzTableSortersComponent_Conditional_5_Template, 1, 2, "span", 5);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
          ɵɵadvance();
          ɵɵclassProp("ant-table-column-sorter-full", ctx.isDown && ctx.isUp);
          ɵɵadvance(2);
          ɵɵconditional(ctx.isUp ? 4 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.isDown ? 5 : -1);
        }
      },
      dependencies: [NzIconModule, NzIconDirective, NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableSortersComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-sorters",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    <span class="ant-table-column-title"><ng-template [ngTemplateOutlet]="contentTemplate"></ng-template></span>
    <span class="ant-table-column-sorter" [class.ant-table-column-sorter-full]="isDown && isUp">
      <span class="ant-table-column-sorter-inner">
        @if (isUp) {
          <span
            nz-icon
            nzType="caret-up"
            class="ant-table-column-sorter-up"
            [class.active]="sortOrder === 'ascend'"
          ></span>
        }
        @if (isDown) {
          <span
            nz-icon
            nzType="caret-down"
            class="ant-table-column-sorter-down"
            [class.active]="sortOrder === 'descend'"
          ></span>
        }
      </span>
    </span>
  `,
      host: {
        class: "ant-table-column-sorters"
      },
      imports: [NzIconModule, NgTemplateOutlet]
    }]
  }], null, {
    sortDirections: [{
      type: Input
    }],
    sortOrder: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }]
  });
})();
var NzCellFixedDirective = class _NzCellFixedDirective {
  setAutoLeftWidth(autoLeft) {
    this.renderer.setStyle(this.elementRef.nativeElement, "left", autoLeft);
  }
  setAutoRightWidth(autoRight) {
    this.renderer.setStyle(this.elementRef.nativeElement, "right", autoRight);
  }
  setIsFirstRight(isFirstRight) {
    this.setFixClass(isFirstRight, "ant-table-cell-fix-right-first");
  }
  setIsLastLeft(isLastLeft) {
    this.setFixClass(isLastLeft, "ant-table-cell-fix-left-last");
  }
  setFixClass(flag, className) {
    this.renderer.removeClass(this.elementRef.nativeElement, className);
    if (flag) {
      this.renderer.addClass(this.elementRef.nativeElement, className);
    }
  }
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.nzRight = false;
    this.nzLeft = false;
    this.colspan = null;
    this.colSpan = null;
    this.changes$ = new Subject();
    this.isAutoLeft = false;
    this.isAutoRight = false;
    this.isFixedLeft = false;
    this.isFixedRight = false;
    this.isFixed = false;
  }
  ngOnChanges() {
    this.setIsFirstRight(false);
    this.setIsLastLeft(false);
    this.isAutoLeft = this.nzLeft === "" || this.nzLeft === true;
    this.isAutoRight = this.nzRight === "" || this.nzRight === true;
    this.isFixedLeft = this.nzLeft !== false;
    this.isFixedRight = this.nzRight !== false;
    this.isFixed = this.isFixedLeft || this.isFixedRight;
    const validatePx = (value) => {
      if (typeof value === "string" && value !== "") {
        return value;
      } else {
        return null;
      }
    };
    this.setAutoLeftWidth(validatePx(this.nzLeft));
    this.setAutoRightWidth(validatePx(this.nzRight));
    this.changes$.next();
  }
  static {
    this.ɵfac = function NzCellFixedDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzCellFixedDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzCellFixedDirective,
      selectors: [["td", "nzRight", ""], ["th", "nzRight", ""], ["td", "nzLeft", ""], ["th", "nzLeft", ""]],
      hostVars: 6,
      hostBindings: function NzCellFixedDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("position", ctx.isFixed ? "sticky" : null);
          ɵɵclassProp("ant-table-cell-fix-right", ctx.isFixedRight)("ant-table-cell-fix-left", ctx.isFixedLeft);
        }
      },
      inputs: {
        nzRight: "nzRight",
        nzLeft: "nzLeft",
        colspan: "colspan",
        colSpan: "colSpan"
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCellFixedDirective, [{
    type: Directive,
    args: [{
      selector: "td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]",
      host: {
        "[class.ant-table-cell-fix-right]": `isFixedRight`,
        "[class.ant-table-cell-fix-left]": `isFixedLeft`,
        "[style.position]": `isFixed? 'sticky' : null`
      }
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    nzRight: [{
      type: Input
    }],
    nzLeft: [{
      type: Input
    }],
    colspan: [{
      type: Input
    }],
    colSpan: [{
      type: Input
    }]
  });
})();
var NzTableStyleService = class _NzTableStyleService {
  constructor() {
    this.theadTemplate$ = new ReplaySubject(1);
    this.tfootTemplate$ = new ReplaySubject(1);
    this.tfootFixed$ = new ReplaySubject(1);
    this.hasFixLeft$ = new ReplaySubject(1);
    this.hasFixRight$ = new ReplaySubject(1);
    this.hostWidth$ = new ReplaySubject(1);
    this.columnCount$ = new ReplaySubject(1);
    this.showEmpty$ = new ReplaySubject(1);
    this.noResult$ = new ReplaySubject(1);
    this.listOfThWidthConfigPx$ = new BehaviorSubject([]);
    this.tableWidthConfigPx$ = new BehaviorSubject([]);
    this.manualWidthConfigPx$ = combineLatest([this.tableWidthConfigPx$, this.listOfThWidthConfigPx$]).pipe(map(([widthConfig, listOfWidth]) => widthConfig.length ? widthConfig : listOfWidth));
    this.listOfAutoWidthPx$ = new ReplaySubject(1);
    this.listOfListOfThWidthPx$ = merge(
      /** init with manual width **/
      this.manualWidthConfigPx$,
      combineLatest([this.listOfAutoWidthPx$, this.manualWidthConfigPx$]).pipe(map(([autoWidth, manualWidth]) => {
        if (autoWidth.length === manualWidth.length) {
          return autoWidth.map((width, index) => {
            if (width === "0px") {
              return manualWidth[index] || null;
            } else {
              return manualWidth[index] || width;
            }
          });
        } else {
          return manualWidth;
        }
      }))
    );
    this.listOfMeasureColumn$ = new ReplaySubject(1);
    this.listOfListOfThWidth$ = this.listOfAutoWidthPx$.pipe(map((list) => list.map((width) => parseInt(width, 10))));
    this.enableAutoMeasure$ = new ReplaySubject(1);
  }
  setTheadTemplate(template) {
    this.theadTemplate$.next(template);
  }
  setTfootTemplate(template) {
    this.tfootTemplate$.next(template);
  }
  setTfootFixed(fixed) {
    this.tfootFixed$.next(fixed);
  }
  setHasFixLeft(hasFixLeft) {
    this.hasFixLeft$.next(hasFixLeft);
  }
  setHasFixRight(hasFixRight) {
    this.hasFixRight$.next(hasFixRight);
  }
  setTableWidthConfig(widthConfig) {
    this.tableWidthConfigPx$.next(widthConfig);
  }
  setListOfTh(listOfTh) {
    let columnCount = 0;
    listOfTh.forEach((th) => {
      columnCount += th.colspan && +th.colspan || th.colSpan && +th.colSpan || 1;
    });
    const listOfThPx = listOfTh.map((item) => item.nzWidth);
    this.columnCount$.next(columnCount);
    this.listOfThWidthConfigPx$.next(listOfThPx);
  }
  setListOfMeasureColumn(listOfTh) {
    const listOfKeys = [];
    listOfTh.forEach((th) => {
      const length = th.colspan && +th.colspan || th.colSpan && +th.colSpan || 1;
      for (let i = 0; i < length; i++) {
        listOfKeys.push(`measure_key_${i}`);
      }
    });
    this.listOfMeasureColumn$.next(listOfKeys);
  }
  setListOfAutoWidth(listOfAutoWidth) {
    this.listOfAutoWidthPx$.next(listOfAutoWidth.map((width) => `${width}px`));
  }
  setShowEmpty(showEmpty) {
    this.showEmpty$.next(showEmpty);
  }
  setNoResult(noResult) {
    this.noResult$.next(noResult);
  }
  setScroll(scrollX, scrollY) {
    const enableAutoMeasure = !!(scrollX || scrollY);
    if (!enableAutoMeasure) {
      this.setListOfAutoWidth([]);
    }
    this.enableAutoMeasure$.next(enableAutoMeasure);
  }
  static {
    this.ɵfac = function NzTableStyleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTableStyleService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NzTableStyleService,
      factory: _NzTableStyleService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableStyleService, [{
    type: Injectable
  }], null, null);
})();
var NzTableCellDirective = class _NzTableCellDirective {
  constructor() {
    this.isInsideTable = !!inject(NzTableStyleService, {
      optional: true
    });
  }
  static {
    this.ɵfac = function NzTableCellDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTableCellDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTableCellDirective,
      selectors: [["th", 9, "nz-disable-th", 3, "mat-cell", ""], ["td", 9, "nz-disable-td", 3, "mat-cell", ""]],
      hostVars: 2,
      hostBindings: function NzTableCellDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-table-cell", ctx.isInsideTable);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableCellDirective, [{
    type: Directive,
    args: [{
      selector: "th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])",
      host: {
        "[class.ant-table-cell]": "isInsideTable"
      }
    }]
  }], null, null);
})();
var NzTableDataService = class _NzTableDataService {
  constructor() {
    this.destroy$ = new Subject();
    this.pageIndex$ = new BehaviorSubject(1);
    this.frontPagination$ = new BehaviorSubject(true);
    this.pageSize$ = new BehaviorSubject(10);
    this.listOfData$ = new BehaviorSubject([]);
    this.listOfCustomColumn$ = new BehaviorSubject([]);
    this.pageIndexDistinct$ = this.pageIndex$.pipe(distinctUntilChanged());
    this.pageSizeDistinct$ = this.pageSize$.pipe(distinctUntilChanged());
    this.listOfCalcOperator$ = new BehaviorSubject([]);
    this.queryParams$ = combineLatest([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfCalcOperator$]).pipe(debounceTime(0), skip(1), map(([pageIndex, pageSize, listOfCalc]) => ({
      pageIndex,
      pageSize,
      sort: listOfCalc.filter((item) => item.sortFn).map((item) => ({
        key: item.key,
        value: item.sortOrder
      })),
      filter: listOfCalc.filter((item) => item.filterFn).map((item) => ({
        key: item.key,
        value: item.filterValue
      }))
    })));
    this.listOfDataAfterCalc$ = combineLatest([this.listOfData$, this.listOfCalcOperator$]).pipe(map(([listOfData, listOfCalcOperator]) => {
      let listOfDataAfterCalc = [...listOfData];
      const listOfFilterOperator = listOfCalcOperator.filter((item) => {
        const {
          filterValue,
          filterFn
        } = item;
        const isReset = filterValue === null || filterValue === void 0 || Array.isArray(filterValue) && filterValue.length === 0;
        return !isReset && typeof filterFn === "function";
      });
      for (const item of listOfFilterOperator) {
        const {
          filterFn,
          filterValue
        } = item;
        listOfDataAfterCalc = listOfDataAfterCalc.filter((data) => filterFn(filterValue, data));
      }
      const listOfSortOperator = listOfCalcOperator.filter((item) => item.sortOrder !== null && typeof item.sortFn === "function").sort((a, b) => +b.sortPriority - +a.sortPriority);
      if (listOfCalcOperator.length) {
        listOfDataAfterCalc.sort((record1, record2) => {
          for (const item of listOfSortOperator) {
            const {
              sortFn,
              sortOrder
            } = item;
            if (sortFn && sortOrder) {
              const compareResult = sortFn(record1, record2, sortOrder);
              if (compareResult !== 0) {
                return sortOrder === "ascend" ? compareResult : -compareResult;
              }
            }
          }
          return 0;
        });
      }
      return listOfDataAfterCalc;
    }));
    this.listOfFrontEndCurrentPageData$ = combineLatest([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfDataAfterCalc$]).pipe(takeUntil(this.destroy$), filter((value) => {
      const [pageIndex, pageSize, listOfData] = value;
      const maxPageIndex = Math.ceil(listOfData.length / pageSize) || 1;
      return pageIndex <= maxPageIndex;
    }), map(([pageIndex, pageSize, listOfData]) => listOfData.slice((pageIndex - 1) * pageSize, pageIndex * pageSize)));
    this.listOfCurrentPageData$ = this.frontPagination$.pipe(switchMap((pagination) => pagination ? this.listOfFrontEndCurrentPageData$ : this.listOfDataAfterCalc$));
    this.total$ = this.frontPagination$.pipe(switchMap((pagination) => pagination ? this.listOfDataAfterCalc$ : this.listOfData$), map((list) => list.length), distinctUntilChanged());
  }
  updatePageSize(size) {
    this.pageSize$.next(size);
  }
  updateFrontPagination(pagination) {
    this.frontPagination$.next(pagination);
  }
  updatePageIndex(index) {
    this.pageIndex$.next(index);
  }
  updateListOfData(list) {
    this.listOfData$.next(list);
  }
  updateListOfCustomColumn(list) {
    this.listOfCustomColumn$.next(list);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzTableDataService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTableDataService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NzTableDataService,
      factory: _NzTableDataService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableDataService, [{
    type: Injectable
  }], null, null);
})();
var NzCustomColumnDirective = class _NzCustomColumnDirective {
  constructor(el, renderer, nzTableDataService) {
    this.el = el;
    this.renderer = renderer;
    this.nzTableDataService = nzTableDataService;
    this.nzCellControl = null;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.nzTableDataService.listOfCustomColumn$.pipe(takeUntil(this.destroy$)).subscribe((item) => {
      if (item.length) {
        item.forEach((v, i) => {
          if (v.value === this.nzCellControl) {
            if (!v.default) {
              this.renderer.setStyle(this.el.nativeElement, "display", "none");
            } else {
              this.renderer.setStyle(this.el.nativeElement, "display", "block");
            }
            this.renderer.setStyle(this.el.nativeElement, "order", i);
            if (!v?.fixWidth) {
              this.renderer.setStyle(this.el.nativeElement, "flex", `1 1 ${v.width}px`);
            } else {
              this.renderer.setStyle(this.el.nativeElement, "flex", `1 0 ${v.width}px`);
            }
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzCustomColumnDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzCustomColumnDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzTableDataService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzCustomColumnDirective,
      selectors: [["td", "nzCellControl", ""], ["th", "nzCellControl", ""]],
      inputs: {
        nzCellControl: "nzCellControl"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCustomColumnDirective, [{
    type: Directive,
    args: [{
      selector: "td[nzCellControl],th[nzCellControl]"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NzTableDataService
  }], {
    nzCellControl: [{
      type: Input
    }]
  });
})();
var NzTdAddOnComponent = class _NzTdAddOnComponent {
  constructor() {
    this.nzChecked = false;
    this.nzDisabled = false;
    this.nzIndeterminate = false;
    this.nzLabel = null;
    this.nzIndentSize = 0;
    this.nzShowExpand = false;
    this.nzShowCheckbox = false;
    this.nzExpand = false;
    this.nzExpandIcon = null;
    this.nzCheckedChange = new EventEmitter();
    this.nzExpandChange = new EventEmitter();
    this.isNzShowExpandChanged = false;
    this.isNzShowCheckboxChanged = false;
  }
  onCheckedChange(checked) {
    this.nzChecked = checked;
    this.nzCheckedChange.emit(checked);
  }
  onExpandChange(expand) {
    this.nzExpand = expand;
    this.nzExpandChange.emit(expand);
  }
  ngOnChanges(changes) {
    const isFirstChange = (value) => value && value.firstChange && value.currentValue !== void 0;
    const {
      nzExpand,
      nzChecked,
      nzShowExpand,
      nzShowCheckbox
    } = changes;
    if (nzShowExpand) {
      this.isNzShowExpandChanged = true;
    }
    if (nzShowCheckbox) {
      this.isNzShowCheckboxChanged = true;
    }
    if (isFirstChange(nzExpand) && !this.isNzShowExpandChanged) {
      this.nzShowExpand = true;
    }
    if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
      this.nzShowCheckbox = true;
    }
  }
  static {
    this.ɵfac = function NzTdAddOnComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTdAddOnComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTdAddOnComponent,
      selectors: [["td", "nzChecked", ""], ["td", "nzDisabled", ""], ["td", "nzIndeterminate", ""], ["td", "nzIndentSize", ""], ["td", "nzExpand", ""], ["td", "nzShowExpand", ""], ["td", "nzShowCheckbox", ""]],
      hostVars: 4,
      hostBindings: function NzTdAddOnComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-table-cell-with-append", ctx.nzShowExpand || ctx.nzIndentSize > 0)("ant-table-selection-column", ctx.nzShowCheckbox);
        }
      },
      inputs: {
        nzChecked: "nzChecked",
        nzDisabled: "nzDisabled",
        nzIndeterminate: "nzIndeterminate",
        nzLabel: "nzLabel",
        nzIndentSize: "nzIndentSize",
        nzShowExpand: [2, "nzShowExpand", "nzShowExpand", booleanAttribute],
        nzShowCheckbox: [2, "nzShowCheckbox", "nzShowCheckbox", booleanAttribute],
        nzExpand: [2, "nzExpand", "nzExpand", booleanAttribute],
        nzExpandIcon: "nzExpandIcon"
      },
      outputs: {
        nzCheckedChange: "nzCheckedChange",
        nzExpandChange: "nzExpandChange"
      },
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
      attrs: _c13,
      ngContentSelectors: _c04,
      decls: 3,
      vars: 2,
      consts: [["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate"], [3, "indentSize"], [3, "ngTemplateOutlet"], ["nz-row-expand-button", "", 3, "expand", "spaceMode"], ["nz-row-expand-button", "", 3, "expandChange", "expand", "spaceMode"], ["nz-checkbox", "", 3, "ngModelChange", "nzDisabled", "ngModel", "nzIndeterminate"]],
      template: function NzTdAddOnComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NzTdAddOnComponent_Conditional_0_Template, 3, 2)(1, NzTdAddOnComponent_Conditional_1_Template, 1, 4, "label", 0);
          ɵɵprojection(2);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.nzShowExpand || ctx.nzIndentSize > 0 ? 0 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.nzShowCheckbox ? 1 : -1);
        }
      },
      dependencies: [NzRowIndentDirective, NzRowExpandButtonDirective, NgTemplateOutlet, NzCheckboxModule, NzCheckboxComponent, FormsModule, NgControlStatus, NgModel],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTdAddOnComponent, [{
    type: Component,
    args: [{
      selector: "td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (nzShowExpand || nzIndentSize > 0) {
      <nz-row-indent [indentSize]="nzIndentSize"></nz-row-indent>
      @if (nzExpandIcon) {
        <ng-template [ngTemplateOutlet]="nzExpandIcon"></ng-template>
      } @else {
        <button
          nz-row-expand-button
          [expand]="nzExpand"
          (expandChange)="onExpandChange($event)"
          [spaceMode]="!nzShowExpand"
        ></button>
      }
    }
    @if (nzShowCheckbox) {
      <label
        nz-checkbox
        [nzDisabled]="nzDisabled"
        [ngModel]="nzChecked"
        [nzIndeterminate]="nzIndeterminate"
        [attr.aria-label]="nzLabel"
        (ngModelChange)="onCheckedChange($event)"
      ></label>
    }
    <ng-content></ng-content>
  `,
      host: {
        "[class.ant-table-cell-with-append]": `nzShowExpand || nzIndentSize > 0`,
        "[class.ant-table-selection-column]": `nzShowCheckbox`
      },
      imports: [NzRowIndentDirective, NzRowExpandButtonDirective, NgTemplateOutlet, NzCheckboxModule, FormsModule]
    }]
  }], null, {
    nzChecked: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzIndeterminate: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }],
    nzIndentSize: [{
      type: Input
    }],
    nzShowExpand: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowCheckbox: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExpand: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExpandIcon: [{
      type: Input
    }],
    nzCheckedChange: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME$1 = "table";
var NzThAddOnComponent = (() => {
  let _nzSortDirections_decorators;
  let _nzSortDirections_initializers = [];
  let _nzSortDirections_extraInitializers = [];
  return class NzThAddOnComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzSortDirections_decorators = [WithConfig()];
      __esDecorate(null, null, _nzSortDirections_decorators, {
        kind: "field",
        name: "nzSortDirections",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSortDirections" in obj,
          get: (obj) => obj.nzSortDirections,
          set: (obj, value) => {
            obj.nzSortDirections = value;
          }
        },
        metadata: _metadata
      }, _nzSortDirections_initializers, _nzSortDirections_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    getNextSortDirection(sortDirections, current) {
      const index = sortDirections.indexOf(current);
      if (index === sortDirections.length - 1) {
        return sortDirections[0];
      } else {
        return sortDirections[index + 1];
      }
    }
    setSortOrder(order) {
      this.sortOrderChange$.next(order);
    }
    clearSortOrder() {
      if (this.sortOrder !== null) {
        this.setSortOrder(null);
      }
    }
    onFilterValueChange(value) {
      this.nzFilterChange.emit(value);
      this.nzFilterValue = value;
      this.updateCalcOperator();
    }
    updateCalcOperator() {
      this.calcOperatorChange$.next();
    }
    constructor(nzConfigService, host, cdr, ngZone, destroy$) {
      this.nzConfigService = nzConfigService;
      this.host = host;
      this.cdr = cdr;
      this.ngZone = ngZone;
      this.destroy$ = destroy$;
      this._nzModuleName = NZ_CONFIG_MODULE_NAME$1;
      this.manualClickOrder$ = new Subject();
      this.calcOperatorChange$ = new Subject();
      this.nzFilterValue = null;
      this.sortOrder = null;
      this.sortDirections = ["ascend", "descend", null];
      this.sortOrderChange$ = new Subject();
      this.isNzShowSortChanged = false;
      this.isNzShowFilterChanged = false;
      this.nzFilterMultiple = true;
      this.nzSortOrder = null;
      this.nzSortPriority = false;
      this.nzSortDirections = __runInitializers(this, _nzSortDirections_initializers, ["ascend", "descend", null]);
      this.nzFilters = (__runInitializers(this, _nzSortDirections_extraInitializers), []);
      this.nzSortFn = null;
      this.nzFilterFn = null;
      this.nzShowSort = false;
      this.nzShowFilter = false;
      this.nzCustomFilter = false;
      this.nzCheckedChange = new EventEmitter();
      this.nzSortOrderChange = new EventEmitter();
      this.nzFilterChange = new EventEmitter();
    }
    ngOnInit() {
      fromEventOutsideAngular(this.host.nativeElement, "click").pipe(filter(() => this.nzShowSort), takeUntil(this.destroy$)).subscribe(() => {
        const nextOrder = this.getNextSortDirection(this.sortDirections, this.sortOrder);
        this.ngZone.run(() => {
          this.setSortOrder(nextOrder);
          this.manualClickOrder$.next(this);
        });
      });
      this.sortOrderChange$.pipe(takeUntil(this.destroy$)).subscribe((order) => {
        if (this.sortOrder !== order) {
          this.sortOrder = order;
          this.nzSortOrderChange.emit(order);
        }
        this.updateCalcOperator();
        this.cdr.markForCheck();
      });
    }
    ngOnChanges(changes) {
      const {
        nzSortDirections,
        nzFilters,
        nzSortOrder,
        nzSortFn,
        nzFilterFn,
        nzSortPriority,
        nzFilterMultiple,
        nzShowSort,
        nzShowFilter
      } = changes;
      if (nzSortDirections) {
        if (this.nzSortDirections && this.nzSortDirections.length) {
          this.sortDirections = this.nzSortDirections;
        }
      }
      if (nzSortOrder) {
        this.sortOrder = this.nzSortOrder;
        this.setSortOrder(this.nzSortOrder);
      }
      if (nzShowSort) {
        this.isNzShowSortChanged = true;
      }
      if (nzShowFilter) {
        this.isNzShowFilterChanged = true;
      }
      const isFirstChange = (value) => value && value.firstChange && value.currentValue !== void 0;
      if ((isFirstChange(nzSortOrder) || isFirstChange(nzSortFn)) && !this.isNzShowSortChanged) {
        this.nzShowSort = true;
      }
      if (isFirstChange(nzFilters) && !this.isNzShowFilterChanged) {
        this.nzShowFilter = true;
      }
      if ((nzFilters || nzFilterMultiple) && this.nzShowFilter) {
        const listOfValue = this.nzFilters.filter((item) => item.byDefault).map((item) => item.value);
        this.nzFilterValue = this.nzFilterMultiple ? listOfValue : listOfValue[0] || null;
      }
      if (nzSortFn || nzFilterFn || nzSortPriority || nzFilters) {
        this.updateCalcOperator();
      }
    }
    static {
      this.ɵfac = function NzThAddOnComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NzThAddOnComponent2)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NzDestroyService));
      };
    }
    static {
      this.ɵcmp = ɵɵdefineComponent({
        type: NzThAddOnComponent2,
        selectors: [["th", "nzColumnKey", ""], ["th", "nzSortFn", ""], ["th", "nzSortOrder", ""], ["th", "nzFilters", ""], ["th", "nzShowSort", ""], ["th", "nzShowFilter", ""], ["th", "nzCustomFilter", ""]],
        hostVars: 4,
        hostBindings: function NzThAddOnComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            ɵɵclassProp("ant-table-column-has-sorters", ctx.nzShowSort)("ant-table-column-sort", ctx.sortOrder === "descend" || ctx.sortOrder === "ascend");
          }
        },
        inputs: {
          nzColumnKey: "nzColumnKey",
          nzFilterMultiple: "nzFilterMultiple",
          nzSortOrder: "nzSortOrder",
          nzSortPriority: "nzSortPriority",
          nzSortDirections: "nzSortDirections",
          nzFilters: "nzFilters",
          nzSortFn: "nzSortFn",
          nzFilterFn: "nzFilterFn",
          nzShowSort: [2, "nzShowSort", "nzShowSort", booleanAttribute],
          nzShowFilter: [2, "nzShowFilter", "nzShowFilter", booleanAttribute],
          nzCustomFilter: [2, "nzCustomFilter", "nzCustomFilter", booleanAttribute]
        },
        outputs: {
          nzCheckedChange: "nzCheckedChange",
          nzSortOrderChange: "nzSortOrderChange",
          nzFilterChange: "nzFilterChange"
        },
        features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
        attrs: _c23,
        ngContentSelectors: _c42,
        decls: 10,
        vars: 1,
        consts: [["notFilterTemplate", ""], ["extraTemplate", ""], ["sortTemplate", ""], ["contentTemplate", ""], [3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter"], [3, "ngTemplateOutlet"], [3, "filterChange", "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter"], [3, "sortOrder", "sortDirections", "contentTemplate"]],
        template: function NzThAddOnComponent_Template(rf, ctx) {
          if (rf & 1) {
            ɵɵprojectionDef(_c32);
            ɵɵtemplate(0, NzThAddOnComponent_Conditional_0_Template, 1, 5, "nz-table-filter", 4)(1, NzThAddOnComponent_Conditional_1_Template, 1, 1, "ng-container", 5)(2, NzThAddOnComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, NzThAddOnComponent_ng_template_4_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, NzThAddOnComponent_ng_template_6_Template, 1, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor)(8, NzThAddOnComponent_ng_template_8_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
          }
          if (rf & 2) {
            ɵɵconditional(ctx.nzShowFilter || ctx.nzCustomFilter ? 0 : 1);
          }
        },
        dependencies: [NzTableFilterComponent, NgTemplateOutlet, NzTableSortersComponent],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzThAddOnComponent, [{
    type: Component,
    args: [{
      selector: "th[nzColumnKey], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (nzShowFilter || nzCustomFilter) {
      <nz-table-filter
        [contentTemplate]="notFilterTemplate"
        [extraTemplate]="extraTemplate"
        [customFilter]="nzCustomFilter"
        [filterMultiple]="nzFilterMultiple"
        [listOfFilter]="nzFilters"
        (filterChange)="onFilterValueChange($event)"
      ></nz-table-filter>
    } @else {
      <ng-container [ngTemplateOutlet]="notFilterTemplate"></ng-container>
    }
    <ng-template #notFilterTemplate>
      <ng-template [ngTemplateOutlet]="nzShowSort ? sortTemplate : contentTemplate"></ng-template>
    </ng-template>
    <ng-template #extraTemplate>
      <ng-content select="[nz-th-extra]"></ng-content>
      <ng-content select="nz-filter-trigger"></ng-content>
    </ng-template>
    <ng-template #sortTemplate>
      <nz-table-sorters
        [sortOrder]="sortOrder"
        [sortDirections]="sortDirections"
        [contentTemplate]="contentTemplate"
      ></nz-table-sorters>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
      host: {
        "[class.ant-table-column-has-sorters]": "nzShowSort",
        "[class.ant-table-column-sort]": `sortOrder === 'descend' || sortOrder === 'ascend'`
      },
      providers: [NzDestroyService],
      imports: [NzTableFilterComponent, NgTemplateOutlet, NzTableSortersComponent]
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: NzDestroyService
  }], {
    nzColumnKey: [{
      type: Input
    }],
    nzFilterMultiple: [{
      type: Input
    }],
    nzSortOrder: [{
      type: Input
    }],
    nzSortPriority: [{
      type: Input
    }],
    nzSortDirections: [{
      type: Input
    }],
    nzFilters: [{
      type: Input
    }],
    nzSortFn: [{
      type: Input
    }],
    nzFilterFn: [{
      type: Input
    }],
    nzShowSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCustomFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCheckedChange: [{
      type: Output
    }],
    nzSortOrderChange: [{
      type: Output
    }],
    nzFilterChange: [{
      type: Output
    }]
  });
})();
var NzThMeasureDirective = class _NzThMeasureDirective {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.changes$ = new Subject();
    this.nzWidth = null;
    this.colspan = null;
    this.colSpan = null;
    this.rowspan = null;
    this.rowSpan = null;
  }
  ngOnChanges(changes) {
    const {
      nzWidth,
      colspan,
      rowspan,
      colSpan,
      rowSpan
    } = changes;
    if (colspan || colSpan) {
      const col = this.colspan || this.colSpan;
      if (!isNil(col)) {
        this.renderer.setAttribute(this.elementRef.nativeElement, "colspan", `${col}`);
      } else {
        this.renderer.removeAttribute(this.elementRef.nativeElement, "colspan");
      }
    }
    if (rowspan || rowSpan) {
      const row = this.rowspan || this.rowSpan;
      if (!isNil(row)) {
        this.renderer.setAttribute(this.elementRef.nativeElement, "rowspan", `${row}`);
      } else {
        this.renderer.removeAttribute(this.elementRef.nativeElement, "rowspan");
      }
    }
    if (nzWidth || colspan) {
      this.changes$.next();
    }
  }
  static {
    this.ɵfac = function NzThMeasureDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzThMeasureDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzThMeasureDirective,
      selectors: [["th"]],
      inputs: {
        nzWidth: "nzWidth",
        colspan: "colspan",
        colSpan: "colSpan",
        rowspan: "rowspan",
        rowSpan: "rowSpan"
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzThMeasureDirective, [{
    type: Directive,
    args: [{
      selector: "th"
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    nzWidth: [{
      type: Input
    }],
    colspan: [{
      type: Input
    }],
    colSpan: [{
      type: Input
    }],
    rowspan: [{
      type: Input
    }],
    rowSpan: [{
      type: Input
    }]
  });
})();
var NzThSelectionComponent = class _NzThSelectionComponent {
  constructor() {
    this.nzSelections = [];
    this.nzChecked = false;
    this.nzDisabled = false;
    this.nzIndeterminate = false;
    this.nzLabel = null;
    this.nzShowCheckbox = false;
    this.nzShowRowSelection = false;
    this.nzCheckedChange = new EventEmitter();
    this.isNzShowExpandChanged = false;
    this.isNzShowCheckboxChanged = false;
  }
  onCheckedChange(checked) {
    this.nzChecked = checked;
    this.nzCheckedChange.emit(checked);
  }
  ngOnChanges(changes) {
    const isFirstChange = (value) => value && value.firstChange && value.currentValue !== void 0;
    const {
      nzChecked,
      nzSelections,
      nzShowExpand,
      nzShowCheckbox
    } = changes;
    if (nzShowExpand) {
      this.isNzShowExpandChanged = true;
    }
    if (nzShowCheckbox) {
      this.isNzShowCheckboxChanged = true;
    }
    if (isFirstChange(nzSelections) && !this.isNzShowExpandChanged) {
      this.nzShowRowSelection = true;
    }
    if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
      this.nzShowCheckbox = true;
    }
  }
  static {
    this.ɵfac = function NzThSelectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzThSelectionComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzThSelectionComponent,
      selectors: [["th", "nzSelections", ""], ["th", "nzChecked", ""], ["th", "nzShowCheckbox", ""], ["th", "nzShowRowSelection", ""]],
      hostAttrs: [1, "ant-table-selection-column"],
      inputs: {
        nzSelections: "nzSelections",
        nzChecked: [2, "nzChecked", "nzChecked", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzIndeterminate: "nzIndeterminate",
        nzLabel: "nzLabel",
        nzShowCheckbox: [2, "nzShowCheckbox", "nzShowCheckbox", booleanAttribute],
        nzShowRowSelection: [2, "nzShowRowSelection", "nzShowRowSelection", booleanAttribute]
      },
      outputs: {
        nzCheckedChange: "nzCheckedChange"
      },
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
      attrs: _c5,
      ngContentSelectors: _c04,
      decls: 2,
      vars: 7,
      consts: [[3, "checkedChange", "checked", "disabled", "indeterminate", "label", "listOfSelections", "showCheckbox", "showRowSelection"]],
      template: function NzThSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "nz-table-selection", 0);
          ɵɵlistener("checkedChange", function NzThSelectionComponent_Template_nz_table_selection_checkedChange_0_listener($event) {
            return ctx.onCheckedChange($event);
          });
          ɵɵelementEnd();
          ɵɵprojection(1);
        }
        if (rf & 2) {
          ɵɵproperty("checked", ctx.nzChecked)("disabled", ctx.nzDisabled)("indeterminate", ctx.nzIndeterminate)("label", ctx.nzLabel)("listOfSelections", ctx.nzSelections)("showCheckbox", ctx.nzShowCheckbox)("showRowSelection", ctx.nzShowRowSelection);
        }
      },
      dependencies: [NzTableSelectionComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzThSelectionComponent, [{
    type: Component,
    args: [{
      selector: "th[nzSelections],th[nzChecked],th[nzShowCheckbox],th[nzShowRowSelection]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <nz-table-selection
      [checked]="nzChecked"
      [disabled]="nzDisabled"
      [indeterminate]="nzIndeterminate"
      [label]="nzLabel"
      [listOfSelections]="nzSelections"
      [showCheckbox]="nzShowCheckbox"
      [showRowSelection]="nzShowRowSelection"
      (checkedChange)="onCheckedChange($event)"
    ></nz-table-selection>
    <ng-content></ng-content>
  `,
      host: {
        class: "ant-table-selection-column"
      },
      imports: [NzTableSelectionComponent]
    }]
  }], null, {
    nzSelections: [{
      type: Input
    }],
    nzChecked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzIndeterminate: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }],
    nzShowCheckbox: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowRowSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCheckedChange: [{
      type: Output
    }]
  });
})();
var NzCellAlignDirective = class _NzCellAlignDirective {
  constructor() {
    this.nzAlign = null;
  }
  static {
    this.ɵfac = function NzCellAlignDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzCellAlignDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzCellAlignDirective,
      selectors: [["th", "nzAlign", ""], ["td", "nzAlign", ""]],
      hostVars: 2,
      hostBindings: function NzCellAlignDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("text-align", ctx.nzAlign);
        }
      },
      inputs: {
        nzAlign: "nzAlign"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCellAlignDirective, [{
    type: Directive,
    args: [{
      selector: "th[nzAlign],td[nzAlign]",
      host: {
        "[style.text-align]": "nzAlign"
      }
    }]
  }], null, {
    nzAlign: [{
      type: Input
    }]
  });
})();
var NzCellEllipsisDirective = class _NzCellEllipsisDirective {
  constructor() {
    this.nzEllipsis = true;
  }
  static {
    this.ɵfac = function NzCellEllipsisDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzCellEllipsisDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzCellEllipsisDirective,
      selectors: [["th", "nzEllipsis", ""], ["td", "nzEllipsis", ""]],
      hostVars: 2,
      hostBindings: function NzCellEllipsisDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-table-cell-ellipsis", ctx.nzEllipsis);
        }
      },
      inputs: {
        nzEllipsis: [2, "nzEllipsis", "nzEllipsis", booleanAttribute]
      },
      features: [ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCellEllipsisDirective, [{
    type: Directive,
    args: [{
      selector: "th[nzEllipsis],td[nzEllipsis]",
      host: {
        "[class.ant-table-cell-ellipsis]": "nzEllipsis"
      }
    }]
  }], null, {
    nzEllipsis: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzCellBreakWordDirective = class _NzCellBreakWordDirective {
  constructor() {
    this.nzBreakWord = true;
  }
  static {
    this.ɵfac = function NzCellBreakWordDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzCellBreakWordDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzCellBreakWordDirective,
      selectors: [["th", "nzBreakWord", ""], ["td", "nzBreakWord", ""]],
      hostVars: 2,
      hostBindings: function NzCellBreakWordDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("word-break", ctx.nzBreakWord ? "break-all" : "");
        }
      },
      inputs: {
        nzBreakWord: [2, "nzBreakWord", "nzBreakWord", booleanAttribute]
      },
      features: [ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCellBreakWordDirective, [{
    type: Directive,
    args: [{
      selector: "th[nzBreakWord],td[nzBreakWord]",
      host: {
        "[style.word-break]": `nzBreakWord ? 'break-all' : ''`
      }
    }]
  }], null, {
    nzBreakWord: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzTableContentComponent = class _NzTableContentComponent {
  constructor() {
    this.tableLayout = "auto";
    this.theadTemplate = null;
    this.contentTemplate = null;
    this.tfootTemplate = null;
    this.listOfColWidth = [];
    this.scrollX = null;
  }
  static {
    this.ɵfac = function NzTableContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTableContentComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTableContentComponent,
      selectors: [["table", "nz-table-content", ""]],
      hostVars: 8,
      hostBindings: function NzTableContentComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("table-layout", ctx.tableLayout)("width", ctx.scrollX)("min-width", ctx.scrollX ? "100%" : null);
          ɵɵclassProp("ant-table-fixed", ctx.scrollX);
        }
      },
      inputs: {
        tableLayout: "tableLayout",
        theadTemplate: "theadTemplate",
        contentTemplate: "contentTemplate",
        tfootTemplate: "tfootTemplate",
        listOfColWidth: "listOfColWidth",
        scrollX: "scrollX"
      },
      attrs: _c6,
      ngContentSelectors: _c04,
      decls: 6,
      vars: 3,
      consts: [[3, "width", "minWidth"], [1, "ant-table-thead"], [3, "ngTemplateOutlet"], [1, "ant-table-summary"]],
      template: function NzTableContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵrepeaterCreate(0, NzTableContentComponent_For_1_Template, 1, 4, "col", 0, ɵɵrepeaterTrackByIndex);
          ɵɵtemplate(2, NzTableContentComponent_Conditional_2_Template, 2, 1, "thead", 1)(3, NzTableContentComponent_ng_template_3_Template, 0, 0, "ng-template", 2);
          ɵɵprojection(4);
          ɵɵtemplate(5, NzTableContentComponent_Conditional_5_Template, 2, 1, "tfoot", 3);
        }
        if (rf & 2) {
          ɵɵrepeater(ctx.listOfColWidth);
          ɵɵadvance(2);
          ɵɵconditional(ctx.theadTemplate ? 2 : -1);
          ɵɵadvance();
          ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
          ɵɵadvance(2);
          ɵɵconditional(ctx.tfootTemplate ? 5 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableContentComponent, [{
    type: Component,
    args: [{
      selector: "table[nz-table-content]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    @for (width of listOfColWidth; track $index) {
      <col [style.width]="width" [style.minWidth]="width" />
    }
    @if (theadTemplate) {
      <thead class="ant-table-thead">
        <ng-template [ngTemplateOutlet]="theadTemplate"></ng-template>
      </thead>
    }
    <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    <ng-content></ng-content>
    @if (tfootTemplate) {
      <tfoot class="ant-table-summary">
        <ng-template [ngTemplateOutlet]="tfootTemplate"></ng-template>
      </tfoot>
    }
  `,
      host: {
        "[style.table-layout]": "tableLayout",
        "[class.ant-table-fixed]": "scrollX",
        "[style.width]": "scrollX",
        "[style.min-width]": `scrollX ? '100%' : null`
      },
      imports: [NgTemplateOutlet]
    }]
  }], null, {
    tableLayout: [{
      type: Input
    }],
    theadTemplate: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    tfootTemplate: [{
      type: Input
    }],
    listOfColWidth: [{
      type: Input
    }],
    scrollX: [{
      type: Input
    }]
  });
})();
var NzTableFixedRowComponent = class _NzTableFixedRowComponent {
  constructor(nzTableStyleService, renderer) {
    this.nzTableStyleService = nzTableStyleService;
    this.renderer = renderer;
    this.hostWidth$ = new BehaviorSubject(null);
    this.enableAutoMeasure$ = new BehaviorSubject(false);
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    if (this.nzTableStyleService) {
      const {
        enableAutoMeasure$,
        hostWidth$
      } = this.nzTableStyleService;
      enableAutoMeasure$.pipe(takeUntil(this.destroy$)).subscribe(this.enableAutoMeasure$);
      hostWidth$.pipe(takeUntil(this.destroy$)).subscribe(this.hostWidth$);
    }
  }
  ngAfterViewInit() {
    this.nzTableStyleService.columnCount$.pipe(takeUntil(this.destroy$)).subscribe((count) => {
      this.renderer.setAttribute(this.tdElement.nativeElement, "colspan", `${count}`);
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzTableFixedRowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTableFixedRowComponent)(ɵɵdirectiveInject(NzTableStyleService), ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTableFixedRowComponent,
      selectors: [["tr", "nz-table-fixed-row", ""], ["tr", "nzExpand", ""]],
      viewQuery: function NzTableFixedRowComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c7, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tdElement = _t.first);
        }
      },
      attrs: _c8,
      ngContentSelectors: _c04,
      decls: 7,
      vars: 3,
      consts: [["tdElement", ""], ["contentTemplate", ""], [1, "nz-disable-td", "ant-table-cell"], [1, "ant-table-expanded-row-fixed", 2, "position", "sticky", "left", "0", "overflow", "hidden", 3, "width"], [3, "ngTemplateOutlet"], [1, "ant-table-expanded-row-fixed", 2, "position", "sticky", "left", "0", "overflow", "hidden"]],
      template: function NzTableFixedRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "td", 2, 0);
          ɵɵtemplate(2, NzTableFixedRowComponent_Conditional_2_Template, 3, 5, "div", 3);
          ɵɵpipe(3, "async");
          ɵɵtemplate(4, NzTableFixedRowComponent_Conditional_4_Template, 1, 1, null, 4);
          ɵɵelementEnd();
          ɵɵtemplate(5, NzTableFixedRowComponent_ng_template_5_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵconditional(ɵɵpipeBind1(3, 1, ctx.enableAutoMeasure$) ? 2 : 4);
        }
      },
      dependencies: [AsyncPipe, NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableFixedRowComponent, [{
    type: Component,
    args: [{
      selector: "tr[nz-table-fixed-row], tr[nzExpand]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    <td class="nz-disable-td ant-table-cell" #tdElement>
      @if (enableAutoMeasure$ | async) {
        <div
          class="ant-table-expanded-row-fixed"
          style="position: sticky; left: 0; overflow: hidden;"
          [style.width.px]="hostWidth$ | async"
        >
          <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
        </div>
      } @else {
        <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      }
    </td>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
      imports: [AsyncPipe, NgTemplateOutlet]
    }]
  }], () => [{
    type: NzTableStyleService
  }, {
    type: Renderer2
  }], {
    tdElement: [{
      type: ViewChild,
      args: ["tdElement", {
        static: true
      }]
    }]
  });
})();
var NzTableInnerDefaultComponent = class _NzTableInnerDefaultComponent {
  constructor() {
    this.tableLayout = "auto";
    this.listOfColWidth = [];
    this.theadTemplate = null;
    this.contentTemplate = null;
    this.tfootTemplate = null;
  }
  static {
    this.ɵfac = function NzTableInnerDefaultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTableInnerDefaultComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTableInnerDefaultComponent,
      selectors: [["nz-table-inner-default"]],
      hostAttrs: [1, "ant-table-container"],
      inputs: {
        tableLayout: "tableLayout",
        listOfColWidth: "listOfColWidth",
        theadTemplate: "theadTemplate",
        contentTemplate: "contentTemplate",
        tfootTemplate: "tfootTemplate"
      },
      decls: 2,
      vars: 5,
      consts: [[1, "ant-table-content"], ["nz-table-content", "", 3, "contentTemplate", "tableLayout", "listOfColWidth", "theadTemplate", "tfootTemplate"]],
      template: function NzTableInnerDefaultComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵelement(1, "table", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("contentTemplate", ctx.contentTemplate)("tableLayout", ctx.tableLayout)("listOfColWidth", ctx.listOfColWidth)("theadTemplate", ctx.theadTemplate)("tfootTemplate", ctx.tfootTemplate);
        }
      },
      dependencies: [NzTableContentComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableInnerDefaultComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-inner-default",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    <div class="ant-table-content">
      <table
        nz-table-content
        [contentTemplate]="contentTemplate"
        [tableLayout]="tableLayout"
        [listOfColWidth]="listOfColWidth"
        [theadTemplate]="theadTemplate"
        [tfootTemplate]="tfootTemplate"
      ></table>
    </div>
  `,
      host: {
        class: "ant-table-container"
      },
      imports: [NzTableContentComponent]
    }]
  }], null, {
    tableLayout: [{
      type: Input
    }],
    listOfColWidth: [{
      type: Input
    }],
    theadTemplate: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    tfootTemplate: [{
      type: Input
    }]
  });
})();
var NzTrMeasureComponent = class _NzTrMeasureComponent {
  constructor(nzResizeObserver, ngZone) {
    this.nzResizeObserver = nzResizeObserver;
    this.ngZone = ngZone;
    this.listOfMeasureColumn = [];
    this.listOfAutoWidth = new EventEmitter();
    this.destroy$ = new Subject();
  }
  ngAfterViewInit() {
    this.listOfTdElement.changes.pipe(startWith(this.listOfTdElement)).pipe(switchMap((list) => combineLatest(list.toArray().map((item) => this.nzResizeObserver.observe(item).pipe(map(([entry]) => {
      const {
        width
      } = entry.target.getBoundingClientRect();
      return Math.floor(width);
    }))))), debounceTime(16), takeUntil(this.destroy$)).subscribe((data) => {
      if (this.ngZone instanceof NgZone && NgZone.isInAngularZone()) {
        this.listOfAutoWidth.next(data);
      } else {
        this.ngZone.run(() => this.listOfAutoWidth.next(data));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzTrMeasureComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTrMeasureComponent)(ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(NgZone));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTrMeasureComponent,
      selectors: [["tr", "nz-table-measure-row", ""]],
      viewQuery: function NzTrMeasureComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c7, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfTdElement = _t);
        }
      },
      hostAttrs: [1, "ant-table-measure-now"],
      inputs: {
        listOfMeasureColumn: "listOfMeasureColumn"
      },
      outputs: {
        listOfAutoWidth: "listOfAutoWidth"
      },
      attrs: _c9,
      decls: 2,
      vars: 0,
      consts: [["tdElement", ""], [1, "nz-disable-td", 2, "padding", "0", "border", "0", "height", "0"]],
      template: function NzTrMeasureComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, NzTrMeasureComponent_For_1_Template, 2, 0, "td", 1, ɵɵrepeaterTrackByIndex);
        }
        if (rf & 2) {
          ɵɵrepeater(ctx.listOfMeasureColumn);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTrMeasureComponent, [{
    type: Component,
    args: [{
      selector: "tr[nz-table-measure-row]",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    @for (th of listOfMeasureColumn; track $index) {
      <td #tdElement class="nz-disable-td" style="padding: 0; border: 0; height: 0;"></td>
    }
  `,
      host: {
        class: "ant-table-measure-now"
      }
    }]
  }], () => [{
    type: NzResizeObserver
  }, {
    type: NgZone
  }], {
    listOfMeasureColumn: [{
      type: Input
    }],
    listOfAutoWidth: [{
      type: Output
    }],
    listOfTdElement: [{
      type: ViewChildren,
      args: ["tdElement"]
    }]
  });
})();
var NzTbodyComponent = class _NzTbodyComponent {
  constructor() {
    this.isInsideTable = false;
    this.showEmpty$ = new BehaviorSubject(false);
    this.noResult$ = new BehaviorSubject(void 0);
    this.listOfMeasureColumn$ = new BehaviorSubject([]);
    this.destroy$ = new Subject();
    this.nzTableStyleService = inject(NzTableStyleService, {
      optional: true
    });
    this.isInsideTable = !!this.nzTableStyleService;
    if (this.nzTableStyleService) {
      const {
        showEmpty$,
        noResult$,
        listOfMeasureColumn$
      } = this.nzTableStyleService;
      noResult$.pipe(takeUntil(this.destroy$)).subscribe(this.noResult$);
      listOfMeasureColumn$.pipe(takeUntil(this.destroy$)).subscribe(this.listOfMeasureColumn$);
      showEmpty$.pipe(takeUntil(this.destroy$)).subscribe(this.showEmpty$);
    }
  }
  onListOfAutoWidthChange(listOfAutoWidth) {
    this.nzTableStyleService?.setListOfAutoWidth(listOfAutoWidth);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzTbodyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTbodyComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTbodyComponent,
      selectors: [["tbody"]],
      hostVars: 2,
      hostBindings: function NzTbodyComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-table-tbody", ctx.isInsideTable);
        }
      },
      ngContentSelectors: _c04,
      decls: 5,
      vars: 6,
      consts: [["nz-table-fixed-row", "", 1, "ant-table-placeholder"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn"], ["nz-table-measure-row", "", 3, "listOfAutoWidth", "listOfMeasureColumn"], ["nzComponentName", "table", 3, "specificContent"]],
      template: function NzTbodyComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NzTbodyComponent_Conditional_0_Template, 1, 1);
          ɵɵpipe(1, "async");
          ɵɵprojection(2);
          ɵɵtemplate(3, NzTbodyComponent_Conditional_3_Template, 3, 3, "tr", 0);
          ɵɵpipe(4, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(1, 2, ctx.listOfMeasureColumn$)) ? 0 : -1, tmp_0_0);
          ɵɵadvance(3);
          ɵɵconditional(ɵɵpipeBind1(4, 4, ctx.showEmpty$) ? 3 : -1);
        }
      },
      dependencies: [AsyncPipe, NzTrMeasureComponent, NzTableFixedRowComponent, NzEmptyModule, NzEmbedEmptyComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTbodyComponent, [{
    type: Component,
    args: [{
      selector: "tbody",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (listOfMeasureColumn$ | async; as listOfMeasureColumn) {
      @if (isInsideTable && listOfMeasureColumn.length) {
        <tr
          nz-table-measure-row
          [listOfMeasureColumn]="listOfMeasureColumn"
          (listOfAutoWidth)="onListOfAutoWidthChange($event)"
        ></tr>
      }
    }
    <ng-content></ng-content>
    @if (showEmpty$ | async) {
      <tr class="ant-table-placeholder" nz-table-fixed-row>
        <nz-embed-empty nzComponentName="table" [specificContent]="(noResult$ | async)!"></nz-embed-empty>
      </tr>
    }
  `,
      host: {
        "[class.ant-table-tbody]": "isInsideTable"
      },
      imports: [AsyncPipe, NzTrMeasureComponent, NzTableFixedRowComponent, NzEmptyModule]
    }]
  }], () => [], null);
})();
var NzTableInnerScrollComponent = class _NzTableInnerScrollComponent {
  setScrollPositionClassName(clear = false) {
    const {
      scrollWidth,
      scrollLeft,
      clientWidth
    } = this.tableBodyElement.nativeElement;
    const leftClassName = "ant-table-ping-left";
    const rightClassName = "ant-table-ping-right";
    if (scrollWidth === clientWidth && scrollWidth !== 0 || clear) {
      this.renderer.removeClass(this.tableMainElement, leftClassName);
      this.renderer.removeClass(this.tableMainElement, rightClassName);
    } else if (scrollLeft === 0) {
      this.renderer.removeClass(this.tableMainElement, leftClassName);
      this.renderer.addClass(this.tableMainElement, rightClassName);
    } else if (scrollWidth === scrollLeft + clientWidth) {
      this.renderer.removeClass(this.tableMainElement, rightClassName);
      this.renderer.addClass(this.tableMainElement, leftClassName);
    } else {
      this.renderer.addClass(this.tableMainElement, leftClassName);
      this.renderer.addClass(this.tableMainElement, rightClassName);
    }
  }
  constructor(renderer, ngZone, platform, resizeService) {
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.platform = platform;
    this.resizeService = resizeService;
    this.data = [];
    this.scrollX = null;
    this.scrollY = null;
    this.contentTemplate = null;
    this.widthConfig = [];
    this.listOfColWidth = [];
    this.theadTemplate = null;
    this.tfootTemplate = null;
    this.tfootFixed = null;
    this.virtualTemplate = null;
    this.virtualItemSize = 0;
    this.virtualMaxBufferPx = 200;
    this.virtualMinBufferPx = 100;
    this.virtualForTrackBy = (index) => index;
    this.headerStyleMap = {};
    this.bodyStyleMap = {};
    this.verticalScrollBarWidth = 0;
    this.noDataVirtualHeight = "182px";
    this.data$ = new Subject();
    this.scroll$ = new Subject();
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    const {
      scrollX,
      scrollY,
      data
    } = changes;
    if (scrollX || scrollY) {
      const hasVerticalScrollBar = this.verticalScrollBarWidth !== 0;
      this.headerStyleMap = {
        overflowX: "hidden",
        overflowY: this.scrollY && hasVerticalScrollBar ? "scroll" : "hidden"
      };
      this.bodyStyleMap = {
        overflowY: this.scrollY ? "scroll" : "hidden",
        overflowX: this.scrollX ? "auto" : null,
        maxHeight: this.scrollY
      };
      this.ngZone.runOutsideAngular(() => this.scroll$.next());
    }
    if (data) {
      this.ngZone.runOutsideAngular(() => this.data$.next());
    }
  }
  ngAfterViewInit() {
    if (this.platform.isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        const scrollEvent$ = this.scroll$.pipe(startWith(null), delay(0), switchMap(() => fromEventOutsideAngular(this.tableBodyElement.nativeElement, "scroll").pipe(startWith(true))), takeUntil(this.destroy$));
        const resize$ = this.resizeService.subscribe().pipe(takeUntil(this.destroy$));
        const data$ = this.data$.pipe(takeUntil(this.destroy$));
        const setClassName$ = merge(scrollEvent$, resize$, data$, this.scroll$).pipe(startWith(true), delay(0), takeUntil(this.destroy$));
        setClassName$.subscribe(() => this.setScrollPositionClassName());
        scrollEvent$.pipe(filter(() => !!this.scrollY)).subscribe(() => {
          this.tableHeaderElement.nativeElement.scrollLeft = this.tableBodyElement.nativeElement.scrollLeft;
          if (this.tableFootElement) {
            this.tableFootElement.nativeElement.scrollLeft = this.tableBodyElement.nativeElement.scrollLeft;
          }
        });
      });
    }
  }
  ngOnDestroy() {
    this.setScrollPositionClassName(true);
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzTableInnerScrollComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTableInnerScrollComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzResizeService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTableInnerScrollComponent,
      selectors: [["nz-table-inner-scroll"]],
      viewQuery: function NzTableInnerScrollComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c10, 5, ElementRef);
          ɵɵviewQuery(_c11, 5, ElementRef);
          ɵɵviewQuery(_c122, 5, ElementRef);
          ɵɵviewQuery(CdkVirtualScrollViewport, 5, CdkVirtualScrollViewport);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableHeaderElement = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableBodyElement = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableFootElement = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
        }
      },
      hostAttrs: [1, "ant-table-container"],
      inputs: {
        data: "data",
        scrollX: "scrollX",
        scrollY: "scrollY",
        contentTemplate: "contentTemplate",
        widthConfig: "widthConfig",
        listOfColWidth: "listOfColWidth",
        theadTemplate: "theadTemplate",
        tfootTemplate: "tfootTemplate",
        tfootFixed: "tfootFixed",
        virtualTemplate: "virtualTemplate",
        virtualItemSize: "virtualItemSize",
        virtualMaxBufferPx: "virtualMaxBufferPx",
        virtualMinBufferPx: "virtualMinBufferPx",
        tableMainElement: "tableMainElement",
        virtualForTrackBy: "virtualForTrackBy",
        verticalScrollBarWidth: "verticalScrollBarWidth",
        noDataVirtualHeight: "noDataVirtualHeight"
      },
      features: [ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 1,
      consts: [["tableHeaderElement", ""], ["tableBodyElement", ""], ["tableFootElement", ""], [1, "ant-table-content", 3, "style"], [1, "ant-table-header", "nz-table-hide-scrollbar"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate", "tfootTemplate"], [1, "ant-table-body", 3, "style"], [3, "itemSize", "maxBufferPx", "minBufferPx", "height"], [1, "ant-table-summary", 3, "style"], [1, "ant-table-body"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "contentTemplate"], [3, "itemSize", "maxBufferPx", "minBufferPx"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-table-summary"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "tfootTemplate"], [1, "ant-table-content"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate", "contentTemplate", "tfootTemplate"]],
      template: function NzTableInnerScrollComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzTableInnerScrollComponent_Conditional_0_Template, 6, 8)(1, NzTableInnerScrollComponent_Conditional_1_Template, 3, 7, "div", 3);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.scrollY ? 0 : 1);
        }
      },
      dependencies: [NzTableContentComponent, ScrollingModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, NgTemplateOutlet, NzTbodyComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableInnerScrollComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-inner-scroll",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (scrollY) {
      <div #tableHeaderElement [style]="headerStyleMap" class="ant-table-header nz-table-hide-scrollbar">
        <table
          nz-table-content
          tableLayout="fixed"
          [scrollX]="scrollX"
          [listOfColWidth]="listOfColWidth"
          [theadTemplate]="theadTemplate"
          [tfootTemplate]="tfootFixed === 'top' ? tfootTemplate : null"
        ></table>
      </div>
      @if (!virtualTemplate) {
        <div #tableBodyElement class="ant-table-body" [style]="bodyStyleMap">
          <table
            nz-table-content
            tableLayout="fixed"
            [scrollX]="scrollX"
            [listOfColWidth]="listOfColWidth"
            [contentTemplate]="contentTemplate"
          ></table>
        </div>
      } @else {
        <cdk-virtual-scroll-viewport
          #tableBodyElement
          [itemSize]="virtualItemSize"
          [maxBufferPx]="virtualMaxBufferPx"
          [minBufferPx]="virtualMinBufferPx"
          [style.height]="data.length ? scrollY : noDataVirtualHeight"
        >
          <table nz-table-content tableLayout="fixed" [scrollX]="scrollX" [listOfColWidth]="listOfColWidth">
            <tbody>
              <ng-container *cdkVirtualFor="let item of data; let i = index; trackBy: virtualForTrackBy">
                <ng-template
                  [ngTemplateOutlet]="virtualTemplate"
                  [ngTemplateOutletContext]="{ $implicit: item, index: i }"
                ></ng-template>
              </ng-container>
            </tbody>
          </table>
        </cdk-virtual-scroll-viewport>
      }
      @if (tfootFixed === 'bottom') {
        <div #tableFootElement class="ant-table-summary" [style]="headerStyleMap">
          <table
            nz-table-content
            tableLayout="fixed"
            [scrollX]="scrollX"
            [listOfColWidth]="listOfColWidth"
            [tfootTemplate]="tfootTemplate"
          ></table>
        </div>
      }
    } @else {
      <div class="ant-table-content" #tableBodyElement [style]="bodyStyleMap">
        <table
          nz-table-content
          tableLayout="fixed"
          [scrollX]="scrollX"
          [listOfColWidth]="listOfColWidth"
          [theadTemplate]="theadTemplate"
          [contentTemplate]="contentTemplate"
          [tfootTemplate]="tfootTemplate"
        ></table>
      </div>
    }
  `,
      host: {
        class: "ant-table-container"
      },
      imports: [NzTableContentComponent, ScrollingModule, NgTemplateOutlet, NzTbodyComponent]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: NzResizeService
  }], {
    data: [{
      type: Input
    }],
    scrollX: [{
      type: Input
    }],
    scrollY: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    widthConfig: [{
      type: Input
    }],
    listOfColWidth: [{
      type: Input
    }],
    theadTemplate: [{
      type: Input
    }],
    tfootTemplate: [{
      type: Input
    }],
    tfootFixed: [{
      type: Input
    }],
    virtualTemplate: [{
      type: Input
    }],
    virtualItemSize: [{
      type: Input
    }],
    virtualMaxBufferPx: [{
      type: Input
    }],
    virtualMinBufferPx: [{
      type: Input
    }],
    tableMainElement: [{
      type: Input
    }],
    virtualForTrackBy: [{
      type: Input
    }],
    tableHeaderElement: [{
      type: ViewChild,
      args: ["tableHeaderElement", {
        read: ElementRef
      }]
    }],
    tableBodyElement: [{
      type: ViewChild,
      args: ["tableBodyElement", {
        read: ElementRef
      }]
    }],
    tableFootElement: [{
      type: ViewChild,
      args: ["tableFootElement", {
        read: ElementRef
      }]
    }],
    cdkVirtualScrollViewport: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport, {
        read: CdkVirtualScrollViewport
      }]
    }],
    verticalScrollBarWidth: [{
      type: Input
    }],
    noDataVirtualHeight: [{
      type: Input
    }]
  });
})();
var NzTableVirtualScrollDirective = class _NzTableVirtualScrollDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  static {
    this.ɵfac = function NzTableVirtualScrollDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTableVirtualScrollDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTableVirtualScrollDirective,
      selectors: [["", "nz-virtual-scroll", ""]],
      exportAs: ["nzVirtualScroll"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableVirtualScrollDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-virtual-scroll]",
      exportAs: "nzVirtualScroll"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NzTableTitleFooterComponent = class _NzTableTitleFooterComponent {
  constructor() {
    this.title = null;
    this.footer = null;
  }
  static {
    this.ɵfac = function NzTableTitleFooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTableTitleFooterComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTableTitleFooterComponent,
      selectors: [["nz-table-title-footer"]],
      hostVars: 4,
      hostBindings: function NzTableTitleFooterComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-table-title", ctx.title !== null)("ant-table-footer", ctx.footer !== null);
        }
      },
      inputs: {
        title: "title",
        footer: "footer"
      },
      decls: 2,
      vars: 2,
      consts: [[4, "nzStringTemplateOutlet"]],
      template: function NzTableTitleFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzTableTitleFooterComponent_ng_container_0_Template, 2, 1, "ng-container", 0)(1, NzTableTitleFooterComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("nzStringTemplateOutlet", ctx.title);
          ɵɵadvance();
          ɵɵproperty("nzStringTemplateOutlet", ctx.footer);
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableTitleFooterComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-title-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
    <ng-container *nzStringTemplateOutlet="footer">{{ footer }}</ng-container>
  `,
      host: {
        "[class.ant-table-title]": `title !== null`,
        "[class.ant-table-footer]": `footer !== null`
      },
      imports: [NzOutletModule]
    }]
  }], null, {
    title: [{
      type: Input
    }],
    footer: [{
      type: Input
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME3 = "table";
var NzTableComponent = (() => {
  let _nzLoadingIndicator_decorators;
  let _nzLoadingIndicator_initializers = [];
  let _nzLoadingIndicator_extraInitializers = [];
  let _nzBordered_decorators;
  let _nzBordered_initializers = [];
  let _nzBordered_extraInitializers = [];
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  let _nzShowSizeChanger_decorators;
  let _nzShowSizeChanger_initializers = [];
  let _nzShowSizeChanger_extraInitializers = [];
  let _nzHideOnSinglePage_decorators;
  let _nzHideOnSinglePage_initializers = [];
  let _nzHideOnSinglePage_extraInitializers = [];
  let _nzShowQuickJumper_decorators;
  let _nzShowQuickJumper_initializers = [];
  let _nzShowQuickJumper_extraInitializers = [];
  let _nzSimple_decorators;
  let _nzSimple_initializers = [];
  let _nzSimple_extraInitializers = [];
  return class NzTableComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzLoadingIndicator_decorators = [WithConfig()];
      _nzBordered_decorators = [WithConfig()];
      _nzSize_decorators = [WithConfig()];
      _nzShowSizeChanger_decorators = [WithConfig()];
      _nzHideOnSinglePage_decorators = [WithConfig()];
      _nzShowQuickJumper_decorators = [WithConfig()];
      _nzSimple_decorators = [WithConfig()];
      __esDecorate(null, null, _nzLoadingIndicator_decorators, {
        kind: "field",
        name: "nzLoadingIndicator",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzLoadingIndicator" in obj,
          get: (obj) => obj.nzLoadingIndicator,
          set: (obj, value) => {
            obj.nzLoadingIndicator = value;
          }
        },
        metadata: _metadata
      }, _nzLoadingIndicator_initializers, _nzLoadingIndicator_extraInitializers);
      __esDecorate(null, null, _nzBordered_decorators, {
        kind: "field",
        name: "nzBordered",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzBordered" in obj,
          get: (obj) => obj.nzBordered,
          set: (obj, value) => {
            obj.nzBordered = value;
          }
        },
        metadata: _metadata
      }, _nzBordered_initializers, _nzBordered_extraInitializers);
      __esDecorate(null, null, _nzSize_decorators, {
        kind: "field",
        name: "nzSize",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSize" in obj,
          get: (obj) => obj.nzSize,
          set: (obj, value) => {
            obj.nzSize = value;
          }
        },
        metadata: _metadata
      }, _nzSize_initializers, _nzSize_extraInitializers);
      __esDecorate(null, null, _nzShowSizeChanger_decorators, {
        kind: "field",
        name: "nzShowSizeChanger",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowSizeChanger" in obj,
          get: (obj) => obj.nzShowSizeChanger,
          set: (obj, value) => {
            obj.nzShowSizeChanger = value;
          }
        },
        metadata: _metadata
      }, _nzShowSizeChanger_initializers, _nzShowSizeChanger_extraInitializers);
      __esDecorate(null, null, _nzHideOnSinglePage_decorators, {
        kind: "field",
        name: "nzHideOnSinglePage",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzHideOnSinglePage" in obj,
          get: (obj) => obj.nzHideOnSinglePage,
          set: (obj, value) => {
            obj.nzHideOnSinglePage = value;
          }
        },
        metadata: _metadata
      }, _nzHideOnSinglePage_initializers, _nzHideOnSinglePage_extraInitializers);
      __esDecorate(null, null, _nzShowQuickJumper_decorators, {
        kind: "field",
        name: "nzShowQuickJumper",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowQuickJumper" in obj,
          get: (obj) => obj.nzShowQuickJumper,
          set: (obj, value) => {
            obj.nzShowQuickJumper = value;
          }
        },
        metadata: _metadata
      }, _nzShowQuickJumper_initializers, _nzShowQuickJumper_extraInitializers);
      __esDecorate(null, null, _nzSimple_decorators, {
        kind: "field",
        name: "nzSimple",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSimple" in obj,
          get: (obj) => obj.nzSimple,
          set: (obj, value) => {
            obj.nzSimple = value;
          }
        },
        metadata: _metadata
      }, _nzSimple_initializers, _nzSimple_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    onPageSizeChange(size) {
      this.nzTableDataService.updatePageSize(size);
    }
    onPageIndexChange(index) {
      this.nzTableDataService.updatePageIndex(index);
    }
    constructor(elementRef, nzResizeObserver, nzConfigService, cdr, nzTableStyleService, nzTableDataService, directionality) {
      this.elementRef = elementRef;
      this.nzResizeObserver = nzResizeObserver;
      this.nzConfigService = nzConfigService;
      this.cdr = cdr;
      this.nzTableStyleService = nzTableStyleService;
      this.nzTableDataService = nzTableDataService;
      this.directionality = directionality;
      this._nzModuleName = NZ_CONFIG_MODULE_NAME3;
      this.nzTableLayout = "auto";
      this.nzShowTotal = null;
      this.nzItemRender = null;
      this.nzTitle = null;
      this.nzFooter = null;
      this.nzNoResult = void 0;
      this.nzPageSizeOptions = [10, 20, 30, 40, 50];
      this.nzVirtualItemSize = 0;
      this.nzVirtualMaxBufferPx = 200;
      this.nzVirtualMinBufferPx = 100;
      this.nzVirtualForTrackBy = (index) => index;
      this.nzLoadingDelay = 0;
      this.nzPageIndex = 1;
      this.nzPageSize = 10;
      this.nzTotal = 0;
      this.nzWidthConfig = [];
      this.nzData = [];
      this.nzCustomColumn = [];
      this.nzPaginationPosition = "bottom";
      this.nzScroll = {
        x: null,
        y: null
      };
      this.noDataVirtualHeight = "182px";
      this.nzPaginationType = "default";
      this.nzFrontPagination = true;
      this.nzTemplateMode = false;
      this.nzShowPagination = true;
      this.nzLoading = false;
      this.nzOuterBordered = false;
      this.nzLoadingIndicator = __runInitializers(this, _nzLoadingIndicator_initializers, null);
      this.nzBordered = (__runInitializers(this, _nzLoadingIndicator_extraInitializers), __runInitializers(this, _nzBordered_initializers, false));
      this.nzSize = (__runInitializers(this, _nzBordered_extraInitializers), __runInitializers(this, _nzSize_initializers, "default"));
      this.nzShowSizeChanger = (__runInitializers(this, _nzSize_extraInitializers), __runInitializers(this, _nzShowSizeChanger_initializers, false));
      this.nzHideOnSinglePage = (__runInitializers(this, _nzShowSizeChanger_extraInitializers), __runInitializers(this, _nzHideOnSinglePage_initializers, false));
      this.nzShowQuickJumper = (__runInitializers(this, _nzHideOnSinglePage_extraInitializers), __runInitializers(this, _nzShowQuickJumper_initializers, false));
      this.nzSimple = (__runInitializers(this, _nzShowQuickJumper_extraInitializers), __runInitializers(this, _nzSimple_initializers, false));
      this.nzPageSizeChange = (__runInitializers(this, _nzSimple_extraInitializers), new EventEmitter());
      this.nzPageIndexChange = new EventEmitter();
      this.nzQueryParams = new EventEmitter();
      this.nzCurrentPageDataChange = new EventEmitter();
      this.nzCustomColumnChange = new EventEmitter();
      this.data = [];
      this.scrollX = null;
      this.scrollY = null;
      this.theadTemplate = null;
      this.tfootTemplate = null;
      this.tfootFixed = null;
      this.listOfAutoColWidth = [];
      this.listOfManualColWidth = [];
      this.hasFixLeft = false;
      this.hasFixRight = false;
      this.showPagination = true;
      this.destroy$ = new Subject();
      this.templateMode$ = new BehaviorSubject(false);
      this.dir = "ltr";
      this.verticalScrollBarWidth = 0;
      this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME3).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.cdr.markForCheck();
      });
    }
    ngOnInit() {
      const {
        pageIndexDistinct$,
        pageSizeDistinct$,
        listOfCurrentPageData$,
        total$,
        queryParams$,
        listOfCustomColumn$
      } = this.nzTableDataService;
      const {
        theadTemplate$,
        tfootTemplate$,
        tfootFixed$,
        hasFixLeft$,
        hasFixRight$
      } = this.nzTableStyleService;
      this.dir = this.directionality.value;
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      queryParams$.pipe(takeUntil(this.destroy$)).subscribe(this.nzQueryParams);
      pageIndexDistinct$.pipe(takeUntil(this.destroy$)).subscribe((pageIndex) => {
        if (pageIndex !== this.nzPageIndex) {
          this.nzPageIndex = pageIndex;
          this.nzPageIndexChange.next(pageIndex);
        }
      });
      pageSizeDistinct$.pipe(takeUntil(this.destroy$)).subscribe((pageSize) => {
        if (pageSize !== this.nzPageSize) {
          this.nzPageSize = pageSize;
          this.nzPageSizeChange.next(pageSize);
        }
      });
      total$.pipe(takeUntil(this.destroy$), filter(() => this.nzFrontPagination)).subscribe((total) => {
        if (total !== this.nzTotal) {
          this.nzTotal = total;
          this.cdr.markForCheck();
        }
      });
      listOfCurrentPageData$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
        this.data = data;
        this.nzCurrentPageDataChange.next(data);
        this.cdr.markForCheck();
      });
      listOfCustomColumn$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
        this.nzCustomColumn = data;
        this.nzCustomColumnChange.next(data);
        this.cdr.markForCheck();
      });
      theadTemplate$.pipe(takeUntil(this.destroy$)).subscribe((theadTemplate) => {
        this.theadTemplate = theadTemplate;
        this.cdr.markForCheck();
      });
      combineLatest([tfootTemplate$, tfootFixed$]).pipe(takeUntil(this.destroy$)).subscribe(([tfootTemplate, tfootFixed]) => {
        this.tfootTemplate = tfootTemplate;
        this.tfootFixed = tfootFixed;
        this.cdr.markForCheck();
      });
      hasFixLeft$.pipe(takeUntil(this.destroy$)).subscribe((hasFixLeft) => {
        this.hasFixLeft = hasFixLeft;
        this.cdr.markForCheck();
      });
      hasFixRight$.pipe(takeUntil(this.destroy$)).subscribe((hasFixRight) => {
        this.hasFixRight = hasFixRight;
        this.cdr.markForCheck();
      });
      combineLatest([total$, this.templateMode$]).pipe(map(([total, templateMode]) => total === 0 && !templateMode), takeUntil(this.destroy$)).subscribe((empty) => {
        this.nzTableStyleService.setShowEmpty(empty);
      });
      this.verticalScrollBarWidth = measureScrollbar("vertical");
      this.nzTableStyleService.listOfListOfThWidthPx$.pipe(takeUntil(this.destroy$)).subscribe((listOfWidth) => {
        this.listOfAutoColWidth = listOfWidth;
        this.cdr.markForCheck();
      });
      this.nzTableStyleService.manualWidthConfigPx$.pipe(takeUntil(this.destroy$)).subscribe((listOfWidth) => {
        this.listOfManualColWidth = listOfWidth;
        this.cdr.markForCheck();
      });
    }
    ngOnChanges(changes) {
      const {
        nzScroll,
        nzPageIndex,
        nzPageSize,
        nzFrontPagination,
        nzData,
        nzCustomColumn,
        nzWidthConfig,
        nzNoResult,
        nzTemplateMode
      } = changes;
      if (nzPageIndex) {
        this.nzTableDataService.updatePageIndex(this.nzPageIndex);
      }
      if (nzPageSize) {
        this.nzTableDataService.updatePageSize(this.nzPageSize);
      }
      if (nzData) {
        this.nzData = this.nzData || [];
        this.nzTableDataService.updateListOfData(this.nzData);
      }
      if (nzCustomColumn) {
        this.nzCustomColumn = this.nzCustomColumn || [];
        this.nzTableDataService.updateListOfCustomColumn(this.nzCustomColumn);
      }
      if (nzFrontPagination) {
        this.nzTableDataService.updateFrontPagination(this.nzFrontPagination);
      }
      if (nzScroll) {
        this.setScrollOnChanges();
      }
      if (nzWidthConfig) {
        this.nzTableStyleService.setTableWidthConfig(this.nzWidthConfig);
      }
      if (nzTemplateMode) {
        this.templateMode$.next(this.nzTemplateMode);
      }
      if (nzNoResult) {
        this.nzTableStyleService.setNoResult(this.nzNoResult);
      }
      this.updateShowPagination();
    }
    ngAfterViewInit() {
      this.nzResizeObserver.observe(this.elementRef).pipe(map(([entry]) => {
        const {
          width
        } = entry.target.getBoundingClientRect();
        const scrollBarWidth = this.scrollY ? this.verticalScrollBarWidth : 0;
        return Math.floor(width - scrollBarWidth);
      }), takeUntil(this.destroy$)).subscribe(this.nzTableStyleService.hostWidth$);
      if (this.nzTableInnerScrollComponent && this.nzTableInnerScrollComponent.cdkVirtualScrollViewport) {
        this.cdkVirtualScrollViewport = this.nzTableInnerScrollComponent.cdkVirtualScrollViewport;
      }
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    setScrollOnChanges() {
      this.scrollX = this.nzScroll && this.nzScroll.x || null;
      this.scrollY = this.nzScroll && this.nzScroll.y || null;
      this.nzTableStyleService.setScroll(this.scrollX, this.scrollY);
    }
    updateShowPagination() {
      this.showPagination = this.nzHideOnSinglePage && this.nzData.length > this.nzPageSize || this.nzData.length > 0 && !this.nzHideOnSinglePage || !this.nzFrontPagination && this.nzTotal > this.nzPageSize;
    }
    static {
      this.ɵfac = function NzTableComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NzTableComponent2)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzTableStyleService), ɵɵdirectiveInject(NzTableDataService), ɵɵdirectiveInject(Directionality));
      };
    }
    static {
      this.ɵcmp = ɵɵdefineComponent({
        type: NzTableComponent2,
        selectors: [["nz-table"]],
        contentQueries: function NzTableComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzTableVirtualScrollDirective, 5);
          }
          if (rf & 2) {
            let _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzVirtualScrollDirective = _t.first);
          }
        },
        viewQuery: function NzTableComponent_Query(rf, ctx) {
          if (rf & 1) {
            ɵɵviewQuery(NzTableInnerScrollComponent, 5);
          }
          if (rf & 2) {
            let _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTableInnerScrollComponent = _t.first);
          }
        },
        hostAttrs: [1, "ant-table-wrapper"],
        hostVars: 4,
        hostBindings: function NzTableComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            ɵɵclassProp("ant-table-wrapper-rtl", ctx.dir === "rtl")("ant-table-custom-column", ctx.nzCustomColumn.length);
          }
        },
        inputs: {
          nzTableLayout: "nzTableLayout",
          nzShowTotal: "nzShowTotal",
          nzItemRender: "nzItemRender",
          nzTitle: "nzTitle",
          nzFooter: "nzFooter",
          nzNoResult: "nzNoResult",
          nzPageSizeOptions: "nzPageSizeOptions",
          nzVirtualItemSize: "nzVirtualItemSize",
          nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
          nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
          nzVirtualForTrackBy: "nzVirtualForTrackBy",
          nzLoadingDelay: "nzLoadingDelay",
          nzPageIndex: "nzPageIndex",
          nzPageSize: "nzPageSize",
          nzTotal: "nzTotal",
          nzWidthConfig: "nzWidthConfig",
          nzData: "nzData",
          nzCustomColumn: "nzCustomColumn",
          nzPaginationPosition: "nzPaginationPosition",
          nzScroll: "nzScroll",
          noDataVirtualHeight: "noDataVirtualHeight",
          nzPaginationType: "nzPaginationType",
          nzFrontPagination: [2, "nzFrontPagination", "nzFrontPagination", booleanAttribute],
          nzTemplateMode: [2, "nzTemplateMode", "nzTemplateMode", booleanAttribute],
          nzShowPagination: [2, "nzShowPagination", "nzShowPagination", booleanAttribute],
          nzLoading: [2, "nzLoading", "nzLoading", booleanAttribute],
          nzOuterBordered: [2, "nzOuterBordered", "nzOuterBordered", booleanAttribute],
          nzLoadingIndicator: "nzLoadingIndicator",
          nzBordered: [2, "nzBordered", "nzBordered", booleanAttribute],
          nzSize: "nzSize",
          nzShowSizeChanger: [2, "nzShowSizeChanger", "nzShowSizeChanger", booleanAttribute],
          nzHideOnSinglePage: [2, "nzHideOnSinglePage", "nzHideOnSinglePage", booleanAttribute],
          nzShowQuickJumper: [2, "nzShowQuickJumper", "nzShowQuickJumper", booleanAttribute],
          nzSimple: [2, "nzSimple", "nzSimple", booleanAttribute]
        },
        outputs: {
          nzPageSizeChange: "nzPageSizeChange",
          nzPageIndexChange: "nzPageIndexChange",
          nzQueryParams: "nzQueryParams",
          nzCurrentPageDataChange: "nzCurrentPageDataChange",
          nzCustomColumnChange: "nzCustomColumnChange"
        },
        exportAs: ["nzTable"],
        features: [ɵɵProvidersFeature([NzTableStyleService, NzTableDataService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
        ngContentSelectors: _c04,
        decls: 13,
        vars: 26,
        consts: [["tableMainElement", ""], ["paginationTemplate", ""], ["contentTemplate", ""], [3, "nzDelay", "nzSpinning", "nzIndicator"], [3, "ngTemplateOutlet"], [1, "ant-table"], [3, "title"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "tfootTemplate", "tfootFixed", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy", "noDataVirtualHeight"], [3, "tableLayout", "listOfColWidth", "theadTemplate", "contentTemplate", "tfootTemplate"], [3, "footer"], [1, "ant-table-pagination", "ant-table-pagination-right", 3, "hidden", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex"], [1, "ant-table-pagination", "ant-table-pagination-right", 3, "nzPageSizeChange", "nzPageIndexChange", "hidden", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex"]],
        template: function NzTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "nz-spin", 3);
            ɵɵtemplate(1, NzTableComponent_Conditional_1_Template, 1, 1, null, 4);
            ɵɵelementStart(2, "div", 5, 0);
            ɵɵtemplate(4, NzTableComponent_Conditional_4_Template, 1, 1, "nz-table-title-footer", 6)(5, NzTableComponent_Conditional_5_Template, 1, 16, "nz-table-inner-scroll", 7)(6, NzTableComponent_Conditional_6_Template, 1, 5, "nz-table-inner-default", 8)(7, NzTableComponent_Conditional_7_Template, 1, 1, "nz-table-title-footer", 9);
            ɵɵelementEnd();
            ɵɵtemplate(8, NzTableComponent_Conditional_8_Template, 1, 1, null, 4);
            ɵɵelementEnd();
            ɵɵtemplate(9, NzTableComponent_ng_template_9_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(11, NzTableComponent_ng_template_11_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
          }
          if (rf & 2) {
            ɵɵproperty("nzDelay", ctx.nzLoadingDelay)("nzSpinning", ctx.nzLoading)("nzIndicator", ctx.nzLoadingIndicator);
            ɵɵadvance();
            ɵɵconditional(ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "top" ? 1 : -1);
            ɵɵadvance();
            ɵɵclassProp("ant-table-rtl", ctx.dir === "rtl")("ant-table-fixed-header", ctx.nzData.length && ctx.scrollY)("ant-table-fixed-column", ctx.scrollX)("ant-table-has-fix-left", ctx.hasFixLeft)("ant-table-has-fix-right", ctx.hasFixRight)("ant-table-bordered", ctx.nzBordered)("nz-table-out-bordered", ctx.nzOuterBordered && !ctx.nzBordered)("ant-table-middle", ctx.nzSize === "middle")("ant-table-small", ctx.nzSize === "small");
            ɵɵadvance(2);
            ɵɵconditional(ctx.nzTitle ? 4 : -1);
            ɵɵadvance();
            ɵɵconditional(ctx.scrollY || ctx.scrollX ? 5 : 6);
            ɵɵadvance(2);
            ɵɵconditional(ctx.nzFooter ? 7 : -1);
            ɵɵadvance();
            ɵɵconditional(ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "bottom" ? 8 : -1);
          }
        },
        dependencies: [NzSpinComponent, NgTemplateOutlet, NzTableTitleFooterComponent, NzTableInnerScrollComponent, NzTableInnerDefaultComponent, NzPaginationModule, NzPaginationComponent],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableComponent, [{
    type: Component,
    args: [{
      selector: "nz-table",
      exportAs: "nzTable",
      providers: [NzTableStyleService, NzTableDataService],
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    <nz-spin [nzDelay]="nzLoadingDelay" [nzSpinning]="nzLoading" [nzIndicator]="nzLoadingIndicator">
      @if (nzPaginationPosition === 'both' || nzPaginationPosition === 'top') {
        <ng-template [ngTemplateOutlet]="paginationTemplate"></ng-template>
      }
      <div
        #tableMainElement
        class="ant-table"
        [class.ant-table-rtl]="dir === 'rtl'"
        [class.ant-table-fixed-header]="nzData.length && scrollY"
        [class.ant-table-fixed-column]="scrollX"
        [class.ant-table-has-fix-left]="hasFixLeft"
        [class.ant-table-has-fix-right]="hasFixRight"
        [class.ant-table-bordered]="nzBordered"
        [class.nz-table-out-bordered]="nzOuterBordered && !nzBordered"
        [class.ant-table-middle]="nzSize === 'middle'"
        [class.ant-table-small]="nzSize === 'small'"
      >
        @if (nzTitle) {
          <nz-table-title-footer [title]="nzTitle"></nz-table-title-footer>
        }
        @if (scrollY || scrollX) {
          <nz-table-inner-scroll
            [data]="data"
            [scrollX]="scrollX"
            [scrollY]="scrollY"
            [contentTemplate]="contentTemplate"
            [listOfColWidth]="listOfAutoColWidth"
            [theadTemplate]="theadTemplate"
            [tfootTemplate]="tfootTemplate"
            [tfootFixed]="tfootFixed"
            [verticalScrollBarWidth]="verticalScrollBarWidth"
            [virtualTemplate]="nzVirtualScrollDirective ? nzVirtualScrollDirective.templateRef : null"
            [virtualItemSize]="nzVirtualItemSize"
            [virtualMaxBufferPx]="nzVirtualMaxBufferPx"
            [virtualMinBufferPx]="nzVirtualMinBufferPx"
            [tableMainElement]="tableMainElement"
            [virtualForTrackBy]="nzVirtualForTrackBy"
            [noDataVirtualHeight]="noDataVirtualHeight"
          ></nz-table-inner-scroll>
        } @else {
          <nz-table-inner-default
            [tableLayout]="nzTableLayout"
            [listOfColWidth]="listOfManualColWidth"
            [theadTemplate]="theadTemplate"
            [contentTemplate]="contentTemplate"
            [tfootTemplate]="tfootTemplate"
          ></nz-table-inner-default>
        }
        @if (nzFooter) {
          <nz-table-title-footer [footer]="nzFooter"></nz-table-title-footer>
        }
      </div>
      @if (nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom') {
        <ng-template [ngTemplateOutlet]="paginationTemplate"></ng-template>
      }
    </nz-spin>
    <ng-template #paginationTemplate>
      @if (nzShowPagination && data.length) {
        <nz-pagination
          [hidden]="!showPagination"
          class="ant-table-pagination ant-table-pagination-right"
          [nzShowSizeChanger]="nzShowSizeChanger"
          [nzPageSizeOptions]="nzPageSizeOptions"
          [nzItemRender]="nzItemRender!"
          [nzShowQuickJumper]="nzShowQuickJumper"
          [nzHideOnSinglePage]="nzHideOnSinglePage"
          [nzShowTotal]="nzShowTotal"
          [nzSize]="nzPaginationType === 'small' ? 'small' : nzSize === 'default' ? 'default' : 'small'"
          [nzPageSize]="nzPageSize"
          [nzTotal]="nzTotal"
          [nzSimple]="nzSimple"
          [nzPageIndex]="nzPageIndex"
          (nzPageSizeChange)="onPageSizeChange($event)"
          (nzPageIndexChange)="onPageIndexChange($event)"
        ></nz-pagination>
      }
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
      host: {
        class: "ant-table-wrapper",
        "[class.ant-table-wrapper-rtl]": 'dir === "rtl"',
        "[class.ant-table-custom-column]": `nzCustomColumn.length`
      },
      imports: [NzSpinComponent, NgTemplateOutlet, NzTableTitleFooterComponent, NzTableInnerScrollComponent, NzTableInnerDefaultComponent, NzPaginationModule]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NzResizeObserver
  }, {
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzTableStyleService
  }, {
    type: NzTableDataService
  }, {
    type: Directionality
  }], {
    nzTableLayout: [{
      type: Input
    }],
    nzShowTotal: [{
      type: Input
    }],
    nzItemRender: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzNoResult: [{
      type: Input
    }],
    nzPageSizeOptions: [{
      type: Input
    }],
    nzVirtualItemSize: [{
      type: Input
    }],
    nzVirtualMaxBufferPx: [{
      type: Input
    }],
    nzVirtualMinBufferPx: [{
      type: Input
    }],
    nzVirtualForTrackBy: [{
      type: Input
    }],
    nzLoadingDelay: [{
      type: Input
    }],
    nzPageIndex: [{
      type: Input
    }],
    nzPageSize: [{
      type: Input
    }],
    nzTotal: [{
      type: Input
    }],
    nzWidthConfig: [{
      type: Input
    }],
    nzData: [{
      type: Input
    }],
    nzCustomColumn: [{
      type: Input
    }],
    nzPaginationPosition: [{
      type: Input
    }],
    nzScroll: [{
      type: Input
    }],
    noDataVirtualHeight: [{
      type: Input
    }],
    nzPaginationType: [{
      type: Input
    }],
    nzFrontPagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTemplateMode: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowPagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOuterBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLoadingIndicator: [{
      type: Input
    }],
    nzBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSize: [{
      type: Input
    }],
    nzShowSizeChanger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHideOnSinglePage: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowQuickJumper: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSimple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzPageSizeChange: [{
      type: Output
    }],
    nzPageIndexChange: [{
      type: Output
    }],
    nzQueryParams: [{
      type: Output
    }],
    nzCurrentPageDataChange: [{
      type: Output
    }],
    nzCustomColumnChange: [{
      type: Output
    }],
    nzVirtualScrollDirective: [{
      type: ContentChild,
      args: [NzTableVirtualScrollDirective, {
        static: false
      }]
    }],
    nzTableInnerScrollComponent: [{
      type: ViewChild,
      args: [NzTableInnerScrollComponent]
    }]
  });
})();
function fixedAttribute(value) {
  return value === "top" || value === "bottom" ? value : booleanAttribute(value) ? "bottom" : null;
}
var NzTfootSummaryComponent = class _NzTfootSummaryComponent {
  constructor() {
    this.nzFixed = null;
    this.nzTableStyleService = inject(NzTableStyleService, {
      optional: true
    });
    this.isInsideTable = !!this.nzTableStyleService;
  }
  ngOnInit() {
    this.nzTableStyleService?.setTfootTemplate(this.templateRef);
  }
  ngOnChanges(changes) {
    const {
      nzFixed
    } = changes;
    this.nzTableStyleService?.setTfootFixed(nzFixed.currentValue);
  }
  static {
    this.ɵfac = function NzTfootSummaryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTfootSummaryComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTfootSummaryComponent,
      selectors: [["tfoot", "nzSummary", ""]],
      viewQuery: function NzTfootSummaryComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c14, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NzTfootSummaryComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-table-summary", !ctx.isInsideTable || !ctx.nzFixed);
        }
      },
      inputs: {
        nzFixed: [2, "nzFixed", "nzFixed", fixedAttribute]
      },
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
      attrs: _c15,
      ngContentSelectors: _c04,
      decls: 3,
      vars: 1,
      consts: [["contentTemplate", ""], [3, "ngTemplateOutlet"]],
      template: function NzTfootSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NzTfootSummaryComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzTfootSummaryComponent_Conditional_2_Template, 1, 1, null, 1);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵconditional(!ctx.isInsideTable || !ctx.nzFixed ? 2 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTfootSummaryComponent, [{
    type: Component,
    args: [{
      selector: "tfoot[nzSummary]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
    @if (!isInsideTable || !nzFixed) {
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    }
  `,
      imports: [NgTemplateOutlet],
      host: {
        "[class.ant-table-summary]": "!isInsideTable || !nzFixed"
      }
    }]
  }], null, {
    nzFixed: [{
      type: Input,
      args: [{
        transform: fixedAttribute
      }]
    }],
    templateRef: [{
      type: ViewChild,
      args: ["contentTemplate", {
        static: true
      }]
    }]
  });
})();
var NzTrDirective = class _NzTrDirective {
  constructor() {
    this.destroy$ = new Subject();
    this.listOfFixedColumns$ = new ReplaySubject(1);
    this.listOfColumns$ = new ReplaySubject(1);
    this.listOfFixedColumnsChanges$ = this.listOfFixedColumns$.pipe(switchMap((list) => merge(...[this.listOfFixedColumns$, ...list.map((c) => c.changes$)]).pipe(mergeMap(() => this.listOfFixedColumns$))), takeUntil(this.destroy$));
    this.listOfFixedLeftColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(map((list) => list.filter((item) => item.nzLeft !== false)));
    this.listOfFixedRightColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(map((list) => list.filter((item) => item.nzRight !== false)));
    this.listOfColumnsChanges$ = this.listOfColumns$.pipe(switchMap((list) => merge(...[this.listOfColumns$, ...list.map((c) => c.changes$)]).pipe(mergeMap(() => this.listOfColumns$))), takeUntil(this.destroy$));
    this.nzTableStyleService = inject(NzTableStyleService, {
      optional: true
    });
    this.isInsideTable = !!this.nzTableStyleService;
  }
  ngAfterContentInit() {
    if (this.nzTableStyleService) {
      this.listOfCellFixedDirective.changes.pipe(startWith(this.listOfCellFixedDirective), takeUntil(this.destroy$)).subscribe(this.listOfFixedColumns$);
      this.listOfNzThDirective.changes.pipe(startWith(this.listOfNzThDirective), takeUntil(this.destroy$)).subscribe(this.listOfColumns$);
      this.listOfFixedLeftColumnChanges$.subscribe((listOfFixedLeft) => {
        listOfFixedLeft.forEach((cell) => cell.setIsLastLeft(cell === listOfFixedLeft[listOfFixedLeft.length - 1]));
      });
      this.listOfFixedRightColumnChanges$.subscribe((listOfFixedRight) => {
        listOfFixedRight.forEach((cell) => cell.setIsFirstRight(cell === listOfFixedRight[0]));
      });
      combineLatest([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedLeftColumnChanges$]).pipe(takeUntil(this.destroy$)).subscribe(([listOfAutoWidth, listOfLeftCell]) => {
        listOfLeftCell.forEach((cell, index) => {
          if (cell.isAutoLeft) {
            const currentArray = listOfLeftCell.slice(0, index);
            const count = currentArray.reduce((pre, cur) => pre + (cur.colspan || cur.colSpan || 1), 0);
            const width = listOfAutoWidth.slice(0, count).reduce((pre, cur) => pre + cur, 0);
            cell.setAutoLeftWidth(`${width}px`);
          }
        });
      });
      combineLatest([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedRightColumnChanges$]).pipe(takeUntil(this.destroy$)).subscribe(([listOfAutoWidth, listOfRightCell]) => {
        listOfRightCell.forEach((_, index) => {
          const cell = listOfRightCell[listOfRightCell.length - index - 1];
          if (cell.isAutoRight) {
            const currentArray = listOfRightCell.slice(listOfRightCell.length - index, listOfRightCell.length);
            const count = currentArray.reduce((pre, cur) => pre + (cur.colspan || cur.colSpan || 1), 0);
            const width = listOfAutoWidth.slice(listOfAutoWidth.length - count, listOfAutoWidth.length).reduce((pre, cur) => pre + cur, 0);
            cell.setAutoRightWidth(`${width}px`);
          }
        });
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzTrDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTrDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTrDirective,
      selectors: [["tr", 3, "mat-row", "", 3, "mat-header-row", "", 3, "nz-table-measure-row", "", 3, "nzExpand", "", 3, "nz-table-fixed-row", ""]],
      contentQueries: function NzTrDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NzThMeasureDirective, 4);
          ɵɵcontentQuery(dirIndex, NzCellFixedDirective, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzThDirective = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfCellFixedDirective = _t);
        }
      },
      hostVars: 2,
      hostBindings: function NzTrDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-table-row", ctx.isInsideTable);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTrDirective, [{
    type: Directive,
    args: [{
      selector: "tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])",
      host: {
        "[class.ant-table-row]": "isInsideTable"
      }
    }]
  }], null, {
    listOfNzThDirective: [{
      type: ContentChildren,
      args: [NzThMeasureDirective]
    }],
    listOfCellFixedDirective: [{
      type: ContentChildren,
      args: [NzCellFixedDirective]
    }]
  });
})();
var NzTheadComponent = class _NzTheadComponent {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.destroy$ = new Subject();
    this.isInsideTable = false;
    this.nzSortOrderChange = new EventEmitter();
    this.nzTableStyleService = inject(NzTableStyleService, {
      optional: true
    });
    this.nzTableDataService = inject(NzTableDataService, {
      optional: true
    });
    this.isInsideTable = !!this.nzTableStyleService;
  }
  ngOnInit() {
    if (this.nzTableStyleService) {
      this.nzTableStyleService.setTheadTemplate(this.templateRef);
    }
  }
  ngAfterContentInit() {
    if (this.nzTableStyleService) {
      const firstTableRow$ = this.listOfNzTrDirective.changes.pipe(startWith(this.listOfNzTrDirective), map((item) => item && item.first));
      const listOfColumnsChanges$ = firstTableRow$.pipe(switchMap((firstTableRow) => firstTableRow ? firstTableRow.listOfColumnsChanges$ : EMPTY), takeUntil(this.destroy$));
      listOfColumnsChanges$.subscribe((data) => this.nzTableStyleService.setListOfTh(data));
      this.nzTableStyleService.enableAutoMeasure$.pipe(switchMap((enable) => enable ? listOfColumnsChanges$ : of([]))).pipe(takeUntil(this.destroy$)).subscribe((data) => this.nzTableStyleService.setListOfMeasureColumn(data));
      const listOfFixedLeftColumnChanges$ = firstTableRow$.pipe(switchMap((firstTr) => firstTr ? firstTr.listOfFixedLeftColumnChanges$ : EMPTY), takeUntil(this.destroy$));
      const listOfFixedRightColumnChanges$ = firstTableRow$.pipe(switchMap((firstTr) => firstTr ? firstTr.listOfFixedRightColumnChanges$ : EMPTY), takeUntil(this.destroy$));
      listOfFixedLeftColumnChanges$.subscribe((listOfFixedLeftColumn) => {
        this.nzTableStyleService.setHasFixLeft(listOfFixedLeftColumn.length !== 0);
      });
      listOfFixedRightColumnChanges$.subscribe((listOfFixedRightColumn) => {
        this.nzTableStyleService.setHasFixRight(listOfFixedRightColumn.length !== 0);
      });
    }
    if (this.nzTableDataService) {
      const listOfColumn$ = this.listOfNzThAddOnComponent.changes.pipe(startWith(this.listOfNzThAddOnComponent));
      const manualSort$ = listOfColumn$.pipe(switchMap(() => merge(...this.listOfNzThAddOnComponent.map((th) => th.manualClickOrder$))), takeUntil(this.destroy$));
      manualSort$.subscribe((data) => {
        const emitValue = {
          key: data.nzColumnKey,
          value: data.sortOrder
        };
        this.nzSortOrderChange.emit(emitValue);
        if (data.nzSortFn && data.nzSortPriority === false) {
          this.listOfNzThAddOnComponent.filter((th) => th !== data).forEach((th) => th.clearSortOrder());
        }
      });
      const listOfCalcOperator$ = listOfColumn$.pipe(
        switchMap((list) => merge(...[listOfColumn$, ...list.map((c) => c.calcOperatorChange$)]).pipe(mergeMap(() => listOfColumn$))),
        map((list) => list.filter((item) => !!item.nzSortFn || !!item.nzFilterFn).map((item) => {
          const {
            nzSortFn,
            sortOrder,
            nzFilterFn,
            nzFilterValue,
            nzSortPriority,
            nzColumnKey
          } = item;
          return {
            key: nzColumnKey,
            sortFn: nzSortFn,
            sortPriority: nzSortPriority,
            sortOrder,
            filterFn: nzFilterFn,
            filterValue: nzFilterValue
          };
        })),
        // TODO: after checked error here
        delay(0),
        takeUntil(this.destroy$)
      );
      listOfCalcOperator$.subscribe((list) => {
        this.nzTableDataService?.listOfCalcOperator$.next(list);
      });
    }
  }
  ngAfterViewInit() {
    if (this.nzTableStyleService) {
      this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzTheadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTheadComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTheadComponent,
      selectors: [["thead", 9, "ant-table-thead"]],
      contentQueries: function NzTheadComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NzTrDirective, 5);
          ɵɵcontentQuery(dirIndex, NzThAddOnComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzTrDirective = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzThAddOnComponent = _t);
        }
      },
      viewQuery: function NzTheadComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c14, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
        }
      },
      outputs: {
        nzSortOrderChange: "nzSortOrderChange"
      },
      ngContentSelectors: _c04,
      decls: 3,
      vars: 1,
      consts: [["contentTemplate", ""], [3, "ngTemplateOutlet"]],
      template: function NzTheadComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NzTheadComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzTheadComponent_Conditional_2_Template, 1, 1, null, 1);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵconditional(!ctx.isInsideTable ? 2 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTheadComponent, [{
    type: Component,
    args: [{
      selector: "thead:not(.ant-table-thead)",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
    @if (!isInsideTable) {
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    }
  `,
      imports: [NgTemplateOutlet]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    templateRef: [{
      type: ViewChild,
      args: ["contentTemplate", {
        static: true
      }]
    }],
    listOfNzTrDirective: [{
      type: ContentChildren,
      args: [NzTrDirective, {
        descendants: true
      }]
    }],
    listOfNzThAddOnComponent: [{
      type: ContentChildren,
      args: [NzThAddOnComponent, {
        descendants: true
      }]
    }],
    nzSortOrderChange: [{
      type: Output
    }]
  });
})();
var NzTrExpandDirective = class _NzTrExpandDirective {
  constructor() {
    this.nzExpand = true;
  }
  static {
    this.ɵfac = function NzTrExpandDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTrExpandDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTrExpandDirective,
      selectors: [["tr", "nzExpand", ""]],
      hostAttrs: [1, "ant-table-expanded-row"],
      hostVars: 1,
      hostBindings: function NzTrExpandDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("hidden", !ctx.nzExpand);
        }
      },
      inputs: {
        nzExpand: "nzExpand"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTrExpandDirective, [{
    type: Directive,
    args: [{
      selector: "tr[nzExpand]",
      host: {
        class: "ant-table-expanded-row",
        "[hidden]": `!nzExpand`
      }
    }]
  }], null, {
    nzExpand: [{
      type: Input
    }]
  });
})();
var NzTableModule = class _NzTableModule {
  static {
    this.ɵfac = function NzTableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTableModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzTableModule,
      imports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTrExpandDirective, NzTfootSummaryComponent, NzTableVirtualScrollDirective, NzCellFixedDirective, NzCustomColumnDirective, NzTableContentComponent, NzTableTitleFooterComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTrMeasureComponent, NzRowIndentDirective, NzRowExpandButtonDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzCellEllipsisDirective, NzFilterTriggerComponent, NzTableFixedRowComponent, NzThSelectionComponent],
      exports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzCustomColumnDirective, NzFilterTriggerComponent, NzTrExpandDirective, NzTfootSummaryComponent, NzCellBreakWordDirective, NzCellAlignDirective, NzCellEllipsisDirective, NzTableFixedRowComponent, NzThSelectionComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzTableComponent, NzThAddOnComponent, NzTdAddOnComponent, NzTbodyComponent, NzTableTitleFooterComponent, NzTableInnerScrollComponent, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzFilterTriggerComponent, NzThSelectionComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableModule, [{
    type: NgModule,
    args: [{
      imports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTrExpandDirective, NzTfootSummaryComponent, NzTableVirtualScrollDirective, NzCellFixedDirective, NzCustomColumnDirective, NzTableContentComponent, NzTableTitleFooterComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTrMeasureComponent, NzRowIndentDirective, NzRowExpandButtonDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzCellEllipsisDirective, NzFilterTriggerComponent, NzTableFixedRowComponent, NzThSelectionComponent],
      exports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzCustomColumnDirective, NzFilterTriggerComponent, NzTrExpandDirective, NzTfootSummaryComponent, NzCellBreakWordDirective, NzCellAlignDirective, NzCellEllipsisDirective, NzTableFixedRowComponent, NzThSelectionComponent]
    }]
  }], null, null);
})();
export {
  NzCellAlignDirective,
  NzCellBreakWordDirective,
  NzCellEllipsisDirective,
  NzCellFixedDirective,
  NzCustomColumnDirective,
  NzFilterTriggerComponent,
  NzRowExpandButtonDirective,
  NzRowIndentDirective,
  NzTableCellDirective,
  NzTableComponent,
  NzTableContentComponent,
  NzTableDataService,
  NzTableFilterComponent,
  NzTableFixedRowComponent,
  NzTableInnerDefaultComponent,
  NzTableInnerScrollComponent,
  NzTableModule,
  NzTableSelectionComponent,
  NzTableSortersComponent,
  NzTableStyleService,
  NzTableTitleFooterComponent,
  NzTableVirtualScrollDirective,
  NzTbodyComponent,
  NzTdAddOnComponent,
  NzTfootSummaryComponent,
  NzThAddOnComponent,
  NzThMeasureDirective,
  NzThSelectionComponent,
  NzTheadComponent,
  NzTrDirective,
  NzTrExpandDirective,
  NzTrMeasureComponent
};
//# sourceMappingURL=ng-zorro-antd_table.js.map
