"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[28945],{63323:(e,t,n)=>{n.d(t,{b:()=>v,y:()=>g});n(88233);var o=n(52322),r=n(2784),i=n(74495),l=n(97879);var a=n(61872),s=n(49687),u=n(52175);const d=e=>{let{titleInfo:t}=e;return function(e){const t=(0,i.useDispatch)();(0,r.useEffect)((()=>{e&&t(l.Qu.prepend(e))}),[t,e])}(null===t||void 0===t?void 0:t.titleId),null},c=e=>{let{titleInfo:t}=e;const n=(0,u.xz)();return(0,r.useEffect)((()=>{const e=null===t||void 0===t?void 0:t.details.xboxTitleId;e&&n(e.toString())}),[t,n]),null},g=()=>{const e=(0,s.nj)(a.y.EnableTitleHubMru),t=(0,u.xz)(),n=(0,i.useDispatch)();return(0,r.useCallback)((o=>{var r;e&&null!==o&&void 0!==o&&null!==(r=o.details)&&void 0!==r&&r.xboxTitleId?t(o.details.xboxTitleId.toString()):null!==o&&void 0!==o&&o.titleId&&n(l.Qu.prepend(o.titleId))}),[e,t,n])},v=e=>{let{titleInfo:t}=e;return(0,s.nj)(a.y.EnableTitleHubMru)?(0,o.jsx)(c,{titleInfo:t}):(0,o.jsx)(d,{titleInfo:t})}},54509:(e,t,n)=>{n.r(t),n.d(t,{StreamPage:()=>Q,default:()=>W});var o=n(814),r=n.n(o),i=(n(71372),n(6886),n(52322)),l=n(46209),a=n(2784),s=n(18671),u=n(7267),d=n(63323),c=n(31749),g=n(43204);var v=n(89298),f=n(5317);var m=n(35626);var p=n(44442),x=(n(36728),n(74495)),P=n(40866);function b(e){let{context:t,children:n}=e;const o=null!==t&&void 0!==t?t:p.k,{unblockNavigation:r}=(()=>{const e=(0,u.k6)(),t=(0,a.useRef)(),n=(0,x.useSelector)(P.Cb),o=(0,a.useCallback)((()=>{var e;null===(e=t.current)||void 0===e||e.call(t),t.current=void 0}),[]);return(0,a.useEffect)((()=>(t.current=e.block(((t,r)=>null!==n&&void 0!==n&&n.isProvisioning?(o(),e.push(t),!1):(null===n||void 0===n||n.requestQuitTitle(t.pathname),!1))),o)),[n,e,o,null===n||void 0===n?void 0:n.xboxTitleId]),{unblockNavigation:o}})();return(0,i.jsx)(o.Provider,{value:{unblockNavigation:r},children:n})}n(31235);var I=n(16216),h=n(4896),j=n(81634),k=n(66747),S=n(79909),L=n(5839),_=n(25774),y=n(9606),D=n(33401),E=n(97906),U=n(5841),T=n(98204),R=n(5653),A=n(24516);const C=()=>{const{productId:e,productName:t}=(0,y.t)(),n=(0,l.useLogger)("PreLaunchChecks"),o=function(){const e=(0,h.T)();if((0,_.r)())return!1;return e}(),r=(0,E.I)(),[a]=(0,k.Z)(e),s=function(e,t){var n;const{location:o}=(0,I.vzw)(),[r]=(0,D.j)(),i=(0,S.M)(r||[]),l=null!==(n=null===o||void 0===o?void 0:o.pathname)&&void 0!==n?n:(0,A.Rz)(),a=R.Product.getLink(e,t);if(l===a||l===decodeURIComponent(a)||l===R.UnfriendlyProduct.getLink(e))return!0;if(i.includes(e))return!0;const s=R.Play.getLink(e,t);if(l===s||l===decodeURIComponent(s)||R.UnfriendlyPlay.getLink(e))return!0;return!1}(e,t),[d,{loading:c}]=(0,U.E)(),[g,{loading:v}]=function(e){var t;const[n,o]=(0,T.I)(e);return[null===n||void 0===n||null===(t=n.details)||void 0===t?void 0:t.hasEntitlement,o]}(e),[f]=(0,L.B)(e);return d||c?f||(0,j._O)(e)||g||v?o?(n.debug("Redirecting to PDP page: App is not a PWA"),(0,i.jsx)(u.l_,{to:R.Product.getLink(e,t)})):"blocked"===r?(n.debug("Redirecting to PDP page: Browser is blocked"),(0,i.jsx)(u.l_,{to:R.Product.getLink(e,t)})):a&&!a.isAllowed?(n.debug(`Redirecting to PDP page: Family safety settings: ${a.reason}`),(0,i.jsx)(u.l_,{to:R.Product.getLink(e,t)})):s?null:(n.debug("Redirecting to PDP page: User has not seen ESRB rating on PDP page"),(0,i.jsx)(u.l_,{to:R.Product.getLink(e,t)})):(n.debug("Redirecting to PDP page: User does not have entitlement"),(0,i.jsx)(u.l_,{to:R.Product.getLink(e,t)})):(n.debug("Redirecting to PDP page: User is not authed with Game Stream"),(0,i.jsx)(u.l_,{to:R.Product.getLink(e,t)}))};var w=n(53236),M=n(21898),G=n(27168),B=n(55415),H=n(3968),N=n(87495),O=n(5801),q=n(43947);function z(e){let{productId:t,product:n}=e;const[o]=(0,U.E)(),s=function(e){const t=(0,l.useUniqueLogger)("StreamPage/useAreGameStreamRequirementsMet"),[n,{loading:o}]=(0,g.l)();return null==e?(t.debug("Waiting for StreamUser to be defined"),!1):n?!o||(t.debug("Login is currently in progress and must resolve before allowing GameStream to start"),!1):(t.debug("Waiting for a client-side login to occur rather than using the hydrated StreamUser since a server-side authentication may have an incorrect region"),!1)}(o),{streamClient:p}=(0,H.S)(),[x,{loading:P,error:I}]=(0,T.I)(t);(0,m.y)();const h=function(){const e=(0,u.TH)();return(0,a.useMemo)((()=>{if(e.state&&(0,f.Id)(e.state))return{type:"gameInvite"===e.state.kind?v.GameInviteType.Invite:v.GameInviteType.Join,jsonPayload:e.state.payload}}),[e.state])}(),j=function(){const e=(0,u.TH)();return(0,a.useMemo)((()=>{if(e.state&&(0,f._U)(e.state))return e.state.payload}),[e.state])}(),k=(0,a.useMemo)((()=>x?{connectMode:"cloud-connect",titleInfo:r()(r()({},x),{},{product:n}),gameInvite:h,stateShare:j}:void 0),[x,n,h,j]),S=(0,l.useUniqueLogger)("StreamPage");return(0,a.useEffect)((()=>{k||P||S.error("TitleInfo not found when boostrapping GameStream.",I)}),[S,k,P,I]),k||P?(0,i.jsxs)(M.S,{context:"StreamPage",childrenDescription:"GameStreamBootstrapper",children:[(0,i.jsx)(C,{}),k&&s&&o&&(0,i.jsxs)(b,{children:[(0,i.jsx)(c._,{user:o,streamClient:p,config:k}),(0,i.jsx)(d.b,{titleInfo:k.titleInfo})]})]}):(0,i.jsx)(q.X,{error:null!==I&&void 0!==I?I:new Error("TitleInfo not found when boostrapping GameStream.")})}const Q=()=>{const{productId:e}=(0,u.UO)(),[t]=(0,B.M)(e);return(0,i.jsxs)(O.Pl,{location:"StreamPage",children:[(0,i.jsxs)(s.q,{children:[(0,i.jsx)("meta",{name:"viewport",content:N.Yk}),(0,i.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,i.jsx)(G.V,{title:null===t||void 0===t?void 0:t.title}),(0,i.jsx)(w.I,{children:(0,i.jsx)(z,{productId:e,product:t})})]})},W=Q}}]);
//# sourceMappingURL=stream-page.3b358475.chunk.js.map