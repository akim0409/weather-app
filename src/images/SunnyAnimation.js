import React, {useEffect} from "react";
import { ReactComponent as Sunny } from "./sunny.svg"

const SunnyAnimation = () => {
    useEffect(() => {       
        (function(s,i,u,o,c,w,d,t,n,x,e,p,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);e=d.createElementNS(n,t);e.async=true;e.setAttributeNS(x,'href',[u,s,'.','j','s','?','v','=',c].join(''));e.setAttributeNS(null,'src',[u,s,'.','j','s','?','v','=',c].join(''));p=d.getElementsByTagName(t)[0];p.parentNode.insertBefore(e,p);})('91c80d77',{"root":"exurLjeZmEN1","version":"2022-05-04","animations":[{"elements":{"exurLjeZmEN2":{"transform":{"data":{"o":{"x":300.184822,"y":299.999874,"type":"corner"},"t":{"x":-300.184822,"y":-299.999874}},"keys":{"s":[{"t":0,"v":{"x":1,"y":1}},{"t":1500,"v":{"x":0.9,"y":0.9}},{"t":3000,"v":{"x":1,"y":1},"e":[0.42,0,0.58,1]}]}}}},"s":"MDWA1Y2MyNjlhYBmJjYjlhOGJiNSmIwYjZiNTYX5ODE3YTc3NzJc3NzczWTY5YQWJiMGI5YWNhMYWJiYjBiNmIL1Njk4MTc4NzMM2OWIwT2JiYFWNiOWE4YmJiQMGI2YjViYTYC5ODE3N1I3MzMY5YWRiMGIzYWjNCNjk4MTc4XNzM2OWE4YjNUiYmFjYjlLYjCVhOGJiYWM2OPTgxYWRhOGIzGYmFhY0s3M1QR2OWJhYjdhY2EFjYWJXNjk4MVTc4NzM2OWFkSYjdiYTY5ODEE3ZDc3YzQ/"}],"options":"MDNAxMDgySTI5NR2E3Ykg2ODc5RN2IyOUU0MUwDyOTczNzY2ODCZiMjk4NA|"},'https://cdn.svgator.com/ply/','__SVGATOR_PLAYER__','2022-05-04',window,document,'script','http://www.w3.org/2000/svg','http://www.w3.org/1999/xlink')
    }, []);

    return <Sunny className="w-44 mx-4" />
};

export default SunnyAnimation;