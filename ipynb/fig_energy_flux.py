import matplotlib
import matplotlib.pyplot as plt
from matplotlib.patches import Circle, Wedge, Polygon
from matplotlib.collections import PatchCollection
from math import pi
import numpy as np

matplotlib.rcParams['text.latex.preamble'] = [r"\usepackage{amsmath}"]
plt.rc('text', usetex=True)

fig = plt.figure(figsize=(10,5))
fig.subplots_adjust(right=5/10)
ax = fig.add_subplot(111)
circle1 = Circle((0, 0), pi/2)
circle2 = Circle((0, 0), pi/1.9)
circle3 = Circle((0, 0), pi * 2)
patches = [circle3, circle2, circle1]
p = PatchCollection(patches)#, alpha=0.4)
colors = np.array([54, 50, 20])
p.set_array(colors)
ax.add_collection(p)

arror_r = pi / 2**1.5
ax.arrow(arror_r, arror_r, 0.3, 0.3, head_width=0.05, head_length=0.1, fc='k', ec='k')
tex = r'$\Pi(k_\rho) = \sum\limits_{k_\rho \geq \sqrt{k_x^2 + k_y^2}} T(k_x, k_y)$'
ax.text(0.9, 1.2, tex, fontsize=14, va='bottom', rotation=45)

# plt.rc('text', usetex=False)
tex = r'''$T=T_K + T_A$
$T_K=-\frac{1}{2}ik_i(\hat{u_j}\widehat{u_iu_j}^* - \hat{u_j}^*\widehat{u_iu_j})$
$T_A=-\frac{1}{2}ik_i(\hat{\phi}\widehat{u_i \phi}^* - \hat{\phi}^*\widehat{u_i\phi})$'''
ax.text(pi + 0.2, pi/2, tex, fontsize=18)

tex = r'''$\Pi=\Pi_K + \Pi_A$
$\Pi=\Pi_{VVV} + \Pi_{VVW} + \Pi_{VWW} + \Pi_{WWW}$'''

ax.text(pi + 0.2, pi/4, tex, fontsize=18)
ax.set_xlabel(r'$k_x$')
ax.set_ylabel(r'$k_y$')
ax.set_ylim(0, pi)
ax.set_xlim(0, pi)
plt.show()
