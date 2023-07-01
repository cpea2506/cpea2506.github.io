import{s as G,d as Y,u as Z,g as ss,e as Bs,i as q,j as S,n as ls}from"../chunks/scheduler.5e18e507.js";import{S as J,i as N,g as f,m as T,s as E,h as _,j as H,n as L,f as t,c as m,k as P,a as v,y as g,o as O,d as V,t as W,r as as,u as ns,v as os,w as ps,H as I,e as U,x as D,D as K}from"../chunks/index.01bba6b4.js";import{g as es,a as Q}from"../chunks/spread.8a54911c.js";function ts(c){let s,p,r,y,l,e,a,b,C;const u=c[3].default,i=Y(u,c,c[2],null);return{c(){s=f("article"),p=f("h1"),r=T(c[0]),y=E(),l=f("p"),e=T("Created: "),a=T(c[1]),b=E(),i&&i.c(),this.h()},l(n){s=_(n,"ARTICLE",{class:!0});var o=H(s);p=_(o,"H1",{class:!0});var x=H(p);r=L(x,c[0]),x.forEach(t),y=m(o),l=_(o,"P",{class:!0});var F=H(l);e=L(F,"Created: "),a=L(F,c[1]),F.forEach(t),b=m(o),i&&i.l(o),o.forEach(t),this.h()},h(){P(p,"class","text-yellow mb-2"),P(l,"class","text-green post-card-border mb-4 pb-2"),P(s,"class","prose prose-one-monokai mx-4 my-2 max-w-screen-md sm:mx-auto sm:my-6")},m(n,o){v(n,s,o),g(s,p),g(p,r),g(s,y),g(s,l),g(l,e),g(l,a),g(s,b),i&&i.m(s,null),C=!0},p(n,[o]){(!C||o&1)&&O(r,n[0]),(!C||o&2)&&O(a,n[1]),i&&i.p&&(!C||o&4)&&Z(i,u,n,n[2],C?Bs(u,n[2],o,null):ss(n[2]),null)},i(n){C||(V(i,n),C=!0)},o(n){W(i,n),C=!1},d(n){n&&t(s),i&&i.d(n)}}}function cs(c,s,p){let{$$slots:r={},$$scope:y}=s,{title:l}=s,{date:e}=s;return c.$$set=a=>{"title"in a&&p(0,l=a.title),"date"in a&&p(1,e=a.date),"$$scope"in a&&p(2,y=a.$$scope)},[l,e,y,r]}class rs extends J{constructor(s){super(),N(this,s,cs,ts,G,{title:0,date:1})}}function ys(c){let s,p="1. Preparation:",r,y,l=`<pre class="shiki one-monokai" style="background-color: #1e1e1e; color: #bbbbbb" rust="true"><div class="language-id">rust</div><div class='code-container'><code><div class='line'><span style="color: #E06C75">use</span><span style="color: #BBBBBB"> std</span><span style="color: #E06C75">::</span><span style="color: #BBBBBB">time</span><span style="color: #E06C75">::</span><span style="color: #BBBBBB">&#123;</span><span style="color: #61AFEF">Duration</span><span style="color: #BBBBBB">, </span><span style="color: #61AFEF">Instant</span><span style="color: #BBBBBB">&#125;;</span></div><div class='line'></div><div class='line'><span style="color: #BBBBBB">#[doc(hidden)]</span></div><div class='line'><span style="color: #E06C75">pub</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">fn</span><span style="color: #BBBBBB"> </span><span style="color: #98C379">__get_time</span><span style="color: #BBBBBB">&lt;</span><span style="color: #61AFEF">T</span><span style="color: #BBBBBB">&gt;(</span><span style="color: #ABB2BF">func</span><span style="color: #E06C75">:</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">impl</span><span style="color: #BBBBBB"> </span><span style="color: #98C379">FnOnce</span><span style="color: #BBBBBB">() </span><span style="color: #E06C75">-&gt;</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">T</span><span style="color: #BBBBBB">) </span><span style="color: #E06C75">-&gt;</span><span style="color: #BBBBBB"> (</span><span style="color: #61AFEF">T</span><span style="color: #BBBBBB">, </span><span style="color: #61AFEF">Duration</span><span style="color: #BBBBBB">) &#123;</span></div><div class='line'><span style="color: #BBBBBB">    </span><span style="color: #56B6C2">let</span><span style="color: #BBBBBB"> </span><span style="color: #ABB2BF">start</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">=</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">Instant</span><span style="color: #E06C75">::</span><span style="color: #98C379">now</span><span style="color: #BBBBBB">();</span></div><div class='line'><span style="color: #BBBBBB">    </span><span style="color: #56B6C2">let</span><span style="color: #BBBBBB"> </span><span style="color: #ABB2BF">result</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">=</span><span style="color: #BBBBBB"> </span><span style="color: #98C379">func</span><span style="color: #BBBBBB">();</span></div><div class='line'><span style="color: #BBBBBB">    </span><span style="color: #56B6C2">let</span><span style="color: #BBBBBB"> </span><span style="color: #ABB2BF">time</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">=</span><span style="color: #BBBBBB"> </span><span style="color: #ABB2BF">start</span><span style="color: #E06C75">.</span><span style="color: #98C379">elapsed</span><span style="color: #BBBBBB">();</span></div><div class='line'></div><div class='line'><span style="color: #BBBBBB">    (</span><span style="color: #ABB2BF">result</span><span style="color: #BBBBBB">, </span><span style="color: #ABB2BF">time</span><span style="color: #BBBBBB">)</span></div><div class='line'><span style="color: #BBBBBB">&#125;</span></div><div class='line'></div><div class='line'><span style="color: #BBBBBB">#[macro_export]</span></div><div class='line'><span style="color: #98C379">macro_rules!</span><span style="color: #BBBBBB"> </span><span style="color: #98C379">run</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">    (</span><span style="color: #E06C75">$</span><span style="color: #ABB2BF">name</span><span style="color: #E06C75">:</span><span style="color: #ABB2BF">expr</span><span style="color: #BBBBBB">, </span><span style="color: #E06C75">$</span><span style="color: #ABB2BF">solution</span><span style="color: #E06C75">:</span><span style="color: #ABB2BF">expr</span><span style="color: #BBBBBB">) </span><span style="color: #E06C75">=&gt;</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">        </span><span style="color: #E06C75">use</span><span style="color: #BBBBBB"> humantime</span><span style="color: #E06C75">::</span><span style="color: #BBBBBB">format_duration;</span></div><div class='line'><span style="color: #BBBBBB">        </span><span style="color: #E06C75">use</span><span style="color: #BBBBBB"> owo_colors</span><span style="color: #E06C75">::</span><span style="color: #61AFEF">OwoColorize</span><span style="color: #BBBBBB">;</span></div><div class='line'></div><div class='line'><span style="color: #BBBBBB">        </span><span style="color: #E06C75">fn</span><span style="color: #BBBBBB"> </span><span style="color: #98C379">main</span><span style="color: #BBBBBB">() &#123;</span></div><div class='line'><span style="color: #BBBBBB">            </span><span style="color: #56B6C2">let</span><span style="color: #BBBBBB"> (</span><span style="color: #ABB2BF">solution</span><span style="color: #BBBBBB">, </span><span style="color: #ABB2BF">time</span><span style="color: #BBBBBB">) </span><span style="color: #E06C75">=</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">$crate::</span><span style="color: #98C379">__get_time</span><span style="color: #BBBBBB">(</span><span style="color: #E06C75">||</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">$</span><span style="color: #ABB2BF">solution</span><span style="color: #BBBBBB">);</span></div><div class='line'></div><div class='line'><span style="color: #BBBBBB">            </span><span style="color: #98C379">println!</span><span style="color: #BBBBBB">(</span></div><div class='line'><span style="color: #BBBBBB">                </span><span style="color: #E5C07B">"&#123;name&#125;: &#123;solution&#125; in &#123;time&#125;"</span><span style="color: #BBBBBB">,</span></div><div class='line'><span style="color: #BBBBBB">                </span><span style="color: #ABB2BF">name</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">=</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">$</span><span style="color: #ABB2BF">name</span><span style="color: #BBBBBB">,</span></div><div class='line'><span style="color: #BBBBBB">                </span><span style="color: #ABB2BF">solution</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">=</span><span style="color: #BBBBBB"> </span><span style="color: #ABB2BF">solution</span><span style="color: #E06C75">.</span><span style="color: #98C379">fg_rgb</span><span style="color: #E06C75">::</span><span style="color: #BBBBBB">&lt;</span><span style="color: #C678DD">255</span><span style="color: #BBBBBB">, </span><span style="color: #C678DD">63</span><span style="color: #BBBBBB">, </span><span style="color: #C678DD">128</span><span style="color: #BBBBBB">&gt;(),</span></div><div class='line'><span style="color: #BBBBBB">                </span><span style="color: #ABB2BF">time</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">=</span><span style="color: #BBBBBB"> </span><span style="color: #98C379">format_duration</span><span style="color: #BBBBBB">(</span><span style="color: #ABB2BF">time</span><span style="color: #BBBBBB">)</span><span style="color: #E06C75">.</span><span style="color: #98C379">fg_rgb</span><span style="color: #E06C75">::</span><span style="color: #BBBBBB">&lt;</span><span style="color: #C678DD">101</span><span style="color: #BBBBBB">, </span><span style="color: #C678DD">252</span><span style="color: #BBBBBB">, </span><span style="color: #C678DD">218</span><span style="color: #BBBBBB">&gt;(),</span></div><div class='line'><span style="color: #BBBBBB">            );</span></div><div class='line'><span style="color: #BBBBBB">        &#125;</span></div><div class='line'><span style="color: #BBBBBB">    &#125;;</span></div><div class='line'><span style="color: #BBBBBB">&#125;</span></div><div class='line'></div><div class='line'><span style="color: #BBBBBB">#[macro_export]</span></div><div class='line'><span style="color: #98C379">macro_rules!</span><span style="color: #BBBBBB"> </span><span style="color: #98C379">test</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">    (</span><span style="color: #E06C75">$</span><span style="color: #ABB2BF">mod_name</span><span style="color: #E06C75">:</span><span style="color: #ABB2BF">ident</span><span style="color: #BBBBBB">&#123;</span><span style="color: #E06C75">$</span><span style="color: #BBBBBB">(&#123;</span><span style="color: #E06C75">$</span><span style="color: #ABB2BF">test_name</span><span style="color: #E06C75">:</span><span style="color: #ABB2BF">ident</span><span style="color: #BBBBBB">, </span><span style="color: #E06C75">$</span><span style="color: #ABB2BF">fun</span><span style="color: #E06C75">:</span><span style="color: #ABB2BF">expr</span><span style="color: #BBBBBB">, </span><span style="color: #E06C75">$</span><span style="color: #ABB2BF">answer</span><span style="color: #E06C75">:</span><span style="color: #ABB2BF">expr</span><span style="color: #BBBBBB">&#125;),</span><span style="color: #E06C75">+</span><span style="color: #BBBBBB">&#125;) </span><span style="color: #E06C75">=&gt;</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">        #[cfg(test)]</span></div><div class='line'><span style="color: #BBBBBB">        </span><span style="color: #56B6C2">mod</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">$</span><span style="color: #ABB2BF">mod_name</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">            </span><span style="color: #E06C75">use</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">super::*</span><span style="color: #BBBBBB">;</span></div><div class='line'></div><div class='line'><span style="color: #BBBBBB">            </span><span style="color: #E06C75">$</span><span style="color: #BBBBBB">(</span></div><div class='line'><span style="color: #BBBBBB">                #[test]</span></div><div class='line'><span style="color: #BBBBBB">                #[allow(clippy</span><span style="color: #E06C75">::</span><span style="color: #BBBBBB">bool_assert_comparison)]</span></div><div class='line'><span style="color: #BBBBBB">                </span><span style="color: #E06C75">fn</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">$</span><span style="color: #ABB2BF">test_name</span><span style="color: #BBBBBB">() &#123;</span></div><div class='line'><span style="color: #BBBBBB">                    </span><span style="color: #98C379">assert_eq!</span><span style="color: #BBBBBB">(</span><span style="color: #E06C75">$</span><span style="color: #ABB2BF">fun</span><span style="color: #BBBBBB">, </span><span style="color: #E06C75">$</span><span style="color: #ABB2BF">answer</span><span style="color: #BBBBBB">);</span></div><div class='line'><span style="color: #BBBBBB">                &#125;</span></div><div class='line'><span style="color: #BBBBBB">            )</span><span style="color: #E06C75">+</span></div><div class='line'><span style="color: #BBBBBB">        &#125;</span></div><div class='line'><span style="color: #BBBBBB">    &#125;;</span></div><div class='line'><span style="color: #BBBBBB">&#125;</span></div></code></div></pre>`,e,a,b="2. Problems:",C,u,i="<li>Problem 15</li>",n,o,x=`<p>Starting in the top left corner of a <code>2x2</code> grid, and only being able to move to
the right and down, there are exactly 6 routes to the bottom right corner. How
many such routes are there through a <code>20x20</code> grid?</p>`,F,A,M="Interesting this problem can be convert to:",$,h,j="<p>Count the number of way to choose 20 routes from a set of 40 routes of a 20x20 grid. This forms the binomial coefficient <code>C(40, 20)</code></p>",z,w,X=`<pre class="shiki one-monokai" style="background-color: #1e1e1e; color: #bbbbbb" rust="true"><div class="language-id">rust</div><div class='code-container'><code><div class='line'><span style="color: #676F7D">// Lattice Paths</span></div><div class='line'></div><div class='line'><span style="color: #E06C75">use</span><span style="color: #BBBBBB"> std</span><span style="color: #E06C75">::</span><span style="color: #BBBBBB">borrow</span><span style="color: #E06C75">::</span><span style="color: #61AFEF">BorrowMut</span><span style="color: #BBBBBB">;</span></div><div class='line'></div><div class='line'><span style="color: #56B6C2">trait</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">Math</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">    </span><span style="color: #E06C75">fn</span><span style="color: #BBBBBB"> </span><span style="color: #98C379">doubled</span><span style="color: #BBBBBB">(</span><span style="color: #E06C75">self</span><span style="color: #BBBBBB">) </span><span style="color: #E06C75">-&gt;</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">Self</span><span style="color: #BBBBBB">;</span></div><div class='line'><span style="color: #BBBBBB">&#125;</span></div><div class='line'></div><div class='line'><span style="color: #E06C75">impl</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">Math</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">for</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">usize</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">    </span><span style="color: #E06C75">fn</span><span style="color: #BBBBBB"> </span><span style="color: #98C379">doubled</span><span style="color: #BBBBBB">(</span><span style="color: #E06C75">self</span><span style="color: #BBBBBB">) </span><span style="color: #E06C75">-&gt;</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">Self</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">        </span><span style="color: #E06C75">self</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">*</span><span style="color: #BBBBBB"> </span><span style="color: #C678DD">2</span></div><div class='line'><span style="color: #BBBBBB">    &#125;</span></div><div class='line'><span style="color: #BBBBBB">&#125;</span></div><div class='line'></div><div class='line'><span style="color: #56B6C2">struct</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">BinomialCoefficient</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">    </span><span style="color: #ABB2BF">n</span><span style="color: #E06C75">:</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">usize</span><span style="color: #BBBBBB">,</span></div><div class='line'><span style="color: #BBBBBB">    </span><span style="color: #ABB2BF">k</span><span style="color: #E06C75">:</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">usize</span><span style="color: #BBBBBB">,</span></div><div class='line'><span style="color: #BBBBBB">&#125;</span></div><div class='line'></div><div class='line'><span style="color: #E06C75">impl</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">BinomialCoefficient</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">    </span><span style="color: #E06C75">fn</span><span style="color: #BBBBBB"> </span><span style="color: #98C379">new</span><span style="color: #BBBBBB">(</span><span style="color: #ABB2BF">n</span><span style="color: #E06C75">:</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">usize</span><span style="color: #BBBBBB">, </span><span style="color: #ABB2BF">k</span><span style="color: #E06C75">:</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">usize</span><span style="color: #BBBBBB">) </span><span style="color: #E06C75">-&gt;</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">Self</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">        </span><span style="color: #98C379">assert!</span><span style="color: #BBBBBB">(</span><span style="color: #ABB2BF">n</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">&gt;</span><span style="color: #BBBBBB"> </span><span style="color: #ABB2BF">k</span><span style="color: #BBBBBB">, </span><span style="color: #E5C07B">"n must be larger than k"</span><span style="color: #BBBBBB">);</span></div><div class='line'></div><div class='line'><span style="color: #BBBBBB">        </span><span style="color: #E06C75">Self</span><span style="color: #BBBBBB"> &#123; </span><span style="color: #ABB2BF">n</span><span style="color: #BBBBBB">, </span><span style="color: #ABB2BF">k</span><span style="color: #BBBBBB"> &#125;</span></div><div class='line'><span style="color: #BBBBBB">    &#125;</span></div><div class='line'></div><div class='line'><span style="color: #676F7D">    /// Get the number of ways to choose an (unordered)</span></div><div class='line'><span style="color: #676F7D">    /// subset of &#96;k&#96; elements from a fixed set of &#96;n&#96; elements</span></div><div class='line'><span style="color: #BBBBBB">    </span><span style="color: #E06C75">fn</span><span style="color: #BBBBBB"> </span><span style="color: #98C379">value</span><span style="color: #BBBBBB">(</span><span style="color: #E06C75">self</span><span style="color: #BBBBBB">) </span><span style="color: #E06C75">-&gt;</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">usize</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">        </span><span style="color: #56B6C2">let</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">mut</span><span style="color: #BBBBBB"> </span><span style="color: #ABB2BF">n</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">=</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">self.</span><span style="color: #BBBBBB">n;</span></div><div class='line'></div><div class='line'><span style="color: #BBBBBB">        (</span><span style="color: #C678DD">1</span><span style="color: #E06C75">..=self.</span><span style="color: #BBBBBB">k)</span><span style="color: #E06C75">.</span><span style="color: #98C379">borrow_mut</span><span style="color: #BBBBBB">()</span><span style="color: #E06C75">.</span><span style="color: #98C379">fold</span><span style="color: #BBBBBB">(</span><span style="color: #C678DD">1</span><span style="color: #BBBBBB">, </span><span style="color: #E06C75">|mut</span><span style="color: #BBBBBB"> </span><span style="color: #ABB2BF">acc</span><span style="color: #BBBBBB">, </span><span style="color: #ABB2BF">k</span><span style="color: #E06C75">|</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">            </span><span style="color: #ABB2BF">acc</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">*=</span><span style="color: #BBBBBB"> </span><span style="color: #ABB2BF">n</span><span style="color: #BBBBBB">;</span></div><div class='line'><span style="color: #BBBBBB">            </span><span style="color: #ABB2BF">n</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">-=</span><span style="color: #BBBBBB"> </span><span style="color: #C678DD">1</span><span style="color: #BBBBBB">;</span></div><div class='line'></div><div class='line'><span style="color: #BBBBBB">            </span><span style="color: #ABB2BF">acc</span><span style="color: #BBBBBB"> </span><span style="color: #E06C75">/</span><span style="color: #BBBBBB"> </span><span style="color: #ABB2BF">k</span></div><div class='line'><span style="color: #BBBBBB">        &#125;)</span></div><div class='line'><span style="color: #BBBBBB">    &#125;</span></div><div class='line'><span style="color: #BBBBBB">&#125;</span></div><div class='line'></div><div class='line'><span style="color: #E06C75">fn</span><span style="color: #BBBBBB"> </span><span style="color: #98C379">lattice_path_counter</span><span style="color: #BBBBBB">(</span><span style="color: #ABB2BF">grid_size</span><span style="color: #E06C75">:</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">usize</span><span style="color: #BBBBBB">) </span><span style="color: #E06C75">-&gt;</span><span style="color: #BBBBBB"> </span><span style="color: #61AFEF">usize</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">    </span><span style="color: #61AFEF">BinomialCoefficient</span><span style="color: #E06C75">::</span><span style="color: #98C379">new</span><span style="color: #BBBBBB">(</span><span style="color: #ABB2BF">grid_size</span><span style="color: #E06C75">.</span><span style="color: #98C379">doubled</span><span style="color: #BBBBBB">(), </span><span style="color: #ABB2BF">grid_size</span><span style="color: #BBBBBB">)</span><span style="color: #E06C75">.</span><span style="color: #98C379">value</span><span style="color: #BBBBBB">()</span></div><div class='line'><span style="color: #BBBBBB">&#125;</span></div><div class='line'></div><div class='line'><span style="color: #BBBBBB">pj_euler</span><span style="color: #E06C75">::</span><span style="color: #98C379">run!</span><span style="color: #BBBBBB">(</span><span style="color: #E5C07B">"Lattice Paths"</span><span style="color: #BBBBBB">, </span><span style="color: #98C379">lattice_path_counter</span><span style="color: #BBBBBB">(</span><span style="color: #C678DD">20</span><span style="color: #BBBBBB">));</span></div><div class='line'><span style="color: #BBBBBB">pj_euler</span><span style="color: #E06C75">::</span><span style="color: #98C379">test!</span><span style="color: #BBBBBB">(</span></div><div class='line'><span style="color: #BBBBBB">    </span><span style="color: #ABB2BF">lattice_paths</span><span style="color: #BBBBBB"> &#123;</span></div><div class='line'><span style="color: #BBBBBB">        &#123;</span><span style="color: #ABB2BF">grid_size_2_have_6_paths</span><span style="color: #BBBBBB">, </span><span style="color: #98C379">lattice_path_counter</span><span style="color: #BBBBBB">(</span><span style="color: #C678DD">2</span><span style="color: #BBBBBB">), </span><span style="color: #C678DD">6</span><span style="color: #BBBBBB">&#125;</span></div><div class='line'><span style="color: #BBBBBB">    &#125;</span></div><div class='line'><span style="color: #BBBBBB">);</span></div></code></div></pre>`,k;return{c(){s=f("h2"),s.textContent=p,r=E(),y=new I(!1),e=E(),a=f("h2"),a.textContent=b,C=E(),u=f("ul"),u.innerHTML=i,n=E(),o=f("blockquote"),o.innerHTML=x,F=E(),A=f("p"),A.textContent=M,$=E(),h=f("blockquote"),h.innerHTML=j,z=E(),w=new I(!1),k=U(),this.h()},l(B){s=_(B,"H2",{["data-svelte-h"]:!0}),D(s)!=="svelte-owlurq"&&(s.textContent=p),r=m(B),y=K(B,!1),e=m(B),a=_(B,"H2",{["data-svelte-h"]:!0}),D(a)!=="svelte-16jgzzc"&&(a.textContent=b),C=m(B),u=_(B,"UL",{["data-svelte-h"]:!0}),D(u)!=="svelte-pz8h12"&&(u.innerHTML=i),n=m(B),o=_(B,"BLOCKQUOTE",{["data-svelte-h"]:!0}),D(o)!=="svelte-1h4utpq"&&(o.innerHTML=x),F=m(B),A=_(B,"P",{["data-svelte-h"]:!0}),D(A)!=="svelte-9zlirq"&&(A.textContent=M),$=m(B),h=_(B,"BLOCKQUOTE",{["data-svelte-h"]:!0}),D(h)!=="svelte-a4i0r9"&&(h.innerHTML=j),z=m(B),w=K(B,!1),k=U(),this.h()},h(){y.a=e,w.a=k},m(B,d){v(B,s,d),v(B,r,d),y.m(l,B,d),v(B,e,d),v(B,a,d),v(B,C,d),v(B,u,d),v(B,n,d),v(B,o,d),v(B,F,d),v(B,A,d),v(B,$,d),v(B,h,d),v(B,z,d),w.m(X,B,d),v(B,k,d)},p:ls,d(B){B&&(t(s),t(r),y.d(),t(e),t(a),t(C),t(u),t(n),t(o),t(F),t(A),t($),t(h),t(z),t(k),w.d())}}}function is(c){let s,p;const r=[c[0],R];let y={$$slots:{default:[ys]},$$scope:{ctx:c}};for(let l=0;l<r.length;l+=1)y=q(y,r[l]);return s=new rs({props:y}),{c(){as(s.$$.fragment)},l(l){ns(s.$$.fragment,l)},m(l,e){os(s,l,e),p=!0},p(l,[e]){const a=e&1?es(r,[e&1&&Q(l[0]),e&0&&Q(R)]):{};e&2&&(a.$$scope={dirty:e,ctx:l}),s.$set(a)},i(l){p||(V(s.$$.fragment,l),p=!0)},o(l){W(s.$$.fragment,l),p=!1},d(l){ps(s,l)}}}const R={title:"Project Euler",description:"Project Euler in Rust",date:"30/06/2023"};function ds(c,s,p){return c.$$set=r=>{p(0,s=q(q({},s),S(r)))},s=S(s),[s]}class Es extends J{constructor(s){super(),N(this,s,ds,is,G,{})}}export{Es as component};