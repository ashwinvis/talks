class: center, middle

# Make your Python code fly at _transonic_ speeds!

<img src="./images/image_transonic_vision.png" style="height: 10em;"/>

## [transonic.readthedocs.io](https://transonic.readthedocs.io)

<img src="./images/dp_kth.svg" style="height: 3em;"/>
<img src="./images/dp_su.gif" style="height: 3em;"/>
<img src="./images/dp_uga.jpg" style="height: 3em;"/>


<div style="font-size: 0.8em;">
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img
alt="Creative Commons License" style="border-width:0; height: 1em;"
src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>&nbsp;
This presentation is licensed under a 
<a rel="license"
href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution
4.0 International License</a>
</div>

---

.pull-left[
## `$ who`

we are

<img src="./images/dp_avmo.jpg" style="height: 8em;"/>
<img src="./images/dp_blanc_fatin.jpg" style="height: 8em;"/>
<img src="./images/dp_augier.jpg" style="height: 8em;"/>


- **Ashwin Vishnu Mohanan ([ashwinvis.github.io](https://ashwinvis.github.io)**)
  - Postdoctoral researcher, SU
  - Ph.D. in Engineering Mechanics, KTH
-  Pierre Blanc-fatin
  - Graduate student, Université Grenoble Alpes
- Pierre Augier
  - CNRS researcher, LEGI, Université Grenoble Alpes

]
.pull-right[

## `$ whoami`

- Researcher: Computational fluid dynamics of atmospheric flows

- Python user / core developer of [FluidDyn project](https://fluiddyn.rtfd.io) (including [`transonic`](https://transonic.rtfd.io))

![](./images/logo_fluiddyn_rect.png)

]


---

## `$ users`

### this talk is meant for

.pull-left[
```python

if input("I ...") in (
    "use NumPy a lot",
    "write Python extensions"
    "write CPU-intensive codes",
    "think my Python codes are really slow"
):
    print("Yes, this talk is for you!")
else:
    print("It is probably useful... :)")

```
]

.pull-right[
<img src="./images/noun_confused.svg" style="height: 10em"/>
]


---
class: center, middle, inverse
# Brief guide on writing<br/> optimized, maintainable Python code
---
layout: false
.left-column[
  ## Should you optimize?
]
.right-column[
- Balance between _runtime efficency_ and _cost of development_

- Do not optimize everything

> Premature Optimization Is the Root of All Evil - _D. Knuth_

- CPU-bound or I/O-bound?

- Measure ⏱ , don't guess! **Profile** to find the bottlenecks
  - `python -m cProfile --help`

- Use efficient **algorithms** and **data structures**

- Test driven development to maintain correctness

]
---
.left-column[
  ## Should you optimize?
  ## Optimize hotspots
]
.right-column[
- **Interface**: with existing C / C++ / Fortran libraries,
  - in another language (`pybind11`, `PyO3`, `Boost.Python`, `SWIG`, ...)

  - in a "Pythonic" approach (`ctypes`, `cffi`, `Cython`, `numpy.f2py`, ...)

- **Extend**: write Python and generate extensions, which are compiled,
  - _Ahead of Time_ AOT: `Cython`, `Pythran`,...

  - _Just in Time_ JIT: `Numba`, ...

- Set an optimization target .red[*]

> 80 percent of the runtime is spent in 20 percent of the source code - _S. Meyers_

<img src="./images/fluidsim_profile2d.png" style="width: 110%"
alt="Profiling FluidSim, a computational fluid dynamics code"/>


.footnote-cite[.red[*]
  <span style="font-variant:small-caps;">Mohanan, A. V., Bonamy, C., Linares, M. C., and Augier, P.</span> 2019 FluidSim: Modular, Object-Oriented Python Package for High-Performance CFD Simulations <i>J. Open Res. Softw.</i>, <b>7</b>, 14. doi:<a href="https://doi.org/10.5334/jors.239">10.5334/jors.239</a>
  <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=info%3Adoi%2F10.5334%2Fjors.239&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=FluidSim%3A%20Modular%2C%20Object-Oriented%20Python%20Package%20for%20High-Performance%20CFD%20Simulations&amp;rft.jtitle=Journal%20of%20Open%20Research%20Software&amp;rft.volume=7&amp;rft.issue=1&amp;rft.aufirst=Ashwin%20Vishnu&amp;rft.aulast=Mohanan&amp;rft.au=Ashwin%20Vishnu%20Mohanan&amp;rft.au=Cyrille%20Bonamy&amp;rft.au=Miguel%20Calpe%20Linares&amp;rft.au=Pierre%20Augier&amp;rft.date=2019-04-26&amp;rft.pages=14&amp;rft.issn=2049-9647&amp;rft.language=en"></span>
]
]
---

.left-column[
  ## Should you optimize?
  ## Optimize hotspots
  ## Optimized at which levels?
]
.right-column[
.pull-left[
-  whole programs (Nuitka, Shed Skin) 

-  interpreter compiling slowest loops (PyPy)

-  **modules (`cython`, `pythran`)**

-  **user-defined functions / methods (`numba`, `transonic`)**

-  **blocks of code (`transonic`)**

-  expressions (`numexpr`)

-  call compiled functions (`numpy` / Python)
]
.pull-right[

![](./images/noun_programming.svg)

![](./images/noun_terminal.svg)

![](./images/noun_module.svg)

![](./images/noun_function.svg)

![](./images/noun_equals.svg)

]
]

---

.left-column[
  ## Should you optimize?
  ## Optimize hotspots
  ## Optimized at which levels?
  ## Two-language ~~problem~~ power!
]
.right-column[
  <img src="./images/scipy_ecosystem.png" style="height: 20em"/>


  This strategy,
  - is the foundation for the **scientific Python ecosystem**

  - avoided _reinventing the wheel_
    <img src="./images/noun_wheel.svg" style="height: 1.5em">

  - means as a developer ...
]
---
class: center, middle, inverse

# Several design choices!

---

background-image: url(images/graph.svg)
background-size: contain
class: background

???
A variety of Python accelerators exists.
Different ...
  * levels of optimization.
  * targets.


---

background-image: url(images/graph_gray.svg)
background-size: contain
class: background

???
Focus on transonic. With v0.4.0 we support 3 backends, with most common
features implemented
  - Pythran
  - Cython
  - Numba

---
class: center, middle, inverse

# Introducing: Transonic!

Pure Python package (>= 3.6)<br/>to easily accelerate modern Python+Numpy code<br/>with different accelerators

<div align="middle">
    <a href="https://transonic.readthedocs.io">transonic.readthedocs.io</a>    
</div>

---

# What is Transonic, anyway?

- Keep your Python-Numpy code clean and "natural" 🧘

- Clean **type annotations** (🐍 3)

- Easily **mix** Python code and compiled functions

- Ahead-of-time (**AOT**) and just-in-time (**JIT**) modes

- **JIT for AOT** compilers (especially for Pythran)

- Accelerate **functions**, **methods** (of classes) and **blocks** of code


---
class: center, middle, inverse

# Few Transonic code examples

The following codes can be accelerated with Pythran, Cython and Numba.

---

### Ahead-of-time (AOT) compilation

```python
import numpy as np

from transonic import boost

T0 = "int[:, :]"
T1 = "int[:]"

@boost
def row_sum(arr: T0, columns: T1):
    return arr.T[columns].sum(0)

@boost(boundscheck=False, wraparound=False)
def row_sum_loops(arr: T0, columns: T1):
    # locals type annotations are used only for Cython
    i: int
    j: int
    sum_: int
    res: "int[]" = np.empty(arr.shape[0], dtype=arr.dtype)
    for i in range(arr.shape[0]):
        sum_ = 0
        for j in range(columns.shape[0]):
            sum_ += arr[i, columns[j]]
        res[i] = sum_
    return res
```

AOT extensions can be produced via `setup.py` or using `transonic` CLI tool.

---
### Ahead-of-time compilation: how it works


```sh
❯ transonic -b python row_sum_boost.py
❯ transonic -b cython row_sum_boost.py
❯ transonic -b numba row_sum_boost.py
❯ transonic -b pythran row_sum_boost.py -af "-march=native -DUSE_XSIMD"
```

Transpiles and compiles (except for `python` and `numba` backends).
<pre>
<code>
├── __cython__
│   ├── build
│   │   └── temp.linux-x86_64-3.7
│   │       └── row_sum_boost_6b289bee8997c169d42490e866e21dbd.o
│   ├── row_sum_boost_6b289bee8997c169d42490e866e21dbd.cpython-37m-x86_64-linux-gnu.so
│   ├── row_sum_boost.pxd
│   └── row_sum_boost.py
├── __numba__
│   ├── row_sum_boost_31eb1043ac479242f9e0bada0fb8eb54.py
│   └── row_sum_boost.py
├── __python__
│   ├── row_sum_boost_ec5f7fc916224570e5f3daada7586404.py
│   └── row_sum_boost.py
├── __pythran__
│   ├── row_sum_boost_96475812cecd0831dffa8a52d385765c.cpython-37m-x86_64-linux-gnu.so
│   ├── row_sum_boost.py
│   └── row_sum_boost.pythran
└── row_sum_boost.py
</code>
</pre>

---

### Just-in-time compilation

```python
import numpy as np

from transonic import jit

def add(a, b):
    return a + b

@jit
def func(a, b):
    return np.exp(a) * b * add(a, b)
```

---

### Type annotations

Like C++ templates

```python
import numpy as np
from transonic import Type, NDim, Array, boost

T = Type(int, float, np.complex128)
N = NDim(1, 2, 3)

A = Array[T, N]
A1 = Array[np.float32, N + 1]

@boost
def compute(a: A, b: A, c: T, d: A1):
    ...
```

---

### `inline` functions

```python
from transonic import boost

T = int

@boost(inline=True)
def add(a: T, b: T) -> T:
    return a + b

@boost
def use_add(n: int = 10000):
    _: int
    for _ in range(n):
        tmp = add(tmp, 1)
    return tmp

```

---

### Accelerate methods of classes

```python
from transonic import boost

@boost
class MyClass:
    attr: int
    
    @boost
    def numerical_kernel(self, arg: int):
        return self.attr + arg
```

---

### Benchmark utilties
Either using `TRANSONIC_BACKEND={pythran,numba,cython}` environment variable on functions with `@jit` decorator; or...
.right-column[
```python
import numpy as np
from transonic import jit, wait_for_all_extensions
from transonic.util import print_versions, timeit_verbose

def fxfy(ft, fn, theta):
    sin_theta = np.sin(theta)
    cos_theta = np.cos(theta)
    fx = cos_theta * ft - sin_theta * fn
    fy = sin_theta * ft + cos_theta * fn
    return fx, fy

fxfy_pythran = jit(backend="pythran", native=True, xsimd=True)(fxfy)
fxfy_numba = jit(backend="numba")(fxfy)
```
```python
print_versions()
# warmup
fxfy_pythran(ft, fv, theta); fxfy_numba(ft, fv, theta); wait_for_all_extensions()

theta = np.linspace(0, 2 * np.pi, 10000); ft = 2.5 * theta; fv = 1.5 * theta;
loc = locals()
norm = timeit_verbose("fxfy(ft, fv, theta)", globals=loc)
for backend in ("numba", "pythran"):
    timeit_verbose(f"fxfy_{backend}(ft, fv, theta)", globals=loc, norm=norm)

```
]
.left-column[

```
Transonic 0.4.1
Pythran 0.9.3post1
Numba 0.46.0
Cython 0.29.13

INFO: Schedule pythranization
compile extension

fxfy         : 1.000 * norm
norm = 6.90e-04 s
fxfy_numba   : 0.952 * norm
fxfy_pythran : 0.152 * norm
```
]

---

# Why Transonic ?

### Yet another Python accelerator!? 

*<div align="middle"> Not really! </div>*

We are trying to fix some issues of our community:

- Incompatible accelerators

- A bridge to diversify away from Cython

- Pythran not as used/supported as it should

---

# Just a glimpse of the performance landscape

You can also speedup Python with...

### Fine-grain parallelism

  - processes: `multiprocessing`, `mpi4py`...
  - threads: `threading`, `concurrent.futures`, `asyncio`, OpenMP ...
  - GPGPU: OpenCL, CUDA

### Coarse-grain parallelism

NumPy-like arrays: `TensorFlow`, `PyTorch`, `dask.array`, `ArrayFire`...
Unification efforts:

- [NumPy enhancement proposals](https://numpy.org/neps/): `NEP 18`, `NEP 22`
- `uarray` .red[*]

Could `transonic` be part of the solution?

.footnote-cite[.red[*]
  <span style="font-variant:small-caps;">T. Oliphant</span> <i>Standardizing arrays -- Microsoft Presentation</i>. URL: <a href="https://www.slideshare.net/teoliphant/standardizing-arrays-microsoft-presentation">https://www.slideshare.net/teoliphant/standardizing-arrays-microsoft-presentation</a>
  <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=presentation&amp;rft.title=Standardizing%20arrays%20--%20Microsoft%20Presentation&amp;rft.description=Explanation%20of%20uarray%20and%20the%20array%20standardization%20project&amp;rft.identifier=https%3A%2F%2Fwww.slideshare.net%2Fteoliphant%2Fstandardizing-arrays-microsoft-presentation&amp;rft.aulast=Travis%20Oliphant&amp;rft.au=Travis%20Oliphant"></span>
]


---
class:center,middle,inverse

# Thank you for your attention!

### Any questions?
![](./images/noun_questions_inv.svg)

## slides: [ashwinvis.github.io/pyconse2019](https://ashwinvis.github.io/pyconse2019.html)

<div align="left">

Feedback appreciated!<br/>
<ul>
<li> docs: <a href="https://transonic.readthedocs.io">transonic.readthedocs.io</a>
<li> vision: <a href="https://fluiddyn.bitbucket.io/transonic-vision.html">fluiddyn.bitbucket.io/transonic-vision.html</a>
<li> github: <a href="https://github.com/fluiddyn/transonic">github.com/fluiddyn/transonic</a>
</ul>
</div>

