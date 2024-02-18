import{_ as a,c as e,o as r,V as t}from"./chunks/framework.uHRfREZ8.js";const j=JSON.parse('{"title":"Integrations","description":"","frontmatter":{},"headers":[],"relativePath":"integrations.md","filePath":"integrations.md","lastUpdated":null}'),i={name:"integrations.md"},s=t('<h1 id="Integrations" tabindex="-1">Integrations <a class="header-anchor" href="#Integrations" aria-label="Permalink to &quot;Integrations {#Integrations}&quot;">​</a></h1><h2 id="Spatial-sciences" tabindex="-1">Spatial sciences <a class="header-anchor" href="#Spatial-sciences" aria-label="Permalink to &quot;Spatial sciences {#Spatial-sciences}&quot;">​</a></h2><h3 id="Rasters.jl" tabindex="-1">Rasters.jl <a class="header-anchor" href="#Rasters.jl" aria-label="Permalink to &quot;Rasters.jl {#Rasters.jl}&quot;">​</a></h3><p><a href="https://rafaqz.github.io/Rasters.jl/stable" target="_blank" rel="noreferrer">Raster.jl</a> extends DD for geospatial data manipulation, providing file load/save for a wide range of raster data sources and common GIS tools like polygon rasterization and masking. <code>Raster</code> types are aware of <code>crs</code> and their <code>missingval</code> (which is often not <code>missing</code> for performance and storage reasons).</p><p>Rasters.jl is also the reason DimensionalData.jl exists at all! But it always made sense to separate out spatial indexing from GIS tools and dependencies.</p><p>A <code>Raster</code> is a <code>AbstractDimArray</code>, a <code>RasterStack</code> is a <code>AbstractDimStack</code>, and <code>Projected</code> and <code>Mapped</code> are <code>AbstractSample</code> lookups.</p><h3 id="YAXArrays.jl" tabindex="-1">YAXArrays.jl <a class="header-anchor" href="#YAXArrays.jl" aria-label="Permalink to &quot;YAXArrays.jl {#YAXArrays.jl}&quot;">​</a></h3><p><a href="https://juliadatacubes.github.io/YAXArrays.jl/dev/" target="_blank" rel="noreferrer">YAXArrays.jl</a> is another spatial data package aimmed more at (very) large datasets. It&#39;s functionality is slowly converging with Rasters.jl (both wrapping DiskArray.jl/DimensionalData.jl) and we work closely with the developers.</p><p><code>YAXArray</code> is a <code>AbstractDimArray</code> and inherits its behaviours.</p><h3 id="ClimateBase.jl" tabindex="-1">ClimateBase.jl <a class="header-anchor" href="#ClimateBase.jl" aria-label="Permalink to &quot;ClimateBase.jl {#ClimateBase.jl}&quot;">​</a></h3><p><a href="https://juliaclimate.github.io/ClimateBase.jl/dev/" target="_blank" rel="noreferrer">ClimateBase.jl</a> Extends DD with methods for analysis of climate data.</p><h2 id="Statistics" tabindex="-1">Statistics <a class="header-anchor" href="#Statistics" aria-label="Permalink to &quot;Statistics {#Statistics}&quot;">​</a></h2><h2 id="ArviZ.jl" tabindex="-1">ArviZ.jl <a class="header-anchor" href="#ArviZ.jl" aria-label="Permalink to &quot;ArviZ.jl {#ArviZ.jl}&quot;">​</a></h2><p><a href="https://arviz-devs.github.io/ArviZ.jl/dev/" target="_blank" rel="noreferrer">ArviZ.jl</a> Is a julia package for exploratory analysis of Bayesian models.</p><p>An <code>ArviZ.Dataset</code> is an <code>AbstractDimStack</code>!</p><h2 id="Optimization" tabindex="-1">Optimization <a class="header-anchor" href="#Optimization" aria-label="Permalink to &quot;Optimization {#Optimization}&quot;">​</a></h2><h3 id="JuMP.jl" tabindex="-1">JuMP.jl <a class="header-anchor" href="#JuMP.jl" aria-label="Permalink to &quot;JuMP.jl {#JuMP.jl}&quot;">​</a></h3><p><a href="https://jump.dev/" target="_blank" rel="noreferrer">JuMP.jl</a> is a powerful omptimisation DSL. It defines its own named array types but now accepts any <code>AbstractDimArray</code> too, through a package extension.</p><h2 id="Simulations" tabindex="-1">Simulations <a class="header-anchor" href="#Simulations" aria-label="Permalink to &quot;Simulations {#Simulations}&quot;">​</a></h2><h3 id="CryoGrid.jl" tabindex="-1">CryoGrid.jl <a class="header-anchor" href="#CryoGrid.jl" aria-label="Permalink to &quot;CryoGrid.jl {#CryoGrid.jl}&quot;">​</a></h3><p><a href="https://juliahub.com/ui/Packages/General/CryoGrid" target="_blank" rel="noreferrer">CryoGrid.jl</a> A Juia implementation of the CryoGrid permafrost model.</p><p><code>CryoGridOutput</code> uses <code>DimArray</code> for views into output data.</p><h3 id="DynamicGrids.jl" tabindex="-1">DynamicGrids.jl <a class="header-anchor" href="#DynamicGrids.jl" aria-label="Permalink to &quot;DynamicGrids.jl {#DynamicGrids.jl}&quot;">​</a></h3><p><a href="https://github.com/cesaraustralia/DynamicGrids.jl" target="_blank" rel="noreferrer">DynamicGrids.jl</a> is a spatial simulation engine, for cellular automata and spatial process models.</p><p>All DynamicGrids.jl <code>Outputs</code> are <code>&lt;: AbstractDimArray</code>, and <code>AbstractDimArray</code> are used for auxiliary data to allow temporal synchronisation during simulations. Notably, this all works on GPUs!</p><h2 id="Analysis" tabindex="-1">Analysis <a class="header-anchor" href="#Analysis" aria-label="Permalink to &quot;Analysis {#Analysis}&quot;">​</a></h2><h3 id="AstroImages.jl" tabindex="-1">AstroImages.jl <a class="header-anchor" href="#AstroImages.jl" aria-label="Permalink to &quot;AstroImages.jl {#AstroImages.jl}&quot;">​</a></h3><p><a href="http://juliaastro.org/dev/modules/AstroImages/" target="_blank" rel="noreferrer">AstroImages.jl</a> Provides tools to load and visualise astromical images. <code>AstroImage</code> is <code>&lt;: AbstractDimArray</code>.</p><h3 id="TimeseriesTools.jl" tabindex="-1">TimeseriesTools.jl <a class="header-anchor" href="#TimeseriesTools.jl" aria-label="Permalink to &quot;TimeseriesTools.jl {#TimeseriesTools.jl}&quot;">​</a></h3><p>[TimeseriesTools.jl](<a href="https://juliahub.com/ui/Packages/General/TimeseriesTools" target="_blank" rel="noreferrer">https://juliahub.com/ui/Packages/General/TimeseriesTools</a> Uses <code>DimArray</code> for time-series data.</p>',30),o=[s];function l(n,d,c,h,m,p){return r(),e("div",null,o)}const f=a(i,[["render",l]]);export{j as __pageData,f as default};
