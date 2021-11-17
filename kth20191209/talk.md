class: center, middle

# Status of ABL implementation in Nek5000

## [github.com/exabl/eturb](https://github.com/exabl/eturb)

<img src="./images/dp_kth.svg" style="height: 3em;"/>
<img src="./images/dp_su.gif" style="height: 3em;"/>


<div style="font-size: 0.8em;">
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img
alt="Creative Commons License" style="border-width:0; height: 1em;"
src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>&nbsp;
This presentation is licensed under a 
<a rel="license"
href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution
4.0 International License</a>
</div>

???

- Good morning all!
- Now I will present my talk titled ...

---

.pull-left[
## `$ whoami`

<img src="./images/dp_avmo.jpg" style="height: 8em;"/>

- **Ashwin Vishnu Mohanan ([fluid.quest](https://fluid.quest)**)

  - Postdoctoral researcher at MISU, SU (October 2019 - now)

  - Ph.D. in Engineering Mechanics, KTH (September 2019)

]

.pull-right[

## `$ stat`


- So far ...
  - General overview of the problem description and literature from Gunilla
  - Crash course on Nek5000 from Adam
  - Discussion with Geert on the current implementation
  - Executed the code, as it is, on my work laptop
  - Studying ABL implementation in Nek5000 by Luigi

- Learning ...
  - Literature review: GABLS and similar studies of the ABL
  - Monin-Obukhov similarity hypothesis and other boundary conditions
  - Nek5000 from a user perspective
  - LES using filters / Smagorinsky

]

???

- My **name** is Ashwin


---
layout: false

# What we have now

.left-column[

### Constant Smagorinsky LES model

]
.right-column[

* Implemented as variable total viscosity = sum of molecular and eddy viscosity,
  $$
  \nu = \nu_0 + \nu_t(\mathbf{x}, t), \nu_t = (C_S \Delta)^2 |\nabla^S \tilde{u}|
  $$

  where,
  $\tilde{u}$ is the resolved velocity and
  $\nabla^S \tilde{u} = \frac{1}{2} \left( \delta_i \tilde{u}_j + \delta_j \tilde{u}_i \right)$.

* Coefficient, $C_s$ wall damped (Mason & Thompson, 1991, JFM) as:

  $$\dfrac{1}{C_s^n} = \dfrac{1}{C_0^n} + \left[ \frac{\Delta}{\kappa (y + y_0)} \right]^n$$

  ```fortran
  #define KAPPA 0.41
  #define y0 0.0001
  #define NPOW 0.5
  #define C0 0.19
  ```

* Grid filter scale $\Delta$ set as geometric mean of grid spacing: $ \Delta = (\Delta_x \Delta_y \Delta_z)^{1/3} $

* Initialized $\nu_t(\mathbf{x}, t=0) = \nu_0 = 1e-10$.

]

---
# What we have now

.left-column[

### Constant Smagorinsky LES model
### Boundary conditions

]
.right-column[

* Inflow, outflow, spanwise: **periodic**

* Far-field / top: right now: **symmetry**.
  $$
     {\bf u} \cdot {\bf \hat n} = 0\ , (\nabla {\bf u} \cdot {\bf \hat t})\cdot {\bf \hat n} = 0
 $$
 Adam suggested **outflow, normal**?

* Wall: no penetration, Moeng's (1984, JAS) rough wall boundary condition.

  ![](images/moeng_boundary_cond.png)

  In the code
  * $\tau_{xy} = ...$
  * $\tau_{zy} = ...$
  prescribed, normal stress $\sigma_y = 0$

]

---
# What we have now

.left-column[

### Constant Smagorinsky LES model
### Boundary conditions
### Filtering

]
.right-column[

* From the report: *... applied to **attenuate** the highest Legendre polynomial modes of the spectral element model, with the objective of **controlling the log-layer mismatch
**...*. Filter cutoff ratio $k_0 / N = 0.5$, and filter weight $\gamma = 12.0$

![](images/low_pass_filter_vs_gamma.png)

]
---

# Tunables

* Order of spectral elements: 8

* Choose between staggered and collocated grid for pressure and velocity. Right now: **staggered**.


```fortran
      parameter (lx1=8)                ! GLL points per element along each direction
      parameter (lxd=12)               ! GL  points for over-integration (dealiasing)
      parameter (lx2=lx1-2)            ! GLL points for pressure (lx1 or lx1-2)
```


* Grid dimensions, $L_x, L_y, L_z = (2\pi, 1, \pi)$ discretized into $(30, 24, 20)$ elements.

* Time-stepping: BDF-EXT3 or Runge-Kutta. Right now: ??. CFL=0.8

* Variety of [boundary condition primitives](https://nek5000.github.io/NekDoc/problem_setup/boundary_conditions.html).

* Better (less ad-hoc) filtering (for example: Lu L., Nazarov M., Fischer P. 2019; Nazarov M., 2013)

---

# What is missing

* *Difficulties in maintaining turbulence*

* Governing equation for the scalar (buoyancy / potential temperature)

* Turbulent Prandtl number

* Coriolis force
