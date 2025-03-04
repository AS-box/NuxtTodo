import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><input type="text"${ssrRenderAttr("value", _ctx.name)} placeholder="\u540D\u524D"><input type="text"${ssrRenderAttr("value", _ctx.email)} placeholder="\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"><input type="text"${ssrRenderAttr("value", _ctx.pass)} placeholder="\u30D1\u30B9\u30EF\u30FC\u30C9"></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Form as F };
//# sourceMappingURL=form-DRHKbua5.mjs.map
