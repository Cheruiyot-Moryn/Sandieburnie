;/*FB_PKG_DELIM*/

__d("PolarisDirectVerifiedUserCallingNotEnabledModalQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8232045313534546"}),null);
__d("PolarisDirectVerifiedUserCallingNotEnabledModalQuery.graphql",["PolarisDirectVerifiedUserCallingNotEnabledModalQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,concreteType:"FXCALSettings",kind:"LinkedField",name:"fxcal_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"should_user_see_centralized_settings_new_app_ia",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisDirectVerifiedUserCallingNotEnabledModalQuery",selections:a,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"PolarisDirectVerifiedUserCallingNotEnabledModalQuery",selections:a},params:{id:b("PolarisDirectVerifiedUserCallingNotEnabledModalQuery_instagramRelayOperation"),metadata:{},name:"PolarisDirectVerifiedUserCallingNotEnabledModalQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("IGDSActionDialog.react",["IGDSDialog.react","IGDSText.react","react","stylex"],(function(a,b,c,d,e,f,g){var h=d("react"),i={root:{justifyContent:"xl56j7k",$$css:!0},media:{marginTop:"x1crbq5u",marginEnd:"x1kj9wry",marginBottom:"x19qqan6",marginStart:"xy1572q",alignItems:"x1qjc9v5",justifyContent:"xl56j7k",":first-child_marginTop":"x14dv08r",$$css:!0},mediaWithoutMargins:{marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",":first-child_marginTop":"x14l7nz5",":first-child_marginEnd":"xistku6",":first-child_marginBottom":"x1gut22",":first-child_marginStart":"x1uw6ca5",$$css:!0},text:{marginTop:"x1crbq5u",marginEnd:"x1fd2adx",marginBottom:"x19qqan6",marginStart:"x19v5lwq",textAlign:"x2b8uid",":first-child_marginTop":"x14dv08r",$$css:!0},textBody:{paddingTop:"xyamay9",$$css:!0},itemContainer:{display:"x78zum5",flexDirection:"xdt5ytf",marginTop:"x1crbq5u",":only-child_marginTop":"x179zr98",":only-child_borderTop":"x1h3j4gg",$$css:!0}};function a(a){var b=a.body,d=a.closeButtonPosition;d=d===void 0?"hidden":d;var e=a.children,f=a["data-testid"];f=a.disableMediaMargin;var g=a.forceTop;g=g===void 0?!1:g;var j=a.isVisible,k=a.media,l=a.onModalClose,m=a.size;m=m===void 0?"default":m;a=a.title;var n=!!k,o=a!=null||b!=null;return h.jsx(c("IGDSDialog.react"),{closeButtonPosition:d,forceTop:g,isVisible:j,onClose:l,size:m,children:h.jsxs("div",{className:"xl56j7k","data-testid":void 0,children:[k!=null&&h.jsx("div",{className:c("stylex")([i.media,f!=null&&i.mediaWithoutMargins]),children:k}),o&&h.jsxs("div",{className:"x1crbq5u x1fd2adx x19qqan6 x19v5lwq x2b8uid x14dv08r",children:[a!=null&&(n?h.jsx(c("IGDSText.react").Headline2,{children:a}):h.jsx(c("IGDSText.react").Title,{children:a})),b!=null&&h.jsx("div",{className:"xyamay9",children:h.jsx(c("IGDSText.react").Body,{color:"secondaryText",children:b})})]}),e!=null&&h.jsx("div",{className:"x78zum5 xdt5ytf x1crbq5u x179zr98 x1h3j4gg",children:e})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("IGDSDialogItem.react",["IGDSBox.react","IGDSSpinner.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={item:{fontSize:"xvs91rp",backgroundColor:"xjbqb8w",borderBottom:"xaqea5y",borderStart:"xav7gou",borderEnd:"x1b1mbwd",borderTop:"xtuw4uo",cursor:"x1ypdohk",lineHeight:"x1evy7pa",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",minHeight:"x1wxaq2x",paddingTop:"x1iorvi4",paddingEnd:"x1sxyh0",paddingBottom:"xjkvuk6",paddingStart:"xurb0ha",textAlign:"x2b8uid",userSelect:"x87ps6o",verticalAlign:"xxymvpz",":active_backgroundColor":"x52vrxo",":active_opacity":"x4gyw5p",$$css:!0},section:{cursor:"xt0e3qv",fontSize:"xvs91rp",backgroundColor:"xjbqb8w",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",minHeight:"x1wxaq2x",paddingTop:"x1iorvi4",paddingEnd:"x1sxyh0",paddingBottom:"xjkvuk6",paddingStart:"xurb0ha",textAlign:"x2b8uid",userSelect:"x87ps6o",$$css:!0},itemSecondary:{color:"x5n08af",$$css:!0},itemPrimary:{color:"x173jzuc",fontWeight:"x1xlr1w8",$$css:!0},itemDanger:{color:"xkmlbd1",fontWeight:"x1xlr1w8",$$css:!0},itemDisabled:{color:"x1roi4f4",cursor:"xt0e3qv",$$css:!0}};function a(a){var b=a.children,d=a.color;d=d===void 0?"secondaryButton":d;var e=a.disabled;e=e===void 0?!1:e;var f=a.loading;f=f===void 0?!1:f;a=a.onClick;return h.jsx("button",{className:c("stylex")([i.item,d==="errorOrDestructive"&&i.itemDanger,d==="primaryButton"&&i.itemPrimary,d==="secondaryButton"&&i.itemSecondary,e&&i.itemDisabled]),disabled:f||e,onClick:a,tabIndex:"0",children:f===!0?h.jsx(c("IGDSBox.react"),{alignItems:"center",children:h.jsx(c("IGDSSpinner.react"),{size:"small"})}):b})}a.displayName=a.name+" [from "+f.id+"]";function b(a){return h.jsx("div",{className:"xt0e3qv xvs91rp xjbqb8w xdj266r x11i5rnm xat24cr x1mh8g0r x1wxaq2x x1iorvi4 x1sxyh0 xjkvuk6 xurb0ha x2b8uid x87ps6o",children:a.children})}b.displayName=b.name+" [from "+f.id+"]";g.IGDSDialogItem=a;g.IGDSDialogSection=b}),98);
__d("PolarisDirectVerifiedUserCallingNotFollowingModal.react",["fbt","FBLogger","IGCoreModal","IGDSActionDialog.react","IGDSDialogItem.react","PolarisDirectActions","PolarisLinkBuilder","PolarisReactRedux","browserHistory","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(a){return h._("You're not following {username}. You can only call accounts that you follow.",[h._param("username",a)])}var k=h._("Couldn't connect call"),l=h._("OK"),m=h._("View profile");function a(){var a=d("PolarisReactRedux").useDispatch(),b=d("PolarisReactRedux").useSelector(function(a){return a.direct.verifiedUserCalling}),e=b.notFollowingUsername;if(e==null){c("FBLogger")("ig_web","add_new_highlight").mustfix("Unable to call - unknown userId");return i.jsx(i.Fragment,{children:" "})}var f=function(){a(d("PolarisDirectActions").closeVerifiedUserCallingNotFollowingModal())};b=function(){f(),d("browserHistory").browserHistory.push(d("PolarisLinkBuilder").buildUserLink(e))};return i.jsx(c("IGCoreModal"),{children:i.jsxs(c("IGDSActionDialog.react"),{body:j(e),closeButtonPosition:"background",onModalClose:f,title:k,children:[i.jsx(d("IGDSDialogItem.react").IGDSDialogItem,{onClick:f,children:l}),i.jsx(d("IGDSDialogItem.react").IGDSDialogItem,{color:"primaryButton",onClick:b,children:m})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDirectVerifiedUserCallingNotEnabledModal.react",["fbt","CometRelay","IGCoreModal","IGDSActionDialog.react","IGDSDialogItem.react","PolarisDirectActions","PolarisDirectVerifiedUserCallingNotEnabledModalQuery.graphql","PolarisReactRedux","PolarisRoutes","browserHistory","gkx","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=h._("You can turn on calling to call and receive calls from accounts that you follow. You can turn this off at any time in your settings."),l=h._("Turn on calling?"),m=h._("Turn on"),n=h._("Not now");function a(){var a=d("PolarisReactRedux").useDispatch(),e=function(){a(d("PolarisDirectActions").closeVerifiedUserCallingNotEnabledModal())},f=d("CometRelay").useLazyLoadQuery(i!==void 0?i:i=b("PolarisDirectVerifiedUserCallingNotEnabledModalQuery.graphql"),{});f=f.fxcal_settings;var g=(f==null?void 0:f.should_user_see_centralized_settings_new_app_ia)===!0&&c("gkx")("2652");f=function(){e(),d("browserHistory").browserHistory.push(g?d("PolarisRoutes").HOW_OTHERS_CAN_INTERACT_PATH:d("PolarisRoutes").PRIVACY_AND_SECURITY_PATH)};return j.jsx(c("IGCoreModal"),{children:j.jsxs(c("IGDSActionDialog.react"),{body:k,closeButtonPosition:"background",onModalClose:e,title:l,children:[j.jsx(d("IGDSDialogItem.react").IGDSDialogItem,{color:"primaryButton",onClick:f,children:m}),j.jsx(d("IGDSDialogItem.react").IGDSDialogItem,{onClick:e,children:n})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);