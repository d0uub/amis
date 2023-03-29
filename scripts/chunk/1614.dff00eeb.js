"use strict";(self.webpackChunkamis_editor_demo=self.webpackChunkamis_editor_demo||[]).push([[1614],{11614:function(e,t,n){n.r(t),n.d(t,{ColorControl:function(){return u},default:function(){return p}});var o=n(70655),r=n(67294),a=n(73935),l=n(93565),i=n(95483),s=n(34594),c=n(21686),u=function(e){function t(t){var n=e.call(this,t)||this;return n.state={isOpened:!1,isFocused:!1,inputValue:n.props.value||""},n.open=n.open.bind(n),n.close=n.close.bind(n),n.focus=n.focus.bind(n),n.blur=n.blur.bind(n),n.handleChange=n.handleChange.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.clearValue=n.clearValue.bind(n),n.handleInputChange=n.handleInputChange.bind(n),n.handleClick=n.handleClick.bind(n),n.preview=r.createRef(),n.input=r.createRef(),n}return(0,o.ZT)(t,e),t.prototype.componentDidUpdate=function(e){var t=this.props;e.value!==t.value&&this.setState({inputValue:t.value||""})},t.prototype.handleFocus=function(){this.setState({isFocused:!0})},t.prototype.handleBlur=function(){this.setState({isFocused:!1,inputValue:this.props.value})},t.prototype.focus=function(){this.input.current&&this.input.current.focus()},t.prototype.blur=function(){this.input.current&&this.input.current.blur()},t.prototype.open=function(e){this.props.disabled||this.setState({isOpened:!0},e)},t.prototype.close=function(){this.setState({isOpened:!1})},t.prototype.clearValue=function(){var e=this.props;(0,e.onChange)(e.resetValue||"")},t.prototype.handleClick=function(){this.state.isOpened?this.close():this.open(this.focus)},t.prototype.handleInputChange=function(e){var t=this;if(this.props.allowCustomColor){var n=this.props.onChange;this.setState({inputValue:e.currentTarget.value},(function(){t.validateColor(t.state.inputValue)&&n(t.state.inputValue)}))}},t.prototype.validateColor=function(e){if(""===e)return!1;if("inherit"===e)return!1;if("transparent"===e)return!1;var t=document.createElement("img");return t.style.color="rgb(0, 0, 0)",t.style.color=e,"rgb(0, 0, 0)"!==t.style.color||(t.style.color="rgb(255, 255, 255)",t.style.color=e,"rgb(255, 255, 255)"!==t.style.color)},t.prototype.handleChange=function(e){var t=this.props,n=t.onChange,o=t.format;n("rgba"===o?"rgba(".concat(e.rgb.r,", ").concat(e.rgb.g,", ").concat(e.rgb.b,", ").concat(e.rgb.a,")"):"rgb"===o?"rgb(".concat(e.rgb.r,", ").concat(e.rgb.g,", ").concat(e.rgb.b,")"):"hsl"===o?"hsl(".concat(Math.round(e.hsl.h),", ").concat(Math.round(100*e.hsl.s),"%, ").concat(Math.round(100*e.hsl.l),"%)"):e.hex)},t.prototype.render=function(){var e=this,t=this.props,n=t.classPrefix,o=t.className,u=t.popoverClassName,p=t.value,h=t.placeholder,d=t.disabled,C=t.popOverContainer,f=t.format,m=t.clearable,g=t.placement,b=t.classnames,y=t.presetColors,v=t.allowCustomColor,k=t.useMobileUI,E=this.props.translate,N=this.state.isOpened,w=this.state.isFocused,V=k&&(0,s.tqC)();return r.createElement("div",{className:b("ColorPicker",{"is-disabled":d,"is-focused":w,"is-opened":N},o)},r.createElement("span",{onClick:this.handleClick,className:b("ColorPicker-preview")},r.createElement("i",{ref:this.preview,className:"".concat(n,"ColorPicker-previewIcon"),style:{background:this.state.inputValue||"#ccc"}})),r.createElement("input",{ref:this.input,type:"text",autoComplete:"off",size:10,className:b("ColorPicker-input"),value:this.state.inputValue||"",placeholder:E(h),disabled:d,onChange:this.handleInputChange,onFocus:this.handleFocus,onBlur:this.handleBlur,onClick:this.handleClick,readOnly:V}),m&&!d&&p?r.createElement("a",{onClick:this.clearValue,className:b("ColorPicker-clear")},r.createElement(i.JO,{icon:"input-clear",className:"icon"})):null,r.createElement("span",{className:b("ColorPicker-arrow")},r.createElement(i.JO,{icon:"caret",className:"icon",onClick:this.handleClick})),!V&&N?r.createElement(s.aVW,{placement:g||"auto",target:function(){return(0,a.findDOMNode)(e)},onHide:this.close,container:C||function(){return(0,a.findDOMNode)(e)},rootClose:!1,show:!0},r.createElement(s.v$m,{classPrefix:n,className:b("ColorPicker-popover",u),onHide:this.close,overlay:!0},v?r.createElement(l.xS,{styles:{},disableAlpha:!!~["rgb","hex"].indexOf(f),color:p,presetColors:y,onChangeComplete:this.handleChange}):r.createElement(l.Lf,{color:p,colors:Array.isArray(y)?y.filter((function(e){return"string"==typeof e||(0,s.Kn2)(e)})).map((function(e){return"string"==typeof e?e:(0,s.Kn2)(e)?null==e?void 0:e.color:e})):void 0,onChangeComplete:this.handleChange}))):null,V&&r.createElement(c.Z,{className:b("".concat(n,"ColorPicker-popup")),container:C,isShow:N,onHide:this.handleClick},v?r.createElement(l.xS,{styles:{},disableAlpha:!!~["rgb","hex"].indexOf(f),color:p,presetColors:y,onChangeComplete:this.handleChange}):r.createElement(l.Lf,{color:p,colors:Array.isArray(y)?y.filter((function(e){return"string"==typeof e||(0,s.Kn2)(e)})).map((function(e){return"string"==typeof e?e:(0,s.Kn2)(e)?null==e?void 0:e.color:e})):void 0,onChangeComplete:this.handleChange})))},t.defaultProps={format:"hex",clearable:!0,placeholder:"ColorPicker.placeholder",allowCustomColor:!0},(0,o.gn)([s.NjZ,(0,o.w6)("design:type",Function),(0,o.w6)("design:paramtypes",[String]),(0,o.w6)("design:returntype",void 0)],t.prototype,"validateColor",null),t}(r.PureComponent),p=(0,s.YYN)((0,s.eAU)((0,s.nmi)(u,{value:"onChange"})))}}]);