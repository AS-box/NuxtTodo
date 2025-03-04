import __nuxt_component_0 from './index-IzQAqw4P.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { b as useNuxtApp } from './server.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './index-CCqbQxu4.mjs';
import '@unhead/shared';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';
import 'unhead';
import 'vue-router';
import '@supabase/supabase-js';

const getTasks = async () => {
  const nuxtApp = useNuxtApp();
  const supabase = nuxtApp.$supabase;
  const { data, error } = await supabase.from("tasks").select("*");
  return { data, error };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const task = ref({
      title: "",
      status: "0"
    });
    const sort = ref("4");
    ref("0");
    const tasks = ref();
    getTasks().then((res) => {
      tasks.value = res.data;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-2 text-center" }, _attrs))}><h1>\u30BF\u30B9\u30AF\u4E00\u89A7</h1><form class="flex"><input class="input-text-primary w-4/5 mr-0.5" type="text"${ssrRenderAttr("value", unref(task).title)}><button type="submit" class="btn-primary w-1/5">\u8FFD\u52A0</button></form><select name="sort" id="sort"><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(sort)) ? ssrLooseContain(unref(sort), "4") : ssrLooseEqual(unref(sort), "4")) ? " selected" : ""}>\u5168\u3066</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(sort)) ? ssrLooseContain(unref(sort), "0") : ssrLooseEqual(unref(sort), "0")) ? " selected" : ""}>\u672A\u7740\u624B</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(sort)) ? ssrLooseContain(unref(sort), "1") : ssrLooseEqual(unref(sort), "1")) ? " selected" : ""}>\u4F5C\u696D\u4E2D</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(sort)) ? ssrLooseContain(unref(sort), "2") : ssrLooseEqual(unref(sort), "2")) ? " selected" : ""}>\u5B8C\u4E86</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(sort)) ? ssrLooseContain(unref(sort), "3") : ssrLooseEqual(unref(sort), "3")) ? " selected" : ""}>\u653E\u7F6E</option></select><table><thead><tr><th>id</th><th>\u30BF\u30B9\u30AF</th><th>\u30B9\u30C6\u30FC\u30BF\u30B9</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(tasks), (task2) => {
        _push(`<tr><td>${ssrInterpolate(task2.id)}</td><td><input type="text"${ssrRenderAttr("value", task2.title)}></td><td class="bg-blue-500"><select name="status" id="status"><option value="0"${ssrIncludeBooleanAttr(Array.isArray(task2.status) ? ssrLooseContain(task2.status, "0") : ssrLooseEqual(task2.status, "0")) ? " selected" : ""}>\u672A\u7740\u624B</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(task2.status) ? ssrLooseContain(task2.status, "1") : ssrLooseEqual(task2.status, "1")) ? " selected" : ""}>\u4F5C\u696D\u4E2D</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(task2.status) ? ssrLooseContain(task2.status, "2") : ssrLooseEqual(task2.status, "2")) ? " selected" : ""}>\u5B8C\u4E86</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(task2.status) ? ssrLooseContain(task2.status, "3") : ssrLooseEqual(task2.status, "3")) ? " selected" : ""}>\u653E\u7F6E</option></select></td><td><button type="button">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "tabler:trash-x",
          size: "2em"
        }, null, _parent));
        _push(`</button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Baj-5mHZ.mjs.map
