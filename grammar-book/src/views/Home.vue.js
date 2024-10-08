import Sidebar from '../Sidebar.vue';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/script.js';
export default (await import('vue')).defineComponent({
    components: { Sidebar }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{ Sidebar },
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container-fluid") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Sidebar;
    /** @type { [typeof __VLS_components.Sidebar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ role: ("main"), ...{ class: ("col-md-8 ml-sm-auto col-lg-9 px-4 no-left-margin") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, id: ("content"), });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("col-md-2 bg-light sidebar sidebar-right") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sidebar-sticky") }, id: ("sidebar-right"), });
    __VLS_styleScopedClasses['container-fluid'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['col-md-8'];
    __VLS_styleScopedClasses['ml-sm-auto'];
    __VLS_styleScopedClasses['col-lg-9'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['no-left-margin'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['col-md-2'];
    __VLS_styleScopedClasses['bg-light'];
    __VLS_styleScopedClasses['sidebar'];
    __VLS_styleScopedClasses['sidebar-right'];
    __VLS_styleScopedClasses['sidebar-sticky'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
