# Plots.jl

Plots.jl and Makie.jl functions mostly work out of the box on `AbstractDimArray`,
although not with the same results - they choose to follow each packages default
behaviour as much as possible. 

This will plot a line plot with 'a', 'b' and 'c' in the legend,
and values 1-10 on the labelled X axis:


Plots.jl support is deprecated, as development is moving to Makie.jl


# Makie.jl

Makie.jl functions also mostly work with [`AbstractDimArray`](@ref) and will `permute` and 
[`reorder`](@ref) axes into the right places, especially if `X`/`Y`/`Z`/`Ti` dimensions are used.

In Makie a `DimMatrix` will plot as a heatmap by default, but it will have labels 
and axes in the right places:

```@example Makie
using DimensionalData, CairoMakie
CairoMakie.activate!(type = :svg) # hide

A = rand(X(10:10:100), Y([:a, :b, :c]))
Makie.plot(A; colormap=:inferno)
```

Other plots also work, here DD ignores the axis order and instead 
favours the categorical variable for the X axis:

```@example Makie
Makie.rainclouds(A)
```

## AlgebraOfGraphics.jl

AlgebraOfGraphics.jl is a high-level plotting library built on top of Makie.jl that provides a declarative algebra for creating complex visualizations, similar to `ggplot2`'s "grammar of graphics" in R. It allows you to construct plots using algebraic operations like `*` and `+`, making it easy to create sophisticated graphics with minimal code.

Any `DimensionalArray` is also a `Tables.jl` table, so it can be used with `AlgebraOfGraphics.jl` directly.  You can indicate columns in `mapping` with Symbols directly (like `:X` or `:Y`), **or** you can use the `Dim` type directly (like `X` or `Y`)! 

!!! note
    If your dimensional array is not named, then you can access the data as the **`:unnamed`** column.
    Otherwise, the data is accessible by its name.

Let's start with a simple example, and plot a 2-D dimarray as a scatter plot, colored by its value.

```@example Makie
using DimensionalData, AlgebraOfGraphics, CairoMakie
CairoMakie.activate!(type = :svg) # hide

A = DimArray(rand(10, 10), (X(1:10), Y(1:10)), name = :data)

data(A) * mapping(X, Y; color = :data) * visual(Scatter) |> draw
```

Don't restrict yourself to standard visualizations!  You can use all of AlgebraOfGraphics' features.

Let's plot each X-slice, faceted in Y:

```@example Makie
data(A) * mapping(X, :data; layout = Y => nonnumeric) * visual(Lines) |> draw
```

This approach is also applicable to `DimStack`s, since they also convert to DimTables.  Let's see an example here.

We'll construct a DimStack with the `:data` layer being our DimArray `A`, and an X-only variable `:color` that we'll use to color the line.

```@example Makie
color_vec = DimVector(1:10, X)
ds = DimStack((; data = A, color = color_vec))

data(ds) * mapping(X, :data; color = :color, layout = Y => nonnumeric) * visual(Lines) |> draw
```

!!! note
    If you wish to subset your DimArray, you can't pass selectors like `X(1 .. 2)` to AlgebraOfGraphics.  
    Instead, subset the DimArray you pass to `data` - this is a very cheap operation.

### `DimArray`: Some noisy sinusoidal data...

Let's generate a signal's components and sum them together:

```@example AoG_DimArray
using DimensionalData
using CairoMakie, AlgebraOfGraphics

sin2pi(t) = sin(2t)
c = 1.0
amplitude(t, λ, φ) = sin2pi(c*t/λ + φ) + 0.5rand()
λ = Dim{:λ}
φ = Dim{:φ}

signal_components = rebuild(
    (
        Ti(0 : 0.01 : 10),
        λ(1.0 : 3),
        φ(0 : 0.1 : 0.5)
    ) |> DimPoints .|> splat(amplitude);
    name = :A
)

signal = sum(signal_components; dims = otherdims(signal_components, Ti))
signal = dropdims(signal, dims = (λ, φ))
```

#### ...colored by wavelength and gridded by phase

We can compare the signal components by their wavelength and phase:

```@example AoG_DimArray
data(signal_components) * visual(linestyle = :dash) * mapping(
    Ti, :A,
    color = λ => nonnumeric,
    layout = φ => nonnumeric
) * visual(Lines) |> draw
```

Dimensions can also be invoked by their name `Symbol`s:

```@example AoG_DimArray
data(signal_components) * visual(linestyle = :dash) * mapping(
    :Ti, :A,
    color = :λ => nonnumeric,
    layout = :φ => nonnumeric
) * visual(Lines) |> draw
```

#### ...plotted for a portion of the data

Sometimes we want a plot to focus on a particular aspect of the data:

```@example AoG_DimArray
data(
    signal_components[Ti = Where(<=(5)), λ = Where(isodd), φ = 0 .. 0.2]
) * visual(linestyle = :dash) * mapping(
    Ti, :A,
    color = λ => nonnumeric,
    layout = φ => nonnumeric
) * visual(Lines) |> draw
```

#### ...compared with the data summation

AlgebraOfGraphics nicely composes plots together.
We can plot components on top of the signal:

```@example AoG_DimArray
(
    data(signal)
    + data(signal_components) * visual(linestyle = :dash) * mapping(
    color = :λ => nonnumeric,
    layout = :φ => nonnumeric
    )
) * visual(Lines) * mapping(:Ti, :A) |> draw
```

#### ...smoothed

Since the data is noisy,
we can use AlgebraOfGraphics' simple `smooth`ener
to get a clearer idea of what the underlying signal components look like:

```@example AoG_DimArray
data(signal_components) * AlgebraOfGraphics.smooth(span = 0.2) * mapping(
    :Ti, :A,
    color = :λ => nonnumeric,
    layout = :φ => nonnumeric
) |> draw
```

#### ...smoothed alongside scattered data

We may also want to see the smoothened components alongside the original data:

```@example AoG_DimArray
(
    AlgebraOfGraphics.smooth(span = 0.2)
    + visual(Scatter, markersize = 2, alpha = 0.4)
) * data(signal_components) * mapping(
    :Ti, :A,
    color = :λ => nonnumeric,
    layout = :φ => nonnumeric
) |> draw
```

#### ...smoothed with two legends

And sometimes more visual indicators assist with identifiability:

```@example AoG_DimArray
data(signal_components) * AlgebraOfGraphics.smooth(span = 0.2) * mapping(
    linestyle = λ => nonnumeric,
    color = φ => nonnumeric,
    layout = λ => nonnumeric
) * visual(Lines) * mapping(Ti, :A) |> draw
```

## Test series plots

### default colormap

```@example Makie
B = rand(X(10:10:100), Y([:a, :b, :c, :d, :e, :f, :g, :h, :i, :j]))
Makie.series(B)
```

### A different colormap
The colormap is controlled by the `color` argument, which can take as an input a named colormap, i.e. `:plasma` or a list of colours. 

```@example Makie
Makie.series(B; color=:plasma)
```

```@example Makie
Makie.series(A; color=[:red, :blue, :orange])
```
### with markers

```@example Makie
Makie.series(A; color=[:red, :blue, :orange], markersize=15)
```

A lot more is planned for Makie.jl plots in future!
