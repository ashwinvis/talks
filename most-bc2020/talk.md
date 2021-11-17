class: center, middle

# Monin-Obukhov Similarity Theory as a Boundary Condition

## Ashwin Vishnu Mohanan

<!-- <img src="./images/dp_eturb.svg" style="height: 5em;"/> -->

### Slides: [fluid.quest/talks](https://fluid.quest/talks)

<img src="./images/dp_su.gif" style="height: 3em;"/>
<img src="./images/dp_kth.svg" style="height: 3em;"/>


<div style="font-size: 0.8em;">
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img
alt="Creative Commons License" style="border-width:0; height: 1em;"
src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>&nbsp;
All text in this presentation is licensed under a 
<a rel="license"
href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution
4.0 International License</a>. Images and screenshots are copyright material.
</div>

???

- Good morning all!
- Now I will present my talk titled ...
- Thank: SU for the opportunity to come here

---

layout: false

# Overview

.left-column[

## Recap

]
.right-column[

- Essential quantities: \\( \tau,\,u_* \\) 
- Log-law of the wall
- Effect of roughness

]

---

# Overview

.left-column[

## Recap
## As a boundary condition

]
.right-column[

- Roughness parameter \\( z_0 \\)
- Wall model

]

---
layout: false

## Recap


### Wall shear stress \\( \tau \\) and friction velocity \\( u_* \\)


.pull-left[

- Turbulent shear stress can be expressed as:

  \\[ \tau_{ij} = -\rho \overline{u_iu_j } \\]

  Reynolds stress tensor

- Friction velocity

\\[ u_* = \sqrt{\frac{ |\tau| }{\rho}} \\]

- Viscous length scale

\\[ \delta_\nu = \dfrac{\nu}{\text{friction velocity}} \\]

]

.pull-right[

![Courtesy: Wyngaard](./images/most_tau.png)

]


---


.pull-left[

## Observations from DNS of channel flows

\\[ \delta_v = \text{viscous length scale},\quad \delta = \text{displacement thickness} \\]

\\[ u^+ = \bar{U} / u_* , \quad  y^+ = y / \delta_v \\]


![Courtesy: Pope, Kim et al.](./images/most_log_law_dns.png)

]
.pull-right[

In general (without any assumptions), on dimensional grounds,

\\[ 
\frac{\partial \bar U}{\partial y} = \frac{u_*}{y} \Phi(y^+, y/\delta)
\\]

## Log-law of the wall

von Karman (1930) postulated that for 
- high Reynolds number
- \\( y / \delta \ll 1 \\)
- \\(y^+ \gg 1 \\)

**negligible viscous effects**, which implies velocity profile is free from
dependence of \\( \nu \\) or \\( y/\delta_v \\)

\\[
\Phi_1 = \frac{1}{\kappa} \implies
\frac{\partial u^+}{\partial y^+} = \frac{1}{\kappa y^+}  \implies
u^+ = \frac{1}{\kappa} \ln y^+ + B
\\]

]

---

.pull-left[

## Effect of roughness

Roughness influences the "intercept" \\( B \\)

\\[ 
u^+ = \frac{1}{\kappa} \ln y^+ + B
\\]

### Monin-Obukhov similarity theory

- Monin-Obukhov similarity theory incorporates stratification effects with a
correction \\( \phi_m \\)

In **neutral** conditions, \\( \phi_m \approx 1\\) and we recover
the classical log-law.

\\[
\frac{\partial U}{\partial z} = \frac{u_*}{\kappa z}
\\]

\\[
U(z) = \frac{u_*}{\kappa} \left[ \ln z - \ln z_0 \right]
\\]
]
.pull-right[
![](./images/log_law_roughness.png)

### As a stress boundary condition (Moeng 1984)


\\[
\tau = \rho u_*^2 = \rho \left[ \frac{\kappa U}{\ln (z/z_0)}\right]^2
\\]

evaluated at \\(z = \frac{\Delta_z}{2} \\) half grid height

### What if...

- Mesh starts at \\( z_0 \\) where on average \\(\bar{U} \to 0 \\)
- Mesh coordinates are expressed with \\( z_{ref} \\)


]

---

.pull-left[
![](./images/log_law_zref.png)
]

.pull-right[
![](./images/log_law_zref2.png)
]
---

## Moeng's variant

.pull-left[
![](./images/most_moeng.png)
]

.pull-right[

#### Implementation in Nek5000 for neutral conditions

\\[
\tau = \rho u_*^2 = \rho \left[ \frac{\kappa U}{\ln (z/z_0)}\right]^2
\\]

which evaluated at \\( z = \frac{1}{2} z_1 \\)

```fortran
! --------Wall normal cordinate: `y`
       KAPPA = 0.41
       y0 = 0.1  ! << y_max
! --------Calculate Moeng's model parameters
       ie = gllel(eg)
       u1_2 = (vx(ix,2,iz,ie) + vx(ix,1,iz,ie))/2
       w1_2 = (vz(ix,2,iz,ie) + vz(ix,1,iz,ie))/2
       absu = sqrt(u1_2**2 + w1_2**2)
       y1_2 = (ym1(ix,2,iz,ie) + ym1(ix,1,iz,ie))/2

! --------Calculate Stresses
       trx = -KAPPA**2*(u1_2*absu)/(log(y1_2/y0)**2)
       try = 0.0
       trz = -KAPPA**2*(w1_2*absu)/(log(y1_2/y0)**2)
```

]


---
class: center, middle, inverse

# Thank you for your attention!

### Any questions?
![](./images/noun_questions_inv.svg)

## slides will be uploaded: [ashwin.info.tm/talks](https://ashwin.info.tm/talks.html)

---

# References

1. Pope, S.B. Turbulent Flows. Cambridge University Press, 2000.

1. Wyngaard, John C. Turbulence in the Atmosphere. Cambridge: Cambridge University Press, 2010. https://doi.org/10.1017/CBO9780511840524.

1. Monin, A S, and A M Obukhov. “Basic Laws of Turbulent Mixing in the Surface Layer of the Atmosphere,” 1954, 30.

1. Moeng, Chin-Hoh. “A Large-Eddy-Simulation Model for the Study of Planetary Boundary-Layer Turbulence.” Journal of the Atmospheric Sciences 41, no. 13 (July 1, 1984): 2052–62. https://doi.org/10.1175/1520-0469(1984)041<2052:ALESMF>2.0.CO;2.

