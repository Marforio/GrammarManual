import Header from './Header.vue';
import Footer from './Footer.vue';
import Home from './views/Home.vue';
import Sidebar from './Sidebar.vue';
export default (await import('vue')).defineComponent({
    components: { Header, Footer, Home }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{ Header, Footer, Home },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.body, __VLS_intrinsicElements.body)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Header;
    /** @type { [typeof __VLS_components.Header, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.Home;
    /** @type { [typeof __VLS_components.Home, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.Footer;
    /** @type { [typeof __VLS_components.Footer, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
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
