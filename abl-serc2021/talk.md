class: center, middle

# ABL project: progress so far

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

---

# In short

.pull-left[
## Milestones so far

- **Channel flow**: Neutral stratification; Open and closed; DNS and LES; with and without rotation (Coriolis force)

- **LES subgrid scale models**: constant Smagorinsky, Vreman, shear improved Smagorinsky

- Outflow (top) sponge layer

- DNS with thermal BC - constant and dynamic fluxes at the bottom (Moeng-like)
]

.pull-right[
![](./images/mean_ut_moeng_bc_sans_correction.png)
]

---

# In short

## What's next

- Implement GABLS1 case of moderately stable stratified boundary layer

  - Adding stability functions $\phi_m(z/L)$ and $\phi_h(z/L)$ into the boundary
    conditions.
  - Improved outflow (top) boundary condition?

  - SGS models for thermal diffusion. Simple turbulent Prandtl number based or
    more versatile ones. **Requires**: variable properties (both momentum and
    thermal diffusivity simultaneously) bug fix in Nek5000.

- Bug fixes on penalty

---

.pull-left[

# GABLS1 case description

- <https://gabls.metoffice.com/>, Beare et al. (2006) Boundary-Layer Meteorology
- Domain: 400m × 400m × 400m
- Resolution between 12.5 m and 1m
- Geostrophic wind, $U_g = 8$ m /s
- Coriolis parameter, $f = 1.39e-04$
- Initial condition:
  - constant pot. temperature at 265K for $0 < z < 100$ m, then increasing at 0.01 K/m.
  - random noise perturbations on both velocity and pot. temperature fields.


]


.pull-right[
![](./images/gabls1_wind.gif)
![](./images/gabls1_temp.gif)
]


---

# The wall model

We wish to model:

- Turbulent momentum flux / shear stress $\tau_{ij} = -\rho \overline{u'_iu'_j } \approx - \rho (u'w' + v'w')$
- Turbulent heat flux $q_* \approx \overline{w'\theta'}$

- Boundary condition, following Moeng (1984)

![](./images/moeng_bc_temp.png)

See Gadde et al. (2020) Boundary Layer Meteorology

---

# Monin-Obhukhov Similarity Theory (MOST)

## Governing parameters and assumptions

Turbulence in the surface layer is determined by:

1. length scale \\( \sim z \\)
1. turbulent momentum flux or stress at surface \\( \tau = \rho u_*^2 \\)
1. turbulent temperature flux at surface \\( \sim Q_0 \\)
1. buoyancy parameter \\(\sim g/\theta_0 \\)
1. momentum flux or shear \\( \sim \partial U / \partial z \\)

## Buckingham Pi theorem

- \\( m = 5 \\) parameters
- \\( n = 3 \\) dimensions: length, time, temperature

implies the model can be rewritten using \\( m - n = 2 \\) independent
dimensionless quantities.


---

## M-O similarity functions

.pull-left[

Similarity variable taken as \\( z/L \\), where *Monin-Obukhov length*:

\\[ L = -u_*^3 \theta_0 / \kappa g Q_0 \\]

![](./images/most_mo_func1.png)
![](./images/most_mo_func2.png)

\\( L \\) being a function of the turbulence statistic \\( u_* \\) restricts
a closed form solution of the M-O functions.


]
.pull-right[

The 1968 Kansas experiment measured the similarity function for different z and
L and confirmed the similarity theory:

![](./images/most_mo_func.png)

]

---

## M-O functions and log-law

In **neutral** conditions, \\( z/L \to 0 \implies \phi_m \approx 1\\) and we recover
the classical log-law.

\\[
\frac{\partial U}{\partial z} = \frac{u_*}{\kappa z}
\\]

\\[
U(z) = \frac{u_*}{\kappa} \left[ \ln z - \ln z_0 \right]
\\]

Compare the term \\( \ln z_0 \\) to roughness parameter \\(B\\). For **stable**
and **unstable** regimes, curve fitting gives,

![](./images/most_fit1.png)

---

# Computing stability functions


* Stability parameter $z/L$ depends on the fluxes
  - Either we iterate between Obhukhov length and the fluxes get
    an agreement.
  - Issue when the SGS scale is too large then one can have the
    same flux ($q = w'\theta'$) for two different $z / L$.
* Or use one-to-one relation between flux and gradient Richardson number.

---
