import{S as rp,i as op,s as pp,C as Fl,x as Bp,y as cp,z as up,G as _p,X as tp,f as dp,t as fp,A as Ep,Y as np,l as e,u as l,m as t,p as n,v as r,h as a,r as o,q as c,b as hp,I as s,n as Ap}from"../../../../../chunks/index-0ea8b4fa.js";import{P as vp}from"../../../../../chunks/_post-83eac98a.js";function Sp(X){let u,p,v,x,f,S,Y,H,De,J,Ge,Re,O,K,ke,L,qe,M,Ue,Q,je,V,we,ze,Pe,Ie,U,W,Te,Z,Xe,ss,Ye,He,R,as,Je,es,Ke,ts,Le,ns,Me,Qe,P,ls,Ve,rs,We,os,Ze,ps,st,Bs,at,cs,et,us,tt,_s,nt,ds,lt,rt,C,fs,ot,Es,pt,hs,Bt,As,ct,vs,ut,Ss,_t,dt,Ne,ft,b,Ps,Et,Ns,ht,ys,At,is,vt,Cs,St,Pt,m,ms,Nt,gs,yt,Fs,it,xs,Ct,Os,mt,bs,gt,Ft,ye,xt,$,$s,Ot,Ds,bt,Gs,$t,Rs,Dt,ks,Gt,Rt,g,qs,kt,Us,qt,js,Ut,ws,jt,zs,wt,Is,zt,It,Ts,Xs,Tt,Xt,ie,Yt,k,Ys,Ht,Hs,Jt,Js,Kt,Ks,Lt,Mt,N,Ls,Qt,Ms,Vt,Qs,Wt,Vs,Zt,Ws,sn,Zs,an,sa,en,aa,tn,ea,nn,ln,A,ta,rn,na,on,la,pn,ra,Bn,oa,cn,pa,un,Ba,_n,ca,dn,ua,fn,_a,En,da,hn,An,_,fa,vn,Ea,Sn,ha,Pn,Aa,Nn,va,yn,Sa,Cn,Pa,mn,Na,gn,ya,Fn,ia,xn,Ca,On,ma,bn,ga,$n,Fa,Dn,xa,Gn,Oa,Rn,ba,kn,$a,qn,Un,Ce,jn,F,Da,wn,Ga,zn,Ra,In,ka,Tn,qa,Xn,Ua,Yn,Hn,d,ja,Jn,wa,Kn,za,Ln,Ia,Mn,Ta,Qn,Xa,Vn,Ya,Wn,Ha,Zn,Ja,sl,Ka,al,La,el,Ma,tl,Qa,nl,Va,ll,Wa,rl,Za,ol,se,pl,ae,Bl,cl,j,ee,ul,te,_l,ne,dl,fl,y,le,El,re,hl,oe,Al,pe,vl,Be,Sl,ce,Pl,ue,Nl,_e,yl,il,de,fe,Cl,ml,Ee,he,gl;return{c(){u=e("pre"),p=e("code"),v=e("span"),x=e("span"),f=l("use"),S=e("span"),Y=l(" avent"),H=e("span"),De=l("::"),J=e("span"),Ge=l("get_solution;"),Re=l(`
`),O=e("span"),K=e("span"),ke=l("use"),L=e("span"),qe=l(" structopt"),M=e("span"),Ue=l("::"),Q=e("span"),je=l("StructOpt"),V=e("span"),we=l(";"),ze=l(`
`),Pe=e("span"),Ie=l(`
`),U=e("span"),W=e("span"),Te=l("#[derive("),Z=e("span"),Xe=l("StructOpt"),ss=e("span"),Ye=l(")]"),He=l(`
`),R=e("span"),as=e("span"),Je=l("struct"),es=e("span"),Ke=l(" "),ts=e("span"),Le=l("Cli"),ns=e("span"),Me=l(" {"),Qe=l(`
`),P=e("span"),ls=e("span"),Ve=l("    #[structopt(help "),rs=e("span"),We=l("="),os=e("span"),Ze=l(" "),ps=e("span"),st=l('"AOC day"'),Bs=e("span"),at=l(", default_value "),cs=e("span"),et=l("="),us=e("span"),tt=l(" "),_s=e("span"),nt=l('"1"'),ds=e("span"),lt=l(")]"),rt=l(`
`),C=e("span"),fs=e("span"),ot=l("    "),Es=e("span"),pt=l("day"),hs=e("span"),Bt=l(":"),As=e("span"),ct=l(" "),vs=e("span"),ut=l("u8"),Ss=e("span"),_t=l(","),dt=l(`
`),Ne=e("span"),ft=l(`
`),b=e("span"),Ps=e("span"),Et=l("    #[structopt(short, long, help "),Ns=e("span"),ht=l("="),ys=e("span"),At=l(" "),is=e("span"),vt=l('"Uses example file provided by AOC"'),Cs=e("span"),St=l(")]"),Pt=l(`
`),m=e("span"),ms=e("span"),Nt=l("    "),gs=e("span"),yt=l("example"),Fs=e("span"),it=l(":"),xs=e("span"),Ct=l(" "),Os=e("span"),mt=l("bool"),bs=e("span"),gt=l(","),Ft=l(`
`),ye=e("span"),xt=l(`
`),$=e("span"),$s=e("span"),Ot=l("    #[structopt(short, long, help "),Ds=e("span"),bt=l("="),Gs=e("span"),$t=l(" "),Rs=e("span"),Dt=l('"Gets all solutions for all AOC days"'),ks=e("span"),Gt=l(")]"),Rt=l(`
`),g=e("span"),qs=e("span"),kt=l("    "),Us=e("span"),qt=l("all"),js=e("span"),Ut=l(":"),ws=e("span"),jt=l(" "),zs=e("span"),wt=l("bool"),Is=e("span"),zt=l(","),It=l(`
`),Ts=e("span"),Xs=e("span"),Tt=l("}"),Xt=l(`
`),ie=e("span"),Yt=l(`
`),k=e("span"),Ys=e("span"),Ht=l("fn"),Hs=e("span"),Jt=l(" "),Js=e("span"),Kt=l("main"),Ks=e("span"),Lt=l("() {"),Mt=l(`
`),N=e("span"),Ls=e("span"),Qt=l("    "),Ms=e("span"),Vt=l("let"),Qs=e("span"),Wt=l(" "),Vs=e("span"),Zt=l("day_count"),Ws=e("span"),sn=l(" "),Zs=e("span"),an=l("="),sa=e("span"),en=l(" "),aa=e("span"),tn=l("0"),ea=e("span"),nn=l(";"),ln=l(`
`),A=e("span"),ta=e("span"),rn=l("    "),na=e("span"),on=l("let"),la=e("span"),pn=l(" "),ra=e("span"),Bn=l("args"),oa=e("span"),cn=l(" "),pa=e("span"),un=l("="),Ba=e("span"),_n=l(" "),ca=e("span"),dn=l("Cli"),ua=e("span"),fn=l("::"),_a=e("span"),En=l("from_args"),da=e("span"),hn=l("();"),An=l(`
`),_=e("span"),fa=e("span"),vn=l("    "),Ea=e("span"),Sn=l("let"),ha=e("span"),Pn=l(" "),Aa=e("span"),Nn=l("main_file"),va=e("span"),yn=l(" "),Sa=e("span"),Cn=l("="),Pa=e("span"),mn=l(" "),Na=e("span"),gn=l("if"),ya=e("span"),Fn=l(" "),ia=e("span"),xn=l("args"),Ca=e("span"),On=l("."),ma=e("span"),bn=l("example { "),ga=e("span"),$n=l('"example"'),Fa=e("span"),Dn=l(" } "),xa=e("span"),Gn=l("else"),Oa=e("span"),Rn=l(" { "),ba=e("span"),kn=l('"input"'),$a=e("span"),qn=l(" };"),Un=l(`
`),Ce=e("span"),jn=l(`
`),F=e("span"),Da=e("span"),wn=l("    "),Ga=e("span"),zn=l("if"),Ra=e("span"),In=l(" "),ka=e("span"),Tn=l("args"),qa=e("span"),Xn=l("."),Ua=e("span"),Yn=l("all {"),Hn=l(`
`),d=e("span"),ja=e("span"),Jn=l("        ("),wa=e("span"),Kn=l("1"),za=e("span"),Ln=l("..="),Ia=e("span"),Mn=l("day_count"),Ta=e("span"),Qn=l(")"),Xa=e("span"),Vn=l("."),Ya=e("span"),Wn=l("for_each"),Ha=e("span"),Zn=l("("),Ja=e("span"),sl=l("|"),Ka=e("span"),al=l("d"),La=e("span"),el=l("|"),Ma=e("span"),tl=l(" "),Qa=e("span"),nl=l("get_solution"),Va=e("span"),ll=l("("),Wa=e("span"),rl=l("main_file"),Za=e("span"),ol=l(", "),se=e("span"),pl=l("d"),ae=e("span"),Bl=l("));"),cl=l(`
`),j=e("span"),ee=e("span"),ul=l("    } "),te=e("span"),_l=l("else"),ne=e("span"),dl=l(" {"),fl=l(`
`),y=e("span"),le=e("span"),El=l("        "),re=e("span"),hl=l("get_solution"),oe=e("span"),Al=l("("),pe=e("span"),vl=l("main_file"),Be=e("span"),Sl=l(", "),ce=e("span"),Pl=l("args"),ue=e("span"),Nl=l("."),_e=e("span"),yl=l("day);"),il=l(`
`),de=e("span"),fe=e("span"),Cl=l("    }"),ml=l(`
`),Ee=e("span"),he=e("span"),gl=l("}"),this.h()},l(me){u=t(me,"PRE",{class:!0,style:!0});var Oe=n(u);p=t(Oe,"CODE",{});var B=n(p);v=t(B,"SPAN",{class:!0});var ge=n(v);x=t(ge,"SPAN",{style:!0});var xl=n(x);f=r(xl,"use"),xl.forEach(a),S=t(ge,"SPAN",{style:!0});var Ol=n(S);Y=r(Ol," avent"),Ol.forEach(a),H=t(ge,"SPAN",{style:!0});var bl=n(H);De=r(bl,"::"),bl.forEach(a),J=t(ge,"SPAN",{style:!0});var $l=n(J);Ge=r($l,"get_solution;"),$l.forEach(a),ge.forEach(a),Re=r(B,`
`),O=t(B,"SPAN",{class:!0});var Ae=n(O);K=t(Ae,"SPAN",{style:!0});var Dl=n(K);ke=r(Dl,"use"),Dl.forEach(a),L=t(Ae,"SPAN",{style:!0});var Gl=n(L);qe=r(Gl," structopt"),Gl.forEach(a),M=t(Ae,"SPAN",{style:!0});var Rl=n(M);Ue=r(Rl,"::"),Rl.forEach(a),Q=t(Ae,"SPAN",{style:!0});var kl=n(Q);je=r(kl,"StructOpt"),kl.forEach(a),V=t(Ae,"SPAN",{style:!0});var ql=n(V);we=r(ql,";"),ql.forEach(a),Ae.forEach(a),ze=r(B,`
`),Pe=t(B,"SPAN",{class:!0}),n(Pe).forEach(a),Ie=r(B,`
`),U=t(B,"SPAN",{class:!0});var be=n(U);W=t(be,"SPAN",{style:!0});var Ul=n(W);Te=r(Ul,"#[derive("),Ul.forEach(a),Z=t(be,"SPAN",{style:!0});var jl=n(Z);Xe=r(jl,"StructOpt"),jl.forEach(a),ss=t(be,"SPAN",{style:!0});var wl=n(ss);Ye=r(wl,")]"),wl.forEach(a),be.forEach(a),He=r(B,`
`),R=t(B,"SPAN",{class:!0});var Fe=n(R);as=t(Fe,"SPAN",{style:!0});var zl=n(as);Je=r(zl,"struct"),zl.forEach(a),es=t(Fe,"SPAN",{style:!0});var Il=n(es);Ke=r(Il," "),Il.forEach(a),ts=t(Fe,"SPAN",{style:!0});var Tl=n(ts);Le=r(Tl,"Cli"),Tl.forEach(a),ns=t(Fe,"SPAN",{style:!0});var Xl=n(ns);Me=r(Xl," {"),Xl.forEach(a),Fe.forEach(a),Qe=r(B,`
`),P=t(B,"SPAN",{class:!0});var D=n(P);ls=t(D,"SPAN",{style:!0});var Yl=n(ls);Ve=r(Yl,"    #[structopt(help "),Yl.forEach(a),rs=t(D,"SPAN",{style:!0});var Hl=n(rs);We=r(Hl,"="),Hl.forEach(a),os=t(D,"SPAN",{style:!0});var Jl=n(os);Ze=r(Jl," "),Jl.forEach(a),ps=t(D,"SPAN",{style:!0});var Kl=n(ps);st=r(Kl,'"AOC day"'),Kl.forEach(a),Bs=t(D,"SPAN",{style:!0});var Ll=n(Bs);at=r(Ll,", default_value "),Ll.forEach(a),cs=t(D,"SPAN",{style:!0});var Ml=n(cs);et=r(Ml,"="),Ml.forEach(a),us=t(D,"SPAN",{style:!0});var Ql=n(us);tt=r(Ql," "),Ql.forEach(a),_s=t(D,"SPAN",{style:!0});var Vl=n(_s);nt=r(Vl,'"1"'),Vl.forEach(a),ds=t(D,"SPAN",{style:!0});var Wl=n(ds);lt=r(Wl,")]"),Wl.forEach(a),D.forEach(a),rt=r(B,`
`),C=t(B,"SPAN",{class:!0});var w=n(C);fs=t(w,"SPAN",{style:!0});var Zl=n(fs);ot=r(Zl,"    "),Zl.forEach(a),Es=t(w,"SPAN",{style:!0});var sr=n(Es);pt=r(sr,"day"),sr.forEach(a),hs=t(w,"SPAN",{style:!0});var ar=n(hs);Bt=r(ar,":"),ar.forEach(a),As=t(w,"SPAN",{style:!0});var er=n(As);ct=r(er," "),er.forEach(a),vs=t(w,"SPAN",{style:!0});var tr=n(vs);ut=r(tr,"u8"),tr.forEach(a),Ss=t(w,"SPAN",{style:!0});var nr=n(Ss);_t=r(nr,","),nr.forEach(a),w.forEach(a),dt=r(B,`
`),Ne=t(B,"SPAN",{class:!0}),n(Ne).forEach(a),ft=r(B,`
`),b=t(B,"SPAN",{class:!0});var ve=n(b);Ps=t(ve,"SPAN",{style:!0});var lr=n(Ps);Et=r(lr,"    #[structopt(short, long, help "),lr.forEach(a),Ns=t(ve,"SPAN",{style:!0});var rr=n(Ns);ht=r(rr,"="),rr.forEach(a),ys=t(ve,"SPAN",{style:!0});var or=n(ys);At=r(or," "),or.forEach(a),is=t(ve,"SPAN",{style:!0});var pr=n(is);vt=r(pr,'"Uses example file provided by AOC"'),pr.forEach(a),Cs=t(ve,"SPAN",{style:!0});var Br=n(Cs);St=r(Br,")]"),Br.forEach(a),ve.forEach(a),Pt=r(B,`
`),m=t(B,"SPAN",{class:!0});var z=n(m);ms=t(z,"SPAN",{style:!0});var cr=n(ms);Nt=r(cr,"    "),cr.forEach(a),gs=t(z,"SPAN",{style:!0});var ur=n(gs);yt=r(ur,"example"),ur.forEach(a),Fs=t(z,"SPAN",{style:!0});var _r=n(Fs);it=r(_r,":"),_r.forEach(a),xs=t(z,"SPAN",{style:!0});var dr=n(xs);Ct=r(dr," "),dr.forEach(a),Os=t(z,"SPAN",{style:!0});var fr=n(Os);mt=r(fr,"bool"),fr.forEach(a),bs=t(z,"SPAN",{style:!0});var Er=n(bs);gt=r(Er,","),Er.forEach(a),z.forEach(a),Ft=r(B,`
`),ye=t(B,"SPAN",{class:!0}),n(ye).forEach(a),xt=r(B,`
`),$=t(B,"SPAN",{class:!0});var Se=n($);$s=t(Se,"SPAN",{style:!0});var hr=n($s);Ot=r(hr,"    #[structopt(short, long, help "),hr.forEach(a),Ds=t(Se,"SPAN",{style:!0});var Ar=n(Ds);bt=r(Ar,"="),Ar.forEach(a),Gs=t(Se,"SPAN",{style:!0});var vr=n(Gs);$t=r(vr," "),vr.forEach(a),Rs=t(Se,"SPAN",{style:!0});var Sr=n(Rs);Dt=r(Sr,'"Gets all solutions for all AOC days"'),Sr.forEach(a),ks=t(Se,"SPAN",{style:!0});var Pr=n(ks);Gt=r(Pr,")]"),Pr.forEach(a),Se.forEach(a),Rt=r(B,`
`),g=t(B,"SPAN",{class:!0});var I=n(g);qs=t(I,"SPAN",{style:!0});var Nr=n(qs);kt=r(Nr,"    "),Nr.forEach(a),Us=t(I,"SPAN",{style:!0});var yr=n(Us);qt=r(yr,"all"),yr.forEach(a),js=t(I,"SPAN",{style:!0});var ir=n(js);Ut=r(ir,":"),ir.forEach(a),ws=t(I,"SPAN",{style:!0});var Cr=n(ws);jt=r(Cr," "),Cr.forEach(a),zs=t(I,"SPAN",{style:!0});var mr=n(zs);wt=r(mr,"bool"),mr.forEach(a),Is=t(I,"SPAN",{style:!0});var gr=n(Is);zt=r(gr,","),gr.forEach(a),I.forEach(a),It=r(B,`
`),Ts=t(B,"SPAN",{class:!0});var Fr=n(Ts);Xs=t(Fr,"SPAN",{style:!0});var xr=n(Xs);Tt=r(xr,"}"),xr.forEach(a),Fr.forEach(a),Xt=r(B,`
`),ie=t(B,"SPAN",{class:!0}),n(ie).forEach(a),Yt=r(B,`
`),k=t(B,"SPAN",{class:!0});var xe=n(k);Ys=t(xe,"SPAN",{style:!0});var Or=n(Ys);Ht=r(Or,"fn"),Or.forEach(a),Hs=t(xe,"SPAN",{style:!0});var br=n(Hs);Jt=r(br," "),br.forEach(a),Js=t(xe,"SPAN",{style:!0});var $r=n(Js);Kt=r($r,"main"),$r.forEach(a),Ks=t(xe,"SPAN",{style:!0});var Dr=n(Ks);Lt=r(Dr,"() {"),Dr.forEach(a),xe.forEach(a),Mt=r(B,`
`),N=t(B,"SPAN",{class:!0});var G=n(N);Ls=t(G,"SPAN",{style:!0});var Gr=n(Ls);Qt=r(Gr,"    "),Gr.forEach(a),Ms=t(G,"SPAN",{style:!0});var Rr=n(Ms);Vt=r(Rr,"let"),Rr.forEach(a),Qs=t(G,"SPAN",{style:!0});var kr=n(Qs);Wt=r(kr," "),kr.forEach(a),Vs=t(G,"SPAN",{style:!0});var qr=n(Vs);Zt=r(qr,"day_count"),qr.forEach(a),Ws=t(G,"SPAN",{style:!0});var Ur=n(Ws);sn=r(Ur," "),Ur.forEach(a),Zs=t(G,"SPAN",{style:!0});var jr=n(Zs);an=r(jr,"="),jr.forEach(a),sa=t(G,"SPAN",{style:!0});var wr=n(sa);en=r(wr," "),wr.forEach(a),aa=t(G,"SPAN",{style:!0});var zr=n(aa);tn=r(zr,"0"),zr.forEach(a),ea=t(G,"SPAN",{style:!0});var Ir=n(ea);nn=r(Ir,";"),Ir.forEach(a),G.forEach(a),ln=r(B,`
`),A=t(B,"SPAN",{class:!0});var i=n(A);ta=t(i,"SPAN",{style:!0});var Tr=n(ta);rn=r(Tr,"    "),Tr.forEach(a),na=t(i,"SPAN",{style:!0});var Xr=n(na);on=r(Xr,"let"),Xr.forEach(a),la=t(i,"SPAN",{style:!0});var Yr=n(la);pn=r(Yr," "),Yr.forEach(a),ra=t(i,"SPAN",{style:!0});var Hr=n(ra);Bn=r(Hr,"args"),Hr.forEach(a),oa=t(i,"SPAN",{style:!0});var Jr=n(oa);cn=r(Jr," "),Jr.forEach(a),pa=t(i,"SPAN",{style:!0});var Kr=n(pa);un=r(Kr,"="),Kr.forEach(a),Ba=t(i,"SPAN",{style:!0});var Lr=n(Ba);_n=r(Lr," "),Lr.forEach(a),ca=t(i,"SPAN",{style:!0});var Mr=n(ca);dn=r(Mr,"Cli"),Mr.forEach(a),ua=t(i,"SPAN",{style:!0});var Qr=n(ua);fn=r(Qr,"::"),Qr.forEach(a),_a=t(i,"SPAN",{style:!0});var Vr=n(_a);En=r(Vr,"from_args"),Vr.forEach(a),da=t(i,"SPAN",{style:!0});var Wr=n(da);hn=r(Wr,"();"),Wr.forEach(a),i.forEach(a),An=r(B,`
`),_=t(B,"SPAN",{class:!0});var E=n(_);fa=t(E,"SPAN",{style:!0});var Zr=n(fa);vn=r(Zr,"    "),Zr.forEach(a),Ea=t(E,"SPAN",{style:!0});var so=n(Ea);Sn=r(so,"let"),so.forEach(a),ha=t(E,"SPAN",{style:!0});var ao=n(ha);Pn=r(ao," "),ao.forEach(a),Aa=t(E,"SPAN",{style:!0});var eo=n(Aa);Nn=r(eo,"main_file"),eo.forEach(a),va=t(E,"SPAN",{style:!0});var to=n(va);yn=r(to," "),to.forEach(a),Sa=t(E,"SPAN",{style:!0});var no=n(Sa);Cn=r(no,"="),no.forEach(a),Pa=t(E,"SPAN",{style:!0});var lo=n(Pa);mn=r(lo," "),lo.forEach(a),Na=t(E,"SPAN",{style:!0});var ro=n(Na);gn=r(ro,"if"),ro.forEach(a),ya=t(E,"SPAN",{style:!0});var oo=n(ya);Fn=r(oo," "),oo.forEach(a),ia=t(E,"SPAN",{style:!0});var po=n(ia);xn=r(po,"args"),po.forEach(a),Ca=t(E,"SPAN",{style:!0});var Bo=n(Ca);On=r(Bo,"."),Bo.forEach(a),ma=t(E,"SPAN",{style:!0});var co=n(ma);bn=r(co,"example { "),co.forEach(a),ga=t(E,"SPAN",{style:!0});var uo=n(ga);$n=r(uo,'"example"'),uo.forEach(a),Fa=t(E,"SPAN",{style:!0});var _o=n(Fa);Dn=r(_o," } "),_o.forEach(a),xa=t(E,"SPAN",{style:!0});var fo=n(xa);Gn=r(fo,"else"),fo.forEach(a),Oa=t(E,"SPAN",{style:!0});var Eo=n(Oa);Rn=r(Eo," { "),Eo.forEach(a),ba=t(E,"SPAN",{style:!0});var ho=n(ba);kn=r(ho,'"input"'),ho.forEach(a),$a=t(E,"SPAN",{style:!0});var Ao=n($a);qn=r(Ao," };"),Ao.forEach(a),E.forEach(a),Un=r(B,`
`),Ce=t(B,"SPAN",{class:!0}),n(Ce).forEach(a),jn=r(B,`
`),F=t(B,"SPAN",{class:!0});var T=n(F);Da=t(T,"SPAN",{style:!0});var vo=n(Da);wn=r(vo,"    "),vo.forEach(a),Ga=t(T,"SPAN",{style:!0});var So=n(Ga);zn=r(So,"if"),So.forEach(a),Ra=t(T,"SPAN",{style:!0});var Po=n(Ra);In=r(Po," "),Po.forEach(a),ka=t(T,"SPAN",{style:!0});var No=n(ka);Tn=r(No,"args"),No.forEach(a),qa=t(T,"SPAN",{style:!0});var yo=n(qa);Xn=r(yo,"."),yo.forEach(a),Ua=t(T,"SPAN",{style:!0});var io=n(Ua);Yn=r(io,"all {"),io.forEach(a),T.forEach(a),Hn=r(B,`
`),d=t(B,"SPAN",{class:!0});var h=n(d);ja=t(h,"SPAN",{style:!0});var Co=n(ja);Jn=r(Co,"        ("),Co.forEach(a),wa=t(h,"SPAN",{style:!0});var mo=n(wa);Kn=r(mo,"1"),mo.forEach(a),za=t(h,"SPAN",{style:!0});var go=n(za);Ln=r(go,"..="),go.forEach(a),Ia=t(h,"SPAN",{style:!0});var Fo=n(Ia);Mn=r(Fo,"day_count"),Fo.forEach(a),Ta=t(h,"SPAN",{style:!0});var xo=n(Ta);Qn=r(xo,")"),xo.forEach(a),Xa=t(h,"SPAN",{style:!0});var Oo=n(Xa);Vn=r(Oo,"."),Oo.forEach(a),Ya=t(h,"SPAN",{style:!0});var bo=n(Ya);Wn=r(bo,"for_each"),bo.forEach(a),Ha=t(h,"SPAN",{style:!0});var $o=n(Ha);Zn=r($o,"("),$o.forEach(a),Ja=t(h,"SPAN",{style:!0});var Do=n(Ja);sl=r(Do,"|"),Do.forEach(a),Ka=t(h,"SPAN",{style:!0});var Go=n(Ka);al=r(Go,"d"),Go.forEach(a),La=t(h,"SPAN",{style:!0});var Ro=n(La);el=r(Ro,"|"),Ro.forEach(a),Ma=t(h,"SPAN",{style:!0});var ko=n(Ma);tl=r(ko," "),ko.forEach(a),Qa=t(h,"SPAN",{style:!0});var qo=n(Qa);nl=r(qo,"get_solution"),qo.forEach(a),Va=t(h,"SPAN",{style:!0});var Uo=n(Va);ll=r(Uo,"("),Uo.forEach(a),Wa=t(h,"SPAN",{style:!0});var jo=n(Wa);rl=r(jo,"main_file"),jo.forEach(a),Za=t(h,"SPAN",{style:!0});var wo=n(Za);ol=r(wo,", "),wo.forEach(a),se=t(h,"SPAN",{style:!0});var zo=n(se);pl=r(zo,"d"),zo.forEach(a),ae=t(h,"SPAN",{style:!0});var Io=n(ae);Bl=r(Io,"));"),Io.forEach(a),h.forEach(a),cl=r(B,`
`),j=t(B,"SPAN",{class:!0});var $e=n(j);ee=t($e,"SPAN",{style:!0});var To=n(ee);ul=r(To,"    } "),To.forEach(a),te=t($e,"SPAN",{style:!0});var Xo=n(te);_l=r(Xo,"else"),Xo.forEach(a),ne=t($e,"SPAN",{style:!0});var Yo=n(ne);dl=r(Yo," {"),Yo.forEach(a),$e.forEach(a),fl=r(B,`
`),y=t(B,"SPAN",{class:!0});var q=n(y);le=t(q,"SPAN",{style:!0});var Ho=n(le);El=r(Ho,"        "),Ho.forEach(a),re=t(q,"SPAN",{style:!0});var Jo=n(re);hl=r(Jo,"get_solution"),Jo.forEach(a),oe=t(q,"SPAN",{style:!0});var Ko=n(oe);Al=r(Ko,"("),Ko.forEach(a),pe=t(q,"SPAN",{style:!0});var Lo=n(pe);vl=r(Lo,"main_file"),Lo.forEach(a),Be=t(q,"SPAN",{style:!0});var Mo=n(Be);Sl=r(Mo,", "),Mo.forEach(a),ce=t(q,"SPAN",{style:!0});var Qo=n(ce);Pl=r(Qo,"args"),Qo.forEach(a),ue=t(q,"SPAN",{style:!0});var Vo=n(ue);Nl=r(Vo,"."),Vo.forEach(a),_e=t(q,"SPAN",{style:!0});var Wo=n(_e);yl=r(Wo,"day);"),Wo.forEach(a),q.forEach(a),il=r(B,`
`),de=t(B,"SPAN",{class:!0});var Zo=n(de);fe=t(Zo,"SPAN",{style:!0});var sp=n(fe);Cl=r(sp,"    }"),sp.forEach(a),Zo.forEach(a),ml=r(B,`
`),Ee=t(B,"SPAN",{class:!0});var ap=n(Ee);he=t(ap,"SPAN",{style:!0});var ep=n(he);gl=r(ep,"}"),ep.forEach(a),ap.forEach(a),B.forEach(a),Oe.forEach(a),this.h()},h(){o(x,"color","#E06C75"),o(S,"color","#BBBBBB"),o(H,"color","#E06C75"),o(J,"color","#BBBBBB"),c(v,"class","line"),o(K,"color","#E06C75"),o(L,"color","#BBBBBB"),o(M,"color","#E06C75"),o(Q,"color","#61AFEF"),o(V,"color","#BBBBBB"),c(O,"class","line"),c(Pe,"class","line"),o(W,"color","#BBBBBB"),o(Z,"color","#61AFEF"),o(ss,"color","#BBBBBB"),c(U,"class","line"),o(as,"color","#56B6C2"),o(es,"color","#BBBBBB"),o(ts,"color","#61AFEF"),o(ns,"color","#BBBBBB"),c(R,"class","line"),o(ls,"color","#BBBBBB"),o(rs,"color","#E06C75"),o(os,"color","#BBBBBB"),o(ps,"color","#E5C07B"),o(Bs,"color","#BBBBBB"),o(cs,"color","#E06C75"),o(us,"color","#BBBBBB"),o(_s,"color","#E5C07B"),o(ds,"color","#BBBBBB"),c(P,"class","line"),o(fs,"color","#BBBBBB"),o(Es,"color","#ABB2BF"),o(hs,"color","#E06C75"),o(As,"color","#BBBBBB"),o(vs,"color","#61AFEF"),o(Ss,"color","#BBBBBB"),c(C,"class","line"),c(Ne,"class","line"),o(Ps,"color","#BBBBBB"),o(Ns,"color","#E06C75"),o(ys,"color","#BBBBBB"),o(is,"color","#E5C07B"),o(Cs,"color","#BBBBBB"),c(b,"class","line"),o(ms,"color","#BBBBBB"),o(gs,"color","#ABB2BF"),o(Fs,"color","#E06C75"),o(xs,"color","#BBBBBB"),o(Os,"color","#61AFEF"),o(bs,"color","#BBBBBB"),c(m,"class","line"),c(ye,"class","line"),o($s,"color","#BBBBBB"),o(Ds,"color","#E06C75"),o(Gs,"color","#BBBBBB"),o(Rs,"color","#E5C07B"),o(ks,"color","#BBBBBB"),c($,"class","line"),o(qs,"color","#BBBBBB"),o(Us,"color","#ABB2BF"),o(js,"color","#E06C75"),o(ws,"color","#BBBBBB"),o(zs,"color","#61AFEF"),o(Is,"color","#BBBBBB"),c(g,"class","line"),o(Xs,"color","#BBBBBB"),c(Ts,"class","line"),c(ie,"class","line"),o(Ys,"color","#E06C75"),o(Hs,"color","#BBBBBB"),o(Js,"color","#98C379"),o(Ks,"color","#BBBBBB"),c(k,"class","line"),o(Ls,"color","#BBBBBB"),o(Ms,"color","#56B6C2"),o(Qs,"color","#BBBBBB"),o(Vs,"color","#ABB2BF"),o(Ws,"color","#BBBBBB"),o(Zs,"color","#E06C75"),o(sa,"color","#BBBBBB"),o(aa,"color","#C678DD"),o(ea,"color","#BBBBBB"),c(N,"class","line"),o(ta,"color","#BBBBBB"),o(na,"color","#56B6C2"),o(la,"color","#BBBBBB"),o(ra,"color","#ABB2BF"),o(oa,"color","#BBBBBB"),o(pa,"color","#E06C75"),o(Ba,"color","#BBBBBB"),o(ca,"color","#61AFEF"),o(ua,"color","#E06C75"),o(_a,"color","#98C379"),o(da,"color","#BBBBBB"),c(A,"class","line"),o(fa,"color","#BBBBBB"),o(Ea,"color","#56B6C2"),o(ha,"color","#BBBBBB"),o(Aa,"color","#ABB2BF"),o(va,"color","#BBBBBB"),o(Sa,"color","#E06C75"),o(Pa,"color","#BBBBBB"),o(Na,"color","#E06C75"),o(ya,"color","#BBBBBB"),o(ia,"color","#ABB2BF"),o(Ca,"color","#E06C75"),o(ma,"color","#BBBBBB"),o(ga,"color","#E5C07B"),o(Fa,"color","#BBBBBB"),o(xa,"color","#E06C75"),o(Oa,"color","#BBBBBB"),o(ba,"color","#E5C07B"),o($a,"color","#BBBBBB"),c(_,"class","line"),c(Ce,"class","line"),o(Da,"color","#BBBBBB"),o(Ga,"color","#E06C75"),o(Ra,"color","#BBBBBB"),o(ka,"color","#ABB2BF"),o(qa,"color","#E06C75"),o(Ua,"color","#BBBBBB"),c(F,"class","line"),o(ja,"color","#BBBBBB"),o(wa,"color","#C678DD"),o(za,"color","#E06C75"),o(Ia,"color","#ABB2BF"),o(Ta,"color","#BBBBBB"),o(Xa,"color","#E06C75"),o(Ya,"color","#98C379"),o(Ha,"color","#BBBBBB"),o(Ja,"color","#E06C75"),o(Ka,"color","#ABB2BF"),o(La,"color","#E06C75"),o(Ma,"color","#BBBBBB"),o(Qa,"color","#98C379"),o(Va,"color","#BBBBBB"),o(Wa,"color","#ABB2BF"),o(Za,"color","#BBBBBB"),o(se,"color","#ABB2BF"),o(ae,"color","#BBBBBB"),c(d,"class","line"),o(ee,"color","#BBBBBB"),o(te,"color","#E06C75"),o(ne,"color","#BBBBBB"),c(j,"class","line"),o(le,"color","#BBBBBB"),o(re,"color","#98C379"),o(oe,"color","#BBBBBB"),o(pe,"color","#ABB2BF"),o(Be,"color","#BBBBBB"),o(ce,"color","#ABB2BF"),o(ue,"color","#E06C75"),o(_e,"color","#BBBBBB"),c(y,"class","line"),o(fe,"color","#BBBBBB"),c(de,"class","line"),o(he,"color","#BBBBBB"),c(Ee,"class","line"),c(u,"class","shiki"),o(u,"background-color","#1e1e1e")},m(me,Oe){hp(me,u,Oe),s(u,p),s(p,v),s(v,x),s(x,f),s(v,S),s(S,Y),s(v,H),s(H,De),s(v,J),s(J,Ge),s(p,Re),s(p,O),s(O,K),s(K,ke),s(O,L),s(L,qe),s(O,M),s(M,Ue),s(O,Q),s(Q,je),s(O,V),s(V,we),s(p,ze),s(p,Pe),s(p,Ie),s(p,U),s(U,W),s(W,Te),s(U,Z),s(Z,Xe),s(U,ss),s(ss,Ye),s(p,He),s(p,R),s(R,as),s(as,Je),s(R,es),s(es,Ke),s(R,ts),s(ts,Le),s(R,ns),s(ns,Me),s(p,Qe),s(p,P),s(P,ls),s(ls,Ve),s(P,rs),s(rs,We),s(P,os),s(os,Ze),s(P,ps),s(ps,st),s(P,Bs),s(Bs,at),s(P,cs),s(cs,et),s(P,us),s(us,tt),s(P,_s),s(_s,nt),s(P,ds),s(ds,lt),s(p,rt),s(p,C),s(C,fs),s(fs,ot),s(C,Es),s(Es,pt),s(C,hs),s(hs,Bt),s(C,As),s(As,ct),s(C,vs),s(vs,ut),s(C,Ss),s(Ss,_t),s(p,dt),s(p,Ne),s(p,ft),s(p,b),s(b,Ps),s(Ps,Et),s(b,Ns),s(Ns,ht),s(b,ys),s(ys,At),s(b,is),s(is,vt),s(b,Cs),s(Cs,St),s(p,Pt),s(p,m),s(m,ms),s(ms,Nt),s(m,gs),s(gs,yt),s(m,Fs),s(Fs,it),s(m,xs),s(xs,Ct),s(m,Os),s(Os,mt),s(m,bs),s(bs,gt),s(p,Ft),s(p,ye),s(p,xt),s(p,$),s($,$s),s($s,Ot),s($,Ds),s(Ds,bt),s($,Gs),s(Gs,$t),s($,Rs),s(Rs,Dt),s($,ks),s(ks,Gt),s(p,Rt),s(p,g),s(g,qs),s(qs,kt),s(g,Us),s(Us,qt),s(g,js),s(js,Ut),s(g,ws),s(ws,jt),s(g,zs),s(zs,wt),s(g,Is),s(Is,zt),s(p,It),s(p,Ts),s(Ts,Xs),s(Xs,Tt),s(p,Xt),s(p,ie),s(p,Yt),s(p,k),s(k,Ys),s(Ys,Ht),s(k,Hs),s(Hs,Jt),s(k,Js),s(Js,Kt),s(k,Ks),s(Ks,Lt),s(p,Mt),s(p,N),s(N,Ls),s(Ls,Qt),s(N,Ms),s(Ms,Vt),s(N,Qs),s(Qs,Wt),s(N,Vs),s(Vs,Zt),s(N,Ws),s(Ws,sn),s(N,Zs),s(Zs,an),s(N,sa),s(sa,en),s(N,aa),s(aa,tn),s(N,ea),s(ea,nn),s(p,ln),s(p,A),s(A,ta),s(ta,rn),s(A,na),s(na,on),s(A,la),s(la,pn),s(A,ra),s(ra,Bn),s(A,oa),s(oa,cn),s(A,pa),s(pa,un),s(A,Ba),s(Ba,_n),s(A,ca),s(ca,dn),s(A,ua),s(ua,fn),s(A,_a),s(_a,En),s(A,da),s(da,hn),s(p,An),s(p,_),s(_,fa),s(fa,vn),s(_,Ea),s(Ea,Sn),s(_,ha),s(ha,Pn),s(_,Aa),s(Aa,Nn),s(_,va),s(va,yn),s(_,Sa),s(Sa,Cn),s(_,Pa),s(Pa,mn),s(_,Na),s(Na,gn),s(_,ya),s(ya,Fn),s(_,ia),s(ia,xn),s(_,Ca),s(Ca,On),s(_,ma),s(ma,bn),s(_,ga),s(ga,$n),s(_,Fa),s(Fa,Dn),s(_,xa),s(xa,Gn),s(_,Oa),s(Oa,Rn),s(_,ba),s(ba,kn),s(_,$a),s($a,qn),s(p,Un),s(p,Ce),s(p,jn),s(p,F),s(F,Da),s(Da,wn),s(F,Ga),s(Ga,zn),s(F,Ra),s(Ra,In),s(F,ka),s(ka,Tn),s(F,qa),s(qa,Xn),s(F,Ua),s(Ua,Yn),s(p,Hn),s(p,d),s(d,ja),s(ja,Jn),s(d,wa),s(wa,Kn),s(d,za),s(za,Ln),s(d,Ia),s(Ia,Mn),s(d,Ta),s(Ta,Qn),s(d,Xa),s(Xa,Vn),s(d,Ya),s(Ya,Wn),s(d,Ha),s(Ha,Zn),s(d,Ja),s(Ja,sl),s(d,Ka),s(Ka,al),s(d,La),s(La,el),s(d,Ma),s(Ma,tl),s(d,Qa),s(Qa,nl),s(d,Va),s(Va,ll),s(d,Wa),s(Wa,rl),s(d,Za),s(Za,ol),s(d,se),s(se,pl),s(d,ae),s(ae,Bl),s(p,cl),s(p,j),s(j,ee),s(ee,ul),s(j,te),s(te,_l),s(j,ne),s(ne,dl),s(p,fl),s(p,y),s(y,le),s(le,El),s(y,re),s(re,hl),s(y,oe),s(oe,Al),s(y,pe),s(pe,vl),s(y,Be),s(Be,Sl),s(y,ce),s(ce,Pl),s(y,ue),s(ue,Nl),s(y,_e),s(_e,yl),s(p,il),s(p,de),s(de,fe),s(fe,Cl),s(p,ml),s(p,Ee),s(Ee,he),s(he,gl)},p:Ap,d(me){me&&a(u)}}}function Pp(X){let u,p;const v=[X[0],lp];let x={$$slots:{default:[Sp]},$$scope:{ctx:X}};for(let f=0;f<v.length;f+=1)x=Fl(x,v[f]);return u=new vp({props:x}),{c(){Bp(u.$$.fragment)},l(f){cp(u.$$.fragment,f)},m(f,S){up(u,f,S),p=!0},p(f,[S]){const Y=S&1?_p(v,[S&1&&tp(f[0]),S&0&&tp(lp)]):{};S&2&&(Y.$$scope={dirty:S,ctx:f}),u.$set(Y)},i(f){p||(dp(u.$$.fragment,f),p=!0)},o(f){fp(u.$$.fragment,f),p=!1},d(f){Ep(u,f)}}}const lp={title:"Rust Code",description:"Test Rust code",date:"12/08/2022"};function Np(X,u,p){return X.$$set=v=>{p(0,u=Fl(Fl({},u),np(v)))},u=np(u),[u]}class Cp extends rp{constructor(u){super(),op(this,u,Np,Pp,pp,{})}}export{Cp as default,lp as metadata};
