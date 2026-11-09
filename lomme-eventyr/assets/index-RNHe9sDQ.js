(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Uh="180",nm=0,Mu=1,im=2,ud=1,fd=2,Ri=3,zi=0,en=1,Bt=2,ki=0,fr=1,Zt=2,bu=3,Su=4,sm=5,vs=100,rm=101,om=102,am=103,lm=104,cm=200,hm=201,um=202,fm=203,wc=204,Tc=205,dm=206,pm=207,mm=208,gm=209,vm=210,xm=211,_m=212,ym=213,Mm=214,Ec=0,Ac=1,Rc=2,vr=3,Cc=4,Pc=5,Ic=6,Lc=7,Nh=0,bm=1,Sm=2,es=0,dd=1,pd=2,md=3,kh=4,gd=5,vd=6,xd=7,wu="attached",wm="detached",_d=300,xr=301,_r=302,Dc=303,Uc=304,al=306,is=1e3,Zi=1001,ja=1002,Yt=1003,yd=1004,io=1005,dn=1006,Oa=1007,Li=1008,pi=1009,Md=1010,bd=1011,go=1012,Oh=1013,ws=1014,ni=1015,Oi=1016,Fh=1017,zh=1018,vo=1020,Sd=35902,wd=35899,Td=1021,Ed=1022,Mn=1023,xo=1026,_o=1027,Lr=1028,Bh=1029,Ad=1030,Hh=1031,Vh=1033,Fa=33776,za=33777,Ba=33778,Ha=33779,Nc=35840,kc=35841,Oc=35842,Fc=35843,zc=36196,Bc=37492,Hc=37496,Vc=37808,Gc=37809,Wc=37810,Xc=37811,jc=37812,Kc=37813,qc=37814,$c=37815,Yc=37816,Jc=37817,Zc=37818,Qc=37819,eh=37820,th=37821,nh=36492,ih=36494,sh=36495,rh=36283,oh=36284,ah=36285,lh=36286,Rd=2200,Tm=2201,Em=2202,yo=2300,Mo=2301,wl=2302,or=2400,ar=2401,Ka=2402,Gh=2500,Am=2501,Rm=0,Cd=1,ch=2,Cm=3200,Pm=3201,ll=0,Im=1,Ji="",Ct="srgb",pn="srgb-linear",qa="linear",vt="srgb",Ds=7680,Tu=519,Lm=512,Dm=513,Um=514,Pd=515,Nm=516,km=517,Om=518,Fm=519,hh=35044,Eu="300 es",ui=2e3,$a=2001;class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Au=1234567;const oo=Math.PI/180,yr=180/Math.PI;function jn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[s&255]+nn[s>>8&255]+nn[s>>16&255]+nn[s>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function st(s,e,t){return Math.max(e,Math.min(t,s))}function Wh(s,e){return(s%e+e)%e}function zm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Bm(s,e,t){return s!==e?(t-s)/(e-s):0}function ao(s,e,t){return(1-t)*s+t*e}function Hm(s,e,t,n){return ao(s,e,1-Math.exp(-t*n))}function Vm(s,e=1){return e-Math.abs(Wh(s,e*2)-e)}function Gm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Wm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Xm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function jm(s,e){return s+Math.random()*(e-s)}function Km(s){return s*(.5-Math.random())}function qm(s){s!==void 0&&(Au=s);let e=Au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $m(s){return s*oo}function Ym(s){return s*yr}function Jm(s){return(s&s-1)===0&&s!==0}function Zm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function e0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ei(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ms={DEG2RAD:oo,RAD2DEG:yr,generateUUID:jn,clamp:st,euclideanModulo:Wh,mapLinear:zm,inverseLerp:Bm,lerp:ao,damp:Hm,pingpong:Vm,smoothstep:Gm,smootherstep:Wm,randInt:Xm,randFloat:jm,randFloatSpread:Km,seededRandom:qm,degToRad:$m,radToDeg:Ym,isPowerOfTwo:Jm,ceilPowerOfTwo:Zm,floorPowerOfTwo:Qm,setQuaternionFromProperEuler:e0,normalize:xt,denormalize:ei};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*x,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const P=Math.sqrt(b),A=Math.atan2(P,p*S);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const M=a*S;if(l=l*m+f*M,c=c*m+d*M,h=h*m+g*M,u=u*m+x*M,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tl=new I,Ru=new Kn;class et{constructor(e,t,n,i,r,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],S=i[1],b=i[4],M=i[7],P=i[2],A=i[5],U=i[8];return r[0]=o*x+a*S+l*P,r[3]=o*m+a*b+l*A,r[6]=o*p+a*M+l*U,r[1]=c*x+h*S+u*P,r[4]=c*m+h*b+u*A,r[7]=c*p+h*M+u*U,r[2]=f*x+d*S+g*P,r[5]=f*m+d*b+g*A,r[8]=f*p+d*M+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(El.makeScale(e,t)),this}rotate(e){return this.premultiply(El.makeRotation(-e)),this}translate(e,t){return this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const El=new et;function Id(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function t0(){const s=bo("canvas");return s.style.display="block",s}const Cu={};function So(s){s in Cu||(Cu[s]=!0,console.warn(s))}function n0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Pu=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i0(){const s={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ji?qa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return So("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return So("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[pn]:{primaries:e,whitePoint:n,transfer:qa,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),s}const ut=i0();function Fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function dr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class s0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Us===void 0&&(Us=bo("canvas")),Us.width=e.width,Us.height=e.height;const i=Us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let r0=0;class Xh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Al(i[o].image)):r.push(Al(i[o]))}else r=Al(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Al(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?s0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let o0=0;const Rl=new I;class Wt extends Rs{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Zi,i=Zi,r=dn,o=Li,a=Mn,l=pi,c=Wt.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=jn(),this.name="",this.source=new Xh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=_d;Wt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(d+1)/2,P=(p+1)/2,A=(h+f)/4,U=(u+x)/4,_=(g+m)/4;return b>M&&b>P?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=U/n):M>P?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=_/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=U/r,i=_/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a0 extends Rs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Wt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Xh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends a0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ld extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l0 extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$o.copy(n.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Yo.subVectors(this.max,Hr),Ns.subVectors(e.a,Hr),ks.subVectors(e.b,Hr),Os.subVectors(e.c,Hr),Vi.subVectors(ks,Ns),Gi.subVectors(Os,ks),ls.subVectors(Ns,Os);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-ls.z,ls.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,ls.z,0,-ls.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-ls.y,ls.x,0];return!Cl(t,Ns,ks,Os,Yo)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,Ns,ks,Os,Yo))?!1:(Jo.crossVectors(Vi,Gi),t=[Jo.x,Jo.y,Jo.z],Cl(t,Ns,ks,Os,Yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new I,new I,new I,new I,new I,new I,new I,new I],Jn=new I,$o=new Tn,Ns=new I,ks=new I,Os=new I,Vi=new I,Gi=new I,ls=new I,Hr=new I,Yo=new I,Jo=new I,cs=new I;function Cl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){cs.fromArray(s,r);const a=i.x*Math.abs(cs.x)+i.y*Math.abs(cs.y)+i.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const c0=new Tn,Vr=new I,Pl=new I;class gi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):c0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Pl)),this.expandByPoint(Vr.copy(e.center).sub(Pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const bi=new I,Il=new I,Zo=new I,Wi=new I,Ll=new I,Qo=new I,Dl=new I;class cl{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Il.copy(e).add(t).multiplyScalar(.5),Zo.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Il);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Zo),a=Wi.dot(this.direction),l=-Wi.dot(Zo),c=Wi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Il).addScaledVector(Zo,f),d}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const n=bi.dot(this.direction),i=bi.dot(bi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,i,r){Ll.subVectors(t,e),Qo.subVectors(n,e),Dl.crossVectors(Ll,Qo);let o=this.direction.dot(Dl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(Qo.crossVectors(Wi,Qo));if(l<0)return null;const c=a*this.direction.dot(Ll.cross(Wi));if(c<0||l+c>o)return null;const h=-a*Wi.dot(Dl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,g,x,m){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,g,x,m)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Fs.setFromMatrixColumn(e,0).length(),r=1/Fs.setFromMatrixColumn(e,1).length(),o=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h0,e,u0)}lookAt(e,t,n){const i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Xi.crossVectors(n,Rn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Xi.crossVectors(n,Rn)),Xi.normalize(),ea.crossVectors(Rn,Xi),i[0]=Xi.x,i[4]=ea.x,i[8]=Rn.x,i[1]=Xi.y,i[5]=ea.y,i[9]=Rn.y,i[2]=Xi.z,i[6]=ea.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],b=n[7],M=n[11],P=n[15],A=i[0],U=i[4],_=i[8],v=i[12],y=i[1],C=i[5],F=i[9],H=i[13],K=i[2],q=i[6],Y=i[10],me=i[14],J=i[3],Se=i[7],Ae=i[11],Le=i[15];return r[0]=o*A+a*y+l*K+c*J,r[4]=o*U+a*C+l*q+c*Se,r[8]=o*_+a*F+l*Y+c*Ae,r[12]=o*v+a*H+l*me+c*Le,r[1]=h*A+u*y+f*K+d*J,r[5]=h*U+u*C+f*q+d*Se,r[9]=h*_+u*F+f*Y+d*Ae,r[13]=h*v+u*H+f*me+d*Le,r[2]=g*A+x*y+m*K+p*J,r[6]=g*U+x*C+m*q+p*Se,r[10]=g*_+x*F+m*Y+p*Ae,r[14]=g*v+x*H+m*me+p*Le,r[3]=S*A+b*y+M*K+P*J,r[7]=S*U+b*C+M*q+P*Se,r[11]=S*_+b*F+M*Y+P*Ae,r[15]=S*v+b*H+M*me+P*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,b=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,M=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,P=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,A=t*S+n*b+i*M+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/A;return e[0]=S*U,e[1]=(x*f*r-u*m*r-x*i*d+n*m*d+u*i*p-n*f*p)*U,e[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*U,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*U,e[4]=b*U,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*p+t*f*p)*U,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*U,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*U,e[8]=M*U,e[9]=(g*u*r-h*x*r-g*n*d+t*x*d+h*n*p-t*u*p)*U,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*U,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*U,e[12]=P*U,e[13]=(h*x*i-g*u*i+g*n*f-t*x*f-h*n*m+t*u*m)*U,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*m-t*a*m)*U,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*U,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,S=l*c,b=l*h,M=l*u,P=n.x,A=n.y,U=n.z;return i[0]=(1-(x+p))*P,i[1]=(d+M)*P,i[2]=(g-b)*P,i[3]=0,i[4]=(d-M)*A,i[5]=(1-(f+p))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(g+b)*U,i[9]=(m-S)*U,i[10]=(1-(f+x))*U,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Fs.set(i[0],i[1],i[2]).length();const o=Fs.set(i[4],i[5],i[6]).length(),a=Fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Zn.copy(this);const c=1/r,h=1/o,u=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ui,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===ui)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===$a)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ui,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===ui)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===$a)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fs=new I,Zn=new qe,h0=new I(0,0,0),u0=new I(1,1,1),Xi=new I,ea=new I,Rn=new I,Lu=new qe,Du=new Kn;class $n{constructor(e=0,t=0,n=0,i=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Du.setFromEuler(this),this.setFromQuaternion(Du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let f0=0;const Uu=new I,zs=new Kn,Si=new qe,ta=new I,Gr=new I,d0=new I,p0=new Kn,Nu=new I(1,0,0),ku=new I(0,1,0),Ou=new I(0,0,1),Fu={type:"added"},m0={type:"removed"},Bs={type:"childadded",child:null},Ul={type:"childremoved",child:null};class At extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new I,t=new $n,n=new Kn,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new et}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Nu,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(Ou,e)}translateOnAxis(e,t){return Uu.copy(e).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nu,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(Ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Gr,ta,this.up):Si.lookAt(ta,Gr,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(Si),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fu),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m0),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fu),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,d0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,p0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}At.DEFAULT_UP=new I(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new I,wi=new I,Nl=new I,Ti=new I,Hs=new I,Vs=new I,zu=new I,kl=new I,Ol=new I,Fl=new I,zl=new pt,Bl=new pt,Hl=new pt;class Hn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qn.subVectors(e,t),i.cross(Qn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Qn.subVectors(i,t),wi.subVectors(n,t),Nl.subVectors(e,t);const o=Qn.dot(Qn),a=Qn.dot(wi),l=Qn.dot(Nl),c=wi.dot(wi),h=wi.dot(Nl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return zl.setScalar(0),Bl.setScalar(0),Hl.setScalar(0),zl.fromBufferAttribute(e,t),Bl.fromBufferAttribute(e,n),Hl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(zl,r.x),o.addScaledVector(Bl,r.y),o.addScaledVector(Hl,r.z),o}static isFrontFacing(e,t,n,i){return Qn.subVectors(n,t),wi.subVectors(e,t),Qn.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Qn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Hs.subVectors(i,n),Vs.subVectors(r,n),kl.subVectors(e,n);const l=Hs.dot(kl),c=Vs.dot(kl);if(l<=0&&c<=0)return t.copy(n);Ol.subVectors(e,i);const h=Hs.dot(Ol),u=Vs.dot(Ol);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Hs,o);Fl.subVectors(e,r);const d=Hs.dot(Fl),g=Vs.dot(Fl);if(g>=0&&d<=g)return t.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Vs,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return zu.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(zu,a);const p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Hs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},na={h:0,s:0,l:0};function Vl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Wh(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Vl(o,r,e+1/3),this.g=Vl(o,r,e),this.b=Vl(o,r,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return ut.workingToColorSpace(sn.copy(this),e),Math.round(st(sn.r*255,0,255))*65536+Math.round(st(sn.g*255,0,255))*256+Math.round(st(sn.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(sn.copy(this),t);const n=sn.r,i=sn.g,r=sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Ct){ut.workingToColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,i=sn.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(na);const n=ao(ji.h,na.h,t),i=ao(ji.s,na.s,t),r=ao(ji.l,na.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new be;be.NAMES=Ud;let g0=0;class Dn extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=fr,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Tc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Tc&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mt extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new I,ia=new pe;let v0=0;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hh,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hh&&(e.usage=this.usage),e}}class Nd extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kd extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let x0=0;const On=new qe,Gl=new At,Gs=new I,Cn=new Tn,Wr=new Tn,Kt=new I;class Pt extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?kd:Nd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Cn.min,Wr.min),Cn.expandByPoint(Kt),Kt.addVectors(Cn.max,Wr.max),Cn.expandByPoint(Kt)):(Cn.expandByPoint(Wr.min),Cn.expandByPoint(Wr.max))}Cn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Kt.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(e,c),Kt.add(Gs)),i=Math.max(i,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new I,l[_]=new I;const c=new I,h=new I,u=new I,f=new pe,d=new pe,g=new pe,x=new I,m=new I;function p(_,v,y){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,v),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[_].add(x),a[v].add(x),a[y].add(x),l[_].add(m),l[v].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,v=S.length;_<v;++_){const y=S[_],C=y.start,F=y.count;for(let H=C,K=C+F;H<K;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new I,M=new I,P=new I,A=new I;function U(_){P.fromBufferAttribute(i,_),A.copy(P);const v=a[_];b.copy(v),b.sub(P.multiplyScalar(P.dot(v))).normalize(),M.crossVectors(A,v);const C=M.dot(l[_])<0?-1:1;o.setXYZW(_,b.x,b.y,b.z,C)}for(let _=0,v=S.length;_<v;++_){const y=S[_],C=y.start,F=y.count;for(let H=C,K=C+F;H<K;H+=3)U(e.getX(H+0)),U(e.getX(H+1)),U(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new zt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bu=new qe,hs=new cl,sa=new gi,Hu=new I,ra=new I,oa=new I,aa=new I,Wl=new I,la=new I,Vu=new I,ca=new I;class de extends At{constructor(e=new Pt,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Wl.fromBufferAttribute(u,e),o?la.addScaledVector(Wl,h):la.addScaledVector(Wl.sub(t),h))}t.add(la)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(sa.containsPoint(hs.origin)===!1&&(hs.intersectSphere(sa,Hu)===null||hs.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(Bu.copy(r).invert(),hs.copy(e.ray).applyMatrix4(Bu),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,P=b;M<P;M+=3){const A=a.getX(M),U=a.getX(M+1),_=a.getX(M+2);i=ha(this,p,e,n,c,h,u,A,U,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const S=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);i=ha(this,o,e,n,c,h,u,S,b,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,P=b;M<P;M+=3){const A=M,U=M+1,_=M+2;i=ha(this,p,e,n,c,h,u,A,U,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const S=m,b=m+1,M=m+2;i=ha(this,o,e,n,c,h,u,S,b,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function _0(s,e,t,n,i,r,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===zi,a),l===null)return null;ca.copy(a),ca.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ca);return c<t.near||c>t.far?null:{distance:c,point:ca.clone(),object:s}}function ha(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ra),s.getVertexPosition(l,oa),s.getVertexPosition(c,aa);const h=_0(s,e,t,n,ra,oa,aa,Vu);if(h){const u=new I;Hn.getBarycoord(Vu,ra,oa,aa,u),i&&(h.uv=Hn.getInterpolatedAttribute(i,a,l,c,u,new pe)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,a,l,c,u,new pe)),o&&(h.normal=Hn.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Hn.getNormal(ra,oa,aa,f.normal),h.face=f,h.barycoord=u}return h}class wt extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function g(x,m,p,S,b,M,P,A,U,_,v){const y=M/U,C=P/_,F=M/2,H=P/2,K=A/2,q=U+1,Y=_+1;let me=0,J=0;const Se=new I;for(let Ae=0;Ae<Y;Ae++){const Le=Ae*C-H;for(let Fe=0;Fe<q;Fe++){const Ye=Fe*y-F;Se[x]=Ye*S,Se[m]=Le*b,Se[p]=K,c.push(Se.x,Se.y,Se.z),Se[x]=0,Se[m]=0,Se[p]=A>0?1:-1,h.push(Se.x,Se.y,Se.z),u.push(Fe/U),u.push(1-Ae/_),me+=1}}for(let Ae=0;Ae<_;Ae++)for(let Le=0;Le<U;Le++){const Fe=f+Le+q*Ae,Ye=f+Le+q*(Ae+1),rt=f+(Le+1)+q*(Ae+1),nt=f+(Le+1)+q*Ae;l.push(Fe,Ye,nt),l.push(Ye,rt,nt),J+=6}a.addGroup(d,J,v),d+=J,f+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function hn(s){const e={};for(let t=0;t<s.length;t++){const n=Mr(s[t]);for(const i in n)e[i]=n[i]}return e}function y0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Od(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const br={clone:Mr,merge:hn};var M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=b0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fd extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new I,Gu=new pe,Wu=new pe;class Qt extends Fd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Gu,Wu),t.subVectors(Wu,Gu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,Xs=1;class S0 extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qt(Ws,Xs,e,t);i.layers=this.layers,this.add(i);const r=new Qt(Ws,Xs,e,t);r.layers=this.layers,this.add(r);const o=new Qt(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const a=new Qt(Ws,Xs,e,t);a.layers=this.layers,this.add(a);const l=new Qt(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Ws,Xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zd extends Wt{constructor(e=[],t=xr,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class w0 extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new wt(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ki});r.uniforms.tEquirect.value=t;const o=new de(i,r),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=dn),new S0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Je extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T0={type:"move"};class Xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new hl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ul extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hh,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new I;class wo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zo extends Dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let js;const Xr=new I,Ks=new I,qs=new I,$s=new pe,jr=new pe,Hd=new qe,ua=new I,Kr=new I,fa=new I,Xu=new pe,jl=new pe,ju=new pe;class fl extends At{constructor(e=new zo){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bd(t,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new wo(n,3,0,!1)),js.setAttribute("uv",new wo(n,2,3,!1))}this.geometry=js,this.material=e,this.center=new pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),Hd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-qs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;da(ua.set(-.5,-.5,0),qs,o,Ks,i,r),da(Kr.set(.5,-.5,0),qs,o,Ks,i,r),da(fa.set(.5,.5,0),qs,o,Ks,i,r),Xu.set(0,0),jl.set(1,0),ju.set(1,1);let a=e.ray.intersectTriangle(ua,Kr,fa,!1,Xr);if(a===null&&(da(Kr.set(-.5,.5,0),qs,o,Ks,i,r),jl.set(0,1),a=e.ray.intersectTriangle(ua,fa,Kr,!1,Xr),a===null))return;const l=e.ray.origin.distanceTo(Xr);l<e.near||l>e.far||t.push({distance:l,point:Xr.clone(),uv:Hn.getInterpolation(Xr,ua,Kr,fa,Xu,jl,ju,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function da(s,e,t,n,i,r){$s.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(jr.x=r*$s.x-i*$s.y,jr.y=i*$s.x+r*$s.y):jr.copy($s),s.copy(e),s.x+=jr.x,s.y+=jr.y,s.applyMatrix4(Hd)}const Ku=new I,qu=new pt,$u=new pt,E0=new I,Yu=new qe,pa=new I,Kl=new gi,Ju=new qe,ql=new cl;class A0 extends de{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wu,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingBox.expandByPoint(pa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingSphere.expandByPoint(pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kl.copy(this.boundingSphere),Kl.applyMatrix4(i),e.ray.intersectsSphere(Kl)!==!1&&(Ju.copy(i).invert(),ql.copy(e.ray).applyMatrix4(Ju),!(this.boundingBox!==null&&ql.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ql)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;qu.fromBufferAttribute(i.attributes.skinIndex,e),$u.fromBufferAttribute(i.attributes.skinWeight,e),Ku.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=$u.getComponent(r);if(o!==0){const a=qu.getComponent(r);Yu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(E0.copy(Ku).applyMatrix4(Yu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vd extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cs extends Wt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Yt,h=Yt,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zu=new qe,R0=new qe;class jh{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:R0;Zu.multiplyMatrices(a,t[r]),Zu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Cs(t,e,e,Mn,ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Vd),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class uh extends zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ys=new qe,Qu=new qe,ma=[],ef=new Tn,C0=new qe,qr=new de,$r=new gi;class ys extends de{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,C0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),ef.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(ef)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),$r.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ys),Qu.multiplyMatrices(n,Ys),qr.matrixWorld=Qu,qr.raycast(e,ma);for(let o=0,a=ma.length;o<a;o++){const l=ma[o];l.instanceId=r,l.object=this,t.push(l)}ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cs(new Float32Array(i*this.count),i,this.count,Lr,ni));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $l=new I,P0=new I,I0=new et;class ms{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$l.subVectors(n,t).cross(P0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($l),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||I0.getNormalMatrix(e),i=this.coplanarPoint($l).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new gi,L0=new pe(.5,.5),ga=new I;class Kh{constructor(e=new ms,t=new ms,n=new ms,i=new ms,r=new ms,o=new ms){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],b=r[13],M=r[14],P=r[15];if(i[0].setComponents(c-o,d-h,p-g,P-S).normalize(),i[1].setComponents(c+o,d+h,p+g,P+S).normalize(),i[2].setComponents(c+a,d+u,p+x,P+b).normalize(),i[3].setComponents(c-a,d-u,p-x,P-b).normalize(),n)i[4].setComponents(l,f,m,M).normalize(),i[5].setComponents(c-l,d-f,p-m,P-M).normalize();else if(i[4].setComponents(c-l,d-f,p-m,P-M).normalize(),t===ui)i[5].setComponents(c+l,d+f,p+m,P+M).normalize();else if(t===$a)i[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);const t=L0.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ga.x=i.normal.x>0?e.max.x:e.min.x,ga.y=i.normal.y>0?e.max.y:e.min.y,ga.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gd extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ya=new I,Ja=new I,tf=new qe,Yr=new cl,va=new gi,Yl=new I,nf=new I;class qh extends At{constructor(e=new Pt,t=new Gd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ya.fromBufferAttribute(t,i-1),Ja.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ya.distanceTo(Ja);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(i),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;tf.copy(i).invert(),Yr.copy(e.ray).applyMatrix4(tf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=h.getX(x),S=h.getX(x+1),b=xa(this,e,Yr,l,p,S,x);b&&t.push(b)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(d),p=xa(this,e,Yr,l,x,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=xa(this,e,Yr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=xa(this,e,Yr,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xa(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Ya.fromBufferAttribute(a,i),Ja.fromBufferAttribute(a,r),t.distanceSqToSegment(Ya,Ja,Yl,nf)>n)return;Yl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Yl);if(!(c<e.near||c>e.far))return{distance:c,point:nf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const sf=new I,rf=new I;class D0 extends qh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)sf.fromBufferAttribute(t,i),rf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sf.distanceTo(rf);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class U0 extends qh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wd extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const of=new qe,fh=new cl,_a=new gi,ya=new I;class $h extends At{constructor(e=new Pt,t=new Wd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(i),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;of.copy(i).invert(),fh.copy(e.ray).applyMatrix4(of);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){const m=c.getX(g);ya.fromBufferAttribute(u,m),af(ya,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)ya.fromBufferAttribute(u,g),af(ya,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function af(s,e,t,n,i,r,o){const a=fh.distanceSqToPoint(s);if(a<t){const l=new I;fh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Sr extends Wt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xd extends Wt{constructor(e,t,n=ws,i,r,o,a=Yt,l=Yt,c,h=xo,u=1){if(h!==xo&&h!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jd extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yh extends Pt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,g=n*2+r,x=i+1,m=new I,p=new I;for(let S=0;S<=g;S++){let b=0,M=0,P=0,A=0;if(S<=n){const v=S/n,y=v*Math.PI/2;M=-h-e*Math.cos(y),P=e*Math.sin(y),A=-e*Math.cos(y),b=v*u}else if(S<=n+r){const v=(S-n)/r;M=-h+v*t,P=e,A=0,b=u+v*f}else{const v=(S-n-r)/n,y=v*Math.PI/2;M=h+e*Math.sin(y),P=e*Math.cos(y),A=e*Math.sin(y),b=u+f+v*u}const U=Math.max(0,Math.min(1,b/d));let _=0;S===0?_=.5/i:S===g&&(_=-.5/i);for(let v=0;v<=i;v++){const y=v/i,C=y*Math.PI*2,F=Math.sin(C),H=Math.cos(C);p.x=-P*H,p.y=M,p.z=P*F,a.push(p.x,p.y,p.z),m.set(-P*H,A,P*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(y+_,U)}if(S>0){const v=(S-1)*x;for(let y=0;y<i;y++){const C=v+y,F=v+y+1,H=S*x+y,K=S*x+y+1;o.push(C,F,H),o.push(F,K,H)}}}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yh(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ci extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new I,h=new pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ln extends Pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const x=[],m=n/2;let p=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function S(){const M=new I,P=new I;let A=0;const U=(t-e)/n;for(let _=0;_<=r;_++){const v=[],y=_/r,C=y*(t-e)+e;for(let F=0;F<=i;F++){const H=F/i,K=H*l+a,q=Math.sin(K),Y=Math.cos(K);P.x=C*q,P.y=-y*n+m,P.z=C*Y,u.push(P.x,P.y,P.z),M.set(q,U,Y).normalize(),f.push(M.x,M.y,M.z),d.push(H,1-y),v.push(g++)}x.push(v)}for(let _=0;_<i;_++)for(let v=0;v<r;v++){const y=x[v][_],C=x[v+1][_],F=x[v+1][_+1],H=x[v][_+1];(e>0||v!==0)&&(h.push(y,C,H),A+=3),(t>0||v!==r-1)&&(h.push(C,F,H),A+=3)}c.addGroup(p,A,0),p+=A}function b(M){const P=g,A=new pe,U=new I;let _=0;const v=M===!0?e:t,y=M===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const C=g;for(let F=0;F<=i;F++){const K=F/i*l+a,q=Math.cos(K),Y=Math.sin(K);U.x=v*Y,U.y=m*y,U.z=v*q,u.push(U.x,U.y,U.z),f.push(0,y,0),A.x=q*.5+.5,A.y=Y*.5*y+.5,d.push(A.x,A.y),g++}for(let F=0;F<i;F++){const H=P+F,K=C+F;M===!0?h.push(K,K+1,H):h.push(K+1,K,H),_+=3}c.addGroup(p,_,M===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lr extends Ln{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new lr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bo extends Pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const b=new I,M=new I,P=new I;for(let A=0;A<t.length;A+=3)d(t[A+0],b),d(t[A+1],M),d(t[A+2],P),l(b,M,P,S)}function l(S,b,M,P){const A=P+1,U=[];for(let _=0;_<=A;_++){U[_]=[];const v=S.clone().lerp(M,_/A),y=b.clone().lerp(M,_/A),C=A-_;for(let F=0;F<=C;F++)F===0&&_===A?U[_][F]=v:U[_][F]=v.clone().lerp(y,F/C)}for(let _=0;_<A;_++)for(let v=0;v<2*(A-_)-1;v++){const y=Math.floor(v/2);v%2===0?(f(U[_][y+1]),f(U[_+1][y]),f(U[_][y])):(f(U[_][y+1]),f(U[_+1][y+1]),f(U[_+1][y]))}}function c(S){const b=new I;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(S),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){const S=new I;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];const M=m(S)/2/Math.PI+.5,P=p(S)/Math.PI+.5;o.push(M,1-P)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const b=o[S+0],M=o[S+2],P=o[S+4],A=Math.max(b,M,P),U=Math.min(b,M,P);A>.9&&U<.1&&(b<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),P<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,b){const M=S*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function g(){const S=new I,b=new I,M=new I,P=new I,A=new pe,U=new pe,_=new pe;for(let v=0,y=0;v<r.length;v+=9,y+=6){S.set(r[v+0],r[v+1],r[v+2]),b.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),A.set(o[y+0],o[y+1]),U.set(o[y+2],o[y+3]),_.set(o[y+4],o[y+5]),P.copy(S).add(b).add(M).divideScalar(3);const C=m(P);x(A,y+0,S,C),x(U,y+2,b,C),x(_,y+4,M,C)}}function x(S,b,M,P){P<0&&S.x===1&&(o[b]=S.x-1),M.x===0&&M.z===0&&(o[b]=P/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.vertices,e.indices,e.radius,e.details)}}class To extends Bo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new To(e.radius,e.detail)}}class vi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new pe:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,i=[],r=[],o=[],a=new I,l=new qe;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(st(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(st(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jh extends vi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new pe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class N0 extends Jh{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zh(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Ma=new I,Jl=new Zh,Zl=new Zh,Ql=new Zh;class k0 extends vi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ma.subVectors(i[0],i[1]).add(i[0]),c=Ma);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ma.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Jl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Zl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Ql.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Jl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Zl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ql.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Jl.calc(l),Zl.calc(l),Ql.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lf(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function O0(s,e){const t=1-s;return t*t*e}function F0(s,e){return 2*(1-s)*s*e}function z0(s,e){return s*s*e}function lo(s,e,t,n){return O0(s,e)+F0(s,t)+z0(s,n)}function B0(s,e){const t=1-s;return t*t*t*e}function H0(s,e){const t=1-s;return 3*t*t*s*e}function V0(s,e){return 3*(1-s)*s*s*e}function G0(s,e){return s*s*s*e}function co(s,e,t,n,i){return B0(s,e)+H0(s,t)+V0(s,n)+G0(s,i)}class Kd extends vi{constructor(e=new pe,t=new pe,n=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new pe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(co(e,i.x,r.x,o.x,a.x),co(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class W0 extends vi{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(co(e,i.x,r.x,o.x,a.x),co(e,i.y,r.y,o.y,a.y),co(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qd extends vi{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X0 extends vi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $d extends vi{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(lo(e,i.x,r.x,o.x),lo(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends vi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(lo(e,i.x,r.x,o.x),lo(e,i.y,r.y,o.y),lo(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yd extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(lf(a,l.x,c.x,h.x,u.x),lf(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new pe().fromArray(i))}return this}}var dh=Object.freeze({__proto__:null,ArcCurve:N0,CatmullRomCurve3:k0,CubicBezierCurve:Kd,CubicBezierCurve3:W0,EllipseCurve:Jh,LineCurve:qd,LineCurve3:X0,QuadraticBezierCurve:$d,QuadraticBezierCurve3:j0,SplineCurve:Yd});class K0 extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new dh[i.type]().fromJSON(i))}return this}}class cf extends K0{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new qd(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new $d(this.currentPoint.clone(),new pe(e,t),new pe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Kd(this.currentPoint.clone(),new pe(e,t),new pe(n,i),new pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Yd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Jh(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wr extends cf{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new cf().fromJSON(i))}return this}}function q0(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Jd(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Q0(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<i;f+=t){const d=s[f],g=s[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Eo(r,o,t,a,l,c,0),o}function Jd(s,e,t,n,i){let r;if(i===hg(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=hf(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=hf(o/n|0,s[o],s[o+1],r);return r&&Tr(r,r.next)&&(Ro(r),r=r.next),r}function Ts(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Tr(t,t.next)||kt(t.prev,t,t.next)===0)){if(Ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Eo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&sg(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Y0(s,n,i,r):$0(s)){e.push(l.i,s.i,c.i),Ro(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=J0(Ts(s),e),Eo(s,e,t,n,i,r,2)):o===2&&Z0(s,e,t,n,i,r):Eo(Ts(s),e,t,n,i,r,1);break}}}function $0(s){const e=s.prev,t=s,n=s.next;if(kt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&so(i,a,r,l,o,c,g.x,g.y)&&kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Y0(s,e,t,n){const i=s.prev,r=s,o=s.next;if(kt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),x=Math.max(a,l,c),m=Math.max(h,u,f),p=ph(d,g,e,t,n),S=ph(x,m,e,t,n);let b=s.prevZ,M=s.nextZ;for(;b&&b.z>=p&&M&&M.z<=S;){if(b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&so(a,h,l,u,c,f,b.x,b.y)&&kt(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&so(a,h,l,u,c,f,M.x,M.y)&&kt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&so(a,h,l,u,c,f,b.x,b.y)&&kt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&so(a,h,l,u,c,f,M.x,M.y)&&kt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function J0(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Tr(n,i)&&Qd(n,t,t.next,i)&&Ao(n,i)&&Ao(i,n)&&(e.push(n.i,t.i,i.i),Ro(t),Ro(t.next),t=s=i),t=t.next}while(t!==s);return Ts(t)}function Z0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ag(o,a)){let l=ep(o,a);o=Ts(o,o.next),l=Ts(l,l.next),Eo(o,e,t,n,i,r,0),Eo(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Q0(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Jd(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(og(c))}i.sort(eg);for(let r=0;r<i.length;r++)t=tg(i[r],t);return t}function eg(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function tg(s,e){const t=ng(s,e);if(!t)return e;const n=ep(t,s);return Ts(n,n.next),Ts(t,t.next)}function ng(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(Tr(s,t))return t;do{if(Tr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Zd(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Ao(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&ig(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function ig(s,e){return kt(s.prev,s,e.prev)<0&&kt(e.next,s,s.next)<0}function sg(s,e,t,n){let i=s;do i.z===0&&(i.z=ph(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,rg(i)}function rg(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function ph(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function og(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Zd(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function so(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Zd(s,e,t,n,i,r,o,a)}function ag(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!lg(s,e)&&(Ao(s,e)&&Ao(e,s)&&cg(s,e)&&(kt(s.prev,s,e.prev)||kt(s,e.prev,e))||Tr(s,e)&&kt(s.prev,s,s.next)>0&&kt(e.prev,e,e.next)>0)}function kt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Tr(s,e){return s.x===e.x&&s.y===e.y}function Qd(s,e,t,n){const i=Sa(kt(s,e,t)),r=Sa(kt(s,e,n)),o=Sa(kt(t,n,s)),a=Sa(kt(t,n,e));return!!(i!==r&&o!==a||i===0&&ba(s,t,e)||r===0&&ba(s,n,e)||o===0&&ba(t,s,n)||a===0&&ba(t,e,n))}function ba(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Sa(s){return s>0?1:s<0?-1:0}function lg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Qd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ao(s,e){return kt(s.prev,s,s.next)<0?kt(s,e,s.next)>=0&&kt(s,s.prev,e)>=0:kt(s,e,s.prev)<0||kt(s,s.next,e)<0}function cg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function ep(s,e){const t=mh(s.i,s.x,s.y),n=mh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hf(s,e,t,n){const i=mh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ro(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function mh(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hg(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ug{static triangulate(e,t,n=2){return q0(e,t,n)}}class Di{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Di.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];uf(e),ff(n,e);let o=e.length;t.forEach(uf);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,ff(n,t[l]);const a=ug.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function uf(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ff(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Co extends Pt{constructor(e=new wr([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ct(i,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:fg;let b,M=!1,P,A,U,_;p&&(b=p.getSpacedPoints(h),M=!0,f=!1,P=p.computeFrenetFrames(h,!1),A=new I,U=new I,_=new I),f||(m=0,d=0,g=0,x=0);const v=a.extractPoints(c);let y=v.shape;const C=v.holes;if(!Di.isClockWise(y)){y=y.reverse();for(let ve=0,he=C.length;ve<he;ve++){const le=C[ve];Di.isClockWise(le)&&(C[ve]=le.reverse())}}function H(ve){const le=10000000000000001e-36;let ae=ve[0];for(let Te=1;Te<=ve.length;Te++){const _e=Te%ve.length,Ee=ve[_e],je=Ee.x-ae.x,Ve=Ee.y-ae.y,R=je*je+Ve*Ve,w=Math.max(Math.abs(Ee.x),Math.abs(Ee.y),Math.abs(ae.x),Math.abs(ae.y)),j=le*w*w;if(R<=j){ve.splice(_e,1),Te--;continue}ae=Ee}}H(y),C.forEach(H);const K=C.length,q=y;for(let ve=0;ve<K;ve++){const he=C[ve];y=y.concat(he)}function Y(ve,he,le){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),ve.clone().addScaledVector(he,le)}const me=y.length;function J(ve,he,le){let ae,Te,_e;const Ee=ve.x-he.x,je=ve.y-he.y,Ve=le.x-ve.x,R=le.y-ve.y,w=Ee*Ee+je*je,j=Ee*R-je*Ve;if(Math.abs(j)>Number.EPSILON){const ne=Math.sqrt(w),ce=Math.sqrt(Ve*Ve+R*R),ie=he.x-je/ne,ke=he.y+Ee/ne,T=le.x-R/ce,D=le.y+Ve/ce,z=((T-ie)*R-(D-ke)*Ve)/(Ee*R-je*Ve);ae=ie+Ee*z-ve.x,Te=ke+je*z-ve.y;const k=ae*ae+Te*Te;if(k<=2)return new pe(ae,Te);_e=Math.sqrt(k/2)}else{let ne=!1;Ee>Number.EPSILON?Ve>Number.EPSILON&&(ne=!0):Ee<-Number.EPSILON?Ve<-Number.EPSILON&&(ne=!0):Math.sign(je)===Math.sign(R)&&(ne=!0),ne?(ae=-je,Te=Ee,_e=Math.sqrt(w)):(ae=Ee,Te=je,_e=Math.sqrt(w/2))}return new pe(ae/_e,Te/_e)}const Se=[];for(let ve=0,he=q.length,le=he-1,ae=ve+1;ve<he;ve++,le++,ae++)le===he&&(le=0),ae===he&&(ae=0),Se[ve]=J(q[ve],q[le],q[ae]);const Ae=[];let Le,Fe=Se.concat();for(let ve=0,he=K;ve<he;ve++){const le=C[ve];Le=[];for(let ae=0,Te=le.length,_e=Te-1,Ee=ae+1;ae<Te;ae++,_e++,Ee++)_e===Te&&(_e=0),Ee===Te&&(Ee=0),Le[ae]=J(le[ae],le[_e],le[Ee]);Ae.push(Le),Fe=Fe.concat(Le)}let Ye;if(m===0)Ye=Di.triangulateShape(q,C);else{const ve=[],he=[];for(let le=0;le<m;le++){const ae=le/m,Te=d*Math.cos(ae*Math.PI/2),_e=g*Math.sin(ae*Math.PI/2)+x;for(let Ee=0,je=q.length;Ee<je;Ee++){const Ve=Y(q[Ee],Se[Ee],_e);Be(Ve.x,Ve.y,-Te),ae===0&&ve.push(Ve)}for(let Ee=0,je=K;Ee<je;Ee++){const Ve=C[Ee];Le=Ae[Ee];const R=[];for(let w=0,j=Ve.length;w<j;w++){const ne=Y(Ve[w],Le[w],_e);Be(ne.x,ne.y,-Te),ae===0&&R.push(ne)}ae===0&&he.push(R)}}Ye=Di.triangulateShape(ve,he)}const rt=Ye.length,nt=g+x;for(let ve=0;ve<me;ve++){const he=f?Y(y[ve],Fe[ve],nt):y[ve];M?(U.copy(P.normals[0]).multiplyScalar(he.x),A.copy(P.binormals[0]).multiplyScalar(he.y),_.copy(b[0]).add(U).add(A),Be(_.x,_.y,_.z)):Be(he.x,he.y,0)}for(let ve=1;ve<=h;ve++)for(let he=0;he<me;he++){const le=f?Y(y[he],Fe[he],nt):y[he];M?(U.copy(P.normals[ve]).multiplyScalar(le.x),A.copy(P.binormals[ve]).multiplyScalar(le.y),_.copy(b[ve]).add(U).add(A),Be(_.x,_.y,_.z)):Be(le.x,le.y,u/h*ve)}for(let ve=m-1;ve>=0;ve--){const he=ve/m,le=d*Math.cos(he*Math.PI/2),ae=g*Math.sin(he*Math.PI/2)+x;for(let Te=0,_e=q.length;Te<_e;Te++){const Ee=Y(q[Te],Se[Te],ae);Be(Ee.x,Ee.y,u+le)}for(let Te=0,_e=C.length;Te<_e;Te++){const Ee=C[Te];Le=Ae[Te];for(let je=0,Ve=Ee.length;je<Ve;je++){const R=Y(Ee[je],Le[je],ae);M?Be(R.x,R.y+b[h-1].y,b[h-1].x+le):Be(R.x,R.y,u+le)}}}re(),ue();function re(){const ve=i.length/3;if(f){let he=0,le=me*he;for(let ae=0;ae<rt;ae++){const Te=Ye[ae];Ue(Te[2]+le,Te[1]+le,Te[0]+le)}he=h+m*2,le=me*he;for(let ae=0;ae<rt;ae++){const Te=Ye[ae];Ue(Te[0]+le,Te[1]+le,Te[2]+le)}}else{for(let he=0;he<rt;he++){const le=Ye[he];Ue(le[2],le[1],le[0])}for(let he=0;he<rt;he++){const le=Ye[he];Ue(le[0]+me*h,le[1]+me*h,le[2]+me*h)}}n.addGroup(ve,i.length/3-ve,0)}function ue(){const ve=i.length/3;let he=0;De(q,he),he+=q.length;for(let le=0,ae=C.length;le<ae;le++){const Te=C[le];De(Te,he),he+=Te.length}n.addGroup(ve,i.length/3-ve,1)}function De(ve,he){let le=ve.length;for(;--le>=0;){const ae=le;let Te=le-1;Te<0&&(Te=ve.length-1);for(let _e=0,Ee=h+m*2;_e<Ee;_e++){const je=me*_e,Ve=me*(_e+1),R=he+ae+je,w=he+Te+je,j=he+Te+Ve,ne=he+ae+Ve;ot(R,w,j,ne)}}}function Be(ve,he,le){l.push(ve),l.push(he),l.push(le)}function Ue(ve,he,le){_t(ve),_t(he),_t(le);const ae=i.length/3,Te=S.generateTopUV(n,i,ae-3,ae-2,ae-1);N(Te[0]),N(Te[1]),N(Te[2])}function ot(ve,he,le,ae){_t(ve),_t(he),_t(ae),_t(he),_t(le),_t(ae);const Te=i.length/3,_e=S.generateSideWallUV(n,i,Te-6,Te-3,Te-2,Te-1);N(_e[0]),N(_e[1]),N(_e[3]),N(_e[1]),N(_e[2]),N(_e[3])}function _t(ve){i.push(l[ve*3+0]),i.push(l[ve*3+1]),i.push(l[ve*3+2])}function N(ve){r.push(ve.x),r.push(ve.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return dg(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new dh[i.type]().fromJSON(i)),new Co(n,e.options)}}const fg={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new pe(r,o),new pe(a,l),new pe(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new pe(o,1-l),new pe(c,1-u),new pe(f,1-g),new pe(x,1-p)]:[new pe(a,1-l),new pe(h,1-u),new pe(d,1-g),new pe(m,1-p)]}};function dg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Qh extends Bo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qh(e.radius,e.detail)}}class Po extends Bo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Po(e.radius,e.detail)}}class $t extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const S=p*f-o;for(let b=0;b<c;b++){const M=b*u-r;g.push(M,-S,0),x.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const b=S+c*p,M=S+c*(p+1),P=S+1+c*(p+1),A=S+1+c*p;d.push(b,M,A),d.push(M,P,A)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dr extends Pt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new I,g=new pe;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<i;x++){const m=x*(n+1);for(let p=0;p<n;p++){const S=p+m,b=S,M=S+n+1,P=S+n+2,A=S+1;a.push(b,M,A),a.push(M,P,A)}}this.setIndex(a),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class eu extends Pt{constructor(e=new wr([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ct(i,3)),this.setAttribute("normal",new ct(r,3)),this.setAttribute("uv",new ct(o,2));function c(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;Di.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];Di.isClockWise(S)===!0&&(g[m]=S.reverse())}const x=Di.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){const S=d[m];i.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=x.length;m<p;m++){const S=x[m],b=S[0]+u,M=S[1]+u,P=S[2]+u;n.push(b,M,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return pg(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new eu(n,e.curveSegments)}}function pg(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Vn extends Pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,f=new I,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const S=[],b=p/n;let M=0;p===0&&o===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const A=P/t;u.x=-e*Math.cos(i+A*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(i+A*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(A+M,1-b),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const b=h[p][S+1],M=h[p][S],P=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&d.push(b,M,A),(p!==n-1||l<Math.PI)&&d.push(M,P,A)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Io extends Pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const x=g/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const x=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,S=(i+1)*d+g;o.push(x,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mg extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gn extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xi extends Gn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class tu extends Dn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ts extends Dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gg extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vg extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function wa(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function xg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function _g(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function df(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function tp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Ho{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yg extends Ho{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:or,endingEnd:or}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ar:r=e,a=2*t-n;break;case Ka:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ar:o=e,l=2*n-t;break;case Ka:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,S=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+S*o[c+P]+b*o[l+P]+M*o[u+P];return r}}class np extends Ho{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}}class Mg extends Ho{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class si{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new np(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case wl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&xg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Mo;class Ur extends si{constructor(e,t,n){super(e,t,n)}}Ur.prototype.ValueTypeName="bool";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=yo;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class ip extends si{constructor(e,t,n,i){super(e,t,n,i)}}ip.prototype.ValueTypeName="color";class Er extends si{constructor(e,t,n,i){super(e,t,n,i)}}Er.prototype.ValueTypeName="number";class bg extends Ho{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Kn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ar extends si{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new bg(this.times,this.values,this.getValueSize(),e)}}Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Nr extends si{constructor(e,t,n){super(e,t,n)}}Nr.prototype.ValueTypeName="string";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=yo;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rr extends si{constructor(e,t,n,i){super(e,t,n,i)}}Rr.prototype.ValueTypeName="vector";class gh{constructor(e="",t=-1,n=[],i=Gh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(wg(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(si.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=_g(l);l=df(l,1,h),c=df(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Er(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,x){if(d.length!==0){const m=[],p=[];tp(d,m,p,g),m.length!==0&&x.push(new u(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(const x in d){const m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){const b=f[g];m.push(b.time),p.push(b.morphTarget===x?1:0)}i.push(new Er(".morphTargetInfluence["+x+"]",m,p))}l=d.length*o}else{const d=".bones["+t[u].name+"]";n(Rr,d+".position",f,"pos",i),n(Ar,d+".quaternion",f,"rot",i),n(Rr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Sg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Er;case"vector":case"vector2":case"vector3":case"vector4":return Rr;case"color":return ip;case"quaternion":return Ar;case"bool":case"boolean":return Ur;case"string":return Nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function wg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Sg(s.type);if(s.times===void 0){const t=[],n=[];tp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ui={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Tg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Eg=new Tg;class kr{constructor(e){this.manager=e!==void 0?e:Eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}kr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ei={};class Ag extends Error{constructor(e,t){super(e),this.response=t}}class sp extends kr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ui.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:i});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ei[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let x=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:b,value:M})=>{if(b)p.close();else{x+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let A=0,U=h.length;A<U;A++){const _=h[A];_.onProgress&&_.onProgress(P)}p.enqueue(M),S()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Ag(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ui.add(`file:${e}`,c);const h=Ei[e];delete Ei[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Ei[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ei[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Js=new WeakMap;class Rg extends kr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ui.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Js.get(o);u===void 0&&(u=[],Js.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=bo("img");function l(){h(),t&&t(this);const u=Js.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Js.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Ui.remove(`image:${e}`);const f=Js.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(u)}Js.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ui.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class nu extends kr{constructor(e){super(e)}load(e,t,n,i){const r=new Wt,o=new Rg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class dl extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class iu extends dl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ec=new qe,pf=new I,mf=new I;class su{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kh,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mf),t.updateMatrixWorld(),ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cg extends su{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=yr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rp extends dl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Cg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gf=new qe,Jr=new I,tc=new I;class Pg extends su{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jr),tc.copy(n.position),tc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(tc),n.updateMatrixWorld(),i.makeTranslation(-Jr.x,-Jr.y,-Jr.z),gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf,n.coordinateSystem,n.reversedDepth)}}class ru extends dl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pl extends Fd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ig extends su{constructor(){super(new pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ml extends dl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Ig}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ho{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const nc=new WeakMap;class Lg extends kr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ui.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(nc.has(o)===!0)i&&i(nc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ui.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),nc.set(l,c),Ui.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ui.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Dg extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ug{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Ng{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Kn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Kn.multiplyQuaternionsFlat(e,o,e,t,e,n),Kn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const ou="\\[\\]\\.:\\/",kg=new RegExp("["+ou+"]","g"),au="[^"+ou+"]",Og="[^"+ou.replace("\\.","")+"]",Fg=/((?:WC+[\/:])*)/.source.replace("WC",au),zg=/(WCOD+)?/.source.replace("WCOD",Og),Bg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",au),Hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",au),Vg=new RegExp("^"+Fg+zg+Bg+Hg+"$"),Gg=["material","materials","bones","map"];class Wg{constructor(e,t,n){const i=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class gt{constructor(e,t,n){this.path=t,this.parsedPath=n||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,n):new gt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kg,"")}static parseTrackName(e){const t=Vg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Gg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=Wg;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Xg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:or,endingEnd:or};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Tm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Am:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Gh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Em;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Rd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ar,i.endingEnd=ar):(e?i.endingStart=this.zeroSlopeAtStart?ar:or:i.endingStart=Ka,t?i.endingEnd=this.zeroSlopeAtEnd?ar:or:i.endingEnd=Ka)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const jg=new Float32Array(1);class lu extends Rs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const f=i[u],d=f.name;let g=h[d];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;g=new Ng(gt.create(n,d,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new np(new Float32Array(2),new Float32Array(2),1,jg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?gh.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Gh),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Xg(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?gh.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function vf(s,e,t,n){const i=Kg(n);switch(t){case Td:return s*e;case Lr:return s*e/i.components*i.byteLength;case Bh:return s*e/i.components*i.byteLength;case Ad:return s*e*2/i.components*i.byteLength;case Hh:return s*e*2/i.components*i.byteLength;case Ed:return s*e*3/i.components*i.byteLength;case Mn:return s*e*4/i.components*i.byteLength;case Vh:return s*e*4/i.components*i.byteLength;case Fa:case za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ba:case Ha:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kc:case Fc:return Math.max(s,16)*Math.max(e,8)/4;case Nc:case Oc:return Math.max(s,8)*Math.max(e,8)/2;case zc:case Bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case jc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case qc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $c:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case nh:case ih:case sh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case rh:case oh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ah:case lh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kg(s){switch(s){case pi:case Md:return{byteLength:1,components:1};case go:case bd:case Oi:return{byteLength:2,components:1};case Fh:case zh:return{byteLength:2,components:4};case ws:case Oh:case ni:return{byteLength:4,components:1};case Sd:case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);function op(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qg(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var $g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,av=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_v=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ev=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Av=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ox=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$x=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,n_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,i_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,c_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,d_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,__=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,S_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,E_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:$g,alphahash_pars_fragment:Yg,alphamap_fragment:Jg,alphamap_pars_fragment:Zg,alphatest_fragment:Qg,alphatest_pars_fragment:ev,aomap_fragment:tv,aomap_pars_fragment:nv,batching_pars_vertex:iv,batching_vertex:sv,begin_vertex:rv,beginnormal_vertex:ov,bsdfs:av,iridescence_fragment:lv,bumpmap_pars_fragment:cv,clipping_planes_fragment:hv,clipping_planes_pars_fragment:uv,clipping_planes_pars_vertex:fv,clipping_planes_vertex:dv,color_fragment:pv,color_pars_fragment:mv,color_pars_vertex:gv,color_vertex:vv,common:xv,cube_uv_reflection_fragment:_v,defaultnormal_vertex:yv,displacementmap_pars_vertex:Mv,displacementmap_vertex:bv,emissivemap_fragment:Sv,emissivemap_pars_fragment:wv,colorspace_fragment:Tv,colorspace_pars_fragment:Ev,envmap_fragment:Av,envmap_common_pars_fragment:Rv,envmap_pars_fragment:Cv,envmap_pars_vertex:Pv,envmap_physical_pars_fragment:Hv,envmap_vertex:Iv,fog_vertex:Lv,fog_pars_vertex:Dv,fog_fragment:Uv,fog_pars_fragment:Nv,gradientmap_pars_fragment:kv,lightmap_pars_fragment:Ov,lights_lambert_fragment:Fv,lights_lambert_pars_fragment:zv,lights_pars_begin:Bv,lights_toon_fragment:Vv,lights_toon_pars_fragment:Gv,lights_phong_fragment:Wv,lights_phong_pars_fragment:Xv,lights_physical_fragment:jv,lights_physical_pars_fragment:Kv,lights_fragment_begin:qv,lights_fragment_maps:$v,lights_fragment_end:Yv,logdepthbuf_fragment:Jv,logdepthbuf_pars_fragment:Zv,logdepthbuf_pars_vertex:Qv,logdepthbuf_vertex:ex,map_fragment:tx,map_pars_fragment:nx,map_particle_fragment:ix,map_particle_pars_fragment:sx,metalnessmap_fragment:rx,metalnessmap_pars_fragment:ox,morphinstance_vertex:ax,morphcolor_vertex:lx,morphnormal_vertex:cx,morphtarget_pars_vertex:hx,morphtarget_vertex:ux,normal_fragment_begin:fx,normal_fragment_maps:dx,normal_pars_fragment:px,normal_pars_vertex:mx,normal_vertex:gx,normalmap_pars_fragment:vx,clearcoat_normal_fragment_begin:xx,clearcoat_normal_fragment_maps:_x,clearcoat_pars_fragment:yx,iridescence_pars_fragment:Mx,opaque_fragment:bx,packing:Sx,premultiplied_alpha_fragment:wx,project_vertex:Tx,dithering_fragment:Ex,dithering_pars_fragment:Ax,roughnessmap_fragment:Rx,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Ix,shadowmap_vertex:Lx,shadowmask_pars_fragment:Dx,skinbase_vertex:Ux,skinning_pars_vertex:Nx,skinning_vertex:kx,skinnormal_vertex:Ox,specularmap_fragment:Fx,specularmap_pars_fragment:zx,tonemapping_fragment:Bx,tonemapping_pars_fragment:Hx,transmission_fragment:Vx,transmission_pars_fragment:Gx,uv_pars_fragment:Wx,uv_pars_vertex:Xx,uv_vertex:jx,worldpos_vertex:Kx,background_vert:qx,background_frag:$x,backgroundCube_vert:Yx,backgroundCube_frag:Jx,cube_vert:Zx,cube_frag:Qx,depth_vert:e_,depth_frag:t_,distanceRGBA_vert:n_,distanceRGBA_frag:i_,equirect_vert:s_,equirect_frag:r_,linedashed_vert:o_,linedashed_frag:a_,meshbasic_vert:l_,meshbasic_frag:c_,meshlambert_vert:h_,meshlambert_frag:u_,meshmatcap_vert:f_,meshmatcap_frag:d_,meshnormal_vert:p_,meshnormal_frag:m_,meshphong_vert:g_,meshphong_frag:v_,meshphysical_vert:x_,meshphysical_frag:__,meshtoon_vert:y_,meshtoon_frag:M_,points_vert:b_,points_frag:S_,shadow_vert:w_,shadow_frag:T_,sprite_vert:E_,sprite_frag:A_},Pe={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},hi={basic:{uniforms:hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new be(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:hn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:hn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new be(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:hn([Pe.points,Pe.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:hn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:hn([Pe.common,Pe.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:hn([Pe.sprite,Pe.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:hn([Pe.common,Pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:hn([Pe.lights,Pe.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};hi.physical={uniforms:hn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Ta={r:0,b:0,g:0},fs=new $n,R_=new qe;function C_(s,e,t,n,i,r,o){const a=new be(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function x(b){let M=!1;const P=g(b);P===null?p(a,l):P&&P.isColor&&(p(P,1),M=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,M){const P=g(M);P&&(P.isCubeTexture||P.mapping===al)?(h===void 0&&(h=new de(new wt(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Mr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,U,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),fs.copy(M.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(R_.makeRotationFromEuler(fs)),h.material.toneMapped=ut.getTransfer(P.colorSpace)!==vt,(u!==P||f!==P.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=P,f=P.version,d=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new de(new $t(2,2),new Ht({name:"BackgroundMaterial",uniforms:Mr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ut.getTransfer(P.colorSpace)!==vt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||f!==P.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=P,f=P.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(Ta,Od(s)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,M,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:m,dispose:S}}function P_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(y,C,F,H,K){let q=!1;const Y=u(H,F,C);r!==Y&&(r=Y,c(r.object)),q=d(y,H,F,K),q&&g(y,H,F,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(y,C,F,H),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,C,F){const H=F.wireframe===!0;let K=n[y.id];K===void 0&&(K={},n[y.id]=K);let q=K[C.id];q===void 0&&(q={},K[C.id]=q);let Y=q[H];return Y===void 0&&(Y=f(l()),q[H]=Y),Y}function f(y){const C=[],F=[],H=[];for(let K=0;K<t;K++)C[K]=0,F[K]=0,H[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:H,object:y,attributes:{},index:null}}function d(y,C,F,H){const K=r.attributes,q=C.attributes;let Y=0;const me=F.getAttributes();for(const J in me)if(me[J].location>=0){const Ae=K[J];let Le=q[J];if(Le===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(Le=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(Le=y.instanceColor)),Ae===void 0||Ae.attribute!==Le||Le&&Ae.data!==Le.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function g(y,C,F,H){const K={},q=C.attributes;let Y=0;const me=F.getAttributes();for(const J in me)if(me[J].location>=0){let Ae=q[J];Ae===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(Ae=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(Ae=y.instanceColor));const Le={};Le.attribute=Ae,Ae&&Ae.data&&(Le.data=Ae.data),K[J]=Le,Y++}r.attributes=K,r.attributesNum=Y,r.index=H}function x(){const y=r.newAttributes;for(let C=0,F=y.length;C<F;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const F=r.newAttributes,H=r.enabledAttributes,K=r.attributeDivisors;F[y]=1,H[y]===0&&(s.enableVertexAttribArray(y),H[y]=1),K[y]!==C&&(s.vertexAttribDivisor(y,C),K[y]=C)}function S(){const y=r.newAttributes,C=r.enabledAttributes;for(let F=0,H=C.length;F<H;F++)C[F]!==y[F]&&(s.disableVertexAttribArray(F),C[F]=0)}function b(y,C,F,H,K,q,Y){Y===!0?s.vertexAttribIPointer(y,C,F,K,q):s.vertexAttribPointer(y,C,F,H,K,q)}function M(y,C,F,H){x();const K=H.attributes,q=F.getAttributes(),Y=C.defaultAttributeValues;for(const me in q){const J=q[me];if(J.location>=0){let Se=K[me];if(Se===void 0&&(me==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),me==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),Se!==void 0){const Ae=Se.normalized,Le=Se.itemSize,Fe=e.get(Se);if(Fe===void 0)continue;const Ye=Fe.buffer,rt=Fe.type,nt=Fe.bytesPerElement,re=rt===s.INT||rt===s.UNSIGNED_INT||Se.gpuType===Oh;if(Se.isInterleavedBufferAttribute){const ue=Se.data,De=ue.stride,Be=Se.offset;if(ue.isInstancedInterleavedBuffer){for(let Ue=0;Ue<J.locationSize;Ue++)p(J.location+Ue,ue.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ue=0;Ue<J.locationSize;Ue++)m(J.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let Ue=0;Ue<J.locationSize;Ue++)b(J.location+Ue,Le/J.locationSize,rt,Ae,De*nt,(Be+Le/J.locationSize*Ue)*nt,re)}else{if(Se.isInstancedBufferAttribute){for(let ue=0;ue<J.locationSize;ue++)p(J.location+ue,Se.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ue=0;ue<J.locationSize;ue++)m(J.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let ue=0;ue<J.locationSize;ue++)b(J.location+ue,Le/J.locationSize,rt,Ae,Le*nt,Le/J.locationSize*ue*nt,re)}}else if(Y!==void 0){const Ae=Y[me];if(Ae!==void 0)switch(Ae.length){case 2:s.vertexAttrib2fv(J.location,Ae);break;case 3:s.vertexAttrib3fv(J.location,Ae);break;case 4:s.vertexAttrib4fv(J.location,Ae);break;default:s.vertexAttrib1fv(J.location,Ae)}}}}S()}function P(){_();for(const y in n){const C=n[y];for(const F in C){const H=C[F];for(const K in H)h(H[K].object),delete H[K];delete C[F]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const F in C){const H=C[F];for(const K in H)h(H[K].object),delete H[K];delete C[F]}delete n[y.id]}function U(y){for(const C in n){const F=n[C];if(F[y.id]===void 0)continue;const H=F[y.id];for(const K in H)h(H[K].object),delete H[K];delete F[y.id]}}function _(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:_,resetDefaultState:v,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function I_(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function L_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(U){return!(U!==Mn&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const _=U===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==pi&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ni&&!_)}function l(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:P,maxSamples:A}}function D_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ms,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,b=S*4;let M=p.clippingState||null;l.value=M,M=h(g,f,b,d);for(let P=0;P!==b;++P)M[P]=t[P];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=d;b!==x;++b,M+=4)o.copy(u[b]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function U_(s){let e=new WeakMap;function t(o,a){return a===Dc?o.mapping=xr:a===Uc&&(o.mapping=_r),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dc||a===Uc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new w0(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const cr=4,xf=[.125,.215,.35,.446,.526,.582],xs=20,ic=new pl,_f=new be;let sc=null,rc=0,oc=0,ac=!1;const gs=(1+Math.sqrt(5))/2,Zs=1/gs,yf=[new I(-gs,Zs,0),new I(gs,Zs,0),new I(-Zs,0,gs),new I(Zs,0,gs),new I(0,gs,-Zs),new I(0,gs,Zs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],N_=new I;class Za{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=N_}=r;sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,rc,oc),this._renderer.xr.enabled=ac,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Oi,format:Mn,colorSpace:pn,depthBuffer:!1},i=Mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k_(r)),this._blurMaterial=O_(r,e,t)}return i}_compileMaterial(e){const t=new de(this._lodPlanes[0],e);this._renderer.compile(t,ic)}_sceneToCubeUV(e,t,n,i,r){const l=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(_f),u.toneMapping=es,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const x=new mt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new de(new wt,x);let p=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,p=!0):(x.color.copy(_f),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const P=this._cubeSize;Ea(i,M*P,b>2?P:0,P,P),u.setRenderTarget(i),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xr||e.mapping===_r;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ic)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yf[(i-r-1)%yf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new de(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*xs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):xs;m>xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xs}`);const p=[];let S=0;for(let U=0;U<xs;++U){const _=U/x,v=Math.exp(-_*_/2);p.push(v),U===0?S+=v:U<m&&(S+=2*v)}for(let U=0;U<p.length;U++)p[U]=p[U]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const M=this._sizeLods[i],P=3*M*(i>b-cr?i-b+cr:0),A=4*(this._cubeSize-M);Ea(t,P,A,3*M,2*M),l.setRenderTarget(t),l.render(u,ic)}}function k_(s){const e=[],t=[],n=[];let i=s;const r=s-cr+1+xf.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-cr?l=xf[o-s+cr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*d),b=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let A=0;A<d;A++){const U=A%3*2/3-1,_=A>2?0:-1,v=[U,_,0,U+2/3,_,0,U+2/3,_+1,0,U,_,0,U+2/3,_+1,0,U,_+1,0];S.set(v,x*g*A),b.set(f,m*g*A);const y=[A,A,A,A,A,A];M.set(y,p*g*A)}const P=new Pt;P.setAttribute("position",new zt(S,x)),P.setAttribute("uv",new zt(b,m)),P.setAttribute("faceIndex",new zt(M,p)),e.push(P),i>cr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mf(s,e,t){const n=new qn(s,e,t);return n.texture.mapping=al,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function O_(s,e,t){const n=new Float32Array(xs),i=new I(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function bf(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Sf(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function F_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dc||l===Uc,h=l===xr||l===_r;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Za(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Za(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function z_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&So("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function B_(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const S=d.array;x=d.version;for(let b=0,M=S.length;b<M;b+=3){const P=S[b+0],A=S[b+1],U=S[b+2];f.push(P,A,A,U,U,P)}}else if(g!==void 0){const S=g.array;x=g.version;for(let b=0,M=S.length/3-1;b<M;b+=3){const P=b+0,A=b+1,U=b+2;f.push(P,A,A,U,U,P)}}else return;const m=new(Id(f)?kd:Nd)(f,1);m.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function H_(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*x[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function V_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function G_(s,e,t){const n=new WeakMap,i=new pt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let v=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let b=0;d===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let M=a.attributes.position.count*b,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*P*4*u),U=new Ld(A,M,P,u);U.type=ni,U.needsUpdate=!0;const _=b*4;for(let y=0;y<u;y++){const C=m[y],F=p[y],H=S[y],K=M*P*4*y;for(let q=0;q<C.count;q++){const Y=q*_;d===!0&&(i.fromBufferAttribute(C,q),A[K+Y+0]=i.x,A[K+Y+1]=i.y,A[K+Y+2]=i.z,A[K+Y+3]=0),g===!0&&(i.fromBufferAttribute(F,q),A[K+Y+4]=i.x,A[K+Y+5]=i.y,A[K+Y+6]=i.z,A[K+Y+7]=0),x===!0&&(i.fromBufferAttribute(H,q),A[K+Y+8]=i.x,A[K+Y+9]=i.y,A[K+Y+10]=i.z,A[K+Y+11]=H.itemSize===4?i.w:1)}}f={count:u,texture:U,size:new pe(M,P)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function W_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const ap=new Wt,wf=new Xd(1,1),lp=new Ld,cp=new l0,hp=new zd,Tf=[],Ef=[],Af=new Float32Array(16),Rf=new Float32Array(9),Cf=new Float32Array(4);function Or(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Tf[i];if(r===void 0&&(r=new Float32Array(i),Tf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function jt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function gl(s,e){let t=Ef[e];t===void 0&&(t=new Int32Array(e),Ef[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function X_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function j_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2fv(this.addr,e),jt(t,e)}}function K_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;s.uniform3fv(this.addr,e),jt(t,e)}}function q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4fv(this.addr,e),jt(t,e)}}function $_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;Cf.set(n),s.uniformMatrix2fv(this.addr,!1,Cf),jt(t,n)}}function Y_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;Rf.set(n),s.uniformMatrix3fv(this.addr,!1,Rf),jt(t,n)}}function J_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;Af.set(n),s.uniformMatrix4fv(this.addr,!1,Af),jt(t,n)}}function Z_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2iv(this.addr,e),jt(t,e)}}function ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3iv(this.addr,e),jt(t,e)}}function ty(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4iv(this.addr,e),jt(t,e)}}function ny(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function iy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2uiv(this.addr,e),jt(t,e)}}function sy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3uiv(this.addr,e),jt(t,e)}}function ry(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4uiv(this.addr,e),jt(t,e)}}function oy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wf.compareFunction=Pd,r=wf):r=ap,t.setTexture2D(e||r,i)}function ay(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cp,i)}function ly(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hp,i)}function cy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lp,i)}function hy(s){switch(s){case 5126:return X_;case 35664:return j_;case 35665:return K_;case 35666:return q_;case 35674:return $_;case 35675:return Y_;case 35676:return J_;case 5124:case 35670:return Z_;case 35667:case 35671:return Q_;case 35668:case 35672:return ey;case 35669:case 35673:return ty;case 5125:return ny;case 36294:return iy;case 36295:return sy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return oy;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return cy}}function uy(s,e){s.uniform1fv(this.addr,e)}function fy(s,e){const t=Or(e,this.size,2);s.uniform2fv(this.addr,t)}function dy(s,e){const t=Or(e,this.size,3);s.uniform3fv(this.addr,t)}function py(s,e){const t=Or(e,this.size,4);s.uniform4fv(this.addr,t)}function my(s,e){const t=Or(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function gy(s,e){const t=Or(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function vy(s,e){const t=Or(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xy(s,e){s.uniform1iv(this.addr,e)}function _y(s,e){s.uniform2iv(this.addr,e)}function yy(s,e){s.uniform3iv(this.addr,e)}function My(s,e){s.uniform4iv(this.addr,e)}function by(s,e){s.uniform1uiv(this.addr,e)}function Sy(s,e){s.uniform2uiv(this.addr,e)}function wy(s,e){s.uniform3uiv(this.addr,e)}function Ty(s,e){s.uniform4uiv(this.addr,e)}function Ey(s,e,t){const n=this.cache,i=e.length,r=gl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ap,r[o])}function Ay(s,e,t){const n=this.cache,i=e.length,r=gl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||cp,r[o])}function Ry(s,e,t){const n=this.cache,i=e.length,r=gl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||hp,r[o])}function Cy(s,e,t){const n=this.cache,i=e.length,r=gl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||lp,r[o])}function Py(s){switch(s){case 5126:return uy;case 35664:return fy;case 35665:return dy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return vy;case 5124:case 35670:return xy;case 35667:case 35671:return _y;case 35668:case 35672:return yy;case 35669:case 35673:return My;case 5125:return by;case 36294:return Sy;case 36295:return wy;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Cy}}class Iy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hy(t.type)}}class Ly{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Py(t.type)}}class Dy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function Pf(s,e){s.seq.push(e),s.map[e.id]=e}function Uy(s,e,t){const n=s.name,i=n.length;for(lc.lastIndex=0;;){const r=lc.exec(n),o=lc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Pf(t,c===void 0?new Iy(a,s,e):new Ly(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Dy(a),Pf(t,u)),t=u}}}class Va{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Uy(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function If(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ny=37297;let ky=0;function Oy(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Lf=new et;function Fy(s){ut._getMatrix(Lf,ut.workingColorSpace,s);const e=`mat3( ${Lf.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(s)){case qa:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Df(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Oy(s.getShaderSource(e),a)}else return r}function zy(s,e){const t=Fy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function By(s,e){let t;switch(e){case dd:t="Linear";break;case pd:t="Reinhard";break;case md:t="Cineon";break;case kh:t="ACESFilmic";break;case vd:t="AgX";break;case xd:t="Neutral";break;case gd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Aa=new I;function Hy(){ut.getLuminanceCoefficients(Aa);const s=Aa.x.toFixed(4),e=Aa.y.toFixed(4),t=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function Gy(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wy(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ro(s){return s!==""}function Uf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(s){return s.replace(Xy,Ky)}const jy=new Map;function Ky(s,e){let t=tt[e];if(t===void 0){const n=jy.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vh(t)}const qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(s){return s.replace(qy,$y)}function $y(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Of(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ud?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===fd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Jy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xr:case _r:e="ENVMAP_TYPE_CUBE";break;case al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zy(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===_r&&(e="ENVMAP_MODE_REFRACTION"),e}function Qy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Nh:e="ENVMAP_BLENDING_MULTIPLY";break;case bm:e="ENVMAP_BLENDING_MIX";break;case Sm:e="ENVMAP_BLENDING_ADD";break}return e}function e1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function t1(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Yy(t),c=Jy(t),h=Zy(t),u=Qy(t),f=e1(t),d=Vy(t),g=Gy(r),x=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ro).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ro).join(`
`),p.length>0&&(p+=`
`)):(m=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),p=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?tt.tonemapping_pars_fragment:"",t.toneMapping!==es?By("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,zy("linearToOutputTexel",t.outputColorSpace),Hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ro).join(`
`)),o=vh(o),o=Uf(o,t),o=Nf(o,t),a=vh(a),a=Uf(a,t),a=Nf(a,t),o=kf(o),a=kf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+m+o,M=S+p+a,P=If(i,i.VERTEX_SHADER,b),A=If(i,i.FRAGMENT_SHADER,M);i.attachShader(x,P),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function U(C){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(x)||"",H=i.getShaderInfoLog(P)||"",K=i.getShaderInfoLog(A)||"",q=F.trim(),Y=H.trim(),me=K.trim();let J=!0,Se=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,A);else{const Ae=Df(i,P,"vertex"),Le=Df(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+Ae+`
`+Le)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Y===""||me==="")&&(Se=!1);Se&&(C.diagnostics={runnable:J,programLog:q,vertexShader:{log:Y,prefix:m},fragmentShader:{log:me,prefix:p}})}i.deleteShader(P),i.deleteShader(A),_=new Va(i,x),v=Wy(i,x)}let _;this.getUniforms=function(){return _===void 0&&U(this),_};let v;this.getAttributes=function(){return v===void 0&&U(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,Ny)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ky++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}let n1=0;class i1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new s1(e),t.set(e,n)),n}}class s1{constructor(e){this.id=n1++,this.code=e,this.usedTimes=0}}function r1(s,e,t,n,i,r,o){const a=new Dd,l=new i1,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,C,F,H){const K=F.fog,q=H.geometry,Y=v.isMeshStandardMaterial?F.environment:null,me=(v.isMeshStandardMaterial?t:e).get(v.envMap||Y),J=me&&me.mapping===al?me.image.height:null,Se=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const Ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Le=Ae!==void 0?Ae.length:0;let Fe=0;q.morphAttributes.position!==void 0&&(Fe=1),q.morphAttributes.normal!==void 0&&(Fe=2),q.morphAttributes.color!==void 0&&(Fe=3);let Ye,rt,nt,re;if(Se){const at=hi[Se];Ye=at.vertexShader,rt=at.fragmentShader}else Ye=v.vertexShader,rt=v.fragmentShader,l.update(v),nt=l.getVertexShaderID(v),re=l.getFragmentShaderID(v);const ue=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),Be=H.isInstancedMesh===!0,Ue=H.isBatchedMesh===!0,ot=!!v.map,_t=!!v.matcap,N=!!me,ve=!!v.aoMap,he=!!v.lightMap,le=!!v.bumpMap,ae=!!v.normalMap,Te=!!v.displacementMap,_e=!!v.emissiveMap,Ee=!!v.metalnessMap,je=!!v.roughnessMap,Ve=v.anisotropy>0,R=v.clearcoat>0,w=v.dispersion>0,j=v.iridescence>0,ne=v.sheen>0,ce=v.transmission>0,ie=Ve&&!!v.anisotropyMap,ke=R&&!!v.clearcoatMap,T=R&&!!v.clearcoatNormalMap,D=R&&!!v.clearcoatRoughnessMap,z=j&&!!v.iridescenceMap,k=j&&!!v.iridescenceThicknessMap,B=ne&&!!v.sheenColorMap,$=ne&&!!v.sheenRoughnessMap,X=!!v.specularMap,G=!!v.specularColorMap,ye=!!v.specularIntensityMap,O=ce&&!!v.transmissionMap,oe=ce&&!!v.thicknessMap,fe=!!v.gradientMap,ge=!!v.alphaMap,se=v.alphaTest>0,Q=!!v.alphaHash,Re=!!v.extensions;let ze=es;v.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ze=s.toneMapping);const it={shaderID:Se,shaderType:v.type,shaderName:v.name,vertexShader:Ye,fragmentShader:rt,defines:v.defines,customVertexShaderID:nt,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ue,batchingColor:Ue&&H._colorsTexture!==null,instancing:Be,instancingColor:Be&&H.instanceColor!==null,instancingMorph:Be&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:pn,alphaToCoverage:!!v.alphaToCoverage,map:ot,matcap:_t,envMap:N,envMapMode:N&&me.mapping,envMapCubeUVHeight:J,aoMap:ve,lightMap:he,bumpMap:le,normalMap:ae,displacementMap:f&&Te,emissiveMap:_e,normalMapObjectSpace:ae&&v.normalMapType===Im,normalMapTangentSpace:ae&&v.normalMapType===ll,metalnessMap:Ee,roughnessMap:je,anisotropy:Ve,anisotropyMap:ie,clearcoat:R,clearcoatMap:ke,clearcoatNormalMap:T,clearcoatRoughnessMap:D,dispersion:w,iridescence:j,iridescenceMap:z,iridescenceThicknessMap:k,sheen:ne,sheenColorMap:B,sheenRoughnessMap:$,specularMap:X,specularColorMap:G,specularIntensityMap:ye,transmission:ce,transmissionMap:O,thicknessMap:oe,gradientMap:fe,opaque:v.transparent===!1&&v.blending===fr&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:se,alphaHash:Q,combine:v.combine,mapUv:ot&&x(v.map.channel),aoMapUv:ve&&x(v.aoMap.channel),lightMapUv:he&&x(v.lightMap.channel),bumpMapUv:le&&x(v.bumpMap.channel),normalMapUv:ae&&x(v.normalMap.channel),displacementMapUv:Te&&x(v.displacementMap.channel),emissiveMapUv:_e&&x(v.emissiveMap.channel),metalnessMapUv:Ee&&x(v.metalnessMap.channel),roughnessMapUv:je&&x(v.roughnessMap.channel),anisotropyMapUv:ie&&x(v.anisotropyMap.channel),clearcoatMapUv:ke&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:T&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:k&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:B&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:$&&x(v.sheenRoughnessMap.channel),specularMapUv:X&&x(v.specularMap.channel),specularColorMapUv:G&&x(v.specularColorMap.channel),specularIntensityMapUv:ye&&x(v.specularIntensityMap.channel),transmissionMapUv:O&&x(v.transmissionMap.channel),thicknessMapUv:oe&&x(v.thicknessMap.channel),alphaMapUv:ge&&x(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ae||Ve),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(ot||ge),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:De,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ze,decodeVideoTexture:ot&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===vt,decodeVideoTextureEmissive:_e&&v.emissiveMap.isVideoTexture===!0&&ut.getTransfer(v.emissiveMap.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bt,flipSided:v.side===en,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Re&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&v.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)y.push(C),y.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(S(y,v),b(y,v),y.push(s.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function S(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function b(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){const y=g[v.type];let C;if(y){const F=hi[y];C=br.clone(F.uniforms)}else C=v.uniforms;return C}function P(v,y){let C;for(let F=0,H=h.length;F<H;F++){const K=h[F];if(K.cacheKey===y){C=K,++C.usedTimes;break}}return C===void 0&&(C=new t1(s,y,v,r),h.push(C)),C}function A(v){if(--v.usedTimes===0){const y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function U(v){l.remove(v)}function _(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:P,releaseProgram:A,releaseShaderCache:U,programs:h,dispose:_}}function o1(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function a1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ff(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,x,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,f,d,g,x,m){const p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,g,x,m){const p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||a1),n.length>1&&n.sort(f||Ff),i.length>1&&i.sort(f||Ff)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function l1(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new zf,s.set(n,[o])):i>=r.length?(o=new zf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function c1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new be};break;case"SpotLight":t={position:new I,direction:new I,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function h1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let u1=0;function f1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function d1(s){const e=new c1,t=h1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new qe,o=new qe;function a(c){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,S=0,b=0,M=0,P=0,A=0,U=0;c.sort(f1);for(let v=0,y=c.length;v<y;v++){const C=c[v],F=C.color,H=C.intensity,K=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=F.r*H,u+=F.g*H,f+=F.b*H;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],H);U++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const me=C.shadow,J=t.get(C);J.shadowIntensity=me.intensity,J.shadowBias=me.bias,J.shadowNormalBias=me.normalBias,J.shadowRadius=me.radius,J.shadowMapSize=me.mapSize,n.directionalShadow[d]=J,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=C.shadow.matrix,S++}n.directional[d]=Y,d++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(F).multiplyScalar(H),Y.distance=K,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[x]=Y;const me=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,me.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=me.matrix,C.castShadow){const J=t.get(C);J.shadowIntensity=me.intensity,J.shadowBias=me.bias,J.shadowNormalBias=me.normalBias,J.shadowRadius=me.radius,J.shadowMapSize=me.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=q,M++}x++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy(F).multiplyScalar(H),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=Y,m++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const me=C.shadow,J=t.get(C);J.shadowIntensity=me.intensity,J.shadowBias=me.bias,J.shadowNormalBias=me.normalBias,J.shadowRadius=me.radius,J.shadowMapSize=me.mapSize,J.shadowCameraNear=me.camera.near,J.shadowCameraFar=me.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=Y,g++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(H),Y.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[p]=Y,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const _=n.hash;(_.directionalLength!==d||_.pointLength!==g||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==S||_.numPointShadows!==b||_.numSpotShadows!==M||_.numSpotMaps!==P||_.numLightProbes!==U)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=U,_.directionalLength=d,_.pointLength=g,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=S,_.numPointShadows=b,_.numSpotShadows=M,_.numSpotMaps=P,_.numLightProbes=U,n.version=u1++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const b=c[p];if(b.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(b.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Bf(s){const e=new d1(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function p1(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Bf(s),e.set(i,[a])):r>=o.length?(a=new Bf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function v1(s,e,t){let n=new Kh;const i=new pe,r=new pe,o=new pt,a=new gg({depthPacking:Pm}),l=new vg,c={},h=t.maxTextureSize,u={[zi]:en,[en]:zi,[Bt]:Bt},f=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new de(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ud;let p=this.type;this.render=function(A,U,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const v=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ki),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=p!==Ri&&this.type===Ri,K=p===Ri&&this.type!==Ri;for(let q=0,Y=A.length;q<Y;q++){const me=A[q],J=me.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);const Se=J.getFrameExtents();if(i.multiply(Se),r.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Se.x),i.x=r.x*Se.x,J.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Se.y),i.y=r.y*Se.y,J.mapSize.y=r.y)),J.map===null||H===!0||K===!0){const Le=this.type!==Ri?{minFilter:Yt,magFilter:Yt}:{};J.map!==null&&J.map.dispose(),J.map=new qn(i.x,i.y,Le),J.map.texture.name=me.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();const Ae=J.getViewportCount();for(let Le=0;Le<Ae;Le++){const Fe=J.getViewport(Le);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),F.viewport(o),J.updateMatrices(me,Le),n=J.getFrustum(),M(U,_,J.camera,me,this.type)}J.isPointLightShadow!==!0&&this.type===Ri&&S(J,_),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,y,C)};function S(A,U){const _=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new qn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(U,null,_,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(U,null,_,d,x,null)}function b(A,U,_,v){let y=null;const C=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=_.isPointLight===!0?l:a,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const F=y.uuid,H=U.uuid;let K=c[F];K===void 0&&(K={},c[F]=K);let q=K[H];q===void 0&&(q=y.clone(),K[H]=q,U.addEventListener("dispose",P)),y=q}if(y.visible=U.visible,y.wireframe=U.wireframe,v===Ri?y.side=U.shadowSide!==null?U.shadowSide:U.side:y.side=U.shadowSide!==null?U.shadowSide:u[U.side],y.alphaMap=U.alphaMap,y.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,y.map=U.map,y.clipShadows=U.clipShadows,y.clippingPlanes=U.clippingPlanes,y.clipIntersection=U.clipIntersection,y.displacementMap=U.displacementMap,y.displacementScale=U.displacementScale,y.displacementBias=U.displacementBias,y.wireframeLinewidth=U.wireframeLinewidth,y.linewidth=U.linewidth,_.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=s.properties.get(y);F.light=_}return y}function M(A,U,_,v,y){if(A.visible===!1)return;if(A.layers.test(U.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Ri)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const H=e.update(A),K=A.material;if(Array.isArray(K)){const q=H.groups;for(let Y=0,me=q.length;Y<me;Y++){const J=q[Y],Se=K[J.materialIndex];if(Se&&Se.visible){const Ae=b(A,Se,v,y);A.onBeforeShadow(s,A,U,_,H,Ae,J),s.renderBufferDirect(_,null,H,Ae,A,J),A.onAfterShadow(s,A,U,_,H,Ae,J)}}}else if(K.visible){const q=b(A,K,v,y);A.onBeforeShadow(s,A,U,_,H,q,null),s.renderBufferDirect(_,null,H,q,A,null),A.onAfterShadow(s,A,U,_,H,q,null)}}const F=A.children;for(let H=0,K=F.length;H<K;H++)M(F[H],U,_,v,y)}function P(A){A.target.removeEventListener("dispose",P);for(const _ in c){const v=c[_],y=A.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const x1={[Ec]:Ac,[Rc]:Ic,[Cc]:Lc,[vr]:Pc,[Ac]:Ec,[Ic]:Rc,[Lc]:Cc,[Pc]:vr};function _1(s,e){function t(){let O=!1;const oe=new pt;let fe=null;const ge=new pt(0,0,0,0);return{setMask:function(se){fe!==se&&!O&&(s.colorMask(se,se,se,se),fe=se)},setLocked:function(se){O=se},setClear:function(se,Q,Re,ze,it){it===!0&&(se*=ze,Q*=ze,Re*=ze),oe.set(se,Q,Re,ze),ge.equals(oe)===!1&&(s.clearColor(se,Q,Re,ze),ge.copy(oe))},reset:function(){O=!1,fe=null,ge.set(-1,0,0,0)}}}function n(){let O=!1,oe=!1,fe=null,ge=null,se=null;return{setReversed:function(Q){if(oe!==Q){const Re=e.get("EXT_clip_control");Q?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),oe=Q;const ze=se;se=null,this.setClear(ze)}},getReversed:function(){return oe},setTest:function(Q){Q?ue(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(Q){fe!==Q&&!O&&(s.depthMask(Q),fe=Q)},setFunc:function(Q){if(oe&&(Q=x1[Q]),ge!==Q){switch(Q){case Ec:s.depthFunc(s.NEVER);break;case Ac:s.depthFunc(s.ALWAYS);break;case Rc:s.depthFunc(s.LESS);break;case vr:s.depthFunc(s.LEQUAL);break;case Cc:s.depthFunc(s.EQUAL);break;case Pc:s.depthFunc(s.GEQUAL);break;case Ic:s.depthFunc(s.GREATER);break;case Lc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Q}},setLocked:function(Q){O=Q},setClear:function(Q){se!==Q&&(oe&&(Q=1-Q),s.clearDepth(Q),se=Q)},reset:function(){O=!1,fe=null,ge=null,se=null,oe=!1}}}function i(){let O=!1,oe=null,fe=null,ge=null,se=null,Q=null,Re=null,ze=null,it=null;return{setTest:function(at){O||(at?ue(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(at){oe!==at&&!O&&(s.stencilMask(at),oe=at)},setFunc:function(at,on,tn){(fe!==at||ge!==on||se!==tn)&&(s.stencilFunc(at,on,tn),fe=at,ge=on,se=tn)},setOp:function(at,on,tn){(Q!==at||Re!==on||ze!==tn)&&(s.stencilOp(at,on,tn),Q=at,Re=on,ze=tn)},setLocked:function(at){O=at},setClear:function(at){it!==at&&(s.clearStencil(at),it=at)},reset:function(){O=!1,oe=null,fe=null,ge=null,se=null,Q=null,Re=null,ze=null,it=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,b=null,M=null,P=null,A=null,U=new be(0,0,0),_=0,v=!1,y=null,C=null,F=null,H=null,K=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,me=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=me>=1):J.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=me>=2);let Se=null,Ae={};const Le=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),Ye=new pt().fromArray(Le),rt=new pt().fromArray(Fe);function nt(O,oe,fe,ge){const se=new Uint8Array(4),Q=s.createTexture();s.bindTexture(O,Q),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<fe;Re++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,se):s.texImage2D(oe+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,se);return Q}const re={};re[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(s.DEPTH_TEST),o.setFunc(vr),le(!1),ae(Mu),ue(s.CULL_FACE),ve(ki);function ue(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function De(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Be(O,oe){return u[O]!==oe?(s.bindFramebuffer(O,oe),u[O]=oe,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=oe),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ue(O,oe){let fe=d,ge=!1;if(O){fe=f.get(oe),fe===void 0&&(fe=[],f.set(oe,fe));const se=O.textures;if(fe.length!==se.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,Re=se.length;Q<Re;Q++)fe[Q]=s.COLOR_ATTACHMENT0+Q;fe.length=se.length,ge=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,ge=!0);ge&&s.drawBuffers(fe)}function ot(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const _t={[vs]:s.FUNC_ADD,[rm]:s.FUNC_SUBTRACT,[om]:s.FUNC_REVERSE_SUBTRACT};_t[am]=s.MIN,_t[lm]=s.MAX;const N={[cm]:s.ZERO,[hm]:s.ONE,[um]:s.SRC_COLOR,[wc]:s.SRC_ALPHA,[vm]:s.SRC_ALPHA_SATURATE,[mm]:s.DST_COLOR,[dm]:s.DST_ALPHA,[fm]:s.ONE_MINUS_SRC_COLOR,[Tc]:s.ONE_MINUS_SRC_ALPHA,[gm]:s.ONE_MINUS_DST_COLOR,[pm]:s.ONE_MINUS_DST_ALPHA,[xm]:s.CONSTANT_COLOR,[_m]:s.ONE_MINUS_CONSTANT_COLOR,[ym]:s.CONSTANT_ALPHA,[Mm]:s.ONE_MINUS_CONSTANT_ALPHA};function ve(O,oe,fe,ge,se,Q,Re,ze,it,at){if(O===ki){x===!0&&(De(s.BLEND),x=!1);return}if(x===!1&&(ue(s.BLEND),x=!0),O!==sm){if(O!==m||at!==v){if((p!==vs||M!==vs)&&(s.blendEquation(s.FUNC_ADD),p=vs,M=vs),at)switch(O){case fr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zt:s.blendFunc(s.ONE,s.ONE);break;case bu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Su:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case fr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zt:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Su:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,b=null,P=null,A=null,U.set(0,0,0),_=0,m=O,v=at}return}se=se||oe,Q=Q||fe,Re=Re||ge,(oe!==p||se!==M)&&(s.blendEquationSeparate(_t[oe],_t[se]),p=oe,M=se),(fe!==S||ge!==b||Q!==P||Re!==A)&&(s.blendFuncSeparate(N[fe],N[ge],N[Q],N[Re]),S=fe,b=ge,P=Q,A=Re),(ze.equals(U)===!1||it!==_)&&(s.blendColor(ze.r,ze.g,ze.b,it),U.copy(ze),_=it),m=O,v=!1}function he(O,oe){O.side===Bt?De(s.CULL_FACE):ue(s.CULL_FACE);let fe=O.side===en;oe&&(fe=!fe),le(fe),O.blending===fr&&O.transparent===!1?ve(ki):ve(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const ge=O.stencilWrite;a.setTest(ge),ge&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),_e(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(O){y!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),y=O)}function ae(O){O!==nm?(ue(s.CULL_FACE),O!==C&&(O===Mu?s.cullFace(s.BACK):O===im?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),C=O}function Te(O){O!==F&&(Y&&s.lineWidth(O),F=O)}function _e(O,oe,fe){O?(ue(s.POLYGON_OFFSET_FILL),(H!==oe||K!==fe)&&(s.polygonOffset(oe,fe),H=oe,K=fe)):De(s.POLYGON_OFFSET_FILL)}function Ee(O){O?ue(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function je(O){O===void 0&&(O=s.TEXTURE0+q-1),Se!==O&&(s.activeTexture(O),Se=O)}function Ve(O,oe,fe){fe===void 0&&(Se===null?fe=s.TEXTURE0+q-1:fe=Se);let ge=Ae[fe];ge===void 0&&(ge={type:void 0,texture:void 0},Ae[fe]=ge),(ge.type!==O||ge.texture!==oe)&&(Se!==fe&&(s.activeTexture(fe),Se=fe),s.bindTexture(O,oe||re[O]),ge.type=O,ge.texture=oe)}function R(){const O=Ae[Se];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{s.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{s.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{s.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{s.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function T(){try{s.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function D(){try{s.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{s.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function k(){try{s.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function B(O){Ye.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Ye.copy(O))}function $(O){rt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),rt.copy(O))}function X(O,oe){let fe=c.get(oe);fe===void 0&&(fe=new WeakMap,c.set(oe,fe));let ge=fe.get(O);ge===void 0&&(ge=s.getUniformBlockIndex(oe,O.name),fe.set(O,ge))}function G(O,oe){const ge=c.get(oe).get(O);l.get(oe)!==ge&&(s.uniformBlockBinding(oe,ge,O.__bindingPointIndex),l.set(oe,ge))}function ye(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Se=null,Ae={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,b=null,M=null,P=null,A=null,U=new be(0,0,0),_=0,v=!1,y=null,C=null,F=null,H=null,K=null,Ye.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:De,bindFramebuffer:Be,drawBuffers:Ue,useProgram:ot,setBlending:ve,setMaterial:he,setFlipSided:le,setCullFace:ae,setLineWidth:Te,setPolygonOffset:_e,setScissorTest:Ee,activeTexture:je,bindTexture:Ve,unbindTexture:R,compressedTexImage2D:w,compressedTexImage3D:j,texImage2D:z,texImage3D:k,updateUBOMapping:X,uniformBlockBinding:G,texStorage2D:T,texStorage3D:D,texSubImage2D:ne,texSubImage3D:ce,compressedTexSubImage2D:ie,compressedTexSubImage3D:ke,scissor:B,viewport:$,reset:ye}}function y1(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return d?new OffscreenCanvas(R,w):bo("canvas")}function x(R,w,j){let ne=1;const ce=Ve(R);if((ce.width>j||ce.height>j)&&(ne=j/Math.max(ce.width,ce.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ie=Math.floor(ne*ce.width),ke=Math.floor(ne*ce.height);u===void 0&&(u=g(ie,ke));const T=w?g(ie,ke):u;return T.width=ie,T.height=ke,T.getContext("2d").drawImage(R,0,0,ie,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ie+"x"+ke+")."),T}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(R,w,j,ne,ce=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=w;if(w===s.RED&&(j===s.FLOAT&&(ie=s.R32F),j===s.HALF_FLOAT&&(ie=s.R16F),j===s.UNSIGNED_BYTE&&(ie=s.R8)),w===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ie=s.R8UI),j===s.UNSIGNED_SHORT&&(ie=s.R16UI),j===s.UNSIGNED_INT&&(ie=s.R32UI),j===s.BYTE&&(ie=s.R8I),j===s.SHORT&&(ie=s.R16I),j===s.INT&&(ie=s.R32I)),w===s.RG&&(j===s.FLOAT&&(ie=s.RG32F),j===s.HALF_FLOAT&&(ie=s.RG16F),j===s.UNSIGNED_BYTE&&(ie=s.RG8)),w===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ie=s.RG8UI),j===s.UNSIGNED_SHORT&&(ie=s.RG16UI),j===s.UNSIGNED_INT&&(ie=s.RG32UI),j===s.BYTE&&(ie=s.RG8I),j===s.SHORT&&(ie=s.RG16I),j===s.INT&&(ie=s.RG32I)),w===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),j===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),j===s.UNSIGNED_INT&&(ie=s.RGB32UI),j===s.BYTE&&(ie=s.RGB8I),j===s.SHORT&&(ie=s.RGB16I),j===s.INT&&(ie=s.RGB32I)),w===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),j===s.UNSIGNED_INT&&(ie=s.RGBA32UI),j===s.BYTE&&(ie=s.RGBA8I),j===s.SHORT&&(ie=s.RGBA16I),j===s.INT&&(ie=s.RGBA32I)),w===s.RGB&&(j===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(ie=s.R11F_G11F_B10F)),w===s.RGBA){const ke=ce?qa:ut.getTransfer(ne);j===s.FLOAT&&(ie=s.RGBA32F),j===s.HALF_FLOAT&&(ie=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ie=ke===vt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function M(R,w){let j;return R?w===null||w===ws||w===vo?j=s.DEPTH24_STENCIL8:w===ni?j=s.DEPTH32F_STENCIL8:w===go&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ws||w===vo?j=s.DEPTH_COMPONENT24:w===ni?j=s.DEPTH_COMPONENT32F:w===go&&(j=s.DEPTH_COMPONENT16),j}function P(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==dn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function A(R){const w=R.target;w.removeEventListener("dispose",A),_(w),w.isVideoTexture&&h.delete(w)}function U(R){const w=R.target;w.removeEventListener("dispose",U),y(w)}function _(R){const w=n.get(R);if(w.__webglInit===void 0)return;const j=R.source,ne=f.get(j);if(ne){const ce=ne[w.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&v(R),Object.keys(ne).length===0&&f.delete(j)}n.remove(R)}function v(R){const w=n.get(R);s.deleteTexture(w.__webglTexture);const j=R.source,ne=f.get(j);delete ne[w.__cacheKey],o.memory.textures--}function y(R){const w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let ce=0;ce<w.__webglFramebuffer[ne].length;ce++)s.deleteFramebuffer(w.__webglFramebuffer[ne][ce]);else s.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)s.deleteFramebuffer(w.__webglFramebuffer[ne]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const j=R.textures;for(let ne=0,ce=j.length;ne<ce;ne++){const ie=n.get(j[ne]);ie.__webglTexture&&(s.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(j[ne])}n.remove(R)}let C=0;function F(){C=0}function H(){const R=C;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),C+=1,R}function K(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function q(R,w){const j=n.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&j.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(j,R,w);return}}else R.isExternalTexture&&(j.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+w)}function Y(R,w){const j=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){re(j,R,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+w)}function me(R,w){const j=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){re(j,R,w);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+w)}function J(R,w){const j=n.get(R);if(R.version>0&&j.__version!==R.version){ue(j,R,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+w)}const Se={[is]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[ja]:s.MIRRORED_REPEAT},Ae={[Yt]:s.NEAREST,[yd]:s.NEAREST_MIPMAP_NEAREST,[io]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[Oa]:s.LINEAR_MIPMAP_NEAREST,[Li]:s.LINEAR_MIPMAP_LINEAR},Le={[Lm]:s.NEVER,[Fm]:s.ALWAYS,[Dm]:s.LESS,[Pd]:s.LEQUAL,[Um]:s.EQUAL,[Om]:s.GEQUAL,[Nm]:s.GREATER,[km]:s.NOTEQUAL};function Fe(R,w){if(w.type===ni&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===dn||w.magFilter===Oa||w.magFilter===io||w.magFilter===Li||w.minFilter===dn||w.minFilter===Oa||w.minFilter===io||w.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Se[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Se[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Se[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Ae[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Ae[w.minFilter]),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yt||w.minFilter!==io&&w.minFilter!==Li||w.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ye(R,w){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",A));const ne=w.source;let ce=f.get(ne);ce===void 0&&(ce={},f.set(ne,ce));const ie=K(w);if(ie!==R.__cacheKey){ce[ie]===void 0&&(ce[ie]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ce[ie].usedTimes++;const ke=ce[R.__cacheKey];ke!==void 0&&(ce[R.__cacheKey].usedTimes--,ke.usedTimes===0&&v(w)),R.__cacheKey=ie,R.__webglTexture=ce[ie].texture}return j}function rt(R,w,j){return Math.floor(Math.floor(R/j)/w)}function nt(R,w,j,ne){const ie=R.updateRanges;if(ie.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,j,ne,w.data);else{ie.sort((k,B)=>k.start-B.start);let ke=0;for(let k=1;k<ie.length;k++){const B=ie[ke],$=ie[k],X=B.start+B.count,G=rt($.start,w.width,4),ye=rt(B.start,w.width,4);$.start<=X+1&&G===ye&&rt($.start+$.count-1,w.width,4)===G?B.count=Math.max(B.count,$.start+$.count-B.start):(++ke,ie[ke]=$)}ie.length=ke+1;const T=s.getParameter(s.UNPACK_ROW_LENGTH),D=s.getParameter(s.UNPACK_SKIP_PIXELS),z=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let k=0,B=ie.length;k<B;k++){const $=ie[k],X=Math.floor($.start/4),G=Math.ceil($.count/4),ye=X%w.width,O=Math.floor(X/w.width),oe=G,fe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ye),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),t.texSubImage2D(s.TEXTURE_2D,0,ye,O,oe,fe,j,ne,w.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,T),s.pixelStorei(s.UNPACK_SKIP_PIXELS,D),s.pixelStorei(s.UNPACK_SKIP_ROWS,z)}}function re(R,w,j){let ne=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=s.TEXTURE_3D);const ce=Ye(R,w),ie=w.source;t.bindTexture(ne,R.__webglTexture,s.TEXTURE0+j);const ke=n.get(ie);if(ie.version!==ke.__version||ce===!0){t.activeTexture(s.TEXTURE0+j);const T=ut.getPrimaries(ut.workingColorSpace),D=w.colorSpace===Ji?null:ut.getPrimaries(w.colorSpace),z=w.colorSpace===Ji||T===D?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);let k=x(w.image,!1,i.maxTextureSize);k=je(w,k);const B=r.convert(w.format,w.colorSpace),$=r.convert(w.type);let X=b(w.internalFormat,B,$,w.colorSpace,w.isVideoTexture);Fe(ne,w);let G;const ye=w.mipmaps,O=w.isVideoTexture!==!0,oe=ke.__version===void 0||ce===!0,fe=ie.dataReady,ge=P(w,k);if(w.isDepthTexture)X=M(w.format===_o,w.type),oe&&(O?t.texStorage2D(s.TEXTURE_2D,1,X,k.width,k.height):t.texImage2D(s.TEXTURE_2D,0,X,k.width,k.height,0,B,$,null));else if(w.isDataTexture)if(ye.length>0){O&&oe&&t.texStorage2D(s.TEXTURE_2D,ge,X,ye[0].width,ye[0].height);for(let se=0,Q=ye.length;se<Q;se++)G=ye[se],O?fe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,G.width,G.height,B,$,G.data):t.texImage2D(s.TEXTURE_2D,se,X,G.width,G.height,0,B,$,G.data);w.generateMipmaps=!1}else O?(oe&&t.texStorage2D(s.TEXTURE_2D,ge,X,k.width,k.height),fe&&nt(w,k,B,$)):t.texImage2D(s.TEXTURE_2D,0,X,k.width,k.height,0,B,$,k.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){O&&oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,X,ye[0].width,ye[0].height,k.depth);for(let se=0,Q=ye.length;se<Q;se++)if(G=ye[se],w.format!==Mn)if(B!==null)if(O){if(fe)if(w.layerUpdates.size>0){const Re=vf(G.width,G.height,w.format,w.type);for(const ze of w.layerUpdates){const it=G.data.subarray(ze*Re/G.data.BYTES_PER_ELEMENT,(ze+1)*Re/G.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,ze,G.width,G.height,1,B,it)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,G.width,G.height,k.depth,B,G.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,X,G.width,G.height,k.depth,0,G.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?fe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,G.width,G.height,k.depth,B,$,G.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,X,G.width,G.height,k.depth,0,B,$,G.data)}else{O&&oe&&t.texStorage2D(s.TEXTURE_2D,ge,X,ye[0].width,ye[0].height);for(let se=0,Q=ye.length;se<Q;se++)G=ye[se],w.format!==Mn?B!==null?O?fe&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,G.width,G.height,B,G.data):t.compressedTexImage2D(s.TEXTURE_2D,se,X,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?fe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,G.width,G.height,B,$,G.data):t.texImage2D(s.TEXTURE_2D,se,X,G.width,G.height,0,B,$,G.data)}else if(w.isDataArrayTexture)if(O){if(oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,X,k.width,k.height,k.depth),fe)if(w.layerUpdates.size>0){const se=vf(k.width,k.height,w.format,w.type);for(const Q of w.layerUpdates){const Re=k.data.subarray(Q*se/k.data.BYTES_PER_ELEMENT,(Q+1)*se/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,k.width,k.height,1,B,$,Re)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,B,$,k.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,X,k.width,k.height,k.depth,0,B,$,k.data);else if(w.isData3DTexture)O?(oe&&t.texStorage3D(s.TEXTURE_3D,ge,X,k.width,k.height,k.depth),fe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,B,$,k.data)):t.texImage3D(s.TEXTURE_3D,0,X,k.width,k.height,k.depth,0,B,$,k.data);else if(w.isFramebufferTexture){if(oe)if(O)t.texStorage2D(s.TEXTURE_2D,ge,X,k.width,k.height);else{let se=k.width,Q=k.height;for(let Re=0;Re<ge;Re++)t.texImage2D(s.TEXTURE_2D,Re,X,se,Q,0,B,$,null),se>>=1,Q>>=1}}else if(ye.length>0){if(O&&oe){const se=Ve(ye[0]);t.texStorage2D(s.TEXTURE_2D,ge,X,se.width,se.height)}for(let se=0,Q=ye.length;se<Q;se++)G=ye[se],O?fe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,B,$,G):t.texImage2D(s.TEXTURE_2D,se,X,B,$,G);w.generateMipmaps=!1}else if(O){if(oe){const se=Ve(k);t.texStorage2D(s.TEXTURE_2D,ge,X,se.width,se.height)}fe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,B,$,k)}else t.texImage2D(s.TEXTURE_2D,0,X,B,$,k);m(w)&&p(ne),ke.__version=ie.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ue(R,w,j){if(w.image.length!==6)return;const ne=Ye(R,w),ce=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+j);const ie=n.get(ce);if(ce.version!==ie.__version||ne===!0){t.activeTexture(s.TEXTURE0+j);const ke=ut.getPrimaries(ut.workingColorSpace),T=w.colorSpace===Ji?null:ut.getPrimaries(w.colorSpace),D=w.colorSpace===Ji||ke===T?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);const z=w.isCompressedTexture||w.image[0].isCompressedTexture,k=w.image[0]&&w.image[0].isDataTexture,B=[];for(let Q=0;Q<6;Q++)!z&&!k?B[Q]=x(w.image[Q],!0,i.maxCubemapSize):B[Q]=k?w.image[Q].image:w.image[Q],B[Q]=je(w,B[Q]);const $=B[0],X=r.convert(w.format,w.colorSpace),G=r.convert(w.type),ye=b(w.internalFormat,X,G,w.colorSpace),O=w.isVideoTexture!==!0,oe=ie.__version===void 0||ne===!0,fe=ce.dataReady;let ge=P(w,$);Fe(s.TEXTURE_CUBE_MAP,w);let se;if(z){O&&oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,ye,$.width,$.height);for(let Q=0;Q<6;Q++){se=B[Q].mipmaps;for(let Re=0;Re<se.length;Re++){const ze=se[Re];w.format!==Mn?X!==null?O?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,0,0,ze.width,ze.height,X,ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,ye,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,0,0,ze.width,ze.height,X,G,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,ye,ze.width,ze.height,0,X,G,ze.data)}}}else{if(se=w.mipmaps,O&&oe){se.length>0&&ge++;const Q=Ve(B[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,ye,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(k){O?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,B[Q].width,B[Q].height,X,G,B[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ye,B[Q].width,B[Q].height,0,X,G,B[Q].data);for(let Re=0;Re<se.length;Re++){const it=se[Re].image[Q].image;O?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,0,0,it.width,it.height,X,G,it.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,ye,it.width,it.height,0,X,G,it.data)}}else{O?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,X,G,B[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ye,X,G,B[Q]);for(let Re=0;Re<se.length;Re++){const ze=se[Re];O?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,0,0,X,G,ze.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,ye,X,G,ze.image[Q])}}}m(w)&&p(s.TEXTURE_CUBE_MAP),ie.__version=ce.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function De(R,w,j,ne,ce,ie){const ke=r.convert(j.format,j.colorSpace),T=r.convert(j.type),D=b(j.internalFormat,ke,T,j.colorSpace),z=n.get(w),k=n.get(j);if(k.__renderTarget=w,!z.__hasExternalTextures){const B=Math.max(1,w.width>>ie),$=Math.max(1,w.height>>ie);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,ie,D,B,$,w.depth,0,ke,T,null):t.texImage2D(ce,ie,D,B,$,0,ke,T,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),_e(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ce,k.__webglTexture,0,Te(w)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,ce,k.__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(R,w,j){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer){const ne=w.depthTexture,ce=ne&&ne.isDepthTexture?ne.type:null,ie=M(w.stencilBuffer,ce),ke=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,T=Te(w);_e(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,T,ie,w.width,w.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,T,ie,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ie,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,R)}else{const ne=w.textures;for(let ce=0;ce<ne.length;ce++){const ie=ne[ce],ke=r.convert(ie.format,ie.colorSpace),T=r.convert(ie.type),D=b(ie.internalFormat,ke,T,ie.colorSpace),z=Te(w);j&&_e(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,z,D,w.width,w.height):_e(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z,D,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,D,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(w.depthTexture);ne.__renderTarget=w,(!ne.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);const ce=ne.__webglTexture,ie=Te(w);if(w.depthTexture.format===xo)_e(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0);else if(w.depthTexture.format===_o)_e(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function ot(R){const w=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ne){const ce=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ne.removeEventListener("dispose",ce)};ne.addEventListener("dispose",ce),w.__depthDisposeCallback=ce}w.__boundDepthTexture=ne}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const ne=R.texture.mipmaps;ne&&ne.length>0?Ue(w.__webglFramebuffer[0],R):Ue(w.__webglFramebuffer,R)}else if(j){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]===void 0)w.__webglDepthbuffer[ne]=s.createRenderbuffer(),Be(w.__webglDepthbuffer[ne],R,!1);else{const ce=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,ie)}}else{const ne=R.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Be(w.__webglDepthbuffer,R,!1);else{const ce=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,ie)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(R,w,j){const ne=n.get(R);w!==void 0&&De(ne.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&ot(R)}function N(R){const w=R.texture,j=n.get(R),ne=n.get(w);R.addEventListener("dispose",U);const ce=R.textures,ie=R.isWebGLCubeRenderTarget===!0,ke=ce.length>1;if(ke||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=w.version,o.memory.textures++),ie){j.__webglFramebuffer=[];for(let T=0;T<6;T++)if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer[T]=[];for(let D=0;D<w.mipmaps.length;D++)j.__webglFramebuffer[T][D]=s.createFramebuffer()}else j.__webglFramebuffer[T]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer=[];for(let T=0;T<w.mipmaps.length;T++)j.__webglFramebuffer[T]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(ke)for(let T=0,D=ce.length;T<D;T++){const z=n.get(ce[T]);z.__webglTexture===void 0&&(z.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&_e(R)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let T=0;T<ce.length;T++){const D=ce[T];j.__webglColorRenderbuffer[T]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[T]);const z=r.convert(D.format,D.colorSpace),k=r.convert(D.type),B=b(D.internalFormat,z,k,D.colorSpace,R.isXRRenderTarget===!0),$=Te(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,B,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+T,s.RENDERBUFFER,j.__webglColorRenderbuffer[T])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(j.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,w);for(let T=0;T<6;T++)if(w.mipmaps&&w.mipmaps.length>0)for(let D=0;D<w.mipmaps.length;D++)De(j.__webglFramebuffer[T][D],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+T,D);else De(j.__webglFramebuffer[T],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+T,0);m(w)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let T=0,D=ce.length;T<D;T++){const z=ce[T],k=n.get(z);let B=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(B=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(B,k.__webglTexture),Fe(B,z),De(j.__webglFramebuffer,R,z,s.COLOR_ATTACHMENT0+T,B,0),m(z)&&p(B)}t.unbindTexture()}else{let T=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(T=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(T,ne.__webglTexture),Fe(T,w),w.mipmaps&&w.mipmaps.length>0)for(let D=0;D<w.mipmaps.length;D++)De(j.__webglFramebuffer[D],R,w,s.COLOR_ATTACHMENT0,T,D);else De(j.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,T,0);m(w)&&p(T),t.unbindTexture()}R.depthBuffer&&ot(R)}function ve(R){const w=R.textures;for(let j=0,ne=w.length;j<ne;j++){const ce=w[j];if(m(ce)){const ie=S(R),ke=n.get(ce).__webglTexture;t.bindTexture(ie,ke),p(ie),t.unbindTexture()}}}const he=[],le=[];function ae(R){if(R.samples>0){if(_e(R)===!1){const w=R.textures,j=R.width,ne=R.height;let ce=s.COLOR_BUFFER_BIT;const ie=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=n.get(R),T=w.length>1;if(T)for(let z=0;z<w.length;z++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const D=R.texture.mipmaps;D&&D.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let z=0;z<w.length;z++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),T){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[z]);const k=n.get(w[z]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,j,ne,0,0,j,ne,ce,s.NEAREST),l===!0&&(he.length=0,le.length=0,he.push(s.COLOR_ATTACHMENT0+z),R.depthBuffer&&R.resolveDepthBuffer===!1&&(he.push(ie),le.push(ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),T)for(let z=0;z<w.length;z++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,ke.__webglColorRenderbuffer[z]);const k=n.get(w[z]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.TEXTURE_2D,k,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Te(R){return Math.min(i.maxSamples,R.samples)}function _e(R){const w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ee(R){const w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function je(R,w){const j=R.colorSpace,ne=R.format,ce=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||j!==pn&&j!==Ji&&(ut.getTransfer(j)===vt?(ne!==Mn||ce!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),w}function Ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=me,this.setTextureCube=J,this.rebindTextures=_t,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=De,this.useMultisampledRTT=_e}function M1(s,e){function t(n,i=Ji){let r;const o=ut.getTransfer(i);if(n===pi)return s.UNSIGNED_BYTE;if(n===Fh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Sd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===wd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Md)return s.BYTE;if(n===bd)return s.SHORT;if(n===go)return s.UNSIGNED_SHORT;if(n===Oh)return s.INT;if(n===ws)return s.UNSIGNED_INT;if(n===ni)return s.FLOAT;if(n===Oi)return s.HALF_FLOAT;if(n===Td)return s.ALPHA;if(n===Ed)return s.RGB;if(n===Mn)return s.RGBA;if(n===xo)return s.DEPTH_COMPONENT;if(n===_o)return s.DEPTH_STENCIL;if(n===Lr)return s.RED;if(n===Bh)return s.RED_INTEGER;if(n===Ad)return s.RG;if(n===Hh)return s.RG_INTEGER;if(n===Vh)return s.RGBA_INTEGER;if(n===Fa||n===za||n===Ba||n===Ha)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nc||n===kc||n===Oc||n===Fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zc||n===Bc||n===Hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zc||n===Bc)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vc||n===Gc||n===Wc||n===Xc||n===jc||n===Kc||n===qc||n===$c||n===Yc||n===Jc||n===Zc||n===Qc||n===eh||n===th)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$c)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===th)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nh||n===ih||n===sh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===nh)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ih)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rh||n===oh||n===ah||n===lh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ah)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const b1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class w1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new jd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ht({vertexShader:b1,fragmentShader:S1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new $t(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T1 extends Rs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",m=new w1,p={},S=t.getContextAttributes();let b=null,M=null;const P=[],A=[],U=new pe;let _=null;const v=new Qt;v.viewport=new pt;const y=new Qt;y.viewport=new pt;const C=[v,y],F=new Dg;let H=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ue=P[re];return ue===void 0&&(ue=new Xl,P[re]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(re){let ue=P[re];return ue===void 0&&(ue=new Xl,P[re]=ue),ue.getGripSpace()},this.getHand=function(re){let ue=P[re];return ue===void 0&&(ue=new Xl,P[re]=ue),ue.getHandSpace()};function q(re){const ue=A.indexOf(re.inputSource);if(ue===-1)return;const De=P[ue];De!==void 0&&(De.update(re.inputSource,re.frame,c||o),De.dispatchEvent({type:re.type,data:re.inputSource}))}function Y(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",me);for(let re=0;re<P.length;re++){const ue=A[re];ue!==null&&(A[re]=null,P[re].disconnect(ue))}H=null,K=null,m.reset();for(const re in p)delete p[re];e.setRenderTarget(b),d=null,f=null,u=null,i=null,M=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(re){if(i=re,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",me),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(U),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Be=null,Ue=null;S.depth&&(Ue=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=S.stencil?_o:xo,Be=S.stencil?vo:ws);const ot={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ot),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new qn(f.textureWidth,f.textureHeight,{format:Mn,type:pi,depthTexture:new Xd(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const De={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,De),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new qn(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function me(re){for(let ue=0;ue<re.removed.length;ue++){const De=re.removed[ue],Be=A.indexOf(De);Be>=0&&(A[Be]=null,P[Be].disconnect(De))}for(let ue=0;ue<re.added.length;ue++){const De=re.added[ue];let Be=A.indexOf(De);if(Be===-1){for(let ot=0;ot<P.length;ot++)if(ot>=A.length){A.push(De),Be=ot;break}else if(A[ot]===null){A[ot]=De,Be=ot;break}if(Be===-1)break}const Ue=P[Be];Ue&&Ue.connect(De)}}const J=new I,Se=new I;function Ae(re,ue,De){J.setFromMatrixPosition(ue.matrixWorld),Se.setFromMatrixPosition(De.matrixWorld);const Be=J.distanceTo(Se),Ue=ue.projectionMatrix.elements,ot=De.projectionMatrix.elements,_t=Ue[14]/(Ue[10]-1),N=Ue[14]/(Ue[10]+1),ve=(Ue[9]+1)/Ue[5],he=(Ue[9]-1)/Ue[5],le=(Ue[8]-1)/Ue[0],ae=(ot[8]+1)/ot[0],Te=_t*le,_e=_t*ae,Ee=Be/(-le+ae),je=Ee*-le;if(ue.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(je),re.translateZ(Ee),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ue[10]===-1)re.projectionMatrix.copy(ue.projectionMatrix),re.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ve=_t+Ee,R=N+Ee,w=Te-je,j=_e+(Be-je),ne=ve*N/R*Ve,ce=he*N/R*Ve;re.projectionMatrix.makePerspective(w,j,ne,ce,Ve,R),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Le(re,ue){ue===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ue.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(i===null)return;let ue=re.near,De=re.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(De=m.depthFar)),F.near=y.near=v.near=ue,F.far=y.far=v.far=De,(H!==F.near||K!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,K=F.far),F.layers.mask=re.layers.mask|6,v.layers.mask=F.layers.mask&3,y.layers.mask=F.layers.mask&5;const Be=re.parent,Ue=F.cameras;Le(F,Be);for(let ot=0;ot<Ue.length;ot++)Le(Ue[ot],Be);Ue.length===2?Ae(F,v,y):F.projectionMatrix.copy(v.projectionMatrix),Fe(re,F,Be)};function Fe(re,ue,De){De===null?re.matrix.copy(ue.matrixWorld):(re.matrix.copy(De.matrixWorld),re.matrix.invert(),re.matrix.multiply(ue.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ue.projectionMatrix),re.projectionMatrixInverse.copy(ue.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=yr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(re){return p[re]};let Ye=null;function rt(re,ue){if(h=ue.getViewerPose(c||o),g=ue,h!==null){const De=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Be=!1;De.length!==F.cameras.length&&(F.cameras.length=0,Be=!0);for(let N=0;N<De.length;N++){const ve=De[N];let he=null;if(d!==null)he=d.getViewport(ve);else{const ae=u.getViewSubImage(f,ve);he=ae.viewport,N===0&&(e.setRenderTargetTextures(M,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(M))}let le=C[N];le===void 0&&(le=new Qt,le.layers.enable(N),le.viewport=new pt,C[N]=le),le.matrix.fromArray(ve.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ve.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(he.x,he.y,he.width,he.height),N===0&&(F.matrix.copy(le.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Be===!0&&F.cameras.push(le)}const Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const N=u.getDepthInformation(De[0]);N&&N.isValid&&N.texture&&m.init(N,i.renderState)}if(Ue&&Ue.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let N=0;N<De.length;N++){const ve=De[N].camera;if(ve){let he=p[ve];he||(he=new jd,p[ve]=he);const le=u.getCameraImage(ve);he.sourceTexture=le}}}}for(let De=0;De<P.length;De++){const Be=A[De],Ue=P[De];Be!==null&&Ue!==void 0&&Ue.update(Be,ue,c||o)}Ye&&Ye(re,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}const nt=new op;nt.setAnimationLoop(rt),this.setAnimationLoop=function(re){Ye=re},this.dispose=function(){}}}const ds=new $n,E1=new qe;function A1(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Od(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),b=S.envMap,M=S.envMapRotation;b&&(m.envMap.value=b,ds.copy(M),ds.x*=-1,ds.y*=-1,ds.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(E1.makeRotationFromEuler(ds)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function R1(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const M=b.program;n.uniformBlockBinding(S,M)}function c(S,b){let M=i[S.id];M===void 0&&(g(S),M=h(S),i[S.id]=M,S.addEventListener("dispose",m));const P=b.program;n.updateUBOMapping(S,P);const A=e.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function h(S){const b=u();S.__bindingPointIndex=b;const M=s.createBuffer(),P=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,M),M}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=i[S.id],M=S.uniforms,P=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,U=M.length;A<U;A++){const _=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,y=_.length;v<y;v++){const C=_[v];if(d(C,A,v,P)===!0){const F=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let K=0;for(let q=0;q<H.length;q++){const Y=H[q],me=x(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,F+K,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,K),K+=me.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,b,M,P){const A=S.value,U=b+"_"+M;if(P[U]===void 0)return typeof A=="number"||typeof A=="boolean"?P[U]=A:P[U]=A.clone(),!0;{const _=P[U];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return P[U]=A,!0}else if(_.equals(A)===!1)return _.copy(A),!0}return!1}function g(S){const b=S.uniforms;let M=0;const P=16;for(let U=0,_=b.length;U<_;U++){const v=Array.isArray(b[U])?b[U]:[b[U]];for(let y=0,C=v.length;y<C;y++){const F=v[y],H=Array.isArray(F.value)?F.value:[F.value];for(let K=0,q=H.length;K<q;K++){const Y=H[K],me=x(Y),J=M%P,Se=J%me.boundary,Ae=J+Se;M+=Se,Ae!==0&&P-Ae<me.storage&&(M+=P-Ae),F.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=me.storage}}}const A=M%P;return A>0&&(M+=P-A),S.__size=M,S.__cache={},this}function x(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class C1{constructor(e={}){const{canvas:t=t0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let P=!1;this._outputColorSpace=Ct;let A=0,U=0,_=null,v=-1,y=null;const C=new pt,F=new pt;let H=null;const K=new be(0);let q=0,Y=t.width,me=t.height,J=1,Se=null,Ae=null;const Le=new pt(0,0,Y,me),Fe=new pt(0,0,Y,me);let Ye=!1;const rt=new Kh;let nt=!1,re=!1;const ue=new qe,De=new I,Be=new pt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function _t(){return _===null?J:1}let N=n;function ve(E,V){return t.getContext(E,V)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uh}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",se,!1),N===null){const V="webgl2";if(N=ve(V,E),N===null)throw ve(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let he,le,ae,Te,_e,Ee,je,Ve,R,w,j,ne,ce,ie,ke,T,D,z,k,B,$,X,G,ye;function O(){he=new z_(N),he.init(),X=new M1(N,he),le=new L_(N,he,e,X),ae=new _1(N,he),le.reversedDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),Te=new V_(N),_e=new o1,Ee=new y1(N,he,ae,_e,le,X,Te),je=new U_(M),Ve=new F_(M),R=new qg(N),G=new P_(N,R),w=new B_(N,R,Te,G),j=new W_(N,w,R,Te),k=new G_(N,le,Ee),T=new D_(_e),ne=new r1(M,je,Ve,he,le,G,T),ce=new A1(M,_e),ie=new l1,ke=new p1(he),z=new C_(M,je,Ve,ae,j,d,l),D=new v1(M,j,le),ye=new R1(N,Te,le,ae),B=new I_(N,he,Te),$=new H_(N,he,Te),Te.programs=ne.programs,M.capabilities=le,M.extensions=he,M.properties=_e,M.renderLists=ie,M.shadowMap=D,M.state=ae,M.info=Te}O();const oe=new T1(M,N);this.xr=oe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(Y,me,!1))},this.getSize=function(E){return E.set(Y,me)},this.setSize=function(E,V,ee=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,me=V,t.width=Math.floor(E*J),t.height=Math.floor(V*J),ee===!0&&(t.style.width=E+"px",t.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(Y*J,me*J).floor()},this.setDrawingBufferSize=function(E,V,ee){Y=E,me=V,J=ee,t.width=Math.floor(E*ee),t.height=Math.floor(V*ee),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(Le)},this.setViewport=function(E,V,ee,te){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,V,ee,te),ae.viewport(C.copy(Le).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(Fe)},this.setScissor=function(E,V,ee,te){E.isVector4?Fe.set(E.x,E.y,E.z,E.w):Fe.set(E,V,ee,te),ae.scissor(F.copy(Fe).multiplyScalar(J).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(E){ae.setScissorTest(Ye=E)},this.setOpaqueSort=function(E){Se=E},this.setTransparentSort=function(E){Ae=E},this.getClearColor=function(E){return E.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,ee=!0){let te=0;if(E){let W=!1;if(_!==null){const Me=_.texture.format;W=Me===Vh||Me===Hh||Me===Bh}if(W){const Me=_.texture.type,Ie=Me===pi||Me===ws||Me===go||Me===vo||Me===Fh||Me===zh,Oe=z.getClearColor(),Ne=z.getClearAlpha(),Xe=Oe.r,Ke=Oe.g,He=Oe.b;Ie?(g[0]=Xe,g[1]=Ke,g[2]=He,g[3]=Ne,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=Xe,x[1]=Ke,x[2]=He,x[3]=Ne,N.clearBufferiv(N.COLOR,0,x))}else te|=N.COLOR_BUFFER_BIT}V&&(te|=N.DEPTH_BUFFER_BIT),ee&&(te|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",se,!1),z.dispose(),ie.dispose(),ke.dispose(),_e.dispose(),je.dispose(),Ve.dispose(),j.dispose(),G.dispose(),ye.dispose(),ne.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",tn),oe.removeEventListener("sessionend",os),Un.stop()};function fe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=Te.autoReset,V=D.enabled,ee=D.autoUpdate,te=D.needsUpdate,W=D.type;O(),Te.autoReset=E,D.enabled=V,D.autoUpdate=ee,D.needsUpdate=te,D.type=W}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){const V=E.target;V.removeEventListener("dispose",Q),Re(V)}function Re(E){ze(E),_e.remove(E)}function ze(E){const V=_e.get(E).programs;V!==void 0&&(V.forEach(function(ee){ne.releaseProgram(ee)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,ee,te,W,Me){V===null&&(V=Ue);const Ie=W.isMesh&&W.matrixWorld.determinant()<0,Oe=Yp(E,V,ee,te,W);ae.setMaterial(te,Ie);let Ne=ee.index,Xe=1;if(te.wireframe===!0){if(Ne=w.getWireframeAttribute(ee),Ne===void 0)return;Xe=2}const Ke=ee.drawRange,He=ee.attributes.position;let ht=Ke.start*Xe,yt=(Ke.start+Ke.count)*Xe;Me!==null&&(ht=Math.max(ht,Me.start*Xe),yt=Math.min(yt,(Me.start+Me.count)*Xe)),Ne!==null?(ht=Math.max(ht,0),yt=Math.min(yt,Ne.count)):He!=null&&(ht=Math.max(ht,0),yt=Math.min(yt,He.count));const Ot=yt-ht;if(Ot<0||Ot===1/0)return;G.setup(W,te,Oe,ee,Ne);let Rt,St=B;if(Ne!==null&&(Rt=R.get(Ne),St=$,St.setIndex(Rt)),W.isMesh)te.wireframe===!0?(ae.setLineWidth(te.wireframeLinewidth*_t()),St.setMode(N.LINES)):St.setMode(N.TRIANGLES);else if(W.isLine){let Ge=te.linewidth;Ge===void 0&&(Ge=1),ae.setLineWidth(Ge*_t()),W.isLineSegments?St.setMode(N.LINES):W.isLineLoop?St.setMode(N.LINE_LOOP):St.setMode(N.LINE_STRIP)}else W.isPoints?St.setMode(N.POINTS):W.isSprite&&St.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)So("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))St.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ge=W._multiDrawStarts,It=W._multiDrawCounts,ft=W._multiDrawCount,En=Ne?R.get(Ne).bytesPerElement:1,Ls=_e.get(te).currentProgram.getUniforms();for(let An=0;An<ft;An++)Ls.setValue(N,"_gl_DrawID",An),St.render(Ge[An]/En,It[An])}else if(W.isInstancedMesh)St.renderInstances(ht,Ot,W.count);else if(ee.isInstancedBufferGeometry){const Ge=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,It=Math.min(ee.instanceCount,Ge);St.renderInstances(ht,Ot,It)}else St.render(ht,Ot)};function it(E,V,ee){E.transparent===!0&&E.side===Bt&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,qo(E,V,ee),E.side=zi,E.needsUpdate=!0,qo(E,V,ee),E.side=Bt):qo(E,V,ee)}this.compile=function(E,V,ee=null){ee===null&&(ee=E),p=ke.get(ee),p.init(V),b.push(p),ee.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),E!==ee&&E.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const te=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Me=W.material;if(Me)if(Array.isArray(Me))for(let Ie=0;Ie<Me.length;Ie++){const Oe=Me[Ie];it(Oe,ee,W),te.add(Oe)}else it(Me,ee,W),te.add(Me)}),p=b.pop(),te},this.compileAsync=function(E,V,ee=null){const te=this.compile(E,V,ee);return new Promise(W=>{function Me(){if(te.forEach(function(Ie){_e.get(Ie).currentProgram.isReady()&&te.delete(Ie)}),te.size===0){W(E);return}setTimeout(Me,10)}he.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let at=null;function on(E){at&&at(E)}function tn(){Un.stop()}function os(){Un.start()}const Un=new op;Un.setAnimationLoop(on),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(E){at=E,oe.setAnimationLoop(E),E===null?Un.stop():Un.start()},oe.addEventListener("sessionstart",tn),oe.addEventListener("sessionend",os),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(V),V=oe.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,V,_),p=ke.get(E,b.length),p.init(V),b.push(p),ue.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),rt.setFromProjectionMatrix(ue,ui,V.reversedDepth),re=this.localClippingEnabled,nt=T.init(this.clippingPlanes,re),m=ie.get(E,S.length),m.init(),S.push(m),oe.enabled===!0&&oe.isPresenting===!0){const Me=M.xr.getDepthSensingMesh();Me!==null&&Hi(Me,V,-1/0,M.sortObjects)}Hi(E,V,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(Se,Ae),ot=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ot&&z.addToRenderList(m,E),this.info.render.frame++,nt===!0&&T.beginShadows();const ee=p.state.shadowsArray;D.render(ee,E,V),nt===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=m.opaque,W=m.transmissive;if(p.setupLights(),V.isArrayCamera){const Me=V.cameras;if(W.length>0)for(let Ie=0,Oe=Me.length;Ie<Oe;Ie++){const Ne=Me[Ie];jo(te,W,E,Ne)}ot&&z.render(E);for(let Ie=0,Oe=Me.length;Ie<Oe;Ie++){const Ne=Me[Ie];Xo(m,E,Ne,Ne.viewport)}}else W.length>0&&jo(te,W,E,V),ot&&z.render(E),Xo(m,E,V);_!==null&&U===0&&(Ee.updateMultisampleRenderTarget(_),Ee.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(M,E,V),G.resetDefaultState(),v=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],nt===!0&&T.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Hi(E,V,ee,te){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)ee=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||rt.intersectsSprite(E)){te&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);const Ie=j.update(E),Oe=E.material;Oe.visible&&m.push(E,Ie,Oe,ee,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||rt.intersectsObject(E))){const Ie=j.update(E),Oe=E.material;if(te&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Be.copy(Ie.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(ue)),Array.isArray(Oe)){const Ne=Ie.groups;for(let Xe=0,Ke=Ne.length;Xe<Ke;Xe++){const He=Ne[Xe],ht=Oe[He.materialIndex];ht&&ht.visible&&m.push(E,Ie,ht,ee,Be.z,He)}}else Oe.visible&&m.push(E,Ie,Oe,ee,Be.z,null)}}const Me=E.children;for(let Ie=0,Oe=Me.length;Ie<Oe;Ie++)Hi(Me[Ie],V,ee,te)}function Xo(E,V,ee,te){const W=E.opaque,Me=E.transmissive,Ie=E.transparent;p.setupLightsView(ee),nt===!0&&T.setGlobalState(M.clippingPlanes,ee),te&&ae.viewport(C.copy(te)),W.length>0&&Ko(W,V,ee),Me.length>0&&Ko(Me,V,ee),Ie.length>0&&Ko(Ie,V,ee),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function jo(E,V,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[te.id]===void 0&&(p.state.transmissionRenderTarget[te.id]=new qn(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Oi:pi,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const Me=p.state.transmissionRenderTarget[te.id],Ie=te.viewport||C;Me.setSize(Ie.z*M.transmissionResolutionScale,Ie.w*M.transmissionResolutionScale);const Oe=M.getRenderTarget(),Ne=M.getActiveCubeFace(),Xe=M.getActiveMipmapLevel();M.setRenderTarget(Me),M.getClearColor(K),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),ot&&z.render(ee);const Ke=M.toneMapping;M.toneMapping=es;const He=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),p.setupLightsView(te),nt===!0&&T.setGlobalState(M.clippingPlanes,te),Ko(E,ee,te),Ee.updateMultisampleRenderTarget(Me),Ee.updateRenderTargetMipmap(Me),he.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let yt=0,Ot=V.length;yt<Ot;yt++){const Rt=V[yt],St=Rt.object,Ge=Rt.geometry,It=Rt.material,ft=Rt.group;if(It.side===Bt&&St.layers.test(te.layers)){const En=It.side;It.side=en,It.needsUpdate=!0,xu(St,ee,te,Ge,It,ft),It.side=En,It.needsUpdate=!0,ht=!0}}ht===!0&&(Ee.updateMultisampleRenderTarget(Me),Ee.updateRenderTargetMipmap(Me))}M.setRenderTarget(Oe,Ne,Xe),M.setClearColor(K,q),He!==void 0&&(te.viewport=He),M.toneMapping=Ke}function Ko(E,V,ee){const te=V.isScene===!0?V.overrideMaterial:null;for(let W=0,Me=E.length;W<Me;W++){const Ie=E[W],Oe=Ie.object,Ne=Ie.geometry,Xe=Ie.group;let Ke=Ie.material;Ke.allowOverride===!0&&te!==null&&(Ke=te),Oe.layers.test(ee.layers)&&xu(Oe,V,ee,Ne,Ke,Xe)}}function xu(E,V,ee,te,W,Me){E.onBeforeRender(M,V,ee,te,W,Me),E.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(M,V,ee,te,E,Me),W.transparent===!0&&W.side===Bt&&W.forceSinglePass===!1?(W.side=en,W.needsUpdate=!0,M.renderBufferDirect(ee,V,te,W,E,Me),W.side=zi,W.needsUpdate=!0,M.renderBufferDirect(ee,V,te,W,E,Me),W.side=Bt):M.renderBufferDirect(ee,V,te,W,E,Me),E.onAfterRender(M,V,ee,te,W,Me)}function qo(E,V,ee){V.isScene!==!0&&(V=Ue);const te=_e.get(E),W=p.state.lights,Me=p.state.shadowsArray,Ie=W.state.version,Oe=ne.getParameters(E,W.state,Me,V,ee),Ne=ne.getProgramCacheKey(Oe);let Xe=te.programs;te.environment=E.isMeshStandardMaterial?V.environment:null,te.fog=V.fog,te.envMap=(E.isMeshStandardMaterial?Ve:je).get(E.envMap||te.environment),te.envMapRotation=te.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Xe===void 0&&(E.addEventListener("dispose",Q),Xe=new Map,te.programs=Xe);let Ke=Xe.get(Ne);if(Ke!==void 0){if(te.currentProgram===Ke&&te.lightsStateVersion===Ie)return yu(E,Oe),Ke}else Oe.uniforms=ne.getUniforms(E),E.onBeforeCompile(Oe,M),Ke=ne.acquireProgram(Oe,Ne),Xe.set(Ne,Ke),te.uniforms=Oe.uniforms;const He=te.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=T.uniform),yu(E,Oe),te.needsLights=Zp(E),te.lightsStateVersion=Ie,te.needsLights&&(He.ambientLightColor.value=W.state.ambient,He.lightProbe.value=W.state.probe,He.directionalLights.value=W.state.directional,He.directionalLightShadows.value=W.state.directionalShadow,He.spotLights.value=W.state.spot,He.spotLightShadows.value=W.state.spotShadow,He.rectAreaLights.value=W.state.rectArea,He.ltc_1.value=W.state.rectAreaLTC1,He.ltc_2.value=W.state.rectAreaLTC2,He.pointLights.value=W.state.point,He.pointLightShadows.value=W.state.pointShadow,He.hemisphereLights.value=W.state.hemi,He.directionalShadowMap.value=W.state.directionalShadowMap,He.directionalShadowMatrix.value=W.state.directionalShadowMatrix,He.spotShadowMap.value=W.state.spotShadowMap,He.spotLightMatrix.value=W.state.spotLightMatrix,He.spotLightMap.value=W.state.spotLightMap,He.pointShadowMap.value=W.state.pointShadowMap,He.pointShadowMatrix.value=W.state.pointShadowMatrix),te.currentProgram=Ke,te.uniformsList=null,Ke}function _u(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=Va.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function yu(E,V){const ee=_e.get(E);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.batchingColor=V.batchingColor,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function Yp(E,V,ee,te,W){V.isScene!==!0&&(V=Ue),Ee.resetTextureUnits();const Me=V.fog,Ie=te.isMeshStandardMaterial?V.environment:null,Oe=_===null?M.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:pn,Ne=(te.isMeshStandardMaterial?Ve:je).get(te.envMap||Ie),Xe=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ke=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),He=!!ee.morphAttributes.position,ht=!!ee.morphAttributes.normal,yt=!!ee.morphAttributes.color;let Ot=es;te.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Ot=M.toneMapping);const Rt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,St=Rt!==void 0?Rt.length:0,Ge=_e.get(te),It=p.state.lights;if(nt===!0&&(re===!0||E!==y)){const an=E===y&&te.id===v;T.setState(te,E,an)}let ft=!1;te.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==It.state.version||Ge.outputColorSpace!==Oe||W.isBatchedMesh&&Ge.batching===!1||!W.isBatchedMesh&&Ge.batching===!0||W.isBatchedMesh&&Ge.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ge.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ge.instancing===!1||!W.isInstancedMesh&&Ge.instancing===!0||W.isSkinnedMesh&&Ge.skinning===!1||!W.isSkinnedMesh&&Ge.skinning===!0||W.isInstancedMesh&&Ge.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ge.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ge.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ge.instancingMorph===!1&&W.morphTexture!==null||Ge.envMap!==Ne||te.fog===!0&&Ge.fog!==Me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==T.numPlanes||Ge.numIntersection!==T.numIntersection)||Ge.vertexAlphas!==Xe||Ge.vertexTangents!==Ke||Ge.morphTargets!==He||Ge.morphNormals!==ht||Ge.morphColors!==yt||Ge.toneMapping!==Ot||Ge.morphTargetsCount!==St)&&(ft=!0):(ft=!0,Ge.__version=te.version);let En=Ge.currentProgram;ft===!0&&(En=qo(te,V,W));let Ls=!1,An=!1,Br=!1;const Lt=En.getUniforms(),Nn=Ge.uniforms;if(ae.useProgram(En.program)&&(Ls=!0,An=!0,Br=!0),te.id!==v&&(v=te.id,An=!0),Ls||y!==E){ae.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Lt.setValue(N,"projectionMatrix",E.projectionMatrix),Lt.setValue(N,"viewMatrix",E.matrixWorldInverse);const gn=Lt.map.cameraPosition;gn!==void 0&&gn.setValue(N,De.setFromMatrixPosition(E.matrixWorld)),le.logarithmicDepthBuffer&&Lt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Lt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,An=!0,Br=!0)}if(W.isSkinnedMesh){Lt.setOptional(N,W,"bindMatrix"),Lt.setOptional(N,W,"bindMatrixInverse");const an=W.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Lt.setValue(N,"boneTexture",an.boneTexture,Ee))}W.isBatchedMesh&&(Lt.setOptional(N,W,"batchingTexture"),Lt.setValue(N,"batchingTexture",W._matricesTexture,Ee),Lt.setOptional(N,W,"batchingIdTexture"),Lt.setValue(N,"batchingIdTexture",W._indirectTexture,Ee),Lt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&Lt.setValue(N,"batchingColorTexture",W._colorsTexture,Ee));const kn=ee.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&k.update(W,ee,En),(An||Ge.receiveShadow!==W.receiveShadow)&&(Ge.receiveShadow=W.receiveShadow,Lt.setValue(N,"receiveShadow",W.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Nn.envMap.value=Ne,Nn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&V.environment!==null&&(Nn.envMapIntensity.value=V.environmentIntensity),An&&(Lt.setValue(N,"toneMappingExposure",M.toneMappingExposure),Ge.needsLights&&Jp(Nn,Br),Me&&te.fog===!0&&ce.refreshFogUniforms(Nn,Me),ce.refreshMaterialUniforms(Nn,te,J,me,p.state.transmissionRenderTarget[E.id]),Va.upload(N,_u(Ge),Nn,Ee)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Va.upload(N,_u(Ge),Nn,Ee),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Lt.setValue(N,"center",W.center),Lt.setValue(N,"modelViewMatrix",W.modelViewMatrix),Lt.setValue(N,"normalMatrix",W.normalMatrix),Lt.setValue(N,"modelMatrix",W.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const an=te.uniformsGroups;for(let gn=0,Sl=an.length;gn<Sl;gn++){const as=an[gn];ye.update(as,En),ye.bind(as,En)}}return En}function Jp(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function Zp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,V,ee){const te=_e.get(E);te.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),_e.get(E.texture).__webglTexture=V,_e.get(E.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ee,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){const ee=_e.get(E);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0};const Qp=N.createFramebuffer();this.setRenderTarget=function(E,V=0,ee=0){_=E,A=V,U=ee;let te=!0,W=null,Me=!1,Ie=!1;if(E){const Ne=_e.get(E);if(Ne.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(N.FRAMEBUFFER,null),te=!1;else if(Ne.__webglFramebuffer===void 0)Ee.setupRenderTarget(E);else if(Ne.__hasExternalTextures)Ee.rebindTextures(E,_e.get(E.texture).__webglTexture,_e.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const He=E.depthTexture;if(Ne.__boundDepthTexture!==He){if(He!==null&&_e.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(E)}}const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const Ke=_e.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ke[V])?W=Ke[V][ee]:W=Ke[V],Me=!0):E.samples>0&&Ee.useMultisampledRTT(E)===!1?W=_e.get(E).__webglMultisampledFramebuffer:Array.isArray(Ke)?W=Ke[ee]:W=Ke,C.copy(E.viewport),F.copy(E.scissor),H=E.scissorTest}else C.copy(Le).multiplyScalar(J).floor(),F.copy(Fe).multiplyScalar(J).floor(),H=Ye;if(ee!==0&&(W=Qp),ae.bindFramebuffer(N.FRAMEBUFFER,W)&&te&&ae.drawBuffers(E,W),ae.viewport(C),ae.scissor(F),ae.setScissorTest(H),Me){const Ne=_e.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ne.__webglTexture,ee)}else if(Ie){const Ne=V;for(let Xe=0;Xe<E.textures.length;Xe++){const Ke=_e.get(E.textures[Xe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Xe,Ke.__webglTexture,ee,Ne)}}else if(E!==null&&ee!==0){const Ne=_e.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ne.__webglTexture,ee)}v=-1},this.readRenderTargetPixels=function(E,V,ee,te,W,Me,Ie,Oe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){ae.bindFramebuffer(N.FRAMEBUFFER,Ne);try{const Xe=E.textures[Oe],Ke=Xe.format,He=Xe.type;if(!le.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-te&&ee>=0&&ee<=E.height-W&&(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Oe),N.readPixels(V,ee,te,W,X.convert(Ke),X.convert(He),Me))}finally{const Xe=_!==null?_e.get(_).__webglFramebuffer:null;ae.bindFramebuffer(N.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(E,V,ee,te,W,Me,Ie,Oe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne)if(V>=0&&V<=E.width-te&&ee>=0&&ee<=E.height-W){ae.bindFramebuffer(N.FRAMEBUFFER,Ne);const Xe=E.textures[Oe],Ke=Xe.format,He=Xe.type;if(!le.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ht),N.bufferData(N.PIXEL_PACK_BUFFER,Me.byteLength,N.STREAM_READ),E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Oe),N.readPixels(V,ee,te,W,X.convert(Ke),X.convert(He),0);const yt=_!==null?_e.get(_).__webglFramebuffer:null;ae.bindFramebuffer(N.FRAMEBUFFER,yt);const Ot=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await n0(N,Ot,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ht),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Me),N.deleteBuffer(ht),N.deleteSync(Ot),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,ee=0){const te=Math.pow(2,-ee),W=Math.floor(E.image.width*te),Me=Math.floor(E.image.height*te),Ie=V!==null?V.x:0,Oe=V!==null?V.y:0;Ee.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,ee,0,0,Ie,Oe,W,Me),ae.unbindTexture()};const em=N.createFramebuffer(),tm=N.createFramebuffer();this.copyTextureToTexture=function(E,V,ee=null,te=null,W=0,Me=null){Me===null&&(W!==0?(So("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=W,W=0):Me=0);let Ie,Oe,Ne,Xe,Ke,He,ht,yt,Ot;const Rt=E.isCompressedTexture?E.mipmaps[Me]:E.image;if(ee!==null)Ie=ee.max.x-ee.min.x,Oe=ee.max.y-ee.min.y,Ne=ee.isBox3?ee.max.z-ee.min.z:1,Xe=ee.min.x,Ke=ee.min.y,He=ee.isBox3?ee.min.z:0;else{const kn=Math.pow(2,-W);Ie=Math.floor(Rt.width*kn),Oe=Math.floor(Rt.height*kn),E.isDataArrayTexture?Ne=Rt.depth:E.isData3DTexture?Ne=Math.floor(Rt.depth*kn):Ne=1,Xe=0,Ke=0,He=0}te!==null?(ht=te.x,yt=te.y,Ot=te.z):(ht=0,yt=0,Ot=0);const St=X.convert(V.format),Ge=X.convert(V.type);let It;V.isData3DTexture?(Ee.setTexture3D(V,0),It=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ee.setTexture2DArray(V,0),It=N.TEXTURE_2D_ARRAY):(Ee.setTexture2D(V,0),It=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const ft=N.getParameter(N.UNPACK_ROW_LENGTH),En=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ls=N.getParameter(N.UNPACK_SKIP_PIXELS),An=N.getParameter(N.UNPACK_SKIP_ROWS),Br=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Xe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,He);const Lt=E.isDataArrayTexture||E.isData3DTexture,Nn=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){const kn=_e.get(E),an=_e.get(V),gn=_e.get(kn.__renderTarget),Sl=_e.get(an.__renderTarget);ae.bindFramebuffer(N.READ_FRAMEBUFFER,gn.__webglFramebuffer),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,Sl.__webglFramebuffer);for(let as=0;as<Ne;as++)Lt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.get(E).__webglTexture,W,He+as),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.get(V).__webglTexture,Me,Ot+as)),N.blitFramebuffer(Xe,Ke,Ie,Oe,ht,yt,Ie,Oe,N.DEPTH_BUFFER_BIT,N.NEAREST);ae.bindFramebuffer(N.READ_FRAMEBUFFER,null),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||_e.has(E)){const kn=_e.get(E),an=_e.get(V);ae.bindFramebuffer(N.READ_FRAMEBUFFER,em),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,tm);for(let gn=0;gn<Ne;gn++)Lt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,kn.__webglTexture,W,He+gn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,kn.__webglTexture,W),Nn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,an.__webglTexture,Me,Ot+gn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,an.__webglTexture,Me),W!==0?N.blitFramebuffer(Xe,Ke,Ie,Oe,ht,yt,Ie,Oe,N.COLOR_BUFFER_BIT,N.NEAREST):Nn?N.copyTexSubImage3D(It,Me,ht,yt,Ot+gn,Xe,Ke,Ie,Oe):N.copyTexSubImage2D(It,Me,ht,yt,Xe,Ke,Ie,Oe);ae.bindFramebuffer(N.READ_FRAMEBUFFER,null),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Nn?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(It,Me,ht,yt,Ot,Ie,Oe,Ne,St,Ge,Rt.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(It,Me,ht,yt,Ot,Ie,Oe,Ne,St,Rt.data):N.texSubImage3D(It,Me,ht,yt,Ot,Ie,Oe,Ne,St,Ge,Rt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Me,ht,yt,Ie,Oe,St,Ge,Rt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Me,ht,yt,Rt.width,Rt.height,St,Rt.data):N.texSubImage2D(N.TEXTURE_2D,Me,ht,yt,Ie,Oe,St,Ge,Rt);N.pixelStorei(N.UNPACK_ROW_LENGTH,ft),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,En),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ls),N.pixelStorei(N.UNPACK_SKIP_ROWS,An),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Br),Me===0&&V.generateMipmaps&&N.generateMipmap(It),ae.unbindTexture()},this.initRenderTarget=function(E){_e.get(E).__webglFramebuffer===void 0&&Ee.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ee.setTextureCube(E,0):E.isData3DTexture?Ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ee.setTexture2DArray(E,0):Ee.setTexture2D(E,0),ae.unbindTexture()},this.resetState=function(){A=0,U=0,_=null,ae.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const up="lomme3d-v1",hu=()=>({started:!1,sound:!0,voice:!0,music:!0,balls:10,x:0,z:0,team:[],box:[],seen:{},caught:{},uid:1,wins:0,v:2,flags:{},spot:null,fp:!1,ended:!1});let Z=hu();try{const s=JSON.parse(localStorage.getItem(up)||"null");s&&typeof s=="object"&&(Z=Object.assign(hu(),s),(s.v||1)<2&&(Z.v=2,Z.x=0,Z.z=0,Z.flags={},Z.spot=null))}catch{}function Gt(){try{localStorage.setItem(up,JSON.stringify(Z))}catch{}}function P1(){const s={sound:Z.sound,voice:Z.voice,music:Z.music};Z=Object.assign(hu(),s),Gt()}let Ci=null,Qs=null,cc=0,Ra=0;function uu(){if(!Ci)try{Ci=new(window.AudioContext||window.webkitAudioContext)}catch{return null}return Ci.state==="suspended"&&Ci.resume(),Ci}function Jt(s,e=.12,t="square",n=.06,i=0,r=null){const o=uu();if(!o)return;const a=o.createOscillator(),l=o.createGain(),c=o.currentTime+i;a.type=t,a.frequency.setValueAtTime(s,c),l.gain.setValueAtTime(n,c),l.gain.exponentialRampToValueAtTime(1e-4,c+e),a.connect(l).connect(r||o.destination),a.start(c),a.stop(c+e+.02)}const Fn=s=>(...e)=>{Z.sound&&s(...e)},Qe={tap:Fn(()=>Jt(660,.06,"triangle",.05)),hit:Fn(()=>{Jt(180,.12,"sawtooth",.06),Jt(120,.15,"square",.04,.04)}),big:Fn(()=>{Jt(260,.1,"sawtooth",.07),Jt(520,.15,"square",.05,.06)}),shoot:Fn(()=>Jt(520,.12,"triangle",.05)),win:Fn(()=>[523,659,784,1047].forEach((s,e)=>Jt(s,.16,"triangle",.07,e*.1))),bad:Fn(()=>{Jt(220,.2,"triangle",.06),Jt(165,.25,"triangle",.06,.15)}),meet:Fn(()=>[880,660,880,660,990].forEach((s,e)=>Jt(s,.08,"square",.05,e*.07))),ball:Fn(()=>Jt(400,.25,"sine",.07)),click:Fn(()=>Jt(1200,.04,"square",.04)),grow:Fn(()=>[392,494,587,784,988].forEach((s,e)=>Jt(s,.2,"triangle",.07,e*.12))),heal:Fn(()=>[659,784,988,1319].forEach((s,e)=>Jt(s,.18,"sine",.07,e*.11))),step:Fn(()=>Jt(140+Math.random()*40,.04,"triangle",.02))},I1=[0,2,4,7,9,12,14,16],L1={world:[0,2,4,2,5,4,2,1,0,2,4,5,7,5,4,2],battle:[0,0,4,0,5,0,4,2,0,0,4,0,7,5,4,2]};let xh="world";function Qa(s){xh=s}function D1(s){if(!Z.music||!Ci||Ci.state!=="running"||(Qs||(Qs=Ci.createGain(),Qs.gain.value=.5,Qs.connect(Ci.destination)),cc-=s,cc>0))return;const e=xh==="battle";cc=e?.17:.28;const t=e?196:262,n=L1[xh],i=n[Ra%n.length];Jt(t*Math.pow(2,I1[i%8]/12),e?.14:.22,"triangle",.035,0,Qs),Ra%4===0&&Jt(t/2*Math.pow(2,[0,5,7,3][(Ra/4|0)%4]/12),e?.5:.9,"sine",.05,0,Qs),Ra++}let _h=[];try{const s=()=>{_h=speechSynthesis.getVoices()};s(),speechSynthesis.onvoiceschanged=s}catch{}function Ps(s){if(!(!Z.voice||typeof speechSynthesis>"u"||!s))try{const e=_h.find(n=>/^da/i.test(n.lang));if(_h.length&&!e)return;speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(s.replace(/\p{Extended_Pictographic}|️/gu,""));t.lang="da-DK",e&&(t.voice=e),t.rate=.95,t.pitch=1.1,speechSynthesis.speak(t)}catch{}}function Hf(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Pt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Vf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const g=Vf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Vf(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new zt(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Gf(s,e){if(e===Rm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ch||e===Cd){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ch)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class fp extends kr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new F1(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new $1(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new V1(t)}),this.register(function(t){return new G1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new O1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new B1(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new N1(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new Z1(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ho.extractUrlBase(e);o=ho.resolveURL(c,this.path)}else o=ho.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new sp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===dp){try{o[lt.KHR_BINARY_GLTF]=new Q1(e)}catch(u){i&&i(u);return}r=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new fM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case lt.KHR_MATERIALS_UNLIT:o[u]=new k1;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[u]=new eM(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[u]=new tM;break;case lt.KHR_MESH_QUANTIZATION:o[u]=new nM;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function U1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class N1{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],pn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ml(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ru(h),c.distance=u;break;case"spot":c=new rp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class k1{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return mt}extendParams(e,t,n){const i=[];e.color=new be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(i)}}class O1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class F1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(a,a)}return Promise.all(r)}}class z1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class B1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class H1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],pn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ct)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class V1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class G1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(a[0],a[1],a[2],pn),Promise.all(r)}}class W1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class X1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(a[0],a[1],a[2],pn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ct)),Promise.all(r)}}class j1{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class K1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class q1{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class $1{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Y1{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class J1{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class Z1{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Bn.TRIANGLES&&c.mode!==Bn.TRIANGLE_STRIP&&c.mode!==Bn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const g of u){const x=new qe,m=new I,p=new Kn,S=new I(1,1,1),b=new ys(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&S.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,x.compose(m,p,S));for(const M in l)if(M==="_COLOR_0"){const P=l[M];b.instanceColor=new uh(P.array,P.itemSize,P.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);At.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),d.push(b)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const dp="glTF",Zr=12,Wf={JSON:1313821514,BIN:5130562};class Q1{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Zr,r=new DataView(e,Zr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Wf.JSON){const c=new Uint8Array(e,Zr+o,a);this.content=n.decode(c)}else if(l===Wf.BIN){const c=Zr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class eM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=yh[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=yh[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=pr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const g in d.attributes){const x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(d)},a,c,pn,f)})})}}class tM{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class nM{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class pp extends Ho{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,S=1-m,b=p-f+u;for(let M=0;M!==a;M++){const P=o[x+M+a],A=o[x+M+l]*h,U=o[g+M+a],_=o[g+M]*h;r[M]=S*P+b*A+m*U+p*_}return r}}const iM=new Kn;class sM extends pp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return iM.fromArray(r).normalize().toArray(r),r}}const Bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xf={9728:Yt,9729:dn,9984:yd,9985:Oa,9986:io,9987:Li},jf={33071:Zi,33648:ja,10497:is},hc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rM={CUBICSPLINE:void 0,LINEAR:Mo,STEP:yo},uc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Gn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),s.DefaultMaterial}function ps(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ai(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function lM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cM(s){let e;const t=s.extensions&&s.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fc(t.attributes):e=s.indices+":"+fc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+fc(s.targets[n]);return e}function fc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Mh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const uM=new qe;class fM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new U1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new nu(this.options.manager):this.textureLoader=new Lg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ps(r,a,i),ai(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ho.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=hc[i.type],a=pr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new zt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=hc[i.type],c=pr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(d&&d!==u){const p=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(S);b||(x=new c(a,p*d,i.count*d/h),b=new Bd(x,d/h),t.cache.add(S,b)),m=new wo(b,l,f%d/h,g)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),m=new zt(x,l,g);if(i.sparse!==void 0){const p=hc.SCALAR,S=pr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,P=new S(o[1],b,i.sparse.count*p),A=new c(o[2],M,i.sparse.count*l);a!==null&&(m=new zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let U=0,_=P.length;U<_;U++){const v=P[U];if(m.setX(v,A[U*l]),l>=2&&m.setY(v,A[U*l+1]),l>=3&&m.setZ(v,A[U*l+2]),l>=4&&m.setW(v,A[U*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Xf[f.magFilter]||dn,h.minFilter=Xf[f.minFilter]||Li,h.wrapS=jf[f.wrapS]||is,h.wrapT=jf[f.wrapT]||is,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Yt&&h.minFilter!==dn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Wt(x);m.needsUpdate=!0,f(m)}),t.load(ho.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),ai(u,o),u.userData.mimeType=o.mimeType||hM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wd,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Gd,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Gn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){const u=i[lt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new be(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],pn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ct)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Bt);const h=r.alphaMode||uc.OPAQUE;if(h===uc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===uc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==mt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==mt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==mt){const u=r.emissiveFactor;a.emissive=new be().setRGB(u[0],u[1],u[2],pn)}return r.emissiveTexture!==void 0&&o!==mt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ai(u,r),t.associations.set(u,{materials:e}),r.extensions&&ps(i,u,r),u})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Kf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=cM(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Kf(new Pt,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?oM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const x=h[d],m=o[d];let p;const S=c[d];if(m.mode===Bn.TRIANGLES||m.mode===Bn.TRIANGLE_STRIP||m.mode===Bn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new A0(x,S):new de(x,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Bn.TRIANGLE_STRIP?p.geometry=Gf(p.geometry,Cd):m.mode===Bn.TRIANGLE_FAN&&(p.geometry=Gf(p.geometry,ch));else if(m.mode===Bn.LINES)p=new D0(x,S);else if(m.mode===Bn.LINE_STRIP)p=new qh(x,S);else if(m.mode===Bn.LINE_LOOP)p=new U0(x,S);else if(m.mode===Bn.POINTS)p=new $h(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&lM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ai(p,r),m.extensions&&ps(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ps(i,u[0],r),u[0];const f=new Je;r.extensions&&ps(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(Ms.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new pl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ai(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const f=new qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new jh(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],g=i.samplers[d.sampler],x=d.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let b=0,M=f.length;b<M;b++){const P=f[b],A=d[b],U=g[b],_=x[b],v=m[b];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();const y=n._createAnimationTracks(P,A,U,_,v);if(y)for(let C=0;C<y.length;C++)p.push(y[C])}const S=new gh(r,void 0,p);return ai(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,uM)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Vd:c.length>1?h=new Je:c.length===1?h=c[0]:h=new At,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ai(h,r),r.extensions&&ps(n,h,r),r.matrix!==void 0){const u=new qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Je;n.name&&(r.name=i.createUniqueName(n.name)),ai(r,n),n.extensions&&ps(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Dn||f instanceof Wt)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];qi[r.path]===qi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(qi[r.path]){case qi.weights:c=Er;break;case qi.rotation:c=Ar;break;case qi.translation:case qi.scale:c=Rr;break;default:n.itemSize===1?c=Er:c=Rr;break}const h=i.interpolation!==void 0?rM[i.interpolation]:Mo,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+qi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Mh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ar?sM:pp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dM(s,e,t){const n=e.attributes,i=new Tn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const h=Mh(pr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,l=new I;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const x=Mh(pr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new gi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Kf(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=yh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ut.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),ai(s,e),dM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?aM(s,e.targets,t):s})}function mp(s){const e=new Map,t=new Map,n=s.clone();return gp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function gp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)gp(s.children[n],e.children[n],t)}class vp extends ul{constructor(){super();const e=new wt;e.deleteAttribute("uv");const t=new Gn({side:en}),n=new Gn,i=new ru(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new de(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ys(e,n,6),a=new At;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new de(e,er(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new de(e,er(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new de(e,er(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new de(e,er(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new de(e,er(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new de(e,er(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function er(s){return new ts({color:0,emissive:16777215,emissiveIntensity:s})}const pM={title:"Cute Dragon",author:"shakiller",url:"https://sketchfab.com/3d-models/cute-dragon-df14ec74767c4598920132758dab8a49",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},mM={title:"Monster Plant",author:"Batuhan13",url:"https://sketchfab.com/3d-models/monster-plant-b7e677ebca4e4b6ea247fba10a356bd4",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},gM={title:"Cartoon Shark (Animated)",author:"Jungle Jim",url:"https://sketchfab.com/3d-models/cartoon-shark-animated-aff822cf5d9643569b153de9284b05c4",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},vM={title:"Fox",author:"pxltiger",url:"https://sketchfab.com/3d-models/fox-39f97fe58f0b47ce80b6e02814001dd7",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},xM={title:"Magic Forest Dragon",author:"LivindorCreation",url:"https://sketchfab.com/3d-models/magic-forest-dragon-9e1bcd17aa0f441fbf204fdfc7b8d8f7",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},_M={title:"Magic Wolf",author:"alice.duarte13",url:"https://sketchfab.com/3d-models/magic-wolf-2b183ca4a3984c1385856ca864c7508c",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},yM={title:"phoenix bird",author:"NORBERTO-3D",url:"https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},MM={title:"jellyfish",author:"yanix",url:"https://sketchfab.com/3d-models/jellyfish-d06a5a553fe641ab92f720527b2278f3",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},bM={title:"Griffin Animated",author:"VitSh",url:"https://sketchfab.com/3d-models/griffin-animated-a8852f113416426bb06e6bba49a525a9",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},SM={title:"Drugdör The Golem Animated",author:"Phons",url:"https://sketchfab.com/3d-models/drugdor-the-golem-animated-19c1855bdb2c4cdc89da2cfb64da48cf",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},wM={title:"Ice Elemental",author:"InaLaAtzu",url:"https://sketchfab.com/3d-models/ice-elemental-aad46bfde099472481b1536428a122ae",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},TM={title:"TYRANNO",author:"seth the yutyrannus",url:"https://sketchfab.com/3d-models/tyranno-a54f6868a63e4c729556d387aa090a43",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},EM={title:"Legendary Chicken Warrior (Animated, 35 motions)",author:"Jungle Jim",url:"https://sketchfab.com/3d-models/legendary-chicken-warrior-animated-35-motions-4c7deda095d64f8cb0e4b8c5277d1f19",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},AM={title:"Fantasy Butterfly Animation",author:"lalune",url:"https://sketchfab.com/3d-models/fantasy-butterfly-animation-0f24b085e8654e4db09c2fe681a79e3f",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},RM={title:"Baby Dino",author:"rickymorgue",url:"https://sketchfab.com/3d-models/baby-dino-7f6990157fd44a0c88c5834b5fe04413",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},CM={title:"Toon Mutant Wolf",author:"Fubbi",url:"https://sketchfab.com/3d-models/toon-mutant-wolf-7c76969b74584096a824917029a9b1ac",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},PM={title:"Idle animation Golem",author:"Di Co",url:"https://sketchfab.com/3d-models/idle-animation-golem-d897a9c635304bd986c3e84d85bad268",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},IM={title:"White Eagle Animation Fast Fly",author:"GremorySaiyan",url:"https://sketchfab.com/3d-models/white-eagle-animation-fast-fly-30203bf39e5145f19c79e83c550139d3",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},LM={title:"Dancing Crab - Uca Mjoebergi",author:"Bohdan Lvov",url:"https://sketchfab.com/3d-models/dancing-crab-uca-mjoebergi-280863886fee409ab3c8168f07caa89f",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},DM={title:"Emerald Bat",author:"CataRackta",url:"https://sketchfab.com/3d-models/emerald-bat-81c37685c47c4f98a33738127e8a75c1",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},UM={title:"Mythic Whale - Stylized Animated model",author:"Meleagors",url:"https://sketchfab.com/3d-models/mythic-whale-stylized-animated-model-124137f938ec4f5390ddde6dffd7c62e",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},NM={title:"Model 53A - Flatback Sea Turtle",author:"DigitalLife3D",url:"https://sketchfab.com/3d-models/model-53a-flatback-sea-turtle-442372b7f02b4730882d41d959726156",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},kM={title:"African penguin (Spheniscus demersus) Low poly",author:"Major",url:"https://sketchfab.com/3d-models/african-penguin-spheniscus-demersus-low-poly-9e59070815fe451d93398e2ebdb9bb92",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},OM={title:"Arachnid, bug",author:"stasbelyk13",url:"https://sketchfab.com/3d-models/arachnid-bug-9a502ea6074749ecaf8984eac4bde2d2",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},FM={title:"A Rhino beetle",author:"aaadragon",url:"https://sketchfab.com/3d-models/a-rhino-beetle-83b3e7f2c3d84678a06d68d360efac50",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},zM={title:"Cute Lizard Stylized",author:"Daniel JIN",url:"https://sketchfab.com/3d-models/cute-lizard-stylized-9023e02868a14eaaae460d195f18be38",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},BM={title:"Tiger",author:"Blender Artist",url:"https://sketchfab.com/3d-models/tiger-67bbedd727a047869ef7c7b608445484",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},HM={title:"Elk Animated Stylized",author:"WildMesh 3D",url:"https://sketchfab.com/3d-models/elk-animated-stylized-26e54fa5c1d74edba61f5c5a97c95798",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},VM={title:"Game-Ready dolphin (Swimming)",author:"Allie2k",url:"https://sketchfab.com/3d-models/game-ready-dolphin-swimming-b621ec8894734bc79c04338edff3cd0d",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},GM={title:"Jelly",author:"Tomato Owl",url:"https://sketchfab.com/3d-models/jelly-a59257e5fc344d0d9aca8187c7ade6fc",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},WM={title:"Blue Ringed Octopus - Inktober Day 1",author:"lesliestowe",url:"https://sketchfab.com/3d-models/blue-ringed-octopus-inktober-day-1-ac85becda709471494d049ab346136f0",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},XM={title:"Whale Shark Fantasy",author:"Alenzo",url:"https://sketchfab.com/3d-models/whale-shark-fantasy-451892c9c18c4d74bf893bea8b626b02",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},jM={title:"The Kraken",author:"Fabian van Dorst",url:"https://sketchfab.com/3d-models/the-kraken-55d900af1bfa460fb0f9304ab9fc594b",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},KM={title:"Owlbear",author:"Spinnee",url:"https://sketchfab.com/3d-models/owlbear-b073d2499a7a40528d3000bebcd65783",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},qM={title:"Low poly animated Cartoon Alligator",author:"Blue Colossus Studio",url:"https://sketchfab.com/3d-models/low-poly-animated-cartoon-alligator-8d067b5049c349c5af727b00e8f9dda6",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},$M={title:"Alligator",author:"MatthewBlake",url:"https://sketchfab.com/3d-models/alligator-29de7cecf95e458d920b29f7e1e772ba",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},YM={title:"Beaver Betsy (With Anims)",author:"Whunder Models",url:"https://sketchfab.com/3d-models/beaver-betsy-with-anims-a411cd4c10944eb480c0f9f1bf76f207",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},JM={title:"Capybara",author:"gamersito?",url:"https://sketchfab.com/3d-models/capybara-a06c9212dfe6401981a355cae942fb09",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},ZM={title:"Croco The Crocodile (Animated)",author:"Gavin Bou - Official",url:"https://sketchfab.com/3d-models/croco-the-crocodile-animated-9d6bdb9f6c5d41cc96d72e1ee25242c6",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},QM={title:"Mushroom Monster",author:"Lizzy Koopa",url:"https://sketchfab.com/3d-models/mushroom-monster-1088371bbd6e40699e8f8eff14b28954",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},eb={title:"Frog Plush",author:"Ida Ailes",url:"https://sketchfab.com/3d-models/frog-plush-472d646ce4a8402695ce79ae5cfff82a",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},tb={title:"CC0 カジカガエル 🐸 ♂ Kajika Frog, Buergeria buergeri",author:"ffish.asia / floraZia.com",url:"https://sketchfab.com/3d-models/cc0-kajika-frog-buergeria-buergeri-c60c3229de1144f3bfa2bf1979b52568",license:"CC0 Public Domain",licenseUrl:"http://creativecommons.org/publicdomain/zero/1.0/"},nb={title:"Giant otter",author:"VoltVeigh",url:"https://sketchfab.com/3d-models/giant-otter-0869535ee6a44904a55abd99ae5eaa08",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},ib={title:"Free Low Poly Cartoon Koi Fish",author:"GameAssetsFin",url:"https://sketchfab.com/3d-models/free-low-poly-cartoon-koi-fish-62ea29193ca14f7fb65c5876bfc2ea66",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},sb={title:"Simio Monkey dancing",author:"pepetrincado",url:"https://sketchfab.com/3d-models/simio-monkey-dancing-3ba199e0a78546598f868e86d78495a0",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},rb={title:"Day 13 - Arctic Fox",author:"Lilly!",url:"https://sketchfab.com/3d-models/day-13-arctic-fox-8a65fab5402d473c8fff58ad7d8d7ab4",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},ob={title:"Realistic Animated Bear 3D Model",author:"WildMesh 3D",url:"https://sketchfab.com/3d-models/realistic-animated-bear-3d-model-bffc3c87d2d148ff8533e1cc8a11c9f1",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},ab={title:"fantasy boar animation",author:"blam",url:"https://sketchfab.com/3d-models/fantasy-boar-animation-a9dd958971ea462fbaab621410c30748",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},lb={title:"Deer",author:"KhmerTeach",url:"https://sketchfab.com/3d-models/deer-144b33ab9e3345cb92b41bf297a38b7d",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},cb={title:"Gorilla",author:"planeta-elefante",url:"https://sketchfab.com/3d-models/gorilla-e69585d870ce4ae382fd071e87ae3b0e",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},hb={title:"Ibex run",author:"Rainbow Yoshi Gun",url:"https://sketchfab.com/3d-models/ibex-run-0e053d8eb11747eba0009cd1eeebb4b1",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},ub={title:"MAMMOTH",author:"seth the yutyrannus",url:"https://sketchfab.com/3d-models/mammoth-5e0a1d6bb8a74c0f906bafa34cffa0c5",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},fb={title:"Woolly Rhino",author:"planeta-elefante",url:"https://sketchfab.com/3d-models/woolly-rhino-27bd263368d741fc9126f83bcee1f43f",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},db={title:"lynx",author:"Paleo Modelist",url:"https://sketchfab.com/3d-models/lynx-aff6767399cf4daca1a82b43ccaa1252",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},pb={title:"Alpha wolf",author:"PrinceAli",url:"https://sketchfab.com/3d-models/alpha-wolf-eabfb1220f3d4c4c88f3216bcf3d3bd0",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},mb={title:"Lowpoly bigfoot",author:"Sololopenko",url:"https://sketchfab.com/3d-models/lowpoly-bigfoot-a85b050494a14d8aa7a5a94c82a6176c",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},gb={title:"Red Panda",author:"Paleo Modelist",url:"https://sketchfab.com/3d-models/red-panda-81007af39d6c4150b88f2abf4cc32a33",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},vb={title:"HIPPOGRIF ANIMATION",author:"blam",url:"https://sketchfab.com/3d-models/hippogrif-animation-80c2109fe4a84dda8211d4084ab66adb",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},xb={title:"Gryphon Rigged and Animated",author:"DreamNoms",url:"https://sketchfab.com/3d-models/gryphon-rigged-and-animated-0cb6c35a8500427694747768186854c7",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},_b={title:"Red-tailed Hawk - in Flight",author:"osuecampus",url:"https://sketchfab.com/3d-models/red-tailed-hawk-in-flight-4abcab5af9044a939fb5a55bff9e5000",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},yb={title:"Golem Rigged",author:"FourthGreen",url:"https://sketchfab.com/3d-models/golem-rigged-d10636462a4643898cf9b139b322d271",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Mb={title:"Mole",author:"SidewalkNZ",url:"https://sketchfab.com/3d-models/mole-438e045eb812467bb1f5091a4e939960",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},bb={title:"Chameleon-Mantis Reptisect",author:"Abel099",url:"https://sketchfab.com/3d-models/chameleon-mantis-reptisect-9b7df49bee754d20a8daf563e525cf38",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Sb={title:"Leopard ROCKER Gecko",author:"Zeke",url:"https://sketchfab.com/3d-models/leopard-rocker-gecko-5f7ae8fe6d1144ceb7f9c7bb63997d78",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},wb={title:"Skink",author:"bronwenalexina",url:"https://sketchfab.com/3d-models/skink-01c4356f2600496795123d5867ff592b",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Tb={title:"Lunamoth - Stylized animated model",author:"Meleagors",url:"https://sketchfab.com/3d-models/lunamoth-stylized-animated-model-c28c7a2239c743b58e3ce55d0ad5eaeb",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Eb={title:"Cute tentacle creature",author:"endike",url:"https://sketchfab.com/3d-models/cute-tentacle-creature-2aec23f475dc4c93a6353fa7052d15d2",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Ab={title:"Lava Golem",author:"Witsanu Superball",url:"https://sketchfab.com/3d-models/lava-golem-18c486a217434d31a74aeae478cd4940",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Rb={title:"Lava Elemental",author:"ikreinin",url:"https://sketchfab.com/3d-models/lava-elemental-193bccb25d544a0a92dcbbaf21d7d75a",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Cb={title:"Fire Elemental (Free 3D Model)",author:"FoFLaFe",url:"https://sketchfab.com/3d-models/fire-elemental-free-3d-model-a6d158f49f824687a807b1956a285b90",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Pb={title:"Low Poly Carnotaurus – Rigged Model",author:"HardLine",url:"https://sketchfab.com/3d-models/low-poly-carnotaurus-rigged-model-ca732f0dba5d47f0b8b5f9b999a6df89",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Ib={title:"Real-time Bones Demo: Phoenix Bird",author:"Sketchfab",url:"https://sketchfab.com/3d-models/real-time-bones-demo-phoenix-bird-6a8d1fd20a1f46e988d9d06e028f75a0",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Lb={title:"Phoenix on fire update",author:"NORBERTO-3D",url:"https://sketchfab.com/3d-models/phoenix-on-fire-update-61234a74a9bd4ac6b9e44b5d2b24cc8e",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Db={title:"Flint Maw",author:"Spinnee",url:"https://sketchfab.com/3d-models/flint-maw-f301bd397cd6492b9df719313ecc51fe",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Ub={title:"Dromedary",author:"planeta-elefante",url:"https://sketchfab.com/3d-models/dromedary-3e1ddd35d0f045ab84177f6f68678ef3",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Nb={title:"Dragon Flying Cycle",author:"RedCoreTimber",url:"https://sketchfab.com/3d-models/dragon-flying-cycle-ae0831702eac462a9969ff4f8bd57710",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},kb={title:"Custom Axolotl Dragon",author:"Alx_Olotl (commissions opened)",url:"https://sketchfab.com/3d-models/custom-axolotl-dragon-58ce3dd6f5854af5bef12d87159349d4",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Ob={title:"Baby Dragon RIKU",author:"BlueMesh",url:"https://sketchfab.com/3d-models/baby-dragon-riku-608f023dc57f46c89af93cb5a051b3f0",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Fb={title:"Cragle",author:"ChamberSu",url:"https://sketchfab.com/3d-models/cragle-595defc6c81e40ddbca435b78e0ae9f7",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},zb={title:"elemental_lord",author:"letmetankher",url:"https://sketchfab.com/3d-models/elemental-lord-d1dae891746b404586fa83bfbdef0d07",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Bb={title:"Wyvern",author:"Max7BE",url:"https://sketchfab.com/3d-models/wyvern-a5d1f7a5119a4786bc54515b506f4919",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Hb={title:"Adult Dragon",author:"jose.ranieri",url:"https://sketchfab.com/3d-models/adult-dragon-b1667e01947148e5bea733b3b69cdccc",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Vb={title:"Gompy - The Armadillo",author:"Horizon Studio",url:"https://sketchfab.com/3d-models/gompy-the-armadillo-cc483c92b99041fb90c690479a8bb965",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Gb={title:"Chameleon Model and Animations | Stuffed",author:"Connor R. Cox",url:"https://sketchfab.com/3d-models/chameleon-model-and-animations-stuffed-61855b2d495c482694f6838f33215ab2",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Wb={title:"Horse Rigged(Game Ready)",author:"abhayexe",url:"https://sketchfab.com/3d-models/horse-riggedgame-ready-bc64f4ff7966474ca9bacd42fa73a754",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},Xb={title:"Low Poly Horse",author:"Ravenlilli",url:"https://sketchfab.com/3d-models/low-poly-horse-482710cb9b0b4020a852ee709abd6cb9",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},jb={title:"Low-poly Racoon Run Animation",author:"avatrass",url:"https://sketchfab.com/3d-models/low-poly-racoon-run-animation-ee040f4719fa4b449176f860921a7655",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/"},xp={gnistro:pM,bidblomst:mM,hajtand:gM,flammeraev:vM,skovdrage:xM,frostulv:_M,solfonix:yM,glodemanet:MM,stormgrif:bM,klippegolem:SM,iskaempe:wM,tyrannor:TM,kampkylling:EM,krystalvinge:AM,pletsaur:RM,skyggeulv:CM,lynrobot:PM,"env:naturepack":{title:"Low poly Stylized Nature Pack",author:"Satendra Saraswat",url:"https://sketchfab.com/3d-models/low-poly-stylized-nature-pack-9c773e846c6e4448b26b2cdecb2b91bf",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/",role:"Natur"},"env:treepack":{title:"Free Pack - Tree",author:"PolyOne Studio",url:"https://sketchfab.com/3d-models/free-pack-tree-196525a9936a40c1ba7e74ce5c071d59",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/",role:"Træer"},"env:rocks":{title:"[FREE] Lowpoly Volcanic Rocks [Asset Pack]",author:"SimplePolygon",url:"https://sketchfab.com/3d-models/free-lowpoly-volcanic-rocks-asset-pack-4fe6a72f8afa4bafbd03cf384add10f0",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/",role:"Sten og klipper"},"env:cottage":{title:"Cottage House - 3DDecember Day4",author:"Batuhan13",url:"https://sketchfab.com/3d-models/cottage-house-3ddecember-day4-46382f2e67284903b2f3f04662377a04",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/",role:"Hjertehuset"},"env:stylcottage":{title:"Stylized Cottage",author:"Xali",url:"https://sketchfab.com/3d-models/stylized-cottage-a578df73e8a64c60881f194556f4851c",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/",role:"Vindmøllen"},"env:adventurer":{title:"Male Adventurer",author:"manoeldarochadeoliveira",url:"https://sketchfab.com/3d-models/male-adventurer-3f5f7d12c07445fe9b8c4958935970e2",license:"CC Attribution",licenseUrl:"http://creativecommons.org/licenses/by/4.0/",role:"Eventyreren (dig)"},oern:IM,krabbe:LM,smaragdbat:DM,mytehval:UM,havskildpadde:NM,pingvin:kM,grottekryb:OM,naesehornsbille:FM,firben:zM,tiger:BM,elg:HM,delfin:VM,gople:GM,blaeksprutte:WM,hvalhaj:XM,kraken:jM,uglebjoern:KM,kajman:qM,alligator:$M,baever:YM,kapibara:JM,krokobas:ZM,svampetrold:QM,plysfro:eb,sangfro:tb,kaempeodder:nb,guldkoi:ib,junglabe:sb,polarraev:rb,bjergbjoern:ob,stormgalt:ab,sneehjort:lb,bjerggorilla:cb,stenbuk:hb,mammut:ub,uldnaesehorn:fb,snelos:db,graaulv:pb,bjergtrold:mb,roedpanda:gb,hippogrif:vb,guldgrif:xb,roedhoeg:_b,krystalgolem:yb,muldvarp:Mb,mantisfirben:bb,rockgekko:Sb,blaaskink:wb,maanemoel:Tb,stjerneblaek:Eb,lavagolem:Ab,lavaaand:Rb,ildaand:Cb,karnotaur:Pb,ildfugl:Ib,gnistfoenix:Lb,flintgab:Db,dromedar:Ub,stjernedrage:Nb,axolotldrage:kb,riku:Ob,kraglegrif:Fb,boelgeherre:zb,guldwyvern:Bb,blaadrage:Hb,panserbold:Vb,kamaeleon:Gb,engshest:Wb,alpaka:Xb,vaskebjoern:jb},cn=Math.PI/2,we=(s,e,t,n,i,r={})=>({id:s,name:e,types:t,h:n,where:i,yaw:0,anims:{},...r}),_p=[we("gnistro","Gnistro",["fire","dragon"],.95,"meadow",{starter:!0,anims:{idle:"Take 001"}}),we("bidblomst","Bidblomst",["grass","poison"],1,"forest",{starter:!0,anims:{idle:"PlantIdle"}}),we("hajtand","Hajtand",["water"],.75,"sea",{starter:!0,yaw:cn,float:.35,len:1.5,anims:{idle:"Base Layer"}}),we("flammeraev","Flammeræv",["fire"],.8,"meadow",{anims:{idle:"Fox_Idle",walk:"Fox_Walk",run:"Fox_Run",attack:["Fox_Attack_Paws","Fox_Attack_Tail"],hop:"Fox_Jump"}}),we("tyrannor","Tyrannor",["rock","dragon"],1.15,"mountain",{yaw:-cn,len:2.1,anims:{idle:"Idle",walk:"Walk",run:"Run",attack:["Attack","TailWhip"],win:"Roar"}}),we("kampkylling","Kampkylling",["fighting","flying"],1.25,"meadow",{anims:{idle:"RPG_Armed_Idle",walk:"RPG_Armed_Walk",run:"RPG_Armed_Run",attack:["RPG_Armed_Attack_Dual1","RPG_Armed_Attack_Kick_R1"],hurt:"RPG_Armed_Stunned"}}),we("frostulv","Frostulv",["ice"],1.05,"mountain",{anims:{idle:"magic_wolf|Idle",walk:"magic_wolf|walk",run:"magic_wolf|run",attack:["magic_wolf|claw attack","magic_wolf|flame thrower"],hurt:"magic_wolf|damage"}}),we("klippegolem","Klippegolem",["rock","ground"],1.35,"cave",{can:["climb"],anims:{idle:"Idle",walk:"Walk",attack:["Attack1","Attack2"],hurt:"Defence1"}}),we("iskaempe","Iskæmpe",["ice","rock"],1.4,"mountain",{}),we("lynrobot","Lynrobot",["steel","electric"],1.2,["cave","meadow"],{}),we("stormgrif","Stormgrif",["flying","normal"],1.25,"mountain",{can:["fly"]}),we("glodemanet","Glødemanet",["water","psychic"],1,["sea","shore"],{float:.25}),we("pletsaur","Pletsaur",["water","normal"],1,["meadow","shore"],{slowIdle:!0}),we("krystalvinge","Krystalvinge",["bug","psychic"],.55,"forest",{float:.5}),we("skyggeulv","Skyggeulv",["dark"],.9,"forest",{slowIdle:!0,anims:{walk:"walk"}}),we("skovdrage","Skovdrage",["grass","dragon"],1.45,"forest",{rare:!0,anims:{idle:"idle",walk:"travelmove",run:"travelrun",attack:["attack_1","cast_1"],hurt:"hurtsmall",win:"winidle"}}),we("solfonix","Solfønix",["fire","flying"],.9,"boss",{legend:!0,yaw:-cn,float:.6,len:1.9,anims:{idle:"Take 001"}}),we("oern","Stormørn",["flying","normal"],1,"meadow",{float:.6,len:1.6}),we("krabbe","Klokrabbe",["water","fighting"],.7,["meadow","shore"],{hide:["AOFLoor"],tint:{"*":15228986}}),we("firben","Løvfirben",["grass","normal"],.75,"meadow",{len:1.4}),we("uglebjoern","Uglebjørn",["normal","flying"],1.35,"forest",{}),we("elg","Kronelg",["grass","normal"],1.5,"forest",{len:1.9,tint:{Body:9067062,Head:9067062,Chifre:14733480},anims:{idle:"Stand_Breathing_01",walk:"Walk",run:"Run",hurt:"Hit_Stand_L01",hop:"JumpStand"}}),we("tiger","Tigerklo",["fighting","dark"],.95,"forest",{yaw:cn,len:1.8,anims:{idle:"Idle_Lie Prone",walk:"Walk",run:"Run",attack:["Attack"],win:"Howl"}}),we("smaragdbat","Smaragdbat",["dark","flying"],.7,"cave",{float:.7}),we("grottekryb","Grottekryb",["bug","poison"],.8,"cave",{float:.4,anims:{idle:"waiting 2",walk:"flight",attack:["attack"]}}),we("naesehornsbille","Panserbille",["bug","steel"],.6,"cave",{len:1.2,anims:{idle:"idle",walk:"walk",attack:["attack"]}}),we("delfin","Bølgedelfin",["water"],.7,"sea",{yaw:2*cn,float:.4,len:1.7}),we("havskildpadde","Havskjold",["water","rock"],.7,"sea",{yaw:cn,float:.3,len:1.5,tint:{"*":6987888}}),we("blaeksprutte","Ringblæk",["water","poison"],.7,"sea",{float:.3,hide:["lambert1"]}),we("gople","Lysgople",["water","electric"],.95,"sea",{float:.5}),we("hvalhaj","Stjernehaj",["water","normal"],.8,"sea",{float:.4,len:2.2,hide:["particle","ocean"],anims:{idle:"Idle",walk:"Swimming"}}),we("mytehval","Mytehval",["water","psychic"],.9,"sea",{rare:!0,yaw:2*cn,float:.5,len:2.4}),we("kraken","Kraken",["water","dark"],1.4,"sea",{hide:["Water_Mat"],anims:{idle:"Idle",walk:"Movement",attack:["Spin","Splash"]}}),we("pingvin","Ispingvin",["ice","water"],.75,["mountain","shore"],{anims:{idle:"Idle",walk:"Walk",attack:["Bray"],hurt:"Shake",swim:"Penguin swim"}}),we("kajman","Sumpkajman",["water","normal"],.55,"swamp",{len:1.7,anims:{idle:"Idle",walk:"walking",attack:["Attack"]}}),we("alligator","Mudderalligator",["water","ground"],.6,"swamp",{yaw:cn,len:2}),we("baever","Bæverbas",["normal","ground"],.8,"swamp",{anims:{idle:"lobby_idle",run:"anim__run",win:"victory_start"}}),we("kapibara","Kapibara",["normal","water"],.7,"swamp",{anims:{idle:"Idle",run:"Run",hop:"Jump",win:"Victory"}}),we("krokobas","Krokobas",["water","dark"],1.3,"swamp",{anims:{idle:"AS_Idle",walk:"AS_WalkingFast_croco",run:"AS_Run_croco",attack:["AS_Roar"]}}),we("svampetrold","Svampetrold",["grass","poison"],.8,"swamp",{anims:{idle:"idle",walk:"walking"}}),we("plysfro","Plysfrø",["water","grass"],.55,"swamp",{}),we("sangfro","Sangfrø",["water"],.5,"swamp",{len:1}),we("kaempeodder","Kæmpeodder",["water","fighting"],.9,"swamp",{len:2,anims:{idle:"Loco_Ground_Idle_Normal",walk:"Move_Normal_Slow",run:"Move_Normal_Fast",attack:["Combat_Atk_Hit"],swim:"Swim_Move_Normal"}}),we("guldkoi","Guldkoi",["water"],.5,"swamp",{float:.4,len:1.1,anims:{idle:"Fish_Swim",hop:"Fish_Jumping"}}),we("junglabe","Junglabe",["fighting","grass"],1,"swamp",{can:["climb"]}),we("polarraev","Polarræv",["ice"],.6,"high",{yaw:-cn,len:1.2}),we("bjergbjoern","Bjergbjørn",["ground","fighting"],1.2,"high",{tint:{"*":6965808},can:["climb"],len:2,anims:{idle:"Stand_Idle_01",walk:"Walk",run:"Run",attack:["Attack_StandAngry_01_High"],hurt:"Hit_Stand_F01"}}),we("stormgalt","Stormgalt",["electric","normal"],.9,"high",{len:1.6,anims:{idle:"idle",walk:"walk",run:"run",attack:["Attack01","Attack02"],hurt:"hit"}}),we("sneehjort","Sneehjort",["ice","normal"],1.4,"high",{len:1.9,anims:{idle:"DEERALL_Idle",walk:"DEERALL_WalkForward",run:"DEERALL_Gallop",attack:["DEERALL_Charge"]}}),we("bjerggorilla","Bjerggorilla",["fighting","rock"],1.3,"high",{can:["climb"],anims:{idle:"gorillaidle",run:"gorillarun",attack:["gorillaattack","gorillastomp"]}}),we("stenbuk","Stenbuk",["rock","normal"],1.1,"high",{yaw:cn,can:["climb"],len:1.5}),we("mammut","Mammut",["ice","ground"],1.6,"high",{yaw:-cn,len:2.3,anims:{idle:"IDLE",walk:"Walk",run:"Run",win:"Bellow"}}),we("uldnaesehorn","Uldnæsehorn",["ice","rock"],1.2,"high",{len:2.2,anims:{idle:"Battle_Idle",walk:"Drone_Walk",attack:["Battle_Attk"],hurt:"HitReact_L",win:"Battle_Victory"}}),we("snelos","Snelos",["ice","dark"],.75,"high",{can:["climb"],len:1.3,anims:{idle:"idle",walk:"walk",run:"run",hop:"jump"}}),we("graaulv","Gråulv",["dark","ice"],.95,"high",{len:1.7,anims:{idle:"Howl",walk:"Intimidation Walk"}}),we("bjergtrold","Bjergtrold",["ice","fighting"],1.5,"high",{can:["climb"]}),we("roedpanda","Rødpanda",["fire","normal"],.6,"high",{yaw:cn,can:["climb"],len:1.1}),we("hippogrif","Hippogrif",["flying","fighting"],1.4,"high",{can:["fly"],len:2,anims:{idle:"idleBreathe",walk:"walk",run:"gallop",attack:["standBeakAttack"],win:"taunt"}}),we("guldgrif","Guldgrif",["flying","normal"],1.3,"high",{yaw:2*cn,can:["fly"],len:1.9}),we("roedhoeg","Rødhøg",["flying"],.8,"high",{float:.9,len:1.6}),we("krystalgolem","Krystalgolem",["rock","psychic"],1.6,"crystal",{can:["climb"]}),we("muldvarp","Muldvarp",["ground"],.6,"crystal",{anims:{idle:"Mole_Carried_Stance",run:"Mole_Run",hurt:"React_HitSmall",hop:"BouncyHop"}}),we("mantisfirben","Mantisfirben",["bug","psychic"],.8,"crystal",{can:["climb"],len:1.2}),we("rockgekko","Rockgekko",["electric","normal"],.8,"crystal",{hide:["polySurface12","pPlane3"],can:["climb"]}),we("blaaskink","Blåskink",["ground","poison"],.4,"crystal",{can:["climb"],len:1.2}),we("maanemoel","Månemøl",["bug","psychic"],.8,"crystal",{hide:["Cylinder.001"],float:.7,anims:{idle:"Idle",walk:"Walk",run:"Fly"}}),we("stjerneblaek","Stjerneblæk",["water","psychic"],.8,"crystal",{float:.3}),we("lavagolem","Lavagolem",["fire","rock"],1.6,"volcano",{can:["climb"],anims:{idle:"Idle",run:"Run",attack:["Strike","Skill"],hurt:"Break"}}),we("lavaaand","Lavaånd",["fire","rock"],1.3,"volcano",{}),we("ildaand","Ildånd",["fire"],1.3,"volcano",{slowIdle:!0}),we("karnotaur","Karnotaur",["dragon","ground"],1.2,"volcano",{yaw:2*cn,len:2}),we("ildfugl","Ildfugl",["fire","flying"],.9,"volcano",{can:["fly"],float:.9,len:1.8}),we("gnistfoenix","Gnistfønix",["fire","flying"],1,"volcano",{can:["fly"],float:.8,len:1.9}),we("flintgab","Flintgab",["fire","dragon"],1.5,"volcano",{can:["fly"],float:.5,len:2.4}),we("dromedar","Askedromedar",["ground","normal"],1.5,"volcano",{yaw:2*cn,len:1.9}),we("stjernedrage","Stjernedragen",["dragon","ice"],1.4,"boss2",{legend:!0,can:["fly"],float:.8,len:3}),we("axolotldrage","Axolotldrage",["water","dragon"],1,"sky",{can:["fly"],float:.6,len:1.8,anims:{idle:"Profile",walk:"down fly4"}}),we("riku","Riku",["dragon","normal"],1,"sky",{can:["fly"]}),we("kraglegrif","Kraglegrif",["flying","steel"],1.5,"sky",{can:["fly"],len:2.2}),we("boelgeherre","Bølgeherre",["water","psychic"],1.5,"sky",{anims:{idle:"fight_idle",run:"run",attack:["attack1","attack2"]}}),we("guldwyvern","Guldwyvern",["dragon","flying"],1.3,"sky",{can:["fly"],float:.8,len:2.6}),we("blaadrage","Blådrage",["dragon","water"],1.3,"sky",{can:["fly"],len:2.4}),we("panserbold","Panserbold",["steel","normal"],.7,"forest",{anims:{idle:"IdleRevamp",walk:"WalkRevamp",attack:["AttackRevamp"],hurt:"GetHitRevamp",hop:"JumpStartRevamp"}}),we("kamaeleon","Kamæleon",["grass","psychic"],.7,"meadow",{can:["climb"],len:1.3,anims:{idle:"Idle",win:"Celebration"}}),we("engshest","Engens hest",["normal"],1.5,"meadow",{len:2}),we("alpaka","Alpaka",["normal","ice"],1.3,"mountain",{anims:{idle:"idle"}}),we("vaskebjoern","Vaskebjørn",["dark","normal"],.6,"forest",{len:1.1})],Ze=_p.map((s,e)=>Object.assign(s,{i:e,line:s,stage:0,next:null,prev:null,grow:null,min:s.legend?35:s.rare?12:2,legend:!!s.legend,credit:xp[s.id]})),fu=Ze.filter(s=>s.starter).map(s=>s.i),Lo=[],Ca=new Map,Kb=new fp;function du(s){if(Lo[s.i])return Promise.resolve();if(Ca.has(s.i))return Ca.get(s.i);const e=(async()=>{const t=await Kb.loadAsync(new URL(`./figures/${s.id}.glb`,document.baseURI).href),n=t.scene,i=[];n.traverse(x=>{x.isMesh&&s.hide&&s.hide.some(m=>x.name.includes(m)||[].concat(x.material).some(p=>p.name.includes(m)))&&i.push(x)});for(const x of i)x.removeFromParent();s.tint&&n.traverse(x=>{if(x.isMesh)for(const m of[].concat(x.material))for(const p in s.tint)(p==="*"||m.name.includes(p))&&!m.map&&m.color.setHex(s.tint[p])}),n.traverse(x=>{if(x.isMesh&&(x.castShadow=!0,x.receiveShadow=!1,x.frustumCulled=!1,x.material))for(const m of[].concat(x.material))m.map&&(m.map.anisotropy=4)});const r=t.animations,o=x=>x&&(r.find(m=>m.name===x||m.name.endsWith("|"+x))||r.find(m=>m.name.toLowerCase().includes(x.toLowerCase()))),a={idle:o(s.anims.idle)||r[0]||null,walk:o(s.anims.walk),run:o(s.anims.run),hurt:o(s.anims.hurt),win:o(s.anims.win),hop:o(s.anims.hop),swim:o(s.anims.swim),attack:(s.anims.attack||[]).map(o).filter(Boolean)},l=new lu(n);a.idle&&(l.clipAction(a.idle).play(),l.update(.01)),n.updateMatrixWorld(!0);const c=new Tn().setFromObject(n,!0),h=c.getSize(new I),u=c.getCenter(new I),f=new qe().makeRotationY(s.yaw),d=h.clone().applyMatrix4(f);d.set(Math.abs(d.x),Math.abs(d.y),Math.abs(d.z));let g=s.h/h.y;s.len&&(g=Math.min(g,s.len/Math.max(d.x,d.z))),l.stopAllAction(),Lo[s.i]={scene:n,anim:a,k:g,center:u,minY:c.min.y}})().catch(t=>{console.warn("[figures] could not load",s.id,t),Ca.delete(s.i)});return Ca.set(s.i,e),e}const qb=s=>!!Lo[s];function vl(s){return Promise.all([...new Set(s)].filter(e=>Ze[e]).map(e=>du(Ze[e])))}async function $b(s,e){const t=[...new Set(s)];let n=0;await Promise.all(t.map(i=>du(Ze[i]).then(()=>e?.(++n,t.length))))}function xl(s,{shadow:e=!0}={}){const t=Ze[s],n=Lo[s],i=new Je,r=new Je,o=new Je;i.add(o),o.add(r);const a=mp(n.scene);r.rotation.y=t.yaw,r.add(a),a.scale.setScalar(n.k),a.position.set(-n.center.x*n.k,-n.minY*n.k,-n.center.z*n.k);const l=[];a.traverse(A=>{A.isMesh&&(A.castShadow=e,A.material=[].concat(A.material).map(U=>{const _=U.clone();return _.userData.baseEmissive=_.emissive?_.emissive.clone():null,l.push(_),_}),A.material.length===1&&(A.material=A.material[0]))});const c=new lu(a),h=A=>A&&c.clipAction(A),u=h(n.anim.idle),f=h(n.anim.walk),d=h(n.anim.run),g=h(n.anim.swim),x=[u,f,d,g].filter(Boolean);for(const A of x)A.play(),A.setEffectiveWeight(A===u?1:0);!u&&f&&f.setEffectiveWeight(1);let m=0,p=0,S=0,b=null;const M=t.h*(t.legend?1.1:1),P={root:i,form:t,height:M,float:!!t.float,hop(){p=1,n.anim.hop&&P.play(n.anim.hop)},attack(){S=1,n.anim.attack.length&&P.play(n.anim.attack[Math.floor(Math.random()*n.anim.attack.length)])},hurt(){n.anim.hurt&&P.play(n.anim.hurt)},win(){n.anim.win?P.play(n.anim.win):p=1},play(A){const U=c.clipAction(A);b&&b!==U&&b.fadeOut(.1),U.reset(),U.setLoop(Rd,1),U.clampWhenFinished=!1,U.setEffectiveWeight(1),U.fadeIn(.08),U.play(),b=U},flash(){m=1,P.hurt()},tick(A,U=0,_=0,v=!1){const y=v&&g?g:v?f||u:U>2.6&&d?d:U>.3&&(f||d)?f||d:u||f;for(const q of x){const Y=q===y?1:0;q.setEffectiveWeight(q.getEffectiveWeight()+(Y-q.getEffectiveWeight())*Math.min(1,A*8))}const C=x.length===1;c.timeScale=C?t.slowIdle&&U<.3?.35:1+Math.min(1.5,U*.4):1,b&&!b.isRunning()&&(b.fadeOut(.1),b=null),c.update(A),p=Math.max(0,p-A*2.5),S=Math.max(0,S-A*3);const F=Math.sin((1-p)*Math.PI)*(p>0?.3:0),H=t.float?t.float+Math.sin(_*2.2)*.07:0,K=C&&!t.float&&!v&&U>.3?Math.abs(Math.sin(_*12))*.06:0;if(r.rotation.x=v?Math.sin(_*5)*.08:0,o.position.y=F+H+K,o.position.z=S*(n.anim.attack.length?.1:.3),m>0){m=Math.max(0,m-A*3);const q=Math.floor(m*12)%2===1;for(const Y of l)Y.emissive&&(q?Y.emissive.setRGB(.8,.8,.8):Y.emissive.copy(Y.userData.baseEmissive))}},dispose(){c.stopAllAction();for(const A of l)A.dispose()}};return P.tick(.016,0,0),i.updateMatrixWorld(!0),P.top=new Tn().setFromObject(i,!0).max.y,P}const dc=new Map;let vn=null,Pa=null;function Yb(){if(Pa)return Pa;const s=document.createElement("canvas");s.width=s.height=192;const e=s.getContext("2d");return e.fillStyle="#23323a33",e.beginPath(),e.arc(96,96,70,0,7),e.fill(),e.fillStyle="#23323a88",e.font="bold 90px serif",e.textAlign="center",e.textBaseline="middle",e.fillText("?",96,102),Pa=s.toDataURL(),Pa}function Jb(s,e,t=!1){const n=e+(t?"s":"");if(dc.has(n))return dc.get(n);if(t||!Lo[e])return t||du(Ze[e]),Yb();if(!vn){const m=new ul;m.environment=new Za(s).fromScene(new vp,.04).texture,m.add(new iu(16777215,8956552,1.4));const p=new ml(16777215,2.2);p.position.set(2,4,4),m.add(p);const S=new Qt(28,1,.05,50),b=new qn(192,192,{samples:4});b.texture.colorSpace=Ct;const M=document.createElement("canvas");M.width=M.height=192,vn={scene:m,cam:S,rt:b,c:M,buf:new Uint8Array(36864*4)}}const i=xl(e,{shadow:!1});t&&i.root.traverse(m=>{m.isMesh&&(m.material=new mt({color:2306618}))}),i.root.rotation.y=.45,i.tick(.5,0,.5),vn.scene.add(i.root),i.root.updateMatrixWorld(!0);const r=new Tn().setFromObject(i.root,!0),o=r.getCenter(new I),a=r.getSize(new I),l=Math.max(a.x,a.y,a.z)*.6,c=l/Math.tan(Ms.degToRad(14));vn.cam.position.set(o.x+c*.1,o.y+c*.18,o.z+c),vn.cam.lookAt(o);const h=s.getRenderTarget(),u=s.getClearAlpha(),f=s.getClearColor(new be);s.setRenderTarget(vn.rt),s.setClearColor(0,0),s.clear(),s.render(vn.scene,vn.cam),s.readRenderTargetPixels(vn.rt,0,0,192,192,vn.buf),s.setRenderTarget(h),s.setClearColor(f,u),vn.scene.remove(i.root),i.dispose();const d=vn.c.getContext("2d"),g=d.createImageData(192,192);for(let m=0;m<192;m++)g.data.set(vn.buf.subarray((191-m)*192*4,(192-m)*192*4),m*192*4);d.putImageData(g,0,0);const x=vn.c.toDataURL("image/png");return dc.set(n,x),x}const Yi={normal:{da:"Normal",icon:"⚪",col:14209720,move:"Tackle"},fire:{da:"Ild",icon:"🔥",col:16738859,move:"Flammepust"},water:{da:"Vand",icon:"💧",col:3842303,move:"Vandsprøjt"},grass:{da:"Græs",icon:"🌿",col:3851354,move:"Bladstorm"},electric:{da:"Lyn",icon:"⚡",col:16765498,move:"Lynslag"},ice:{da:"Is",icon:"❄️",col:9430783,move:"Isstråle"},fighting:{da:"Kamp",icon:"🥊",col:13652026,move:"Karateslag"},poison:{da:"Gift",icon:"🧪",col:10902736,move:"Giftsprøjt"},ground:{da:"Jord",icon:"🟤",col:13148240,move:"Mudderkast"},flying:{da:"Flyve",icon:"🪶",col:11061503,move:"Vindpust"},psychic:{da:"Psykisk",icon:"🔮",col:16738984,move:"Tankekraft"},bug:{da:"Insekt",icon:"🐛",col:11059248,move:"Insektbid"},rock:{da:"Sten",icon:"🪨",col:12099688,move:"Stenkast"},ghost:{da:"Spøgelse",icon:"👻",col:9072848,move:"Skyggebold"},dragon:{da:"Drage",icon:"🐉",col:8016127,move:"Dragebrøl"},dark:{da:"Mørke",icon:"🌑",col:5917290,move:"Mørkebid"},steel:{da:"Stål",icon:"⚙️",col:12107992,move:"Stålhale"}},qf={normal:[[],["rock","steel","ghost"]],fire:[["grass","ice","bug","steel"],["fire","water","rock","dragon"]],water:[["fire","ground","rock"],["water","grass","dragon"]],electric:[["water","flying"],["electric","grass","dragon","ground"]],grass:[["water","ground","rock"],["fire","grass","poison","flying","bug","dragon","steel"]],ice:[["grass","ground","flying","dragon"],["fire","water","ice","steel"]],fighting:[["normal","ice","rock","dark","steel"],["poison","flying","psychic","bug","ghost"]],poison:[["grass"],["poison","ground","rock","ghost","steel"]],ground:[["fire","electric","poison","rock","steel"],["grass","bug","flying"]],flying:[["grass","fighting","bug"],["electric","rock","steel"]],psychic:[["fighting","poison"],["psychic","steel","dark"]],bug:[["grass","psychic","dark"],["fire","fighting","poison","flying","ghost","steel"]],rock:[["fire","ice","flying","bug"],["fighting","ground","steel"]],ghost:[["psychic","ghost"],["dark","steel","normal"]],dragon:[["dragon"],["steel"]],dark:[["psychic","ghost"],["fighting","dark","steel"]],steel:[["ice","rock"],["fire","water","electric","steel"]]};function Zb(s,e){let t=1;for(const n of e)qf[s][0].includes(n)?t*=2:qf[s][1].includes(n)&&(t*=.5);return Math.max(.25,Math.min(4,t))}const Ce=200,L={GRASS:0,TALL:1,WATER:2,TREE:3,PATH:4,SAND:5,HOUSE:6,DOOR:7,FLOWER:8,ROCK:9,GATE:10,PORTAL:11,HEAL:12,VOID:13,LAVA:14,BLOCK:15},uo=new Set([L.WATER,L.TREE,L.HOUSE,L.ROCK,L.DOOR,L.GATE,L.HEAL,L.VOID,L.LAVA,L.BLOCK]),$e={TOWN:0,MEADOW:1,FOREST:2,CAVE:3,SHORE:4,SEA:5,MOUNT:6,VOID:7,SWAMP:8,HIGH:9,CRYSTAL:10,VOLCANO:11,SKY:12},yp=["town","meadow","forest","cave","shore","sea","mountain","void","swamp","high","crystal","volcano","sky"];let yn=new Uint8Array(Ce*Ce),Do=new Uint8Array(Ce*Ce),$i=new Uint8Array(Ce*Ce),mr=[];const wn={x:40.5,z:66.6},Ft=(s,e)=>s<0||e<0||s>=Ce||e>=Ce?L.VOID:yn[(e|0)*Ce+(s|0)],Es=(s,e)=>s<0||e<0||s>=Ce||e>=Ce?$e.VOID:Do[(e|0)*Ce+(s|0)],Uo={cave:[84,0,124,45],sea:[84,45,124,94],swamp:[0,94,62,152],volcano:[62,94,124,162],high:[124,0,200,76],crystal:[124,76,172,124],sky:[124,124,200,200]},dt=(s,e)=>{for(const t in Uo){const[n,i,r,o]=Uo[t];if(s>=n&&s<r&&e>=i&&e<o)return t}return"land"},No=[{zone:"meadow",x:24.5,z:57.5,r:3.3,lo:2,hi:3},{zone:"meadow",x:56.5,z:57.5,r:3.3,lo:3,hi:4},{zone:"meadow",x:14.5,z:50.5,r:3.4,lo:4,hi:5},{zone:"meadow",x:66.5,z:50.5,r:3.4,lo:4,hi:6},{zone:"forest",x:48.5,z:37.5,r:3,lo:6,hi:7},{zone:"forest",x:22.5,z:37.5,r:3.2,lo:6,hi:8},{zone:"forest",x:14.5,z:26.5,r:3.2,lo:7,hi:9},{zone:"forest",x:41.5,z:22.5,r:3.2,lo:8,hi:10},{zone:"cave",x:96.5,z:30.5,r:2.6,lo:9,hi:10},{zone:"cave",x:108.5,z:26.5,r:2.4,lo:10,hi:11},{zone:"cave",x:100.5,z:12.5,r:2.9,lo:11,hi:12},{zone:"shore",x:60.5,z:38.5,r:2.4,lo:10,hi:12},{zone:"sea",x:96.5,z:79.5,r:3,lo:12,hi:13},{zone:"sea",x:110.5,z:72.5,r:3,lo:13,hi:14},{zone:"sea",x:100.5,z:62.5,r:3,lo:14,hi:15},{zone:"mountain",x:46.5,z:8.5,r:2.6,lo:15,hi:17},{zone:"mountain",x:32.5,z:9,r:2.6,lo:16,hi:18},{zone:"mountain",x:19.5,z:8,r:2.6,lo:17,hi:19},{zone:"swamp",x:14.5,z:138.5,r:3.4,lo:20,hi:21},{zone:"swamp",x:38.5,z:136.5,r:3.4,lo:20,hi:22},{zone:"swamp",x:50.5,z:120.5,r:3.4,lo:21,hi:23},{zone:"swamp",x:22.5,z:118.5,r:3.4,lo:22,hi:23},{zone:"swamp",x:12.5,z:104.5,r:3.2,lo:23,hi:24},{zone:"high",x:138.5,z:58.5,r:3.6,lo:24,hi:25},{zone:"high",x:158.5,z:64.5,r:3.6,lo:25,hi:26},{zone:"high",x:146.5,z:38.5,r:3.6,lo:25,hi:27},{zone:"high",x:168.5,z:46.5,r:3.6,lo:26,hi:28},{zone:"high",x:140.5,z:16.5,r:3.6,lo:27,hi:28},{zone:"high",x:160.5,z:12.5,r:3.4,lo:28,hi:29},{zone:"crystal",x:134.5,z:112.5,r:3,lo:29,hi:30},{zone:"crystal",x:150.5,z:104.5,r:3,lo:30,hi:31},{zone:"crystal",x:138.5,z:90.5,r:3,lo:31,hi:32},{zone:"crystal",x:158.5,z:86.5,r:2.8,lo:32,hi:33},{zone:"volcano",x:72.5,z:140.5,r:3.4,lo:33,hi:34},{zone:"volcano",x:98.5,z:148.5,r:3.4,lo:33,hi:35},{zone:"volcano",x:112.5,z:128.5,r:3.4,lo:34,hi:36},{zone:"volcano",x:74.5,z:112.5,r:3.4,lo:35,hi:36},{zone:"volcano",x:106.5,z:106.5,r:3,lo:36,hi:37},{zone:"sky",x:136.5,z:186.5,r:3.4,lo:37,hi:38},{zone:"sky",x:160.5,z:182.5,r:3.4,lo:38,hi:39},{zone:"sky",x:182.5,z:168.5,r:3.4,lo:39,hi:40},{zone:"sky",x:150.5,z:154.5,r:3.4,lo:40,hi:41},{zone:"sky",x:178.5,z:140.5,r:3.2,lo:41,hi:42}],Vo=(s,e)=>{const t=$i[(e|0)*Ce+(s|0)];return t?No[t-1]:null},Qb=(s,e)=>{const t=Vo(s,e);return t?t.lo+Math.floor(Math.random()*(t.hi-t.lo+1)):3},el=[{id:"swamp-in",x:12,z:62,to:[8.5,143.5],need:["swim"],kind:"swim"},{id:"swamp-back",x:8,z:146,to:[12.5,64.6],kind:"swim"},{id:"climb-up",x:40,z:96,to:[131.5,70.5],need:["climb"],kind:"climb"},{id:"climb-down",x:128,z:73,to:[40.5,99.6],kind:"climb"},{id:"crystal-in",x:186,z:6,to:[130.5,117.5],need:["light","climb"],kind:"cave"},{id:"crystal-back",x:129,z:120,to:[185.5,8.6],kind:"cave"},{id:"crystal-out",x:168,z:79,to:[190.5,56.5],kind:"cave"},{id:"nest-back",x:194,z:59,to:[166.5,80.6],kind:"cave"},{id:"fly-volcano",x:190,z:46,to:[70.5,154.5],need:["fly"],kind:"fly"},{id:"fly-nest",x:66,z:157,to:[190.5,49.5],need:["fly"],kind:"fly"},{id:"fly-sky",x:93,z:104,to:[133.5,192.5],need:["fly"],kind:"fly"},{id:"fly-down",x:129,z:195,to:[93.5,107.5],need:["fly"],kind:"fly"},{id:"rune-a",x:139,z:185,to:[156.5,184.5],need:["teleport"],kind:"teleport"},{id:"rune-b",x:158,z:186,to:[137.5,185.5],need:["teleport"],kind:"teleport"},{id:"cave-in",x:12,z:16,to:[92.5,39.2],need:"light"},{id:"cave-back",x:92,z:41,to:[12.5,17.9]},{id:"cave-out",x:116,z:2,to:[59.4,31.5]},{id:"cave-in2",x:57,z:31,to:[115.5,4.6],need:"light"},{id:"sea-up",x:92,z:88,to:[70.5,26.2]},{id:"sea-out",x:106,z:49,to:[60.5,9.5]}],eS=(s,e)=>el.find(t=>t.x===(s|0)&&t.z===(e|0)),fi={x:70.5,z:24.5,to:[92.5,85.8]},_l=[{id:"forest",form:"uglebjoern",lvl:7,x:40.5,z:48.7,name:"Skov-vogteren",crystal:"🌿",cname:"Skovkrystallen"},{id:"cave",form:"klippegolem",lvl:12,x:112.5,z:7.5,name:"Grotte-vogteren",crystal:"💎",cname:"Grottekrystallen"},{id:"sea",form:"kraken",lvl:15,x:106.5,z:55,name:"Hav-vogteren",crystal:"💧",cname:"Havkrystallen"},{id:"boss",form:"solfonix",lvl:20,x:8.5,z:6.5,name:"Solfønix",boss:!0},{id:"swamp",form:"krokobas",lvl:24,x:40.5,z:101.5,name:"Sump-vogteren",crystal:"🐊",cname:"Sumpstenen"},{id:"high",form:"mammut",lvl:29,x:176.5,z:22.5,name:"Højlands-vogteren",crystal:"❄️",cname:"Isstenen"},{id:"crystal",form:"krystalgolem",lvl:33,x:164.5,z:84.5,name:"Krystal-vogteren",crystal:"💠",cname:"Krystalstenen"},{id:"volcano",form:"flintgab",lvl:37,x:93.5,z:111.5,name:"Vulkan-vogteren",crystal:"🔥",cname:"Ildstenen"},{id:"sky",form:"kraglegrif",lvl:41,x:166.5,z:156.5,name:"Himmel-vogteren",crystal:"☁️",cname:"Skystenen"},{id:"boss2",form:"stjernedrage",lvl:45,x:178.5,z:133.5,name:"Stjernedragen",boss:!0}],_s={},ko=[{x:40.5,z:64.4,door:!0},{x:30.5,z:30.5},{x:60.5,z:34.5},{x:51.5,z:11.5},{x:94.5,z:36.5},{x:96.5,z:84.5},{x:14.5,z:146.5},{x:30.5,z:110.5},{x:134.5,z:66.5},{x:156.5,z:28.5},{x:132.5,z:114.5},{x:189.5,z:52.5},{x:74.5,z:150.5},{x:136.5,z:190.5},{x:147.5,z:151.5}],ii=[],Ia=(s,e)=>ii.find(t=>t.tiles.some(([n,i])=>n===(s|0)&&i===(e|0)));function Mp(s){for(const[e,t]of s.tiles)yn[t*Ce+e]=L.PATH}function tS(s){for(const[e,t]of _s[s]||[])yn[t*Ce+e]===L.GATE&&(yn[t*Ce+e]=L.PATH)}function tl(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function bh(s,e){const t=Math.ceil(Ce/e)+2,n=Array.from({length:t*t},s);return(i,r)=>{const o=Math.max(0,i)/e,a=Math.max(0,r)/e,l=Math.floor(o),c=Math.floor(a),h=o-l,u=a-c,f=p=>p*p*(3-2*p),d=n[c*t+l],g=n[c*t+l+1],x=n[(c+1)*t+l],m=n[(c+1)*t+l+1];return d+(g-d)*f(h)+(x-d)*f(u)+(d-g-x+m)*f(h)*f(u)}}function nS(s=4242){const e=tl(s),t=bh(e,4),n=bh(e,7),i=yn=new Uint8Array(Ce*Ce),r=Do=new Uint8Array(Ce*Ce);$i=new Uint8Array(Ce*Ce),i.fill(L.VOID),r.fill($e.VOID);const o=(_,v)=>_>=0&&v>=0&&_<Ce&&v<Ce,a=(_,v)=>v*Ce+_,l=(_,v,y,C)=>{o(_,v)&&(i[a(_,v)]=y,C!=null&&(r[a(_,v)]=C))},c=(_,v,y,C,F,H)=>{for(let K=v;K<=C;K++)for(let q=_;q<=y;q++)l(q,K,F,H)},h=(_,v,y,C,F=1.4)=>{for(let H=Math.floor(v-y-2);H<=v+y+2;H++)for(let K=Math.floor(_-y-2);K<=_+y+2;K++)o(K,H)&&Math.hypot(K+.5-_,H+.5-v)+(t(K,H)-.5)*F<y&&C(K,H)},u=(_,v,y)=>{for(let C=0;C+1<_.length;C++){const[F,H]=_[C],[K,q]=_[C+1],Y=Math.hypot(K-F,q-H);for(let me=0;me<=Y;me+=.3){const J=Y?me/Y:0;h(F+(K-F)*J,H+(q-H)*J,v,y,.3)}}},f=(_,v)=>i[a(_,v)];c(0,0,79,79,L.GRASS,$e.MEADOW);for(let _=0;_<80;_++)for(let v=0;v<80;v++)Math.min(v,_,79-v,79-_)<3&&l(v,_,L.TREE);for(let _=48;_<77;_++)for(let v=3;v<77;v++)n(v,_)>.66&&Math.hypot(v-40,_-68)>12&&l(v,_,L.TREE);for(let _=48;_<77;_++)for(let v=3;v<77;v++)f(v,_)===L.GRASS&&t(v,_)>.78&&l(v,_,L.FLOWER);h(12.5,62.5,2.6,(_,v)=>l(_,v,L.WATER)),h(68.5,66.5,2.3,(_,v)=>l(_,v,L.WATER)),h(40.5,68.5,10.5,(_,v)=>l(_,v,(_*3+v*5)%13===0?L.FLOWER:L.GRASS,$e.TOWN),.6),c(3,44,76,47,L.TREE,$e.FOREST),c(3,17,54,43,L.GRASS,$e.FOREST);for(let _=17;_<=43;_++)for(let v=3;v<=54;v++)t(v,_)*.6+n(v,_)*.4>.47&&l(v,_,L.TREE);c(3,14,57,16,L.ROCK,$e.FOREST),c(55,14,57,47,L.ROCK,$e.FOREST),c(3,3,53,13,L.GRASS,$e.MOUNT),c(54,3,57,13,L.ROCK,$e.MOUNT);for(let _=3;_<=13;_++)for(let v=3;v<=53;v++)t(v,_)>.74?l(v,_,L.ROCK):n(v,_)>.72&&l(v,_,L.TREE);c(58,3,76,43,L.SAND,$e.SHORE);for(let _=3;_<=43;_++)for(let v=58;v<=76;v++){const y=_>=26&&_<=42?64.5:61.5;v+(t(v,_)-.5)*3>y&&_>=5&&_<=41&&l(v,_,L.WATER)}c(58,27,62,42,L.GRASS,$e.SHORE);const d=(_,v=.9)=>u(_,v,(y,C)=>{const F=f(y,C);F!==L.WATER&&F!==L.HOUSE&&l(y,C,L.PATH)});d([[40.5,64],[40.5,43]]),d([[37,66],[27,61],[24.5,57.5],[17,53],[14.5,50.5]]),d([[44,66],[54,61],[56.5,57.5],[63,53],[66.5,50.5]]),d([[40.5,44],[40.5,40],[31,33],[22,28],[14,21],[12.5,17]]),d([[40.5,40],[48.5,37.5]]),d([[31,33],[22.5,37.5]]),d([[22,28],[14.5,26.5]]),d([[31,31],[41.5,22.5]]),d([[55,9.5],[46.5,8.5],[32.5,9],[19.5,8],[8.5,7]]),h(30.5,31,3.6,(_,v)=>l(_,v,L.GRASS)),h(8.5,7,3.2,(_,v)=>l(_,v,L.PATH,$e.MOUNT),.4);for(let _=39;_<=41;_++){for(let v=44;v<=47;v++)l(_,v,L.PATH);l(_,46,L.GATE)}_s.forest=[[39,46],[40,46],[41,46]];for(let _=54;_<=57;_++)for(let v=8;v<=10;v++)l(_,v,_===56?L.GATE:L.PATH);_s.arch=[[56,8],[56,9],[56,10]],l(12,16,L.PORTAL),l(12,15,L.ROCK),l(57,31,L.PORTAL),l(56,31,L.ROCK),mr=[{x:38,y:61,red:!0},{x:29,y:63},{x:47,y:63},{x:30,y:70},{x:47,y:70}];for(const _ of mr)for(let v=_.y;v<_.y+3;v++)for(let y=_.x;y<_.x+4;y++)l(y,v,L.HOUSE);l(40,63,L.DOOR);for(let _=64;_<=67;_++)for(let v=39;v<=41;v++)l(v,_,L.PATH);c(86,0,119,43,L.ROCK,$e.CAVE);const g=(_,v)=>{f(_,v)===L.ROCK&&l(_,v,L.GRASS)};u([[92.5,41],[92.5,35],[96,30],[102,29],[108,26],[106,19],[100,12],[106,8],[112,7.5],[116,4],[116.5,2.5]],1.7,g);for(const[_,v,y]of[[96,30.5,5],[108.5,26,4.5],[100.5,12.5,5.5],[112.5,7.5,3]])h(_,v,y,g);h(95.5,14,2,(_,v)=>l(_,v,L.WATER)),h(114.8,5.4,1.7,(_,v)=>{f(_,v)!==L.ROCK&&(l(_,v,L.GATE),(_s.cave||=[]).push([_,v]))},0),l(92,41,L.PORTAL),l(92,42,L.ROCK),l(116,2,L.PORTAL),l(116,1,L.ROCK),c(86,46,119,91,L.ROCK,$e.SEA),u([[92.5,88],[95,80],[102,76],[110.5,72.5],[106,66],[100.5,62.5],[104,58],[106.5,54],[106.5,50]],2,g);for(const[_,v,y]of[[96,79.5,6],[110.5,72.5,5.5],[100.5,62.5,5.5],[106.5,54.5,3.6]])h(_,v,y,g);h(106.5,51.5,1.7,(_,v)=>{f(_,v)!==L.ROCK&&(l(_,v,L.GATE),(_s.sea||=[]).push([_,v]))},0),l(92,88,L.PORTAL),l(92,89,L.ROCK),l(106,49,L.PORTAL),l(106,48,L.ROCK),l(93,87,L.GRASS);const x=(_,v=.9,y=L.PATH)=>u(_,v,(C,F)=>{const H=f(C,F);H!==L.PORTAL&&H!==L.GATE&&H!==L.HEAL&&l(C,F,y)}),m=(_,v,y,C)=>h(v,y,C,(F,H)=>{const K=f(F,H);K!==L.ROCK&&K!==L.TREE&&K!==L.VOID&&K!==L.WATER&&K!==L.LAVA&&(l(F,H,L.GATE),(_s[_]||=[]).push([F,H]))},0);c(0,94,61,151,L.TREE,$e.SWAMP),c(3,98,58,148,L.GRASS,$e.SWAMP);for(let _=98;_<=148;_++)for(let v=3;v<=58;v++)n(v,_)>.6?l(v,_,L.WATER):t(v,_)>.66&&l(v,_,L.TREE);c(3,94,58,97,L.ROCK,$e.SWAMP),x([[8.5,145],[14.5,138.5],[38.5,136.5],[50.5,120.5],[22.5,118.5],[12.5,104.5],[30.5,110.5],[40.5,103],[40.5,97.5]],1),h(40.5,101.5,2.2,(_,v)=>l(_,v,L.GRASS),.4),m("swamp",40.5,99.5,1.6),l(40,96,L.PORTAL),l(40,95,L.ROCK),l(8,146,L.PORTAL),l(8,147,L.TREE),l(12,62,L.PORTAL),c(124,0,199,75,L.TREE,$e.HIGH),c(127,3,196,72,L.GRASS,$e.HIGH);for(let _=3;_<=72;_++)for(let v=127;v<=196;v++)t(v,_)>.76?l(v,_,L.ROCK):n(v,_)>.68&&l(v,_,L.TREE);h(150.5,50.5,5.5,(_,v)=>l(_,v,L.WATER)),h(176.5,64.5,3.5,(_,v)=>l(_,v,L.WATER)),c(124,73,199,75,L.ROCK,$e.HIGH),c(179,3,196,20,L.ROCK,$e.HIGH),h(187.5,10.5,4.2,(_,v)=>l(_,v,L.GRASS),.5),c(182,38,197,64,L.ROCK,$e.HIGH),h(190.5,51.5,6.5,(_,v)=>l(_,v,L.GRASS),.6),x([[131.5,70.5],[138.5,58.5],[158.5,64.5],[146.5,38.5],[168.5,46.5],[156.5,28.5],[140.5,16.5],[160.5,12.5],[176.5,22.5],[184.5,13.5],[186.5,8]],1),m("high",180.5,19.5,1.5),x([[190.5,56.5],[190.5,47.5]],.9),x([[190.5,56.5],[193.5,59]],.8),l(128,73,L.PORTAL),l(128,74,L.ROCK),x([[128.5,72],[131.5,70.5]],.8),l(186,6,L.PORTAL),l(186,5,L.ROCK),l(194,59,L.PORTAL),l(194,60,L.ROCK),l(190,46,L.PORTAL),c(124,76,171,123,L.ROCK,$e.CRYSTAL);const p=(_,v)=>{f(_,v)===L.ROCK&&l(_,v,L.GRASS)};u([[130.5,119],[134.5,112.5],[150.5,104.5],[138.5,90.5],[158.5,86.5],[164.5,84.5],[167.5,80.5],[168.5,79.5]],1.7,p);for(const[_,v,y]of[[134.5,112.5,5],[150.5,104.5,5],[138.5,90.5,5],[158.5,86.5,4],[164.5,84.5,2.8]])h(_,v,y,p);h(144.5,98.5,2.2,(_,v)=>l(_,v,L.WATER)),m("crystal",166.8,81.6,1.5),l(129,120,L.PORTAL),l(129,121,L.ROCK),l(168,79,L.PORTAL),l(168,78,L.ROCK),c(62,94,123,161,L.ROCK,$e.VOLCANO),c(65,97,120,158,L.GRASS,$e.VOLCANO);for(let _=97;_<=158;_++)for(let v=65;v<=120;v++)t(v,_)>.77?l(v,_,L.ROCK):n(v,_)>.73&&l(v,_,L.LAVA);u([[66,128],[80,126],[88,134],[104,138],[119,142]],1.1,(_,v)=>l(_,v,L.LAVA)),h(93.5,125.5,8,(_,v)=>l(_,v,L.ROCK),1),h(93.5,125.5,3.6,(_,v)=>l(_,v,L.LAVA),.6),c(87,99,100,107,L.ROCK,$e.VOLCANO),x([[70.5,154.5],[72.5,140.5],[98.5,148.5],[112.5,128.5],[106.5,106.5],[93.5,112.5]],1),x([[72.5,140.5],[74.5,112.5],[93.5,112.5]],1),x([[93.5,112.5],[93.5,105]],.9),m("volcano",93.5,108.5,1.5),l(93,104,L.PORTAL),l(66,157,L.PORTAL),x([[66.5,156.5],[70.5,154.5]],.8),c(124,124,199,199,L.VOID,$e.SKY);for(const[_,v,y]of[[135,190,6.5],[160.5,182.5,6],[182.5,168.5,6],[150.5,154.5,6],[166.5,157.5,3.4],[179,137,7.5]])h(_,v,y,(C,F)=>l(C,F,(C*7+F*3)%11===0?L.FLOWER:L.GRASS,$e.SKY),1.6);x([[133.5,192.5],[136.5,186.5],[160.5,182.5],[182.5,168.5],[150.5,154.5],[166.5,157.5],[179,140]],1),m("sky",170.5,151.5,1.4),l(129,195,L.PORTAL),x([[130,194.5],[133.5,192.5]],.8),No.forEach((_,v)=>h(_.x,_.z,_.r,(y,C)=>{const F=f(y,C);(F===L.GRASS||F===L.FLOWER||F===L.PATH||F===L.TREE||F===L.SAND)&&(l(y,C,L.TALL),$i[a(y,C)]=v+1)},1.2));for(const _ of ko)_.door||l(_.x|0,_.z|0,L.HEAL);ii.length=0;const S=_=>_===L.ROCK||_===L.TREE||_===L.VOID||_===L.GATE||_===L.PORTAL||_===L.HEAL||_===L.HOUSE||_===L.DOOR,b=(_,v,y,C={})=>{y=y.filter(([F,H])=>o(F,H)&&!S(f(F,H)));for(const[F,H]of y)l(F,H,v==="freeze"?L.LAVA:L.BLOCK),$i[a(F,H)]=0;ii.push({id:_,kind:v,tiles:y,x:y.reduce((F,H)=>F+H[0],0)/y.length+.5,z:y.reduce((F,H)=>F+H[1],0)/y.length+.5,...C})};{const _=[];for(let v=96;v<108;v++)for(let y=34;y<48;y++){const C=Math.hypot(y+.5-40.5,v+.5-101.5);C>2&&C<3.3&&_.push([y,v])}b("thorns","cut",_,{route:"swamp"})}{const _=[];for(let v=33;v<=34;v++)for(let y=127;y<=196;y++){const C=f(y,v);C===L.PATH?_.push([y,v]):C!==L.TREE&&l(y,v,L.ROCK)}b("ridge","smash",_,{route:"high"})}{const _=[];for(const v of[160,161])for(let y=80;y<96;y++){const C=f(v,y);C!==L.ROCK&&C!==L.GATE&&_.push([v,y])}b("tunnel","dig",_,{route:"crystal"})}{const _=[];for(let v=129;v<=130;v++)for(let y=63;y<=121;y++){const C=f(y,v);C!==L.ROCK&&(C===L.PATH&&y<80?_.push([y,v]):l(y,v,L.LAVA),$i[a(y,v)]=0)}b("lavariver","freeze",_,{route:"volcano"})}{for(let v=181;v<=188;v++)for(let y=140;y<=157;y++)f(y,v)===L.PATH&&l(y,v,L.VOID);l(139,185,L.PORTAL),l(158,186,L.PORTAL),$i[a(139,185)]=$i[a(158,186)]=0;const _=[];for(let v=166;v<=171;v++)f(v,177)===L.PATH&&_.push([v,177]);b("cloudbank","blow",_,{route:"sky"})}{const _=tl(777),v=[],y=(F,H,K)=>[...el,...ko,..._l].some(q=>Math.hypot(q.x-F,q.z-H)<K)||mr.some(q=>Math.hypot(q.x+2-F,q.y+1.5-H)<6)||v.some(([q,Y])=>Math.hypot(q-F,Y-H)<9)||ii.some(q=>Math.hypot(q.x-F,q.z-H)<6),C={land:[6,["cut","smash","blow","cut","smash","dig"]],cave:[2,["smash","dig"]],swamp:[3,["cut","dig","blow"]],high:[3,["smash","blow","dig"]],crystal:[2,["dig","smash"]],volcano:[3,["smash","blow","dig"]],sky:[2,["blow","cut"]]};for(const[F,[H,K]]of Object.entries(C)){const[q,Y,me,J]=F==="land"?[2,2,78,78]:Uo[F];let Se=0;for(let Ae=0;Ae<4e3&&Se<H;Ae++){const Le=q+2+Math.floor(_()*(me-q-4)),Fe=Y+2+Math.floor(_()*(J-Y-4)),Ye=f(Le,Fe);if(Ye!==L.GRASS&&Ye!==L.FLOWER&&Ye!==L.SAND)continue;let rt=!1,nt=!0;for(let re=-1;re<=1;re++)for(let ue=-1;ue<=1;ue++){const De=f(Le+ue,Fe+re);De===L.PATH&&(ue===0||re===0)&&(rt=!0),(uo.has(De)||De===L.PORTAL||De===L.GATE)&&(nt=!1)}!rt||!nt||y(Le+.5,Fe+.5,5)||(v.push([Le+.5,Fe+.5]),b(`skat-${F}-${Se}`,K[Se%K.length],[[Le,Fe]],{treasure:3+Se%3}),Se++)}}}const M=new Set(ii.flatMap(_=>_.tiles.map(([v,y])=>a(v,y)))),P=new Uint8Array(Ce*Ce),A=(_,v)=>!uo.has(_)||_===L.GATE||_===L.WATER||M.has(v),U=[[40,66],[59,31],[50,9],[93,38],[95,84],[8,143],[131,70],[190,56],[130,117],[70,154],[133,192],[160,182]].map(([_,v])=>a(_,v));for(const _ of U)P[_]=1;for(;U.length;){const _=U.pop(),v=_%Ce;for(const y of[_-1,_+1,_-Ce,_+Ce]){const C=y%Ce;y<0||y>=Ce*Ce||Math.abs(C-v)>1||P[y]||!A(i[y],y)||(P[y]=1,U.push(y))}}for(let _=0;_<Ce*Ce;_++)if(!P[_]&&!uo.has(i[_])&&i[_]!==L.PORTAL){const v=dt(_%Ce,_/Ce|0);i[_]=v==="sky"?L.VOID:v==="land"||v==="swamp"?L.TREE:L.ROCK,$i[_]=0}}const fn={},gr={},iS={naturepack:["TreeR1","TreeR2","TreeR3","TreeRC1","TreeRC2","TreeRC3","TreeRF","Clump2","Clump3","Clump5","Clump6","Clump7","Clump8","FlowerB1","FlowerR1","FlowerY1","FlowerC1","MushrumY1","MushrumC1","Crystel1","Crystel2","Log","RB1","RB2","RG1","RG2"],treepack:["SM_FreeTree_01","SM_FreeTree_02","SM_FreeTree_06"],rocks:["Rock_01","Rock_02","Rock_03","Rock_04"],cottage:null,stylcottage:null};function $f(s){s.updateMatrixWorld(!0);const e=new Tn().setFromObject(s),t=e.getSize(new I),n=e.getCenter(new I),i=1/t.y,r=new qe().makeScale(i,i,i).multiply(new qe().makeTranslation(-n.x,-e.min.y,-n.z)),o=[];return s.traverse(a=>{a.isMesh&&o.push({geo:a.geometry.clone().applyMatrix4(new qe().multiplyMatrices(r,a.matrixWorld)),mat:a.material})}),{parts:o,w:t.x*i,d:t.z*i}}async function sS(){const s=new fp,e=t=>new URL(`./env/${t}.glb`,document.baseURI).href;await Promise.all(Object.entries(iS).map(async([t,n])=>{try{const i=await s.loadAsync(e(t));if(i.scene.traverse(o=>{if(o.isMesh)for(const a of[].concat(o.material))!a.map&&a.emissiveMap&&(a.map=a.emissiveMap,a.map.colorSpace=Ct,a.emissiveMap=null,a.emissive?.set(0)),a.metalness!==void 0&&(a.metalness=Math.min(a.metalness,.1),a.roughness=Math.max(a.roughness,.7)),a.needsUpdate=!0}),!n){fn[t]=$f(i.scene);return}let r=i.scene.children;for(;r.length===1&&r[0].children.length&&!r[0].isMesh;)r=r[0].children;for(const o of r)n.includes(o.name)&&(fn[t+":"+o.name]=$f(o))}catch(i){console.warn("[world] could not load",t,i)}}));try{const t=await s.loadAsync(e("hero"));gr.scene=t.scene,gr.anims=t.animations}catch(t){console.warn("[world] no hero model",t)}}const li=new qe,ir=new Kn,sr=new I,rr=new I,Ga=new $n;function La(s,e,t,{sway:n=0,shadow:i=!0,cut:r=0,tint:o=null,lift:a=null}={}){const l=fn[e];if(!l||!t.length)return!1;for(const c of l.parts){let h=n||r?bp(Array.isArray(c.mat)?c.mat[0].clone():c.mat.clone(),n,1,r):c.mat;o&&(h===c.mat&&(h=[].concat(c.mat)[0].clone()),h.color=h.color.clone().multiply(new be(o))),a&&h.emissive&&(h===c.mat&&(h=[].concat(c.mat)[0].clone()),h.emissive=new be(a));const u=new ys(c.geo,h,t.length);t.forEach(([f,d,g,x,m],p)=>{li.compose(sr.set(f,d,g),ir.setFromEuler(Ga.set(0,m,0)),rr.setScalar(x)),u.setMatrixAt(p,li)}),u.castShadow=i,u.receiveShadow=!0,s.add(u)}return!0}const fo=s=>new ts(s),rS=(()=>{const s=new Cs(new Uint8Array([120,200,255]),3,1,Lr);return s.minFilter=s.magFilter=Yt,s.needsUpdate=!0,s})(),Dt=(s,e={})=>new tu({color:s,gradientMap:rS,...e}),di={time:{value:0},player:{value:new I},cut:{value:1}};function bp(s,e=1,t=1,n=0){return s.onBeforeCompile=i=>{i.uniforms.uTime=di.time,i.uniforms.uPlayer=di.player,i.uniforms.uCut=di.cut,n&&(i.fragmentShader=`uniform vec3 uPlayer; uniform float uCut; varying vec3 vCutP;
`+i.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      { vec2 dd = vCutP.xz - uPlayer.xz; float k = uCut * step(-0.6, dd.y) * (1.0 - smoothstep(3.5, 6.0, dd.y)) * (1.0 - smoothstep(1.6, 2.6, abs(dd.x))) * step(${n.toFixed(2)}, vCutP.y);
        vec2 q = mod(gl_FragCoord.xy, 3.0); if (k > 0.5 && !(q.x < 1.0 && q.y < 1.0)) discard; }`)),i.vertexShader=`uniform float uTime; uniform vec3 uPlayer;
`+(n?`varying vec3 vCutP;
`:"")+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 wp = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
      #else
        vec3 wp = vec3(0.0);
      #endif
      float h = max(0.0, position.y) * ${e.toFixed(2)}; float tt = uTime * ${t.toFixed(2)};
      transformed.x += sin(tt * 1.8 + wp.x * 0.7 + wp.z * 0.4 + position.y * 1.5) * 0.12 * h;
      transformed.z += cos(tt * 1.3 + wp.z * 0.6 + position.y) * 0.06 * h;
      vec2 away = wp.xz - uPlayer.xz; float d = length(away);
      if (d < 0.9 && d > 0.001) { vec2 push = normalize(away) * (0.9 - d) * 0.9 * h; transformed.x += push.x; transformed.z += push.y; transformed.y -= (0.9 - d) * 0.25 * h; }`).replace("#include <project_vertex>",n?`#include <project_vertex>
      #ifdef USE_INSTANCING
        vCutP = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
      #else
        vCutP = (modelMatrix * vec4(transformed, 1.0)).xyz;
      #endif`:"#include <project_vertex>")},s.customProgramCacheKey=()=>"sway"+e+"_"+t+"_"+n,s}const Sh={land:{tex:["grass","forest","path","sand","cliff","moss"],wall:2.4,rect:[0,0,84,94]},cave:{tex:["cave","moss","cliff"],wall:2.6},sea:{tex:["seabed","cliff","sand"],wall:1.8,caustic:1},swamp:{tex:["mud","moss","forest","path","cliff"],wall:2.8},high:{tex:["snow","cliff","path","moss"],wall:3.2},crystal:{tex:["cave","marble","moss"],wall:2.9},volcano:{tex:["ashrock","darkrock","path","cliff"],wall:3},sky:{tex:["grass","marble","moss","cliff"],wall:1}};function oS(s,e,t){const n=e===L.PATH||e===L.DOOR||e===L.GATE||e===L.PORTAL||e===L.BLOCK;switch(s){case"cave":return e===L.TALL?"moss":"cave";case"sea":return e===L.ROCK?"cliff":"seabed";case"swamp":return e===L.ROCK?"cliff":n?"path":e===L.TALL?"moss":e===L.TREE?"forest":"mud";case"high":return e===L.ROCK?"cliff":n?"path":e===L.TALL?"moss":"snow";case"crystal":return n?"marble":e===L.TALL?"moss":"cave";case"volcano":return e===L.ROCK||e===L.LAVA?"darkrock":n?"path":"ashrock";case"sky":return e===L.VOID?"cliff":n?"marble":e===L.TALL?"moss":"grass";default:return e===L.ROCK?"cliff":e===L.TREE?t===$e.MOUNT?"moss":"forest":n?"path":e===L.SAND||e===L.WATER?"sand":t===$e.MOUNT?"moss":t===$e.FOREST&&e!==L.TALL?"forest":"grass"}}const aS={},lS=s=>aS[s]||=(()=>{const e=new nu().load(new URL(`./tex/${s}_diff.jpg`,document.baseURI).href);return e.wrapS=e.wrapT=is,e.colorSpace=Ct,e.anisotropy=4,e})();function cS(s,[e,t,n,i]){const r=Sh[s],o=r.tex,a=n-e,l=i-t,c=new Uint8Array(a*l*4),h=new Uint8Array(a*l*4);for(let m=t;m<i;m++)for(let p=e;p<n;p++){const S=Math.max(0,o.indexOf(oS(s,yn[m*Ce+p],Do[m*Ce+p]))),b=((m-t)*a+(p-e))*4;(S<4?c:h)[b+S%4]=255}const u=m=>{const p=new Cs(m,a,l,Mn);return p.magFilter=p.minFilter=dn,p.needsUpdate=!0,p},f=u(c),d=u(h),g=o.map(lS),x=fo({vertexColors:!0});return x.onBeforeCompile=m=>{m.uniforms.uS1={value:f},m.uniforms.uS2={value:d},m.uniforms.uTime=di.time,g.forEach((b,M)=>{m.uniforms["uT"+M]={value:b}});const p=(b,M)=>`texture2D(uT${b}, ${M}).rgb * ${b<4?"sa":"sb"}.${"rgba"[b%4]}`,S=o.map((b,M)=>p(M,b==="cliff"||b==="cave"||b==="darkrock"?"tr":"tu")).join(" + ");m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWp = (modelMatrix * vec4(position, 1.0)).xyz;`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vWp; uniform sampler2D uS1, uS2; ${g.map((b,M)=>`uniform sampler2D uT${M};`).join(" ")} uniform float uTime;`).replace("#include <map_fragment>",`
      vec2 suv = (vWp.xz - vec2(${e}.0, ${t}.0)) / vec2(${a}.0, ${l}.0); vec4 sa = texture2D(uS1, suv), sb = texture2D(uS2, suv);
      vec2 tu = vWp.xz * 0.32 + vec2(vWp.y * 0.25, 0.0); vec2 tr = vec2(vWp.x * 0.3 + vWp.z * 0.1, vWp.y * 0.45 + vWp.z * 0.12);
      vec3 tc = ${S};
      tc /= max(0.001, dot(sa, vec4(1.0)) + dot(sb, vec4(1.0)));
      ${r.caustic?`{ vec2 q = vWp.xz * 1.3; float c = 0.0;
        for (int i = 0; i < 3; i++) { q = vec2(q.x + sin(q.y * 1.7 + uTime * 0.9), q.y + cos(q.x * 1.5 - uTime * 0.7)); c += abs(sin(q.x + q.y)); }
        tc += vec3(0.25, 0.5, 0.55) * pow(max(0.0, 1.0 - c / 3.0 * 1.2), 4.0) * 1.6 * smoothstep(1.2, 0.0, vWp.y); }`:""}
      diffuseColor.rgb *= tc * 1.7;`)},x.customProgramCacheKey=()=>"ground_"+s,x}let Da=null;function pc(){if(Da)return Da;const s=document.createElement("canvas");s.width=s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"#fff"),t.addColorStop(1,"#fff0"),e.fillStyle=t,e.fillRect(0,0,64,64),Da=new Sr(s),Da}function Yf(s,e,t){const n=document.createElement("canvas");n.width=256,n.height=128;const i=n.getContext("2d");i.fillStyle="#c8955a",i.fillRect(0,0,256,128),i.strokeStyle="#6a4424",i.lineWidth=10,i.strokeRect(5,5,246,118),i.fillStyle="#2a1a0a",i.font="bold 52px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s,128,66);const r=new Sr(n);r.colorSpace=Ct;const o=new Je,a=Dt(9067060),l=new de(new wt(.12,1.3,.12),a);l.position.y=.65;const c=new de(new wt(1.3,.65,.08),[a,a,a,a,fo({map:r}),a]);return c.position.y=1.25,o.add(l,c),o.position.set(e,0,t),o.traverse(h=>{h.castShadow=!0,h.receiveShadow=!0}),o}const hS={land:(s,e)=>s===L.TALL?10145904:e===$e.MOUNT?14212304:s===L.ROCK?14209216:(s===L.GRASS||s===L.FLOWER)&&e!==$e.FOREST?11067504:16777215,cave:s=>s===L.TALL?9427144:10133688,sea:s=>s===L.ROCK?8042696:14216432,swamp:s=>s===L.TALL?8038488:s===L.ROCK?10132104:s===L.PATH?13154456:11055240,high:s=>s===L.TALL?13164776:s===L.ROCK?14213354:16777215,crystal:s=>s===L.TALL?11049200:10526920,volcano:s=>s===L.TALL?14721136:s===L.ROCK||s===L.LAVA?9073776:12101792,sky:s=>s===L.VOID?12107984:s===L.PATH||s===L.GATE||s===L.PORTAL?16777215:12120232};function uS(s){const e=tl(99),t=new Je;s.add(t);const n={};for(const T of["land",...Object.keys(Uo)])n[T]=new Je,s.add(n[T]);const{land:i,cave:r,sea:o}=n,a={groups:n,gates:{},heals:[],guards:{},anim:[]},l=(T,D)=>Sh[dt(T,D)].wall,c=bh(tl(5),3),h=(T,D)=>{let z=0,k=0,B=0,$=0;for(const[G,ye]of[[0,0],[-1,0],[0,-1],[-1,-1]]){const O=Ft(T+G,D+ye);O===L.WATER&&z++,O===L.ROCK&&k++,O===L.VOID&&B++,O===L.LAVA&&$++}const X=dt(Math.min(Ce-1,T),Math.min(Ce-1,D));return X==="sky"&&B?B===4?-32:B>=2?-6-B*3:-1.5:(B&&(k+=B),k===4?l(T,D)*(.8+c(T,D)*.5):k===3?l(T,D)*.45:$?$===4?-.45:-.2:z===4?-.55:z?-.2:Math.sin(T*.7)*Math.cos(D*.5)*.04+Math.sin(T*.23+D*.31)*.08+(X==="high"?Math.sin(T*.11)*Math.cos(D*.13)*.25:0))},u={land:Sh.land.rect,...Uo};for(const[T,D]of Object.entries(u)){const[z,k,B,$]=D,X=2,G=B-z,ye=$-k,O=G*X+1,oe=new $t(G,ye,G*X,ye*X);oe.rotateX(-Math.PI/2),oe.translate(z+G/2,0,k+ye/2);const fe=oe.attributes.position,ge=new Float32Array(fe.count*3),se=new be,Q=hS[T];for(let ze=0;ze<fe.count;ze++){const it=fe.getX(ze),at=fe.getZ(ze);fe.setY(ze,h(Math.round(it),Math.round(at))),se.setHex(Q(Ft(it-.001,at-.001),Es(it-.001,at-.001))).lerp(new be(Q(Ft(it+.001,at+.001),Es(it+.001,at+.001))),.5),se.offsetHSL(0,0,(e()-.5)*.06),ge[ze*3]=se.r,ge[ze*3+1]=se.g,ge[ze*3+2]=se.b}for(let ze=0;ze<ye*X+1;ze++)for(let it=0;it<O;it++)if(it%X||ze%X){const at=ze*O+it,on=Math.floor(it/X)*X,tn=Math.floor(ze/X)*X,os=(it-on)/X,Un=(ze-tn)/X,Hi=(Xo,jo)=>fe.getY(Math.min(ye*X,jo)*O+Math.min(O-1,Xo));fe.setY(at,Hi(on,tn)*(1-os)*(1-Un)+Hi(on+X,tn)*os*(1-Un)+Hi(on,tn+X)*(1-os)*Un+Hi(on+X,tn+X)*os*Un)}oe.setAttribute("color",new zt(ge,3)),oe.computeVertexNormals();const Re=new de(oe,cS(T,D));Re.receiveShadow=!0,Re.castShadow=T!=="sky",n[T].add(Re)}const f=new de(new $t(240,240).rotateX(-Math.PI/2),fo({color:5214272}));f.position.set(40,-.7,40),i.add(f);const d=new de(new $t(420,420).rotateX(-Math.PI/2),new Ht({uniforms:{uTime:di.time},fog:!1,transparent:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uTime; varying vec3 vW;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      void main(){ vec2 p = vW.xz * 0.035 + vec2(uTime * 0.01, uTime * 0.004); float c = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { c += n(p) * a; p *= 2.1; a *= 0.5; }
        vec3 col = mix(vec3(0.62, 0.72, 0.9), vec3(1.0, 0.97, 0.95), smoothstep(0.35, 0.75, c));
        col = mix(col, vec3(1.0, 0.85, 0.9), smoothstep(0.7, 0.95, c) * 0.25);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));d.position.set(162,-22,162),n.sky.add(d);const g=new Uint8Array(Ce*Ce*4),x=new Uint8Array(Ce*Ce*4),m={cave:255,crystal:255,swamp:150,high:70};for(let T=0;T<Ce;T++)for(let D=0;D<Ce;D++){const z=(T*Ce+D)*4,k=Ft(D,T),B=k===L.WATER&&dt(D,T)!=="sea";let $=0;if(B)for(const[X,G]of[[1,0],[-1,0],[0,1],[0,-1]])Ft(D+X,T+G)!==L.WATER&&($=255);g[z]=B?255:0,g[z+1]=$,g[z+2]=B&&m[dt(D,T)]||0,g[z+3]=255,x[z]=k===L.LAVA?255:0,x[z+3]=255}const p=T=>{const D=new Cs(T,Ce,Ce,Mn);return D.magFilter=D.minFilter=dn,D.needsUpdate=!0,D},S=p(g),b=new de(new $t(Ce,Ce,1,1).rotateX(-Math.PI/2),new Ht({transparent:!0,depthWrite:!1,fog:!0,uniforms:br.merge([Pe.fog,{uMask:{value:S},uSkyTop:{value:new be(4165600)},uSkyHor:{value:new be(12575999)},uSunDir:{value:new I(.3,.8,.5).normalize()},uNight:{value:0},uLamp:{value:new pt}}]),vertexShader:`#include <fog_pars_vertex>
varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition; 
#include <fog_vertex>
}`,fragmentShader:`uniform float uTime, uNight; uniform sampler2D uMask; uniform vec3 uSkyTop, uSkyHor, uSunDir; uniform vec4 uLamp; varying vec2 vUv; varying vec3 vW;
      #include <fog_pars_fragment>
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y); }
      float rip(vec2 q){ return vnoise(q * 1.1 + vec2(uTime * 0.35, uTime * 0.2)) + vnoise(q * 2.7 - vec2(uTime * 0.5, -uTime * 0.3)) * 0.5 + vnoise(q * 6.0 + uTime * 0.8) * 0.2; }
      void main(){
        vec2 uv = vec2(vUv.x, 1.0 - vUv.y);
        vec4 m = texture2D(uMask, uv);
        if (m.r < 0.05) discard;
        float tone = m.b, calm = tone > 0.2 && tone < 0.5 ? 0.15 : 1.0;
        vec2 q = vW.xz; float e = 0.07;
        float r0 = rip(q), rx = rip(q + vec2(e, 0.0)), rz = rip(q + vec2(0.0, e));
        vec3 N = normalize(vec3((r0 - rx) * 1.6 * calm, 1.0, (r0 - rz) * 1.6 * calm));
        vec3 V = normalize(cameraPosition - vW), R = reflect(-V, N); R.y = abs(R.y);
        float fres = 0.18 + 0.82 * pow(1.0 - max(dot(N, V), 0.0), 3.0);
        vec3 sky = mix(uSkyHor, uSkyTop, pow(clamp(R.y, 0.0, 1.0), 0.6));
        vec3 deep = vec3(0.02, 0.2, 0.42), light = vec3(0.1, 0.46, 0.68);
        if (tone > 0.9) { deep = vec3(0.02, 0.09, 0.15); light = vec3(0.06, 0.34, 0.42); sky = vec3(0.05, 0.25, 0.3); }
        else if (tone > 0.5) { deep = vec3(0.07, 0.11, 0.05); light = vec3(0.17, 0.25, 0.1); }
        else if (tone > 0.2) { deep = vec3(0.5, 0.66, 0.8); light = vec3(0.82, 0.92, 1.0); fres *= 0.6; }
        deep = mix(deep, deep * vec3(0.35, 0.45, 0.9), uNight); light = mix(light, light * vec3(0.3, 0.4, 0.85), uNight);
        vec3 body = mix(deep, light, clamp(0.3 + (r0 - 0.7) * 0.6 + smoothstep(0.0, 0.8, m.g) * 0.35, 0.0, 1.0));
        vec3 c = mix(body, sky, clamp(fres, 0.0, 0.85));
        // the sun (by day) or the moon (by night) glittering on the ripples
        float sp = max(dot(R, uSunDir), 0.0);
        c += mix(vec3(1.0, 0.92, 0.75), vec3(0.75, 0.85, 1.0), uNight) * (pow(sp, 220.0) * 2.4 + pow(sp, 24.0) * 0.12) * calm * (1.0 - uNight * 0.4);
        // a warm lantern glow on the water near you at night
        float ld = distance(vW.xz, uLamp.xz); c += vec3(1.0, 0.62, 0.3) * uLamp.w * 0.22 / (1.0 + ld * ld * 0.35) * (0.6 + 0.4 * r0);
        float foam = smoothstep(0.25, 0.9, m.g) * smoothstep(0.35, 0.75, vnoise(q * 3.0 + uTime * 0.6) * 0.6 + 0.4 + sin(uTime * 2.0 + q.x * 2.0 + q.y * 1.5) * 0.15);
        c = mix(c, mix(vec3(1.0), vec3(0.6, 0.68, 0.85), uNight), foam * 0.75);
        gl_FragColor = vec4(c, mix(0.86, 1.0, max(foam, fres * 0.5)) * smoothstep(0.05, 0.4, m.r));
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`}));b.material.uniforms.uTime=di.time,b.position.set(Ce/2,-.12,Ce/2),b.renderOrder=1,t.add(b),a.water=b;const M=new de(new $t(62,68,1,1).rotateX(-Math.PI/2),new Ht({uniforms:{uMask:{value:p(x)},uTime:di.time},transparent:!0,depthWrite:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D uMask; uniform float uTime; varying vec3 vW;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      void main(){ float m = texture2D(uMask, vW.xz / ${Ce}.0).r; if (m < 0.1) discard;
        vec2 p = vW.xz * 0.6; float c = n(p + vec2(uTime * 0.15, uTime * 0.07)) * 0.6 + n(p * 2.3 - uTime * 0.2) * 0.4;
        vec3 col = mix(vec3(0.5, 0.06, 0.0), vec3(1.0, 0.45, 0.05), c); col = mix(col, vec3(1.0, 0.9, 0.5), smoothstep(0.75, 0.95, c));
        gl_FragColor = vec4(col * 1.6, smoothstep(0.1, 0.5, m));
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));M.position.set(93,-.25,128),M.renderOrder=1,n.volcano.add(M);const P=["naturepack:TreeR1","naturepack:TreeR2","naturepack:TreeR3","naturepack:TreeRC1","naturepack:TreeRC2","naturepack:TreeRC3","naturepack:TreeRF"].filter(T=>fn[T]),A=["treepack:SM_FreeTree_01","treepack:SM_FreeTree_02","treepack:SM_FreeTree_06"].filter(T=>fn[T]),U={land:null,swamp:6982234,high:14215408,sky:16767216},_={};for(let T=0;T<Ce;T++)for(let D=0;D<Ce;D++)if(yn[T*Ce+D]===L.TREE){const z=dt(D,T);if(!(z in U)||z==="land"&&Math.min(D,T,79-D,79-T)<1&&e()<.5)continue;const k=Do[T*Ce+D],B=e(),$=z==="high"||k===$e.MOUNT||k===$e.FOREST&&B>.55||z==="land"&&B>.8,X=$?A:P;if(!X.length)continue;const G=(z==="swamp"?1.05:k===$e.FOREST?.85:.8)+e()*.4,ye=X[Math.floor(B*997)%X.length];(_[z+"|"+ye]||=[]).push([D+.5+(e()-.5)*.4,0,T+.5+(e()-.5)*.4,($?3.6:2.8)*G,B*6.28])}for(let T=0;T<300;T++){const D=e()*Math.PI*2,z=58+e()*16,k=40+Math.cos(D)*z,B=40+Math.sin(D)*z,$=e();if(k>81||B>92)continue;const X=$>.6,G=X?A:P;G.length&&(_["land|"+G[Math.floor($*997)%G.length]]||=[]).push([k,0,B,(X?3.6:2.8)*(1+e()*.6),$*6.28])}for(let T=124;T<Ce;T++)for(let D=124;D<Ce;D++)if(yn[T*Ce+D]===L.GRASS&&e()<.035){const z=P;z.length&&(_["sky|"+z[Math.floor(e()*z.length)]]||=[]).push([D+.5,0,T+.5,2.4+e(),e()*6.28])}for(const[T,D]of Object.entries(_)){const[z,k]=T.split("|");La(n[z],k,D,{sway:.05,cut:.9,tint:U[z]})}const v=(()=>{const T=[];for(let D=0;D<3;D++){const z=new $t(.42,.62,1,2);z.translate(0,.31,0);const k=z.attributes.position;for(let B=0;B<k.count;B++)k.getY(B)>.6&&k.setX(B,k.getX(B)*.15);z.rotateY(D*Math.PI/3),T.push(z)}return Hf(T)})(),y=(()=>{const T=[];for(let D=0;D<2;D++){const z=new $t(.26,1.5,1,8);z.translate(0,.75,0);const k=z.attributes.position;for(let B=0;B<k.count;B++){const $=k.getY(B);k.setX(B,k.getX(B)*(1-$/2)+Math.sin($*3.2)*.1),k.setZ(B,Math.cos($*2.5)*.07)}z.rotateY(D*Math.PI/2),T.push(z)}return Hf(T)})(),C={};for(const T in n)C[T]=[];for(let T=0;T<Ce;T++)for(let D=0;D<Ce;D++)yn[T*Ce+D]===L.TALL&&C[dt(D,T)].push([D,T]);const F=(T,D,z,k,B,$,X,G=1)=>{const ye=new ys(D,z,Math.max(1,T.length*k));let O=0;for(const[oe,fe]of T)for(let ge=0;ge<k;ge++)sr.set(oe+.12+e()*.76,-.02,fe+.12+e()*.76),ir.setFromEuler(Ga.set(0,e()*6.28,0)),rr.set($*(.9+e()*.5),$*G*(.8+e()*.6),$*(.9+e()*.5)),li.compose(sr,ir,rr),ye.setMatrixAt(O,li),ye.setColorAt(O++,B());return ye.count=O,ye.receiveShadow=!0,X.add(ye),ye},H=(T,D=1,z=1,k=0)=>bp(fo({color:16777215,side:Bt,...T}),D,z,k);F(C.land,v,H({}),6,()=>new be().setHSL(.27+e()*.05,.55,.3+e()*.1),1.05,i),F(C.cave,v,H({emissive:682586,emissiveIntensity:.9},.4),5,()=>new be().setHSL(.45+e()*.08,.7,.35+e()*.15),.8,r),F(C.sea,y,H({},.45,.6,.5),4,()=>new be().setHSL(.22+e()*.08,.6,.25+e()*.1),1.1,o),F(C.swamp,v,H({},.8,.7,.45),6,()=>new be().setHSL(.2+e()*.06,.45,.24+e()*.08),1,n.swamp,1.45),F(C.high,v,H({},.9,1.3),6,()=>new be().setHSL(.52+e()*.05,.25,.7+e()*.15),1,n.high,1.2),F(C.crystal,v,H({emissive:5913258,emissiveIntensity:.9},.4),5,()=>new be().setHSL(.72+e()*.1,.7,.4+e()*.15),.8,n.crystal),F(C.volcano,v,H({emissive:9054720,emissiveIntensity:.7},.6,1.6),5,()=>new be().setHSL(.05+e()*.05,.75,.3+e()*.15),.9,n.volcano),F(C.sky,v,H({},1,1.2),6,()=>new be().setHSL(e()<.5?.9+e()*.08:.45+e()*.08,.55,.62+e()*.1),1.05,n.sky);const K=[];for(let T=46;T<94;T++)for(let D=86;D<124;D++)yn[T*Ce+D]===L.GRASS&&e()<.025&&K.push([D,T]);F(K,y,H({},.45,.6,.5),2,()=>new be().setHSL(.15+e()*.1,.55,.28),.7,o);const q=[];for(let T=98;T<149;T++)for(let D=3;D<59;D++)yn[T*Ce+D]===L.WATER&&e()<.12&&q.push([D+e(),T+e(),.25+e()*.3]);const Y=new ys(new ci(1,10,.3,Math.PI*1.8).rotateX(-Math.PI/2),fo({color:4880946}),Math.max(1,q.length));q.forEach(([T,D,z],k)=>{li.compose(sr.set(T,-.08,D),ir.setFromEuler(Ga.set(0,e()*6,0)),rr.setScalar(z)),Y.setMatrixAt(k,li)}),Y.count=q.length,Y.receiveShadow=!0,n.swamp.add(Y);const me={},J=(T,D,z,k,B,$)=>((me[T]||={})[D]||=[]).push([z,k,B,$,e()*6.28]),Se=T=>!uo.has(T)||T===L.HEAL,Ae=["rocks:Rock_01","rocks:Rock_02","rocks:Rock_03","rocks:Rock_04","naturepack:RB1","naturepack:RG1"];for(let T=1;T<Ce-1;T++)for(let D=1;D<Ce-1;D++){const z=yn[T*Ce+D],k=Do[T*Ce+D],B=dt(D,T);if(!(B==="cave"||B==="sea"||B==="crystal")){if(z===L.FLOWER)for(let $=0;$<2;$++)J(B,"naturepack:"+["FlowerB1","FlowerR1","FlowerY1","FlowerC1"][Math.floor(e()*4)],D+.2+e()*.6,0,T+.2+e()*.6,.38+e()*.15);if(z===L.GRASS&&k!==$e.TOWN){const $=e();B==="land"||B==="sky"?$<(k===$e.FOREST?.12:.07)?J(B,"naturepack:"+["Clump2","Clump3","Clump5","Clump6","Clump7","Clump8"][Math.floor(e()*6)],D+e(),0,T+e(),.35+e()*.25):$<(k===$e.FOREST?.17:.09)?J(B,"naturepack:"+["MushrumY1","MushrumC1"][Math.floor(e()*2)],D+e(),0,T+e(),.28+e()*.12):B==="land"&&$<.1+(k===$e.FOREST?.08:0)&&J(B,"naturepack:Log",D+.5,0,T+.5,.35):B==="swamp"?$<.1?J(B,"naturepack:"+["Clump5","Clump6","Clump8"][Math.floor(e()*3)],D+e(),0,T+e(),.45+e()*.3):$<.14&&J(B,"naturepack:Log",D+.5,0,T+.5,.4):B==="high"?$<.06&&J(B,Ae[Math.floor(e()*4)],D+e(),-.1,T+e(),.3+e()*.4):B==="volcano"&&$<.08&&J(B,Ae[Math.floor(e()*4)],D+e(),-.1,T+e(),.3+e()*.6)}if(z===L.ROCK){const $=[[1,0],[-1,0],[0,1],[0,-1]].some(([X,G])=>Se(Ft(D+X,T+G)));$&&e()<.55?J(B,Ae[Math.floor(e()*(B==="high"?4:6))],D+.5,-.1,T+.5,.9+e()*.9):!$&&e()<.12&&J(B,"rocks:Rock_0"+(1+Math.floor(e()*4)),D+.5,l(D,T)*.8,T+.5,.8+e()*.8)}k===$e.MOUNT&&z===L.GRASS&&e()<.05&&J(B,"rocks:Rock_0"+(1+Math.floor(e()*4)),D+e(),-.05,T+e(),.25+e()*.3)}}const Le={volcano:5917256,high:15265528,swamp:9083514};for(const[T,D]of Object.entries(me))for(const[z,k]of Object.entries(D))La(n[T],z,k,{lift:T==="high"&&(z.startsWith("rocks")||z.includes(":R"))?5923956:null,sway:z.includes("Flower")||z.includes("Clump")?.6:0,shadow:!z.includes("Flower"),tint:z.startsWith("rocks")||z.includes(":R")?Le[T]:T==="swamp"?9085040:null});const Fe=(T,D,z,k,B=1.2)=>{const $=fn[T];if(!(!$||!D.length))for(const X of $.parts){const G=[].concat(X.mat)[0].clone();G.emissive=new be(z),G.emissiveIntensity=B,G.color&&G.color.lerp(new be(z),.5);const ye=new ys(X.geo,G,D.length);D.forEach(([O,oe,fe,ge,se],Q)=>{li.compose(sr.set(O,oe,fe),ir.setFromEuler(Ga.set(0,se,0)),rr.setScalar(ge)),ye.setMatrixAt(Q,li)}),ye.castShadow=!0,k.add(ye)}},Ye={cave:[[],[]],crystal:[[],[],[]]},rt={cave:[],crystal:[],swamp:[]},nt={cave:[],crystal:[]},re=[[],[],[]],ue=[];for(let T=1;T<Ce-1;T++)for(let D=1;D<Ce-1;D++){const z=yn[T*Ce+D],k=dt(D,T);if(k==="swamp"&&(z===L.TALL||z===L.GRASS)&&e()<.025&&rt.swamp.push([D+e(),0,T+e(),.3+e()*.25,e()*6.28]),k!=="cave"&&k!=="crystal"&&k!=="sea")continue;const B=z===L.ROCK&&[[1,0],[-1,0],[0,1],[0,-1]].some(([X,G])=>Se(Ft(D+X,T+G)));if(k==="sea"){B&&e()<.5&&ue.push([D+.5,-.1,T+.5,.8+e()*.8,e()*6.28]),z===L.GRASS&&e()<.07&&re[Math.floor(e()*3)].push([D+e(),0,T+e(),.35+e()*.35,e()*6.28]);continue}const $=Ye[k];B&&e()<(k==="crystal"?.6:.35)&&$[Math.floor(e()*$.length)].push([D+.5,.2+e()*.8,T+.5,(k==="crystal"?.7:.5)+e()*.8,e()*6.28]),z===L.TALL&&e()<.35&&rt[k].push([D+e(),0,T+e(),.25+e()*.15,e()*6.28]),z===L.GRASS&&e()<.05&&nt[k].push([D+e(),T+e(),.4+e()*.9]),k==="crystal"&&z===L.GRASS&&e()<.04&&$[Math.floor(e()*3)].push([D+e(),0,T+e(),.5+e()*.9,e()*6.28])}Fe("naturepack:Crystel1",Ye.cave[0],3856639,r,1.4),Fe("naturepack:Crystel2",Ye.cave[1],12606207,r,1.4),Fe("naturepack:Crystel1",Ye.crystal[0],16734920,n.crystal,1.5),Fe("naturepack:Crystel2",Ye.crystal[1],5963728,n.crystal,1.5),Fe("naturepack:Crystel1",Ye.crystal[2],16767066,n.crystal,1.5),Fe("naturepack:MushrumC1",rt.cave,3866560,r,.9),Fe("naturepack:MushrumC1",rt.crystal,11565823,n.crystal,.9),Fe("naturepack:MushrumY1",rt.swamp,10157930,n.swamp,.6);for(const T of["cave","crystal"]){const D=nt[T],z=new ys(new lr(.22,1,7).translate(0,.5,0),Dt(T==="crystal"?8022680:6972536,{flatShading:!0}),Math.max(1,D.length));D.forEach(([k,B,$],X)=>{li.compose(sr.set(k,0,B),ir.identity(),rr.set(1,$,1)),z.setMatrixAt(X,li)}),z.count=D.length,z.castShadow=!0,z.receiveShadow=!0,n[T].add(z)}Fe("naturepack:Clump3",re[0],16738954,o,.35),Fe("naturepack:Clump6",re[1],16752704,o,.35),Fe("naturepack:Clump8",re[2],11563263,o,.35),La(o,"rocks:Rock_02",ue.filter((T,D)=>D%2)),La(o,"rocks:Rock_03",ue.filter((T,D)=>!(D%2)));const De=new mt({color:10152191,transparent:!0,opacity:.06,blending:Zt,depthWrite:!1,side:Bt,fog:!1});for(let T=0;T<26;T++){const D=88+e()*30,z=48+e()*40,k=new de(new $t(1+e()*1.5,9),De);k.position.set(D,4,z),k.rotation.set(0,e()*3,.3),o.add(k),a.anim.push(()=>{k.rotation.y+=.0015})}for(let T=0;T<26;T++){const D=fn["rocks:Rock_0"+(1+T%4)];if(!D)break;const z=new Je;for(const G of D.parts)z.add(new de(G.geo,G.mat));const k=126+e()*72,B=126+e()*72;if(Ft(k,B)!==L.VOID)continue;const $=-4+e()*10,X=1+e()*3;z.position.set(k,$,B),z.scale.setScalar(X),z.rotation.set(e(),e()*6,e()),n.sky.add(z),a.anim.push(G=>{z.position.y=$+Math.sin(G*.5+k)*.6,z.rotation.y+=.002})}for(const[T,D]of mr.entries())i.add(fn.cottage?fS(D,T):dS(D));const Be=i.children.find(T=>T.userData?.heart);a.heart=Be?.userData.heart;const Ue=new Je,ot=new wt(.1,.5,.1),_t=new wt(1,.07,.05),N=Dt(13145434);for(let T=30;T<=51;T++)for(const D of[58]){if(Ft(T,D)===L.PATH||Ft(T,D)===L.TREE)continue;const z=new de(ot,N);if(z.position.set(T+.5,.25,D+.5),Ue.add(z),Ft(T+1,D)!==L.PATH){const k=new de(_t,N);k.position.set(T+1,.35,D+.5),Ue.add(k)}}Ue.traverse(T=>{T.castShadow=!0}),i.add(Ue);for(const[T,D,z]of[["⬆ Skoven",42.3,59.5],["⬅ Grotten",33.5,35],["⬅ Grotten",18.5,24.5],["➡ Søen",60.5,30],["⬆ Porten",59.5,14.5],["⬅ Toppen",50.5,7.3],["🌊 Sumpen",16.5,59.5]])i.add(Yf(T,D,z));for(const[T,D,z,k]of[["⬆ Klatring",37.5,103.5,"swamp"],["➡ Krystal",172.5,25.5,"high"],["🪽 Flyv",187.5,48.5,"high"],["⬆ Himlen",89.5,113.5,"volcano"]])n[k].add(Yf(T,D,z));const ve=Dt(8014374),he=Dt(4860436);{const T=new Je;T.position.set(40.5,0,46.5);for(const k of[-1.75,1.75]){const B=new de(new wt(.4,3,.4),he);B.position.set(k,1.5,0),T.add(B)}const D=new de(new wt(4.3,.35,.5),he);D.position.y=3,T.add(D);const z=[];for(const k of[-1,1]){const B=new Je;B.position.set(k*1.55,0,0);const $=new de(new wt(1.5,2.2,.12),ve);$.position.set(-k*.75,1.15,0),B.add($);for(const X of[.5,1.8]){const G=new de(new wt(1.5,.12,.16),he);G.position.set(-k*.75,X,0),B.add(G)}T.add(B),z.push(B)}T.userData.open=k=>{z[0].rotation.y=-k*1.6,z[1].rotation.y=k*1.6},T.traverse(k=>{k.castShadow=!0,k.receiveShadow=!0}),i.add(T),a.gates.forest=T}{const T=new Je;T.position.set(56.5,0,9.5),T.rotation.y=Math.PI/2;const D=Dt(10131112);for(const $ of[-1.8,1.8]){const X=new de(new wt(.6,3.4,.6),D);X.position.set($,1.7,0),T.add(X)}const z=new de(new wt(4.4,.6,.7),D);z.position.y=3.5,T.add(z);const k=[];for(const[$,X]of[3851354,3856639,3832575].entries()){const G=new de(new Po(.22),new Gn({color:3355460,emissive:X,emissiveIntensity:0}));G.position.set(($-1)*.9,3.5,.42),T.add(G),k.push(G)}const B=new de(new $t(3,3.2),new mt({color:8051967,transparent:!0,opacity:.45,blending:Zt,depthWrite:!1,side:Bt}));B.position.y=1.6,T.add(B),T.userData.sockets=k,T.userData.wall=B,a.anim.push($=>{B.material.opacity=.3+Math.sin($*3)*.12}),T.traverse($=>{$!==B&&($.castShadow=!0)}),i.add(T),a.gates.arch=T}for(const[T,D]of[["cave",r],["sea",o],["swamp",n.swamp],["high",n.high],["crystal",n.crystal],["volcano",n.volcano],["sky",n.sky]]){const z=_s[T]||[];if(!z.length)continue;const k=z.reduce((X,G)=>X+G[0],0)/z.length+.5,B=z.reduce((X,G)=>X+G[1],0)/z.length+.5,$=new Je;for(let X=0;X<7;X++){const G=fn["rocks:Rock_0"+(1+X%4)];if(!G)break;const ye=1+e()*.6;for(const O of G.parts){const oe=new de(O.geo,O.mat);oe.scale.setScalar(ye),oe.position.set(k+(e()-.5)*2.4,-.1,B+(e()-.5)*2.4),oe.rotation.y=e()*6,oe.castShadow=!0,$.add(oe)}}D.add($),a.gates[T]=$}const le=(T,D,z,k=i)=>{const B=new Je,$=new de(new ci(1.2,20,0,Math.PI),new mt({color:329224}));$.position.y=.02,B.add($);const X=new de(new Io(1.25,.35,8,16,Math.PI),Dt(9077880,{flatShading:!0}));X.castShadow=!0,B.add(X),B.position.set(T,0,D),B.rotation.y=z,k.add(B)};le(12.5,16.55,0),le(57.45,31.5,Math.PI/2);const ae=(T,D,z,k)=>{const B=new de(new Ln(.5,.9,3.2,16,1,!0),new mt({color:k,transparent:!0,opacity:.16,blending:Zt,depthWrite:!1,side:Bt,fog:!1}));return B.position.set(T,1.6,D),z.add(B),a.anim.push($=>{B.material.opacity=.13+Math.sin($*2+T)*.04}),B},Te=(T,D,z,k)=>{const B=new de(new ci(1.1,24).rotateX(-Math.PI/2),new mt({color:k,map:pc(),transparent:!0,opacity:.8,blending:Zt,depthWrite:!1,fog:!1}));B.position.set(T,.05,D),z.add(B)};Te(92.5,41.3,r,16773824),ae(116.5,2.5,r,16773824),Te(92.5,88.3,o,12580095),ae(106.5,49.5,o,12580095);{const T=new Je;T.position.set(fi.x,-.05,fi.z);const D=document.createElement("canvas");D.width=D.height=128;const z=D.getContext("2d");z.translate(64,64);for(let $=0;$<4;$++){z.rotate(Math.PI/2),z.strokeStyle="#ffffff",z.lineWidth=7,z.beginPath();for(let X=0;X<5;X+=.1)z.lineTo(Math.cos(X)*X*11,Math.sin(X)*X*11);z.stroke()}const k=new Sr(D),B=new de(new ci(1.4,32).rotateX(-Math.PI/2),new mt({map:k,transparent:!0,opacity:.8,depthWrite:!1,color:12580095}));B.position.y=0,T.add(B),a.anim.push(($,X)=>{B.rotation.y-=X*2.5}),i.add(T),a.dive=T,ae(fi.x,fi.z,i,8051967).scale.set(.8,.5,.8)}const _e=(T,D,z)=>{const k=document.createElement("canvas");k.width=k.height=128;const B=k.getContext("2d");B.translate(64,64);for(let X=0;X<4;X++){B.rotate(Math.PI/2),B.strokeStyle="#ffffff",B.lineWidth=7,B.beginPath();for(let G=0;G<5;G+=.1)B.lineTo(Math.cos(G)*G*11,Math.sin(G)*G*11);B.stroke()}const $=new de(new ci(1.2,32).rotateX(-Math.PI/2),new mt({map:new Sr(k),transparent:!0,opacity:.75,depthWrite:!1,color:13628592}));$.position.set(T,-.04,D),z.add($),a.anim.push((X,G)=>{$.rotation.y-=G*2})},Ee=(T,D,z,k)=>{const B=new Je;B.position.set(T+.5,0,D+.5),B.rotation.y=k;const $=new ts({color:3832362,side:Bt});for(let G=0;G<7;G++){const ye=new de(new $t(.14,3.2,1,6).translate(0,1.6,0),$);ye.position.set(-.9+G*.3,0,.55+Math.sin(G)*.05),ye.rotation.z=Math.sin(G*1.7)*.08,B.add(ye)}const X=new Gn({color:16765562,emissive:16754224,emissiveIntensity:.8});for(let G=0;G<8;G++){const ye=new de(new Vn(.08,8,6),X);ye.position.set(-.6+G%2*1.2+Math.sin(G)*.2,.4+G*.38,.6),B.add(ye)}z.add(B)},je=(T,D,z)=>{const k=new Je;k.position.set(T+.5,0,D+.5);for(let X=0;X<10;X++){const G=fn["rocks:Rock_0"+(1+X%4)];if(!G)break;const ye=X/10*Math.PI*2;for(const O of G.parts){const oe=new de(O.geo,O.mat);oe.scale.setScalar(.5+X%3*.15),oe.position.set(Math.cos(ye)*1.4,-.05,Math.sin(ye)*1.4),oe.rotation.y=ye,oe.castShadow=!0,k.add(oe)}}const B=new ts({color:15788248,side:Bt});for(let X=0;X<6;X++){const G=new de(new $t(.12,.6).translate(0,.3,0),B);G.position.set(Math.cos(X)*.8,.05,Math.sin(X*1.3)*.8),G.rotation.set(.6,X,.3),k.add(G)}const $=new de(new Ln(.6,1.1,6,16,1,!0),new mt({color:12577023,transparent:!0,opacity:.14,blending:Zt,depthWrite:!1,side:Bt,fog:!1}));$.position.y=3,k.add($),a.anim.push(X=>{$.rotation.y=X*.8,$.material.opacity=.1+Math.sin(X*2+T)*.04}),z.add(k)};_e(12.5,62.5,i),_e(8.5,146.5,n.swamp),Ee(40,96,n.swamp,0),Ee(128,73,n.high,Math.PI),le(186.5,6.6,0,n.high),Te(129.5,120.3,n.crystal,16773824),ae(168.5,78.5,n.crystal,16773824),le(194.5,59.6,0,n.high),je(190,46,n.high),je(66,157,n.volcano),je(93,104,n.volcano),je(129,195,n.sky),a.lamps=[];const Ve={post:new Ln(.05,.07,1.6,6).translate(0,.8,0),arm:new wt(.36,.05,.05).translate(.16,1.55,0),cage:new Ln(.11,.13,.26,6),cap:new lr(.16,.14,6),bulb:new Vn(.075,10,8),pool:new ci(2.4,24).rotateX(-Math.PI/2)},R={iron:Dt(2761760),bulb:new mt({color:16767136})},w=(T,D,z)=>{const k=new Je;k.position.set(T,0,D);const B=new de(Ve.post,R.iron),$=new de(Ve.arm,R.iron),X=new de(Ve.cage,R.iron),G=new de(Ve.cap,R.iron);X.position.set(.32,1.36,0),G.position.set(.32,1.54,0),X.scale.set(1,1,1),X.material=R.iron;const ye=new de(Ve.bulb,new mt({color:6969928}));ye.position.set(.32,1.36,0);const O=new fl(new zo({map:pc(),color:16756832,transparent:!0,opacity:0,blending:Zt,depthWrite:!1}));O.scale.setScalar(1.5),O.position.copy(ye.position);const oe=new de(Ve.pool,new mt({map:pc(),color:16754768,transparent:!0,opacity:0,blending:Zt,depthWrite:!1}));oe.position.set(.32,.03,0),oe.renderOrder=2,B.castShadow=!0,k.add(B,$,X,G,ye,O,oe),z.add(k);const fe=new be(16767136),ge=new be(6969928);a.lamps.push({x:T,z:D,g:k,set(se,Q){const Re=se*(.92+Math.sin(Q*9+T)*.04+Math.sin(Q*5.3+D)*.04);ye.material.color.copy(ge).lerp(fe,Math.min(1,se*1.5)),O.material.opacity=Re*.75,O.visible=Re>.01,oe.material.opacity=Re*.55,oe.visible=Re>.01}})},j=(T,D)=>{const z=Ft(T,D);return z===L.GRASS||z===L.FLOWER||z===L.SAND||z===L.TALL},ne=(T,D,z)=>{for(const[k,B]of[[1.2,-.4],[-1.2,-.4],[1.2,.8],[-1.2,.8],[0,-1.4],[2,0],[-2,0]])if(j(T+k,D+B)){w(T+k,D+B,z);return}};for(const T of mr)ne(T.x+4.4,T.y+3.4,i);for(const T of ko)T.door||ne(T.x,T.z,n[dt(T.x,T.z)]);for(const T of el)dt(T.x,T.z)!=="cave"&&dt(T.x,T.z)!=="crystal"&&dt(T.x,T.z)!=="sea"&&ne(T.x+.5,T.z+.5,n[dt(T.x,T.z)]);for(const[T,D]of[[42.3,59.5],[33.5,35],[60.5,30],[59.5,14.5],[16.5,59.5],[37.5,103.5],[172.5,25.5],[187.5,48.5],[89.5,113.5],[36.5,66],[44.5,66],[40.5,54]])ne(T,D,n[dt(T,D)]);a.obst={};const ce={thorn:Dt(3103274,{flatShading:!0}),spike:Dt(6957642),berry:new Gn({color:16726618,emissive:9046570,emissiveIntensity:.4}),rock:Dt(9077880,{flatShading:!0}),crack:new mt({color:2761760}),dirt:Dt(8016434,{flatShading:!0}),pebble:Dt(10127984,{flatShading:!0}),ice:new Gn({color:12577023,emissive:2779802,emissiveIntensity:.25,roughness:.15,metalness:.05,transparent:!0,opacity:.92}),chestW:Dt(10115626),chestB:Dt(16765498,{emissive:6965760,emissiveIntensity:.4})},ie={cone:new lr(.22,.9,5),spike:new lr(.05,.22,4),berry:new Vn(.06,6,5),rock:new To(.62,0),crack:new wt(.04,.5,.04),mound:new Vn(.62,10,6,0,Math.PI*2,0,Math.PI/2),pebble:new To(.12,0),puff:new Vn(.5,10,8),slab:new wt(1.04,.16,1.04)},ke=()=>{const T=new Je,D=new de(new wt(.6,.38,.42),ce.chestW);D.position.y=.19;const z=new de(new Ln(.21,.21,.6,10,1,!1,0,Math.PI).rotateZ(Math.PI/2),ce.chestW);z.position.y=.38;const k=new de(new wt(.08,.62,.44),ce.chestB);return k.position.y=.3,T.add(D,z,k),T.traverse(B=>{B.castShadow=!0}),T};for(const T of ii){const D=dt(T.x,T.z),z=new Je,k=[],B=[];n[D].add(z);const $=D==="sky";for(const[G,ye]of T.tiles){const O=G+.5,oe=ye+.5,fe=new Je;if(fe.position.set(O,0,oe),fe.rotation.y=e()*6.28,T.kind==="cut"){for(let ge=0;ge<6;ge++){const se=new de(ie.cone,ce.thorn),Q=ge*1.05+e();se.position.set(Math.cos(Q)*.28,.4,Math.sin(Q)*.28),se.rotation.set(Math.sin(Q)*.4,0,Math.cos(Q)*.4),se.scale.setScalar(.8+e()*.5),se.castShadow=!0,fe.add(se)}for(let ge=0;ge<10;ge++){const se=new de(ie.spike,ce.spike),Q=e()*6.28,Re=.2+e()*.6;se.position.set(Math.cos(Q)*.42,Re,Math.sin(Q)*.42),se.rotation.set(0,0,-Math.PI/2),se.rotation.y=-Q,fe.add(se)}for(let ge=0;ge<4;ge++){const se=new de(ie.berry,ce.berry),Q=e()*6.28;se.position.set(Math.cos(Q)*.38,.3+e()*.5,Math.sin(Q)*.38),fe.add(se)}}else if(T.kind==="smash"){const ge=new de(ie.rock,ce.rock);ge.scale.set(1,.85+e()*.3,1),ge.position.y=.45,ge.castShadow=!0,ge.receiveShadow=!0,fe.add(ge);for(let se=0;se<3;se++){const Q=new de(ie.crack,ce.crack);Q.position.set((se-1)*.22,.55,.5),Q.rotation.z=(se-1)*.5+.2,fe.add(Q);const Re=Q.clone();Re.position.z=-.5,fe.add(Re)}}else if(T.kind==="dig"){const ge=new de(ie.mound,ce.dirt);ge.scale.set(1.05,1.1,1.05),ge.castShadow=!0,ge.receiveShadow=!0,fe.add(ge);for(let se=0;se<5;se++){const Q=new de(ie.pebble,ce.pebble),Re=e()*6.28;Q.position.set(Math.cos(Re)*.45,.25+e()*.25,Math.sin(Re)*.45),fe.add(Q)}}else if(T.kind==="blow"){const ge=new ts({color:$?16052479:9076888,emissive:$?6974096:2760752,transparent:!0,opacity:.86,depthWrite:!1});for(let se=0;se<4;se++){const Q=new de(ie.puff,ge);Q.position.set((e()-.5)*.6,.4+se*.32,(e()-.5)*.6),Q.scale.setScalar(.9+e()*.6),fe.add(Q),B.push(Q)}}else if(T.kind==="freeze"){const ge=new de(ie.slab,ce.ice);ge.position.y=-.06,ge.receiveShadow=!0,ge.visible=!1,fe.add(ge)}z.add(fe),k.push(fe)}let X=null;T.treasure&&(X=ke(),X.position.set(T.x,0,T.z),X.visible=!1,z.add(X)),B.length&&a.anim.push(G=>{for(const[ye,O]of B.entries()){if(!O.parent.visible)return;O.position.y+=Math.sin(G*.8+ye)*.002,O.rotation.y=G*.2+ye}}),a.obst[T.id]={o:T,grp:z,box:X,open(G){for(const ye of k){if(T.kind==="freeze"){for(const O of ye.children)O.visible=G>0,O.scale.set(Math.min(1,G*1.5),1,Math.min(1,G*1.5));continue}T.kind==="blow"?(ye.position.y=G*4,ye.scale.setScalar(1+G*1.5),ye.children.forEach(O=>{O.material.opacity=.86*(1-G)})):T.kind==="dig"?(ye.position.y=-G*.75,ye.scale.set(1+G*.3,1-G*.6,1+G*.3)):(ye.scale.setScalar(Math.max(.001,1-G)),ye.rotation.y+=G*.08),ye.visible=G<1}X&&(X.visible=G>.4,X.scale.setScalar(Math.min(1,(G-.4)*2.5)))}}}for(const T of el.filter(D=>D.kind==="teleport")){const D=new Je;D.position.set(T.x+.5,0,T.z+.5);const z=new de(new wt(.55,1.7,.3),Dt(9078944,{flatShading:!0}));z.position.y=.85,z.rotation.y=.4,z.castShadow=!0,D.add(z);const k=new mt({color:13667071});for(let $=0;$<4;$++){const X=new de(new Io(.09,.025,4,6),k);X.position.set(0,.45+$*.32,.16),z.add(X),X.position.set(0,-.4+$*.28,.16)}const B=new de(new Dr(.75,.95,32).rotateX(-Math.PI/2),new mt({color:12614399,transparent:!0,opacity:.6,blending:Zt,depthWrite:!1}));B.position.y=.04,D.add(B),a.anim.push($=>{B.rotation.y=$,B.scale.setScalar(1+Math.sin($*2.5)*.08),k.color.setHSL(.78,.9,.65+Math.sin($*3)*.12)}),n[dt(T.x,T.z)].add(D)}for(const T of ko){if(T.door){a.heals.push(T);continue}const D=new Je;D.position.set(T.x,0,T.z);const z=new de(new Ln(.45,.55,.35,8),Dt(12103840,{flatShading:!0}));z.position.y=.17,D.add(z);const k=new de(new Po(.32),new Gn({color:16747192,emissive:16726666,emissiveIntensity:1.1,roughness:.2}));k.scale.y=1.6,k.position.y=.95,D.add(k),D.traverse(B=>{B.castShadow=!0}),a.anim.push(B=>{k.rotation.y=B,k.position.y=.95+Math.sin(B*2+T.x)*.08}),n[dt(T.x,T.z)].add(D),a.heals.push(T)}return a}function fS(s,e){const t=new Je,n=e===1&&fn.stylcottage,i=n?fn.stylcottage:fn.cottage,r=n?4.6:3.4,o=i.w*r,a=i.d*r,l=Math.min(1,4.2/o,3/a);for(const c of i.parts){const h=new de(c.geo,c.mat);h.scale.setScalar(r*l),h.castShadow=!0,h.receiveShadow=!0,t.add(h)}if(t.position.set(s.x+2,0,s.y+1.5),s.red){const c=new wr;c.moveTo(0,-.35),c.bezierCurveTo(-.55,0,-.25,.4,0,.12),c.bezierCurveTo(.25,.4,.55,0,0,-.35);const h=new de(new Co(c,{depth:.12,bevelEnabled:!1}),new Gn({color:16730762,emissive:16722538,emissiveIntensity:.6}));h.position.set(.5,r*l+.4,1.2),h.scale.setScalar(1.1),t.add(h),t.userData.heart=h}return t}function dS(s){const e=new Je,t=4,n=3,i=1.5,r=Dt(s.red?16773856:16048836),o=Dt(s.red?16734810:14252602),a=Dt(9067060),l=Dt(9427199,{emissive:2779802,emissiveIntensity:.3}),c=new de(new wt(t-.3,i,n-.5),r);c.position.set(t/2,i/2,n/2-.05),e.add(c);const h=new wr;h.moveTo(-t/2,0),h.lineTo(t/2,0),h.lineTo(0,1.25),h.closePath();const u=new de(new Co(h,{depth:n+.1,bevelEnabled:!1}),o);u.position.set(t/2,i,-.25),e.add(u);const f=new de(new wt(.6,.95,.08),a);f.position.set(2.5,.48,n-.29),e.add(f);for(const g of[.9,3.4])if(Math.abs(g-2.5)>.6){const x=new de(new wt(.55,.45,.06),l);x.position.set(g,.95,n-.3),e.add(x)}const d=new de(new wt(.35,.8,.35),Dt(11563088));if(d.position.set(t-1,i+.8,.8),e.add(d),s.red){const g=new wr;g.moveTo(0,-.35),g.bezierCurveTo(-.55,0,-.25,.4,0,.12),g.bezierCurveTo(.25,.4,.55,0,0,-.35);const x=new de(new Co(g,{depth:.1,bevelEnabled:!1}),Dt(16730762,{emissive:16722538,emissiveIntensity:.35}));x.position.set(2.5,1.95,n-.25),x.scale.setScalar(.9),e.add(x),e.userData.heart=x}return e.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),e.position.set(s.x,0,s.y),e}const Wa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const pS=new pl(-1,1,1,-1,0,1);class mS extends Pt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}}const gS=new mS;class pu{constructor(e){this._mesh=new de(gS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class vS extends Fr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=br.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new pu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Jf extends Fr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class xS extends Fr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _S{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new pe);this._width=n.width,this._height=n.height,t=new qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Oi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vS(Wa),this.copyPass.material.blending=ki,this.clock=new Ug}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Jf!==void 0&&(o instanceof Jf?n=!0:o instanceof xS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class yS extends Fr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new be}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const MS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Cr extends Fr{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new pe(e.x,e.y):new pe(256,256),this.clearColor=new be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qn(r,o,{type:Oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new qn(r,o,{type:Oi});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new qn(r,o,{type:Oi});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=MS;this.highPassUniforms=br.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new pe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=br.clone(Wa.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader,blending:Zt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new be,this._oldClearAlpha=1,this._basic=new mt,this._fsQuad=new pu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new pe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new pe(.5,.5)},direction:{value:new pe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Cr.BlurDirectionX=new pe(1,0);Cr.BlurDirectionY=new pe(0,1);const Ua={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class bS extends Fr{constructor(){super(),this.uniforms=br.clone(Ua.uniforms),this.material=new mg({name:Ua.name,uniforms:this.uniforms,vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader}),this._fsQuad=new pu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===md?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===gd&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const SS=(()=>{const s=new Cs(new Uint8Array([110,190,255]),3,1,Lr);return s.minFilter=s.magFilter=Yt,s.needsUpdate=!0,s})(),ri=s=>new tu({color:s,gradientMap:SS}),wS=new mt({color:1714730,side:en});function TS(){const s=new Je,e=new Je;s.add(e);const t=ri(16765608),n=ri(16730682),i=ri(3824600),r=ri(2763322),o=ri(16726570),a=ri(16777215),l=ri(16762161),c=ri(5911584),h=(p,S,b,M,P,A,U=A,_=A,v=e)=>{const y=new de(p,S);y.position.set(b,M,P),y.scale.set(A,U,_),y.castShadow=!0,v.add(y);const C=new de(p,wS);return C.scale.set(1+.02/A,1+.02/U,1+.02/_),y.add(C),y},u=new Vn(1,16,12),f=new Yh(1,1,4,8),d=new wt(1,1,1),g=[],x=[];for(const p of[-1,1]){const S=new Je;S.position.set(p*.1,.42,0),e.add(S),h(f,i,0,-.18,0,.075,.14,.075,S),h(u,r,0,-.38,.04,.085,.06,.12,S),g.push(S)}h(f,n,0,.62,0,.17,.14,.13),h(d,l,0,.66,-.17,.26,.3,.12);for(const p of[-1,1]){const S=new Je;S.position.set(p*.21,.76,0),e.add(S),h(f,n,0,-.08,0,.055,.07,.055,S),h(u,t,0,-.22,0,.06,.06,.06,S),x.push(S)}const m=new Je;m.position.set(0,1.05,0),e.add(m),h(u,t,0,0,0,.2,.2,.19,m),h(u,c,0,-.02,-.06,.205,.18,.17,m),h(u,o,0,.07,0,.21,.13,.21,m),h(d,o,0,.07,.2,.3,.03,.18,m),h(u,a,0,.17,.12,.07,.05,.03,m);for(const p of[-1,1])h(u,ri(1710628),p*.07,0,.17,.03,.04,.02,m);return h(u,ri(16751242),0,-.08,.18,.04,.02,.02,m),{root:s,body:e,legs:g,arms:x,head:m}}function ES(){const s=new Je,e=mp(gr.scene);e.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.frustumCulled=!1)});const t=new Je;t.add(e),s.add(t);const n=new lu(e),i=u=>gr.anims.find(f=>f.name===u)||gr.anims.find(f=>f.name.toLowerCase().includes(u)),r={idle:i("idle"),walk:i("walk"),run:i("run")};for(const u in r)r[u]&&(r[u]=n.clipAction(r[u]),r[u].play(),r[u].setEffectiveWeight(u==="idle"?1:0));n.update(.01),s.updateMatrixWorld(!0);const o=new Tn,a=new I;e.traverse(u=>{if(u.isSkinnedMesh){const f=u.geometry.attributes.position;for(let d=0;d<f.count;d+=7)u.getVertexPosition(d,a),o.expandByPoint(a.applyMatrix4(u.matrixWorld))}else u.isMesh&&o.expandByObject(u)});const l=o.getSize(new I),c=o.getCenter(new I),h=1.3/Math.max(.001,l.y);return t.scale.setScalar(h),t.position.set(-c.x*h,-o.min.y*h,-c.z*h),{root:s,mixer:n,acts:r}}class AS{constructor(e){this.hero=gr.scene?ES():null,this.kid=this.hero?{root:this.hero.root}:TS(),e.add(this.kid.root),this.pos=new I,this.yaw=0,this.walk=0,this.moving=!1,this.trail=[],this.follower=null,this.followerForm=-1,this.canSwim=!1,this.under=!1,this.riding=!1,this.ride=0,this.fp=!1}place(e,t){this.pos.set(e,0,t),this.trail=[],this.kid.root.position.copy(this.pos),this.follower&&this.follower.root.position.set(e+1,0,t-.3)}pass(e){return!uo.has(e)||e===L.WATER&&this.canSwim}free(e,t){for(const[i,r]of[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]])if(!this.pass(Ft(e+i,t+r)))return!1;return!0}update(e,t,n,i,r=!1){const o=Math.hypot(t,n);this.moving=o>.15,this.riding=this.under||this.canSwim&&Ft(this.pos.x,this.pos.z)===L.WATER,this.ride+=((this.riding&&this.follower?1:0)-this.ride)*Math.min(1,e*6);let a=0;if(this.moving){const g=(this.riding?3.2:3.6)*Math.min(1,o)*e,x=t/o*g,m=n/o*g,p=this.pos.x,S=this.pos.z;if(this.free(this.pos.x+x,this.pos.z)&&(this.pos.x+=x),this.free(this.pos.x,this.pos.z+m)&&(this.pos.z+=m),a=Math.hypot(this.pos.x-p,this.pos.z-S),!r){let M=Math.atan2(t,n)-this.yaw;for(;M>Math.PI;)M-=Math.PI*2;for(;M<-Math.PI;)M+=Math.PI*2;this.yaw+=M*Math.min(1,e*12)}if(a>5e-4){const b=this.trail[this.trail.length-1];(!b||Math.hypot(b.x-this.pos.x,b.z-this.pos.z)>.05)&&(this.trail.push({x:this.pos.x,z:this.pos.z}),this.trail.length>40&&this.trail.shift())}}this.walk+=a*5.5;const l=this.kid,c=this.moving?1:0,h=e>0?a/e:0,u=this.follower,f=this.under?.7+Math.sin(i*1.6)*.12:-.28+Math.sin(i*2.2)*.05,d=u?f+(u.top||u.height)*.78:0;if(l.root.position.set(this.pos.x,d*this.ride,this.pos.z),l.root.rotation.y=this.yaw,l.root.rotation.x=this.under&&this.moving?-.15:0,l.root.visible=!this.fp,this.hero){const g=this.hero.acts,x=this.ride>.5,m={idle:x||h<.3?1:0,walk:!x&&h>=.3&&h<2.6?1:0,run:!x&&h>=2.6?1:0};for(const p in g)g[p]&&g[p].setEffectiveWeight(g[p].getEffectiveWeight()+(m[p]-g[p].getEffectiveWeight())*Math.min(1,e*10));g.run&&(g.run.timeScale=1.1),g.walk&&(g.walk.timeScale=1.2),this.hero.mixer.update(e)}else l.legs.forEach((g,x)=>{g.rotation.x=Math.sin(this.walk+x*Math.PI)*.8*c}),l.arms.forEach((g,x)=>{g.rotation.x=-Math.sin(this.walk+x*Math.PI)*.7*c}),l.body.position.y=Math.abs(Math.sin(this.walk))*.05*c,l.head.rotation.y=this.moving?0:Math.sin(i*.6)*.3;if(u)if(this.ride>.02&&this.riding){u.root.position.set(this.pos.x,f,this.pos.z);let g=this.yaw-u.root.rotation.y;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;u.root.rotation.y+=g*Math.min(1,e*10),u.root.rotation.z=Math.sin(i*2.4)*.06,u.root.rotation.x=this.under&&this.moving?-.12:0,u.tick(e,this.moving?3:.4,i,!0)}else{u.root.rotation.z=0,u.root.rotation.x=0;const g=this.trail.length>14?this.trail[this.trail.length-14]:null;let x=0;if(g){const m=g.x-u.root.position.x,p=g.z-u.root.position.z,S=Math.hypot(m,p);if(S>.05){const b=Math.min(S,Math.max(3.6,S*4)*e);u.root.position.x+=m/S*b,u.root.position.z+=p/S*b,x=b/e,u.root.rotation.y=Math.atan2(m,p)}}else u.root.rotation.y+=(this.yaw-u.root.rotation.y)*Math.min(1,e*3);u.root.position.y=0,u.tick(e,x,i)}return a}}const Zf=new Set(_p.slice(0,3).map(s=>s.id)),ns=s=>Math.round(20+s.lvl*3.2+Ze[s.f].stage*8+(Ze[s.f].legend?20:0)),wh=s=>8+s.lvl*6,nl=s=>Ze[s.f].types,Tt=s=>Ze[s.f].name;function yl(s,e){const t={id:Z.uid++,f:s,lvl:e,xp:0,hp:0};return t.hp=ns(t),t}const Sp=s=>{Z.seen[s.f]=1},mu=s=>{Z.caught[s.f]=1,Z.seen[s.f]=1},RS=(s,e)=>s+Math.random()*(e-s),mc=s=>s[Math.floor(Math.random()*s.length)];function Qf(s,e,t){const n=t?Zb(nl(s)[0],nl(e)):1,i=(3+s.lvl*1.15+Ze[s.f].stage*2)*(t?1.3:1)*n*RS(.85,1.1);return{d:Math.max(1,Math.round(i*.55)),k:n}}function Th(s,e){const t=[];for(s.xp+=e;s.xp>=wh(s)&&s.lvl<70;){s.xp-=wh(s);const n=ns(s);s.lvl++,s.hp+=ns(s)-n,t.push({t:`${Tt(s)} er nu level ${s.lvl}! ⬆️`});const i=Ze[s.f];if(i.next!=null&&s.lvl>=i.grow){const r=Tt(s);s.f=i.next,mu(s),s.hp=ns(s),t.push({t:`✨ ${r} voksede og blev til ${Tt(s)}!`,grow:!0,mon:s})}}return t}function wp(s,e){const t=Vo(s,e),n=t?t.zone:yp[Es(s,e)],i=Math.max(2,Math.min(50,Qb(s,e))),r=c=>[].concat(c.where).includes(n)&&!c.legend,o=Ze.filter(c=>r(c)&&!c.rare);let a=mc(o.length?o:Ze.filter(c=>!c.legend&&!c.rare));Zf.has(a.line.id)&&Math.random()<.75&&(a=mc(o.filter(c=>!Zf.has(c.line.id)))||a);const l=Ze.filter(c=>c.rare&&r(c));return l.length&&Math.random()<.06&&(a=mc(l)),yl(a.i,i)}const Tp=(()=>{const s=document.createElement("canvas");s.width=s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"#ffffff"),t.addColorStop(.35,"#ffffffcc"),t.addColorStop(1,"#ffffff00"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new Sr(s);return n.colorSpace=Ct,n})(),gu=Tp;class Ep{constructor(e,t=600){this.max=t,this.n=0,this.p=new Float32Array(t*3),this.v=new Float32Array(t*3),this.c=new Float32Array(t*3),this.life=new Float32Array(t),this.age=new Float32Array(t),this.g=new Float32Array(t);const n=new Pt;n.setAttribute("position",new zt(this.p,3)),n.setAttribute("color",new zt(this.c,3)),this.alpha=new Float32Array(t),n.setAttribute("alpha",new zt(this.alpha,1)),this.mat=new Ht({transparent:!0,depthWrite:!1,blending:Zt,vertexColors:!0,uniforms:{uTex:{value:Tp},uSize:{value:70}},vertexShader:"attribute float alpha; varying float vA; varying vec3 vC; uniform float uSize; void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = uSize * (0.4 + alpha * 0.6) / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D uTex; varying float vA; varying vec3 vC; void main(){ vec4 t = texture2D(uTex, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); }"}),this.points=new $h(n,this.mat),this.points.frustumCulled=!1,e.add(this.points)}emit(e,t,n,i,{n:r=12,speed:o=2.5,up:a=1,life:l=.6,grav:c=-3,spread:h=1}={}){const u=new be(i);for(let f=0;f<r;f++){const d=this.n<this.max?this.n++:Math.floor(Math.random()*this.max),g=Math.random()*Math.PI*2,x=(Math.random()-.3)*Math.PI*.5,m=o*(.4+Math.random()*.6);this.p[d*3]=e+(Math.random()-.5)*.1*h,this.p[d*3+1]=t,this.p[d*3+2]=n+(Math.random()-.5)*.1*h,this.v[d*3]=Math.cos(g)*Math.cos(x)*m,this.v[d*3+1]=Math.abs(Math.sin(x))*m*a+a,this.v[d*3+2]=Math.sin(g)*Math.cos(x)*m,this.c[d*3]=u.r,this.c[d*3+1]=u.g,this.c[d*3+2]=u.b,this.life[d]=l*(.6+Math.random()*.6),this.age[d]=0,this.g[d]=c}}update(e){for(let n=0;n<this.n;n++){this.age[n]+=e;const i=this.age[n]/this.life[n];if(i>=1){this.alpha[n]=0;continue}this.v[n*3+1]+=this.g[n]*e,this.p[n*3]+=this.v[n*3]*e,this.p[n*3+1]+=this.v[n*3+1]*e,this.p[n*3+2]+=this.v[n*3+2]*e,this.alpha[n]=1-i}const t=this.points.geometry.attributes;t.position.needsUpdate=!0,t.color.needsUpdate=!0,t.alpha.needsUpdate=!0}clear(){this.n=0,this.alpha.fill(0),this.points.geometry.attributes.alpha.needsUpdate=!0}}class CS{constructor(e){this.scene=e,this.list=[],this.geo=new Dr(.7,1,32).rotateX(-Math.PI/2)}add(e,t,n,i,r=1){const o=new de(this.geo,new mt({color:i,transparent:!0,opacity:.9,depthWrite:!1,blending:Zt,side:Bt}));o.position.set(e,t,n),o.scale.setScalar(.1),this.scene.add(o),this.list.push({m:o,t:0,size:r})}update(e){for(const t of this.list){t.t+=e;const n=t.t/.5;t.m.scale.setScalar(.1+n*t.size),t.m.material.opacity=Math.max(0,.9*(1-n)),n>=1&&(this.scene.remove(t.m),t.m.material.dispose(),t.done=!0)}this.list=this.list.filter(t=>!t.done)}}const zn=(s,e=document)=>e.querySelector(s),Na=(s,e)=>s+Math.random()*(e-s),PS=s=>s[Math.floor(Math.random()*s.length)],IS=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),qt=3.4,ed=1.5,LS=(()=>{const s=new Cs(new Uint8Array([120,200,255]),3,1,Lr);return s.minFilter=s.magFilter=Yt,s.needsUpdate=!0,s})(),Pi=(s,e={})=>new tu({color:s,gradientMap:LS,...e});function Ap(){const s=new Je,e=new de(new Vn(.16,20,12,0,Math.PI*2,0,Math.PI/2),Pi(16726570)),t=new de(new Vn(.16,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),Pi(16777215)),n=new de(new Io(.16,.022,8,24),Pi(1710628));n.rotation.x=Math.PI/2;const i=new de(new Ln(.045,.045,.03,16),Pi(16777215));return i.rotation.x=Math.PI/2,i.position.z=.158,s.add(e,t,n,i),s.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),s}class DS{constructor(e,t){this.renderer=e,this.hooks=t;const n=this.scene=new ul;n.background=new be(10148095),n.fog=new hl(10148095,18,40),this.hemi=new iu(16777215,8038496,1.6),n.add(this.hemi);const i=new ml(16777215,2.2);i.position.set(4,9,5),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),Object.assign(i.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:30}),i.shadow.bias=-5e-4,n.add(i),this.sun=i;const r=new de(new ci(40,48).rotateX(-Math.PI/2),new ts({color:7914583}));r.receiveShadow=!0,n.add(r),this.grass=r;const o=new de(new ci(qt,64).rotateX(-Math.PI/2),new ts({color:15389338}));o.position.y=.01,o.receiveShadow=!0,n.add(o),this.sand=o,this.trees=new Je,n.add(this.trees);for(const[g,x,m]of[[qt*.32,qt*.35,16777215],[qt-.08,qt,16777215]]){const p=new de(new Dr(g,x,64).rotateX(-Math.PI/2),new mt({color:m,transparent:!0,opacity:.7}));p.position.y=.02,n.add(p)}const a=new de(new $t(2*qt-.2,.05).rotateX(-Math.PI/2),new mt({color:16777215,transparent:!0,opacity:.6}));a.position.y=.02,a.rotation.y=0,n.add(a);const l=new To(.32,0),c=Pi(12103840,{flatShading:!0});for(let g=0;g<36;g++){const x=g/36*Math.PI*2,m=new de(l,c);m.position.set(Math.cos(x)*(qt+.3),.12,Math.sin(x)*(qt+.3)),m.rotation.set(g,g*2,0),m.scale.setScalar(.8+g%3*.15),m.castShadow=!0,n.add(m)}const h=["naturepack:TreeR1","naturepack:TreeRC2","treepack:SM_FreeTree_02","naturepack:TreeR3","treepack:SM_FreeTree_06"].filter(g=>fn[g]),u=Pi(6076488,{flatShading:!0}),f=Pi(9067060);for(let g=0;g<30;g++){const x=g/30*Math.PI*2+.2,m=qt+3+g%3*1.4;if(Math.sin(x)>-.15)continue;const p=new Je;if(h.length){const S=fn[h[g%h.length]],b=3+g%3*.5;for(const M of S.parts){const P=new de(M.geo,M.mat);P.scale.setScalar(b),p.add(P)}}else{const S=new de(new Ln(.15,.22,1.2,6),f);S.position.y=.6;const b=new de(new Qh(.9,1),u);b.position.y=1.7,p.add(S,b)}p.position.set(Math.cos(x)*m,0,Math.sin(x)*m),p.scale.setScalar(1+g%4*.2),p.traverse(S=>{S.castShadow=!0}),this.trees.add(p)}this.flags=[];for(let g=0;g<6;g++){const x=g/6*Math.PI*2+Math.PI/6;if(Math.sin(x)>.1)continue;const m=new Je,p=new de(new Ln(.04,.04,2.2,6),Pi(16777215));p.position.y=1.1;const S=new de(new $t(.7,.42,6,1),Pi([16734810,3842303,16765498][g%3],{side:Bt}));S.position.set(.36,1.95,0),m.add(p,S),m.position.set(Math.cos(x)*(qt+1.1),0,Math.sin(x)*(qt+1.1)),m.rotation.y=-x,this.trees.add(m),this.flags.push(S)}this.crystals=new Je,this.kelp=new Je,n.add(this.crystals,this.kelp);for(let g=0;g<16;g++){const x=g/16*Math.PI*2+.1;if(Math.sin(x)>.2)continue;const m=qt+1.2+g%3*.9,p=[3856639,12606207,3866560][g%3],S=new de(new Po(.35+g%4*.12),new Gn({color:p,emissive:p,emissiveIntensity:1.3,roughness:.3}));S.scale.y=2.4,S.position.set(Math.cos(x)*m,.5,Math.sin(x)*m),S.rotation.z=(g%5-2)*.15,this.crystals.add(S)}const d=new ts({color:3836474,side:Bt});for(let g=0;g<26;g++){const x=g/26*Math.PI*2;if(Math.sin(x)>.2)continue;const m=qt+.8+g%4*.8,p=new de(new $t(.35,3+g%3,1,6).translate(0,1.6,0),d);p.position.set(Math.cos(x)*m,0,Math.sin(x)*m),p.rotation.y=x,this.kelp.add(p)}this.particles=new Ep(n),this.rings=new CS(n),this.tex={},this.cam=new Qt(42,1,.1,100),this.ball=Ap(),this.ball.scale.setScalar(1.6),this.ball.visible=!1,n.add(this.ball),this.shotGeo=new Vn(.24,14,10),this.el=zn("#bt"),this.B=null}resize(e,t){this.cam.aspect=e/t;const n=Ms.degToRad(this.cam.fov),i=2*Math.atan(Math.tan(n/2)*this.cam.aspect),r=Math.max((qt+.3)/Math.tan(i/2),(qt+1.2)/Math.tan(n/2));this.cam.position.set(0,r*.62,r*.8),this.cam.lookAt(0,.2,.5),this.cam.updateProjectionMatrix()}setSky(e){this.skyMesh=e,e.renderOrder=-10,e.frustumCulled=!1,this.scene.add(e)}theme(e){const t={cave:[658452,3816010,5920360,8425664,.55,10535167,1.1],sea:[674426,2779762,14207120,8048895,1,10150143,1.7],mountain:[12114160,14212320,11049600,16777215,1.5,16777215,2.2],swamp:[5400654,10530944,13154456,13164720,1.2,16771264,1.7],high:[12901104,16777215,14212320,15398143,1.5,16777215,2.2],crystal:[460047,6973584,9078960,8417472,.6,12624127,1.1],volcano:[4857880,12101792,8022632,16751216,1,16752752,1.9],sky:[10146047,12120232,16777215,16777215,1.5,16774368,2.2]}[e]||[10148095,7914583,15389338,16777215,1.6,16777215,2.2];this.scene.background.setHex(t[0]),this.scene.fog.color.setHex(t[0]),this.scene.fog.near=["cave","sea","crystal","swamp","volcano"].includes(e)?9:18,this.grass.material.color.setHex(t[1]),this.sand.material.color.setHex(t[2]),this.hemi.color.setHex(t[3]),this.hemi.intensity=t[4],this.sun.color.setHex(t[5]),this.sun.intensity=t[6],this.trees.visible=!["cave","sea","crystal","volcano"].includes(e),this.crystals.visible=e==="cave"||e==="crystal",this.kelp.visible=e==="sea"||e==="swamp";const n=(l,c)=>{const h=l+c;if(!this.tex[h]){const u=new nu().load(new URL(`./tex/${l}_diff.jpg`,document.baseURI).href);u.wrapS=u.wrapT=is,u.repeat.set(c,c),u.colorSpace=Ct,u.anisotropy=4,this.tex[h]=u}return this.tex[h]},i={cave:"cave",sea:"seabed",mountain:"moss",forest:"forest",swamp:"mud",high:"snow",crystal:"cave",volcano:"ashrock",sky:"grass"}[e]||"grass",r={cave:"cave",sea:"sand",mountain:"cliff",crystal:"marble",volcano:"darkrock",sky:"marble",high:"path"}[e]||"path";this.grass.material.map=n(i,26),this.sand.material.map=n(r,3),this.grass.material.needsUpdate=this.sand.material.needsUpdate=!0,(!e||e==="meadow"||e==="town"||e==="shore")&&this.grass.material.color.setHex(11067504),e==="forest"&&this.grass.material.color.setHex(16777215),["cave","sea","mountain","crystal","volcano","high","sky","swamp"].includes(e)||this.sand.material.color.setHex(16773328);const o=this.hooks.look?.(),a=!!o?.out&&!["cave","sea","crystal"].includes(e);if(this.skyMesh&&(this.skyMesh.visible=a),a){const l=o.night,c=o.gold;this.scene.background.copy(o.hor),this.scene.fog.color.copy(o.hor),this.hemi.color.lerp(new be(16767152),c*.5).lerp(new be(9083608),l*.8),this.hemi.intensity*=1-.3*l,this.sun.color.lerp(new be(16754784),c).lerp(new be(11059455),l),this.sun.intensity*=1-.5*l}}start(e,t,n={}){this.opts=n,this.result={win:!1,caught:!1},this.theme(n.zone);const i=this.el;i.hidden=!1,i.innerHTML=`<div class="atop"><div class="card" id="cMe"></div><div class="card" id="cFoe"></div></div><div class="bfill"></div><div class="msg" id="bMsg"></div>
      <div class="acts" id="bActs"><button class="btn b" id="aBall"></button><button class="btn w" id="aRun">🏃 Løb</button></div>`;const r=(o,a,l,c)=>{const h=this.spawn(o);return h.root.position.set(a,0,l),h.root.rotation.y=c,{mon:o,h,x:a,z:l,yaw:c,hurt:0,st:"wait",stT:.8,dash:0,dx:0,dz:0,hitDone:!1,cdHit:.5,cdShot:1.4,tx:a,tz:l,speed:0,gone:!1}};this.B={me:r(e,-1.5,.9,.8),foe:r(t,1.5,-.9,-2.4),shots:[],catching:null,over:!1,ballCd:0,t:0,pops:[]},this.B.foe.stT=1.3,zn("#aBall").onclick=()=>this.throwBall(),this.B.down=!1,zn("#aRun").onclick=()=>{!this.B||this.B.over||(Qe.tap(),this.B.over=!0,this.msg("Du løb væk. Pyha!",!0),this.end(700))},this.paint(),Qa("battle"),this.msg(n.guard?`${n.guard.name} ${Tt(t)} vil kæmpe! Kom så, ${Tt(e)}!`:`En vild ${Tt(t)} sprang frem! ${Tt(e)} kæmper. Når den er besejret, kan du fange den.`,!0)}spawn(e){const t=xl(e.f);return t.root.scale.multiplyScalar(ed),t.height*=ed,this.scene.add(t.root),t}card(e,t){return`<small class="who">${t}</small><b>${IS(Tt(e))}</b><span class="lv">Lv ${e.lvl}</span> ${nl(e).map(n=>Yi[n].icon).join("")}${this.hooks.hpBar(e)}`}paint(){const e=this.B;if(!e)return;zn("#cFoe").innerHTML=this.card(e.foe.mon,this.opts.guard?"VOGTER":"VILD"),zn("#cMe").innerHTML=this.card(e.me.mon,"DIN");const t=zn("#aBall");t&&(t.innerHTML=e.down?`🔴 Fang den! (${Z.balls})`:"🔴 Besejr den først")}msg(e,t){const n=zn("#bMsg");n&&(n.textContent=e),t&&Ps(e)}pop(e,t,n){const i=new I(e.x,e.h.height+.4,e.z).project(this.cam),r=document.createElement("div");r.className="dmg",r.textContent=t,r.style.color=n,r.style.left=(i.x*.5+.5)*innerWidth+"px",r.style.top=(-i.y*.5+.5)*innerHeight+"px",document.body.appendChild(r),setTimeout(()=>r.remove(),900)}hurt(e,t,n,i){const r=e.mon;r.hp=Math.max(0,r.hp-t),e.hurt=.7,e.h.flash();const o=e.h.height*.5;this.particles.emit(e.x,o,e.z,n>1?16765498:i,{n:n>1?26:14,speed:3}),this.rings.add(e.x,.05,e.z,i,n>1?2.4:1.6),this.pop(e,n>1?`-${t} 💪`:`-${t}`,n>1?"#ffd23a":n<1?"#cfd8dc":"#ffffff"),(n>1?Qe.big:Qe.hit)(),this.paint(),e===this.B.me&&Gt()}throwBall(){const e=this.B;if(!e||!e.down||e.catching||e.throw||e.ballCd>0){e&&!e.down&&(Qe.bad(),this.msg("Først skal den besejres – så kan du fange den!",!0));return}if(Z.balls<=0){Qe.bad(),this.msg("Du har ingen kugler. Find dem i græsset, eller gå til hjertehuset.",!0);return}Z.balls--,Gt(),this.paint(),Qe.ball(),e.ballCd=1.2;const t=new I(-.6,1.4,qt+.6);e.throw={t:0,from:t,f:e.foe},this.ball.visible=!0,this.ball.position.copy(t),this.msg("Du kaster en kugle! 🔴")}think(e,t,n){const i=this.B,r=2.2+Math.max(-.3,Math.min(.6,(e.mon.lvl-t.mon.lvl)*.05)),o=()=>{const l=Math.hypot(e.x,e.z),c=qt-.7;return l>c?(e.x*=c/l,e.z*=c/l,!0):!1};e.cdHit-=n,e.cdShot-=n,e.stT-=n,e.speed=0;const a=(l,c)=>{e.yaw=Math.atan2(l-e.x,c-e.z)};if(e.dash>0){if(e.dash-=n,e.x+=e.dx*r*3*n,e.z+=e.dz*r*3*n,e.speed=r*3,o()&&(e.dash=0),!e.hitDone&&t.hurt<=0&&Math.hypot(t.x-e.x,t.z-e.z)<1.25){e.hitDone=!0,e.dash=0;const{d:l,k:c}=Qf(e.mon,t.mon,!1);this.hurt(t,e===i.me?l:Math.max(1,Math.round(l*.8)),c,16777215),t.x+=e.dx*.6,t.z+=e.dz*.6,t.st==="wind"&&(t.st="wait",t.stT=.5)}return}if(t.st==="wind"&&e.st!=="dodge"&&Math.random()<(e===i.me?2.2:1.2)*n){const l=Math.atan2(t.z-e.z,t.x-e.x)+(Math.random()<.5?1.57:-1.57);e.st="dodge",e.stT=.35,e.dx=Math.cos(l),e.dz=Math.sin(l),e.h.hop()}if(e.st==="dodge"){e.x+=e.dx*r*2*n,e.z+=e.dz*r*2*n,e.speed=r*2,o(),e.stT<=0&&(e.st="wait",e.stT=.2);return}if(e.st==="wind"){if(a(t.x,t.z),e.stT<=0){const l=Math.atan2(t.z-e.z,t.x-e.x);if(e.kind==="dash")e.dash=.4,e.dx=Math.cos(l),e.dz=Math.sin(l),e.hitDone=!1,e.cdHit=1.1,e.h.attack();else{const c=nl(e.mon)[0],h=Yi[c].col,u=new de(this.shotGeo,new mt({color:h})),f=new fl(new zo({map:gu,color:h,transparent:!0,blending:Zt,depthWrite:!1}));f.scale.setScalar(.9),u.add(f),u.position.set(e.x,e.h.height*.5,e.z),this.scene.add(u),i.shots.push({m:u,vx:Math.cos(l)*5,vz:Math.sin(l)*5,from:e,to:t,ty:c,t:1.6}),e.cdShot=2.4,Qe.shoot(),e.h.attack()}e.st="wait",e.stT=Na(.3,.7)}return}if(e.st==="wait"&&e.stT<=0){e.st="walk",e.stT=Na(.6,1.3);const l=Math.atan2(e.z-t.z,e.x-t.x)+Na(-.9,.9),c=Na(1.5,2.6);e.tx=t.x+Math.cos(l)*c,e.tz=t.z+Math.sin(l)*c}if(e.st==="walk"){const l=e.tx-e.x,c=e.tz-e.z,h=Math.hypot(l,c);if(h>.08&&(e.x+=l/h*r*.75*n,e.z+=c/h*r*.75*n,e.speed=r*.75,a(e.tx,e.tz)),o(),e.stT<=0||h<=.08){const u=Math.hypot(t.x-e.x,t.z-e.z)<2.4;e.cdShot<=0&&(!u||Math.random()<.4)?(e.st="wind",e.kind="shoot",e.stT=e===i.me?.4:.7):e.cdHit<=0?(e.st="wind",e.kind="dash",e.stT=e===i.me?.35:.65):(e.st="wait",e.stT=.2)}}}update(e,t){const n=this.B;if(!n)return;n.t+=e,n.ballCd=Math.max(0,n.ballCd-e);for(const r of[n.me,n.foe])r.hurt=Math.max(0,r.hurt-e);for(const r of this.flags){const o=r.geometry.attributes.position;for(let a=0;a<o.count;a++){const l=o.getX(a)+.35;o.setZ(a,Math.sin(t*6+l*6)*.06*l)}o.needsUpdate=!0}if(n.throw){const r=n.throw;r.t+=e/.65;const o=Math.min(1,r.t),a=r.f,l=new I(a.x,a.h.height*.55,a.z);this.ball.position.lerpVectors(r.from,l,o),this.ball.position.y+=Math.sin(o*Math.PI)*1.6,this.ball.rotation.x+=e*14,o>=1&&(n.throw=null,this.startCatch())}if(n.catching)this.catchStep(e);else if(!n.over){this.think(n.me,n.foe,e),this.think(n.foe,n.me,e);for(const r of n.shots){r.m.position.x+=r.vx*e,r.m.position.z+=r.vz*e,r.t-=e,this.particles.emit(r.m.position.x,r.m.position.y,r.m.position.z,Yi[r.ty].col,{n:1,speed:.4,up:.2,life:.35,grav:0});const o=r.to;if(!o.gone&&Math.hypot(o.x-r.m.position.x,o.z-r.m.position.z)<.8&&(r.t=0,o.hurt<=0)){const{d:a,k:l}=Qf(r.from.mon,o.mon,!0);this.hurt(o,r.from===n.me?a:Math.max(1,Math.round(a*.8)),l,Yi[r.ty].col),r.from===n.me&&l>1?this.msg(`${Yi[r.ty].move}! Det var supergodt! 💪`,!0):r.from===n.me&&l<1&&this.msg(`${Yi[r.ty].move} virkede ikke så godt…`)}}for(const r of n.shots)(r.t<=0||Math.hypot(r.m.position.x,r.m.position.z)>qt+1)&&(this.scene.remove(r.m),r.m.material.dispose(),r.dead=!0);n.shots=n.shots.filter(r=>!r.dead),n.foe.mon.hp<=0&&!n.over?this.foeDown():n.me.mon.hp<=0&&!n.over&&this.meDown()}for(const r of[n.me,n.foe]){if(!r.h)continue;r.h.root.position.set(r.x,0,r.z);let o=r.yaw-r.h.root.rotation.y;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;r.h.root.rotation.y+=o*Math.min(1,e*10),r.h.root.visible=r.hurt<=0||Math.floor(r.hurt*20)%2===0,r.st==="wind"&&this.particles.emit(r.x,.1,r.z,r===n.me?6221962:16730682,{n:1,speed:1.2,up:.6,life:.4,grav:0}),r.h.tick(e,r.speed,t)}if(n.downT!=null){n.downT+=e;const r=n.foe;r.h.root.rotation.z=Math.min(1.4,n.downT*3),r.h.root.position.y=-Math.min(.3,n.downT*.4),n.catching||r.h.root.scale.setScalar(r.base)}this.particles.update(e),this.rings.update(e),this.cam.position.x=Math.sin(t*.25)*.6,this.cam.lookAt(0,.2,.5);const i=zn("#aBall");i&&(i.style.opacity=!n.down||n.catching||n.throw||n.ballCd>0||!Z.balls?.55:1)}startCatch(){const e=this.B,t=e.foe,n=Ze[t.mon.f];t.mon.hp/ns(t.mon);const i=Math.max(.3,Math.min(.92,.8-(n.legend?.25:0)-(n.rare?.1:0)-Math.max(0,t.mon.lvl-e.me.mon.lvl)*.02));e.catching={t:0,ok:Math.random()<i,wob:0},this.particles.emit(t.x,t.h.height*.5,t.z,16777215,{n:30,speed:2.5}),this.msg("Kuglen ramte! Den rokker…"),Qe.click();for(const r of e.shots)this.scene.remove(r.m);e.shots=[]}catchStep(e){const t=this.B,n=t.catching,i=t.foe;n.t+=e;const r=Math.max(0,1-n.t*4);i.h.root.scale.setScalar((i.base||=i.h.root.scale.x)*r),i.h.root.visible=r>.02;const o=.26;this.ball.position.y+=(o-this.ball.position.y)*Math.min(1,e*8),this.ball.position.x=i.x,this.ball.position.z=i.z;const a=n.t>.5&&n.t<2.3?Math.sin((n.t-.5)*10.5)*.5*(Math.floor((n.t-.5)/.6)%2===0?1:.6):0;this.ball.rotation.set(0,0,a);const l=[.8,1.4,2];for(const c of l)n.t>c&&!n["k"+c]&&(n["k"+c]=1,Qe.click());if(n.t>2.4&&!n.done)if(n.done=!0,n.ok){Qe.win(),mu(i.mon),i.mon.hp=ns(i.mon),this.result.caught=!0,t.down=!1;for(let h=0;h<3;h++)this.particles.emit(i.x,.4,i.z,[16765498,16777215,6221962][h],{n:16,speed:3,up:2});const c=Z.team.length<6?(Z.team.push(i.mon),"på dit hold"):(Z.box.push(i.mon),"i kassen");Gt(),this.hooks.refresh(),this.showMsgs([{t:`Hurra! Du fangede ${Tt(i.mon)}! 🎉`},{t:`${Tt(i.mon)} er nu ${c}.`}],()=>this.end(300))}else t.catching=null,Qe.bad(),this.ball.visible=!1,i.h.root.scale.setScalar(i.base),i.h.root.visible=!0,this.paint(),this.particles.emit(i.x,.3,i.z,16730682,{n:24,speed:3}),this.rings.add(i.x,.05,i.z,16777215,2),this.msg(PS([`Åh nej, ${Tt(i.mon)} slap fri! Prøv igen.`,"Næsten! Prøv igen.","Den hoppede ud af kuglen! Kast igen."])+(Z.balls?"":" Du har ingen kugler mere."),!0)}foeDown(){const e=this.B;e.over=!0,Qe.win(),Z.wins++,this.result.win=!0;const t=e.foe;t.base=t.h.root.scale.x,e.downT=0;for(const a of e.shots)this.scene.remove(a.m);e.shots=[],this.particles.emit(t.x,t.h.height*.5,t.z,16765498,{n:36,speed:3.5,up:2});const n=Math.round(t.mon.lvl*5+8)*(this.opts.guard?2:1),i=[{t:`Du vandt! ${Tt(e.me.mon)} får ${n} point.`},...Th(e.me.mon,n)];for(const a of Z.team)a!==e.me.mon&&a.hp>0&&Th(a,Math.round(n/2));Gt();const r=this.opts.guard;if(!(!r||r.boss)){this.showMsgs(i,()=>this.end(300));return}this.showMsgs(i,()=>{if(!this.B)return;e.down=!0,this.paint();const a=zn("#bActs");a.style.visibility="visible",zn("#aRun").innerHTML="👋 Videre",zn("#aRun").onclick=()=>{!this.B||e.catching||e.throw||(Qe.tap(),this.end(200))},this.msg(Z.balls?`${Tt(t.mon)} er besejret! Kast en kugle for at fange den 🔴`:`${Tt(t.mon)} er besejret! Du har ingen kugler – find dem i græsset.`,!0)})}meDown(){const e=this.B,t=Z.team.find(n=>n.hp>0);t?(this.msg(`${Tt(e.me.mon)} er træt. Kom så, ${Tt(t)}!`,!0),this.scene.remove(e.me.h.root),e.me.h.dispose(),e.me.mon=t,e.me.h=this.spawn(t),e.me.hurt=1.2,e.me.st="wait",e.me.stT=.6,this.particles.emit(e.me.x,.5,e.me.z,16777215,{n:20}),this.paint()):(e.over=!0,this.msg("Alle dine figurer er trætte. I går hjem til hjertehuset 💖",!0),setTimeout(()=>{this.end(0),this.hooks.heal(!0)},1800))}showMsgs(e,t){const n=zn("#bActs");n&&(n.style.visibility="hidden");const i=()=>{if(!this.B)return;if(!e.length){t();return}const r=e.shift();if(this.msg(r.t,!0),r.grow&&r.mon===this.B.me.mon){Qe.grow();const o=this.B.me;for(let a=0;a<4;a++)setTimeout(()=>this.B&&this.particles.emit(o.x,.6,o.z,16777215,{n:20,speed:2.5,up:1.5}),a*180);setTimeout(()=>{this.B&&(this.scene.remove(o.h.root),o.h.dispose(),o.h=this.spawn(o.mon),o.h.hop(),this.rings.add(o.x,.05,o.z,16777215,3),this.paint())},700)}setTimeout(i,r.grow?2400:1500)};i()}end(e){setTimeout(()=>{const t=this.B;if(t){for(const n of[t.me,t.foe])n.h&&(this.scene.remove(n.h.root),n.h.dispose());for(const n of t.shots)this.scene.remove(n.m);this.ball.visible=!1,this.particles.clear(),this.B=null,this.el.hidden=!0,this.el.innerHTML="",Qa("world"),this.hooks.onEnd(this.result,this.opts)}},e)}render(){this.renderer.render(this.scene,this.cam)}}const il=420;function US(s){const e=Ms.smoothstep,t=e(s,.6,.72)*(1-e(s,.9,.99)),n=Math.max(e(s,.48,.6)*(1-e(s,.62,.7)),e(s,.88,.94)*(1-e(s,.96,1))),i=s<.66?Ms.lerp(.35,Math.PI-.22,s/.66):Ms.lerp(.25,Math.PI-.25,(s-.66)/.34),r=Math.sin(i)*(s<.66?.95:.8),o=new I(Math.cos(i),Math.max(.12,r),.45).normalize();return{night:t,gold:n,dir:o}}function NS(){const s={uTime:{value:0},uNight:{value:0},uGold:{value:0},uCloud:{value:.6},uAurora:{value:.5},uSunDir:{value:new I(.4,.7,-.5).normalize()},uMoonDir:{value:new I(-.35,.55,-.75).normalize()},uTop:{value:new be(4889320)},uHor:{value:new be(13626111)}},e=new Ht({uniforms:s,side:en,depthWrite:!1,depthTest:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`
      uniform float uTime, uNight, uGold, uCloud, uAurora; uniform vec3 uSunDir, uMoonDir, uTop, uHor;
      varying vec3 vD;
      float hash(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
      float hash2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(hash2(i), hash2(i+vec2(1,0)), f.x), mix(hash2(i+vec2(0,1)), hash2(i+vec2(1,1)), f.x), f.y); }
      float fbm(vec2 p){ float c = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { c += vnoise(p) * a; p *= 2.07; a *= 0.5; } return c; }
      void main(){
        vec3 d = normalize(vD); float y = max(d.y, 0.0);
        vec3 col = mix(uHor, uTop, pow(y, 0.5));
        // a warm glow around the sun (strong in the golden hour)
        float s = max(dot(d, uSunDir), 0.0);
        col += vec3(1.0, 0.62, 0.3) * pow(s, 6.0) * (0.15 + uGold * 0.6) * (1.0 - uNight);
        col += vec3(1.0, 0.95, 0.85) * (smoothstep(0.9985, 0.9992, s) * 2.5 + pow(s, 200.0) * 0.6) * (1.0 - uNight);
        // soft clouds drifting by, lit gold in the evening and silver under the moon
        if (d.y > 0.0) {
          vec2 cp = d.xz / (d.y + 0.18) * 1.6 + vec2(uTime * 0.012, uTime * 0.005);
          float c = smoothstep(0.48, 0.8, fbm(cp)) * uCloud * smoothstep(0.0, 0.2, d.y);
          vec3 cc = mix(vec3(1.0), vec3(1.0, 0.72, 0.55), uGold); cc = mix(cc, vec3(0.32, 0.38, 0.58), uNight);
          col = mix(col, cc, c * 0.85);
        }
        // night: stars, the milky way, the moon and a soft aurora
        if (uNight > 0.01) {
          vec3 sp = d * 200.0; vec3 cell = floor(sp); float h = hash(cell);
          if (h > 0.982) { vec3 c = cell + 0.5 + (vec3(hash(cell + 1.3), hash(cell + 2.7), hash(cell + 4.1)) - 0.5) * 0.7;
            float st = 1.0 - smoothstep(0.0, 0.12 + (h - 0.982) * 8.0, length(sp - c));
            float tw = 0.6 + 0.4 * sin(uTime * (1.5 + h * 6.0) + h * 40.0);
            col += vec3(0.9 + h * 0.1, 0.92, 1.0) * st * tw * smoothstep(0.0, 0.25, d.y) * uNight * 1.5; }
          float band = exp(-pow(dot(d, normalize(vec3(0.5, 0.75, 0.42))) * 4.0, 2.0));
          col += vec3(0.07, 0.07, 0.13) * band * (0.5 + vnoise(d.xz * 8.0 + d.y * 3.0)) * smoothstep(0.0, 0.3, d.y) * uNight;
          float m = dot(d, uMoonDir);
          col += vec3(0.98, 0.97, 0.9) * smoothstep(0.9988, 0.9991, m) * uNight * 1.4;
          col += vec3(0.4, 0.5, 0.75) * pow(max(m, 0.0), 80.0) * 0.5 * uNight;
          if (d.y > 0.02) {
            float az = atan(d.x, d.z), a = 0.0;
            for (int k = 0; k < 3; k++) { float fk = float(k);
              float wave = sin(az * (3.0 + fk) + sin(az * 2.0 + uTime * 0.13 + fk) * 1.6 + uTime * (0.05 + fk * 0.02));
              float curtain = pow(0.5 + 0.5 * wave, 5.0) * (0.6 + 0.4 * vnoise(vec2(az * 18.0 + fk * 7.0, uTime * 0.4)));
              float lo = 0.12 + fk * 0.06; a += curtain * smoothstep(lo, lo + 0.08, d.y) * (1.0 - smoothstep(lo + 0.15, lo + 0.55, d.y)); }
            col += mix(vec3(0.1, 1.0, 0.55), vec3(0.6, 0.35, 1.0), smoothstep(0.2, 0.6, d.y)) * a * uAurora * 0.5 * uNight;
          }
        }
        col = mix(col, uHor, smoothstep(0.03, -0.08, d.y));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),t=new de(new Vn(100,40,20),e);return t.frustumCulled=!1,t.renderOrder=-10,{mesh:t,U:s}}function kS(s,e=260){const t=new Float32Array(e*3),n=new Float32Array(e);for(let l=0;l<e;l++)t[l*3]=Math.random(),t[l*3+1]=Math.random(),t[l*3+2]=Math.random(),n[l]=Math.random();const i=new Pt;i.setAttribute("position",new zt(t,3)),i.setAttribute("seed",new zt(n,1));const r={uTime:{value:0},uCenter:{value:new I},uBox:{value:new I(26,7,26)},uVel:{value:new I(.1,.05,.05)},uWobble:{value:.6},uColor:{value:new be(14221168)},uColor2:{value:new be(16769152)},uSize:{value:60},uBlink:{value:1},uAmount:{value:0},uTex:{value:s},uLow:{value:.1}},o=new Ht({uniforms:r,transparent:!0,depthWrite:!1,blending:Zt,fog:!1,vertexShader:`uniform float uTime, uWobble, uSize, uBlink, uAmount, uLow; uniform vec3 uCenter, uBox, uVel; attribute float seed; varying float vA; varying float vS;
      void main(){
        vec3 p = position * uBox + uVel * uTime * (0.6 + seed * 0.8);
        p += vec3(sin(uTime * 0.7 + seed * 40.0), sin(uTime * 0.9 + seed * 17.0) * 0.6, cos(uTime * 0.6 + seed * 23.0)) * uWobble;
        vec3 o = uCenter - uBox * vec3(0.5, 0.0, 0.5);
        p = o + mod(p - o, uBox); p.y += uLow;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float blink = mix(1.0, smoothstep(0.2, 1.0, sin(uTime * (1.2 + seed * 2.0) + seed * 30.0)), uBlink);
        vec3 rel = (p - uCenter) / uBox; float edge = 1.0 - smoothstep(0.3, 0.5, max(abs(rel.x), abs(rel.z)));
        vA = blink * edge * uAmount * step(seed, uAmount * 1.2); vS = seed;
        gl_PointSize = uSize * (0.6 + seed * 0.6) / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform sampler2D uTex; uniform vec3 uColor, uColor2; varying float vA; varying float vS; void main(){ vec4 t = texture2D(uTex, gl_PointCoord); if (vA < 0.01) discard; gl_FragColor = vec4(mix(uColor, uColor2, vS), t.a * vA); }"}),a=new $h(i,o);return a.frustumCulled=!1,a.renderOrder=4,{points:a,U:r}}const OS={land:[{c:16777215,c2:16774344,vel:[.35,.05,.12],wob:.5,size:34,blink:0,amt:.35,low:.2,box:7},{c:14221152,c2:16769136,vel:[.08,.04,.06],wob:.9,size:70,blink:1,amt:1,low:.15,box:5}],swamp:[{c:14221232,c2:16777215,vel:[.1,.06,.05],wob:.6,size:36,blink:.5,amt:.5,low:.1,box:6},{c:11599712,c2:8454096,vel:[.06,.04,.05],wob:1,size:75,blink:1,amt:1,low:.15,box:5}],high:[{c:16777215,c2:14741759,vel:[.4,-.9,.2],wob:.4,size:40,blink:0,amt:.9,low:0,box:12},{c:16777215,c2:13163775,vel:[.3,-.7,.15],wob:.4,size:42,blink:0,amt:.9,low:0,box:12}],volcano:[{c:16747056,c2:16765024,vel:[.15,.9,.05],wob:.5,size:44,blink:.4,amt:.9,low:0,box:8},{c:16740384,c2:16760896,vel:[.15,.9,.05],wob:.5,size:50,blink:.4,amt:1,low:0,box:8}],sky:[{c:16763112,c2:16777215,vel:[.5,.1,.2],wob:.7,size:38,blink:.3,amt:.6,low:.3,box:10},{c:13162751,c2:16771232,vel:[.2,.05,.1],wob:.7,size:55,blink:1,amt:1,low:.3,box:10}],cave:[{c:4259776,c2:8442111,vel:[.05,.12,.04],wob:.6,size:50,blink:.8,amt:.8,low:.2,box:6}],crystal:[{c:11563263,c2:8446207,vel:[.05,.15,.04],wob:.6,size:52,blink:.8,amt:.9,low:.2,box:6}],sea:[{c:12644607,c2:16777215,vel:[.05,.35,.03],wob:.3,size:30,blink:0,amt:.6,low:0,box:8}]},We=(s,e=document)=>e.querySelector(s),Ml=(s,e=document)=>[...e.querySelectorAll(s)],ti=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),bs=We("#c"),mn=new C1({canvas:bs,antialias:!0,powerPreference:"high-performance"});mn.setPixelRatio(Math.min(1.75,devicePixelRatio||1));mn.outputColorSpace=Ct;mn.shadowMap.enabled=!0;mn.shadowMap.type=fd;mn.toneMapping=kh;mn.toneMappingExposure=.9;const Rp=new Za(mn).fromScene(new vp,.04).texture,Mt=new ul;Mt.background=new be(9425151);Mt.fog=new hl(9425151,22,48);Mt.environment=Rp;Mt.environmentIntensity=.3;const Ss=new iu(14676735,5933632,1.1);Mt.add(Ss);const Sn=new ml(16773336,2.6);Sn.castShadow=!0;Sn.shadow.mapSize.set(2048,2048);Object.assign(Sn.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:50});Sn.shadow.bias=-6e-4;Sn.shadow.normalBias=.03;Mt.add(Sn,Sn.target);const Ni=new ru(16754784,0,11,1.3);Mt.add(Ni);const Xn=new rp(16767136,0,16,.85,.65,1.2);Xn.castShadow=!0;Xn.shadow.mapSize.set(1024,1024);Xn.shadow.bias=-8e-4;Xn.shadow.normalBias=.04;Mt.add(Xn,Xn.target);const Pn=new Qt(45,1,.08,140);nS();await sS();const Yn=uS(Mt),In=NS();Mt.add(In.mesh);const Eh=kS(gu);Mt.add(Eh.points);const xe=new AS(Mt),rn=new Ep(Mt,500),gc=Yn.heart,Cp=[];function Pp(s,e){const t=new _S(mn);t.addPass(new yS(s,e));const n=new Cr(new pe(256,256),.16,.55,.9);return t.addPass(n),t.addPass(new bS),Cp.push(t),t.bloom=n,t}const Oo=Pp(Mt,Pn),mi=new DS(mn,{look:()=>Ii,hpBar:Wp,refresh:yi,heal:s=>{s&&Np(),Up()},onEnd:$S});mi.scene.environment=Rp;mi.scene.environmentIntensity=.3;mi.setSky(new de(In.mesh.geometry,In.mesh.material));const FS=Pp(mi.scene,mi.cam),vu=s=>Z.team.find(e=>Ze[e.f].types.some(t=>s.includes(t))),Go=()=>vu(["fire","electric"]),Pr=()=>vu(["water"]),sl={smash:["fighting","rock"],cut:["grass","bug"],dig:["ground"],freeze:["ice"],teleport:["psychic"],blow:["flying"]},bn=s=>s==="light"?Go():s==="swim"?Pr():sl[s]?vu(sl[s]):Z.team.find(e=>(Ze[e.f].can||[]).includes(s)),rl={light:"en ild- 🔥 eller lyn-figur ⚡ til at lyse",swim:"en vand-figur 💧 til at svømme",climb:"en klatrer ⛰️ (fx Junglaben eller Klippegolemen)",fly:"en flyver 🪽 (fx Hippogriffen eller Guldgriffen)",smash:"en stærk figur 💪 (kamp 🥊 eller sten 🪨) til at knuse",cut:"en græs- 🌿 eller insekt-figur 🐛 til at hugge",dig:"en jord-figur 🟤 til at grave",freeze:"en is-figur ❄️ til at fryse",teleport:"en psykisk figur 🔮 til at teleportere",blow:"en flyve-figur 🪶 til at blæse"},Ip=[["light","🔦","Lyse"],["swim","🌊","Svømme"],["climb","⛰️","Klatre"],["fly","🪽","Flyve"],["smash","💪","Knuse"],["cut","✂️","Hugge"],["dig","⛏️","Grave"],["freeze","❄️","Fryse"],["teleport","🔮","Teleportere"],["blow","💨","Blæse"]],zS=(s,e)=>e==="light"?Ze[s.f].types.some(t=>t==="fire"||t==="electric"):e==="swim"?Ze[s.f].types.includes("water"):sl[e]?Ze[s.f].types.some(t=>sl[e].includes(t)):(Ze[s.f].can||[]).includes(e),Ah={smash:["knuser klippen","💪",10127992],cut:["hugger tornebusken væk","✂️",5949530],dig:["graver sig igennem","⛏️",11041354],freeze:["fryser lavaen til is","❄️",12577023],blow:["blæser skyen væk","💨",15263999]},Rh={smash:"En revnet klippe",cut:"Tornebuske",dig:"En jordvold",freeze:"Lavaen",blow:"En tyk sky"},BS=s=>Ze[s.f].types.includes("fire")?16754784:16773280,hr=[];function HS(){for(const t of hr)t.m.removeFromParent();hr.length=0;let s=Date.now()&65535||7;const e=()=>(s=s*16807%2147483647)/2147483647;for(let t=0;t<3e3&&hr.length<30;t++){const n=3+Math.floor(e()*(Ce-6)),i=3+Math.floor(e()*(Ce-6)),r=Ft(n,i);if(r!==L.GRASS&&r!==L.FLOWER&&r!==L.SAND||Es(n,i)===$e.TOWN)continue;const o=Ap();o.scale.setScalar(1.3),o.position.set(n+.5,.3,i+.5),Yn.groups[dt(n,i)].add(o),hr.push({m:o,x:n+.5,z:i+.5,n:1+Math.floor(e()*3)})}}const Et={on:!1,ox:0,oy:0,dx:0,dy:0,id:null},Wn={id:null,x:0,y:0};let Fo=-.12;bs.addEventListener("pointerdown",s=>{if(bt!=="world")return;if(uu(),xe.fp&&s.clientX>innerWidth/2){if(Wn.id!==null)return;Wn.id=s.pointerId,Wn.x=s.clientX,Wn.y=s.clientY;const t=We("#joy2");t.hidden=!1,t.style.left=s.clientX+"px",t.style.top=s.clientY+"px";try{bs.setPointerCapture(s.pointerId)}catch{}return}if(Et.on)return;Et.on=!0,Et.id=s.pointerId,Et.ox=s.clientX,Et.oy=s.clientY,Et.dx=Et.dy=0;const e=We("#joy");e.hidden=!1,e.style.left=s.clientX+"px",e.style.top=s.clientY+"px",e.firstChild.style.transform="";try{bs.setPointerCapture(s.pointerId)}catch{}});bs.addEventListener("pointermove",s=>{if(s.pointerId===Wn.id){const r=s.clientX-Wn.x,o=s.clientY-Wn.y;Wn.x=s.clientX,Wn.y=s.clientY,xe.yaw-=r*.0065,Fo=Math.max(-1.1,Math.min(.9,Fo-o*.005)),We("#joy2").style.left=s.clientX+"px",We("#joy2").style.top=s.clientY+"px";return}if(!Et.on||s.pointerId!==Et.id)return;let e=s.clientX-Et.ox,t=s.clientY-Et.oy;const n=Math.hypot(e,t),i=50;n>i&&(e*=i/n,t*=i/n),Et.dx=e/i,Et.dy=t/i,We("#joy").firstChild.style.transform=`translate(${e}px,${t}px)`});const bl=()=>{Et.on=!1,Et.id=null,Et.dx=Et.dy=0,We("#joy").hidden=!0,Wn.id=null,We("#joy2").hidden=!0},Lp=s=>{s.pointerId===Wn.id?(Wn.id=null,We("#joy2").hidden=!0):s.pointerId===Et.id&&(Et.on=!1,Et.id=null,Et.dx=Et.dy=0,We("#joy").hidden=!0)};bs.addEventListener("pointerup",Lp);bs.addEventListener("pointercancel",Lp);const xn=new Set;addEventListener("keydown",s=>xn.add(s.key));addEventListener("keyup",s=>xn.delete(s.key));let bt="title",td=0;function Ut(s,e=!0){const t=We("#toast");t.textContent=s,t.classList.add("on"),clearTimeout(td),td=setTimeout(()=>t.classList.remove("on"),3800),e&&Ps(s)}function VS(){const s=Z.team[0];return s?xe.riding||xe.under?Pr()||s:ss?.kind==="fly"?bn("fly")||s:ss?.kind==="climb"?bn("climb")||s:(Nt==="cave"||Nt==="crystal")&&Go()||s:null}let Dp=!1;function _i(){const s=VS();if(!s||!Dp)return;if(!qb(s.f)){vl([s.f]).then(_i);return}if(xe.follower&&xe.followerForm===s.f)return;const e=xe.follower;xe.follower=xl(s.f),xe.followerForm=s.f,e?(xe.follower.root.position.copy(e.root.position),Mt.remove(e.root),e.dispose()):xe.follower.root.position.set(xe.pos.x+1,0,xe.pos.z-.3),Mt.add(xe.follower.root)}function Up(){for(const s of Z.team)s.hp=ns(s);Z.balls<8&&(Z.balls=8),Gt(),yi(),Qe.heal(),rn.emit(xe.pos.x,.8,xe.pos.z,16743080,{n:30,speed:2,up:1.5}),Ut("💖 Alle dine figurer er friske igen!")}function Np(){const s=Z.spot||wn;As(s.x,s.z,!0)}let Nt="";const kp={land:{bg:9425151,fog:[22,48],hemi:[14676735,5933632,1.1],sun:[16773336,2.6],env:.3,exp:.9},cave:{bg:329226,fog:[2.5,13],hemi:[6320288,1052696,.16],sun:[0,0],env:.04,exp:1},sea:{bg:741248,fog:[3,21],hemi:[9099519,667728,.9],sun:[11069695,1.7],env:.22,exp:.95},swamp:{bg:5400654,fog:[9,34],hemi:[12638376,2767392,.95],sun:[16771264,1.6],env:.2,exp:.95},high:{bg:12901104,fog:[16,54],hemi:[15398143,9085112,1.3],sun:[16777215,2.5],env:.3,exp:.85},crystal:{bg:460047,fog:[2.5,14],hemi:[7364784,1050648,.2],sun:[0,0],env:.05,exp:1},volcano:{bg:4857880,fog:[10,42],hemi:[16751216,3149832,.8],sun:[16752752,2],env:.15,exp:.95},sky:{bg:10146047,fog:[34,110],hemi:[16777215,11585776,1.3],sun:[16774368,2.6],env:.35,exp:.9}},po=s=>s==="cave"||s==="crystal";function Wo(s){Nt=s;const e=kp[s];for(const t in Yn.groups)Yn.groups[t].visible=t===s;Mt.background.setHex(e.bg),Mt.fog.color.setHex(e.bg),Mt.fog.near=e.fog[0],Mt.fog.far=e.fog[1],Ss.color.setHex(e.hemi[0]),Ss.groundColor.setHex(e.hemi[1]),Ss.intensity=e.hemi[2],Sn.color.setHex(e.sun[0]||16777215),Sn.intensity=e.sun[1],Sn.castShadow=e.sun[1]>0,Mt.environmentIntensity=e.env,mn.toneMappingExposure=e.exp,Ni.intensity=0,Xn.intensity=0,Xn.castShadow=po(s),Oo.bloom.strength=po(s)?.34:s==="volcano"?.22:.14,Oo.bloom.threshold=po(s)?.7:s==="volcano"?.82:.92,In.mesh.visible=s in Ch,Ph=-1,xe.under=s==="sea",Qa("world"),_i()}const Ch={land:{top:4165600,hor:12904191,cloud:.55},swamp:{top:6261408,hor:12372656,cloud:.8},high:{top:4163296,hor:15135487,cloud:.45},volcano:{top:4860474,hor:14190430,cloud:.9,nightHor:5906980},sky:{top:5808370,hor:16769778,cloud:.35}},oi=s=>new be(s),Ai={goldTop:oi(5925560),goldHor:oi(16754792),nightTop:oi(727096),nightHor:oi(2900594),goldHemi:oi(16767152),nightHemi:oi(9083608),nightGround:oi(2633800),goldSun:oi(16751184),moon:oi(10138879)},Ii={night:0,gold:0,dir:new I(.3,.8,.5),hor:new be,out:!1};let ur=il*.06,Ph=-1;const vc=new be,tr=new be;function GS(s,e){ur=(ur+s)%il,Z.day=ur;const t=US(ur/il),n=kp[Nt],i=Nt in Ch,r=i?t.night:0,o=i?t.gold*(1-t.night):0;if(Ii.night=r,Ii.gold=o,Ii.dir.copy(t.dir),Ii.out=i,In.U.uTime.value=e,In.mesh.position.copy(Pn.position),i){const u=Ch[Nt];vc.setHex(u.top).lerp(Ai.goldTop,o*.6).lerp(Ai.nightTop,r),tr.setHex(u.hor).lerp(Ai.goldHor,o*.7).lerp(u.nightHor?oi(u.nightHor):Ai.nightHor,r),In.U.uTop.value.copy(vc),In.U.uHor.value.copy(tr),Ii.hor.copy(tr),In.U.uNight.value=r,In.U.uGold.value=o,In.U.uCloud.value=u.cloud,In.U.uSunDir.value.copy(t.dir),In.U.uMoonDir.value.copy(t.dir),Mt.background.copy(tr),Mt.fog.color.copy(tr),Mt.fog.near=n.fog[0]*(1-.3*r),Mt.fog.far=n.fog[1]*(1-.2*r),Ss.color.setHex(n.hemi[0]).lerp(Ai.goldHemi,o*.85).lerp(Ai.nightHemi,r),Ss.groundColor.setHex(n.hemi[1]).lerp(Ai.nightGround,r),Ss.intensity=n.hemi[2]*(1-.42*r),Sn.color.setHex(n.sun[0]||16777215).lerp(Ai.goldSun,o).lerp(Ai.moon,r),Sn.intensity=n.sun[1]*(1-.72*r),Mt.environmentIntensity=n.env*(1-.5*r),mn.toneMappingExposure=n.exp+r*.04+o*.05,Oo.bloom.strength=(Nt==="volcano"?.22:.14)+r*.14,Oo.bloom.threshold=(Nt==="volcano"?.82:.92)-r*.14;const f=Yn.water.material.uniforms;f.uSkyTop.value.copy(vc),f.uSkyHor.value.copy(tr),f.uSunDir.value.copy(t.dir),f.uNight.value=r;const d=xe.pos;Ni.color.setHex(16760960),Ni.distance=10,Ni.position.set(d.x,1.6+(ss?.lift||0),d.z),Ni.intensity=r*6,f.uLamp.value.set(d.x,0,d.z,r)}const a=Ms.smoothstep(r+o*.5,.15,.6);for(const u of Yn.lamps)u.set(i?a:0,e);const l=OS[Nt]||[],c=l.length>1&&r>.5?1:0,h=l[c];if(Eh.points.visible=!!h&&!xe.fp,h){const u=Eh.U;Ph!==c+Nt&&(Ph=c+Nt,u.uColor.value.setHex(h.c),u.uColor2.value.setHex(h.c2),u.uVel.value.set(...h.vel),u.uWobble.value=h.wob,u.uBlink.value=h.blink,u.uLow.value=h.low,u.uBox.value.set(24,h.box,24)),u.uSize.value=h.size*mn.getPixelRatio()*1.5,u.uTime.value=e,u.uAmount.value=h.amt*(l.length>1?Math.abs(r-.5)*2:1),u.uCenter.value.set(xe.pos.x,0,xe.pos.z)}}function As(s,e,t=!1){if(bt==="travel")return;const n=bt;bt="travel",bl();const i=We("#fade");i.classList.add("on"),setTimeout(()=>{xe.place(s,e),xe.under=dt(s,e)==="sea",Wo(dt(s,e)),_i(),xe.follower&&xe.follower.root.position.set(s+.8,0,e+.4),_n.set(0,0,0),Z.x=s,Z.z=e,Gt(),setTimeout(()=>{i.classList.remove("on"),bt=n==="travel"||n==="battle"?"world":n,rs(!0)},120)},t?10:380)}let ss=null;function Op(s){if(s.kind==="teleport"){const e=bn("teleport");Qe.meet();for(let t=0;t<4;t++)setTimeout(()=>rn.emit(xe.pos.x,.5+t*.4,xe.pos.z,13667071,{n:16,speed:2,up:2}),t*90);setTimeout(()=>As(s.to[0],s.to[1]),350),setTimeout(()=>{Ut(`${Tt(e)} teleporterer dig over! 🔮`,!1),rn.emit(s.to[0],.8,s.to[1],13667071,{n:40,speed:2.5,up:2})},900);return}if(!s.kind||s.kind==="cave"){As(s.to[0],s.to[1]),s.need&&setTimeout(()=>Ut(`${Tt(Go())} lyser vejen op! 🔦`,!1),700);return}bt="journey",bl(),ss={P:s,kind:s.kind,t:0,lift:0,phase:"go"},_i(),s.kind==="fly"&&Ut(`${Tt(bn("fly"))} flyver med dig! 🪽`,!1),s.kind==="climb"&&Ut(`${Tt(bn("climb"))} klatrer op! ⛰️`,!1),s.kind==="swim"&&(Qe.ball(),rn.emit(xe.pos.x,.2,xe.pos.z,13625599,{n:30,speed:2.5,up:2,life:.8,grav:-6}))}function WS(s,e){const t=ss,n=xe.pos,i=xe.follower,r=xe.kid.root;if(t.t+=s,t.phase==="go"){t.kind==="fly"&&i?(t.lift=Math.pow(Math.min(1,t.t/1.8),1.6)*16,i.root.position.set(n.x,t.lift,n.z),i.root.rotation.set(-.25,xe.yaw,0),i.tick(s,3,e,!0),r.position.set(n.x,t.lift+(i.top||1)*.8,n.z),xe.hero?.mixer.update(s),Math.random()<s*20&&rn.emit(n.x,t.lift,n.z,16777215,{n:2,speed:1.5,up:-1,life:.6,grav:-2})):t.kind==="climb"?(t.lift=Math.min(1,t.t/1.6)*4,r.position.set(n.x,t.lift,n.z),r.rotation.y=Math.PI,xe.hero?.mixer.update(s*1.5),i&&(i.root.position.set(n.x+.9,t.lift*.9,n.z),i.root.rotation.set(0,Math.PI,0),i.tick(s,2,e))):t.lift=0;const o=t.kind==="fly"?1.9:t.kind==="climb"?1.7:.6;if(t.t>o){t.phase="move";const a=We("#fade");a.classList.add("on"),setTimeout(()=>{const[l,c]=t.P.to;xe.place(l,c),xe.under=!1,Wo(dt(l,c)),_n.set(0,0,0),Z.x=l,Z.z=c,Gt(),t.phase=t.kind==="fly"?"land":"done",t.t=0,t.lift=t.kind==="fly"?14:0,setTimeout(()=>a.classList.remove("on"),120)},380)}}else t.phase==="land"&&i?(t.lift=Math.max(0,14*(1-t.t/1.8)),i.root.position.set(n.x,t.lift,n.z),i.root.rotation.set(.15,xe.yaw,0),i.tick(s,2,e,!0),r.position.set(n.x,t.lift+(i.top||1)*.8*(t.lift>.1?1:0),n.z),xe.hero?.mixer.update(s),t.t>1.85&&(t.phase="done")):t.phase==="land"&&(t.phase="done");t.phase==="done"&&(ss=null,bt="world",r.rotation.x=0,i&&i.root.rotation.set(0,0,0),_i(),rs(!0))}const Bi={};function XS(){for(const s of _l){if(Bi[s.id])continue;const e=Z.flags[s.id],t=Ze.findIndex(a=>a.id===s.form);if(e&&!(s.boss&&!Z.caught[t]))continue;const n=xl(t);n.root.scale.multiplyScalar(s.boss?1.7:1.35),n.root.position.set(s.x,0,s.z);const i=new de(new Dr(.9,1.15,40).rotateX(-Math.PI/2),new mt({color:s.boss?16752688:16730682,transparent:!0,opacity:.8,depthWrite:!1}));i.position.set(s.x,.04,s.z);const r=new fl(new zo({map:jS(),depthTest:!1}));r.scale.set(.7,.7,1),r.position.set(s.x,n.height*(s.boss?1.7:1.35)+.9,s.z),Yn.groups[dt(s.x,s.z)].add(n.root,i,r),n.root.rotation.y=Math.atan2(wn.x-s.x,wn.z-s.z)*0+(s.id==="forest"?0:s.id==="boss"?.8:0),Bi[s.id]={g:s,h:n,ring:i,mark:r,fi:t}}}let Qr=null;function jS(){if(Qr)return Qr;const s=document.createElement("canvas");s.width=s.height=64;const e=s.getContext("2d");return e.fillStyle="#ffd23a",e.strokeStyle="#14302a",e.lineWidth=5,e.beginPath(),e.arc(32,32,27,0,7),e.fill(),e.stroke(),e.fillStyle="#14302a",e.font="bold 44px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("!",32,34),Qr=new Sr(s),Qr.colorSpace=Ct,Qr}function xc(s){const e=Bi[s];e&&(e.h.root.removeFromParent(),e.ring.removeFromParent(),e.mark.removeFromParent(),e.h.dispose(),delete Bi[s])}const Qi=[];function ol(s,e){tS(s);const t=Yn.gates[s];if(t){if(s==="forest")e?Qi.push({t:0,f:n=>t.userData.open(n)}):t.userData.open(1);else if(s==="arch"){const n=t.userData.wall;e?Qi.push({t:0,f:i=>{n.scale.y=Math.max(.001,1-i),n.visible=i<1}}):n.visible=!1}else e?Qi.push({t:0,f:n=>{t.position.y=-n*3,n>=1&&(t.visible=!1)}}):t.visible=!1;if(e){const n=t.getWorldPosition(new I);rn.emit(n.x,1,n.z,16765498,{n:40,speed:3,up:2})}}}function Fp(){const s=Yn.gates.arch?.userData.sockets;s&&["forest","cave","sea"].forEach((e,t)=>{s[t].material.emissiveIntensity=Z.flags[e]?2:0})}function KS(){for(const s of["forest","cave","sea","swamp","high","crystal","volcano","sky"])Z.flags[s]&&ol(s,!1);Z.flags.forest&&Z.flags.cave&&Z.flags.sea&&ol("arch",!1),Fp(),qS()}function Ih(s,e){Z.cleared=Z.cleared||{},Z.cleared[s.id]=1,Mp(s),Gt();const[t,n,i]=Ah[s.kind],r=Yn.obst[s.id];Qe.ball(),Ut(`${Tt(e)} ${t}! ${n}`,!1);for(let o=0;o<6;o++)setTimeout(()=>rn.emit(s.x+(Math.random()-.5)*1.5,.6,s.z+(Math.random()-.5)*1.5,i,{n:14,speed:2.5,up:2}),o*120);r&&Qi.push({t:0,f:o=>r.open(o)}),s.treasure&&setTimeout(()=>{Z.treasures=(Z.treasures||0)+1,Z.balls+=s.treasure,Gt(),yi(),Qe.win(),rn.emit(s.x,.8,s.z,16765498,{n:40,speed:3,up:3}),Ut(`🎁 En skat! Du fik ${s.treasure} kugler. (${Z.treasures} af ${ii.filter(o=>o.treasure).length} skatte)`),setTimeout(()=>{r?.box&&(r.box.visible=!1)},2600)},1300),rs(!0)}function qS(){for(const s of ii)if(Z.cleared?.[s.id]){Mp(s);const e=Yn.obst[s.id];e&&(e.open(1),e.box&&(e.box.visible=!1))}}let mo=0;function zp(s){const e=Z.team.find(n=>n.hp>0);if(!e){Ut("Dine figurer er trætte. Find en hjertesten 💖"),mo=3;return}const t=yl(s.fi,s.g.lvl);Sp(t),Hp(e,t,{zone:Bp(),guard:s.g})}let _c=0,yc=0,nd=0,Mc=0,ka=0;const Bp=()=>{const s=Vo(xe.pos.x,xe.pos.z);return s?s.zone:yp[Es(xe.pos.x,xe.pos.z)]};function Hp(s,e,t){Qe.meet(),bl(),bt="battle",We("#toast").classList.remove("on"),We("#goal").hidden=!0;const n=We("#flash");n.classList.remove("go"),n.offsetWidth,n.classList.add("go"),We("#hud").hidden=!0,vl([e.f,...Z.team.map(i=>i.f)]).then(()=>setTimeout(()=>mi.start(s,e,t),120))}function Vp(){const s=Z.team.find(t=>t.hp>0);if(!s){Ut("Dine figurer er trætte. Find en hjertesten 💖");return}const e=wp(xe.pos.x,xe.pos.z);Sp(e),Hp(s,e,{zone:Bp()})}function $S(s={},e={}){bt="world",We("#hud").hidden=!1,yi(),_i();const t=e.guard;mo=3;const n=()=>{const i=xe.pos.x-t.x,r=xe.pos.z-t.z,o=Math.hypot(i,r)||1;for(let a=2.2;a>.4;a-=.3){const l=t.x+i/o*a,c=t.z+r/o*a;if(xe.free(l,c)){xe.place(l,c);break}}};t&&s.win&&!Z.flags[t.id]?(Z.flags[t.id]=1,Gt(),t.boss?(s.caught?xc(t.id):n(),setTimeout(t.id==="boss2"?JS:YS,600)):(xc(t.id),ol(t.id,!0),Fp(),Ut(`Du fik ${t.crystal} ${t.cname}! Vejen er åben.`),Z.flags.forest&&Z.flags.cave&&Z.flags.sea&&setTimeout(()=>{ol("arch",!0),Ut("✨ Alle tre krystaller! Krystalporten ved søen er åben.")},4200))):t&&t.boss&&s.caught?xc(t.id):t&&(n(),s.win||Ut(`${t.name} er stærk. Træn dine figurer i græsset og prøv igen!`)),rs(!0)}function YS(){Z.ended=!0,Gt(),Qe.win(),Ps("Hurra! Du har klaret Lomme-Eventyr!");const s=Ze.filter(e=>Z.caught[e.i]).length;zr(`<div class="end"><h2>🏆 Du klarede det!</h2>
    <p class="hint" style="text-align:center">Du besejrede Solfønix på bjergtoppen og samlede alle tre krystaller 🌿💎💧</p>
    <div class="trow">${Z.team.slice(0,3).map(e=>`<img src="${Is(e.f)}" alt="">`).join("")}</div>
    <p class="hint" style="text-align:center">Du har fanget <b>${s}</b> af <b>${Ze.length}</b> figurer. Kan du fange dem alle?</p>
    <button class="btn g" id="eGo">Fortsæt eventyret ▶</button></div>`);for(let e=0;e<5;e++)setTimeout(()=>rn.emit(xe.pos.x,1,xe.pos.z,[16765498,16743080,6221962][e%3],{n:30,speed:3,up:3}),e*250);We("#eGo").onclick=()=>{Qe.tap(),Ir()}}function JS(){Z.ended2=!0,Gt(),Qe.win(),Ps("Hurra! Du besejrede Stjernedragen og klarede hele Lomme-Eventyr!");const s=Ze.filter(e=>Z.caught[e.i]).length;zr(`<div class="end"><h2>🌟 Stjernedragen er besejret!</h2>
    <p class="hint" style="text-align:center">Du har rejst gennem sumpen, højlandet, krystalgrotten, vulkanen og himmeløerne – og samlet alle stenene 🐊❄️💠🔥☁️</p>
    <div class="trow">${Z.team.slice(0,3).map(e=>`<img src="${Is(e.f)}" alt="">`).join("")}</div>
    <p class="hint" style="text-align:center">Du har fanget <b>${s}</b> af <b>${Ze.length}</b> figurer.${Z.caught[Ze.findIndex(e=>e.id==="stjernedrage")]?"":" Stjernedragen venter stadig på himmeløen – kan du fange den?"}</p>
    <button class="btn g" id="eGo">Fortsæt eventyret ▶</button></div>`);for(let e=0;e<8;e++)setTimeout(()=>rn.emit(xe.pos.x,1,xe.pos.z,[16765498,10148095,16743080][e%3],{n:30,speed:3,up:3}),e*220);We("#eGo").onclick=()=>{Qe.tap(),Ir()}}const Xa=(s,e)=>{const t=Es(s,e);return t===$e.SHORE||t===$e.MOUNT};function Gp(){const s=xe.pos,e=dt(s.x,s.z),t=Z.flags,n=Math.max(0,...Z.team.map(o=>o.lvl));Ze.findIndex(o=>o.id==="solfonix");const i=o=>n<o?` (træn til level ${o})`:"",r=(o,a,l)=>e==="land"&&!Xa(s.x,s.z)&&Xa(a,l)?{t:"Gå gennem grotten mod nordvest for at komme til søen",x:12.5,z:17}:{t:o,x:a,z:l};return t.forest?t.cave?t.sea?e==="sea"?{t:"Svøm op i lyset",x:106.5,z:49.5}:e==="cave"?{t:"Gå ud af grotten til søen",x:116.5,z:2.5}:t.boss?ew(s,e,t,i):s.x>56||e!=="land"||!Xa(s.x,s.z)?r("Gå gennem Krystalporten ved søen og op på bjerget ⛰️",56.5,9.5):{t:`Besejr Solfønix på bjergtoppen 🔥${i(18)}`,x:8.5,z:6.5}:e==="sea"?{t:`Svøm hen til Hav-vogteren${i(14)}`,x:106.5,z:55}:e==="cave"?{t:"Gå ud af grotten – lyset viser vejen ud til søen",x:116.5,z:2.5}:Pr()?r("Svøm ud til hvirvlen i søen og dyk ned 🌊",fi.x,fi.z):r("Fang en vand-figur 💧 i græsset ved søen, så du kan svømme",60.5,38.5):e==="cave"?{t:`Find Grotte-vogteren dybt inde i grotten${i(11)}`,x:112.5,z:7.5}:Go()?{t:`Gå gennem skoven til grotten mod nordvest 🕳️${i(9)}`,x:12.5,z:17}:{t:"Fang en ild- 🔥 eller lyn-figur ⚡ i græsset på engen – den kan lyse i grotten",x:14.5,z:50.5}:{t:`Træn på engen, og besejr Skov-vogteren ved porten mod nord ⬆${i(7)}`,x:40.5,z:48.7}}const ZS=(s,e)=>s>=182&&e>=38&&e<=64&&dt(s,e)==="high",id={landW:{fwd:[12.5,62.5]},swamp:{fwd:[40.5,96.5],back:[8.5,146.5]},high:{fwd:[186.5,6.5],back:[128.5,73.5]},crystal:{fwd:[168.5,79.5],back:[129.5,120.5]},nest:{fwd:[190.5,46.5],back:[194.5,59.5]},volcano:{fwd:[93.5,104.5],back:[66.5,157.5]},sky:{back:[129.5,195.5]}},sd=["landW","swamp","high","crystal","nest","volcano","sky"];function rd(s,e){return e==="high"?ZS(s.x,s.z)?"nest":"high":e==="land"?Xa(s.x,s.z)?"landE":"landW":e}const QS={cut:" – der er nogle i sumpens græs",smash:" – fx Bjerggorillaen i højlandets græs",dig:" – fx Muldvarpen her i grotten",freeze:" – der er mange i højlandet",teleport:" – fx i krystalgrotten",blow:""};function ew(s,e,t,n){const i=rd(s,e),r=t.swamp?t.high?t.crystal?t.volcano?!t.sky||!t.boss2?"sky":null:"volcano":"crystal":"high":"swamp",o=Ze.findIndex(l=>l.id==="stjernedrage");if(!r)return Z.caught[o]?{t:"🏆 Du klarede hele eventyret! Kan du fange alle figurerne? 📖",x:null}:{t:"Fang Stjernedragen på den øverste himmelø!",...i==="sky"?{x:178.5,z:133.5}:bc(i,"sky")};const a={swamp:{at:"swamp",t:`Besejr Sump-vogteren for enden af sumpen 🐊${n(23)}`,x:40.5,z:101.5,need:"swim",get:["Fang en vand-figur 💧, så du kan svømme ind i sumpen",60.5,38.5]},high:{at:"high",t:`Besejr Højlands-vogteren ved stenpasset ❄️${n(28)}`,x:176.5,z:22.5,need:"climb",get:["Fang en klatrer ⛰️ i sumpen (fx Junglaben)",22.5,118.5],gat:"swamp"},crystal:{at:"crystal",t:`Find Krystal-vogteren i krystalgrotten 💠${n(32)}`,x:164.5,z:84.5,need:"light",get:["Du skal have en ild- 🔥 eller lyn-figur ⚡ til at lyse i grotten",14.5,50.5]},volcano:{at:"volcano",t:`Besejr Vulkan-vogteren ved krateret 🔥${n(36)}`,x:93.5,z:111.5,need:"fly",get:["Fang en flyver 🪽 i højlandet (fx Hippogriffen)",168.5,46.5],gat:"high"},sky:{at:"sky",t:t.sky?`Besejr Stjernedragen på den øverste ø 🌟${n(43)}`:`Besejr Himmel-vogteren ☁️${n(40)}`,x:t.sky?178.5:166.5,z:t.sky?133.5:156.5}}[r];if(i===a.at){if(r==="sky"&&s.x<141&&s.z>178)return bn("teleport")?{t:`Gå til runestenen – ${Tt(bn("teleport"))} teleporterer dig over 🔮`,x:139.5,z:185.5}:{t:`Broen er væk! Du skal have ${rl.teleport} – fx fra krystalgrotten`,x:139.5,z:185.5};const l=ii.find(c=>c.route===r&&!Z.cleared?.[c.id]);if(l){const c=bn(l.kind);return c?{t:`${Rh[l.kind]} spærrer vejen – ${Tt(c)} ${Ah[l.kind][0]} ${Ah[l.kind][1]}`,x:l.x,z:l.z}:{t:`${Rh[l.kind]} spærrer vejen! Fang ${rl[l.kind]}${QS[l.kind]}`,x:l.x,z:l.z}}return{t:a.t,x:a.x,z:a.z}}if(a.need&&!bn(a.need)){const[l,c,h]=a.get,u=rd({x:c,z:h},dt(c,h));return u===i||a.gat&&i===a.gat?{t:l,x:c,z:h}:{t:l,...bc(i,u)}}return{t:{swamp:"Svøm ind i sumpen fra dammen på engen 🌊",high:"Klatr op ad væggen for enden af sumpen ⛰️",crystal:"Gå ind i krystalgrotten bag stenpasset 💠",volcano:"Flyv fra ørnereden til vulkanen 🪽",sky:"Flyv op til himmeløerne fra opdriften ved krateret ☁️"}[r],...bc(i,a.at)}}function bc(s,e){if(s==="landE")return{x:57.5,z:31.5};if(s==="cave")return{x:92.5,z:41};if(s==="sea")return{x:106.5,z:49.5};const t=sd.indexOf(s),n=sd.indexOf(e==="landE"?"landW":e);if(t<0||n<0||t===n)return{x:null};const[i,r]=n>t?id[s].fwd:id[s].back;return{x:i,z:r}}let un=null,od="";function rs(s=!1){un=Gp();const e=We("#goal");e.hidden=bt!=="world"&&bt!=="travel",un.t!==od&&(od=un.t,e.innerHTML=`<small>Mål</small><span>${ti(un.t)}</span>`,s&&Z.started&&Ps(un.t));const t=We("#hCrys");t&&(t.textContent=["forest","cave","sea","swamp","high","crystal","volcano","sky"].filter(n=>Z.flags[n]).map(n=>_l.find(i=>i.id===n).crystal).join(""))}We("#goal").onclick=()=>{un&&Ps(un.t)};const eo=(()=>{const s=new wr;s.moveTo(0,.55),s.lineTo(.38,.05),s.lineTo(.14,.05),s.lineTo(.14,-.4),s.lineTo(-.14,-.4),s.lineTo(-.14,.05),s.lineTo(-.38,.05),s.closePath();const e=new de(new eu(s).rotateX(-Math.PI/2),new mt({color:16765498,transparent:!0,opacity:.85,depthWrite:!1,fog:!1}));return e.renderOrder=3,Mt.add(e),e})(),Sc=(()=>{const s=new Je,e=new de(new Ln(.35,.6,14,16,1,!0),new mt({color:16765498,transparent:!0,opacity:.25,blending:Zt,depthWrite:!1,side:Bt,fog:!1}));e.position.y=7;const t=new fl(new zo({map:gu,color:16769146,blending:Zt,depthWrite:!1,fog:!1}));return t.scale.setScalar(1.6),t.position.y=3.2,s.add(e,t),Mt.add(s),s.userData.star=t,s})();function tw(s){const e=xe.pos,t=un&&un.x!=null&&dt(un.x,un.z)===Nt&&bt==="world";if(Sc.visible=t,eo.visible=!1,!t)return;Sc.position.set(un.x,0,un.z),Sc.userData.star.position.y=3.2+Math.sin(s*2)*.3;const n=un.x-e.x,i=un.z-e.z;if(Math.hypot(n,i)>2.5&&!xe.fp){eo.visible=!0;const o=Math.atan2(n,i);eo.rotation.y=o+Math.PI;const a=1.25+Math.sin(s*4)*.08;eo.position.set(e.x+Math.sin(o)*a,.08+(xe.riding?.2:0),e.z+Math.cos(o)*a),eo.material.opacity=.65+Math.sin(s*4)*.2}}let to={x:0,z:0},no=0;function nw(s,e){let t=Et.dx,n=Et.dy;(xn.has("ArrowLeft")||xn.has("a"))&&(t=-1),(xn.has("ArrowRight")||xn.has("d"))&&(t=1),(xn.has("ArrowUp")||xn.has("w"))&&(n=-1),(xn.has("ArrowDown")||xn.has("s"))&&(n=1);let i;if(xe.fp){let c=0;(xn.has("ArrowLeft")||xn.has("a"))&&(c=-1),(xn.has("ArrowRight")||xn.has("d"))&&(c=1),xe.yaw-=c*s*2.4;const h=Math.abs(n)>.15?-n:0,u=Et.on&&Math.abs(Et.dx)>.25?Et.dx*.7:0,f=Math.sin(xe.yaw),d=Math.cos(xe.yaw);i=xe.update(s,f*h-d*u,d*h+f*u,e,!0)}else i=xe.update(s,t,n,e);const r=xe.pos,o=Ft(r.x,r.z);if(i>0){if(Z.x=r.x,Z.z=r.z,Mc-=i,Mc<=0&&(Mc=xe.riding?1.2:.55,xe.riding||Qe.step()),o===L.TALL){const c=Vo(r.x,r.z);if(c){const h=No.indexOf(c);(Z.vp||={})[h]||(Z.vp[h]=1,Gt())}if(_c+=i,Math.random()<i*3&&rn.emit(r.x,.3,r.z,{cave:3866560,sea:10152191,crystal:11565823,volcano:16747066,high:15267071,swamp:9091160,sky:16759008}[Nt]||6998096,{n:2,speed:1.2,up:1.5,life:.5,grav:-5}),_c>1&&(_c=0,Math.random()<.15)){Vp();return}}}else if((Math.abs(t)>.5||Math.abs(n)>.5)&&(ka-=s)<=0){const c=r.x+Math.sign(t)*.6,h=r.z+Math.sign(n)*.6,u=Ia(c,h)||Ia(c,r.z)||Ia(r.x,h);if(u&&!Z.cleared?.[u.id]){const f=bn(u.kind);if(f){Ih(u,f);return}ka=5,Ut(`${Rh[u.kind]} spærrer! Du skal have ${rl[u.kind]} på holdet.`)}else Ft(c,h)===L.WATER&&!xe.canSwim?(ka=6,Ut("Du skal have en vand-figur 💧 på holdet for at svømme.")):Ft(c,h)===L.GATE&&Es(c,h)===$e.MOUNT&&(ka=6,Ut("Krystalporten åbner, når du har alle tre krystaller 🌿💎💧"))}const a=o===L.PORTAL?eS(r.x,r.z):null;if(a){const c=[].concat(a.need||[]).filter(h=>!bn(h));if(a.id==="swamp-in"&&!Z.flags.boss)Ut("Sumpen er for farlig endnu. Besejr først Solfønix på bjerget 🔥"),xe.place(to.x,to.z);else if(c.length)Ut(`Her skal du have ${c.map(h=>rl[h]).join(" og ")} på holdet.`),xe.place(to.x,to.z);else{Qe.tap(),Op(a);return}}else to={x:r.x,z:r.z};for(const[c,h]of[[.75,0],[-.75,0],[0,.75],[0,-.75]]){const u=Ia(r.x+c,r.z+h);if(u&&!Z.cleared?.[u.id]){const f=bn(u.kind);if(f){Ih(u,f);return}}}if(Nt==="land"&&xe.riding&&Math.hypot(r.x-fi.x,r.z-fi.z)<1.1){Qe.ball(),As(fi.to[0],fi.to[1]),setTimeout(()=>Ut(`Plask! ${Tt(Pr())} dykker ned med dig 🌊`),700);return}mo-=s;for(const c in Bi){const h=Bi[c];if(mo<=0&&dt(h.g.x,h.g.z)===Nt&&Math.hypot(r.x-h.g.x,r.z-h.g.z)<1.5){mo=99,zp(h);return}}for(const c of hr)c.got||(c.m.rotation.y=e*2,c.m.position.y=.3+Math.sin(e*3+c.x)*.08,Math.hypot(c.x-r.x,c.z-r.z)<.6&&(c.got=!0,c.m.removeFromParent(),Z.balls+=c.n,Gt(),Qe.win(),rn.emit(c.x,.4,c.z,16765498,{n:20}),Ut(`Du fandt ${c.n} ${c.n>1?"kugler":"kugle"}! 🔴`),yi()));yc-=s;for(const c of ko)yc<=0&&Math.hypot(r.x-c.x,r.z-c.z)<(c.door?.9:1.3)&&(yc=5,Z.spot=c.door?{x:wn.x,z:wn.z}:{x:c.x,z:c.z+1.3},Up());gc&&(gc.rotation.y=Math.sin(e*2)*.3,gc.scale.setScalar(1.1+Math.sin(e*4)*.05));const l=xe.follower;if(l)if(no-=s,po(Nt)){const c=Go(),h=c?BS(c):16754784,u=l.root.position;Ni.color.setHex(h),Ni.position.set(u.x,(l.top||1)*.8+.4,u.z),Ni.intensity=(c?24:4)*(.92+Math.sin(e*13)*.05+Math.sin(e*7.3)*.04),Xn.color.setHex(h),Xn.intensity=c?55:0,Xn.position.set(u.x,3.2,u.z),Xn.target.position.set(r.x+Math.sin(xe.yaw)*3,0,r.z+Math.cos(xe.yaw)*3),no<=0&&c&&(no=.06,rn.emit(u.x,(l.top||1)*.7,u.z,Ze[c.f].types.includes("fire")?16742954:16771162,{n:1,speed:.5,up:.8,life:.7,grav:1}))}else xe.riding&&no<=0&&(no=xe.moving?.05:.25,Nt==="sea"?rn.emit(r.x+(Math.random()-.5)*.4,1.4,r.z,12580095,{n:1,speed:.3,up:1.2,life:1.6,grav:.6}):rn.emit(r.x-Math.sin(xe.yaw)*.7,-.05,r.z-Math.cos(xe.yaw)*.7,16777215,{n:xe.moving?3:1,speed:1,up:.6,life:.5,grav:-4}));xe.riding!==ad&&(ad=xe.riding,_i(),xe.riding&&Nt==="land"&&Ut(`Du rider på ${Tt(Pr())}! 🌊`,!1)),(nd+=s)>3&&(nd=0,Gt(),rs())}let ad=!1;const iw=new I(6,14,4).normalize(),_n=new I,nr=new I;function sw(s){const e=xe.pos,t=innerHeight>innerWidth,n=Ii.out?Ii.dir:iw;if(Sn.position.set(e.x+n.x*18,n.y*18,e.z+n.z*18),Sn.target.position.set(e.x,0,e.z),di.player.value.set(e.x,0,e.z),di.cut.value=xe.fp?0:1,xe.fp){const h=xe.kid.root.position.y,u=Math.sin(xe.yaw),f=Math.cos(xe.yaw),d=new I(e.x+u*.1,h+1.15,e.z+f*.1),g=Math.cos(Fo),x=new I(e.x+u*6*g,h+1.15+Math.sin(Fo)*6,e.z+f*6*g);(_n.lengthSq()===0||_n.distanceTo(d)>3)&&(_n.copy(d),nr.copy(x)),_n.lerp(d,Math.min(1,s*12)),nr.lerp(x,Math.min(1,s*10)),Pn.position.copy(_n),Pn.lookAt(nr),Pn.fov=62,Pn.updateProjectionMatrix();return}const i=Nt==="cave"||Nt==="crystal"||Nt==="sea",r=i?6:t?7.8:6.5,o=i?po(Nt)?7.2:6.2:t?9.2:6.5,a=ss&&ss.lift||0,l=new I(e.x,o+a+(xe.riding?.6:0),e.z+r),c=new I(e.x,.4+a,e.z+.6);_n.lengthSq()===0&&(_n.copy(l),nr.copy(c)),_n.lerp(l,Math.min(1,s*4)),nr.lerp(c,Math.min(1,s*5)),Pn.position.copy(_n),Pn.lookAt(nr),Pn.fov!==45&&(Pn.fov=45,Pn.updateProjectionMatrix())}function Wp(s){const e=Math.max(0,Math.min(1,s.hp/ns(s)));return`<div class="bar ${e<.2?"vlo":e<.5?"lo":""}"><i style="width:${Math.round(e*100)}%"></i></div>`}const Is=(s,e)=>Jb(mn,s,e),Xp=s=>Ze[s].types.map(e=>`<span class="tag">${Yi[e].icon} ${Yi[e].da}</span>`).join(" ");function yi(){We("#hBalls").textContent="🔴 "+Z.balls;const s=Z.team[0];s&&(We("#hLeadImg").src=Is(s.f)),xe.canSwim=!!Pr(),We("#hView").innerHTML=xe.fp?'<svg viewBox="0 0 24 24"><rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 10.5l5-3v9l-5-3"/></svg>':'<svg viewBox="0 0 24 24"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>'}let Lh="world";function zr(s){const e=We("#ov");e.innerHTML=`<div class="panel">${s}</div>`,e.hidden=!1,bt!=="menu"&&(Lh=bt,bt==="world"&&(bt="menu")),bl(),We("#goal").hidden=!0;const t=We(".x",e);t&&(t.onclick=()=>{Qe.tap(),Ir()})}function Ir(){We("#ov").hidden=!0,We("#ov").innerHTML="",bt==="menu"&&(bt=Lh==="menu"?"world":Lh),yi(),_i(),rs()}const rw=s=>Ip.filter(([e])=>zS(s,e)).map(([,e])=>e).join(""),ow=()=>`<div class="gifts">${Ip.map(([s,e,t])=>`<span class="${bn(s)?"on":""}"><b>${e}</b>${t}</span>`).join("")}</div>`,ld=(s,e="")=>`<div class="mon" data-id="${s.id}"><img src="${Is(s.f)}" alt=""><div class="t"><b>${ti(Tt(s))}<span class="lv">Lv ${s.lvl}</span> ${rw(s)}</b><div>${Xp(s.f)}</div>${Wp(s)}<div class="xpb"><i style="width:${Math.round(s.xp/wh(s)*100)}%"></i></div></div>${e}</div>`;function Dh(s){if(!s){vl([...Z.team,...Z.box.slice(-30)].map(t=>t.f)).then(()=>Dh(!0));return}const e=Z.box.slice(-30).reverse();zr(`<div class="ph"><h2>🎒 Mit hold</h2><button class="x">✕</button></div>
    <h3>Holdets evner</h3>${ow()}
    <p class="hint">Tryk på en figur for at sætte den forrest. Den forreste følger med dig og kæmper først. Figurernes evner står ved navnet.</p>
    ${Z.team.map((t,n)=>ld(t,n===0?'<span class="tag">⭐</span>':"")).join("")}
    ${e.length?`<h2 style="font-size:1.2rem">📦 Kassen (${Z.box.length})</h2><p class="hint">Tryk for at bytte med den forreste på holdet.</p>${e.map(t=>ld(t)).join("")}`:""}`),Ml(".mon",We("#ov")).forEach(t=>t.onclick=()=>{Qe.tap();const n=+t.dataset.id,i=Z.team.findIndex(r=>r.id===n);if(i>=0){const[r]=Z.team.splice(i,1);Z.team.unshift(r)}else{const r=Z.box.findIndex(o=>o.id===n);if(r>=0){const[o]=Z.box.splice(r,1);Z.team.length<6||Z.box.push(Z.team.shift()),Z.team.unshift(o)}}Gt(),yi(),Dh(!0)})}function cd(s){const e=[].concat(s.where),t=No.findIndex((i,r)=>e.includes(i.zone)&&Z.vp?.[r]);if(t<0)return null;const n=No[t];for(let i=n.r+.9;i<n.r+4;i+=.7)for(let r=0;r<8;r++){const o=n.x+Math.cos(r*Math.PI/4)*i,a=n.z+Math.sin(r*Math.PI/4)*i,l=Ft(o,a);if(l!==L.TALL&&l!==L.PORTAL&&xe.free(o,a)&&dt(o,a)===dt(n.x,n.z)&&!Vo(o,a))return{x:o,z:a}}return{x:n.x,z:n.z}}function jp(s){if(!s){vl(Ze.filter(r=>Z.seen[r.i]).map(r=>r.i)).then(()=>jp(!0));return}const e=Ze.filter(r=>!r.legend||Z.seen[r.i]),t=Ze.filter(r=>Z.caught[r.i]).length,n=Ze.filter(r=>Z.seen[r.i]).length,i=r=>[].concat(r.where).map(o=>({meadow:"Engen",forest:"Skoven",cave:"Grotten",shore:"Søbredden",sea:"Havet",mountain:"Bjerget",boss:"Bjergtoppen",swamp:"Sumpen",high:"Højlandet",crystal:"Krystalgrotten",volcano:"Vulkanen",sky:"Himmeløerne",boss2:"Himmeløerne"})[o]||"").join(", ");zr(`<div class="ph"><h2>📖 Figurbogen</h2><button class="x">✕</button></div>
    <p class="hint">Fanget: <b>${t}</b> · Set: <b>${n}</b> · Alle: <b>${Ze.length}</b> · Skatte: <b>${Z.treasures||0}</b> / ${ii.filter(r=>r.treasure).length} 🎁</p>
    <p class="hint" id="dexMsg">Tryk på en figur med 📍 for at rejse derhen, hvor den bor.</p>
    <div class="grid">${e.map(r=>`<div class="cell" data-f="${r.i}"><img src="${Is(r.i,!Z.seen[r.i])}" alt=""><small>${Z.caught[r.i]?"🔴 ":""}${Z.seen[r.i]?ti(r.name):"?"}</small><small style="color:var(--mute)">${cd(r)?"📍 ":"🔒 "}${Z.seen[r.i]?i(r):""}</small></div>`).join("")}</div>`),Ml(".cell",We("#ov")).forEach(r=>r.onclick=()=>{const o=Ze[+r.dataset.f],a=cd(o);if(Qe.tap(),!a){We("#dexMsg").innerHTML=o.legend?`🔒 <b>${Z.seen[o.i]?ti(o.name):"Den"}</b> bor ikke i græsset – den venter for enden af eventyret.`:`🔒 Du er ikke nået til ${Z.seen[o.i]?`<b>${ti(i(o))}</b>`:"det sted"} endnu. Spil videre, så kan du rejse derhen!`;return}Ir(),As(a.x,a.z),setTimeout(()=>Ut(`📍 Her i græsset bor ${Z.seen[o.i]?o.name:"figuren"}. Gå ind i det høje græs og se, om den dukker op!`),700)})}function aw(){const s=t=>`<div class="mon" style="display:block"><b>${ti(t.role||t.name)}</b><small class="hint">"${ti(t.title)}" af ${ti(t.author)} · <a href="${t.licenseUrl}" target="_blank" rel="noopener">${ti(t.license)}</a><br><a href="${t.url}" target="_blank" rel="noopener">${ti(t.url)}</a></small></div>`,e=[...Ze.map(t=>({...t.credit,name:t.name})),...Object.entries(xp).filter(([t])=>t.startsWith("env:")).map(([,t])=>t)];zr(`<div class="ph"><h2>📜 Tak til</h2><button class="x">✕</button></div>
    <p class="hint">Figurerne og verdenen er 3D-modeller fra Sketchfab, som deres skabere har delt med en fri licens (Creative Commons Attribution). Tak!</p>
    ${e.map(s).join("")}<p class="hint">Jordens billeder er fra Poly Haven (CC0). Spillet er lavet med three.js (MIT-licens).</p>`)}function lw(){const s=(n,i)=>`<button class="btn ${Z[n]?"g":"w"}" data-k="${n}">${i}: ${Z[n]?"Til":"Fra"}</button>`;let e=!1;const t=()=>{zr(`<div class="ph"><h2>⚙️ Indstillinger</h2><button class="x">✕</button></div>${s("sound","🔔 Lyd")}${s("music","🎵 Musik")}${s("voice","🗣️ Stemme")}
      <button class="btn w" id="sHome">💖 Gå til den sidste hjertesten</button>
      <button class="btn w" id="sTown">🏠 Gå hjem til byen</button>
      <button class="btn r" id="sReset">${e?"Tryk igen for at starte helt forfra":"🗑️ Start helt forfra"}</button>
      <p class="hint">Spillet virker uden internet. Dit spil gemmes kun på denne telefon.</p>
      <button class="btn w" id="sCred">📜 Tak til dem, der lavede figurerne</button>
      <p class="hint">Lavet med three.js (mrdoob/three.js, MIT-licens).</p>`),We("#sCred").onclick=()=>{Qe.tap(),aw()},Ml("[data-k]",We("#ov")).forEach(n=>n.onclick=()=>{Z[n.dataset.k]=!Z[n.dataset.k],Gt(),Qe.tap(),t()}),We("#sHome").onclick=()=>{Qe.tap(),Ir(),Np()},We("#sTown").onclick=()=>{Qe.tap(),Ir(),As(wn.x,wn.z)},We("#sReset").onclick=()=>{if(Qe.tap(),!e){e=!0,t();return}P1(),location.reload()}};t()}We("#hLead").onclick=()=>{bt==="world"&&(Qe.tap(),Dh())};We("#hDex").onclick=()=>{bt==="world"&&(Qe.tap(),jp())};We("#hSet").onclick=()=>{bt==="world"&&(Qe.tap(),lw())};We("#hView").onclick=()=>{bt==="world"&&(Qe.tap(),xe.fp=Z.fp=!xe.fp,Gt(),_n.set(0,0,0),yi(),Ut(xe.fp?"Nu ser du med dine egne øjne! Venstre finger: gå. Højre finger: kig rundt.":"Nu ser du ovenfra.",!1),Fo=-.12)};function cw(){const s=We("#title");s.hidden=!1,bt="title",s.innerHTML=`<small>Et eventyr med figurer</small><h1>Lomme-Eventyr</h1><em></em><div class="trow">${fu.map(e=>`<img src="${Is(e)}" alt="">`).join("")}</div>
    <button class="btn g" id="tGo" style="font-size:1.5rem;padding:16px 34px">▶ ${Z.started&&Z.team.length?"Fortsæt":"Start"}</button>
    <p class="hint">Virker uden internet. Alt gemmes kun på denne telefon.</p>`,We("#tGo").onclick=()=>{uu(),Qe.tap(),!Z.started||!Z.team.length?hw():Kp()}}function hw(){const s=We("#title");s.innerHTML=`<small>Det første valg</small><h1 style="font-size:2.2rem">Vælg din første ven</h1><em></em><div class="pick">${fu.map(e=>`<button data-f="${e}"><img src="${Is(e)}" alt="">${ti(Ze[e].name)}${Xp(e)}</button>`).join("")}</div>`,Ps("Vælg din første ven!"),Ml(".pick button",s).forEach(e=>e.onclick=()=>{Qe.win();const t=yl(+e.dataset.f,5);mu(t),Z.team=[t],Z.started=!0,Z.x=wn.x,Z.z=wn.z,Z.flags={},Z.spot=null,Gt(),Kp(),setTimeout(()=>Ut(`${Tt(t)} er din nye ven! Følg den gule pil 🎯`),400)})}function Kp(){Z.day!=null&&(ur=Z.day),We("#title").hidden=!0,We("#hud").hidden=!1,bt="world",xe.fp=!!Z.fp,yi();const s=Z.x&&xe.pass(Ft(Z.x,Z.z))&&Ft(Z.x,Z.z)!==L.PORTAL,e=s?Z.x:wn.x,t=s?Z.z:wn.z;xe.place(e,t),Wo(dt(e,t)),_n.set(0,0,0),_i(),XS(),KS(),rs(!0)}function qp(){const s=innerWidth,e=innerHeight;mn.setSize(s,e,!1),Pn.aspect=s/e,Pn.updateProjectionMatrix(),mi.resize(s,e);for(const t of Cp)t.setPixelRatio(mn.getPixelRatio()),t.setSize(s,e)}addEventListener("resize",qp);qp();let hd=performance.now();function $p(s){const e=Math.min(.05,(s-hd)/1e3);hd=s;const t=s/1e3;if(di.time.value=t,D1(e),bt==="battle"&&mi.B)mi.update(e,t),FS.render(e);else{bt==="world"?nw(e,t):bt==="journey"?WS(e,t):xe.update(e,0,0,t,xe.fp);for(const n of Yn.anim)n(t,e);for(const n of Qi)n.t=Math.min(1,n.t+e/1.6),n.f(n.t);for(let n=Qi.length-1;n>=0;n--)Qi[n].t>=1&&Qi.splice(n,1);for(const n in Bi){const i=Bi[n];i.h.tick(e,0,t),i.ring.material.opacity=.5+Math.sin(t*4)*.3,i.mark.position.y+=Math.sin(t*3)*.004}rn.update(e),sw(e),GS(e,t),tw(t),Oo.render(e)}requestAnimationFrame($p)}"serviceWorker"in navigator&&(location.protocol==="https:"||location.hostname==="localhost")&&navigator.serviceWorker.register("sw.js").catch(()=>{});xe.place(wn.x,wn.z);Wo("land");HS();Qa("world");requestAnimationFrame($p);await $b([...fu,...Z.team.map(s=>s.f),..._l.map(s=>Ze.findIndex(e=>e.id===s.form))],(s,e)=>{const t=We("#loading");t&&(t.textContent=`Henter figurer… ${s} / ${e}`)});Dp=!0;cw();We("#loading")?.remove();try{navigator.storage?.persist?.()}catch{}window.__LOMME__={teleport(s,e){xe.place(s,e),Wo(dt(s,e)),_n.set(0,0,0),rs()},travel:As,get S(){return Z},get mode(){return bt},get region(){return Nt},player:xe,battle:mi,startWild:Vp,wildFor:wp,gainXp:Th,FORMS:Ze,tileAt:Ft,T:L,HOME:wn,HOUSES:mr,MAP:yn,items:hr,setFollower:_i,guards:Bi,objective:Gp,refreshHud:yi,startGuard:zp,makeMon:yl,setDay(s){ur=s*il},get day(){return Ii},OBST:ii,useGift:Ih,canFig:bn,journey:Op};
