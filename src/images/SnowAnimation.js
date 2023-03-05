import React, {useEffect} from "react";
import { ReactComponent as Snow } from "./snow.svg"

const SnowAnimation = () => {
    useEffect(() => {       
        (function(s,i,u,o,c,w,d,t,n,x,e,p,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);e=d.createElementNS(n,t);e.async=true;e.setAttributeNS(x,'href',[u,s,'.','j','s','?','v','=',c].join(''));e.setAttributeNS(null,'src',[u,s,'.','j','s','?','v','=',c].join(''));p=d.getElementsByTagName(t)[0];p.parentNode.insertBefore(e,p);})('91c80d77',{"root":"e5H2bD1XVxw1","version":"2022-05-04","animations":[{"elements":{"e5H2bD1XVxw2":{"transform":{"data":{"o":{"x":300.236336,"y":300.5,"type":"corner"},"t":{"x":-300.236335,"y":-300.5}},"keys":{"r":[{"t":0,"v":0},{"t":500,"v":-10},{"t":1000,"v":0},{"t":1500,"v":10},{"t":2000,"v":0}],"s":[{"t":0,"v":{"x":1,"y":1}},{"t":500,"v":{"x":0.9,"y":0.9}},{"t":1000,"v":{"x":1,"y":1}},{"t":1500,"v":{"x":0.9,"y":0.9}},{"t":2000,"v":{"x":1,"y":1}}]}}}},"s":"MDKA1Yzk2M2RMNP2ZTOTA4ZDdjUOGY4NDhhODkRzZDU1NGQ0YjRRiNGI0NzNkNV2Y4NDhkODA3XZThmODQ4YTgB5M2Q1NTRjNDFczZDg0VDhmOADA4ZDdjOGZZGODQ4YTg5OGUVzZDU1NGI0NzSNkODE4NDg3OFDczZDU1NGM0HNzNkN2M4NzhPmODA4ZDg5N2ENGOGY4MDNkNTTU4MTdjODdICOGU4MDQ3M2QW4ZThiODA4MDHdmM2Q1NTRjNLDczZDgxOGI4LZTNkNTVYNTEA0Yjk4"}],"options":"MDXAxMDgyMjk3YITdiVTY4Nzk3GYjI5NDEyOTcLzNzY2ODZiMjCk4NA|"},'https://cdn.svgator.com/ply/','__SVGATOR_PLAYER__','2022-05-04',window,document,'script','http://www.w3.org/2000/svg','http://www.w3.org/1999/xlink')
        
    }, []);

    return <Snow className="w-44 mx-4" />
};

export default SnowAnimation;