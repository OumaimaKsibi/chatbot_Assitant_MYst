(()=>{"use strict";var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var o in t)e.o(t,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:t[o]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=React;var t=e.n(r),o=wp.element.createElement,n=wp.blocks.registerBlockType,l=(wp.blockEditor?wp.blockEditor:wp.editor).InspectorControls,a=wp.serverSideRender?wp.serverSideRender:wp.components.ServerSideRender,i=wp.components,c=i.TextControl,s=i.SelectControl,u=i.PanelBody,g=i.Placeholder,m=i.RadioControl,d=i.Notice,f=o("svg",{width:24,height:24,viewBox:"0 0 32 32"},o("path",{fill:"currentColor",d:"M27.58 4a27.9 27.9 0 0 0-5.17 4 27 27 0 0 0-4.09 5.08 33.06 33.06 0 0 1 2 4.65A23.78 23.78 0 0 1 24 12.15V18a8 8 0 0 1-5.89 7.72l-.21.05a27 27 0 0 0-1.9-8.16A27.9 27.9 0 0 0 9.59 8a27.9 27.9 0 0 0-5.17-4L4 3.77V18a12 12 0 0 0 9.93 11.82h.14a11.72 11.72 0 0 0 3.86 0h.14A12 12 0 0 0 28 18V3.77zM8 18v-5.85a23.86 23.86 0 0 1 5.89 13.57A8 8 0 0 1 8 18zm8-16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"})),p="undefined"!=typeof ur_form_block_data&&ur_form_block_data,b=p.i18n,v=p.forms,y=p.logo_url,h=void 0!==b&&b,_=h.title,k=h.form_select,E=h.form_settings;h.deprecated_notice,n("user-registration/form-selector",{title:_,icon:f,category:"widgets",attributes:{formId:{type:"string"},formType:{type:"string"},shortcode:{type:"string"},redirectUrl:{type:"string"},logoutUrl:{type:"string"}},supports:{inserter:!1},edit:function(e){var r,o=e.attributes,n=o.formId,i=void 0===n?"":n,f=o.formType,p=void 0===f?"registration_form":f,h=o.shortcode,w=void 0===h?"":h,C=o.redirectUrl,S=void 0===C?"":C,R=o.logoutUrl,L=void 0===R?"":R,U=e.setAttributes,A=Object.keys(v).map((function(e){return{value:Number(e),label:v[e]}}));function M(e){U({formType:e})}function T(e){U({formId:e})}function F(e){U({shortcode:e})}return A.unshift({value:"",label:k}),(r=[t().createElement(l,{key:"ur-gutenberg-form-selector-inspector-controls"},t().createElement(u,{title:E},t().createElement(m,{key:"ur-gutenberg-form-selector-radio-control",selected:p,options:[{label:"Registration Form",value:"registration_form"},{label:"Login Form",value:"login_form"}],onChange:M}),"registration_form"===p?t().createElement(s,{key:"ur-gutenberg-form-selector-registration-form",value:i,options:A,onChange:T}):[t().createElement(s,{key:"ur-gutenberg-form-selector-login-form",value:w,options:[{label:"Select Shortcode",value:""},{label:"Login Shortcode",value:"user_registration_login"},{label:"My Account Shortcode",value:"user_registration_my_account"}],onChange:F}),t().createElement(c,{key:"ur-gutenberg-form-selector-redirect-url",label:"Redirect URL",value:S,onChange:function(e){U({redirectUrl:e})}}),t().createElement(c,{key:"ur-gutenberg-form-selector-logout-url",label:"Logout URL",value:L,onChange:function(e){U({logoutUrl:e})}})]))]).push(t().createElement(d,{status:"warning",isDismissible:!1},t().createElement("p",null,b.deprecated_notice))),i||""!==w?r.push(t().createElement(a,{key:"ur-gutenberg-form-selector-server-side-renderer",block:"user-registration/form-selector",attributes:e.attributes})):r.push(t().createElement(g,{key:"ur-gutenberg-form-selector-wrap",className:"ur-gutenberg-form-selector-wrap"},t().createElement("img",{src:y}),t().createElement("h2",null,_),t().createElement(m,{key:"ur-gutenberg-form-selector-radio-control",selected:p,options:[{label:"Registration Form",value:"registration_form"},{label:"Login Form",value:"login_form"}],onChange:M}),"registration_form"===p?t().createElement(s,{key:"ur-gutenberg-form-selector-select-control",value:i,options:A,onChange:T}):t().createElement(s,{key:"ur-gutenberg-form-selector-select-control",selected:w,options:[{label:"Select Shortcode",value:""},{label:"Login Shortcode",value:"user_registration_login"},{label:"My Account Shortcode",value:"user_registration_my_account"}],onChange:F}))),r},save:function(){return null}})})();