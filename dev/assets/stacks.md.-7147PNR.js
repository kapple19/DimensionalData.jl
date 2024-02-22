import{_ as n,E as h,c as p,J as a,w as e,V as t,o as d,m as s,a as i}from"./chunks/framework.SSsEDEan.js";const X=JSON.parse('{"title":"Stacks","description":"","frontmatter":{},"headers":[],"relativePath":"stacks.md","filePath":"stacks.md","lastUpdated":null}'),r={name:"stacks.md"},g=t(`<h1 id="Stacks" tabindex="-1">Stacks <a class="header-anchor" href="#Stacks" aria-label="Permalink to &quot;Stacks {#Stacks}&quot;">​</a></h1><p>An <code>AbstractDimStack</code> represents a collection of <code>AbstractDimArray</code> layers that share some or all dimensions. For any two layers, a dimension of the same name must have the identical lookup - in fact only one is stored for all layers to enforce this consistency.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DimensionalData</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x, y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> X</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">X</span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 1.0:1.0:10.0</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">→ </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">Y</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;"> 5.0:1.0:10.0</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> st </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DimStack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y), b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y), c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(y), d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)))</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">╭───────────────╮</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">10</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">6</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> DimStack</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> │</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├───────────────┴──────────────────────────────────────────── dims ┐</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">X</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float64} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">1.0:1.0:10.0</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">  → </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">Y</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float64} </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">5.0:1.0:10.0</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├────────────────────────────────────────────────────────── layers ┤</span></span>
<span class="line"><span style="--shiki-light:#00afaf;--shiki-dark:#00afaf;">  :a</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> eltype: </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">Float64</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> dims: </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">X</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">, </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">Y</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> size: </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">10</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">6</span></span>
<span class="line"><span style="--shiki-light:#00afaf;--shiki-dark:#00afaf;">  :b</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> eltype: </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">Float64</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> dims: </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">X</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">, </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">Y</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> size: </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">10</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">6</span></span>
<span class="line"><span style="--shiki-light:#00afaf;--shiki-dark:#00afaf;">  :c</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> eltype: </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">Float64</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> dims: </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">Y</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> size: </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">6</span></span>
<span class="line"><span style="--shiki-light:#00afaf;--shiki-dark:#00afaf;">  :d</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> eltype: </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">Float64</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> dims: </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">X</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> size: </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">10</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">└──────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><p>The behaviour is somewhere ebetween a <code>NamedTuple</code> and an <code>AbstractArray</code>.</p>`,7),y=s("p",null,[i("Layers can be accessed with "),s("code",null,".name"),i(" or "),s("code",null,"[:name]")],-1),f=s("div",{class:"language-julia vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"julia"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"julia"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," st"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"a")])])])],-1),c=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"╭────────────────────────────╮")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"│ "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"10"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"×"),s("span",{style:{"--shiki-light":"#0087d7","--shiki-dark":"#0087d7"}},"6"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}}," DimArray{Float64,2}"),s("span",{style:{"--shiki-light":"#00afaf","--shiki-dark":"#00afaf"}}," a"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"├────────────────────────────┴─────────────────────────────── dims ┐")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  ↓ "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"X"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}}," Sampled{Float64} "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"1.0:1.0:10.0"),s("span",{style:{"--shiki-light":"#808080","--shiki-dark":"#808080"}}," ForwardOrdered"),s("span",{style:{"--shiki-light":"#808080","--shiki-dark":"#808080"}}," Regular"),s("span",{style:{"--shiki-light":"#808080","--shiki-dark":"#808080"}}," Points"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#0087d7","--shiki-dark":"#0087d7"}},"  → "),s("span",{style:{"--shiki-light":"#0087d7","--shiki-dark":"#0087d7"}},"Y"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}}," Sampled{Float64} "),s("span",{style:{"--shiki-light":"#0087d7","--shiki-dark":"#0087d7"}},"5.0:1.0:10.0"),s("span",{style:{"--shiki-light":"#808080","--shiki-dark":"#808080"}}," ForwardOrdered"),s("span",{style:{"--shiki-light":"#808080","--shiki-dark":"#808080"}}," Regular"),s("span",{style:{"--shiki-light":"#808080","--shiki-dark":"#808080"}}," Points")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"└──────────────────────────────────────────────────────────────────┘")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  ↓"),s("span",{style:{"--shiki-light":"#0087d7","--shiki-dark":"#0087d7"}}," →"),s("span",{style:{"--shiki-light":"#0087d7","--shiki-dark":"#0087d7"}},"  5.0"),s("span",{style:{"--shiki-light":"#0087d7","--shiki-dark":"#0087d7"}},"        6.0"),s("span",{style:{"--shiki-light":"#0087d7","--shiki-dark":"#0087d7"}},"       7.0"),s("span",{style:{"--shiki-light":"#0087d7","--shiki-dark":"#0087d7"}},"       8.0"),s("span",{style:{"--shiki-light":"#0087d7","--shiki-dark":"#0087d7"}},"        9.0"),s("span",{style:{"--shiki-light":"#0087d7","--shiki-dark":"#0087d7"}},"         10.0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  1.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.997287   0.451928  0.146382  0.563318   0.803663     0.266018")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  2.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.834743   0.455868  0.971017  0.935321   0.276365     0.458988")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  3.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.278166   0.922838  0.7597    0.538028   0.42931      0.673287")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  4.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.0741031  0.259789  0.844284  0.369147   0.638039     0.765387")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  5.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.958366   0.208161  0.576098  0.320298   0.00568905   0.166785")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  6.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.615053   0.718499  0.604142  0.293699   0.045797     0.454862")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  7.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.97217    0.474636  0.946102  0.579902   0.817953     0.503338")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  8.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.0875199  0.199511  0.836208  0.0212747  0.243582     0.783104")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  9.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.870205   0.788346  0.42901   0.921586   0.685723     0.740905")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}}," 10.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.534398   0.814924  0.860956  0.369943   0.846352     0.329252")])])])],-1),o=s("div",{class:"language-julia vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"julia"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"julia"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," st["),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":c"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")])])])],-1),E=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"╭─────────────────────────────────╮")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"│ "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"6-element "),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"DimArray{Float64,1}"),s("span",{style:{"--shiki-light":"#00afaf","--shiki-dark":"#00afaf"}}," c"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"├─────────────────────────────────┴───────────────────────── dims ┐")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  ↓ "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"Y"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}}," Sampled{Float64} "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"5.0:1.0:10.0"),s("span",{style:{"--shiki-light":"#808080","--shiki-dark":"#808080"}}," ForwardOrdered"),s("span",{style:{"--shiki-light":"#808080","--shiki-dark":"#808080"}}," Regular"),s("span",{style:{"--shiki-light":"#808080","--shiki-dark":"#808080"}}," Points")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"└─────────────────────────────────────────────────────────────────┘")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  5.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.501943")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  6.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.121015")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  7.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.714232")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  8.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.856344")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  9.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.934987")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}}," 10.0"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"  0.205027")])])])],-1),u=s("p",null,[i("Indexing with a scalar returns a "),s("code",null,"NamedTuple"),i(" of values, one for each layer:")],-1),m=s("div",{class:"language-julia vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"julia"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"julia"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," st[X"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", Y"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"4"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")])])])],-1),F=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"(a = 0.5633183833981413, b = 0.20485223559056653, c = 0.8563442373253659, d = 0.464941005323956)")])])])],-1),b=s("p",null,[i("Selectors for single values also return a "),s("code",null,"NamedTuple")],-1),v=s("div",{class:"language-julia vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"julia"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"julia"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," st[X"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"At"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"2.0"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"), Y"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"Near"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"20"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")]")])])])],-1),C=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"(a = 0.45898815766782786, b = 0.15259869228917522, c = 0.2050273113454144, d = 0.20497460711478854)")])])])],-1),_=s("p",null,[i("If not all dimensions are scalars, we return another "),s("code",null,"DimStack"),i(". The layers without another dimension are now zero-dimensional:")],-1),A=s("div",{class:"language-julia vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"julia"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"julia"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," st[X"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"At"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"2.0"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")]")])])])],-1),D=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"╭────────────────────╮")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"│ "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"6-element "),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"DimStack"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"├────────────────────┴────────────────────────────────────── dims ┐")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"  ↓ "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"Y"),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}}," Sampled{Float64} "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"5.0:1.0:10.0"),s("span",{style:{"--shiki-light":"#808080","--shiki-dark":"#808080"}}," ForwardOrdered"),s("span",{style:{"--shiki-light":"#808080","--shiki-dark":"#808080"}}," Regular"),s("span",{style:{"--shiki-light":"#808080","--shiki-dark":"#808080"}}," Points")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"├───────────────────────────────────────────────────────── layers ┤")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#00afaf","--shiki-dark":"#00afaf"}},"  :a"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," eltype: "),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"Float64"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," dims: "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"Y"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," size: "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"6")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#00afaf","--shiki-dark":"#00afaf"}},"  :b"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," eltype: "),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"Float64"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," dims: "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"Y"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," size: "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"6")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#00afaf","--shiki-dark":"#00afaf"}},"  :c"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," eltype: "),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"Float64"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," dims: "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"Y"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," size: "),s("span",{style:{"--shiki-light":"#ff875f","--shiki-dark":"#ff875f"}},"6")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#00afaf","--shiki-dark":"#00afaf"}},"  :d"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," eltype: "),s("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"Float64"),s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}}," dims: ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"└─────────────────────────────────────────────────────────────────┘")])])])],-1),B=t(`<p>Indexing with <code>Dimensions</code>, <code>Selectors</code> works as with an <code>AbstractDimArray</code>, except it indexes for all layers at the same time, returning either a new small <code>AbstractDimStack</code> or a scalar value, if all layers are scalars.</p><p>Base functions like <code>mean</code>, <code>maximum</code>, <code>reverse</code> are applied to all layers of the stack.</p><p><code>broadcast_dims</code> broadcasts functions over any mix of <code>AbstractDimStack</code> and <code>AbstractDimArray</code> returning a new <code>AbstractDimStack</code> with layers the size of the largest layer in the broadcast. This will work even if dimension permutation does not match in the objects.</p><h1 id="Performance" tabindex="-1">Performance <a class="header-anchor" href="#Performance" aria-label="Permalink to &quot;Performance {#Performance}&quot;">​</a></h1><p>Indexing stack is fast - indexing a single value return a <code>NamedTuple</code> from all layers usingally, measures in nanoseconds. There are some compilation overheads to this though, and stacks with very many layers can take a long time to compile.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BenchmarkTools</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @btime</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st[X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  8.936 ns (0 allocations: 0 bytes)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">(a = 0.5633183833981413, b = 0.20485223559056653, c = 0.8563442373253659, d = 0.464941005323956)</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @btime</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  8.665 ns (0 allocations: 0 bytes)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">(a = 0.5633183833981413, b = 0.20485223559056653, c = 0.8563442373253659, d = 0.464941005323956)</span></span></code></pre></div>`,9);function j(S,T,w,P,x,Y){const l=h("PluginTabsTab"),k=h("PluginTabs");return d(),p("div",null,[g,a(k,null,{default:e(()=>[a(l,{label:"getting layers"},{default:e(()=>[y,f,c,o,E]),_:1}),a(l,{label:"scalars"},{default:e(()=>[u,m,F]),_:1}),a(l,{label:"selectors"},{default:e(()=>[b,v,C]),_:1}),a(l,{label:"partial indexing"},{default:e(()=>[_,A,D]),_:1})]),_:1}),B])}const z=n(r,[["render",j]]);export{X as __pageData,z as default};
